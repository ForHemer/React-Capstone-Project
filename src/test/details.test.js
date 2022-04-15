import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import AnimalDetail from '../components/animal/details';

describe('Testing Animal Details', () => {
  it('Render the Animal Details page, should match to the snapshot', () => {
    const list = renderer
      .create(
        <Provider store={store}>
          <Router>
            <AnimalDetail />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(list).toMatchSnapshot();
  });
});
