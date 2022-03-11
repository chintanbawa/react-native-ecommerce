import React, {useState} from 'react';
import {HStack, ScrollView, VStack, ZStack} from 'native-base';

import {PromotionsData} from '../../mock-data/promotions-data';
import {CollectionsData} from '../../mock-data/collections-data';

import {
  ClientInfo,
  CollectionsList,
  FeaturedList,
  FilterTagsList,
  FilterView,
  HeadingText,
  PromotionList,
  SaleView,
  SearchView
} from './components';

const mt = 3;

const ShopScreen = () => {
  const [openFilters, setOpenFilters] = useState(false);

  return (
    <>
      <ScrollView bgColor='#F6F7FD'>
        <VStack mb={16}>
          <ClientInfo />
          <HStack
            justifyContent='space-between'
            alignItems='center'
            mt={mt}
            mx={4}
          >
            <HeadingText ml={0}>Featured Collections</HeadingText>
            <SearchView />
          </HStack>
          <FeaturedList data={['1', '2', '3']} pl={4} mt={mt} />
          <HeadingText mt={mt}>Shop by Category</HeadingText>
          <FilterTagsList
            data={['Women', 'Men', 'Kids']}
            onFilterPress={() => setOpenFilters(true)}
            pl={4}
            mt={mt}
          />
          <HeadingText mt={mt}>Promotions</HeadingText>
          <PromotionList data={PromotionsData} mt={1} />
          <SaleView mt={mt} />
          <HeadingText mt={mt}>Collections</HeadingText>
          <CollectionsList data={CollectionsData} mt={1} px={2} />
        </VStack>
      </ScrollView>

      <FilterView
        open={openFilters}
        onClosePress={() => setOpenFilters(false)}
      />
    </>
  );
};

export default ShopScreen;
