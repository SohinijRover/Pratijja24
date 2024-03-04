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
import { ia_sa } from "../schema/form_schema";
import { useState } from 'react';
import { PulseLoader } from "react-spinners";

function form3() {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof ia_sa>>({
    defaultValues: {
      name: '',
        email: '',
        phone: '',
        institution: '',
        speaking:'',
        judging:'',
    },
  });

  async function onSubmit(values: z.infer<typeof ia_sa>) {
    console.log(values);
    try {
      setLoading(true);
      const res = await fetch("/api/form4", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!data.success) {
        toast.error(data.message);``
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
          Pratijja v19 IA/SA
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
          <div className="text-white text-[25px] font-semibold text-center uppercase">
            Speaking Credentials
          </div>
          <FormField
            control={form.control}
            name="speaking"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Any credentials beyond 10 will be ignored. Please use the following format: Name of Tournament - Year - Format (ABD/BPD) - No. of Teams - Furthest Outround Reached (e.g. Champion, Open Quarterfinalist) - Speaker Achievement (e.g. 9th Best Speaker, Best Novice Speaker)"
                    required
                    {...field}
                    className="max-w-2xl mx-auto text-black"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="text-white text-[25px] font-semibold text-center uppercase">
          Judging Credentials
          </div>
          <FormField
            control={form.control}
            name="judging"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Any credentials beyond 10 will be ignored. Please use the following format: Name of Tournament - Year - Format (ABD/BPD) - No. of Teams - Furthest Outround Judged (e.g. OGF Chair, Novice Finals Panel) - Judge Prize (e.g. 2nd Best Adjudicator) "
                    required
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

export default form3;
