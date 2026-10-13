'use client';

import { useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import HCaptcha, { type HCaptcha as HCaptchaInstance } from '@hcaptcha/react-hcaptcha';
import { CiLocationOn } from 'react-icons/ci';
import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';
import { site } from '../../data/site';
import { useTheme } from '../../providers/ThemeProvider';
import {
  emptyContactForm,
  normalizeContactForm,
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from '../../lib/contact';

type FieldName = keyof ContactFormValues;
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_HCAPTCHA_SITE_KEY = '50b2fe65-b00b-4b9e-ad62-3ba471098be2';
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

type Web3FormsResponse = {
  success?: boolean;
};

export function ContactSection() {
  const { theme } = useTheme();
  const [values, setValues] = useState<ContactFormValues>(emptyContactForm);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [honeypot, setHoneypot] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const fieldRefs = useRef<Partial<Record<FieldName, HTMLInputElement | HTMLTextAreaElement>>>({});
  const captchaRef = useRef<HCaptchaInstance>(null);

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    const field = name as FieldName;
    setValues((currentValues) => ({ ...currentValues, [field]: value }));
    setErrors((currentErrors) => ({ ...currentErrors, [field]: undefined, form: undefined }));
    setStatusMessage('');
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const submittedValues = normalizeContactForm({ ...values, website: honeypot });
    const nextErrors = validateContactForm(submittedValues);
    setErrors(nextErrors);

    const firstInvalidField = (
      Object.keys(nextErrors).filter((field): field is FieldName => field !== 'form') as FieldName[]
    )[0];
    if (firstInvalidField) {
      fieldRefs.current[firstInvalidField]?.focus();
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      setErrors({ form: 'The contact form is not configured. Please email me directly.' });
      setStatusMessage('The contact form is not configured. Please email me directly.');
      return;
    }

    if (!captchaToken) {
      setErrors({ form: 'Please complete the hCaptcha verification before sending your message.' });
      setStatusMessage('Please complete the hCaptcha verification before sending your message.');
      return;
    }

    setIsSending(true);
    setStatusMessage('Sending…');

    try {
      const formData = new FormData();
      formData.append('access_key', WEB3FORMS_ACCESS_KEY);
      formData.append('from_name', 'Merna Portfolio');
      formData.append('subject', 'New message from Merna Portfolio');
      formData.append('name', submittedValues.name);
      formData.append('email', submittedValues.email);
      formData.append('replyto', submittedValues.email);
      formData.append('phone', submittedValues.phone);
      formData.append('message', submittedValues.message);
      formData.append('h-captcha-response', captchaToken);

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });
      const result = (await response.json()) as Web3FormsResponse;

      if (!response.ok || !result.success) {
        throw new Error('Web3Forms rejected the submission.');
      }

      setValues(emptyContactForm);
      setHoneypot('');
      setCaptchaToken('');
      captchaRef.current?.resetCaptcha();
      setErrors({});
      setStatusMessage('Message sent successfully. I’ll get back to you soon.');
    } catch {
      setErrors({ form: 'Something went wrong. Please try again or email me directly.' });
      setStatusMessage('Something went wrong. Please try again or email me directly.');
    } finally {
      setIsSending(false);
    }
  }

  const fieldClass = (hasError: boolean) =>
    `w-full rounded-xl border bg-canvas px-4 py-3 text-ink outline-none transition-[border-color,box-shadow] ${
      hasError
        ? 'border-red-600 focus-visible:border-red-600'
        : 'border-strongLine focus-visible:border-focus focus-visible:ring-2 focus-visible:ring-focus'
    }`;

  return (
    <section id="contact" className="border-t border-line bg-surface">
      <div className="section">
        <div className="text-center md:text-left">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title mt-3">Let’s build something clear and useful</h2>
          <p className="section-subtitle mx-auto mt-4 max-w-2xl md:mx-0">
            If you have a frontend role, project, or collaboration in mind, share the context and
            I’ll get back to you.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="card p-6 sm:p-7">
            <div className="space-y-6">
              <ContactDetail
                icon={<IoCallOutline size={22} />}
                label="Phone"
                value={site.contact.phone}
                href={`tel:${site.contact.phone.replace(/\s/g, '')}`}
              />
              <ContactDetail
                icon={<MdOutlineMailOutline size={22} />}
                label="Email"
                value={site.contact.email}
                href={`mailto:${site.contact.email}`}
              />
              <ContactDetail
                icon={<CiLocationOn size={22} />}
                label="Location"
                value={site.contact.location}
              />
            </div>
            <div className="mt-7 border-t border-line pt-6">
              <p className="font-extrabold">Helpful context</p>
              <p className="mt-2 text-sm leading-6 text-muted">{site.contact.tip}</p>
            </div>
          </aside>

          <div className="card p-6 sm:p-7">
            <form noValidate onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h3 className="text-xl font-extrabold tracking-tight">Send me a message</h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Use the form for the fastest response. Your message is sent securely from this
                  website.
                </p>
              </div>

              <div
                aria-hidden="true"
                className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden"
              >
                <label htmlFor="contact-website">Website</label>
                <input
                  id="contact-website"
                  name="website"
                  type="text"
                  value={honeypot}
                  onChange={(event) => setHoneypot(event.target.value)}
                  autoComplete="off"
                  tabIndex={-1}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField id="contact-name" label="Your name" error={errors.name}>
                  <input
                    ref={(element) => {
                      fieldRefs.current.name = element ?? undefined;
                    }}
                    id="contact-name"
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    autoComplete="name"
                    maxLength={100}
                    className={fieldClass(Boolean(errors.name))}
                  />
                </FormField>
                <FormField id="contact-email" label="Your email" error={errors.email}>
                  <input
                    ref={(element) => {
                      fieldRefs.current.email = element ?? undefined;
                    }}
                    id="contact-email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    autoComplete="email"
                    maxLength={254}
                    className={fieldClass(Boolean(errors.email))}
                  />
                </FormField>
              </div>
              <FormField id="contact-phone" label="Phone number (optional)" error={errors.phone}>
                <input
                  ref={(element) => {
                    fieldRefs.current.phone = element ?? undefined;
                  }}
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                  autoComplete="tel"
                  maxLength={40}
                  className={fieldClass(Boolean(errors.phone))}
                />
              </FormField>
              <FormField id="contact-message" label="Message" error={errors.message}>
                <textarea
                  ref={(element) => {
                    fieldRefs.current.message = element ?? undefined;
                  }}
                  id="contact-message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  rows={5}
                  maxLength={4000}
                  className={`${fieldClass(Boolean(errors.message))} resize-y`}
                />
              </FormField>

              <div>
                <p className="mb-2 text-sm font-extrabold">Security check</p>
                <HCaptcha
                  ref={captchaRef}
                  sitekey={WEB3FORMS_HCAPTCHA_SITE_KEY}
                  reCaptchaCompat={false}
                  theme={theme}
                  onVerify={(token) => {
                    setCaptchaToken(token);
                    setErrors((currentErrors) => ({ ...currentErrors, form: undefined }));
                    setStatusMessage('');
                  }}
                  onExpire={() => {
                    setCaptchaToken('');
                    setErrors({
                      form: 'The hCaptcha verification expired. Please complete it again.',
                    });
                  }}
                  onError={() => {
                    setCaptchaToken('');
                    setErrors({
                      form: 'hCaptcha could not load. Please refresh the page and try again.',
                    });
                  }}
                />
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button type="submit" className="btn-primary" disabled={isSending}>
                  {isSending ? 'Sending…' : 'Send Message'}
                </button>
                <p className="text-sm leading-6 text-muted" aria-live="polite" role="status">
                  {statusMessage || 'Messages are sent securely through this form.'}
                </p>
              </div>

              {errors.form ? (
                <p className="text-sm font-bold text-red-700 dark:text-red-300" role="alert">
                  {errors.form}
                </p>
              ) : null}

              <div className="border-t border-line pt-5">
                <p className="font-extrabold">Email me directly</p>
                <p className="mt-1 text-sm text-muted">Prefer your own email app? </p>
                <a href={`mailto:${site.contact.email}`} className="text-link">
                  {site.contact.email}
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactDetail({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accentSoft text-accent">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-bold text-muted">{label}</p>
        {href ? (
          <a href={href} className="break-words font-extrabold transition-colors hover:text-accent">
            {value}
          </a>
        ) : (
          <p className="font-extrabold">{value}</p>
        )}
      </div>
    </div>
  );
}

function FormField({
  children,
  error,
  id,
  label,
}: {
  children: ReactNode;
  error?: string;
  id: string;
  label: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-extrabold">
        {label}
      </label>
      {children}
      {error ? (
        <p
          id={`${id}-error`}
          className="mt-2 text-sm font-bold text-red-700 dark:text-red-300"
          role="alert"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
