import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const AuthLayout = ({ children }) => {
  return (
    <>
      <div
        className={
          (inter.className, "text-3xl text-center text-green-500 font-bold")
        }
      >
        <h2>Inner Layout</h2>
        {children}
      </div>
    </>
  );
};

export default AuthLayout;
