import { create } from "zustand";

export interface WorkHours {
  mo: string;
  tu: string;
  we: string;
  th: string;
  fr: string;
  sa: string;
  su: string;
}

export interface BarberServiceSection {
  serviceName: string;
  barberServices: BarberService[];
}

export interface BarberService {
  service: string;
  price: number;
  description: string;
}

interface BookingState {
  isBooking: boolean;
  workHours?: WorkHours;
  serviceSections?: BarberServiceSection[];
  location?: string;
  phoneNumber?: string;
  toggleModal: () => void;
  setZcalData: (data: {
    workHours: WorkHours;
    serviceSections: BarberServiceSection[];
    location: string;
    phoneNumber: string;
  }) => void;
}

export const useBookingStore = create<BookingState>((set) => ({
  isBooking: false,
  workHours: undefined,
  serviceSections: undefined,
  toggleModal: () => set((state) => ({ isBooking: !state.isBooking })),
  setZcalData: ({ workHours, serviceSections, location, phoneNumber }) =>
    set({ workHours, serviceSections, location, phoneNumber }),
}));
