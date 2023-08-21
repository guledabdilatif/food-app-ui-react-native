import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity } from 'react-native'
import COLORS from '../constants/colors'
import { ChevronLeftIcon, HeartIcon } from 'react-native-heroicons/solid'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native';

const DetailsScreen = (props) => {
  const item = props.route.params;
  const navigation = useNavigation();
  const [favorite, setFavorite] = useState(false)

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white }}>
      <StatusBar backgroundColor='rgba(0,0,0,0.3)' color="black" />
      <View style={{ paddingVertical: 20, alignItems: 'center', flexDirection: 'row', marginHorizontal: 20 }} >
        <ChevronLeftIcon size={wp(10)} color='black' strokeWidth={20} onPress={() => navigation.goBack()} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: wp(2) }}>Details</Text>
      </View>
      <ScrollView>
        <View style={{ justifyContent: 'center', alignItems: 'center', height: wp(80) }}>
          <Image source={item.image} style={{ width: hp(30), height: hp(30) }} />
        </View>
        <View style={{
          paddingHorizontal: wp(3),
          paddingTop: wp(1),
          paddingBottom: wp(20),
          backgroundColor: COLORS.primary,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          flex:1

        }}>
          <View style={{ flexDirection: 'row', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: wp(2) }}>
            <Text style={{ fontWeight: 'bold', fontSize: hp(3), color: 'white' }}>{item.name}</Text>
            <View style={{ backgroundColor: 'rgba(255,255,255,0.3)', padding: 10, borderRadius: wp(10) }}>
              <HeartIcon color={favorite ? 'red' : COLORS.white} size={wp(10)} onPress={() => setFavorite(!favorite)} />
            </View>
          </View>
          <Text style={{ color: COLORS.white, fontSize: hp(2.2), fontWeight: 'bold' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum lacus ac, malesuada arcu. Praesent aliquet justo in libero scelerisque, id euismod ligula vehicula. Maecenas sed varius nisi. Sed consectetur lacinia justo, non congue elit laoreet ac. Integer ac felis sit amet est rhoncus feugiat.</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Cart', {...item})} style={{
            backgroundColor: COLORS.white,
            marginBottom: wp(3),
            height: hp(8),
            borderRadius: 50,
            padding: 20, alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            flex: 1, 
            marginTop:wp(20),
            width:'100%'
          }}>
            <Text style={{
              color: COLORS.primary,
              fontWeight: 'bold',
              fontSize: 20
            }}>Add To Cart</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>

  )
}

export default DetailsScreen