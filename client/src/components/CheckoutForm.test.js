import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { getByText } = render(<CheckoutForm />);
  getByText(/checkout form/i);
});

test("form shows success message on submit with form details", () => {
  const { getByLabelText, findByText } = render(<CheckoutForm />);
  const firstName = getByLabelText(/first name/i);
  const lastName = getByLabelText(/last name/i);
  const address = getByLabelText(/address/i);
  const city = getByLabelText(/city/i);
  const state = getByLabelText(/state/i);
  const zip = getByLabelText(/zip/i);
  const button = getByLabelText(/checkout/i);

  fireEvent.change(firstName, { target: { value: 'John' } });
  fireEvent.change(lastName, { target: { value: 'Smith' } });
  fireEvent.change(address, { target: { value: '1234 S Place Pl' } });
  fireEvent.change(city, { target: { value: 'Real City' } });
  fireEvent.change(state, { target: { value: 'A Real State' } });
  fireEvent.change(zip, { target: { value: '11111' } });
  
  expect(firstName.value).toBe('John');
  expect(lastName.value).toBe('Smith');
  expect(address.value).toBe('1234 S Place Pl');
  expect(city.value).toBe('Real City');
  expect(state.value).toBe('A Real State');
  expect(zip.value).toBe('11111');

  fireEvent.click(button);

  findByText('You have ordered some plants! Woo-hoo! John Smith 1234 S Place Pl Real City, A Real State 11111');
});
