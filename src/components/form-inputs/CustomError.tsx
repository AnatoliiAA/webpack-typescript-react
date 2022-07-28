import styled from "@emotion/styled";
type ErrorProps = {
  role?: string;
}

export const CustomError = styled.p<ErrorProps>`
  color: red;
  position: absolute;
  bottom: 5px;
  left: 0;
  font-size: 12px;
`;
