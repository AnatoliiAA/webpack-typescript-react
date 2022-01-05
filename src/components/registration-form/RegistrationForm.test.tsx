import React from "react";
import {
  render,
  fireEvent,
  getByTestId,
  queryAllByText,
  waitFor,
  getByText,
  queryAllByRole,
} from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import { RegistrationForm } from "./RegistrationForm";

const testIds = {
  submit: "submit-button",
  storeName: "store-name",
  industry: "industry",
  registered: "is-registered",
  legalName: "legal-name",
  vatNumber: "vat-number",
  address: "address",
  zipCode: "zip-code",
  city: "city",
  country: "country",
};

describe("Registration Form Tests", () => {
  const {
    submit,
    storeName,
    industry,
    registered,
    legalName,
    vatNumber,
    address,
    zipCode,
    city,
    country,
  } = testIds;

  describe("snapshot test", () => {
    it("should match snapshot", () => {
      const tree = renderer.create(<RegistrationForm />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("actions tests", () => {
    it("should show 7 errors on submitting an empty form", async () => {
      const { container } = render(<RegistrationForm />);
      const submitButton = getByTestId(container, submit);
      await waitFor(() => {
        fireEvent.click(submitButton);
      });
      const errors = queryAllByText(container, "This field is required.");
      expect(errors.length).toBe(7);
    });

    it("should show error if name is too short", async () => {
      const { container } = render(<RegistrationForm />);
      const nameInput = getByTestId(container, storeName);
      await waitFor(() => {
        fireEvent.change(nameInput, { target: { value: "1" } });
      });
      const inputError = getByText(
        container,
        "Name should contain 2 characters or more"
      );
      expect(inputError).toBeInTheDocument();
    });

    it("should show the error on clearing the 'name' field", async () => {
      const { container } = render(<RegistrationForm />);
      const nameInput = getByTestId(container, storeName);
      await waitFor(() => {
        fireEvent.change(nameInput, { target: { value: "1" } });
      });
      await waitFor(() => {
        fireEvent.change(nameInput, { target: { value: "" } });
      });
      const inputError = getByText(container, "This field is required.");
      expect(inputError).toBeInTheDocument();
    });

    it("should show the error on unchecking the 'is registered' checkbox", async () => {
      const { container } = render(<RegistrationForm />);
      const registeredCheckbox = getByTestId(container, registered);
      await waitFor(() => {
        fireEvent.click(registeredCheckbox);
        fireEvent.click(registeredCheckbox);
      });
      const inputError = getByText(container, "This field is required.");
      expect(inputError).toBeInTheDocument();
    });

    it("should show error if legal name is too short", async () => {
      const { container } = render(<RegistrationForm />);
      const nameInput = getByTestId(container, legalName);
      await waitFor(() => {
        fireEvent.change(nameInput, { target: { value: "1" } });
      });
      const inputError = getByText(
        container,
        "Legal Name should contain 2 characters or more"
      );
      expect(inputError).toBeInTheDocument();
    });

    it("should show the error on clearing the 'legal name' field", async () => {
      const { container } = render(<RegistrationForm />);
      const nameInput = getByTestId(container, legalName);
      await waitFor(() => {
        fireEvent.change(nameInput, { target: { value: "1" } });
      });
      await waitFor(() => {
        fireEvent.change(nameInput, { target: { value: "" } });
      });
      const inputError = getByText(container, "This field is required.");
      expect(inputError).toBeInTheDocument();
    });

    it("should show error if address is too short", async () => {
      const { container } = render(<RegistrationForm />);
      const addressInput = getByTestId(container, address);
      await waitFor(() => {
        fireEvent.change(addressInput, { target: { value: "1" } });
      });
      const inputError = getByText(
        container,
        "Address should contain 2 characters or more"
      );
      expect(inputError).toBeInTheDocument();
    });

    it("should show the error on clearing the 'address' field", async () => {
      const { container } = render(<RegistrationForm />);
      const addressInput = getByTestId(container, address);
      await waitFor(() => {
        fireEvent.change(addressInput, { target: { value: "1" } });
      });
      await waitFor(() => {
        fireEvent.change(addressInput, { target: { value: "" } });
      });
      const inputError = getByText(container, "This field is required.");
      expect(inputError).toBeInTheDocument();
    });

    it("should show the error on clearing the 'zip code' field", async () => {
      const { container } = render(<RegistrationForm />);
      const zipCodeInput = getByTestId(container, zipCode);
      await waitFor(() => {
        fireEvent.change(zipCodeInput, { target: { value: "1" } });
      });
      await waitFor(() => {
        fireEvent.change(zipCodeInput, { target: { value: "" } });
      });
      const inputError = getByText(container, "This field is required.");
      expect(inputError).toBeInTheDocument();
    });

    it("should show error if city name is too short", async () => {
      const { container } = render(<RegistrationForm />);
      const cityInput = getByTestId(container, city);
      await waitFor(() => {
        fireEvent.change(cityInput, { target: { value: "1" } });
      });
      const inputError = getByText(
        container,
        "City name should contain 2 characters or more"
      );
      expect(inputError).toBeInTheDocument();
    });

    it("should show the error on clearing the 'city' field", async () => {
      const { container } = render(<RegistrationForm />);
      const cityInput = getByTestId(container, city);
      await waitFor(() => {
        fireEvent.change(cityInput, { target: { value: "1" } });
      });
      await waitFor(() => {
        fireEvent.change(cityInput, { target: { value: "" } });
      });
      const inputError = getByText(container, "This field is required.");
      expect(inputError).toBeInTheDocument();
    });

    it("should call onSubmit function if form was filled correctly", async () => {
      global.fetch = jest.fn(() => Promise.resolve()) as jest.Mock;
      const { container } = render(<RegistrationForm />);
      const submitButton = getByTestId(container, submit);
      const nameInput = getByTestId(container, storeName);
      const industrySelect = getByTestId(container, industry);
      const registeredCheckbox = getByTestId(container, registered);
      const legalNameInput = getByTestId(container, legalName);
      const vatNumberInput = getByTestId(container, vatNumber);
      const addressInput = getByTestId(container, address);
      const zipCodeInput = getByTestId(container, zipCode);
      const cityInput = getByTestId(container, city);
      const countrySelect = getByTestId(container, country);
      await waitFor(() => {
        fireEvent.change(nameInput, { target: { value: "Name" } });
        fireEvent.click(registeredCheckbox);
        fireEvent.change(industrySelect, { target: { value: "oil" } });
        fireEvent.change(cityInput, { target: { value: "City" } });
        fireEvent.change(legalNameInput, { target: { value: "Legal Name" } });
        fireEvent.change(vatNumberInput, { target: { value: "123" } });
        fireEvent.change(addressInput, { target: { value: "Address" } });
        fireEvent.change(zipCodeInput, { target: { value: "123" } });
        fireEvent.change(countrySelect, { target: { value: "ukraine" } });
        fireEvent.click(submitButton);
      });
      let errors = container.querySelectorAll("p");
      expect(errors.length).toBe(0);
    });
  });
});
