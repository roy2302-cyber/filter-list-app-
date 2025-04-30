import PropTypes from 'prop-types';

export function Filter({
  robotsList,
  setFilteredRobots,
  filterText,
  setFilterText
}) {
  const onChangeHandler = (e) => {
    const text = e.target.value;
    setFilterText(text);

    const filtered = robotsList.filter((robot) =>
      robot.first_name.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredRobots(filtered);
  };

  return (
    <div className="header">
      <h4 className="filter_title">{robotsList.filter((robot) =>
        robot.first_name.toLowerCase().includes(filterText.toLowerCase())
      ).length} items filtered</h4>

      <input
        className="filter"
        value={filterText}
        onChange={onChangeHandler}
      />
    </div>
  );
}

Filter.propTypes = {
  robotsList: PropTypes.array.isRequired,
  setFilteredRobots: PropTypes.func.isRequired,
  filterText: PropTypes.string.isRequired,
  setFilterText: PropTypes.func.isRequired,
};
