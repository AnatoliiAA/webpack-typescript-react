describe("Registration Form tests", () => {
  const selectors = {
    storeName: '[data-testid="store-name"]',
    industry: '[data-testid="industry"]',
    isRegistered: '[data-testid="is-registered"]',
    legalName: '[data-testid="legal-name"]',
    vatNumber: '[data-testid="vat-number"]',
    address: '[data-testid="address"]',
    zipCode: '[data-testid="zip-code"]',
    city: '[data-testid="city"]',
    country: '[data-testid="country"]',
    submit: '[data-testid="submit-button"]',
    storeNameError: '[data-testid="store-name"] ~ p',
    isRegisteredError: '[data-testid="is-registered"] ~ p',
    legalNameError: '[data-testid="legal-name"] ~ p',
    addressError: '[data-testid="address"] ~ p',
    zipCodeError: '[data-testid="zip-code"] ~ p',
    cityError: '[data-testid="city"] ~ p',
    countryError: '[data-testid="country"] ~ p',
  };
  const {
    submit,
    storeName,
    industry,
    isRegistered,
    legalName,
    vatNumber,
    address,
    zipCode,
    city,
    country,
    storeNameError,
    isRegisteredError,
    legalNameError,
    addressError,
    zipCodeError,
    cityError,
    countryError,
  } = selectors;
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should show 7 errors on submitting empty form", () => {
    cy.get(submit).click();
    cy.get(storeNameError)
      .should("exist")
      .should("contain.text", "This field is required.");
    cy.get(isRegisteredError)
      .should("exist")
      .should("contain.text", "This field is required.");
    cy.get(legalNameError)
      .should("exist")
      .should("contain.text", "This field is required.");
    cy.get(addressError)
      .should("exist")
      .should("contain.text", "This field is required.");
    cy.get(zipCodeError)
      .should("exist")
      .should("contain.text", "This field is required.");
    cy.get(cityError)
      .should("exist")
      .should("contain.text", "This field is required.");
    cy.get(countryError)
      .should("exist")
      .should("contain.text", "This field is required.");
  });

  it("should validate form on input", () => {
    cy.get(storeName).type("1");
    cy.get(storeNameError)
      .should("exist")
      .should("contain.text", "Name should contain 2 characters or more");
    cy.get(storeName).clear();
    cy.get(storeNameError)
      .should("exist")
      .should("contain.text", "This field is required.");
    cy.get(storeName).type("Name");
    cy.get(storeNameError).should("not.exist");

    cy.get(isRegistered).check();
    cy.get(isRegisteredError).should("not.exist");
    cy.get(isRegistered).uncheck();
    cy.get(isRegisteredError)
      .should("exist")
      .should("contain.text", "This field is required.");

    cy.get(legalName).type("1");
    cy.get(legalNameError)
      .should("exist")
      .should("contain.text", "Name should contain 2 characters or more");
    cy.get(legalName).clear();
    cy.get(legalNameError)
      .should("exist")
      .should("contain.text", "This field is required.");
    cy.get(legalName).type("Legal Name");
    cy.get(legalNameError).should("not.exist");

    cy.get(address).type("1");
    cy.get(addressError)
      .should("exist")
      .should("contain.text", "Address should contain 2 characters or more");
    cy.get(address).clear();
    cy.get(addressError)
      .should("exist")
      .should("contain.text", "This field is required.");
    cy.get(address).type("st. Street");
    cy.get(addressError).should("not.exist");

    cy.get(zipCode).type("1").clear();
    cy.get(zipCodeError)
      .should("exist")
      .should("contain.text", "This field is required.");
    cy.get(zipCode).type("123");
    cy.get(zipCodeError).should("not.exist");

    cy.get(city).type("1");
    cy.get(cityError)
      .should("exist")
      .should("contain.text", "City name should contain 2 characters or more");
    cy.get(city).clear();
    cy.get(cityError)
      .should("exist")
      .should("contain.text", "This field is required.");
    cy.get(city).type("City");
    cy.get(cityError).should("not.exist");

    cy.get(country)
      .select("ukraine")
      .should("contain.text", "Ukraine");
    cy.get(countryError).should("not.exist");
  });

  it("Should send a request with a valid data  on click on 'Save and continue' button", () => {
    cy.intercept({
      method: "POST",
    }).as("requestCheck");

    cy.get(storeName).type("Name");
    cy.get(industry).select("oil");
    cy.get(isRegistered).check();
    cy.get(legalName).type("ltd. Name");
    cy.get(vatNumber).type("123");
    cy.get(address).type("some address");
    cy.get(zipCode).type("49000");
    cy.get(city).type("City Name");
    cy.get(country).select("Ukraine");
    cy.get(submit).click();

    cy.get("@requestCheck")
      .its("request.body")
      .should(
        "deep.equal",
        JSON.stringify({
          storeName: "Name",
          industry: "oil",
          isRegistered: true,
          legalName: "ltd. Name",
          vatNumber: "123",
          address: "some address",
          zipCode: "49000",
          city: "City Name",
          country: "ukraine",
        })
      );
  });
});
