import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Step1 from '../components/Step1';
import Step2 from '../components/Step2';
import Step3 from '../components/Step3';

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('userData');
    return saved ? JSON.parse(saved) : {};
  });
  const navigate = useNavigate();

  const handleSubmit = () => {
    localStorage.setItem('userData', JSON.stringify(formData));
    navigate('/dashboard');
  };

  return (
    <>
      {step === 1 && (
        <Step1 formData={formData} setFormData={setFormData} onNext={() => setStep(2)} />
      )}
      {step === 2 && (
        <Step2
          formData={formData}
          setFormData={setFormData}
          onNext={() => setStep(3)}
          onBack={() => setStep(1)}
        />
      )}
      {step === 3 && (
        <Step3
          formData={formData}
          setFormData={setFormData}
          onBack={() => setStep(2)}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default Onboarding;
