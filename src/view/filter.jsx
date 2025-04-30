import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export function Filter({
  robotsList,
  setFilteredRobots,
  filterText,
  setFilterText,
}) {
  const [filteredCount, setFilteredCount] = useState(0);

  useEffect(() => {
    const filtered = robotsList.filter((robot) =>
      robot.first_name.toLowerCase().includes(filterText.toLowerCase())
    );
    setFilteredRobots(filtered);
    setFilteredCount(filtered.length);
  }, [filterText, robotsList, setFilteredRobots]);

  return (
    <div className="header">
      <h4 className="filter_title">{filteredCount} items filtered</h4>
      <input
        className="filter"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
    </div>
  );
}

Filter.propTypes = {
  robotsList: PropTypes.array.isRequired,
  setFilteredRobots: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired,
  setFilterText: PropTypes.func.isRequired,
  filteredCount: PropTypes.number.isRequired,
};
