export const monthsLong = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const defaultConfig = {
  style: {
    container: {
      width: 470,
      backgroundColor: "#161f29",
      radius: 15
    },
    monthBlockSize: {
      height: 80,
      width: 95
    },
    daySquare: {
      height: 8,
      width: 8,
      color: "white"
    },
    monthTitle: {
      color: "white",
      fontSize: 10
    }
  },
  colorThresholds: [
    {
      from: 0,
      to: 1,
      opacity: 0.1
    },
    {
      from: 1,
      to: 3,
      opacity: 0.2
    },
    {
      from: 3,
      to: 5,
      opacity: 0.4
    },
    {
      from: 5,
      to: 7,
      opacity: 0.6
    },
    {
      from: 7,
      to: 9,
      opacity: 0.8
    },
    {
      from: 9,
      opacity: 1
    }
  ]
};
