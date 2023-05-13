import User from "@/data/constants/FakeUser";

export default function UserInformation() {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <div className="flex flex-col select-none text-right">
        <span className="text-sm font-bold text-zinc-200">{User?.name}</span>
        <span className="text-xs text-zinc-200">{User?.email}</span>
      </div>
    </div>
  );
}
