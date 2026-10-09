export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type ContactFormSubmission = ContactFormValues & {
  website: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>> & {
  form?: string;
};

export const emptyContactForm: ContactFormValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

function normalizeSingleLine(value: unknown): string {
  return typeof value === 'string' ? value.trim().replace(/\s+/g, ' ') : '';
}

function normalizeMessage(value: unknown): string {
  return typeof value === 'string' ? value.trim().replace(/\r\n?/g, '\n') : '';
}

export function normalizeContactForm(
  values: Partial<ContactFormSubmission>,
): ContactFormSubmission {
  return {
    name: normalizeSingleLine(values.name),
    email: normalizeSingleLine(values.email),
    phone: normalizeSingleLine(values.phone),
    message: normalizeMessage(values.message),
    website: normalizeSingleLine(values.website),
  };
}

export function validateContactForm(values: ContactFormSubmission): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name) {
    errors.name = 'Please enter your name.';
  } else if (values.name.length > 100) {
    errors.name = 'Please keep your name under 100 characters.';
  }

  if (!values.email) {
    errors.email = 'Please enter your email address.';
  } else if (values.email.length > 254 || !/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (values.phone && (values.phone.length > 40 || !/^[+\d().\s-]{7,40}$/.test(values.phone))) {
    errors.phone = 'Please enter a valid phone number.';
  }

  if (!values.message) {
    errors.message = 'Please enter a message.';
  } else if (values.message.length < 10) {
    errors.message = 'Please add a little more detail to your message.';
  } else if (values.message.length > 4000) {
    errors.message = 'Please keep your message under 4,000 characters.';
  }

  if (values.website) {
    errors.form = 'Something went wrong. Please try again or email me directly.';
  }

  return errors;
}

export function buildContactEmailText(values: ContactFormValues): string {
  const body = [
    'New portfolio message',
    '',
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone || 'Not provided'}`,
    '',
    'Message:',
    values.message,
  ].join('\n');

  return body;
}
