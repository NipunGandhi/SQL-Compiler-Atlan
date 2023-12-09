async function fetchDataAndStoreAsCSV() {
  const response = await fetch(
    "https://api.github.com/repos/graphql-compose/graphql-compose-examples/contents/examples/northwind/data/csv/",
    {
      headers: {
        Accept: "application/vnd.github.v4+raw",
        Authorization: "token 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",
      },
    }
  );

  const data = await response.json();
  const dataArray = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].name.endsWith(".csv")) {
      data[i].name = data[i].name.split(".")[0];
      const currentItem = { ...data[i] };
      dataArray.push(currentItem);
    }
  }

  return dataArray;
}

export default fetchDataAndStoreAsCSV;
