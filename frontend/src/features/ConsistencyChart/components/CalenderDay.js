function CalenderDay({ status, date, showDate}) {
  let boxColor = "#F2F8FD";
  if (status == "present") boxColor = "#8AC5EF";
  if(status == "none") boxColor = "#FFFFFF";
  
  return (
    
    <div
      className={`
        ${status == "none" ? "invisible" : "inline-block"} 
        ${date != null && (date.getDate() == new Date().getDate() && date.getMonth() == new Date().getMonth() && date.getFullYear() == new Date().getFullYear())
           ? " border-2 border-green-500 " 
           : " "}
           inline-block  rounded-sm w-6 h-6  m-0.5 text-center  text-gray-600 font-medium 
         `}
      style={{ backgroundColor: `${boxColor}` }}
    >{status != "none" && showDate ? date.getDate(): ""}</div>
  )
}

export default CalenderDay;

/*
There are three status of CalenderDay Box
1) present
2) absent
3) none
*/