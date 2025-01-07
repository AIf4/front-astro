import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback } from "@/components/ui/avatar";

const ProfileUser = () => {
  return (
    <div className="m-3 grid grid-cols-2 gap-4 w-full">
      <div className="flex items-center justify-between bg-slate-200 rounded-xl col-span-2 px-10 py-4">
        <Avatar style={{ width: "100px", height: "100px", fontSize: "40px" }}>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <div className="flex w-full flex-col px-10">
          <h1 className="text-2xl font-bold flex-row mb-1">Pedro Martinez</h1>
          <small className="text-md flex-row">#Admin</small>
        </div>

        <p className="text-white text-sm w-1/3">
          
        </p>
      </div>
    </div>
  );
};

export default ProfileUser;
