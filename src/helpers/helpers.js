import fetchDataAndStoreAsCSV from "./getTables";
import toast from "react-hot-toast";
import convertToJSON from "./queryLogic";

const getURL = (tableName) =>
  `https://api.github.com/repos/graphql-compose/graphql-compose-examples/contents/examples/northwind/data/csv/${tableName}.csv`;

const fetchData = async (tableName, setResult, setResultIsLoading, query) => {
  // const fetchedData = await fetchDataAndStoreAsCSV();
  // const foundItem = fetchedData.find(
  //   (item) => item.name.toLowerCase === tableName.toLowerCase
  // );
  if (true) {
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

          convertToJSON(atob(incodedData), query).then(({ data, status }) => {
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

      convertToJSON(atob(object[tableName]), query).then(({ data, status }) => {
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
