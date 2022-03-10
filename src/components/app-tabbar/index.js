import React from 'react';
import {Box, HStack, Image, Text, ZStack, Pressable} from 'native-base';

import ShopIcon from 'assets/icons/shop.png';
import MoreBGIcon from 'assets/icons/more-bg.png';
import MoreIcon from 'assets/icons/more.png';
import ReviewsIcon from 'assets/icons/reviews.png';

const centerIconSize = 80;
const tabBarIconSize = 24;
const customTabPosition = 1;

export const AppTabBar = ({state, descriptors, navigation}) => {
  return (
    <HStack bgColor='#8B9DC3' py='10px'>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          if (index === customTabPosition) {
            alert('Center Button Clicked');
            return;
          }
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          if (index === customTabPosition) {
            return;
          }
          navigation.emit({
            type: 'tabLongPress',
            target: route.key
          });
        };

        return (
          <Pressable
            accessibilityRole='button'
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            flex={1}
            alignItems='center'
            justifyContent='center'
          >
            {index === customTabPosition ? (
              <ZStack
                alignItems='center'
                justifyContent='center'
                top={-centerIconSize / 3}
              >
                <Box>
                  <Image
                    size={`${centerIconSize}px`}
                    source={MoreBGIcon}
                    resizeMode='cover'
                  />
                </Box>
                <Box alignItems='center' justifyContent='center'>
                  <Image w='32px' source={MoreIcon} resizeMode='contain' />
                  <Text fontSize='xs'>{label}</Text>
                </Box>
              </ZStack>
            ) : (
              <>
                <Image
                  style={{width: tabBarIconSize, height: tabBarIconSize}}
                  source={index === 0 ? ShopIcon : ReviewsIcon}
                  resizeMode='contain'
                />
                <Text style={{color: 'black', fontSize: 11, marginTop: 2}}>
                  {label}
                </Text>
              </>
            )}
          </Pressable>
        );
      })}
    </HStack>
  );
};
