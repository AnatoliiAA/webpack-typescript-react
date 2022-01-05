import styled from "@emotion/styled";
const backgroundImage = require("../../static/img/background.jpg");

export const Wrapper = styled.div`
  display: flex;
  max-width: 1440px;
  height: 900px;
  margin: 20px auto;
  background-color: white;
`;
export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
`;
export const RightColumn = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
`;
export const LogoLink = styled.a`
  width: 400px;
`;
export const Logo = styled.img``;

export const Title = styled.h1`
  width: 400px;
  margin: 80px 0 10px 0;
  font-size: 28px;
  font-weight: bold;
`;
export const FormInfo = styled.span`
  width: 400px;
  margin: 0 0 40px 0;
  font-size: 14px;
`;
export const RightText = styled.p`
  width: 400px;
  margin: 350px 0 0 0;
  font-size: 52px;
  font-weight: bold;
  color: white;
  text-align: center;
`;
