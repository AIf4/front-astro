import { useForm } from "react-hook-form";
import { FaEnvelope } from "react-icons/fa6";
import { Button } from "./ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "@/lib/axios-config";
import { toast } from "@/hooks/use-toast";
import { navigate } from "astro/virtual-modules/transitions-router.js";

const formLoginSchema = z.object({
  email: z
    .string({
      message: "El campo requerido",
    })
    .email({
      message: "El campo debe de ser un email válido",
    }),
  password: z.string({
    message: "El campo requerido",
  }),
});

const LoginUser = () => {
  const form = useForm<z.infer<typeof formLoginSchema>>({
    resolver: zodResolver(formLoginSchema as any),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (loginData: z.infer<typeof formLoginSchema>) => {
    try {
      const {
        data: { message },
      } = await api.post("/api/auth/login", loginData);
      console.log(message);
      toast({
        title: "Login Success",
        description: message,
        variant: "default",
      });
      return navigate("/", { history: "push" });
    } catch (error: any) {
      if (error.response) {
        // The client received a 4xx or 5xx error response
        toast({
          title: "Login Failed",
          description: "Your email or password is incorrect",
          variant: "destructive",
        });
      } else if (error.request) {
        // The client never received a response or the request was aborted
        toast({
          title: "Network error",
          description: "There was a network error",
          variant: "destructive",
        });
      } else {
        // Any other error
        toast({
          title: "Unknown error",
          description: "There was an unknown error",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="md:absolute lg:relative md:top-[2rem] lg:top-1 md:inset-0 lg:left-0 my-auto pt-16">
      <div className="mx-auto max-w-lg md:bg-gray-100 lg:p-2 md:p-8 lg:bg-transparent md:rounded-lg">
        <h1 className="text-3xl font-bold sm:text-3xl text-center">
          Get started today!
        </h1>

        <p className="mt-4 text-gray-500 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
          nulla eaque error neque ipsa culpa autem, at itaque nostrum!
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      subfixIcon={FaEnvelope}
                      placeholder="Enter email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Sign up
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default LoginUser;
