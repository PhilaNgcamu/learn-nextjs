const ReviewDetail = ({ params }) => {
  return (
    <h1>
      Review {params.reviewsId} for product {params.productId}
    </h1>
  );
};

export default ReviewDetail;
