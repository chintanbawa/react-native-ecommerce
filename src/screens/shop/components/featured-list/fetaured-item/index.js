import React from 'react';
import {Dimensions} from 'react-native';
import {Image} from 'native-base';

import FeaturedImage from 'assets/mock/featured-img.png';

const screenWidth = Dimensions.get('window').width - 30;

export const FeaturedItem = ({item}) => {
  return (
    <Image
      source={FeaturedImage}
      resizeMode='contain'
      w={screenWidth}
      h={screenWidth * 0.7}
    />
  );
};
