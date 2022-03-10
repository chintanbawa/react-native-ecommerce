import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ShopScreen from 'screens/shop';
import ReviewsScreen from 'screens/reviews';

import {AppHeader, AppTabBar} from 'components';

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <AppTabBar {...props} />}
        screenOptions={{
          header: AppHeader
        }}
      >
        <Tab.Screen name='Shop' component={ShopScreen} />
        <Tab.Screen name='More' component={() => <></>} />
        <Tab.Screen name='Reviews' component={ReviewsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
