import React, { createContext, useState, useContext } from 'react';

// Create a Context for the contact modal
const ContactModalContext = createContext({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {}
});

export const ContactModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ContactModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ContactModalContext.Provider>
  );
};

export const useContactModal = () => useContext(ContactModalContext);
