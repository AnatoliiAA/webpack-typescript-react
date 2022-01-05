import { RegistrationForm } from "../registration-form/RegistrationForm";
import {
  FormInfo,
  LeftColumn,
  Logo,
  LogoLink,
  RightColumn,
  RightText,
  Title,
  Wrapper,
} from "./RegistrationPage.css";
const logo = require("../../static/img/logo.png");

export const RegistrationPage = (): JSX.Element => (
  <Wrapper>
    <LeftColumn>
      <LogoLink>
        <Logo src={logo} />
      </LogoLink>
      <Title>Tell us a little about your store</Title>
      <FormInfo>
        This is an initial information about your business.
        <br />
        You can change it anytime.
      </FormInfo>
      <RegistrationForm />
    </LeftColumn>
    <RightColumn>
      <RightText>It's time to bring your business online</RightText>
    </RightColumn>
  </Wrapper>
);
