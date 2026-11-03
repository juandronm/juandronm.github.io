import { en } from "./en";
import { es } from "./es";
import { tr } from "./tr";

export const ui = { en, es, tr };
export type Lang = keyof typeof ui;
export const langs = Object.keys(ui) as Lang[];

export const getLang = (locale: string | undefined): Lang =>
  locale && locale in ui ? (locale as Lang) : "en";

export const t = (locale: string | undefined) => ui[getLang(locale)];

export const pathFor = (lang: Lang) => (lang === "en" ? "/" : `/${lang}/`);
