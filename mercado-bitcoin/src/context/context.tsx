import { createContext, useContext, useState } from 'react';
import { useForm, FormProvider as RHFProvider } from 'react-hook-form';
import { useRegistrationSchema } from "../containers/registration/resolver"
import axios from 'axios';

type TModalType = 'success' | 'error';

interface IFormContext {
  step: number;
  nextStep: () => void;
  prevStep: () => void;
  submitForm: (data: any) => void;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  modalType: TModalType;
  setModalType: React.Dispatch<React.SetStateAction<TModalType>>
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const FormContext = createContext({} as IFormContext);

export const useFormContext = () => useContext(FormContext);

const FormProvider = ({ children }: any) => {
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
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<TModalType>('success');
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => {
    if (step === 2) {
      methods.resetField("telefone");
      if (methods.getValues('type') === 'fisica') {
        methods.resetField("nome");
        methods.resetField("cpf");
        methods.resetField("dataNascimento");
      } else {
        methods.resetField("razaoSocial");
        methods.resetField("cnpj");
        methods.resetField("dataAbertura");
      }
    } else if (step === 3) {
      methods.resetField("senha");
    }
    setStep((prev) => prev - 1);
  }

  const submitForm = async (data: any) => {
    setIsLoading(true);
    if (step === 4) {
      await axios.post('http://localhost:3000/registration', data).then(() => {
        setIsModalOpen(true);
        setModalType('success');
      }).catch(() => {
        setIsModalOpen(true);
        setModalType('error');
      }).finally(() => {
        setIsLoading(false);
        methods.reset()
      });
    }
  };

  return (
    <FormContext.Provider value={{ step, nextStep, prevStep, submitForm, isModalOpen, setIsModalOpen, modalType, setModalType, isLoading, setIsLoading }}>
      <RHFProvider {...methods}>
        {children}
      </RHFProvider>
    </FormContext.Provider>
  );
};

export default FormProvider;