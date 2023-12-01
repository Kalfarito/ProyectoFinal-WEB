import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RegistrarUser from './RegistrarUser';

describe('<RegistrarUser />', () => {
  test('it should mount', () => {
    render(<RegistrarUser />);
    
    const registrarUser = screen.getByTestId('RegistrarUser');

    expect(registrarUser).toBeInTheDocument();
  });
});