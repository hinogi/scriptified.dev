import axios from 'axios';

export default async (req, res) => {
  const { body, method } = req;
  const { email, firstName } = body;

  if (method === 'POST') {
    try {
      const response = await axios.post(
        `${process.env.EMAIL_API_ROOT}subscribers`,
        {
          email,
          metadata: {
            first_name: firstName,
          },
        },
        {
          headers: {
            Authorization: `Token ${process.env.EMAIL_AUTH_TOKEN}`,
          },
        }
      );
      console.log(response);
      return res.status(200).send({ msg: 'Success' });
    } catch (error) {
      console.log(error?.response?.data);
      const errorMsg = error?.response?.data?.[0];
      let msg = 'Unknown error occurred. Please refresh the page and try again.';
      if (errorMsg?.includes('is already subscribed')) {
        msg = 'Looks like you have already subscribed.';
      }
      if (errorMsg?.includes('but has not confirmed their email')) {
        msg =
          'Looks like you subscribed but have not confirmed your email. Kindly check your mail or email hello@scriptified.dev for queries.';
      }
      if (errorMsg?.includes('already been unsubscribed')) {
        msg =
          // eslint-disable-next-line max-len
          'Looks like you unsubscribed from the newsletter. If you unsubscribed by mistake & want to resubscribe again, drop us an email at hello@scriptified.dev';
      }
      return res.status(422).send({ msg });
    }
  }
};
