import ExternalLink from "components/ui/external-link";
import { socials } from "config/socials.config";
import SocialIcon from "./social-icon";

export const SocialLinks: React.FC = () => {
  return (
    <ul className="flex items-center gap-6">
      {Object.values(socials).map((social) => (
        <li key={`${social.type}-social-link`}>
          <ExternalLink
            className="inline-block p-0 text-hint transition-all hover:-translate-y-0.5 hover:text-primary-400"
            href={social.href}
          >
            <SocialIcon className="icon-sm" type={social.type} />
          </ExternalLink>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
