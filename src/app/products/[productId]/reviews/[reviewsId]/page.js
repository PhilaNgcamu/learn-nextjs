import { notFound } from "next/navigation";

const ReviewDetail = ({ params }) => {
  if (parseInt(params.reviewsId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviewsId} for product {params.productId}
    </h1>
  );
};

export default ReviewDetail;
