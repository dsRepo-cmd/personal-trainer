import { FC } from "react";
import Section from "../../components/section/Section";
import { Variant } from "../../lib/types";
import Text from "../../components/text/Text";
import { trainingSchedule } from "../../data/trainingSchedule";
import Heading from "../../components/heading/Heading";
interface TrainingScheduleProps {
  className?: string;
  variant?: Variant;
}

const TrainingSchedule: FC<TrainingScheduleProps> = ({ variant = "dark" }) => {
  return (
    <Section id="pricing">
      <div className="flex flex-col w-full gap-10 items-center justify-center">
        <Heading heading={trainingSchedule.heading} />

        <div className=" flex flex-col w-[70%] gap-4   justify-center ">
          <table className=" ">
            {trainingSchedule.schedule.map((line) => (
              <tr className=" " key={line.id}>
                <th className=" p-5">
                  <Text
                    uppercase
                    align="text-start"
                    variant="primary"
                    text={line.day}
                  />
                </th>
                {line.timeSlots.map((timeShot) => (
                  <td className="p-5" key={timeShot.id}>
                    <div className=" flex">
                      <Text variant="primary" text={timeShot.time} />
                      {timeShot.oddWeek && (
                        <Text variant="secondary" text="**" />
                      )}
                      {timeShot.evenWeek && (
                        <Text variant="secondary" text="*" />
                      )}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </table>

          <div className=" flex gap-4">
            {trainingSchedule.info?.map((item) => (
              <Text
                align="text-start"
                variant="secondary"
                text={item.asterisks}
                children={<Text variant={variant} span={item.text} />}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TrainingSchedule;
