/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  // Text,
  Button,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NativeBaseProvider, Box, HStack, VStack, Pressable, Image, Text } from "native-base";

import BookSVG from '../assets/icons/book.svg'
import HeartSVG from '../assets/icons/heart.svg'
import CoursesSVG from '../assets/icons/courses.svg'

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>今天还没人磕！快来成为第一个！</Text>
      <Box bg="primary.600" py="4" px="3" borderRadius="5" rounded="md" width={375} maxWidth="100%">
        <HStack justifyContent="space-between">
          <Box justifyContent="space-between">
            <VStack space="2">
              <Text fontSize="sm" color="white">
                Today @ 9PM
              </Text>
              <Text color="white" fontSize="xl">
                Let's talk about avatar!
              </Text>
            </VStack>
            <Pressable rounded="xs" bg="primary.400" alignSelf="flex-start" py="1" px="3">
              <Text textTransform="uppercase" fontSize="sm" fontWeight="bold" color="white">
                Remind me
              </Text>
            </Pressable>
          </Box>
          <Image source={{
          uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg'
        }} alt="Aang flying and surrounded by clouds" height="100" rounded="full" width="100" />
        </HStack>
      </Box>
    </View>
  );
}

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
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            options={{
              title: '磕头广场',
              tabBarIcon: ({ focused }) => <BookSVG width={24} height={24} stroke={focused ? "#0066FF" : "#000000"} />
            }}
            component={Home}
          />
          <Tab.Screen
            name="Settings"
            options={{
              title: '收藏',
              tabBarIcon: ({ focused }) => <HeartSVG width={24} height={24} stroke={focused ? "#0066FF" : "#000000"} />
            }}
            component={DetailsScreen}
          />
          <Tab.Screen
            name="My"
            options={{
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
