import React from "react";
import Dashboard from "./component/Dashboard";
import NavigationBar from "./component/NavigationBar";

function App() {
  return (
    <div className=" w-full flex">
      <NavigationBar />
      <main className="grow">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
