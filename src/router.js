import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {routes} from './utils/routes';
import {DetailsPage, HomePage} from './Pages';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={routes.homePage} component={HomePage} />
        <Stack.Screen name={routes.detailsPage} component={DetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
