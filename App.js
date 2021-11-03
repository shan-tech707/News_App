import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import GeneralNews from './src/Screens/GeneralNews';
import BusinessNews from './src/Screens/BusinessNews';
import TechnologyNews from './src/Screens/TechnologyNews';

const Tab = createMaterialTopTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.header}>
        <Text style={styles.headerText}>News</Text>
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontSize: 12},
          tabBarStyle: {backgroundColor: 'white'},
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: '#000',
          tabBarIndicatorStyle: {
            backgroundColor: '#fff',
          },
        }}>
        <Tab.Screen
          options={{
            tabBarLabel: 'General',
          }}
          name="GeneralNews"
          component={GeneralNews}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Business',
          }}
          name="BusinessNews"
          component={BusinessNews}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'Technology',
          }}
          name="TechnologyNews"
          component={TechnologyNews}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 18,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: 'red',
  },
  headerText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
