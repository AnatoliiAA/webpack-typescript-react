// import React from "react";
import { useForm, SubmitHandler, Control } from "react-hook-form";
import { Input } from "../form-inputs/Input/Input";
import { SelectInput } from "../form-inputs/Select/Select";
import { Checkbox } from "../form-inputs/Checkbox/Checkbox";
import {
  Form,
  FormButtons,
  SubmitButton,
  BackButton,
} from "./RegistrationForm.css";
import inputData from "./data.json";

interface IFormInput {
  storeName: string;
  industry: { label: string; value: string };
  isRegistered: boolean;
  legalName: string;
  vatNumber: string;
  address: string;
  zipCode: string;
  city: string;
  country: { label: string; value: string };
}

const createInput = (
  type: string,
  name: string,
  attrs: {
    id?: string;
    labelText?: string;
    placeholder?: string;
    control?: Control<IFormInput, object>;
    options?: Array<{ value: string; label: string }>;
    testId: string;
    errors?: object;
    rules?: object;
    width?: string;
  }
): JSX.Element =>
  type === "text" ? (
    <Input type={type} name={name} {...attrs} key={attrs.id} />
  ) : type === "select" ? (
    <SelectInput name={name} {...attrs} key={attrs.id} />
  ) : type === "checkbox" ? (
    <Checkbox name={name} {...attrs} key={attrs.id} />
  ) : (
    <p>Invalid type definition</p>
  );

export const RegistrationForm = (): JSX.Element => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const response = await fetch("https://www.google.com", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {inputData.inputs.map(
        ({
          name,
          type,
          id,
          placeholder,
          testId,
          options,
          labelText,
          rules,
          width,
        }) =>
          createInput(type, name, {
            id,
            placeholder,
            testId,
            options,
            labelText,
            control,
            rules,
            errors,
            width,
          })
      )}
      <FormButtons>
        <BackButton>Go Back</BackButton>
        <SubmitButton type="submit" data-testid="submit-button">
          Save and continue
        </SubmitButton>
      </FormButtons>
    </Form>
  );
};
