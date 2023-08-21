import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnBoardScreen from '../screens/OnBoardScreen'
import HomeScreen from '../screens/HomeScreen'
import DetailsScreen from '../screens/DetailsScreen'
import CartScreen from '../screens/CartScreen'
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Onboard' component={OnBoardScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Detail' component={DetailsScreen} />
        <Stack.Screen name='Cart' component={CartScreen} />        
      </Stack.Navigator>  
    </NavigationContainer>
  )
}

export default AppNavigation