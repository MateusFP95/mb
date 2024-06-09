import { useFormContext } from '../../../context/context';
import { useFormContext as useRHFContext } from 'react-hook-form';
import MaskedInput from '../../../components/MaskedInput';
import { LabelInput, LabelStep, Span, Title } from '../../../components/Title/input';
import Button from '../../../components/Button';
import { CLASSNAMES } from '../../../utils/constants';

const Step1 = () => {
  const { nextStep } = useFormContext();
  const { register, watch } = useRHFContext();

  const { email } = watch();

  return (
    <div className="max-w-md mx-auto p-4">
      <LabelStep text="1" />
      <Title text="Seja bem vindo(a)" />
      <div>
        <div className="mb-4">
          <LabelInput text="Endereço de e-mail" />
          <MaskedInput
            name="email"
          />
        </div>
        <div className="mb-4">
          <LabelInput text="Tipo de pessoa" />
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="fisica"
                {...register('type')}
                className="form-radio"
              />
              <Span text="Pessoa fisica" />
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                value="juridica"
                {...register('type')}
                className="form-radio"
              />
              <Span text="Pessoa jurídica" />
            </label>
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            onClick={nextStep}
            text="Continuar"
            disabled={!email}
            className={`${CLASSNAMES.buttonContinueStepOne} ${!email ? 'opacity-50 cursor-not-allowed' : ''}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Step1;