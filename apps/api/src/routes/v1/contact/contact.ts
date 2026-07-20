import { Router } from 'express';
import { sendEmail } from '../../../utils/email';

export const contactRouter = Router();

contactRouter.post('/', async (req, res) => {
  if (typeof req?.body?.name !== 'string' || req.body.name.trim() === '') {
    return res.status(400).json({ error: 'Name is required' });
  }

  if (typeof req?.body?.email !== 'string' || req.body.email.trim() === '') {
    return res.status(400).json({ error: 'Email is required' });
  }

  if (typeof req?.body?.description !== 'string' || req.body.description.trim() === '') {
    return res.status(400).json({ error: 'Description is required' });
  }

  await sendEmail({
    to: req?.body?.email,
    from: 'bobbycarelse@gmail.com',
    subject: `Thanks ${req?.body?.name}, I've got it`,
    template: 'contact-confirmation',
    variables: {
      first_name: req?.body?.name,
      message: req?.body?.description,
    },
  });

  await sendEmail({
    to: 'bobbycarelse@gmail.com',
    from: 'bobbycarelse@gmail.com',
    subject: 'Peregrine Commit - Notification',
    template: 'contact-notification',
    variables: {
      name: req?.body?.name,
      email: req?.body?.email,
      message: req?.body?.description,
      phoneNumber: req?.body?.phoneNumber ?? 'N/A',
      hearAboutMe: req?.body?.hearAboutMe ?? 'N/A',
    },
  });

  return res.status(200).json({ message: 'Contact form submitted successfully' });
});
