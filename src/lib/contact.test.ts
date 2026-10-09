import { describe, expect, it } from 'vitest';
import { buildContactEmailText, normalizeContactForm, validateContactForm } from './contact';

const validValues = {
  name: 'Alex Example',
  email: 'alex@example.com',
  phone: '+123456',
  message: 'Hello Merna!',
  website: '',
};

describe('contact helpers', () => {
  it('accepts a valid payload with an optional phone number', () => {
    expect(validateContactForm(validValues)).toEqual({});
  });

  it('reports missing values and invalid email addresses', () => {
    expect(
      validateContactForm({ ...validValues, name: '', email: 'invalid', message: '' }),
    ).toEqual({
      name: 'Please enter your name.',
      email: 'Please enter a valid email address.',
      message: 'Please enter a message.',
    });
  });

  it('rejects honeypot submissions', () => {
    expect(validateContactForm({ ...validValues, website: 'https://spam.example' })).toMatchObject({
      form: 'Something went wrong. Please try again or email me directly.',
    });
  });

  it('normalizes values and creates a clear email body without calling a provider', () => {
    const values = normalizeContactForm({
      ...validValues,
      name: '  Alex   Example ',
      message: '  Hello Merna!\r\nThanks.  ',
    });

    expect(values).toMatchObject({
      name: 'Alex Example',
      message: 'Hello Merna!\nThanks.',
    });
    expect(buildContactEmailText(values)).toContain('Name: Alex Example');
    expect(buildContactEmailText(values)).toContain('Message:\nHello Merna!\nThanks.');
  });
});
