import { describe, expect, it } from 'vitest';
import { createMailtoHref, validateContactForm } from './contact';

const validValues = {
  name: 'Alex Example',
  email: 'alex@example.com',
  phone: '+123456',
  message: 'Hello Merna!',
};

describe('contact helpers', () => {
  it('validates required values and email format', () => {
    expect(validateContactForm({ name: '', email: 'invalid', phone: '', message: '' })).toEqual({
      name: 'Please enter your name.',
      email: 'Please enter a valid email address.',
      message: 'Please enter a message.',
    });
  });

  it('creates an encoded mailto draft with submitted values', () => {
    const href = createMailtoHref('mernahalla@gmail.com', validValues);
    expect(href).toContain('mailto:mernahalla@gmail.com?');
    const decodedHref = decodeURIComponent(href.replaceAll('+', ' '));
    expect(decodedHref).toContain('Name: Alex Example');
    expect(decodedHref).toContain('Hello Merna!');
  });
});
