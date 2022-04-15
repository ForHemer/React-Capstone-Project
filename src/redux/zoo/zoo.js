const GET_ZOO = 'zoo/zoo/GET_ZOO';
const TOGGLE_DETAIL = 'zoo/zoo/TOGGLE_DETAIL';
const REMOVE_DETAIL = 'zoo/zoo/REMOVE_DETAIL';
const baseURL = 'https://zoo-animal-api.herokuapp.com/animals/rand/10';

const initialState = [];

export const getZoo = (payload) => ({
  type: GET_ZOO,
  payload,
});

export const toggleDetail = (id) => ({
  type: TOGGLE_DETAIL,
  payload: {
    id,
  },
});

export const removeDetail = (id) => ({
  type: REMOVE_DETAIL,
  payload: {
    id,
  },
});

export const fetchZoosPI = () => async (dispatch) => {
  await fetch(`${baseURL}`)
    .then((response) => response.json())
    .then((animalList) => {
      const animals = animalList.map((animal) => ({
        name: animal.name,
        latin_name: animal.latin_name,
        animal_type: animal.animal_type,
        active_time: animal.active_time,
        length_min: animal.length_min,
        length_max: animal.length_max,
        weight_min: animal.weight_min,
        weight_max: animal.weight_max,
        lifespan: animal.lifespan,
        habitat: animal.habitat,
        diet: animal.diet,
        geo_range: animal.geo_range,
        image_link: animal.image_link,
        id: animal.id,
        detail: false,
        item_detail: false,
      }));
      if (animals) {
        dispatch(getZoo(animals));
      }
    });
};

// Function - Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DETAIL: {
      const newState = state.map((animal) => {
        if (animal.id !== action.payload.id) return animal;
        return { ...animal, detail: true };
      });
      return [...newState];
    }
    case REMOVE_DETAIL: {
      const newState = state.map((animal) => {
        if (animal.id !== action.payload.id) return animal;
        return { ...animal, detail: false };
      });
      return [...newState];
    }
    case GET_ZOO:
      return [...action.payload];

    default:
      return state;
  }
};

export default reducer;
