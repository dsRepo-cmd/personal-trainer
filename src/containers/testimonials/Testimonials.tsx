import Section from "../../components/section/Section";

function Testimonials() {
  return (
    <Section backgroundColor="red">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Testimonials</h1>
        <p className="text-white">
          Here are some of the projects I have worked on.
        </p>
      </div>
    </Section>
  );
}

export default Testimonials;
