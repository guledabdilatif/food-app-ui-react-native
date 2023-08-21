import React from 'react'
import { SafeAreaView } from 'react-native'
import { View, Text, Image } from 'react-native'
import { ChevronLeftIcon, PlusIcon, MinusIcon } from 'react-native-heroicons/solid'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'
import COLORS from '../constants/colors';
import foods from '../constants/foods'
import { ScrollView } from 'react-native';

const CartScreen = (props) => {
  const item = props.route.params
  const Navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView>
        <View style={{ paddingVertical: 20, flexDirection: 'row', alignItems: 'center' }}>
          <ChevronLeftIcon size={wp(10)} color='black' onPress={() => Navigation.goBack()} />
          <Text style={{ fontSize: hp(2.6), fontWeight: 'bold' }}>Cart Items</Text>
        </View>


        {/* cart items */}
        {
          foods.map((item, index) => {
            return <View key={index} style={{
              height: 100,
              elevation: 15,
              borderRadius: 10,
              backgroundColor: 'white',
              marginHorizontal: hp(1),
              paddingHorizontal: hp(1),
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: wp(20),
              paddingVertical: hp(2)

            }}>
              <Image source={item.image} style={{ width: wp(20), height: wp(20) }} />
              <View>
                <Text style={{ fontWeight: 'bold', fontSize: hp(2.4) }}>{item.name}</Text>
                <Text style={{ fontWeight: 'light', fontSize: hp(2) }}>{item.ingredients}</Text>
                <Text style={{ fontWeight: 'bold', fontSize: hp(2.4) }}>{item.price}</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: hp(3) }}>0</Text>
                <View style={{
                  backgroundColor: COLORS.primary,
                  flexDirection: 'row',
                  paddingHorizontal: hp(1),
                  marginRight: wp(2),
                  borderRadius: wp(10),
                  alignItems: 'center',
                  cursor: 'pointer'
                }}>
                  <MinusIcon size={24} color='black' />
                  <PlusIcon size={24} color='black' />
                </View>

              </View>
            </View>
          })
        }
      </ScrollView>
    </SafeAreaView>
  )
}

export default CartScreen