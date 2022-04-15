import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Animal from './animal';
import ZooCSS from './zoo.module.css';

function Zoo() {
  const zooAnimals = useSelector((state) => state.zoo);

  const [search, setSearch] = useState('');

  return (
    <Row className={ZooCSS.zooContainer}>
      <Row>
        <input
          type="text"
          onChange={({ target }) => {
            setSearch(target.value);
          }}
          placeholder="Search by type"
          className="input"
        />
      </Row>

      <div className={ZooCSS.zooRow}>
        {zooAnimals
          .filter((item) => item.animal_type.toLowerCase().includes(search.toLowerCase()))
          .map((item) => (
            <Animal
              key={item.id}
              id={item.id}
              type={item.animal_type}
              name={item.name}
              image={item.image_link}
              latin_name={item.latin_name}
              active_time={item.active_time}
              length_min={item.length_min}
              length_max={item.length_max}
              weight_min={item.weight_min}
              weight_max={item.weight_max}
              lifespan={item.lifespan}
              habitat={item.habitat}
              diet={item.diet}
              geo_range={item.geo_range}
              detail={item.detail}
              item_detail={item.item_detail}
            />
          ))}
      </div>
    </Row>
  );
}

export default Zoo;