import { A } from "../typography/A"

type TestimonalProps = {
  content: string
  title: string
  link: string;
}

export const Testimonial = ({
  content,
  title,
  link
}: TestimonalProps) => {
  return (
    <blockquote className="testimonial w-[90%] flex-none sm:w-[60%] md:w-[40%] xl:w-auto">
      <span className="testimonialtitle">{title && title}</span>
      <i className="testimonialcontent">{content && content}</i>
      <A className="testimoniallink" href={link}>{'Läs mer'}</A>
    </blockquote>

  )
}
