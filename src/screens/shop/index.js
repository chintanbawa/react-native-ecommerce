import React from 'react';
import {ScrollView, VStack} from 'native-base';

import {PromotionsData} from '../../mock-data/promotions-data';
import {CollectionsData} from '../../mock-data/collections-data';

import {
  ClientInfo,
  CollectionsList,
  FeaturedList,
  FilterTagsList,
  HeadingText,
  PromotionList,
  SaleView
} from './components';

const mt = 3;

const ShopScreen = () => {
  return (
    <ScrollView bgColor='#F5F5F5'>
      <VStack mb={16}>
        <ClientInfo />
        <HeadingText mt={mt}>Featured Collections</HeadingText>
        <FeaturedList data={['1', '2', '3']} pl={4} mt={mt} />
        <HeadingText mt={mt}>Shop by Category</HeadingText>
        <FilterTagsList data={['Women', 'Men', 'Kids']} pl={4} mt={mt} />
        <HeadingText mt={mt}>Promotions</HeadingText>
        <PromotionList data={PromotionsData} mt={1} />
        <SaleView mt={mt} />
        <HeadingText mt={mt}>Collections</HeadingText>
        <CollectionsList data={CollectionsData} mt={1} px={2} />
      </VStack>
    </ScrollView>
  );
};

export default ShopScreen;
