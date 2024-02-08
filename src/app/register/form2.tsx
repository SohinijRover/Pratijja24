"use client";


import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Box, Typography } from '@mui/material';
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { debate_institution_team } from "../schema/form_schema";
import { useState } from 'react';
import { PulseLoader } from "react-spinners";

function Form2() {
  const [loading, setLoading] = useState(false);
  const [selectedSlots, setSelectedSlots] = useState<number>(1);
  const [selectedAjudicatorSlots, setSelectedAjudicatorSlots] = useState<number>(1);


  const form = useForm<z.infer<typeof debate_institution_team>>({
    defaultValues: {
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
    },
  });

  async function onSubmit(values: z.infer<typeof debate_institution_team>) {
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
      } else {
        toast.success(data.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Unknown error occurred");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4 w-full px-4 md:px-8 py-8 max-w-screen-2xl mx-auto">
          <div className="flex-col sm:flex">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      type="email"

                      placeholder="Email"
                      required
                      {...field}
                      className="max-w-2xl mx-auto rounded-md bg-white text-black"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="institution"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      type="text"

                      placeholder="Institution"
                      required
                      {...field}
                      className="max-w-2xl mx-auto rounded-md bg-white text-black my-4"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="text-indigo-500 text-[25px] font-semibold text-center uppercase">
            Point Of Contact - 1
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full pb-12 text-black">
            <FormField
              control={form.control}
              name="name_poc1"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      type="name"

                      required
                      placeholder="Name"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contact_poc1"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      type="text"

                      placeholder="Contact"
                      required
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email_poc1"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      type="email"
                      required

                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="text-indigo-500 text-[25px] font-semibold text-center uppercase ">
            Point Of Contact - 2
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full pb-12 text-black">
            <FormField
              control={form.control}
              name="name_poc2"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      type="name"

                      required
                      placeholder="Name"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contact_poc2"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      type="text"

                      placeholder="Contact"
                      required
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email_poc2"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      type="email"
                      required

                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <div className="flex items-center justify-center bg-slate-300 rounded-lg text-black mt-4 ">
            <Box mb="10px" style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body1" fontWeight={600} padding="5px">
                Number of Slots:
              </Typography>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                {[1, 2, 3, 4, 5].map((slot) => (
                  <label key={slot} htmlFor={`slot${slot}`}>
                    <input
                      type="radio"
                      id={`slot${slot}`}
                      name="slots"
                      value={slot}
                      checked={selectedSlots === slot}
                      onChange={() => setSelectedSlots(slot)}
                    />
                    {slot}
                  </label>
                ))}
              </div>
            </Box>
          </div>

          {/* Number of Adjudicator Slots */}
          <div className="flex items-center justify-center bg-slate-300 rounded-lg text-black m-8 ps-3 pe-4">
            <Box mb="10px" style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body1" fontWeight={600} padding="5px">
                Number of Adjudicator Slots:
              </Typography>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '10px',
                }}
              >
                {[1, 2, 3, 4, 5].map((ajudicator_slots) => (
                  <label key={ajudicator_slots} htmlFor={`ajudicatorSlot${ajudicator_slots}`}>
                    <input
                      type="radio"
                      id={`ajudicatorSlot${ajudicator_slots}`}
                      name="ajudicator_slots"
                      value={ajudicator_slots}
                      checked={selectedAjudicatorSlots === ajudicator_slots}
                      onChange={() => setSelectedAjudicatorSlots(ajudicator_slots)}
                    />
                    {ajudicator_slots}
                  </label>
                ))}
              </div>
            </Box>
          </div>

          <div className="text-indigo-500 text-[25px] font-semibold text-center uppercase">
            Accomodation
          </div>
          <div className="flex justify-center items-center gap-4">
            <FormField
              name="accomodation"
              render={({ field }) => (
                <FormItem className="">
                  <FormControl>
                    <Input
                      type="checkbox"
                      required

                      {...field}
                      value={String(field.value)}
                      className="w-6 h-6"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <span className="text-xl">Need accomodation ?</span>
          </div>
          <div className="text-indigo-500 text-[25px] font-semibold text-center uppercase">
            Message
          </div>
          <FormField
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Anything else you would like us to know ?"

                    {...field}
                    className="max-w-2xl mx-auto text-black"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex justify-center">
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
        </div>
      </form>
    </Form>
  );
}

export default Form2;
