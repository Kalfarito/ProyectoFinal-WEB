import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Insertar from './Insertar';

describe('<Insertar />', () => {
  test('it should mount', () => {
    render(<Insertar />);
    
    const insertar = screen.getByTestId('Insertar');

    expect(insertar).toBeInTheDocument();
  });
});