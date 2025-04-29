import { Card } from "./card";
import PropTypes from 'prop-types';

export function List({ listData }) {
  return (
    <div className="cards-list">
      <ul>
        {listData.map((item) => (
          <li className="card-item" key={item.id}>
            <Card {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

List.propTypes = {
  listData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      country: PropTypes.string,
      description: PropTypes.string,
      first_name: PropTypes.string,
      avatar: PropTypes.string,
    })
  ).isRequired,
};
