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

function form1() {
  const [isPending, startTransition] = useTransition();

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

  function onSubmit(values: z.infer<typeof debate_cross_teams>) {
    startTransition(async () => {
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
      form.reset();
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4 w-full px-4 md:px-8 py-8 max-w-screen-2xl mx-auto">
          <div className="text-indigo-500 text-[25px] font-semibold text-center uppercase">
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
                    disabled={isPending}
                    placeholder="Team Name"
                    required
                    {...field}
                    className="max-w-2xl mx-auto"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="text-indigo-500 text-[25px] font-semibold text-center uppercase">
            Speaker - 1
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full pb-12">
            <FormField
              control={form.control}
              name="speaker_1"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      type="name"
                      disabled={isPending}
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
                      disabled={isPending}
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
                      disabled={isPending}
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
                      disabled={isPending}
                      placeholder="Institution"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="text-indigo-500 text-[25px] font-semibold text-center uppercase">
            Speaker - 2
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full pb-12">
            <FormField
              control={form.control}
              name="speaker_2"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      required
                      type="name"
                      disabled={isPending}
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
                      disabled={isPending}
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
                      disabled={isPending}
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
                      disabled={isPending}
                      placeholder="Institution"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="text-indigo-500 text-[25px] font-semibold text-center uppercase">
            Speaker - 3
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full pb-12">
            <FormField
              control={form.control}
              name="speaker_3"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      required
                      type="name"
                      disabled={isPending}
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
                      disabled={isPending}
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
                      disabled={isPending}
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
                      disabled={isPending}
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
                      required
                      disabled={isPending}
                      {...field}
                      value={String(field.value)}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <span>Need accomodation ?</span>
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
                    disabled={isPending}
                    {...field}
                    className="max-w-2xl mx-auto"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex justify-center">
            <Button
              disabled={isPending}
              type="submit"
              className="w-full max-w-2xl mx-auto bg-blue-700 hover:bg-blue-600 transition-colors duration-300"
            >
              Submit
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}

export default form1;
