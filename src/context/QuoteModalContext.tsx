"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface QuoteModalContextType {
  isOpen: boolean;
  prefilledProduct: string;
  openQuoteModal: (productName?: string) => void;
  closeQuoteModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefilledProduct, setPrefilledProduct] = useState("");

  const openQuoteModal = (productName?: string) => {
    setPrefilledProduct(productName || "");
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
    setPrefilledProduct("");
  };

  return (
    <QuoteModalContext.Provider
      value={{
        isOpen,
        prefilledProduct,
        openQuoteModal,
        closeQuoteModal,
      }}
    >
      {children}
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error("useQuoteModal must be used within a QuoteModalProvider");
  }
  return context;
}
