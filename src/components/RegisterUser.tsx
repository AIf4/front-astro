import { Input } from "./ui/input";
import { FaEnvelope, FaUser } from "react-icons/fa6";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";
import api from "@/lib/axios-config";

const formRegisterSchema = z.object({
  name: z
    .string({
      message: "El campo debe de ser de tipo string",
    })
    .trim()
    .min(2, {
      message: "El campo debe de tener al menos 2 caracteres",
    })
    .max(50, {
      message: "El campo debe de tener como máximo 50 caracteres",
    }),
  nickname: z
    .string({
      message: "El campo debe de ser de tipo string",
    })
    .trim()
    .min(2, {
      message: "El campo debe de tener al menos 2 caracteres",
    })
    .max(50, {
      message: "El campo debe de tener como máximo 50 caracteres",
    }),
  email: z
    .string({
      message: "El campo debe de ser de tipo string",
    })
    .trim()
    .email({
      message: "El campo debe de ser un email válido",
    }),
  password: z
    .string({
      message: "El campo debe de ser de tipo string",
    })
    .trim()
    .regex(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
      "La contraseña debe de tener al menos 6 caracteres, una letra mayúscula, una minúscula y un número"
    ),
});

const RegisterUser = () => {
  //const form = registerUserForm;
  const form = useForm<z.infer<typeof formRegisterSchema>>({
    resolver: zodResolver(formRegisterSchema as any),
    defaultValues: {
      name: "",
      nickname: "",
      email: "",
      password: "",
    },
  });
  const onSubmit = async (signUpData: z.infer<typeof formRegisterSchema>) => {
    console.log(signUpData);
    try {
      await api.post(`/api/auth/sign-in`, signUpData);
      toast({
        title: "Register success",
        description: "User has been registered successfully",
        variant: "default",
      });
      form.reset();
    } catch (error: any) {
      if (error.response) {
        const { data } = error.response;
        // The client received a 4xx or 5xx error response
        const setFormError = (
          field: "name" | "nickname" | "email" | "password",
          message: string
        ) => {
          form.setError(field, {
            type: "manual",
            message: message,
          });
        };
        // Set form errors
        if (data.field === "email" || data.field === "nickname") {
          setFormError(data.field, data.message);
        }
      } else if (error.request) {
        // The client never received a response or the request was aborted
        console.error("Network error");
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
        console.error("Unknown error");
      }
    }
  };

  return (
    <div className="md:absolute lg:relative md:top-[2rem] lg:top-1 md:inset-0 lg:left-0 p-4">
      <div className="mx-auto max-w-lg md:bg-gray-100 lg:p-2 md:p-8 lg:bg-transparent md:rounded-lg">
        <h1 className="text-5xl font-bold sm:text-3xl text-center">
          Get started today!
        </h1>
        <p className="text-center text-gray-500 mb-16">
          Start your journey with us today
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      subfixIcon={FaUser}
                      placeholder="Enter your name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nickname"
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>Nickname</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      subfixIcon={FaUser}
                      placeholder="Enter your nickname"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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

export default RegisterUser;
