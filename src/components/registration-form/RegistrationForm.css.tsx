import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 400px;
`;

export const FormButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
`;

export const BackButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 40px;
  border: none;
  background-color: #f2f3f4;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export const SubmitButton = styled.button`
  width: 150px;
  height: 40px;
  color: white;
  background-color: #3d776b;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;
