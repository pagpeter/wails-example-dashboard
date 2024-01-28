import { FaSlidersH, FaServer, FaUserTie, FaTerminal } from "react-icons/fa";

export default function Sidebar({
  route,
  setRoute,
}: {
  route: string;
  setRoute: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <aside
      id="sidebar"
      className={`fixed top-0 left-0 z-40 w-32 h-screen bg-crust text-crust border-separate border border-surface1`}
    >
      <li
        className={`grid grid-cols-1 gap-5 m-1 mx-2 mt-5 text-xl text-center`}
      >
        <button
          className={`${
            route === "profiles" ? "bg-text" : "bg-surface0"
          } rounded shadow-xl flex justify-center items-center h-10`}
          onClick={() => setRoute("profiles")}
        >
          <FaUserTie />
        </button>
        <button
          className={`${
            route === "logs" ? "bg-text" : "bg-surface0"
          }  rounded shadow-xl flex justify-center items-center h-10`}
          onClick={() => setRoute("logs")}
        >
          <FaTerminal />
        </button>
        <button
          className={`${
            route === "server" ? "bg-text" : "bg-surface0"
          } rounded shadow-xl flex justify-center items-center h-10`}
          onClick={() => setRoute("server")}
        >
          <FaServer />
        </button>
        <button
          className={`${
            route === "config" ? "bg-text" : "bg-surface0"
          } rounded shadow-xl flex justify-center items-center h-10 `}
          onClick={() => setRoute("config")}
        >
          <FaSlidersH />
        </button>
      </li>

      <div className="relative">
        <div
          className={`fixed left-0 bottom-0 bg-text border-separate border-right border border-surface1 w-32 py-2`}
        >
          <img
            className="w-16 ml-8"
            src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png"
            alt="User profile picture"
          />
          <span className="ml-11 left-8 font-bold">Peet</span>
        </div>
      </div>
    </aside>
  );
}
