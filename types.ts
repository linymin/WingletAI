import React from 'react';

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'creation' | 'professional' | 'enterprise' | 'charity';
  icon: React.ReactNode;
  problem: string;
  solution: string;
  result: string;
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