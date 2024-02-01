// Import necessary components from Formik and MUI
import { Formik, Form, Field } from 'formik';
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import { toast } from 'sonner';


const MyForm = () => {
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
      onSubmit={async (values) => {
        console.log(values);
        try {
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
          } else {
            toast.success(data.message);
          }
        } catch (err) {
          toast.error("Unknown error Occurred");
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="flex flex-col items-center justify-center p-5-"><Box mb="10px">
            <Typography variant="body1" fontWeight={600}>
              Team Name:
            </Typography>
            <Field
              as={TextField}
              fullWidth
              size="small"
              type="text"
              name="team_name"
              id="team_name"
              className='bg-white rounded'
            />
          </Box>
          <div className='flex items-center justify-center'>
          {/* Speaker 1 */}
          <Box mb="10px">
            <Typography variant="body1" fontWeight={600}>
              Name of the Speaker 1:
            </Typography>
            <Field
              as={TextField}
              fullWidth
              size="small"
              type="text"
              name="speaker_1"
              id="speaker_1"
              className='bg-white rounded'
            />
          </Box>
          <Box mb="10px">
            <Typography variant="body1" fontWeight={600}>
              Email of The Speaker 1:
            </Typography>
            <Field
              as={TextField}
              fullWidth
              size="small"
              type="email"
              name="email_1"
              id="email_1"
              className='bg-white rounded'
            />
          </Box>

          <Box mb="10px">
            <Typography variant="body1" fontWeight={600}>
              Contact of The Speaker 1:
            </Typography>
            <Field
              as={TextField}
              fullWidth
              size="small"
              type="text"
              name="contact_1"
              id="contact_1"
              className='bg-white rounded'
            />
          </Box>
          <Box mb="10px">
            <Typography variant="body1" fontWeight={600}>
              Institution of The Speaker 1:
            </Typography>
            <Field
              as={TextField}
              fullWidth
              size="small"
              type="text"
              name="institution_1"
              id="institution_1"
              className='bg-white rounded'
            />
          </Box>
          </div>
          <div className='flex items-center justify-center'>
          <Box mb="10px">
            <Typography variant="body1" fontWeight={600}>
              Name of the Speaker 2:
            </Typography>
            <Field
              as={TextField}
              fullWidth
              size="small"
              type="text"
              name="speaker_2"
              id="speaker_2"
              className='bg-white rounded'
            />

          </Box>
          <Box mb="10px">
            <Typography variant="body1" fontWeight={600}>
              Email of The Speaker 2:
            </Typography>
            <Field
              as={TextField}
              fullWidth
              size="small"
              type="email"
              name="email_2"
              id="email_2"
              className='bg-white rounded'
            />

          </Box>

          <Box mb="10px">
            <Typography variant="body1" fontWeight={600}>
              Contact of The Speaker 2:
            </Typography>
            <Field
              as={TextField}
              fullWidth
              size="small"
              type="text"
              name="contact_2"
              id="contact_2"
              className='bg-white rounded'
            />

          </Box>
          <Box mb="10px">
            <Typography variant="body1" fontWeight={600}>
              Institution of The Speaker 2:
            </Typography>
            <Field
              as={TextField}
              fullWidth
              size="small"
              type="text"
              name="institution_2"
              id="institution_2"
              className='bg-white rounded'
            />

          </Box>
          </div>
          <div className='flex items-start justify-center'>
          <Box mb="10px">
            <Typography variant="body1" fontWeight={600}>
              Name of the Speaker 3:
            </Typography>
            <Field
              as={TextField}
              fullWidth
              size="small"
              type="text"
              name="speaker_3"
              id="speaker_3"
              className='bg-white rounded'
            />
            {/* Add validation messages here if needed */}
          </Box>
          <Box mb="10px">
            <Typography variant="body1" fontWeight={600}>
              Email of The Speaker 3:
            </Typography>
            <Field
              as={TextField}
              fullWidth
              size="small"
              type="email"
              name="email_3"
              id="email_3"
              className='bg-white rounded'
            />
            {/* Add validation messages here if needed */}
          </Box>

          <Box mb="10px">
            <Typography variant="body1" fontWeight={600}>
              Contact of The Speaker 3:
            </Typography>
            <Field
              as={TextField}
              fullWidth
              size="small"
              type="text"
              name="contact_3"
              id="contact_3"
              className='bg-white rounded'
            />
            {/* Add validation messages here if needed */}
          </Box>
          <Box mb="10px">
            <Typography variant="body1" fontWeight={600}>
              Institution of The Speaker 3:
            </Typography>
            <Field
              as={TextField}
              fullWidth
              size="small"
              type="text"
              name="institution_3"
              id="institution_3"
              className='bg-white rounded'
            />
            {/* Add validation messages here if needed */}
          </Box>
          </div>
          </div>

          {/* Repeat the above structure for other form fields */}

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
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
