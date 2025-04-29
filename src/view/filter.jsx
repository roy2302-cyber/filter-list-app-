import PropTypes from 'prop-types';

export function Filter({ filterText, setFilterText, filteredCount }) {
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
  filterText: PropTypes.string.isRequired,
  setFilterText: PropTypes.func.isRequired,
  filteredCount: PropTypes.number.isRequired,
};
