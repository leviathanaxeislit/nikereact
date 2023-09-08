import { services } from "../constants";
import  ServiceCard  from "../components/ServiceCard";
import { motion } from 'framer-motion';

const Services = () => {
    return (
      <section className="max-container flex justify-center flex-wrap gap-9">
        {services.map((service) => (
          <motion.div
            key={service.name}
            whileHover={{ scale: 1.05, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </section>
    );
  }
  
  export default Services;