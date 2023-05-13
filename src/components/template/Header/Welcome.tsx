import User from "@/data/constants/FakeUser";

export default function Welcome() {
  return (
    <div className="text-white text-3xl font-black">
      Olá <span className="hidden sm:inline">{User?.name?.split("")}</span>
      👋
    </div>
  );
}
