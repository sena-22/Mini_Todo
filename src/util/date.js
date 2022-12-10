import moment from "moment";

export const getStringDate = (date) => {
  return moment(date).format().slice(0, 10);
};
