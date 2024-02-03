import CalenderMonth from "./CalenderMonth";
import { useState } from "react";
const isValidDuration = (from, to) => {
  const initialDate = new Date("2023-01-01"); // Corrected month to "01" for January
  const currentDate = new Date();
  return true;
  return (
    from >= initialDate &&
    from <= currentDate &&
    to <= currentDate &&
    to >= initialDate &&
    from < to
  );
};

const calculateMonthsBetweenDates = (from, to) => {
  const fromYear = from.getFullYear();
  const fromMonth = from.getMonth();
  const toYear = to.getFullYear();
  const toMonth = to.getMonth();

  return (toYear - fromYear) * 12 + (toMonth - fromMonth);
};

const getChartConfig = (from, to) => {
  const noOfMontInChart = calculateMonthsBetweenDates(from, to) + 1;
  const fromMonth = from.getMonth();
  let year = from.getFullYear();
  const chartConfig = [];
  let i = 0;
  do {
    let month = (fromMonth + i) % 12;
    let obj = {
      month: month,
      year: year,
    };
    year = year + Math.floor((month + 1) / 12);
    chartConfig.push(obj);
    i++;
  } while (i < noOfMontInChart);
  return chartConfig;
};

const converDateInString = (date) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-indexed
  const day = date.getDate().toString().padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

const ConsistencyChart = ({ from, to }) => {
  const [fromDate, setFromDate] = useState(converDateInString(from));
  const [toDate, setToDate] = useState(converDateInString(to));
  const [isChecked, setIsChecked] = useState(false);

  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
  };
  const handleToDateChange = (e) => {
    setToDate(e.target.value);
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };


  if (!isValidDuration(new Date(fromDate), new Date(toDate)))
    return <div>Invalid Duration Selected!</div>;

  const chartConfig = getChartConfig(new Date(fromDate), new Date(toDate));
  return (
    <div className="w-4/5 rounded-3xl border-2  shadow-xl m-auto my-40 p-2">
      <div className="h-20 text-gray-600 flex flex-col ">
        <div className="flex justify-between my-auto  ">
          <div className="  my-2 mx-5 align font-bold text-gray-500 text-2xl  ">
            Consistency Chart
          </div>
          <div className="flex">
            <div className="m-3 py-1 text-center">
              <label  className=" font-bold text-center">Show : 
              <input className=""
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                value="isChecked"
              />
              </label>
            </div>
            <div className="m-3">
              <label className=" font-bold">From : </label>
              <input
                className="input-date-style"
                type="date"
                name="from"
                value={fromDate}
                onChange={handleFromDateChange}
              />
            </div>
            <div className="m-3">
              <label className=" font-bold">To : </label>
              <input
                className="input-date-style"
                type="date"
                name="to"
                value={toDate}
                onChange={handleToDateChange}
              />
            </div>
          </div>
        </div>
        <hr></hr>
      </div>

      <div className="App flex overflow-x-scroll scrollbar bg-white flex-shrink-0   p-2 m-2 ">
        {chartConfig.map((obj) => {
          return <CalenderMonth month={obj.month} year={obj.year} showDate={isChecked}/>;
        })}
      </div>
    </div>
  );
};

export default ConsistencyChart;
