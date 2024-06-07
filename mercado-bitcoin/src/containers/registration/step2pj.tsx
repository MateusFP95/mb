import React from 'react';
import { useFormContext } from '../../context/context';
import { useFormContext as useRHFContext } from 'react-hook-form';

const Step2Juridica = () => {
  const { prevStep, nextStep } = useFormContext();
  const { register, formState: { errors }, watch } = useRHFContext();

  const { razaoSocial, cnpj, dataAbertura, telefone } = watch();
  const allFieldsValid = razaoSocial && cnpj && dataAbertura && telefone;

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Etapa 2 de 4</h2>
      <h3 className="text-lg font-semibold mb-4">Pessoa Jurídica</h3>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Razão social</label>
          <input
            type="text"
            {...register('razaoSocial')}
            className={`mt-1 block w-full border ${errors.razaoSocial ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
          />
          {errors.razaoSocial && <p className="text-red-500 text-xs mt-1">{errors.razaoSocial.message as string}</p>}
        
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">CNPJ</label>
          <input
            type="text"
            {...register('cnpj')}
            className={`mt-1 block w-full border ${errors.cnpj ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
          />
          {errors.cnpj && <p className="text-red-500 text-xs mt-1">{errors.cnpj.message as string}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Data de abertura</label>
          <input
            type="date"
            {...register('dataAbertura')}
            className={`mt-1 block w-full border ${errors.dataAbertura ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
          />
          {errors.dataAbertura && <p className="text-red-500 text-xs mt-1">{errors.dataAbertura.message as string}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Telefone</label>
          <input
            type="tel"
            {...register('telefone')}
            className={`mt-1 block w-full border ${errors.telefone ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
          />
          {errors.telefone && <p className="text-red-500 text-xs mt-1">{errors.telefone.message as string}</p>}
        </div>
        <div className="flex justify-between">
        <button
            type="button"
            onClick={prevStep}
            className="bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded-lg"
          >
            Voltar
          </button>
          <div className="w-4"></div>
          <button
            type="button"
            onClick={nextStep}
            disabled={!allFieldsValid || Object.keys(errors).length > 0}
            className={`bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg ${!allFieldsValid ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step2Juridica;