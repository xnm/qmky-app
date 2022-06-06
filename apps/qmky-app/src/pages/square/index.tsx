/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useEffect, useState } from 'react';
import { useWindowDimensions, Dimensions, Animated, StyleSheet } from 'react-native'
import {
  View,
  Box,
  Pressable,
  Image,
  Text,
  Flex,
  useColorModeValue,
  Button,
} from "native-base";
import { TabView, SceneMap } from 'react-native-tab-view';

// enum ACTIVE_TABS {
//   TODAY = 'TODAY',
//   WEEK = 'WEEK',
//   ALL = 'ALL'
// }

// const TABS_CONF: {
//   key: ACTIVE_TABS,
//   title: string
// }[] = [{
//   key: ACTIVE_TABS.TODAY,
//   title: '今日磕头榜'
// }, {
//   key: ACTIVE_TABS.WEEK,
//   title: '周磕头榜'
// }, {
//   key: ACTIVE_TABS.ALL,
//   title: '历史磕头'
// }]
const FirstRoute = () => {
  return (
    <Box style={[styles.scene, { backgroundColor: '#ccc', minHeight: 200 }]}>
      <Flex direction="row" px={16}>
        <Flex direction="column" pt={16} m={4}>
          <Image
            size="lg"
            source={{
              uri: 'https://image.flaticon.com/icons/png/512/3079/3079038.png',
            }}
            alt="image"
          />
        </Flex>
        <Flex direction="column" pt={16} pr={4}>
          <Text fontSize={24} py={3}>
            Skills
          </Text>
          <Text pt={4}>
            Add your skills so that people on the platform can reach you.
          </Text>
          <Box py={4} width={32}>
            <Button size="sm">ADD SKILLS</Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#ccc', minHeight: 200 }]}>
    <Text>12312321312</Text>
    <Text>12312321312</Text>
    <Text>12312321312</Text>
    <Text>12312321312</Text>
    <Text>12312321312</Text>
    <Text>12312321312</Text>
    <Text>12312321312</Text>
    <Text>12312321312</Text>
  </View>
 );

const ThirdRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#555' }]} />
 );

const initialLayout = {
  width: Dimensions.get("window").width,
};
const renderScene = SceneMap({
  first: (...args) => {
    return <FirstRoute />
  },
  second: SecondRoute,
  third: ThirdRoute,
});

export function Square({ navigation }) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([{
    key: "first",
    title: "今日热磕"
  }, {
    key: "second",
    title: "本周磕榜"
  }, {
    key: "third",
    title: "历史磕榜"
  }]);

  const renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {
        const opacity = props.position.interpolate({
          inputRange,
          outputRange: inputRange.map(inputIndex => inputIndex === i ? 1 : 0.5)
        });
        const color = index === i ? "#000" : "#1f2937"
        const borderColor = index === i ? "cyan.500" : "coolGray.200"
        return <Box key={route.key} borderBottomWidth="3" borderColor={borderColor} flex={1} alignItems="center" p="3">
              <Pressable onPress={() => {
            console.log(i);
            setIndex(i);
          }}>
                <Animated.Text style={{
              color
            }}>{route.title}</Animated.Text>
              </Pressable>
            </Box>;
      })}
      </Box>;
  };

  return (
      <TabView
        navigationState={{
          index,
          routes
        }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        lazy
        sceneContainerStyle={{
          // marginTop: StatusBar.currentHeight
          flex: 1,
          height: 600,
          borderColor: '#000',
          borderWidth: 2,
          // display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          backgroundColor: '#3322',
          zIndex: 999
        }}
      />
  )
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    height: 600,
    width: 600,
    backgroundColor: '#000'
  },
 });