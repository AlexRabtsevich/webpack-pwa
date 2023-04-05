import { render, screen } from '@testing-library/react';

import { App } from './app';

describe('App', () => {
  it('should render app component', async () => {
    render(<App />);

    expect(await screen.findByText('Webpack PWA: Todo List')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add Task' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add Task' })).not.toBeDisabled();
  });
});
