import { A } from '../typography/A'
import { testimonials } from "@/data/testimonialdata";
import { useMemo } from "react";

type TestimonalProps = {
  content: string
  title: string
  link: string
}

export const Testimonial = ({ content, title, link }: TestimonalProps) => {
  return (
    <blockquote className="testimonial flex w-[90%] flex-none flex-col sm:w-[60%] md:w-[40%] xl:w-auto">
      <span className="testimonialtitle">{title && title}</span>
      <i className="testimonialcontent">{content && content}</i>
      <A className="text-gold mt-auto" href={link}>
        {'Läs mer'}
      </A>
    </blockquote>
  )
}

const getRandomTestimonials = (count: number) => {
  const shuffled = [...testimonials].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

export default function Testimonials() {
  const randomTestimonials = useMemo(() => getRandomTestimonials(3), []);

  return (
    <div className="m-auto xl:max-w-7xl">
      <div className="flex space-x-3 overflow-x-auto px-gapSpace xl:grid xl:grid-cols-3 xl:items-stretch">
        {randomTestimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            title={testimonial.title}
            content={testimonial.content}
            link={testimonial.link}
          />
        ))}
      </div>
    </div>
  );
}
