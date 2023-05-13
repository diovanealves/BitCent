import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandYoutube,
} from "@tabler/icons-react";
import SocialNetworking from "./SocialNetworking";

export function SocialNetworkingLinks() {
  return (
    <div className="flex">
      <SocialNetworking
        icon={<IconBrandYoutube />}
        url="https://www.youtube.com/@cod3r"
      />
      <SocialNetworking
        icon={<IconBrandInstagram />}
        url="https://www.youtube.com/@cod3r"
      />
      <SocialNetworking
        icon={<IconBrandFacebook />}
        url="https://www.youtube.com/@cod3r"
      />
      <SocialNetworking
        icon={<IconBrandGithub />}
        url="https://www.youtube.com/@cod3r"
      />
    </div>
  );
}
