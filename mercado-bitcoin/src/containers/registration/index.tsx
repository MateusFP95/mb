import Step1 from './step/step1';
import Step2Fisica from './step/step2pf';
import Step2Juridica from './step/step2pj';
import Step3 from './step/step3';
import Step4 from './step/step4';
import FormProvider, { useFormContext } from '../../context/context';
import { useFormContext as useRHFContext } from 'react-hook-form';
import Modal from '../../components/Modal';
import Loading from '../../components/Loading';

const Registration = () => {
  const { step, submitForm } = useFormContext();
  const { watch, handleSubmit } = useRHFContext();
  const formData = watch();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form onSubmit={handleSubmit(submitForm)}>
        {step === 1 && <Step1 />}
        {step === 2 && formData.type === 'fisica' && <Step2Fisica />}
        {step === 2 && formData.type === 'juridica' && <Step2Juridica />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
      </form>
    </div>
  );
};

const RegistrationWrapper = () => (

  <FormProvider>
    <Registration />
    <Modal />
    <Loading />
  </FormProvider>

);

export default RegistrationWrapper