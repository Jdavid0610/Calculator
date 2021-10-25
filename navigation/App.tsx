import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import RootNavigator from './RootNavigator';

 const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
    return (
      <NavigationContainer
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootNavigator />
      </NavigationContainer>
    );
  }
  
export default Navigation;