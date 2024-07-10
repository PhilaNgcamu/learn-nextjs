import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const ProductDetailsLayout = ({ children }) => {
  return (
    <>
      {children}
      <h2
        className={
          (inter.className, "text-3xl text-center text-red-500 font-bold")
        }
      >
        Features products
      </h2>
    </>
  );
};

export default ProductDetailsLayout;
