import Section from "../../components/section/Section";
import Text from "../../components/text/Text";

function Classes() {
  return (
    <Section id="classes" backgroundColor="white">
      <div className="flex flex-col items-center justify-center">
        <Text title={"COURSE CLASSES"} />
        <Text
          text={"I can give advice & offer you a personalised nutrition plan."}
        />
        <Text
          text={
            "My nutrition plans will not leave you famished and it will achieve results in no time!"
          }
        />
      </div>
    </Section>
  );
}

export default Classes;
