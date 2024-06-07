import React, { createContext, useContext, useState } from 'react';
import { useForm, FormProvider as RHFProvider } from 'react-hook-form';
import { useRegistrationSchema } from "../containers/registration/resolver"
import { useNavigate } from "react-router-dom";
import axios from 'axios';

interface IFormContext {
  step: number;
  nextStep: () => void;
  prevStep: () => void;
  submitForm: (data: any) => void;
}

const FormContext = createContext({} as IFormContext);

export const useFormContext = () => useContext(FormContext);

const FormProvider = ({ children } : any) => {
  const navigate = useNavigate();
  const methods = useForm({
    mode: 'onBlur',
    resolver: useRegistrationSchema(),
    defaultValues: {
      email: '',
      type: 'fisica',
      nome: '',
      cpf: '',
      dataNascimento: '',
      telefone: '',
      razaoSocial: '',
      cnpj: '',
      dataAbertura: '',
      senha: ''
    }
  });
  const [step, setStep] = useState(1);
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const submitForm = async(data: any) => {
    console.log('submitForm');
    if (step === 4) {
      console.log(data);
      await axios.post('http://localhost:3000/registration',  data).then(() => {
        alert(`Usuário cadastrado com sucesso!`);
        setTimeout(() => {
          navigate(0);
        }, 2000)
      }).catch((error) => {
        alert(`${error.response.data.error}`);
      });
    }
  };

  return (
    <FormContext.Provider value={{ step, nextStep, prevStep, submitForm }}>
      <RHFProvider {...methods}>
        {children}
      </RHFProvider>
    </FormContext.Provider>
  );
};

export default FormProvider;