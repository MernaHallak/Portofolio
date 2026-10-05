'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { IoCallOutline } from 'react-icons/io5';
import { MdOutlineMailOutline } from 'react-icons/md';
import { site } from '../../data/site';
import {
  createMailtoHref,
  emptyContactForm,
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from '../../lib/contact';

export function ContactSection() {
  const [values, setValues] = useState<ContactFormValues>(emptyContactForm);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isOpeningMail, setIsOpeningMail] = useState(false);

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    const field = name as keyof ContactFormValues;
    setValues((currentValues) => ({ ...currentValues, [field]: value }));
    setErrors((currentErrors) => ({ ...currentErrors, [field]: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContactForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setIsOpeningMail(true);
    window.location.assign(createMailtoHref(site.contact.email, values));
  }

  const fieldClass = (hasError: boolean) =>
    `w-full rounded-2xl border px-4 py-3 outline-none transition-colors ${
      hasError
        ? 'border-rose-500 focus:border-rose-500'
        : 'border-slate-200 bg-white focus:border-brand dark:border-slate-700 dark:bg-slate-950 dark:focus:border-brand-300'
    }`;

  return (
    <section id="contact" className="section">
      <div className="text-center md:text-left">
        <p className="section-kicker">Contact</p>
        <h2 className="section-title">
          Let’s discuss your <span className="text-brand">project</span>
        </h2>
        <p className="section-subtitle mx-auto mt-3 max-w-2xl md:mx-0">
          If you have an idea, a role, or a collaboration in mind — send a message and I’ll get back
          to you.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <aside className="card space-y-5 p-6">
          <ContactDetail
            icon={<IoCallOutline size={22} />}
            label="Call me"
            value={site.contact.phone}
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
          <div className="rounded-2xl border border-brand-100 bg-brand-50 p-4 dark:border-slate-700/60 dark:bg-slate-900">
            <p className="font-semibold">Tip</p>
            <p className="mt-1 text-sm text-brand-800 dark:text-slate-300">{site.contact.tip}</p>
          </div>
        </aside>

        <div className="card p-6 lg:col-span-2">
          <form noValidate onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField label="Your name" error={errors.name}>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  autoComplete="name"
                  className={fieldClass(Boolean(errors.name))}
                />
              </FormField>
              <FormField label="Your email" error={errors.email}>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  autoComplete="email"
                  className={fieldClass(Boolean(errors.email))}
                />
              </FormField>
            </div>
            <FormField label="Phone number (optional)" error={errors.phone}>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                value={values.phone}
                onChange={handleChange}
                autoComplete="tel"
                className={fieldClass(Boolean(errors.phone))}
              />
            </FormField>
            <FormField label="Message" error={errors.message}>
              <textarea
                id="contact-message"
                name="message"
                value={values.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'contact-message-error' : undefined}
                rows={6}
                className={`${fieldClass(Boolean(errors.message))} resize-none`}
              />
            </FormField>
            <button type="submit" className="btn-primary" disabled={isOpeningMail}>
              {isOpeningMail ? 'Opening your email app...' : 'Send Message'}
            </button>
            {isOpeningMail ? (
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Opening your email app with a pre-filled draft. Sending it remains in your control.
              </p>
            ) : null}
            <p className="text-sm text-slate-500 dark:text-slate-400">
              This form opens your email app with a pre-filled draft. Prefer email?{' '}
              <a
                href={`mailto:${site.contact.email}`}
                className="font-semibold text-brand underline-offset-4 hover:underline"
              >
                Write directly to {site.contact.email}
              </a>
              .
            </p>
          </form>
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
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand dark:bg-slate-800 dark:text-brand-300">
        {icon}
      </div>
      <div>
        <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
        {href ? (
          <a href={href} className="break-all font-semibold hover:text-brand">
            {value}
          </a>
        ) : (
          <p className="font-semibold">{value}</p>
        )}
      </div>
    </div>
  );
}

function FormField({
  children,
  error,
  label,
}: {
  children: React.ReactNode;
  error?: string;
  label: string;
}) {
  const fieldId =
    label === 'Your name'
      ? 'contact-name'
      : label === 'Your email'
        ? 'contact-email'
        : label === 'Message'
          ? 'contact-message'
          : 'contact-phone';

  return (
    <div>
      <label htmlFor={fieldId} className="mb-1 block text-sm font-semibold">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${fieldId}-error`} className="mt-1 text-sm text-rose-600 dark:text-rose-300">
          {error}
        </p>
      ) : null}
    </div>
  );
}
