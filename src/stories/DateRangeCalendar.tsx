import { useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

export interface DateRangeCalendarProps {
  initialStartDate: Date;
  initialEndDate: Date;
  rangeColor?: string;
}

const DateRangeCalendar = ({
  initialStartDate = new Date(),
  initialEndDate = new Date(),
  rangeColor = '#000000'
}: DateRangeCalendarProps) => {
  const [state, setState] = useState([
    {
      startDate: new Date(initialStartDate),
      endDate: new Date(initialEndDate),
      key: "selection",
    },
  ]);

  useEffect(() => {
    setState([
      {
        startDate: new Date(initialStartDate),
        endDate: new Date(initialEndDate),
        key: "selection",
      },
    ]);
  }, [initialStartDate, initialEndDate]);

  return (
    <DateRangePicker
      editableDateInputs={true}
      onChange={({selection:item}) =>{
        setState([{
          startDate: item?.startDate ?? new Date(),
          endDate: item?.endDate ?? new Date(),
          key: "selection"
        }])
      }}
      moveRangeOnFirstSelection={false}
      ranges={state}
      months={2}
      direction="horizontal"
     // color="#de2d2dff"
      rangeColors={[rangeColor]}
    />
  );
};

export default DateRangeCalendar;
