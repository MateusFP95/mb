import React from 'react';
import { useFormContext } from '../../context/context';
import { useFormContext as useRHFContext } from 'react-hook-form';

const Step2Fisica = () => {
  const { prevStep, nextStep } = useFormContext();
  const { register, formState: { errors}, watch } = useRHFContext();

  const { nome, cpf, dataNascimento, telefone } = watch();
  const allFieldsValid = nome && cpf && dataNascimento && telefone;

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Etapa 2 de 4</h2>
      <h3 className="text-lg font-semibold mb-4">Pessoa Física</h3>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Nome</label>
          <input
            type="text"
            {...register('nome')}
            className={`mt-1 block w-full border ${errors.nome ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
          />
          {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome.message as string}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">CPF</label>
          <input
            type="text"
            {...register('cpf')}
            className={`mt-1 block w-full border ${errors.cpf ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
          />
          {errors.cpf && <p className="text-red-500 text-xs mt-1">{errors.cpf.message as string}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Data de nascimento</label>
          <input
            type="date"
            {...register('dataNascimento')}
            className={`mt-1 block w-full border ${errors.dataNascimento ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
          />
          {errors.dataNascimento && <p className="text-red-500 text-xs mt-1">{errors.dataNascimento.message as string}</p>}
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
            disabled={!allFieldsValid}
            className={`bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg ${!allFieldsValid ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step2Fisica;