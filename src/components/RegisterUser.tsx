import axios from "axios";
import { type FormEvent } from "react";
import { Input } from "./ui/input";
import { FaUserAstronaut } from "react-icons/fa6";

const RegisterUser = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const signUpData = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const { status, data } = await axios.post(
        `http://localhost:3000/api/auth/sign-in`,
        signUpData
      );

      console.log(status);
      console.log(data);
    } catch (error: any) {
      if (error.response) {
        // The client received a 4xx or 5xx error response
        console.error(`Error: ${error.response.data.message}`);
      } else if (error.request) {
        // The client never received a response or the request was aborted
        console.error("Network error");
      } else {
        // Any other error
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

        <p className="mt-4 text-gray-500 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
          nulla eaque error neque ipsa culpa autem, at itaque nostrum!
        </p>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <label htmlFor="username" className="text-gray-500">
              Name
            </label>

            <div className="relative py-2">
              <Input
                type="text"
                subfixIcon={FaUserAstronaut}
                placeholder="Enter your name"
                name="username"
                id="username"
                autoComplete="off"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="text-gray-500">
              Email
            </label>

            <div className="relative py-2">
              <Input
                type="email"
                subfixIcon={FaUserAstronaut}
                placeholder="Enter email"
                name="email"
                id="email"
                autoComplete="off"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="text-gray-500">
              Password
            </label>
            <div className="relative py-2">
              <Input
                subfixIcon={FaUserAstronaut}
                placeholder="Enter password"
                type="password"
                name="password"
                id="password"
                autoComplete="off"
              />
            </div>
          </div>

          <div className="flex items-center justify-between py-2">
            <button
              type="submit"
              className="w-full inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Sign up
            </button>
          </div>

          <div className="text-center text-sm text-gray-500">
            <a className="underline" href="#">
              Sign in
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterUser;
