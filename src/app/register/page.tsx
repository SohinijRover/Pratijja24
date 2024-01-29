import { useState } from "react";
import { debate_cross_teams, debate_institution_adjudicator,debate_institution_team,ia_sa } from "../schema/form_schema";
import { toast } from "sonner";
import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { Button, Card, CardBody } from "@nextui-org/react";
import { TypeOf } from "zod";

type debate_cross_teamsType = TypeOf<typeof debate_cross_teams>
type debate_institution_teamType = TypeOf<typeof debate_institution_team>
type debate_institution_adjudicatorType = TypeOf<typeof debate_institution_adjudicator>
type ia_saType = TypeOf<typeof ia_sa>

const RegisterForm = () => {
  const formik = useFormik<debate_cross_teamsType>({
    initialValues:{
      
    }
  })