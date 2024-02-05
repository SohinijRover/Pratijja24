import { Formik, Form, Field } from 'formik';
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import { toast } from 'sonner';
import { ia_sa } from '../schema/form_schema';

const Form4 = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
        email: '',
        institution: '',
        speaking: '',
      }}
      onSubmit={async (values) => {
        console.log(values);
        try {
          const res = await fetch("/api/form4", {
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
          <div className="flex flex-col items-center justify-center p-5">
            {/* Name */}
            <Box mb="10px">
              <Typography variant="body1" fontWeight={600}>
                Name:
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

            {/* Phone */}
            <Box mb="10px">
              <Typography variant="body1" fontWeight={600}>
                Phone:
              </Typography>
              <Field
                as={TextField}
                fullWidth
                size="small"
                type="text"
                name="phone"
                id="phone"
                className='bg-white rounded'
              />
            </Box>

            {/* Email */}
            <Box mb="10px">
              <Typography variant="body1" fontWeight={600}>
                Email:
              </Typography>
              <Field
                as={TextField}
                size="small"
                type="email"
                name="email"
                id="email"
                className='bg-white rounded'
              />
            </Box>

            {/* Institution */}
            <Box mb="10px">
              <Typography variant="body1" fontWeight={600}>
                Institution:
              </Typography>
              <Field
                as={TextField}
                size="small"
                type="text"
                name="institution"
                id="institution"
                className='bg-white rounded'
              />
            </Box>

            {/* Speaking */}
            <Box mb="10px">
              <Typography variant="body1" fontWeight={600}>
                Speaking:
              </Typography>
              <div>Any credentials beyond 10 will be ignored.<br /> Please use the following format:<br /> Name of Tournament - Year - Format (ABD/BPD) -<br /> No. of Teams - Furthest Outround Reached (e.g. Champion, Open Quarterfinalist) -<br /> Speaker Achievement (e.g. 9th Best Speaker, Best Novice Speaker)</div>
              <Field
                as={TextField}
                size="small"
                type="text"
                name="speaking"
                id="speaking"
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

export default Form4;
