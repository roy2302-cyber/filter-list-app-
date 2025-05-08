import PropTypes from 'prop-types';

export function Filter({
  robotsList,
  setFilteredRobots,
  filteredRobots 
}) {
  const onChangeHandler = (e) => {
    const text = e.target.value;
    const filtered = robotsList.filter((robot) =>
      robot.first_name.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredRobots(filtered);
  }

  return (
    <div className="header">
     <h4 className="filter_title">{filteredRobots.length} items filtered</h4>
      <input
        className="filter"
        onChange={onChangeHandler}
      />
    </div>
  );
}

Filter.propTypes = {
  robotsList: PropTypes.array.isRequired,
  setFilteredRobots: PropTypes.func.isRequired,
  filteredRobots: PropTypes.array.isRequired
}
