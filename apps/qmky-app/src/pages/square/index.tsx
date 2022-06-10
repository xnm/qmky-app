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
import { KowtowCard } from '../../components/KowtowCard'


const FirstRoute = () => {
  return (
    <Box style={[styles.scene, { maxWidth: '100%' }]}>
      <KowtowCard kowtow={{
        title: '磕！',
        creator: '匿名博粉',
        create_time: '2022-06-01 10:11'
      }}/>
      <KowtowCard kowtow={{
        title: '每日一磕',
        description: '❤守❤护❤世❤界❤上❤最❤好❤的❤博❤哥❤',
        creator: 'Reckful',
        create_time: '2022-06-01 10:11'
      }}/>
      <KowtowCard kowtow={{
        title: '磕磕磕磕磕',
        description: '❤守❤护❤世❤界❤上❤最❤好❤的❤博❤哥❤',
        main_img: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201811%2F15%2F20181115231906_eyhpz.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657443755&t=1cd85790f222e07a2fadec2730d80639',
        creator: '宝宝',
        create_time: '2022-06-01 10:11'
      }}/>
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
  today: (...args) => {
    return <FirstRoute />
  },
  weekly: SecondRoute,
  history: ThirdRoute,
});

export function Square({ navigation }) {
  const window = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([{
    key: "today",
    title: "今日热磕"
  }, {
    key: "weekly",
    title: "本周磕榜"
  }, {
    key: "history",
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
      
        sceneContainerStyle={{
          height: 400,
          width: window.width,
          borderColor: '#000',
        }}
      />
  )
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
 });