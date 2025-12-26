import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocale } from '../LocaleContext';
import { useAlert } from '../contexts/AlertContext';
import {
  CareerFormContainer,
  CareerFormWrapper,
  FormTitle,
  FormSubtitle,
  Divider,
  FormGroup,
  ShortFormGroup,
  FormLabel,
  FormInput,
  FormTextarea,
  FormSelect,
  SubmitButton,
  PrivacyNote,
  BackButton,
  CompactFormRow,
  FormSection,
  SectionTitle,
  FullWidthGroup
} from '../assets/styles/careerForm.styles';

interface FormData {
  name: string;
  email: string;
  phone: string;
  telegram: string;
  specialization: string;
  experience: string;
  message: string;
}

const MAX_MESSAGE_LENGTH = 500;

const CareerForm: React.FC = () => {
  const navigate = useNavigate();
  const { localeContent } = useLocale();
  const { showSuccessAlert, showErrorAlert } = useAlert();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    telegram: '',
    specialization: '',
    experience: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendToTelegram = async (data: FormData) => {
    const botToken = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      throw new Error('Telegram configuration is missing');
    }

    const message = `
🚀 *New Collaboration Application*

👤 *Name:* ${data.name}
📧 *Email:* ${data.email}
📱 *Phone:* ${data.phone || 'Not provided'}
✈️ *Telegram:* ${data.telegram || 'Not provided'}
💼 *Specialization:* ${data.specialization}
⏱ *Experience:* ${data.experience || 'Not specified'}

💬 *Message:*
${data.message || 'No message provided'}
    `.trim();

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown'
      })
    });

    if (!response.ok) {
      throw new Error('Failed to send message to Telegram');
    }

    return response.json();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Валидация
    if (!formData.name || !formData.email || !formData.specialization) {
      showErrorAlert(localeContent?.careerForm?.errorRequired || 'Please fill in all required fields');
      return;
    }

    // Валидация email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showErrorAlert('Please enter a valid email address');
      return;
    }

    // Валидация телефона (если заполнен)
    if (formData.phone) {
      const phoneRegex = /^[\d\s\+\-\(\)]+$/;
      if (!phoneRegex.test(formData.phone) || formData.phone.replace(/\D/g, '').length < 7) {
        showErrorAlert('Please enter a valid phone number (minimum 7 digits)');
        return;
      }
    }

    setIsSubmitting(true);

    try {
      await sendToTelegram(formData);
      showSuccessAlert(localeContent?.careerForm?.successMessage || 'Your application has been sent successfully!');
      
      // Очистка формы
      setFormData({
        name: '',
        email: '',
        phone: '',
        telegram: '',
        specialization: '',
        experience: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending form:', error);
      showErrorAlert(localeContent?.careerForm?.errorMessage || 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <CareerFormContainer>
      <CareerFormWrapper id="career-form">
        <BackButton onClick={() => navigate('/')}>
          ← {localeContent?.careerForm?.backToHome || 'Back to Home'}
        </BackButton>
        <FormTitle>{localeContent?.careerForm?.title || 'Join Our Team'}</FormTitle>
        <Divider />
        <FormSubtitle>{localeContent?.careerForm?.subtitle || 'Looking for collaboration projects? Fill out the form and let\'s work together!'}</FormSubtitle>

        <form onSubmit={handleSubmit}>
          <FormSection>
            <SectionTitle>{localeContent?.careerForm?.contactInformation || 'Contact Information'}</SectionTitle>
            <CompactFormRow>
              <ShortFormGroup>
                <FormLabel $hasValue={!!formData.name} $isFocused={focusedField === 'name'}>
                  {localeContent?.careerForm?.name || 'Name'} *
                </FormLabel>
                <FormInput
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  maxLength={50}
                  required
                />
              </ShortFormGroup>

              <ShortFormGroup>
                <FormLabel $hasValue={!!formData.email} $isFocused={focusedField === 'email'}>
                  {localeContent?.careerForm?.email || 'Email'} *
                </FormLabel>
                <FormInput
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  maxLength={50}
                  required
                />
              </ShortFormGroup>
            </CompactFormRow>

            <CompactFormRow>
              <ShortFormGroup>
                <FormLabel $hasValue={!!formData.phone} $isFocused={focusedField === 'phone'}>
                  {localeContent?.careerForm?.phone || 'Phone'}
                </FormLabel>
                <FormInput
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  maxLength={20}
                />
              </ShortFormGroup>

              <ShortFormGroup>
                <FormLabel $hasValue={!!formData.telegram} $isFocused={focusedField === 'telegram'}>
                  {localeContent?.careerForm?.telegram || 'Telegram'}
                </FormLabel>
                <FormInput
                  type="text"
                  name="telegram"
                  value={formData.telegram}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('telegram')}
                  onBlur={() => setFocusedField(null)}
                  maxLength={50}
                //   placeholder="@username"
                />
              </ShortFormGroup>
            </CompactFormRow>
          </FormSection>

          <FormSection>
            <SectionTitle>{localeContent?.careerForm?.professionalDetails || 'Professional Details'}</SectionTitle>
            <CompactFormRow>
            <ShortFormGroup>
              <FormLabel $hasValue={!!formData.specialization} $isFocused={focusedField === 'specialization'}>
                {localeContent?.careerForm?.specialization || 'Specialization'} *
              </FormLabel>
              <FormSelect
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                onFocus={() => setFocusedField('specialization')}
                onBlur={() => setFocusedField(null)}
                required
              >
                <option value="" disabled hidden></option>
                <option value="frontend">{localeContent?.careerForm?.frontend || 'Frontend Developer'}</option>
                <option value="backend">{localeContent?.careerForm?.backend || 'Backend Developer'}</option>
                <option value="fullstack">{localeContent?.careerForm?.fullstack || 'Fullstack Developer'}</option>
                <option value="design">{localeContent?.careerForm?.design || 'UI/UX Designer'}</option>
                <option value="mobile">{localeContent?.careerForm?.mobile || 'Mobile Developer'}</option>
                <option value="devops">{localeContent?.careerForm?.devops || 'DevOps Engineer'}</option>
                <option value="other">{localeContent?.careerForm?.other || 'Other'}</option>
              </FormSelect>
            </ShortFormGroup>

            <ShortFormGroup>
              <FormLabel $hasValue={!!formData.experience} $isFocused={focusedField === 'experience'}>
                {localeContent?.careerForm?.experience || 'Experience'} *
              </FormLabel>
              <FormSelect
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                onFocus={() => setFocusedField('experience')}
                onBlur={() => setFocusedField(null)}
                required
              >
                <option value="" disabled hidden></option>
                <option value="junior">{localeContent?.careerForm?.junior || 'Junior (up to 2 years)'}</option>
              <option value="middle">{localeContent?.careerForm?.middle || 'Middle (2-5 years)'}</option>
              <option value="senior">{localeContent?.careerForm?.senior || 'Senior (5+ years)'}</option>
              <option value="lead">{localeContent?.careerForm?.lead || 'Tech Lead / Architect'}</option>
              <option value="other">{localeContent?.careerForm?.experienceOther || 'Other'}</option>
            </FormSelect>
          </ShortFormGroup>
        </CompactFormRow>
          </FormSection>

          <FormSection>
            <SectionTitle>{localeContent?.careerForm?.additionalInformation || 'Additional Information'}</SectionTitle>
            <FormGroup>
            <FormLabel $hasValue={!!formData.message} $isFocused={focusedField === 'message'}>
              {localeContent?.careerForm?.message || 'Tell us about yourself'}
              <span style={{ 
                float: 'right', 
                fontSize: '0.55rem', 
                color: 'rgba(51, 65, 85, 0.5)',
                fontWeight: 'normal',
                marginLeft: '10px'
              }}>
                Up to {MAX_MESSAGE_LENGTH} characters
              </span>
            </FormLabel>
            <FormTextarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocusedField('message')}
              
              onBlur={() => setFocusedField(null)}
              rows={6}
              maxLength={MAX_MESSAGE_LENGTH}
            />
          </FormGroup>
          </FormSection>

          <PrivacyNote>
            🔒 {localeContent?.careerForm?.privacyNote || 'We respect your privacy. No spam. Only relevant collaboration offers.'}
          </PrivacyNote>

          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? (localeContent?.careerForm?.sending || 'Sending...') : (localeContent?.careerForm?.submit || 'Submit Application')}
          </SubmitButton>
        </form>
      </CareerFormWrapper>
    </CareerFormContainer>
  );
};

export default CareerForm;
