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
      required_error:"Name is required"
    }),
    contact_poc1:z.string({
      required_error:"Contact number is required"
    }),
    email_poc1:z.string({
      required_error:"Email is required"
    }),
    name_poc2:z.string({
      required_error:"Name is required"
    }),
    contact_poc2:z.string({
      required_error:"Contact number required"
    }),
    email_poc2:z.string({
      required_error:"Email is required"
    }),
    
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
      contact:z.string({
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