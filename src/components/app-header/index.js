import React from 'react';
import {getStatusBarHeight} from 'react-native-status-bar-height';

import ProfileIcon from 'assets/icons/profile.png';
import AppLogo from 'assets/icons/app_logo.png';
import CartIcon from 'assets/icons/cart.png';
import {Box, ChevronLeftIcon, HStack, Image, Pressable} from 'native-base';

const statusBarHeight = getStatusBarHeight(true);
const iconSize = 30;

const AppBarIcon = ({iconSize, source}) => (
  <Image
    style={{width: iconSize, height: iconSize}}
    source={source}
    resizeMode='contain'
  />
);

export const AppHeader = ({navigation}) => {
  const onBackPress = () => {
    if (navigation.canGoBack()) navigation.goBack();
  };

  return (
    <>
      <Box bgColor='white' w='100%' h={statusBarHeight} />

      <HStack alignItems='center' bgColor='#8B9DC3' h={iconSize + 20}>
        <Pressable onPress={onBackPress}>
          <ChevronLeftIcon size='10' color='white' />
        </Pressable>
        <HStack
          flex={1}
          alignItems='center'
          justifyContent='space-between'
          mx='20px'
        >
          <AppBarIcon iconSize={iconSize} source={ProfileIcon} />
          <AppBarIcon iconSize={iconSize + 15} source={AppLogo} />
          <AppBarIcon iconSize={iconSize - 5} source={CartIcon} />
        </HStack>
      </HStack>
    </>
  );
};
