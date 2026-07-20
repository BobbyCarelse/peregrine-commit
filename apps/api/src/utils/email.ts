import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? '');

export type EmailTemplate = 'contact-confirmation' | 'contact-notification';

const TEMPLATES_DIR = join(__dirname, '../email-templates');

const renderTemplate = (template: EmailTemplate, variables: Record<string, string>): string => {
  const html = readFileSync(join(TEMPLATES_DIR, `${template}.html`), 'utf-8');
  return html.replace(/{{\s*(\w+)\s*}}/g, (_match, key: string) => variables[key] ?? '');
};

interface SendEmailOptions {
  to: string;
  from: string;
  subject: string;
  template: EmailTemplate;
  variables: Record<string, string>;
}

export const sendEmail = async ({
  to,
  from,
  subject,
  template,
  variables,
}: SendEmailOptions): Promise<void> => {
  const html = renderTemplate(template, variables);
  await sgMail.send({ to, from, subject, html });
};
