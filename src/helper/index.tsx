import { Platform, Dimensions, PressableProps, ColorValue } from 'react-native';
import normalizeText from './normalizeText';
import { Colors, lightColors, darkColors } from './colors';

const Screen = Dimensions.get('window');
const ScreenWidth = Screen.width;
const ScreenHeight = Screen.height;
const isIOS = Platform.OS === 'ios';

export type StringOmit<K extends string> = K | Omit<string, K>;

export type RneFunctionComponent<T> = React.FunctionComponent<
  T & {
    theme?: Theme;
  }
>;

export interface ThemeSpacing {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export const defaultTheme: Theme = {
  colors: lightColors,
  spacing: { xs: 2, sm: 4, md: 8, lg: 12, xl: 24 },
};

export type Theme = {
  colors: Colors;
  spacing: ThemeSpacing;
};

export const androidRipple = (
  rippleColor?: string | ColorValue
): PressableProps['android_ripple'] => {
  return {
    borderless: false,
    color: rippleColor,
    radius: -5,
  };
};

export const patchWebProps = <T extends Record<any, any>>({ ...rest }: T) => {
  return rest;
};

export type { Colors };

export {
  normalizeText,
  ScreenWidth,
  ScreenHeight,
  isIOS,
  lightColors,
  darkColors,
};
