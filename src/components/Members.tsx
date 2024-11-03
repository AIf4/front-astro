import { useStore } from "@nanostores/preact";
import { isMemberOpen } from "../store/navbar";
import type { MembersInterface } from "../utils/interfaces";

interface Props {
  members: MembersInterface[];
}

export default function Members({members}: Props) {
  const $isCartOpen = useStore(isMemberOpen);
  console.log("desde el componente de miembros" + $isCartOpen);
  return (
    <div class={`w-1/5 pr-3 pt-4 ${!$isCartOpen ? "hidden " : ""}`}>
      <div class="bg-slate-400 py-4 px-2 rounded-md text-right h-[89vh] overflow-y-auto">
        <div class="text-slate-700 text-lg font-bold">Members</div>

        {members.map(({ name, image }) => (
          <div
            class={`p-2 rounded-md bg-slate-600 shadow-md border-slate-300 flex justify-between items-center mt-2`}
          >
            <span class="text-sm">{name}</span>
            <img src={`${image}`} alt="profile" class="w-8 h-8 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
