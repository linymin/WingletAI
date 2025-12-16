
import React from 'react';

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'personal' | 'business' | 'humanity';
  icon: React.ReactNode;
  problem: string;
  solution: string;
  result: string;
  images: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ContactContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}
