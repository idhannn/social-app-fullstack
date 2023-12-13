import RegisterForm from "@/components/RegisterForm";

const RegisterPage = () => {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="bg-white p-5 lg:p-7 mx-3 max-lg:w-[400px] rounded-lg">
        <RegisterForm />
      </div>
    </main>
  );
};

export default RegisterPage;
