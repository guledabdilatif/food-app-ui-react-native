import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View } from 'react-native'
import OnBoardScreen from '../screens/OnBoardScreen'
import HomeScreen from '../screens/HomeScreen'
import DetailsScreen from '../screens/DetailsScreen'
import CartScreen from '../screens/CartScreen'
import { HomeIcon, HeartIcon, ChartBarIcon, ShoppingCartIcon, MagnifyingGlassIcon } from 'react-native-heroicons/solid'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'
import COLORS from '../constants/colors'
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{ headerShown: false }}
      tabBarOption={
        {
          style: { height: 100, borderTopWidth: 0, elevation: 0 },
          showLabel: false,
          activeTintColor: COLORS.primary
        }}>
      <Tab.Screen
        name='HomeScreen'
        component={HomeScreen}
        onPress={() => navigation.navigate('Home')}
        options={{
          tabBarIcon: ({ color }) => (<HomeIcon color={color} size={28} />),
          tabBarLabel: ''
        }} />
      <Tab.Screen
        name='chatBar'
        component={HomeScreen}
        onPress={() => navigation.navigate('Home')}
        options={{
          tabBarIcon: ({ color }) => (<ChartBarIcon color={color} size={28} />),
          tabBarLabel: ''
        }} />

      <Tab.Screen
        name='search'
        component={HomeScreen}
        onPress={() => navigation.navigate('Home')}
        options={{
          tabBarIcon: ({ color }) => (
            <View style={{marginTop:wp(-10),justifyContent:'center', borderColor: COLORS.primary, borderWidth:2, alignItems: 'center', padding: wp(1), height: 60, width: 60, backgroundColor: '#fff', borderRadius: 30 }}>
              <MagnifyingGlassIcon color={COLORS.primary} size={38} style={{ padding: wp(1),  backgroundColor: 'white' }} />
            </View>),

          tabBarLabel: ''
        }} />
      <Tab.Screen
        name='favorite'
        component={HomeScreen}
        onPress={() => navigation.navigate('Home')}
        options={{
          tabBarIcon: ({ color }) => (<HeartIcon color={color} size={28} />),
          tabBarLabel: ''
        }} />
      <Tab.Screen
        name='CartScreen'
        component={CartScreen}
        onPress={() => navigation.navigate('Cart')}
        options={{
          tabBarIcon: ({ color }) => (<ShoppingCartIcon color={color} size={28} />),
          tabBarLabel: ''
        }} />
    </Tab.Navigator>
  )
}
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Onboard' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Onboard' component={OnBoardScreen} />
        <Stack.Screen name='Home' component={BottomTabs} />
        <Stack.Screen name='Detail' component={DetailsScreen} />
        <Stack.Screen name='Cart' component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation