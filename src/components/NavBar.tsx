import { useStore } from "@nanostores/preact";
import { isMemberOpen } from "../store/navbar";

export default function NavBar() {

    const $isMemberOpen = useStore(isMemberOpen);

  function openMembers() {
    console.log("open members");
  }

  return (
    <nav class="w-full top-0 bg-slate-600 h-12 py-1 px-4 flex items-center">
      <div class="w-1/2 flex justify-start items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6 text-gray-100"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          ></path>
        </svg>

        <span class="pl-2"># Name Chanel</span>
        <small class="text-slate-400 pl-2">sub title</small>
      </div>
      <div class="w-1/2 flex justify-end gap-2">
        <div class="relative">
          <input
            type="text"
            placeholder="search ..."
            class="w-5/6 rounded-l-md text-slate-200 placeholder:text-slate-200 bg-slate-400 py-1 px-2 text-sm shadow-sm"
            name=""
            id=""
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5 inset-y-0 absolute end-0 text-slate-200 h-7 py-1 w-1/6 bg-slate-400 rounded-r-md"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            ></path>
          </svg>
        </div>
        <div
          class="p-1 rounded-full bg-slate-400 shadow-md cursor-pointer"
          onClick={()=> isMemberOpen.set(!$isMemberOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5 text-slate-800"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
            ></path>
          </svg>
        </div>
      </div>
    </nav>
  );
}
