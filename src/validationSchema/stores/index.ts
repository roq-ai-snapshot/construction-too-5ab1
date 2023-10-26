import * as yup from 'yup';

export const storeValidationSchema = yup.object().shape({
  name: yup.string().required(),
  location: yup.string().required(),
  opening_hours: yup.string().required(),
  closing_hours: yup.string().required(),
  supplier_id: yup.string().nullable().required(),
});
