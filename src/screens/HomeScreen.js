import React, { useState } from 'react'
import { View, Text, SafeAreaView, Image, TextInput, elevation, TouchableOpacity, ScrollView, TouchableHighlight } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import COLORS from '../constants/colors'
import { MagnifyingGlassIcon, PlusIcon, CogIcon } from 'react-native-heroicons/solid'
import foods from '../constants/foods';
import { useNavigation } from '@react-navigation/native'


const HomeScreen = () => {
  const navigation = useNavigation()
  const categoryImages = [
    {
      image: require('../../assets/catergories/pizza.png'),
      name: 'Pizza'
    },
    {
      image: require('../../assets/catergories/salad.png'),
      name: 'Salad'
    },
    {
      image: require('../../assets/catergories/sushi.png'),
      name: 'Sushi'
    },
    {
      image: require('../../assets/catergories/burger.png'),
      name: 'Burger'
    }
  ]

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView>
        <View style={{ display: 'flex', marginTop: wp(20), flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: wp(4) }}>
          <View>
            <View>
              <Text style={{ fontSize: hp(4) }}>Hello <Text style={{ fontWeight: 'bold' }}>Abdiladif</Text>
              </Text>
              <Text style={{ fontSize: hp(2), color: 'rgba(0,0,0,0.7)' }}>What do you want today</Text>

            </View>
          </View>
          <Image style={{ width: wp(18), height: wp(18), borderRadius: wp(9) }} source={require('../../assets/person.png')} />

        </View>
        <View style={{ flexDirection: 'row', marginTop: 40, paddingHorizontal: wp(4) }}>
          <View style={{
            flex: 1,
            height: 50,
            borderRadius: wp(10),
            alignContent: 'center',
            backgroundColor: COLORS.secondary,
            flexDirection: "row",
            paddingHorizontal: wp(3),
            
          }}>
           
            <MagnifyingGlassIcon size={wp(9)} color={COLORS.primary} style={{ marginLeft: wp(1), marginTop: wp(1) }} />
            <TextInput style={{ flex: 1, fontSize: wp(5), marginLeft: wp(2) }} placeholder='Search for food' />
            
           
          </View>
          <View style={{ width: 50, height: 50, borderRadius: 10, marginLeft: 10, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity>
              <CogIcon color='white' size={32} />
            </TouchableOpacity>

          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flexDirection: 'row', display: 'flex', flex: 1, marginTop: wp(10) }}>
          {
            categoryImages.map((item, index) => {

              return <TouchableOpacity key={index} style={{}}>
                < View
                  style={{
                    display: 'flex',
                    elevation: 5,
                    flexDirection: 'row',
                    paddingVertical: hp(1),
                    paddingHorizontal: hp(3),
                    borderRadius: wp(10),
                    alignItems: 'center',
                    marginRight: wp(7),
                    marginTop: hp(1),
                    backgroundColor: COLORS.secondary,
                    marginBottom: hp(2)
                  }}>
                  <Image source={item.image} style={{ width: wp(8), height: wp(8) }} />
                  <Text style={{ fontWeight: 500, fontSize: hp(1.8) }}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            })
          }
        </ScrollView>

        <View  style={{ flexWrap: 'wrap', marginTop: 20 }}>

          <View style={{ flexWrap: 'wrap', width: wp(140), flexDirection: 'row', paddingHorizontal: hp(1) }}>
            {
              foods.map((item, index) => {
                return <TouchableHighlight underlayColor={COLORS.white} onPress={() => navigation.navigate("Detail", { ...item })} key={index} style={{ padding: wp(3) }} >
                  <View style={{ backgroundColor: 'white', borderRadius: 10 }}>
                    <Image source={item.image} style={{ width: 190, height: 190, marginBottom: wp(2), marginLeft: wp(-2) }} />
                    <Text style={{ fontSize: hp(2), fontWeight: 'bold' }}>{item.name}</Text>
                    <Text style={{ fontSize: hp(2), fontWeight: '400', color: 'rgba(0,0,0,0.8)' }}>{item.ingredients}</Text>
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: hp(4), justifyContent: 'space-between', alignItems: 'center' }}>
                      <Text style={{ fontSize: hp(3), fontWeight: 'bold' }}>${item.price}</Text>
                      <PlusIcon size={42} color='black' style={{ position: 'absolute', right: wp(2), backgroundColor: COLORS.primary, borderRadius: 21, padding: wp(2) }} />
                    </View>
                  </View>
                </TouchableHighlight>
              })
            }
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen