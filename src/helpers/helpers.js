import alasql from "alasql";
import toast from "react-hot-toast";
import fetchDataAndStoreAsCSV from "../helpers/getTables";

const getURL = (tableName) =>
  `https://api.github.com/repos/graphql-compose/graphql-compose-exampless/contents/examples/northwind/data/csv/${tableName}.csv`;

const convertToJSON = async (decodedData) => {
  try {
    const data = await alasql.promise(
      "SELECT * FROM CSV(?, {headers: false, separator:','})",
      [decodedData]
    );
    toast.success("Compiled Successfully");
    return { data: data, status: "success" };
  } catch (e) {
    toast.success("Try some other query");
    return { data: "", status: "error" };
  }
};

const fetchData = async (tableName, setResult, setResultIsLoading, query) => {
  const fetchedData = await fetchDataAndStoreAsCSV();
  const foundItem = fetchedData.find((item) => item.name === tableName);
  if (foundItem) {
    const storedData = localStorage.getItem("northwind-data-csv");
    const object = JSON.parse(storedData);
    if (object === null || object[tableName] === undefined) {
      fetch(getURL(tableName), {
        headers: {
          Accept: "application/vnd.github.v4+raw",
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            toast.error("Oh! We might have consumed all the free API calls");
            setResultIsLoading(false);
          }
        })
        .then((data) => {
          const incodedData = data.content.replace("\n", "");
          const localdata = localStorage.getItem("northwind-data-csv");
          const object = JSON.parse(localdata);
          if (object !== null) {
            object[tableName] = incodedData;
            localStorage.setItem("northwind-data-csv", JSON.stringify(object));
          } else {
            const newObject = {};
            newObject[tableName] = incodedData;
            localStorage.setItem(
              "northwind-data-csv",
              JSON.stringify(newObject)
            );
          }
          convertToJSON(atob(incodedData)).then(({ data, status }) => {
            setResult(data);
            setResultIsLoading(false);
          });
        })
        .catch((err) => {
          toast.error(`Error occured : ${err.message}`);
          setResultIsLoading(false);
        });
    } else {
      const localdata = localStorage.getItem("northwind-data-csv");
      const object = JSON.parse(localdata);

      convertToJSON(atob(object[tableName])).then(({ data, status }) => {
        setResult(data);
        setResultIsLoading(false);
      });
    }
  } else {
    toast.error("Sorry! We don't have any table by that name in database");
    setResultIsLoading(false);
  }
};

export { fetchData };
