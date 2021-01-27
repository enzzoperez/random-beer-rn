import React from 'react';
import 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import App from '../src/App';
import {render, fireEvent} from '@testing-library/react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {DetailsScreen, HomeScreen} from '../src/Screens';
import {routes} from '../src/utils/routes';

// Silence the warning https://github.com/facebook/react-native/issues/11094#issuecomment-263240420
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

beforeEach(() => {
  fetch.resetMocks();
});

//Mock api call

it('renders correctly', async () => {
  fetch.mockResponses(
    [
      JSON.stringify([
        {
          id: 1,
          name: 'Buzz item 1',
        },
        {
          id: 2,
          name: 'Buzz2',
        },
      ]),
    ],
    [
      JSON.stringify([
        {
          id: 1,
          name: 'Buzz item 1',
          tagline: 'My tagline detail',
          description: 'Description for detail',
          image_url:
            'https://assets.puzzlefactory.pl/puzzle/300/056/original.jpg',
        },
      ]),
    ],
  );
  const Stack = createStackNavigator();

  const component = (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name={routes.detailsPage} component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  const {findAllByText, getByText, findByText} = render(component);

  const list = await findAllByText(/buzz/i);

  expect(list.length).toBe(2);

  const itemSelected = getByText(/item 1/i);
  expect(itemSelected).toBeTruthy();

  fireEvent(itemSelected, 'press');

  const nameItem = await findByText(/item 1/i);
  const nameTagline = await findByText(/tagline detail/i);

  expect(nameItem).toBeTruthy();
  expect(nameTagline).toBeTruthy();
});
