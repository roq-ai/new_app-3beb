import * as yup from 'yup';

export const documentValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().nullable(),
  company_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
