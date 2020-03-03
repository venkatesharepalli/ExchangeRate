export const getHistorialDates = durationPeriod => {
  const today = new Date();

  // End Date
  const endDate = new Date(today);
  endDate.setDate(endDate.getDate() - 1);

  // Start Date
  const startDate = new Date(endDate);
  startDate.setDate(startDate.getDate() - durationPeriod);

  return {
    startDate: formatDate(startDate),
    endDate: formatDate(endDate)
  };
};

const formatDate = date => {
  let dd = date.getDate();
  let mm = date.getMonth() + 1; //January is 0!
  const yyyy = date.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  //return yyyy + '-' + mm + '-' + dd;
  return yyyy + "-" + mm + "-" + dd;
};

export const getTop5List = (list = [], direction) => {
  return direction === "Increase"
    ? list.slice(0, 5)
    : list.slice(list.length - 5, list.length).reverse();
};

export const getPercentageChange = (oldRate, newRate) => {
  const oldRateByFixedDigit = oldRate.toFixed(4);
  const newRateByFixedDigit = newRate.toFixed(4);

  const percentageValue =
    oldRateByFixedDigit - newRateByFixedDigit === 0
      ? 0
      : 100 *
        Math.abs(
          (oldRateByFixedDigit - newRateByFixedDigit) / newRateByFixedDigit
        );
  return Math.round(parseFloat(percentageValue.toFixed(2)) * 100) / 100;
};

export const getDiff = (oldValue: number, newValue: number) => {
  return Math.abs(oldValue - newValue).toFixed(4);
};
