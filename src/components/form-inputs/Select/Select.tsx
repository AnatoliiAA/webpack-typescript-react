import { Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { CustomError } from "../CustomError";
import { InputWrapper } from "../InputWrapper";
import { InputSelect } from "./Select.css";

type Select = {
  id?: string;
  name?: string;
  labelText?: string;
  placeholder?: string;
  testId?: string;
  control?: any;
  rules?: object;
  errors?: object;
  options?: Array<{ label: string; value: string }>;
};
export const SelectInput = ({
  id,
  name,
  labelText,
  placeholder,
  testId,
  control,
  rules,
  errors,
  options,
}: Select): JSX.Element => (
  <InputWrapper>
    <label htmlFor={id}>{labelText}</label>
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <InputSelect
          id={id}
          name={name}
          placeholder={placeholder}
          data-testid={testId}
          {...field}
        >
          <option value="" disabled selected>
            {placeholder}
          </option>
          {options.map(
            ({ label, value }): JSX.Element => (
              <option value={value} key={value}>
                {label}
              </option>
            )
          )}
        </InputSelect>
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
