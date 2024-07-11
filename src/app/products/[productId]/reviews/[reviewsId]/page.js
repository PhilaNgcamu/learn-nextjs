"use client";
import { notFound } from "next/navigation";

const getRandomInt = (count) => {
  return Math.floor(Math.random() * count);
};

const ReviewDetail = ({ params }) => {
  const random = getRandomInt(2);
  if (parseInt(params.reviewsId) > 1000) {
    notFound();
  }
  if (random === 1) {
    throw new Error("Error loading review");
  }
  return (
    <h1>
      Review {params.reviewsId} for product {params.productId}
    </h1>
  );
};

export default ReviewDetail;
