import React from 'react';
import {Dimensions} from 'react-native';
import {Image} from 'native-base';

const imageWidth = Dimensions.get('window').width * 0.5 - 5;

export const CollectionItem = ({item}) => {
  return (
    <Image source={item.itemImage} resizeMode='contain' size={imageWidth} />
  );
};
