// Import necessary components from Formik and MUI
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import { toast } from 'sonner';
import { debate_cross_teams } from '../schema/form_schema';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { useState } from 'react';
import { PulseLoader } from "react-spinners";

const MyForm = () => {
const [loading, setLoading] = useState(false);
  return (
    <Formik
      initialValues={{
        team_name: '',
        speaker_1: '',
        email_1: '',
        contact_1: '',
        institution_1: '',
        speaker_2: '',
        email_2: '',
        contact_2: '',
        institution_2: '',
        speaker_3: '',
        email_3: '',
        contact_3: '',
        institution_3: '',
        accomodation: false,
        message: '',
      }}
      validationSchema={toFormikValidationSchema(debate_cross_teams)}
      onSubmit={async (values) => {
        console.log(values);
        try {
        setLoading(true);
          const res = await fetch("/api/form1", {
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
      {({ isSubmitting }) => (
        <Form>
          <div className="flex flex-col items-center justify-center p-8-"><Box mb="10px">
            
          <div className="text-indigo-500 text-[25px] font-semibold text-center pb-3">Team Name</div>
            <Field
              as={TextField}
              fullWidth
              size="small"
              type="text"
              name="team_name"
              id="team_name"
              className='bg-slate-100 rounded-xl'
            />
            <ErrorMessage name="team_name" component="div" className='text-sm text-center pt-2 text-red-600' />
          </Box>
          <div className="text-indigo-500 text-[25px] font-semibold text-center">Speaker -1</div>
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
              name="speaker_1"
              id="speaker_1"
              className='bg-slate-100 rounded-xl'
            />
            <ErrorMessage name="speaker_1" component="div" className='text-sm text-center pt-2 text-red-600' />
          </Box>
          <Box mb="10px">
            <Typography variant="body1" fontWeight={600} className='text-center'>
              Email
            </Typography>
            <Field
              as={TextField}
              fullWidth
              size="small"
              type="email"
              name="email_1"
              id="email_1"
              className='bg-slate-100 rounded-xl'
            />
            <ErrorMessage name="email_1" component="div" className='text-sm text-center pt-2 text-red-600'/>
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
              name="contact_1"
              id="contact_1"
              className='bg-slate-100 rounded-xl'
            />
            <ErrorMessage name="contact_1" component="div" className='text-sm text-center pt-2 text-red-600' />
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
              name="institution_1"
              id="institution_1"
              className='bg-slate-100 rounded-xl'
            />
            <ErrorMessage name="institution_1" component="div" className='text-sm text-center pt-2 text-red-600' />
          </Box>
          </div>
          <div className="text-indigo-500 text-[25px] font-semibold text-center ">Speaker -2</div>
          <div className='flex items-center justify-cente  gap-7'>
          <Box mb="10px">
            <Typography variant="body1" fontWeight={600} className='text-center'>
              Name
            </Typography>
            <Field
              as={TextField}
              fullWidth
              size="small"
              type="text"
              name="speaker_2"
              id="speaker_2"
              className='bg-slate-100 rounded-xl'
            />
            <ErrorMessage name="speaker_2" component="div" className='text-sm text-center pt-2 text-red-600'/>
          </Box>
          <Box mb="10px">
            <Typography variant="body1" fontWeight={600} className='text-center'>
              Email
            </Typography>
            <Field
              as={TextField}
              fullWidth
              size="small"
              type="email"
              name="email_2"
              id="email_2"
              className='bg-slate-100 rounded-xl'
            />
            <ErrorMessage name="email_2" component="div" className='text-sm text-center pt-2 text-red-600'/>
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
              name="contact_2"
              id="contact_2"
              className='bg-slate-100 rounded-xl'
            />
            <ErrorMessage name="contact_2" component="div" className='text-sm text-center pt-2 text-red-600'/>
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
              name="institution_2"
              id="institution_2"
              className='bg-slate-100 rounded-xl'
            />
            <ErrorMessage name="institution_2" component="div" className='text-sm text-center pt-2 text-red-600'/>
          </Box>
          </div>
          <div className="text-indigo-500 text-[25px] font-semibold text-center">Speaker -3</div>
          <div className='flex items-start justify-center gap-7'>
          <Box mb="10px">
            <Typography variant="body1" fontWeight={600} className='text-center'>
              Name
            </Typography>
            <Field
              as={TextField}
              fullWidth
              size="small"
              type="text"
              name="speaker_3"
              id="speaker_3"
              className='bg-slate-100 rounded-xl'
            />
            <ErrorMessage name="speaker_3" component="div" className='text-sm text-center pt-2 text-red-600'/>
          </Box>
          <Box mb="10px">
            <Typography variant="body1" fontWeight={600} className='text-center'>
              Email
            </Typography>
            <Field
              as={TextField}
              fullWidth
              size="small"
              type="email"
              name="email_3"
              id="email_3"
              className='bg-slate-100 rounded-xl'
            />
            <ErrorMessage name="email_3" component="div" className='text-sm text-center pt-2 text-red-600'/>
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
              name="contact_3"
              id="contact_3"
              className='bg-slate-100 rounded-xl'
            />
            <ErrorMessage name="contact_3" component="div" className='text-sm text-center pt-2 text-red-600' />
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
              name="institution_3"
              id="institution_3"
              className='bg-slate-100 rounded-xl'
            />
            <ErrorMessage name="institution_3" component="div" className='text-sm text-center pt-2 text-red-600'/>
          </Box>
          </div>
          </div>


          <div className="text-indigo-500 text-[25px] font-semibold text-center">Accomodation</div>
          <div className="flex items-center justify-center pt-2 ms-6">
          <Box mb="10px">
            <FormControlLabel
            className='bg-slate-100 rounded-xl text-black rounded-3xl pe-2'
              control={
                <Field
                  as={Checkbox}
                  color="info"
                  type="checkbox"
                  name="accomodation"

                />
              }
              label="Need Accommodation"
              
            />
            
          </Box>
          </div>
        <div className='flex flex-col items-center justify-center'>
          {/* Additional Message */}
          <div className="text-indigo-500 text-[25px] font-semibold text-center mb-2">Message</div>
          <Box mb="10px">
            
            <Field
              as={TextField}
              fullWidth 
              size="small"
              type="text"
              name="message"
              id="message"
              className='bg-slate-100 rounded-xl'
            />
            
          </Box>
          </div>
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
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
