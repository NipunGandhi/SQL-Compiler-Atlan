import React, { useEffect, useState } from "react";
import "../Extra/Extra.scss";
import fetchDataAndStoreAsCSV from "../../helpers/getTables";

const Extra = () => {
  const [tableSupported, setTableSupported] = useState([]);

  useEffect(() => {
    const fetchTableData = async () => {
      const data = await fetchDataAndStoreAsCSV();
      setTableSupported(data);
    };

    fetchTableData();
  }, []);

  return (
    <div className="about-container">
      <h2>Tables Supported</h2>
      <div className="table">
        <h3>Tables</h3>
        {tableSupported.map((table, index) => (
          <li key={index}>{table.name}</li>
        ))}
      </div>
    </div>
  );
};

export default Extra;
