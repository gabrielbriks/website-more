import Counter from "@/components/counter";
import LocaleSwitcher from "@/components/locale-switcher";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="container py-24">
      <LocaleSwitcher langCurrent={lang} />
      <h2 className="text-2xl py-4 flex gap-2">
        Current locale:
        <span className="font-semibold uppercase">{lang}</span>
      </h2>
      <p className="text-base text-md">
        This text is rendered on the server:{" "}
        <span className="font-semibold text-2xl">
          {dictionary["server-component"].welcome}
        </span>
      </p>
      <Counter dictionary={dictionary.counter} />
    </div>
  );
}
