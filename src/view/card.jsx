import { Thumb } from "./thumb";
import PropTypes from 'prop-types';

export function Card({ country, description, first_name, avatar }) {
  return (
    <div className="card">
      <Thumb image_url={avatar} />
      <div className="texts-box">
        <h1 className="card-title paragraph">
          {first_name} from {country}
        </h1>
        <p className="card-msg">{description}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  country: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  first_name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
