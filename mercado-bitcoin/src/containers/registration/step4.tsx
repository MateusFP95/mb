import React from 'react';
import { useFormContext } from '../../context/context';
import { useFormContext as useRHFContext } from 'react-hook-form';

const Step4 = () => {
  const { prevStep, submitForm } = useFormContext();
  const { handleSubmit, watch } = useRHFContext();

  const formData = watch();

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Etapa 4 de 4</h2>
      <h3 className="text-lg font-semibold mb-4">Revise suas informações</h3>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Endereço de e-mail</label>
          <input
            type="email"
            value={formData.email}
            readOnly
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
          />
        </div>
        {formData.type === 'fisica' && (
          <>
          <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Nome</label>
          <input
            type="text"
            value={formData.nome}
            readOnly
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">CPF</label>
          <input
            type="text"
            value={formData.cpf}
            readOnly
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Data de nascimento</label>
          <input
            type="date"
            value={formData.dataNascimento}
            readOnly
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
          />
        </div>
        </>
        )}
        {formData.type === 'juridica' && (
          <>
          <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Razão social</label>
          <input
            type="text"
            value={formData.razaoSocial}
            readOnly
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">CNPJ</label>
          <input
            type="text"
            value={formData.cnpj}
            readOnly
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Data de abertura</label>
          <input
            type="date"
            value={formData.dataAbertura}
            readOnly
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
          />
        </div>
        </>
        )}
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Telefone</label>
          <input
            type="tel"
            value={formData.telefone}
            readOnly
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Senha</label>
          <input
            type="password"
            value={formData.senha}
            readOnly
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
          />
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
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step4;