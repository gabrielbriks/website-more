"use client";

import { i18n, type Locale } from "@/i18n-config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

interface LocaleSwitcherParams {
  langCurrent: Locale;
}

export default function LocaleSwitcher({ langCurrent }: LocaleSwitcherParams) {
  const pathName = usePathname();
  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="font-semibold text-1xl">
      <p>Locale switcher:</p>
      <ul className="flex gap-4 m-4">
        {i18n.locales.map((locale) => {
          return (
            <li key={locale} className="">
              <Link
                href={redirectedPathName(locale)}
                className={twMerge(
                  "bg-pink-800 text-white rounded-md p-2",
                  locale == langCurrent ? "bg-pink-600 border border-white" : ""
                )}
              >
                {locale}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
