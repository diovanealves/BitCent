import Area from "../Common/Area";
import ResponsiveImage from "../Common/ResponsiveImage";
import Slogan from "./Slogan";

import MainImage from "../../../../public/MainImage.jpg";

export default function Featured() {
  return (
    <Area id="Featured" className="flex-1">
      <div className="h-[550px] flex flex-col md:flex-row justify-around items-center">
        <Slogan />
        <ResponsiveImage className="rotate-2" image={MainImage} />
      </div>
    </Area>
  );
}
