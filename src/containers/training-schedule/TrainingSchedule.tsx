import { FC } from "react";
import Section from "../../components/section/Section";
import { Variant } from "../../lib/types";
import Text from "../../components/text/Text";
import { trainingSchedule } from "../../data/trainingSchedule";
import Heading from "../../components/heading/Heading";
import "./TrainingSchedule.css";

interface TrainingScheduleProps {
  className?: string;
  variant?: Variant;
}

const TrainingSchedule: FC<TrainingScheduleProps> = ({ variant = "dark" }) => {
  return (
    <Section id="pricing">
      <div className="flex flex-col w-full gap-10 items-center justify-center">
        <Heading heading={trainingSchedule.heading} />

        <div className=" flex flex-col w-[70%] gap-4   justify-center lg:w-full">
          <table>
            {trainingSchedule.schedule.map((line) => (
              <tr key={line.id}>
                <th className="p-5 lg:p-3 sm:p-1">
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
                      <Text className="ts_time" text={timeShot.time} />
                      {timeShot.oddWeek && (
                        <Text className="ts_time_shot" text="**" />
                      )}
                      {timeShot.evenWeek && (
                        <Text className="ts_time_shot" text="*" />
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
                className="ts_time_shot"
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
