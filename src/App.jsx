import React from "react";

import "./_app.css";
import Navigation from "./components/navigation/Navigation";

const App = () => {
  return (
    <div>
      <h1>#todo</h1>
      <main>
        <Navigation />
      </main>
    </div>
  );
};

export default App;
