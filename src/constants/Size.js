import { Dimensions, NativeModules, Platform } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const DRAWER_LAYOUT_WIDTH = Math.round(SCREEN_WIDTH / 1.37);

export const SIZE_02 = 2;
export const SIZE_04 = 4;
export const SIZE_06 = 6;
export const SIZE_08 = 8;
export const SIZE_10 = 10;
export const SIZE_12 = 12;
export const SIZE_14 = 14;
export const SIZE_16 = 16;
export const SIZE_19 = 19;
export const SIZE_20 = 20;
export const SIZE_22 = 22;
export const SIZE_24 = 24;
export const SIZE_40 = 40;
export const SIZE_44 = 44;
export const SIZE_48 = 48;
export const SIZE_53 = 53;
export const SIZE_56 = 56;
export const SIZE_59 = 59;

// Flat list's item height of OrderScreen
export const ORDER_TAB_ITEM_HEIGHT = 94;

// List Item Height
export const LIST_ITEM_H_SIZE = 110;

// REAl_SCREEN_HEIGHT
export const realScreenHeight = Platform.OS === 'android' ? NativeModules.ExtraDimensions.REAL_WINDOW_HEIGHT : SCREEN_HEIGHT;

export const realScreenWidth = Platform.OS === 'android' ? NativeModules.ExtraDimensions.REAL_WINDOW_WIDTH : SCREEN_WIDTH;
