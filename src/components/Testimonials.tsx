import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Replace with your first customer testimonial. Focus on specific results and benefits they experienced.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      name: "Customer Name 1",
      role: "Their Job Title",
    },
    {
      text: "Replace with your second customer testimonial. Highlight what they love most about your product/service.",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      name: "Customer Name 2",
      role: "Their Job Title",
    },
    {
      text: "Replace with your third customer testimonial. Include specific metrics or outcomes if possible.",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      name: "Customer Name 3",
      role: "Their Job Title",
    },
    {
      text: "Replace with your fourth customer testimonial. Focus on how your solution solved their problem.",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      name: "Customer Name 4",
      role: "Their Job Title",
    },
    {
      text: "Replace with your fifth customer testimonial. Highlight the transformation they experienced.",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      name: "Customer Name 5",
      role: "Their Job Title",
    },
    {
      text: "Replace with your sixth customer testimonial. Emphasize the value and ROI they received.",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      name: "Customer Name 6",
      role: "Their Job Title",
    },
    {
      text: "Replace with your seventh customer testimonial. Share their success story and recommendation.",
      image: "https://randomuser.me/api/portraits/women/7.jpg",
      name: "Customer Name 7",
      role: "Their Job Title",
    },
    {
      text: "Replace with your eighth customer testimonial. Focus on the ease of use and implementation.",
      image: "https://randomuser.me/api/portraits/men/8.jpg",
      name: "Customer Name 8",
      role: "Their Job Title",
    },
    {
      text: "Replace with your ninth customer testimonial. Highlight the support and service they received.",
      image: "https://randomuser.me/api/portraits/women/9.jpg",
      name: "Customer Name 9",
      role: "Their Job Title",
    }
  ];

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimonials</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            Your Testimonials Section
          </h2>
          <p className="text-center mt-5 opacity-75">
            Replace this with a compelling description of your customer success stories
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;