import alasql from "alasql";
import toast from "react-hot-toast";
import parseSQL from "./queryParser";

const convertToJSON = async (decodedData, query) => {
  const querybreakdown = parseSQL(query);
  try {
    const data = await alasql.promise(
      "SELECT * FROM CSV(?, {headers: false, separator:','})",
      [decodedData]
    );

    const headers = data[0];
    const dataWithoutHeader = data.slice(1);
    let filteredData = dataWithoutHeader;

    toast.success("Compiled Successfully");

    if (querybreakdown.select.length === 1 && querybreakdown.select[0] === "*")
      return { data: [headers, ...filteredData], status: "success" };
    console.log(dataWithoutHeader);

    const selectKeys = querybreakdown.select.map((column) => {
      const selectedKey = Object.keys(headers).find(
        (key) =>
          headers[key].toLowerCase().trim() === column.toLowerCase().trim()
      );
      return parseInt(selectedKey);
    });

    const selectedColumns = filteredData.map((row) => {
      const newRow = {};
      let index = 0;
      for (let i = 0; i < selectKeys.length; i++) {
        newRow[index] = row[selectKeys[i]];
        index++;
      }
      return newRow;
    });

    console.log(selectedColumns);
    return {
      data: [querybreakdown.select, ...selectedColumns],
      status: "success",
    };
  } catch (e) {
    toast.success("Try some other query");
    return { data: "", status: "error" };
  }
};

export default convertToJSON;

// if (querybreakdown.where) {
//   const condition = querybreakdown.where.split(" ");
//   const columnIndex = headers.findIndex(
//     (column) => column === condition[0]
//   );
//   const operator = condition[1];
//   const value = condition[2];

//   filteredData = dataWithoutHeader.filter((item) => {
//     const itemValue = item[columnIndex];
//     switch (operator) {
//       case ">":
//         return itemValue > parseFloat(value);
//       case "<":
//         return itemValue < parseFloat(value);
//       case ">=":
//         return itemValue >= parseFloat(value);
//       case "<=":
//         return itemValue <= parseFloat(value);
//       case "=":
//         return itemValue === value;
//       default:
//         return false;
//     }
//   });
// }
