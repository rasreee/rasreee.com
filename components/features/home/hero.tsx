import { SocialLinks } from "components/ui/social/social-links";
import { profileConfig } from "config/profile.config";
import { site } from "config/site.config";

const Hero: React.FC = () => {
  return (
    <section className="flex min-h-[22rem]">
      <div className="my-auto space-y-6">
        <div className="space-y-3  desktop:space-y-4">
          <div className="text-plum-400">
            <span className="font-mono text-sm desktop:text-base">
              Hi, my name is
            </span>
          </div>
          <h1>{site.author}</h1>
        </div>
        <p className="text-base leading-relaxed aboveMobile:text-xl">
          {profileConfig.description}
        </p>
        <SocialLinks />
      </div>
    </section>
  );
};

export default Hero;
