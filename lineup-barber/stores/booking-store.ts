import { create } from "zustand";

interface BookingState {
  isBooking: boolean;
  toggleModal: () => void;
}

export const useBookingStore = create<BookingState>((set) => ({
  isBooking: false,
  toggleModal: () =>
    set((state: BookingState) => ({ isBooking: !state.isBooking })),
}));
