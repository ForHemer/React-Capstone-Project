import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Animal from '../components/animal/animal';

describe('Testing Animal', () => {
  it('Render the Details page, should match to the snapshot', () => {
    const list = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Animal />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(list).toMatchSnapshot();
  });
});
