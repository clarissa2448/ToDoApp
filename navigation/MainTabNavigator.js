/* eslint react/prop-types: 0 */
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';
import CONSTANTS from '../constants';
import TodosScreen from '../screens/TodosScreen';
import HomeScreen from '../screens/HomeScreen';

const commonNavigationOptions = ({ navigation }) => ({
  header: null,
  title: navigation.state.routeName,
});

const routeOptions = {
  screen: TodosScreen,
  navigationOptions: commonNavigationOptions,
};
const routeOptions2 = {
  screen: HomeScreen,
  navigationOptions: commonNavigationOptions,
};

const TabNav = TabNavigator(
  {
    [CONSTANTS.NONE]: routeOptions2,
    [CONSTANTS.ALL]: routeOptions,
    [CONSTANTS.ACTIVE]: routeOptions,
    [CONSTANTS.COMPLETED]: routeOptions,
    [CONSTANTS.STARRED]: routeOptions,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case CONSTANTS.ALL:
            iconName = 'format-list-bulleted';
            break;
          case CONSTANTS.STARRED:
            iconName = 'star-border';
            break;
          case CONSTANTS.ACTIVE:
            iconName = 'filter-center-focus';
            break;
          case CONSTANTS.COMPLETED:
            iconName = 'playlist-add-check';
            break;
          default:
            iconName = 'home';
            break;


        }
        return (
          <MaterialIcons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
  },
);

export default TabNav;
