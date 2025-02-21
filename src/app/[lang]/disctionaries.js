import "server-only";
const disctionaries = {
  en: () => import("./disctionaries/en.json").then((module) => module.default),
  bn: () => import("./disctionaries/bn.json").then((module) => module.default),
};

export const getDisctionaries = async (lang) => disctionaries[lang]();
