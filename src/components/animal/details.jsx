import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';


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
    <div
      id={obj.id}
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        zIndex: '9999',
      }}
    >
      <Link to="/">
        <button type="button" onClick={handleBackClick}>Back</button>
      </Link>
      <ul>
        <li>
          <p>
            <img src={obj.image} alt={obj.name} style={{ width: '150px' }} />
          </p>
        </li>

        <li>
          <p>Name</p>
          <p>{obj.name}</p>
        </li>

        <li>
          <p>Type</p>
          <p>{obj.animal_type}</p>
        </li>

        <li>
          <p>Latin Name</p>
          <p>{obj.latin_name}</p>
        </li>

        <li>
          <p>Active time</p>
          <p>{obj.active_time}</p>
        </li>

        <li>
          <p>Length (min)</p>
          <p>{obj.length_min}</p>
        </li>

        <li>
          <p>Length (max)</p>
          <p>{obj.length_max}</p>
        </li>

        <li>
          <p>Weight (min)</p>
          <p>{obj.weight_min}</p>
        </li>

        <li>
          <p>Weight (max)</p>
          <p>{obj.weight_max}</p>
        </li>

        <li>
          <p>Lifespan</p>
          <p>{obj.lifespan}</p>
        </li>

        <li>
          <p>Habitat</p>
          <p>{obj.habitat}</p>
        </li>

        <li>
          <p>diet</p>
          <p>{obj.diet}</p>
        </li>

        <li>
          <p>Geography</p>
          <p>{obj.geo_range}</p>
        </li>
      </ul>
    </div>
  );
}

export default AnimalDetail;
