const countLeapYears = (startYear, endYear) => {
    let leapYears = 0;
    for (let year = startYear; year <= endYear; year++) {
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        leapYears += 1;
      }
    }
    return leapYears;
  };

  export default countLeapYears;