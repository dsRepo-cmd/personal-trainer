import Section from "../../components/section/Section";
import Container from "../../components/container/Container";
import Text from "../../components/text/Text";
import Heading from "../../components/heading/Heading";
import { trainingSchedule } from "../../data/trainingSchedule";
import type { Variant } from "../../lib/types";

interface TrainingScheduleProps {
  className?: string;
  variant?: Variant;
}

const TrainingSchedule = ({ variant = "dark" }: TrainingScheduleProps) => {
  return (
    <Section id="training-schedule">
      <Container>
        <Heading heading={trainingSchedule.heading} />

        <div className=" flex flex-col w-[70%] gap-4   justify-center lg:w-full">
          <table>
            <tbody>
              {trainingSchedule.schedule.map((line) => (
                <tr
                  data-aos="fade-up"
                  className=" w-full h-full "
                  key={line.id}
                >
                  <th>
                    <div className="text-[#a6a6a6] bg-[#222222]  font-normal m-[1px]  text-sm p-5 lg:p-3 sm:p-1 sm:text-[0.7rem] uppercase">
                      {line.day}
                    </div>
                  </th>
                  {line.timeSlots.map((timeShot) => (
                    <td key={timeShot.id}>
                      <div className="flex p-5 bg-[#222222] lg:p-3 sm:p-1">
                        <Text
                          className=" text-sm  text-primary sm:text-[0.7rem]"
                          text={timeShot.time}
                        />

                        <Text
                          className="text-sm text-secondary sm:text-[0.7rem]"
                          text={timeShot.oddWeek ? "**" : "*"}
                        />
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <div data-aos={"fade-up"} className=" flex gap-4">
            {trainingSchedule.info?.map((item) => (
              <Text
                key={item.id}
                className=" text-sm text-secondary"
                text={item.asterisks}
                children={
                  <Text
                    className=" text-sm"
                    variant={variant}
                    span={item.text}
                  />
                }
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default TrainingSchedule;
