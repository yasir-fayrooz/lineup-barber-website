export interface Service {
  name: string;
  price: string;
  duration: string;
  description: string;
}

export interface Testimonial {
  name: string;
  rating: number;
  text: string;
  since: string;
}

export interface Barber {
  name: string;
  title: string;
  specialty: string;
  years: string;
}

export interface CalendlyNamespace {
  initPopupWidget: (options: { url: string }) => void;
}

declare global {
  interface Window {
    Calendly: CalendlyNamespace;
  }
}
