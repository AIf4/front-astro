import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "./ui/card";
import {
  FaGear,
  FaRightFromBracket,
  FaSliders,
  FaUserPen,
} from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/hooks/use-toast";
import api from "@/lib/axios-config";
import { navigate } from "astro/virtual-modules/transitions-router.js";
import { Navigate } from "react-router";

const Channels = () => {
  const handleLogout = async () => {
    console.log("logout");
    try {
      await api.post("/api/auth/logout", {});
      toast({
        title: "Logout",
        description: "You have been logged out",
        variant: "default",
      });
      navigate("/auth/login-user");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditProfile = () => {
    Navigate({ to: "/edit-profile" });
  };
  return (
    <div className="px-2 py-4 flex flex-col h-screen ">
      <span className="text-2xl font-bold">Channels</span>
      <ul className="mt-8">
        <li className="mb-4">
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700 flex justify-between items-center chats"
          >
            <span className="font-bold">#general</span>
          </a>
        </li>
      </ul>

      <div className="mt-auto">
        <Card className="bg-slate-400">
          <CardContent className="p-2">
            <div className="flex justify-between w-full items-center">
              <div className="flex justify-start">
                <div>
                  <Avatar>
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                </div>
                <div className="pl-4">
                  <span>Alan</span>
                  <p className="text-xs text-gray-950">#Admin</p>
                </div>
              </div>
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <FaSliders className="text-sm text-gray-800" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    side="right"
                    className="mb-[-3vh] ml-2 w-44"
                  >
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onClick={handleEditProfile}
                    >
                      <div className="flex justify-between w-full items-center">
                        <div>Edit profile</div>{" "}
                        <div>
                          <FaUserPen />
                        </div>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="cursor-pointer"
                    >
                      <div className="flex justify-between w-full items-center">
                        <div>Logout</div>
                        <div>
                          <FaRightFromBracket />
                        </div>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default Channels;
