import React from 'react';
import {FlatList} from 'native-base';
import {PromotionItem} from './promotion-item';

export const PromotionList = ({data, ...props}) => {
  const renderPromotionItem = ({item, index}) => (
    <PromotionItem key={item.id + index} item={item} />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderPromotionItem}
      keyExtractor={(item, index) => item.id + index}
      showsHorizontalScrollIndicator={false}
      {...props}
    />
  );
};
