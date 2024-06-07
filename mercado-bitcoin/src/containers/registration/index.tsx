import Step1 from './step1';
import Step2Fisica from './step2pf';
import Step2Juridica from './step2pj';
import Step3 from './step3';
import Step4 from './step4';
import FormProvider, { useFormContext } from '../../context/context';
import { useFormContext as useRHFContext } from 'react-hook-form';

const Registration = () => {
  const { step } = useFormContext();
  const { watch } = useRHFContext();
  const formData = watch();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {step === 1 && <Step1 />}
      {step === 2 && formData.type === 'fisica' && <Step2Fisica />}
      {step === 2 && formData.type === 'juridica' && <Step2Juridica />}
      {step === 3 && <Step3 />}
      {step === 4 && <Step4 />}
    </div>
  );
};

const RegistrationWrapper = () => (
  <FormProvider>
    <Registration />
  </FormProvider>
);

export default RegistrationWrapper