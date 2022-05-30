import { render, screen } from '@testing-library/react';
import Options from '../Options';

test('Display image for each scoop option from the server', async () => {
  render(<Options optionType="scoops" />);

  const scoopImages = await screen.findAllByRole('img', { name: /scoop/i });
  expect(scoopImages).toHaveLength(2);

  // @ts-ignore
  const altText = scoopImages.map((e) => e.alt);
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
});

test('Display image for each topping option from the server', async () => {
  render(<Options optionType="toppings" />);

  const toppingImgaes = await screen.findAllByRole('img', {
    name: /topping$/i,
  });
  expect(toppingImgaes).toHaveLength(3);

  const altText = toppingImgaes.map((topping) => topping.alt);
  expect(altText).toEqual([
    'Cherries topping',
    'M&Ms topping',
    'Hot fudge topping',
  ]);
});
