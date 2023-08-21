import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Text, SafeAreaView, View, Image, StyleSheet, TouchableOpacity, Button } from 'react-native'
import COLORS from '../constants/colors'

import { useNavigation } from '@react-navigation/native'

const OnBoardScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ height: wp(100) }}>
        <Image style={{ width: "100%", resizeMode: 'contain', top: -140 }} source={require('../../assets/onboardImage.png')} />
      </View>
      <View style={{ paddingHorizontal: 50, flex: 1 }}>
        <Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center' }}>Delicious Food</Text>
        <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 18, color: COLORS.grey }}>we help you find best and delicious food</Text>
      </View>
      <View style={style.indicatorContainer}>
        <View style={style.currentIndicator}></View>
        <View style={style.Indicator}></View>        
        <View style={style.Indicator}></View>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={{
        backgroundColor: COLORS.primary,
        marginBottom: wp(3),
        height: hp(8),
        borderRadius: 50,
        marginHorizontal: wp(8),
        padding: 20, alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
      }}>
        <Text style={{
          color: COLORS.white,
          fontWeight: 'bold',
          fontSize: 20
        }}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>

  )
}

export default OnBoardScreen
const style = StyleSheet.create({
  indicatorContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItem: 'center',
    height: wp(30)
  },
  currentIndicator: {
    height: 12,
    width: 30,
    backgroundColor: COLORS.primary,
    marginHorizontal: 5,
    borderRadius: 6
  },
  Indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: COLORS.grey,
    marginHorizontal: 5
  }
})