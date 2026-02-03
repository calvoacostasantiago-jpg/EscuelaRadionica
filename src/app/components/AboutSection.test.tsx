import { render, screen } from '@testing-library/react';
import AboutSection from './AboutSection';

describe('AboutSection', () => {
  it('muestra el nombre Angélica Montes', () => {
    render(<AboutSection />);
    expect(screen.getByText(/Angélica Montes/i)).toBeInTheDocument();
  });

  it('muestra los logros principales', () => {
    render(<AboutSection />);
    expect(screen.getByText(/Experiencia en prevención y control/i)).toBeInTheDocument();
    expect(screen.getByText(/Acompañamiento en procesos de final de vida/i)).toBeInTheDocument();
    expect(screen.getByText(/Formación integral en terapias energéticas/i)).toBeInTheDocument();
  });
});
