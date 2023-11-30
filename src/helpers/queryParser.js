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

export default parseSQL;
