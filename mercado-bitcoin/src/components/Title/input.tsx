import React from 'react';

interface TitleProps {
  text: string;
}

export const LabelInput: React.FC<TitleProps> = ({ text }) => {

  return (
    <label className="block text-sm font-medium text-gray-700">{text}</label>
  );
};

export const LabelStep: React.FC<TitleProps> = ({ text }) => {

  return (
    <h2 className="text-xl font-bold mb-4">Etapa {text} de 4</h2>
  );
};

export const Title: React.FC<TitleProps> = ({ text }) => {

  return (
    <h3 className="text-lg font-semibold mb-4">{text}</h3>
  );
};

export const Span: React.FC<TitleProps> = ({ text }) => {

  return (
    <h3 className="ml-2">{text}</h3>
  );
};