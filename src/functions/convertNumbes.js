export const convertNumber = (number) => {
    const numberWithCommas = number.toLocaleString();
    var arr = numberWithCommas.split(",");
    if (arr.length === 5) return arr[0] + "." + arr[1].slice(0,2) + "T";  // Give Trillions
    else if (arr.length === 4) return arr[0] + "." + arr[1].slice(0,2) + "B"; // Give Billions
    else if (arr.length === 3) return arr[0] + "." + arr[1].slice(0,2) + "M"; //Give Millions
    else if (arr.length === 2) return arr[0] + "." + arr[1].slice(0,2) + "K";  //Give Thousands
    else return number.toLocaleString();
}