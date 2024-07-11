"use client";
import { useRouter } from "next/navigation";

const OrderProduct = () => {
  const router = useRouter();
  const handleClick = () => {
    alert("Order Placed");
    router.push("/");
  };
  return (
    <>
      <h1>Order Product</h1>
      <button
        onClick={handleClick}
        className="btn-primary btn bg-red-500 hover:bg-red-600"
      >
        Place Order
      </button>
    </>
  );
};

export default OrderProduct;
