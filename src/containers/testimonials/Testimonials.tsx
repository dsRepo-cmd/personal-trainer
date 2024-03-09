import Heading from "../../components/heading/Heading";
import Section from "../../components/section/Section";
import Text from "../../components/text/Text";
import { Variant } from "../../lib/types";
import { testimonials } from "../../data/testimonials";
import "./Testimonials.css";

import Slider from "react-slick";
import Container from "../../components/container/Container";

interface TestimonialsProps {
  className?: string;
  variant?: Variant;
}

const Testimonials: React.FC<TestimonialsProps> = ({ variant }) => {
  return (
    <Section variant={variant} id="testimonials">
      <Container className=" relative">
        <Heading variant={variant} heading={testimonials.heading} />
        <div className="image-slider-container ">
          <Slider
            dots
            autoplay
            autoplaySpeed={3000}
            pauseOnHover
            speed={1000}
            swipeToSlide
            slidesToScroll={1}
            slidesToShow={1}
            initialSlide={0}
            arrows={false}
            draggable
            infinite
            customPaging={() => <div className="click_dote"></div>}
          >
            {testimonials.list.map((item) => (
              <div
                className=" cursor-grab active:cursor-grabbing"
                key={item.id}
              >
                <Text className=" mb-6 mx-5" size="m" text={item.text} />
                <Text className=" mb-6" size="m" text={item.textBy} />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;
