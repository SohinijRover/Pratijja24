// Import necessary components from Formik and MUI
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Box, Button, Checkbox, FormControlLabel, RadioGroup, TextField, Typography, Radio } from '@mui/material';
import { toast } from 'sonner';
import { debate_institution_team } from '../schema/form_schema';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { useState } from 'react';
import { PulseLoader } from "react-spinners";

const form2 = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Formik
    initialValues={{
      email: '',
      institution: '',
      name_poc1: '',
      contact_poc1: '',
      email_poc1: '',
      name_poc2: '',
      contact_poc2: '',
      email_poc2: '',
      slots: '1',
      ajudicator_slots: '1',
      accomodation: false,
      message: '',
    }}
      validationSchema={toFormikValidationSchema(debate_institution_team)}
      onSubmit={async (values) => {
        console.log(values);
        try {
          setLoading(true);
          const res = await fetch("/api/form2", {
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
          toast.error("Unknown error Occurred");
          setLoading(false);
        }
      }}
    >
      {({ isSubmitting,values,handleChange }) => (
        <Form>
        <div className="flex flex-col items-center justify-center p-5-">
          <div className='flex items-center justify-center gap-7'>
            <Box mb="10px">
              <Typography variant="body1" fontWeight={600} className='text-center'>
                Email
              </Typography>
              <Field
                as={TextField}
                fullWidth
                size="small"
                type="email"
                name="email"
                id="email"
                className='bg-slate-100 rounded-xl'
              />
              <ErrorMessage name="email" component="div" className='text-sm text-center pt-2 text-red-600' />
            </Box>
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
          <div className="text-indigo-500 text-[25px] font-semibold text-center p-3">Point of Contact -1</div>
          <div className='flex items-center justify-center gap-7'>
            {/* Speaker 1 */}

            <Box mb="10px">
              <Typography variant="body1" fontWeight={600} className='text-center'>
                Name
              </Typography>
              <Field
                as={TextField}
                fullWidth
                size="small"
                type="text"
                name="name_poc1"
                id="name_poc1"
                className='bg-slate-100 rounded-xl'
              />
              <ErrorMessage name="name_poc1" component="div" className='text-sm text-center pt-2 text-red-600' />
            </Box>
            <Box mb="10px">
              <Typography variant="body1" fontWeight={600} className='text-center'>
                Contact
              </Typography>
              <Field
                as={TextField}
                fullWidth
                size="small"
                type="text"
                name="contact_poc1"
                id="contact_poc1"
                className='bg-slate-100 rounded-xl'
              />
              <ErrorMessage name="contact_poc1" component="div" className='text-sm text-center pt-2 text-red-600' />
            </Box>
            <Box mb="10px">
              <Typography variant="body1" fontWeight={600} className='text-center'>
                Email
              </Typography>
              <Field
                as={TextField}
                fullWidth
                size="small"
                type="text"
                name="email_poc1"
                id="email_poc1"
                className='bg-slate-100 rounded-xl'
              />
              <ErrorMessage name="email_poc1" component="div" className='text-sm text-center pt-2 text-red-600' />
            </Box>
            {/* Add other fields for Speaker 1 */}
          </div>
          <div className="text-indigo-500 text-[25px] font-semibold text-center p-3">Point of Contact -2</div>
          <div className='flex items-center justify-center gap-7'>
            {/* Speaker 1 */}
            <Box mb="10px">
              <Typography variant="body1" fontWeight={600} className='text-center'>
                Name
              </Typography>
              <Field
                as={TextField}
                fullWidth
                size="small"
                type="text"
                name="name_poc2"
                id="name_poc2"
                className='bg-slate-100 rounded-xl'
              />
              <ErrorMessage name="name_poc2" component="div" className='text-sm text-center pt-2 text-red-600' />
            </Box>
            <Box mb="10px">
              <Typography variant="body1" fontWeight={600} className='text-center'>
                Contact
              </Typography>
              <Field
                as={TextField}
                fullWidth
                size="small"
                type="text"
                name="contact_poc2"
                id="contact_poc2"
                className='bg-slate-100 rounded-xl'
              />
              <ErrorMessage name="contact_poc2" component="div" className='text-sm text-center pt-2 text-red-600' />
            </Box>
            <Box mb="10px">
              <Typography variant="body1" fontWeight={600} className='text-center'>
                Email
              </Typography>
              <Field
                as={TextField}
                fullWidth
                size="small"
                type="text"
                name="email_poc2"
                id="email_poc2"
                className='bg-slate-100 rounded-xl'
              />
              <ErrorMessage name="email_poc2" component="div" className='text-sm text-center pt-2 text-red-600' />
            </Box>
            {/* Add other fields for Speaker 1 */}
          </div>
          {/* Add similar structures for Speaker 2 and Speaker 3 */}
          <div className="flex items-center justify-center bg-slate-300 rounded-lg text-black m-8">
            <Box mb="10px" style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body1" fontWeight={600} padding="10px">
                Number of Slots:
              </Typography>
              <RadioGroup
                aria-label="slots"
                name="slots"
                id="slots"
                value={values.slots}
                onChange={handleChange}
                style={{ display: 'flex', flexDirection: 'row' }}
              >
                {[1, 2, 3, 4, 5].map((slot) => (
                  <FormControlLabel
                    key={slot}
                    value={slot}
                    control={<Radio />}
                    label={slot}
                    style={{ flex: 1 }}
                  />
                ))}
              </RadioGroup>
            </Box>

          </div>
          <div className="flex items-center justify-center  bg-slate-300 rounded-lg text-black m-8 ps-3">
            <Box mb="10px" style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body1" fontWeight={600} padding="10px">
                Number of Ajudicator Slots:
              </Typography>
              <RadioGroup
                className=""
                aria-label="ajudicator_slots"
                name="ajudicator_slots"
                id="ajudicator_slots"
                value={values.ajudicator_slots}
                onChange={handleChange}
                style={{ display: 'flex', flexDirection: 'row' }}
              >
                {[1, 2, 3, 4, 5].map((ajudicator_slots) => (
                  <FormControlLabel
                    key={ajudicator_slots}
                    value={ajudicator_slots}
                    control={<Radio />}
                    label={ajudicator_slots}
                    style={{ flex: 1 }}
                  />
                ))}
              </RadioGroup>
            </Box>
          </div>
          {/* Accommodation */}
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
          className={`${loading && "opacity-50 cursor-not-allowed"
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

export default form2;
