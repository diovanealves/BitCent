import Image from "next/image";

interface TestimonyProps {
  avatar: string;
  name: string;
  title: string;
  text: string;
  highlight?: boolean;
}

export default function Testimony(props: TestimonyProps) {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-3 bg-zinc-800 p-7 rounded-xl hover:scale-105 duration-200 w-[350px] h-[300px] ${
        props.highlight && "xl:h-[350px]"
      }`}
    >
      <Image
        src={props.avatar}
        alt="Foto da pessoa que fez o depoimento"
        width={80}
        height={80}
        className={` max-w-[80px] max-h-[80px] object-cover
        rounded-tl-xl rounded-b-xl`}
      />
      <div className="flex flex-col items-center">
        <span className="text-xl font-black">{props.name}</span>
        <span className="text-sm text-zinc-400 font-thin">{props.title}</span>
      </div>
      <p className="text-center text-zinc-400">{props.text}</p>
    </div>
  );
}
