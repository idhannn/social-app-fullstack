import LoginForm from "@/components/LoginForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Sociall App",
  description: "Login to your account",
};
const LoginPage = () => {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="w-[450px] h-[500px] bg-white p-5 lg:p-10 mx-3 rounded-lg">
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;
