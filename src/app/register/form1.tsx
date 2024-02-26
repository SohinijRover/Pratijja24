"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { debate_cross_teams } from "../schema/form_schema";
import { useState } from 'react';
import { PulseLoader } from "react-spinners";

function form1() {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof debate_cross_teams>>({
    defaultValues: {
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
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof debate_cross_teams>) {
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
          <div className="text-white text-[25px] font-semibold text-center uppercase">
            Team Name
          </div>
          <FormField
            control={form.control}
            name="team_name"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    type="text"
                    
                    placeholder="Team Name"
                    required
                    {...field}
                    className="max-w-2xl mx-auto rounded-md bg-white text-black"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="text-white text-[25px] font-semibold text-center uppercase">
            Speaker - 1
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full pb-12 text-black">
            <FormField
              control={form.control}
              name="speaker_1"
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
              name="email_1"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      type="email"
                      
                      placeholder="Email"
                      required
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contact_1"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      type="text"
                      required
                      
                      placeholder="Contact"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="institution_1"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      required
                      type="text"
                      
                      placeholder="Institution"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="text-white text-[25px] font-semibold text-center uppercase ">
            Speaker - 2
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full pb-12 text-black">
            <FormField
              control={form.control}
              name="speaker_2"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      required
                      type="name"
                      
                      placeholder="Name"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email_2"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      required
                      type="email"
                      
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contact_2"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      type="text"
                      required
                      
                      placeholder="Contact"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="institution_2"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      type="text"
                      required
                      
                      placeholder="Institution"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="text-white text-[25px] font-semibold text-center uppercase">
            Speaker - 3
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full pb-12 text-black">
            <FormField
              control={form.control}
              name="speaker_3"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      required
                      type="name"
                      
                      placeholder="Name"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email_3"
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
            <FormField
              control={form.control}
              name="contact_3"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      type="text"
                      required
                      
                      placeholder="Contact"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="institution_3"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      type="text"
                      required
                      
                      placeholder="Institution"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="text-white text-[25px] font-semibold text-center uppercase">
            Accomodation
          </div>
          <div className="flex justify-center items-center gap-4">
            <FormField
              control={form.control}
              name="accomodation"
              render={({ field }) => (
                <FormItem className="">
                  <FormControl>
                    <Input
                      type="checkbox"
                      
                      
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
          <div className="text-white text-[25px] font-semibold text-center uppercase">
            Message
          </div>
          <FormField
            control={form.control}
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
                } mx-auto mt-2 flex items-center gap-4 py-1 md:py-2 leading-none px-4 md:px-6 rounded-full bg-gradient-to-b from-[#507B77] to-[#507B77] text-sm md:text-lg font-medium text-white pt-5 mb-10`}
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

export default form1;
