import { useSelector } from 'react-redux';
import { useState } from 'react';
import Animal from '../animal/animal';

function Zoo() {
  const zooAnimals = useSelector((state) => state.zoo);

  const [search, setSearch] = useState('');

  return (
    <div>
      <input
        type="text"
        onChange={({ target }) => {
          setSearch(target.value);
        }}
        placeholder="Search by type"
        className="input"
      />

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
  );
}

export default Zoo;
