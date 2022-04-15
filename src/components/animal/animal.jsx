import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import AnimalCSS from './animal.module.css';
import { toggleDetail } from '../../redux/zoo/zoo';

function Animal(props) {
  const dispatch = useDispatch();
  const handleToggleClick = () => {
    dispatch(toggleDetail(id));
  };
  const {
    id, type, name, image, weight_max, lifespan,
  } = props;

  return (
    <div className={AnimalCSS.animalWidth}>
      <Link to={`/AnimalDetail/${id}`}>
        <button
          type="button"
          className={AnimalCSS.buttonRight}
          onClick={handleToggleClick}
        >
          DETAIL
        </button>
      </Link>

      <ul className={AnimalCSS.listStyle}>
        <li style={{ paddingBottom: '2rem' }}>
          <Card.Img
            src={image}
            alt={name}
            style={{ width: '120px', height: '120px' }}
          />
        </li>
        <li className={AnimalCSS.listInfo}>
          <span>Name :</span>
          <span>{name}</span>
        </li>
        <li className={AnimalCSS.listInfo}>
          <span>Type :</span>
          <span>{type}</span>
        </li>
        <li className={AnimalCSS.listInfo}>
          <span>Lifespan :</span>
          <span>{lifespan}</span>
        </li>
        <li className={AnimalCSS.listInfo}>
          <span>Weight (max) :</span>
          <span>{weight_max}</span>
        </li>
      </ul>
    </div>
  );
}

Animal.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  lifespan: PropTypes.string.isRequired,
  weight_max: PropTypes.string.isRequired,
};

export default Animal;
