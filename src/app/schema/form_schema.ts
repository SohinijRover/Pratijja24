import z from "zod";
import validator from 'validator';

export const debate_cross_teams = z
.object({
  team_name:z.string({
    required_error:"Name is Required"
  }),
  speaker_1:z.string({
    required_error:"Speaker name is requried"
  }),
  email_1:z.string({
    required_error:"Email is Required"
  }),
  contact_1:z.string({
    required_error:"Phone number is Required"
  }),
  institution_1:z.string({
    required_error:"Institution is Required"
  }),
  speaker_2:z.string({
    required_error:"Speaker name is requried"
  }),
  email_2:z.string({
    required_error:"Email is Required"
  }),
  contact_2:z.string({
    required_error:"Phone number is Required"
  }),
  institution_2:z.string({
    required_error:"Institution is Required"
  }),
  speaker_3:z.string({
    required_error:"Speaker name is requried"
  }),
  email_3:z.string({
    required_error:"Email is Required"
  }),
  contact_3:z.string({
    required_error:"Phone number is Required"
  }),
  institution_3:z.string({
    required_error:"Institution is Required"
  })

})

export const debate_institution_team = z
  .object({
    email:z.string({
      required_error:"Email is required"
    }),
    institution:z.string({
      required_error:"Institution is required"
    }),
    name_poc1:z.string({
      required_error:"Name of Point of Contact is required"
    }),
    contact_poc1:z.string({
      required_error:"Contact number of Point of Contact is required"
    }),
    email_poc1:z.string({
      required_error:"Email of Point of Contact is required"
    }),
    name_poc2:z.string({
      required_error:"Name of Point of Contact is required"
    }),
    contact_poc2:z.string({
      required_error:"Contact number of Point of Contact is required"
    }),
    email_poc2:z.string({
      required_error:"Email of Point of Contact is required"
    }),
    slots: z.number().refine(value => [1, 2, 3, 4, 5].includes(value), {
      message: "Number of slots must be 1, 2, 3, 4, or 5.",
    }),
    ajudicator_slots: z.number().refine(value => [1,2,3,4,5,6].includes(value),{
      message:"Number of Ajudicator Slots must ve 1,2,3,4,5,6. We follow the N=N+1 policy where N is the number of teams."
    }),
    accomodation:z.boolean().default(false),
    message:z.string(),
  })

  export const debate_institution_adjudicator = z
    .object({
      name:z.string({
        required_error:"Name of the Adjudicator is Required"
      })
      .min(1),
      email:z.string({
        required_error:"Email of the Adjudicator is Required"
      })
      .email("Please Enter a Valid Email")
      ,
      contact:z.number({
        required_error:"Contact number of Adjudicator is Required"
      }),
      institution:z.string({
        required_error:"Institution of the Adjudicator is Require"
      }),
      accomodation:z.boolean().default(false).refine(value=>"boolean",{
        message:"Do you need help in finding Accomodation"
      }),
      message:z.string(),
    })


    export const ia_sa = z
    .object({
      name: z.string({
        required_error: "Name is Required"
      })
        .min(1),
      phone: z.string({
        required_error: "Phone number is Required"
      })
        .refine(value => typeof value === 'string' && validator.isMobilePhone(value), {
          message: "Please Enter a Valid Phone number"
        }),
      email: z.string({
        required_error: "Email is Required",
      })
        .email("Please Enter a valid Email")
        .min(1, "Email is Required"),
      institution: z.string({
        required_error: "Institution is Required"
      }),
      speaking: z.string({
        required_error: ""
      }).max(10)
    });