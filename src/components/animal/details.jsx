import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeDetail } from '../../redux/zoo/zoo';
import AnimalDetailCSS from './details.module.css';

function AnimalDetail() {
  const detailAnimal = useSelector((state) => state.zoo);
  const dispatch = useDispatch();

  const handleBackClick = () => {
    dispatch(removeDetail(detailAnimal.id));
  };

  let obj = {};

  detailAnimal.forEach((animal) => {
    if (animal.detail) {
      obj = {

        id: animal.id,
        type: animal.animal_type,
        name: animal.name,
        image: animal.image_link,
        latin_name: animal.latin_name,
        active_time: animal.active_time,
        length_min: animal.length_min,
        weight_min: animal.weight_min,
        weight_max: animal.weight_max,
        lifespan: animal.lifespan,
        habitat: animal.habitat,
        diet: animal.diet,
        geo_range: animal.geo_range,
        detail: animal.detail,
        animal_detail: animal.animal_detail,

      };
    }
  });

  return (
    <Row
      id={obj.id}
      className={AnimalDetailCSS.detailStyle}

    >

      <Link to="/" className={AnimalDetailCSS.animalDetailLink}>
        <button type="button" className={AnimalDetailCSS.buttonLeft} onClick={handleBackClick}>Back</button>
      </Link>

      <ul className={AnimalDetailCSS.liste}>
        <ListGroup.Item style={{ backgroundColor: '#3b5b98' }} className={AnimalDetailCSS.detailStyle}>

          <Card.Img src={obj.image} alt={obj.name} style={{ width: '150px' }} />

        </ListGroup.Item>

        <ListGroup.Item style={{ backgroundColor: '#3b5b98', color: '#fff' }}>
          <span>Name : </span>
          <span>{obj.name}</span>
        </ListGroup.Item>

        <ListGroup.Item style={{ backgroundColor: '#3b5b98', color: '#fff' }}>
          <span>Type : </span>
          <span>{obj.type}</span>
        </ListGroup.Item>

        <ListGroup.Item style={{ backgroundColor: '#3b5b98', color: '#fff' }}>
          <span>Latin Name : </span>
          <span>{obj.latin_name}</span>
        </ListGroup.Item>

        <ListGroup.Item style={{ backgroundColor: '#3b5b98', color: '#fff' }}>
          <span>Active time : </span>
          <span>{obj.active_time}</span>
        </ListGroup.Item>

        <ListGroup.Item style={{ backgroundColor: '#3b5b98', color: '#fff' }}>
          <span>Length (min) : </span>
          <span>{obj.length_min}</span>
        </ListGroup.Item>

        <ListGroup.Item style={{ backgroundColor: '#3b5b98', color: '#fff' }}>
          <span>Length (max) : </span>
          <span>{obj.length_max}</span>
        </ListGroup.Item>

        <ListGroup.Item style={{ backgroundColor: '#3b5b98', color: '#fff' }}>
          <span>Weight (min) : </span>
          <span>{obj.weight_min}</span>
        </ListGroup.Item>

        <ListGroup.Item style={{ backgroundColor: '#3b5b98', color: '#fff' }}>
          <span>Weight (max) : </span>
          <span>{obj.weight_max}</span>
        </ListGroup.Item>

        <ListGroup.Item style={{ backgroundColor: '#3b5b98', color: '#fff' }}>
          <span>Lifespan : </span>
          <span>{obj.lifespan}</span>
        </ListGroup.Item>

        <ListGroup.Item style={{ backgroundColor: '#3b5b98', color: '#fff' }}>
          <span>Habitat : </span>
          <span>{obj.habitat}</span>
        </ListGroup.Item>

        <ListGroup.Item style={{ backgroundColor: '#3b5b98', color: '#fff' }}>
          <span>Diet : </span>
          <span>{obj.diet}</span>
        </ListGroup.Item>

        <ListGroup.Item style={{ backgroundColor: '#3b5b98', color: '#fff' }}>
          <span>Geography : </span>
          <span>{obj.geo_range}</span>
        </ListGroup.Item>
      </ul>
    </Row>
  );
}

export default AnimalDetail;