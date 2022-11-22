import React from "react";

import {
  Container,
  Head,
  UserInfo,
  User,
  UserGreething,
  UserWrapper,
  Icon,
  Emoji,
  IconAreaButton
} from "./Styles";

export function Header() {
  return (
    <Container>
      <Head>
        <UserWrapper>
          <UserInfo>
            <Emoji source={require("../../assets/img/happy.png")} />
            <User>
              <UserGreething>Olá, Garçom</UserGreething>
            </User>
          </UserInfo>
          <IconAreaButton>
            <Icon name="sign-out" />
          </IconAreaButton>
        </UserWrapper>
      </Head>
    </Container>
  );
}