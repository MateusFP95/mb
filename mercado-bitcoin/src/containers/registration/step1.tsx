import React from 'react';
import { useFormContext } from '../../context/context';
import { useFormContext as useRHFContext } from 'react-hook-form';

const Step1 = () => {
  const { nextStep } = useFormContext();
  const { register, formState: { errors, }, watch } = useRHFContext();

  const { email } = watch();

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Etapa 1 de 4</h2>
      <h3 className="text-lg font-semibold mb-4">Seja bem vindo(a)</h3>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Endereço de e-mail</label>
          <input
            type="email"
            {...register('email')}
            className={`mt-1 block w-full border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message as string}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Tipo de pessoa</label>
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="fisica"
                {...register('type')}
                className="form-radio"
              />
              <span className="ml-2">Pessoa física</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                value="juridica"
                {...register('type')}
                className="form-radio"
              />
              <span className="ml-2">Pessoa jurídica</span>
            </label>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={nextStep}
            disabled={!email}
            className={`bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 w-full rounded-lg ${!email ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step1;