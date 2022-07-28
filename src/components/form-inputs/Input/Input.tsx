import { Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { CustomError } from "../CustomError";
import { InputWrapper } from "../InputWrapper";
import { InputField, Label } from "./Input.css";

type Input = {
  id?: string;
  name?: string;
  type?: string;
  labelText?: string;
  placeholder?: string;
  testId?: string;
  control?: any;
  rules?: object;
  errors?: object;
  width?: string;
};
export const Input = ({
  id,
  name,
  type,
  labelText,
  placeholder,
  testId,
  control,
  rules,
  errors,
  width,
}: Input): JSX.Element => (
  <InputWrapper width={width}>
    <Label htmlFor={id}>{labelText}</Label>
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <InputField
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          data-testid={testId}
          {...field}
        />
      )}
      defaultValue=""
    />
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => <CustomError role="alert">{message}</CustomError>}
    />
  </InputWrapper>
);
