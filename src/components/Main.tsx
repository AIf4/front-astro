import AppRouter from "@/router/index-router";
import Channels from "@/components/Channels";
import Members from "@/components/Members";
import NavBar from "@/components/NavBar";

import type { MembersInterface } from "@/utils/interfaces";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Chat from "@/components/Chat";
import ProfileUser from "@/components/ProfileUser";

const Main = () => {
  <Router>
    <Routes>
      <Route path="/" element={<Chat />} />
      <Route path="/edit-profile" element={<ProfileUser />} />
    </Routes>
  </Router>
  
  const members: MembersInterface[] = [
    {
      id: 1,
      name: "Pedro",
      image:
        "https://wallpapers.com/images/hd/cool-profile-picture-paper-bag-head-4co57dtwk64fb7lv.jpg",
    },
    {
      id: 2,
      name: "Juanito",
      image:
        "https://wallpapers.com/images/hd/cool-profile-picture-paper-bag-head-4co57dtwk64fb7lv.jpg",
    },
  ];
  return (
    <main className="flex flex-wrap h-screen">
      <section className="w-1/6 border-r border-slate-300 bg-slate-600">
        <Channels />
      </section>
      <section className="w-5/6">
        <NavBar />
        <div className="flex">
          <AppRouter />
          <Members members={members} />
        </div>
      </section>
    </main>
  );
};

export default Main;