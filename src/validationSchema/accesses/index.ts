import * as yup from 'yup';

export const accessValidationSchema = yup.object().shape({
  access_type: yup.string().required(),
  document_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
