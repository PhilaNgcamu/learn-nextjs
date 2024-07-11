import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const getRandomInt = (count) => {
  return Math.floor(Math.random() * count);
};

const ProductDetailsLayout = ({ params, children }) => {
  const random = getRandomInt(2);
  if (parseInt(params.reviewsId) > 1000) {
    notFound();
  }
  if (random === 1) {
    throw new Error("Error loading product");
  }

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
