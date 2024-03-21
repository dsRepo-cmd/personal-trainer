import Section from "../../components/section/Section";
import Container from "../../components/container/Container";
import Text from "../../components/text/Text";
import Heading from "../../components/heading/Heading";
import { Variant } from "../../lib/types";
import { trainingSchedule } from "../../data/trainingSchedule";
import "./TrainingSchedule.css";

interface TrainingScheduleProps {
  className?: string;
  variant?: Variant;
}

const TrainingSchedule: React.FC<TrainingScheduleProps> = ({
  variant = "dark",
}) => {
  return (
    <Section id="training-schedule">
      <Container>
        <Heading heading={trainingSchedule.heading} />

        <div className=" flex flex-col w-[70%] gap-4   justify-center lg:w-full">
          <table>
            <tbody>
              {trainingSchedule.schedule.map((line) => (
                <tr className="ts_divider" data-aos={"fade-up"} key={line.id}>
                  <th className="p-5 lg:p-3 sm:p-1 sm:text-[0.7rem]">
                    <Text
                      className="ts_day"
                      uppercase
                      align="text-start"
                      text={line.day}
                    />
                  </th>
                  {line.timeSlots.map((timeShot) => (
                    <td className="p-5 lg:p-3 sm:p-1" key={timeShot.id}>
                      <div className="flex">
                        <Text
                          className="ts_time sm:text-[0.7rem]"
                          text={timeShot.time}
                        />
                        {timeShot.oddWeek && (
                          <Text
                            className="ts_time_shot sm:text-[0.7rem]"
                            text="**"
                          />
                        )}
                        {timeShot.evenWeek && (
                          <Text
                            className="ts_time_shot sm:text-[0.7rem]"
                            text="*"
                          />
                        )}
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
                align="text-start"
                className="ts_time_shot"
                text={item.asterisks}
                children={<Text variant={variant} span={item.text} />}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default TrainingSchedule;
