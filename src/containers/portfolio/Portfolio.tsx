import Section from "../../components/section/Section";
import Text from "../../components/text/Text";

function Portfolio() {
  return (
    <Section id="portfolio">
      <div className="flex flex-col items-center justify-center">
        <Text title={"Portfolio"} className=" title container-dark  " />
      </div>
    </Section>
  );
}

export default Portfolio;
