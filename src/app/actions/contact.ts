'use server';

import { sendContactEmail } from '../../lib/contact-email.server';
import {
  normalizeContactForm,
  validateContactForm,
  type ContactFormErrors,
  type ContactFormSubmission,
} from '../../lib/contact';

export type ContactActionResult = { success: true } | { success: false; errors: ContactFormErrors };

export async function sendContactMessage(
  submittedValues: ContactFormSubmission,
): Promise<ContactActionResult> {
  const values = normalizeContactForm(submittedValues);
  const errors = validateContactForm(values);

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  try {
    await sendContactEmail(values);
    return { success: true };
  } catch (error) {
    console.error('Portfolio contact message could not be sent.', error);
    return {
      success: false,
      errors: {
        form: 'Something went wrong. Please try again or email me directly.',
      },
    };
  }
}
