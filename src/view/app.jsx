import { useEffect, useState } from "react";
import { List } from "./list";
import { Filter } from "./filter";

export function App() {
  const [robotsList, setRobotsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        const data_url = "https://api.npoint.io/86690d80ff3d455133f0";
        const response = await fetch(data_url);
        const data = await response.json();
        setRobotsList(data);
      } catch (error) {
        setErrorMsg(`fetch operation failed: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    }
    getData().catch(console.log);
  }, []);

  const filteredRobots = robotsList.filter((robot) =>
    robot.first_name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="app">
      <div className="header">
        <h1 className="headline white-text">Show me the list!</h1>
      </div>

      {errorMsg ? (
        <h1>{errorMsg}</h1>
      ) : isLoading ? (
        <h1 className="load-label">Loading...</h1>
      ) : (
        <>
          <Filter
            filterText={filterText}
            setFilterText={setFilterText}
            filteredCount={filteredRobots.length}
          />
          <List listData={filteredRobots} />
        </>
      )}
    </div>
  );
}
