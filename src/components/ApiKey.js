export const apikey="a3be4c819e5f6b4e803224ef25aee4d5";

export function DateConverter(dat,ampm) {
    var convdate = new Date(dat*1000);
    //console.log(convdate);
    var hours=convdate.getHours();
    var minutes=convdate.getMinutes();
    var sec=convdate.getSeconds();
    return hours+':'+minutes+':'+sec+': '+ampm;
  }