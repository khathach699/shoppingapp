import {Label} from '@bsdaoquang/rncomponent';
import React from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {colors} from '../constants/colors';
import {fontFamilise} from '../constants/fontFamilies';
import {sizes} from '../constants/sizes';

type Props = {
  text: string;
  size?: number;
  font?: string;
  flex?: number;
  numberOfLine?: number;
  color?: string;
  styles?: StyleProp<TextStyle>;
  type?: 'bigTitle' | 'title' | 'text' | 'description';
};

const TextComponent = (props: Props) => {
  const {text, size, font, flex, numberOfLine, color, styles, type} = props;

  let fontSize: number = sizes.text;
  let fontFamily: string = fontFamilise.poppinsRegular;
  switch (type) {
    case 'bigTitle':
      fontSize = sizes.bigTitle;
      break;
    case 'title':
      fontSize = sizes.title;
      break;
    case 'description':
      fontSize = sizes.description;
      break;
    default:
      fontSize = sizes.text;
      break;
  }

  return (
    <Label
      text={text}
      font={font ?? fontFamilise.poppinsRegular}
      flex={flex}
      numberOfLine={numberOfLine}
      size={size ? size : fontSize}
      color={color ?? colors.dark}
      styles={[{}, styles]}
    />
  );
};

export default TextComponent;
