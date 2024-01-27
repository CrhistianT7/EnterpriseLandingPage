import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from './Input';

describe('Input Component tests', () => {
  test('renders with the correct properties', () => {
    render(<Input type='text' label='milabel' id="uno" name="uno" onChange={() => console.log()} value="something" placeholder='nombre'/>)

    const input = screen.getByRole("textbox")

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('id', 'uno');
    expect(input).toHaveAttribute('name', 'uno');
    expect(input).toHaveValue('something');
    expect(input).toHaveAttribute('required')
    
    const label = screen.getByText('milabel');
    expect(label).toBeInTheDocument();

    const placeholder = input.getAttribute('placeholder');
    expect(placeholder).toBe('nombre');
  });

  test('renders without a placeholder', () => {
    render(<Input type='text' label='something' id="uno" onChange={() => console.log()} name="uno" value="something"/>)

    const input = screen.getByRole("textbox")

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('id', 'uno');
    expect(input).toHaveAttribute('name', 'uno');
    expect(input).toHaveValue('something');
    expect(input).not.toHaveAttribute('placeholder')
    expect(input).toHaveAttribute('required');
  });

  test('renders without required', () => {
    render(<Input type='text' id="dos" name="dos" onChange={() => console.log()} value="something" placeholder='apellido'/>)

    const input = screen.getByRole("textbox")

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('id', 'dos');
    expect(input).toHaveAttribute('name', 'dos');
    expect(input).toHaveValue('something');
    expect(input).not.toHaveAttribute('required');
    const placeholder = input.getAttribute('placeholder');
    expect(placeholder).toBe('apellido');
  });

  test('renders without label', () => {
    render(<Input type='text' label='something' id="tres" onChange={() => console.log()} name="tres" value="something" placeholder='email' />)

    const input = screen.getByRole("textbox")

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('id', 'tres');
    expect(input).toHaveAttribute('name', 'tres');
    expect(input).toHaveValue('something');
    expect(input).not.toHaveAttribute('label')
    const placeholder = input.getAttribute('placeholder');
    expect(placeholder).toBe('email');
  });
});