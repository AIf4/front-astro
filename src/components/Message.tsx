import type { MessageInterface } from "../utils/interfaces";

export default function Message({ name, message, me, date }: MessageInterface) {
  return (
    <>
      <div
        className={`rounded-md flex items-center text-left ${
          !me ? "justify-start" : "justify-end"
        } border-slate-300`}
      >
        <div className="p-2 rounded-md flex items-start">
          {!me ? (
            <img
              src="https://wallpapers.com/images/hd/cool-profile-picture-paper-bag-head-4co57dtwk64fb7lv.jpg"
              alt="profile"
              className="w-10 h-10 rounded-full mr-2 mt-2"
            />
          ) : null}
          <span
            className={`px-4 py-2 space-y-0  ${
              !me ? "bg-slate-600" : "bg-slate-700"
            } rounded-md`}
          >
            {!me ? <h4 className="text-md font-bold">{name}</h4> : null}
            <small className="text-slate-400 text-justify text-lg">
              {message}{" "}
            </small>
            <div className="text-right text-sm pr-2 pl-4 py-1 text-slate-500">
              {date}
            </div>
          </span>
        </div>
      </div>
    </>
  );
}
