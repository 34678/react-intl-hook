import http from "axios";

const languageMap = {
  ar: "ar",
  en: "en",
  zh: "zh",
  hi: "hi",
  "zh-Hans": "zh"
};

export function getModule(moduleMap = {}, pathname = "") {
  return moduleMap[pathname];
}

/**
 *
 * @param {*} moduleMap 路径和使用多语言模块的对应
 * @param {*} pathname 路径
 * @param {*} i18nproject 大的多语言项目
 * @param {*} locale 使用语言
 */
export async function getMessages(
  moduleMap = {},
  pathname = "",
  i18nproject = "",
  locale = "zh"
) {
  const module = getModule(moduleMap, pathname);
  if (module === undefined) {
    return {};
  }
  console.log(
    "url",
    `https://multi-lang.yy.com/multiLangBig/${i18nproject}/${module}/${languageMap[locale]}.json`
  );
  const start = Date.now();
  const url = `https://multi-lang.yy.com/multiLangBig/${i18nproject}/${module}/${languageMap[locale]}.json`;
  console.log("url", url);
  const res = await http.get(url);
  const end = Date.now();
  console.log(`start:${start} end:${end}`);
  return res.data.data;
}
