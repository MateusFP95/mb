import React from 'react';
import { useFormContext } from '../../context/context';
import { useFormContext as useRHFContext } from 'react-hook-form';

const Step3 = () => {
  const { prevStep, nextStep } = useFormContext();
  const { register, formState: { errors }, watch } = useRHFContext();

  const { senha } = watch();

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Etapa 3 de 4</h2>
      <h3 className="text-lg font-semibold mb-4">Senha de acesso</h3>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Sua senha</label>
          <input
            type="password"
            {...register('senha')}
            className={`mt-1 block w-full border ${errors.senha ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm`}
          />
          {errors.senha && <p className="text-red-500 text-xs mt-1">{errors.senha.message as string}</p>}
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
            disabled={!senha}
            className={`bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg ${!senha ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step3;