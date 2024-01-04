import React, { useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import { Animated, Easing, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import StoreStack from './StoreStack';

const Tab = createBottomTabNavigator();


const BottomNav = ({ state, descriptors, navigation, handleScroll }: {state: any, descriptors: any, navigation: any, handleScroll: any }) => {
    const translateY = useRef(new Animated.Value(state.routes[state.index].name === 'Chat' ? 200 : 0)).current;

    const opacity = state.routes[state.index].name === 'Chat' ? 0 : 1
  
    const handleScrollInternal = (event: any) => {
      const scrollY = event.nativeEvent.contentOffset.y;
      const direction = scrollY > 0 ? 'down' : 'up';
  
      Animated.timing(translateY, {
        toValue: direction === 'down' ? 56 : 0,
        duration: 300,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: false,
      }).start();
  
      handleScroll && handleScroll(event);
    }
  
    return (
      <Animated.View style={[styles.bottomNav, { transform: [{ translateY: translateY }] }, { opacity: state.routes[state.index].name === 'Chat' ? 0 : 1 }]}>
        <View
        style={{
            backgroundColor: '#fffffffa',
            borderRadius: 60,
            display: 'flex',
            flexDirection: 'row',
            padding: 16
        }}
        >
          {state.routes.map((route: any, index: number) => {
            const { options } = descriptors[route.key];
            const label =
                options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;
    
            return (
                <TouchableOpacity
                key={index}
                style={styles.navItem}
                onPress={() => {console.log(route); navigation.navigate(route.name)}}
                >
                  <Text>{label}</Text>
                </TouchableOpacity>
            )
          })}
        </View>
      </Animated.View>
    );
}

const BottomTabNavigator = () => {
  return (
        <Tab.Navigator
          tabBar={(props) => (
              <BottomNav
              {...props}
              handleScroll={(event: any) => {
              }}
              />
          )}
          // initialRouteName='Onboard'
          initialRouteName='home'
          sceneContainerStyle={{
            backgroundColor: 'white'
          }}
          screenOptions={{
              headerShown: false,
              // tabBarStyle: {
              //     backgroundColor: '#fffffffa',
              //     // backgroundColor: '#94abba10',
              //     borderRadius: 60,
              //     shadowColor: 'transparent',
              //     position: 'absolute',
              //     bottom: 20,
              //     right: 20,
              //     left: 20,
              //     // padding: 6,
              //         // borderRadius: 60,
              // }
          }}
        >
            <Tab.Screen name="home" component={HomeStack} options={{ tabBarLabel: 'home', tabBarShowLabel: false }} />
            <Tab.Screen name="store" component={StoreStack} options={{ tabBarLabel: 'store', tabBarShowLabel: false }} />
        </Tab.Navigator>
    // </View>
  )
}

const styles = StyleSheet.create({
  bottomNav: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    left: 20,
    borderRadius: 60
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default BottomTabNavigator;
