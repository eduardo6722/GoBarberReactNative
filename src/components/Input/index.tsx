import React from 'react';

import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon } from './styled';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
  placeholderTextColor?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  icon,
  placeholderTextColor = '#666360',
  ...rest
}) => (
  <Container>
    <Icon name={icon} size={20} color="#666360" />
    <TextInput
      placeholderTextColor={placeholderTextColor}
      keyboardAppearance="dark"
      {...rest}
    />
  </Container>
);

export default Input;
