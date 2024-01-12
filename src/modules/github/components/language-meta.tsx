import type { GithubLanguage } from "modules/github/types";

type LanguageMetaProps = GithubLanguage;

export const LanguageMeta = ({ name, color }: LanguageMetaProps) => {
  return (
    <div className="flex items-center gap-2">
      <span className="block h-3 w-3 rounded-full">
        <style jsx>{`
          span {
            background-color: ${color};
          }
        `}</style>
      </span>
      <div className="align-middle text-sm leading-none">{name}</div>
    </div>
  );
};
