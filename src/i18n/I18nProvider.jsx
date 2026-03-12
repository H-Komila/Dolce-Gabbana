import React, { createContext, useContext, useMemo, useState } from "react";
import { DEFAULT_LANG, SUPPORTED_LANGS, translations } from "./translations";

const STORAGE_KEY = "app_lang";

function isSupportedLang(value) {
  return SUPPORTED_LANGS.includes(value);
}

function getFromStorage() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return isSupportedLang(value) ? value : null;
  } catch {
    return null;
  }
}

function setToStorage(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // ignore
  }
}

function getNested(obj, path) {
  const parts = path.split(".");
  let cur = obj;
  for (const p of parts) {
    if (!cur || typeof cur !== "object") return undefined;
    cur = cur[p];
  }
  return cur;
}

function interpolate(template, vars) {
  if (typeof template !== "string") return template;
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) =>
    Object.prototype.hasOwnProperty.call(vars, k) ? String(vars[k]) : `{${k}}`
  );
}

const I18nContext = createContext(null);

export function I18nProvider({ children, defaultLang = DEFAULT_LANG }) {
  const [lang, setLangState] = useState(() => getFromStorage() ?? defaultLang);

  const setLang = (next) => {
    if (!isSupportedLang(next)) return;
    setLangState(next);
    setToStorage(next);
  };

  const t = useMemo(() => {
    return (key, vars) => {
      const value =
        getNested(translations?.[lang], key) ??
        getNested(translations?.en, key) ??
        key;
      return interpolate(value, vars);
    };
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within <I18nProvider />");
  }
  return ctx;
}

