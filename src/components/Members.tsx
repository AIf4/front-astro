
import isMemberOpen from "@/store/navbar";
import type { MembersInterface } from "../utils/interfaces";


interface Props {
  members: MembersInterface[];
}

export default function Members({members}: Props) {
  const { isOpen } = isMemberOpen();
  
  return (
    <div className={`w-1/5 pr-3 pt-4 ${!isOpen? "hidden " : ""}`}>
      <div className="bg-slate-400 py-4 px-2 rounded-md text-right h-[89vh] overflow-y-auto">
        <div className="text-slate-700 text-lg font-bold">Members</div>

        {members.map(({ id, name, image }) => (
          <div
            key={id}
            className={`p-2 rounded-md bg-slate-600 shadow-md border-slate-300 flex justify-between items-center mt-2`}
          >
            <span className="text-sm">{name}</span>
            <img src={`${image}`} alt="profile" className="w-8 h-8 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
