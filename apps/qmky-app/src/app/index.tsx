import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  NativeBaseProvider,
  View, Button, Text
} from "native-base"

import { Square } from '../pages/square'
import { Editor } from '../pages/editor'

import BookSVG from '../assets/icons/book.svg'
import HeartSVG from '../assets/icons/heart.svg'
import CoursesSVG from '../assets/icons/courses.svg'

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Push to Details... again"
        onPress={() => navigation.push('Details')}
      />
    </View>
  );
}

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Tab.Navigator initialRouteName="Square" >
          <Tab.Screen
            name="Square"
            options={{
              header: () => null,
              title: '磕头广场',
              tabBarIcon: ({ focused }) => <BookSVG width={24} height={24} stroke={focused ? "#0066FF" : "#000000"} />
            }}
            component={Square}
          />
          <Tab.Screen
            name="Settings"
            options={{
              header: () => null,
              title: '收藏',
              tabBarIcon: ({ focused }) => <HeartSVG width={24} height={24} stroke={focused ? "#0066FF" : "#000000"} />
            }}
            component={Editor}
          />
          <Tab.Screen
            name="My"
            options={{
              header: () => null,
              title: '我',
              tabBarIcon: ({ focused }) => <CoursesSVG width={24} height={24} stroke={focused ? "#0066FF" : "#000000"} />
            }}
            component={DetailsScreen}
          />
        </Tab.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default App;
