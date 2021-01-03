import React from 'react';
import {Image, Text, View} from 'react-native';
import {useQuery} from 'react-query';
import {getABirra} from '../utils/services';

const DetailsScreen = ({route, navigation}) => {
  const {id} = route.params;

  const {data, error, isLoading} = useQuery(['detailBirra', id], getABirra);
  console.log('daaa', data, error, isLoading);
  return (
    <View style={{color: 'black'}}>
      {data && (
        <>
          <Text style={{color: 'black'}}>Slogan: {data[0].tagline}</Text>
          <Text>Description: {data[0].description}</Text>
          <Image source={{uri: data[0].image_url}} />
          <Text>detail page</Text>
        </>
      )}
    </View>
  );
};

export default DetailsScreen;
