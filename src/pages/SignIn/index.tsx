import React from 'react';
import {
  View,
  Image,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Title,
  Container,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styled';

import logoImage from '../../assets/logo.png';

const SignIn: React.FC = () => (
  <>
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container>
          <Image source={logoImage} />
          <View>
            <Title>Faça seu logon</Title>
          </View>
          <Input
            name="email"
            icon="mail"
            placeholder="E-mail"
            textContentType="emailAddress"
          />
          <Input
            name="password"
            icon="lock"
            placeholder="Senha"
            textContentType="password"
          />
          <Button onPress={() => console.log('login')}>Entrar</Button>
          <ForgotPassword onPress={() => console.log('forgot password')}>
            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
          </ForgotPassword>
        </Container>
        <CreateAccountButton onPress={() => console.log('create account')}>
          <Icon name="log-in" size={20} color="#ff9000" />
          <CreateAccountButtonText>Criar uma conta</CreateAccountButtonText>
        </CreateAccountButton>
      </ScrollView>
    </KeyboardAvoidingView>
  </>
);

export default SignIn;
