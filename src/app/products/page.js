import Link from "next/link";

const navLink = [
  {
    product: "Product 1",
    href: "products/1",
  },
  { product: "Product 2", href: "products/1" },
  { product: "Product 3", href: "products/3" },
];

const ProductsList = () => {
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product List</h1>
      {navLink.map((link) => (
        <h2>
          <Link href={link.href}>{link.product}</Link>
        </h2>
      ))}
    </>
  );
};

export default ProductsList;
