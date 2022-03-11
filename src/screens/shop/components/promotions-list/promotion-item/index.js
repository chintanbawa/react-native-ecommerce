import React from 'react';

import {Circle, HStack, Image, Text, VStack} from 'native-base';

import StarIcon from 'assets/icons/star.png';
import LikeIcon from 'assets/icons/like.png';
import ShareIcon from 'assets/icons/share.png';

export const PromotionItem = ({item}) => {
  const {itemImage, itemName, itemPrice, itemRating, itemReviewsCount} = item;
  return (
    <HStack mx={4} my={2} p={2} bgColor='#EDF5FD' borderRadius={10} shadow={3}>
      <Image
        source={itemImage}
        size={130}
        borderRadius={10}
        alignSelf='center'
      />
      <VStack flex={1} mx={2} justifyContent='space-between'>
        <Text fontSize='md' fontWeight={400}>
          {itemName}
        </Text>
        <Text fontSize='lg' fontWeight={200}>
          {itemPrice}
        </Text>
        <HStack alignItems='center'>
          <Image source={StarIcon} resizeMode='contain' size={'16px'} />
          <Text fontSize='sm' color='#FBBC04' mr={1}>
            {itemRating}
          </Text>
          <Text fontSize='sm'>({itemReviewsCount})</Text>
        </HStack>
      </VStack>
      <VStack>
        <Circle size='32px' bg='#EBEBEB'>
          <Image source={LikeIcon} resizeMode='contain' size={'20px'} />
        </Circle>
        <Circle size='32px' bg='#EBEBEB' mt={2}>
          <Image source={ShareIcon} resizeMode='contain' size={'20px'} />
        </Circle>
      </VStack>
    </HStack>
  );
};
