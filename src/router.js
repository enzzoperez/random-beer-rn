import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {routes} from './utils/routes';
import {DetailsScreen, HomeScreen} from './Screens';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={routes.homePage} component={HomeScreen} />
        <Stack.Screen name={routes.detailsPage} component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
