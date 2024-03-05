import Section from "../../components/section/Section";

function Footer() {
  return (
    <Section id="footer" backgroundColor="white">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-black">Footer</h1>
        <p className=" text-black ">
          Here are some of the projects I have worked on.
        </p>
      </div>
    </Section>
  );
}

export default Footer;
