import { Formik, Form, Field } from 'formik';
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography, RadioGroup, Radio } from '@mui/material';
import { toast } from 'sonner';
import { debate_institution_adjudicator } from '../schema/form_schema';

const Form3 = () => {
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
      
      onSubmit={async (values) => {
        console.log(values);
        try {
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
          } else {
            toast.success(data.message);
          }
        } catch (err) {
          toast.error("Unknown error occurred");
        }
      }}
    >
      {({ values, handleChange }) => (
        <Form>
          <div className="flex flex-col items-center justify-center p-5-">
            {/* Adjudicator Name */}
            <Box mb="10px">
              <Typography variant="body1" fontWeight={600}>
                Name of the Adjudicator:
              </Typography>
              <Field
                as={TextField}
                fullWidth
                size="small"
                type="text"
                name="name"
                id="name"
                className='bg-white rounded'
              />
            </Box>

            {/* Adjudicator Email */}
            <Box mb="10px">
              <Typography variant="body1" fontWeight={600}>
                Email of the Adjudicator:
              </Typography>
              <Field
                as={TextField}
                fullWidth
                size="small"
                type="email"
                name="email"
                id="email"
                className='bg-white rounded'
              />
            </Box>

            {/* Adjudicator Contact */}
            <Box mb="10px">
              <Typography variant="body1" fontWeight={600}>
                Contact of the Adjudicator:
              </Typography>
              <Field
                as={TextField}
                fullWidth
                size="small"
                type="text"
                name="contact"
                id="contact"
                className='bg-white rounded'
              />
            </Box>

            {/* Adjudicator Institution */}
            <Box mb="10px">
              <Typography variant="body1" fontWeight={600}>
                Institution of the Adjudicator:
              </Typography>
              <Field
                as={TextField}
                fullWidth
                size="small"
                type="text"
                name="institution"
                id="institution"
                className='bg-white rounded'
              />
            </Box>

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
            <Button sx={{ mb: '10px', py: '15px' }} variant="contained" type="submit" color="info" fullWidth>
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Form3;
