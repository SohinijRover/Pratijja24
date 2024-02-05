import { Formik, Form, Field, ErrorMessage} from 'formik';
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography, RadioGroup, Radio } from '@mui/material';
import { toast } from 'sonner';
import { debate_institution_adjudicator } from '../schema/form_schema';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { useState } from 'react';
import { PulseLoader } from "react-spinners";

const Form3 = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        contact: '',
        institution: '',
        accomodation: false,
        message: '',
      }}
      validationSchema={toFormikValidationSchema(debate_institution_adjudicator)}
      onSubmit={async (values) => {
        console.log(values);
        try {
          setLoading(true);
          const res = await fetch("/api/form3", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });
          const data = await res.json();
          if (!data.success) {
            toast.error(data.message);
            setLoading(false);
          } else {
            toast.success(data.message);
            setLoading(false);
          }
        } catch (err) {
          toast.error("Unknown error occurred");
          setLoading(false);
        }
      }}
    >
      {({ values, handleChange }) => (
        <Form>
          <div className="flex flex-col items-center justify-center p-5-">
            {/* Adjudicator Name */}
            <div className="text-indigo-500 text-[25px] font-semibold text-center pb-3">Adjudicator Name</div>
            <div className='flex items-center justify-center text-center gap-7'>
            <Box mb="10px">
            <Typography variant="body1" fontWeight={600} className='text-center'>
              Name
            </Typography>
            <Field
              as={TextField}
              fullWidth
              size="small"
              type="text"
              name="name"
              id="name"
              className='bg-slate-100 rounded-xl'
            />
            <ErrorMessage name="name" component="div" className='text-sm text-center pt-2 text-red-600' />
          </Box>

            {/* Adjudicator Email */}
            <Box mb="10px">
            <Typography variant="body1" fontWeight={600} className='text-center'>
              Email
            </Typography>
            <Field
              as={TextField}
              fullWidth
              size="small"
              type="text"
              name="email"
              id="email"
              className='bg-slate-100 rounded-xl'
            />
            <ErrorMessage name="email" component="div" className='text-sm text-center pt-2 text-red-600' />
          </Box>

            {/* Adjudicator Contact */}
            <Box mb="10px">
            <Typography variant="body1" fontWeight={600} className='text-center'>
              Contact
            </Typography>
            <Field
              as={TextField}
              fullWidth
              size="small"
              type="text"
              name="contact"
              id="contact"
              className='bg-slate-100 rounded-xl'
            />
            <ErrorMessage name="contact" component="div" className='text-sm text-center pt-2 text-red-600' />
          </Box>

            {/* Adjudicator Institution */}
            <Box mb="10px">
            <Typography variant="body1" fontWeight={600} className='text-center'>
              Institution
            </Typography>
            <Field
              as={TextField}
              fullWidth
              size="small"
              type="text"
              name="institution"
              id="institution"
              className='bg-slate-100 rounded-xl'
            />
            <ErrorMessage name="institution" component="div" className='text-sm text-center pt-2 text-red-600' />
          </Box>
          </div>

            {/* Need Accommodation */}
            <div className="flex items-center justify-center">
              <Box mb="10px">
                <FormControlLabel
                  control={
                    <Field
                      as={Checkbox}
                      color="info"
                      type="checkbox"
                      name="accomodation"
                      id="accomodation"
                    />
                  }
                  label="Need Accommodation"
                />
              </Box>
            </div>

            {/* Additional Message */}
            <Box mb="10px">
              <Typography variant="body1" fontWeight={600}>
                Message:
              </Typography>
              <Field
                as={TextField}
                fullWidth
                size="small"
                type="text"
                name="message"
                id="message"
                className='bg-white rounded'
              />
            </Box>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={loading}
                className={`${
                  loading && "opacity-50 cursor-not-allowed"
                } mx-auto mt-2 flex items-center gap-4 py-1 md:py-2 leading-none px-4 md:px-6 rounded-full bg-gradient-to-b from-[#174ACE] to-indigo-500 text-sm md:text-lg font-medium text-white pt-5 mb-10`}
              >
                <PulseLoader loading={loading} size={6} color="#fff" />
                <p>Submit</p>
              </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Form3;
