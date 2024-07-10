export const generateMetadata = async ({ params }) => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 2000);
  });
  return {
    title: `Product ${title}`,
  };
};

const ProductDetails = ({ params }) => {
  return <h1>Details about product {params.productId}</h1>;
};

export default ProductDetails;
