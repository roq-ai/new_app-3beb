import * as yup from 'yup';

export const invitationValidationSchema = yup.object().shape({
  status: yup.string().nullable(),
  company_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
