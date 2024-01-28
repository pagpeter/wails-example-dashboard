import { useState } from "react";
import Sidebar from "./components/sidebar";

import TaskPage from "./components/pages/taskpage";
import LogsPage from "./components/pages/logspage";
import ConfigPage from "./components/pages/configpage";
import ServerPage from "./components/pages/serverspage";

import names from "./3chars.json";

function Router({ route, args }: { route: string; args: any }) {
  switch (route) {
    case "profiles":
      return <TaskPage profiles={args?.profiles} />;
    case "logs":
      return <LogsPage />;
    case "config":
      return <ConfigPage />;
    case "server":
      return <ServerPage />;
    default:
      return <span>INVALID ROUTE: {route}</span>;
  }
}

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
      <main className={`ml-32 bg-base min-h-screen text-text mb-5`}>
        <Router route={route} args={{ profiles }} />
      </main>
    </>
  );
}

export default App;
