import alasql from "alasql";
import toast from "react-hot-toast";
import fetchDataAndStoreAsCSV from "../helpers/getTables";

const getURL = (tableName) =>
  `https://api.github.com/repos/graphql-compose/graphql-compose-examples/contents/examples/northwind/data/csv/${tableName}.csv`;

function parseSQL(query) {
  const tokens = query.split(/\s+/);
  const parsedQuery = {
    select: [],
    from: "",
    where: "",
  };

  let selectIndex = tokens.findIndex(
    (token) => token.toUpperCase() === "SELECT"
  );
  if (selectIndex !== -1) {
    let selectTokens = tokens.slice(selectIndex + 1);
    const fromIndex = selectTokens.findIndex(
      (token) => token.toUpperCase() === "FROM"
    );

    if (fromIndex !== -1) {
      selectTokens = selectTokens.slice(0, fromIndex);
      parsedQuery.select = selectTokens.join(" ").split(",");
    }
  }

  const fromIndex = tokens.findIndex((token) => token.toUpperCase() === "FROM");
  if (fromIndex !== -1 && fromIndex + 1 < tokens.length) {
    parsedQuery.from = tokens[fromIndex + 1];
  }

  const whereIndex = tokens.findIndex(
    (token) => token.toUpperCase() === "WHERE"
  );
  if (whereIndex !== -1 && whereIndex + 1 < tokens.length) {
    parsedQuery.where = tokens.slice(whereIndex + 1).join(" ");
  }

  return parsedQuery;
}

const convertToJSON = async (decodedData, query) => {
  const querybreakdown = parseSQL(query);
  try {
    const data = await alasql.promise(
      "SELECT * FROM CSV(?, {headers: false, separator:','})",
      [decodedData]
    );
    console.log(data);
    toast.success("Compiled Successfully");

    if (querybreakdown.select.length === 1 && querybreakdown.select[0] === "*")
      return { data, status: "success" };

    const selectedColumns = data.map((item, index) => {
      const selectedValues = {};
      querybreakdown.select.forEach((column, columnIndex) => {
        const columnName = querybreakdown.select[columnIndex];
        selectedValues[columnIndex] = item[columnIndex];
      });
      return selectedValues;
    });

    return { data: selectedColumns, status: "success" };
  } catch (e) {
    toast.success("Try some other query");
    return { data: "", status: "error" };
  }
};

const fetchData = async (tableName, setResult, setResultIsLoading, query) => {
  const fetchedData = await fetchDataAndStoreAsCSV();
  const foundItem = fetchedData.find(
    (item) => item.name.toLowerCase === tableName.toLowerCase
  );
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
