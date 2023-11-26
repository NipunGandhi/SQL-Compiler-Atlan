import { Toaster } from "react-hot-toast";
import React from "react";
import SideNavbar from "./SideNavbar";
import "./App.scss";

const App = () => {
  return (
    <div className="app-container">
      <Toaster position="bottom-center" reverseOrder={false} />
      <SideNavbar />
      <div className="main-content">
        <div className="editor-section section">
          1
          {/* <Suspense
                fallback={<div className="suspense-loader">{loader()}</div>}
              >
                <Editor
                  setQuery={setQuery}
                  query={query}
                  executeQuery={executeQuery}
                />
              </Suspense> */}
        </div>
        <div className="result-section section">
          {/* <ResultSection
                tableName={tableName}
                result={result}
                resultIsLoading={resultIsLoading}
              /> */}
          2
        </div>
      </div>
    </div>
  );
};

export default App;
