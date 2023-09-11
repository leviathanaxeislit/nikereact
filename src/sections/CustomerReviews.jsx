import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";
import { motion } from 'framer-motion';
const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our
        <span className="text-coral-red"> Customers </span>
        Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Hear genuine stories from our satisfied customers about their exceptionl
        experiences with us.
      </p>
      
<div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
  {reviews.map((review, index) => (
    <motion.div
      key={index}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)" }}
    >
      <ReviewCard
        imgURL={review.imgURL}
        customerName={review.customerName}
        rating={review.rating}
        feedback={review.feedback}
      />
    </motion.div>
  ))}
</div>
    </section>
  );
};

export default CustomerReviews;
