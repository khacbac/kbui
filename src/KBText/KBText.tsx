import React from 'react';
import {
  Text as NativeText,
  StyleSheet,
  TextProps as TextProperties,
  TextStyle,
  StyleProp,
  ColorValue,
} from 'react-native';
import { patchWebProps, lightColors, normalizeText } from '../helper';

export interface TextProps extends TextProperties {
  /**  Add additional styling for Text. */
  style?: StyleProp<TextStyle>;

  /**  Text with Font size 40. */
  h1?: boolean;

  /**  Text with Font size 32. */
  h2?: boolean;

  /**  Text with Font size 28. */
  h3?: boolean;

  /**  Text with Font size 24. */
  h4?: boolean;

  /**  Text with Font size 20. */
  h5?: boolean;

  /**  Text with Font size 16. */
  h6?: boolean;

  /**  Styling when h1 is set. */
  h1Style?: StyleProp<TextStyle>;

  /**  Styling when h2 is set. */
  h2Style?: StyleProp<TextStyle>;

  /**  Styling when h3 is set. */
  h3Style?: StyleProp<TextStyle>;

  /**  Styling when h3 is set. */
  h4Style?: StyleProp<TextStyle>;

  lineHeight?: number | undefined;

  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;

  fontSize?: number | undefined;
  color?: ColorValue | undefined;
}

/** Text displays words and characters of various sizes.
 */
export const KBText: React.FunctionComponent<TextProps> = ({
  style = {},
  h1 = false,
  h2 = false,
  h3 = false,
  h4 = false,
  h5 = false,
  h6 = false,
  h1Style = {},
  h2Style = {},
  h3Style = {},
  h4Style = {},
  children = '',
  lineHeight,
  fontWeight,
  fontSize,
  color = '#111111',
  ...rest
}) => {
  return (
    <NativeText
      accessibilityRole="text"
      style={StyleSheet.flatten([
        {
          // ...Platform.select({
          //   android: {
          //     ...(fonts.android.regular as TextStyle),
          //   },
          // }),
          color: lightColors.black,
        },
        style,
        (h1 || h2 || h3 || h4) && (styles.bold as TextStyle),
        h1 && StyleSheet.flatten([{ fontSize: normalizeText(40) }, h1Style]),
        h2 && StyleSheet.flatten([{ fontSize: normalizeText(32) }, h2Style]),
        h3 && StyleSheet.flatten([{ fontSize: normalizeText(28) }, h3Style]),
        h4 && StyleSheet.flatten([{ fontSize: normalizeText(24) }, h4Style]),
        h5 && StyleSheet.flatten([{ fontSize: normalizeText(20) }, h4Style]),
        h6 && StyleSheet.flatten([{ fontSize: normalizeText(16) }, h4Style]),
        {
          lineHeight,
          fontWeight,
          fontSize,
          color,
        },
      ])}
      {...patchWebProps(rest)}
    >
      {children}
    </NativeText>
  );
};

const styles = StyleSheet.create({
  bold: {
    // ...Platform.select({
    //   android: {
    //     ...(fonts.android.bold as TextStyle),
    //   },
    // }),
  },
});

KBText.displayName = 'KBText';
