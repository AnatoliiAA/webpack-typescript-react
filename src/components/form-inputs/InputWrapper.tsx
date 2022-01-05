import styled from "@emotion/styled";

type InputWrapperProps = {
  width?: string;
};

export const InputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  align-items: center;
  position: relative;
  width: ${(props) => (props.width ? props.width : "100%")};
`;
