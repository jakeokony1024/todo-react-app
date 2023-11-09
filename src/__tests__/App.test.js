import { render, screen } from '@testing-library/react';
import App from '../components/App';
import userEvent from "@testing-library/user-event";

test('renders the app component', () => {
  render(<App />);
  const titleElement = screen.getByText(/todo app/i);
  expect(titleElement).toBeInTheDocument();
});

it('can add todos', () => {
  const todoInput = screen.getByPlaceholderText(/all work and no play makes jack a dull boy/i)

  userEvent.type(todoInput, 'New Todo{enter}');
  const newItem = screen.getByText(/new todo/i)
  expect(newItem).toBeInTheDocument();
});