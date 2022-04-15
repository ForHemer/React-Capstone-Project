// import AnimalDetail from "../animalDetail/animalDetail";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';


function Animal(props) {
  const dispatch = useDispatch();
  const handleToggleClick = () => {
    dispatch(toggleDetail(id));
  };
  const {
    id,
    type,
    name,
    image,
  } = props;

  return (
    <div id={id}>

      <Link to="/AnimalDetail"><button type="button" onClick={handleToggleClick}>Detail</button></Link>
      <ul>
        <li>
          <img src={image} alt={name} style={{ width: '150px' }} />
        </li>
        <li>
          Name :
          {name}
        </li>
        <li>
          Type :
          {type}
        </li>
      </ul>

    </div>
  );
}

Animal.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,

};

export default Animal;
