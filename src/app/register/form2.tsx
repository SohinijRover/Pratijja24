import { Formik, Form, Field } from 'formik';
import { Box, Button, Checkbox, FormControlLabel,RadioGroup, TextField, Typography, Radio  } from '@mui/material';
import { toast } from 'sonner';
import { debate_institution_team } from '../schema/form_schema';
const Form2 = () => {
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
        email_poc: '',
        slots: 1,
        ajudicator_slots: 1,
        accomodation: false,
        message: '',
      }}
      onSubmit={async (values) => {
        console.log(values);
        try {
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
          } else {
            toast.success(data.message);
          }
        } catch (err) {
          toast.error("Unknown error occurred");
        }
      }}
    >
      {({ isSubmitting,values, handleChange }) => (
        <Form>
        <div className="flex flex-col items-center justify-center p-5-">
          <div className='flex items-center justify-center'>
          <Box mb="10px">
            <Typography variant="body1" fontWeight={600}>
              Email
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
          <Box mb="10px">
            <Typography variant="body1" fontWeight={600}>
              Institution
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
          </div>
          
          <div className='flex items-center justify-center'>
            {/* Speaker 1 */}
            <Box mb="10px">
              <Typography variant="body1" fontWeight={600}>
                Name of the POC 1:
              </Typography>
              <Field
                as={TextField}
                fullWidth
                size="small"
                type="text"
                name="name_poc1"
                id="name_poc1"
                className='bg-white rounded'
              />
            </Box>
            <Box mb="10px">
              <Typography variant="body1" fontWeight={600}>
                Contact of POC 1:
              </Typography>
              <Field
                as={TextField}
                fullWidth
                size="small"
                type="text"
                name="contact_poc1"
                id="contact_poc1"
                className='bg-white rounded'
              />
            </Box>
            <Box mb="10px">
              <Typography variant="body1" fontWeight={600}>
                Email of POC 1:
              </Typography>
              <Field
                as={TextField}
                fullWidth
                size="small"
                type="email"
                name="email_poc1"
                id="email_poc1"
                className='bg-white rounded'
              />
            </Box>
            {/* Add other fields for Speaker 1 */}
          </div>
          <div className='flex items-center justify-center'>
            {/* Speaker 1 */}
            <Box mb="10px">
              <Typography variant="body1" fontWeight={600}>
                Name of the POC 2:
              </Typography>
              <Field
                as={TextField}
                fullWidth
                size="small"
                type="text"
                name="name_poc2"
                id="name_poc2"
                className='bg-white rounded'
              />
            </Box>
            <Box mb="10px">
              <Typography variant="body1" fontWeight={600}>
                Contact of POC 2:
              </Typography>
              <Field
                as={TextField}
                fullWidth
                size="small"
                type="text"
                name="contact_poc2"
                id="contact_poc2"
                className='bg-white rounded'
              />
            </Box>
            <Box mb="10px">
              <Typography variant="body1" fontWeight={600}>
                Email of POC 2:
              </Typography>
              <Field
                as={TextField}
                fullWidth
                size="small"
                type="email"
                name="email_poc2"
                id="email_poc2"
                className='bg-white rounded'
              />
            </Box>
            {/* Add other fields for Speaker 1 */}
          </div>
          {/* Add similar structures for Speaker 2 and Speaker 3 */}
          <div className="flex items-center justify-center">
          <Box mb="10px">
            <Typography variant="body1" fontWeight={600}>
              Number of Slots:
            </Typography>
            <RadioGroup
              className=""
              aria-label="slots"
              name="slots"
              id="slots"
              value={values.slots}
              onChange={handleChange}
            >
              {[1, 2, 3, 4, 5].map((slot) => (
                <FormControlLabel
                  key={slot}
                  value={slot}
                  control={<Radio />}
                  label={slot}
                />
              ))}
            </RadioGroup>
          </Box>
          </div>
          <div className="flex items-center justify-center">
          <Box mb="10px">
            <Typography variant="body1" fontWeight={600}>
              Number of Ajudicator Slots:
            </Typography>
            <RadioGroup
              className=""
              aria-label="ajudicator_slots"
              name="ajudicator_slots"
              id="ajudicator_slots"
              value={values.ajudicator_slots}
              onChange={handleChange}
            >
              {[1, 2, 3, 4, 5].map((ajudicator_slots) => (
                <FormControlLabel
                  key={ajudicator_slots}
                  value={ajudicator_slots}
                  control={<Radio />}
                  label={ajudicator_slots}
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
          <Button sx={{ mb: '10px', py: '15px' }} variant="contained" type="submit" color="info" fullWidth>
            Submit
          </Button>
        </div>
      </Form>
      )}
    </Formik>
  );
};

export default Form2;