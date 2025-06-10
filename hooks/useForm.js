import { useState } from 'react';

const useForm = (initialState, agentEmail) => {
  const [formData, setFormData] = useState({ ...initialState, agentemail: agentEmail });
  const [formState, setFormState] = useState('idle');
  const [formError, setFormError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('submitting');
    setFormError(null);

    try {
      const response = await fetch('https://n8n.salesgenius.co/webhook/agentsitesubmissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormState('success');
      } else {
        const errorData = await response.json();
        setFormError(errorData.message || 'An unknown error occurred.');
        setFormState('error');
      }
    } catch (error) {
      setFormError(error.message || 'An unknown error occurred.');
      setFormState('error');
    }
  };

  return {
    formData,
    formState,
    formError,
    handleChange,
    handleSubmit,
  };
};

export default useForm;