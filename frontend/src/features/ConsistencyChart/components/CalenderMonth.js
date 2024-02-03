import CalenderDay from "./CalenderDay";
import countLeapYears from "../utiils/countLeapYears";
//import CalenderWeek from "./CalenderWeek";

const daysInMoth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "june",
  "july",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];



const getYearStarting = (year) => {
  let difference = year - 2023; // Sunday, January 1, 2023
  let yearStarting = (difference + countLeapYears(2023, year)) % 7;

  // Adjust for the leap year
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    yearStarting = yearStarting === 0 ? 6 : yearStarting - 1;
  } else {
    // Adjust for non-leap years
    yearStarting = yearStarting === 0 ? 0 : yearStarting;
  }

  
  return yearStarting;

  /*
  strting = 0/1/2/3/4/5/6 
  0=>sun 1=>mon 2=>tue 3=>wed 4=>thu 5=>fri 6=>sat
  */
};

const getMonthStarting = (month, year) => {
  let yearStarting = getYearStarting(year);
  let daysTillCurrentMonth = 0;

  for (let i = 0; i < month; i++) {
    daysTillCurrentMonth += daysInMoth[i];
    if (i == 1 && year % 4 == 0) daysTillCurrentMonth++;
  }

  let monthStartDay = (yearStarting + daysTillCurrentMonth) % 7;
  return monthStartDay;
};

const getMonthDetails= (month, year) => {
  const monthStartDay = getMonthStarting(month, year);
  let daysInMonth = (month == 1 && year % 4 == 0) ? daysInMoth[month] + 1 : daysInMoth[month];
  let monthEndDay = (monthStartDay + daysInMonth) % 7;
  monthEndDay = monthEndDay == 0 ? 6 : monthEndDay - 1;
  return {
    month : months[month],
    startDay : monthStartDay,
    endDay : monthEndDay,
    noOfDays : daysInMonth

  }
};

const getMonthStatusChart=(month, year)=>{
   const monthDetails = getMonthDetails(month, year);
   const noOfWeeks = Math.ceil((monthDetails.startDay + monthDetails.noOfDays)/7); 
   const monthStatusChart = [];
   for(let i=0; i<noOfWeeks*7; i++){
       if(i<monthDetails.startDay || i>monthDetails.startDay + monthDetails.noOfDays-1){
        monthStatusChart.push({
            status : "none",
            date : null
        });
       }else{
        let presentAbsent = Math.round(Math.random())
        presentAbsent == 0 ? presentAbsent = "absent" : presentAbsent = "present"
        monthStatusChart.push({
            status : presentAbsent,
            date : new Date(year,month,i-monthDetails.startDay+1)
        });
       }
   }
   return monthStatusChart;
}

const CalenderMonth = ({ month, year, showDate }) => {
 
    let monthstatusChart = getMonthStatusChart(month, year, showDate);
  
    return(
        <div className=" flex flex-col flex-shrink-0 justify-center items-center"> 
        <div className=" self-start m-3 text-gray-600"><b>{ `${months[month]}, ${year}`}</b></div>
        <div className=" flex flex-col h-60 flex-shrink-0 content bg-primary-200 flex-wrap rounded-md  p-3 ">
       {
                monthstatusChart.map((day)=>{
                return <CalenderDay status={day.status} date={day.date} showDate={showDate}/>
                })
       }
       </div>
       </div>
    )
    
};

export default CalenderMonth;
