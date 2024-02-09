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
import { debate_institution_adjudicator } from "../schema/form_schema";
import { useState } from 'react';
import { PulseLoader } from "react-spinners";

function form3() {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof debate_institution_adjudicator>>({
    defaultValues: {
      name: '',
        email: '',
        contact: '',
        institution: '',
        accomodation: false,
        message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof debate_institution_adjudicator>) {
    console.log(values);
    try {
      setLoading(true);
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
          
          <div className="text-indigo-500 text-[25px] font-semibold text-center uppercase">
          Adjudicator Name
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full pb-12 text-black">
            <FormField
              control={form.control}
              name="name"
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
              name="email"
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
              name="contact"
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
              name="institution"
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
          <div className="text-indigo-500 text-[25px] font-semibold text-center uppercase">
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
          <div className="text-indigo-500 text-[25px] font-semibold text-center uppercase">
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

export default form3;
