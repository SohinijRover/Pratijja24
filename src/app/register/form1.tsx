"use client"
import { useState } from "react";
import { debate_cross_teams, debate_institution_adjudicator,debate_institution_team,ia_sa } from "../schema/form_schema";
import { toast } from "sonner";
import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { Button, Card, CardBody } from "@nextui-org/react";
import { TypeOf } from "zod";
import Link from "next/link";
import InputBox from "@/components/InputBox";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import z from "zod"

type debate_cross_teamsType = TypeOf<typeof debate_cross_teams>
const Form1 = () => {
    const formik = useFormik<debate_cross_teamsType>({
      initialValues: {
        team_name: "",
        speaker_1: "",
        email_1: "",
        contact_1: "",
        institution_1: "",
        speaker_2: "",
        email_2: "",
        contact_2: "",
        institution_2: "",
        speaker_3: "",
        email_3: "",
        contact_3: "",
        institution_3: "",
        accomodation: false,
        message: ""
      },
      validationSchema: toFormikValidationSchema(debate_cross_teams),
      onSubmit: (values) => {
        console.log("Form submitted with values:", values);
      },
    });
    return (
        
        <Card isBlurred className="m-4 mb-20 mt-24 px-4" shadow="lg">
          <CardBody>
            <h1 className="p-4 text-center text-2xl font-bold">Register</h1>
            <form
              onSubmit={formik.handleSubmit}
              className="continer border border-red-500"
            >
              <div className="container flex justify-center items-center">
                <InputBox
                  id="team_name"
                  type="text"
                  label="Team_name"
                  placeholder="Enter your Team Name"
                  error={formik.touched.team_name && formik.errors.team_name}
                  icon={<AiOutlineUser size={21} className="text-gray-300" />}
                  value={formik.values.team_name}
                  onChange={formik.handleChange}
                />
                
              </div>
              <Button
                color="primary"
                variant="shadow"
                className=" w-full border-red-500"
                size="lg"
                type="submit"
                isLoading={formik.isSubmitting}
              >
                Register
              </Button>
            </form>
          </CardBody>
        </Card>
    );
};

export default Form1;
  