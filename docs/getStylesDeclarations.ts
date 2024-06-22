import { parse } from "css";
import type { KeyFrames, Rule, StyleRules, Declaration } from "css";
import fs from "node:fs";

type KeyFramesNames = Required<Pick<KeyFrames, "name">>[];

const IGNORE_LIST = new Set(["index.css", "normalize.css"]);

export const propertyNames = fs
  .readdirSync("src")
  .filter((v) => !IGNORE_LIST.has(v))
  .map((v) => v.replace(/.css$/, ""));

const isAtRuleArray = (rules: StyleRules["rules"]): rules is KeyFramesNames => {
  return rules.length > 1 && rules[0].type === "keyframes";
};

const isRulesArray = (rules: StyleRules["rules"][number]): rules is Rule => {
  return rules.type === "rule";
};

export const getStylesDeclarations = (filename: string) => {
  const file = fs.readFileSync(`src/${filename}.css`, "utf-8");
  const ast = parse(file).stylesheet;

  if (!ast) {
    throw new Error(`Failed to parse ${filename}.css`);
  }

  const rules = ast.rules;

  if (isAtRuleArray(rules)) {
    const animations = rules.map((v) => v.name);

    return animations;
  } else if (isRulesArray(rules[0])) {
    const declarations = rules[0].declarations;

    if (declarations) {
      const filtered = declarations.filter(
        (value) => value.type === "declaration",
      ) as Declaration[];

      const array = filtered.reduce((acc, curr) => {
        const currProp = curr.property!.slice(
          2,
          curr.property!.lastIndexOf("-"),
        ) as string;
        const item = {
          name: curr.property as string,
          value: curr.value as string,
        };

        if (!acc[currProp]) {
          acc[currProp] = [item];
        } else {
          acc[currProp].push(item);
        }

        return acc;
      }, {});

      return array;
    }
  } else {
    throw new Error(`Unexpected AST ${filename}.css`);
  }
};
