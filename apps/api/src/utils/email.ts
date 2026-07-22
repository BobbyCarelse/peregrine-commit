import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import { SendEmailCommand, SendEmailCommandOutput, SESClient } from '@aws-sdk/client-ses';

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
}: SendEmailOptions): Promise<SendEmailCommandOutput> => {
  const html = renderTemplate(template, variables);

  const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;
  const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
  const AWS_REGION = process.env.AWS_REGION;

  if (typeof AWS_ACCESS_KEY !== 'string' || typeof AWS_SECRET_ACCESS_KEY !== 'string')
    throw new Error('Invalid Email Credentials');

  const sesClient = new SESClient({
    region: AWS_REGION,
    credentials: {
      accessKeyId: AWS_ACCESS_KEY,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
    },
  });

  const emailCommand = new SendEmailCommand({
    Message: {
      Body: {
        Html: { Data: html, Charset: 'UTF-8' },
        Text: { Data: html, Charset: 'UTF-8' },
      },
      Subject: { Data: subject, Charset: 'UTF-8' },
    },
    Destination: {
      ToAddresses: [to],
    },
    Source: from,
  });

  return sesClient.send(emailCommand);
};
