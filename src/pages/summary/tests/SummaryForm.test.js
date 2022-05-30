import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import SummaryForm from '../SummaryForm';
import userEvent from '@testing-library/user-event';

test('initial conditions', () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole('button', {
    name: /confirm order/i,
  });

  expect(checkbox).not.toBeChecked();
  expect(confirmButton).toBeDisabled();
});

test('checkbox disables button on click and enables on second click', () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole('button', {
    name: /confirm order/i,
  });

  userEvent.click(checkbox);
  expect(confirmButton).toBeEnabled();

  userEvent.click(checkbox);
  expect(confirmButton).toBeDisabled();
});

test('popover responds to hover', async () => {
  render(<SummaryForm />);
  const nullPopOver = screen.queryByText(
    /No icecream will actually be delivered/i
  );
  // expect(nullPopOver).toBeNull();
  expect(nullPopOver).not.toBeInTheDocument();

  // Popover appears upon mouseover of checbox label
  const termAndConditions = screen.getByText(/terms and conditions/i);
  userEvent.hover(termAndConditions);

  const popOver = screen.getByText(/no icecream will actually be delivered/i);
  expect(popOver).toBeInTheDocument();

  // Popover disapears when we mouse out
  userEvent.unhover(termAndConditions);

  // the next line, 60, will cause Warning: An update to Overlay inside a test was not wrapped in act(...).
  // react updates the document after the test was finished, we have to make the test async and await for the element to be removed
  // expect(popOver).not.toBeInTheDocument();

  await waitForElementToBeRemoved(() =>
    screen.queryByText(/No icecream will actually be delivered/i)
  );
});
