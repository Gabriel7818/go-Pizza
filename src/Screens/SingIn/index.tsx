import React from "react";
import { Button } from "../../Components/Form/Button";
import { Input } from "../../Components/Form/Input";

import {
  Container,
  Form,
  Title,
  ImagePizza,
  RecoveryPassword,
  RecoveryPasswordText,
} from "./Styles";

export function SignIn() {
  return (
    <Container>
      <Form>
        <ImagePizza source={require("../../assets/img/brand.png")} />
        <Title>Login</Title>
        <Input placeholder="E-mail" />
        <Input secureTextEntry={true} placeholder="Senha" />
        <RecoveryPassword>
          <RecoveryPasswordText>Esqueci Minha Senha</RecoveryPasswordText>
        </RecoveryPassword>
      </Form>
      <Button title="Entrar" />
    </Container>
  );
}