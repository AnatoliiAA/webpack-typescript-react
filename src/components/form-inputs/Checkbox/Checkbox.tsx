import { Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { CustomError } from "../CustomError";
import { InputWrapper } from "../InputWrapper";
import { InputField, Label } from "./Checkbox.css";

type Checkbox = {
  id?: string;
  name?: string;
  labelText?: string;
  testId?: string;
  control?: any;
  rules?: object;
  errors?: object;
};

export const Checkbox = ({
  id,
  name,
  labelText,
  testId,
  control,
  rules,
  errors,
}: Checkbox): JSX.Element => (
  <InputWrapper>
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <InputField
          id={id}
          type="checkbox"
          name={name}
          data-testid={testId}
          {...field}
        />
      )}
    />
    <Label htmlFor={id}>{labelText}</Label>
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => <CustomError>{message}</CustomError>}
    />
  </InputWrapper>
);
