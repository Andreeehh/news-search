import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { HtmlContent } from '.';

describe('<HtmlContent />', () => {
  it('should render with default values', () => {
    renderTheme(<HtmlContent html="children" />);
    const p = screen.getByText(/children/i);
    expect(p).toHaveStyle({
      'font-size': '1.8rem',
    });
  });
});
