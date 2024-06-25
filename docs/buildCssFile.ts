type Declaration = {
  type: string;
  property: string;
  value: string;
};

type Rule = {
  type: string;
  selectors: string[];
  declarations: Declaration[];
};

const toCSSDeclaration = (property: string, value: string): Declaration => {
  return {
    type: "declaration",
    property,
    value,
  };
};

const toCSSRule = (
  declarations: Declaration[],
  selectors: string[] = [":root"],
): Rule => {
  return {
    type: "rule",
    selectors,
    declarations,
  };
};
