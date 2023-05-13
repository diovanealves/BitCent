import Image from "next/image";

interface ResponsiveImageProps {
  image: any;
  className?: string;
}

export default function ResponsiveImage(props: ResponsiveImageProps) {
  return (
    <Image
      src={props.image}
      alt="Imagem"
      className={`w-[350px] h-[365px] lg:w-[550px] rounded-lg object-cover ${
        props.className ?? ""
      }`}
    />
  );
}
