import features from "./features.json";

export default {
  paths() {
    return JSON.parse(JSON.stringify(features))
  },
};
