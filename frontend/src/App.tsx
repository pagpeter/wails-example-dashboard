import { useState } from "react";
import Sidebar from "./components/sidebar";
import TaskTable from "./components/tasktable";

import names from "./3chars.json";

function App() {
  const [route, setRoute] = useState("profiles");

  const profiles = names.map((n) => {
    return {
      n: n.name,
      v: n.searches,
      s: `${n.time} (± ${n.tolerance}${n.toleranceUnit})`,
    };
  });

  return (
    <>
      <Sidebar route={route} setRoute={setRoute} />
      <main className={`ml-32 bg-base min-h-screen text-text`}>
        {route === "profiles" ? <TaskTable profiles={profiles} /> : null}
      </main>
    </>
  );
}

export default App;
