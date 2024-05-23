"use client";
import { CardTitle } from "../ui/card";
import { z } from "zod";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "../ui/textarea";
import Link from "next/link";
import { GmailIconSvg, MessengerSvgIcon, WhatsAppSvgIcon } from "../svg-icons";
import SectionTitle from "../utils/section-title";

const NAME_ERROR_MESSAGE = "Name must be at least 1 characters.";
const EMAIL_ERROR_MESSAGE = "Type your correct email address";
const MESSAGE_ERROR_MESSAGE = "Message must be at least 3 characters.";

const schema = z.object({
  name: z.string().min(1, { message: NAME_ERROR_MESSAGE }),
  email: z.string().email().min(2, { message: EMAIL_ERROR_MESSAGE }),
  message: z.string().min(3, { message: MESSAGE_ERROR_MESSAGE }),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const toastId = toast.loading("Email sending...");

    try {
      const payload = {
        name: data.name,
        email: data.email,

        message: data.message,
      };
      console.log(payload);

      toast.success("Email send Successfully", {
        id: toastId,
        duration: 1000,
      });
      reset();
    } catch (error) {
      toast.error("Something Want Wrong", {
        id: toastId,
        duration: 1000,
      });
    }
  };

  return (
    <div>
      <SectionTitle className="mb-2 mt-3" title="Contact Me" />
      <div className="grid md:grid-cols-2 gap-10 items-center mx-20 mb-32">
        <div>
          <div className="flex flex-col">
            <main className="grid flex-1 gap-4 overflow-auto p-4">
              <div className="relative hidden flex-col items-start gap-8 md:flex">
                <fieldset className=" border p-4 w-full">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid items-start gap-6"
                    id="custom-order-form"
                  >
                    <div className="grid gap-3">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="name"
                        {...register("name", { required: true })}
                        className="rounded-none"
                      />
                      {errors.name && (
                        <div className="text-red-500">
                          {errors.name.message}
                        </div>
                      )}
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="email"
                        {...register("email", { required: true })}
                        className="rounded-none"
                      />
                      {errors.email && (
                        <div className="text-red-500">
                          {errors.email.message}
                        </div>
                      )}
                    </div>

                    <div className="grid gap-3">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="message"
                        {...register("message")}
                        className="rounded-none"
                      />
                      {errors.message && (
                        <div className="text-red-500">
                          {errors.message.message}
                        </div>
                      )}
                    </div>

                    <Button
                      size="lg"
                      type="submit"
                      className="dark:text-white dark:bg-[#020817]  border-2 rounded-none"
                    >
                      Submit
                    </Button>
                  </form>
                </fieldset>
              </div>
            </main>
          </div>
        </div>
        <div>
          <div className="container mx-auto px-4 py-8 ">
            <div className="flex flex-col space-y-4">
              <div>
                <h2 className="font-bold">Email:</h2>
                <p className="text-gray-700 dark:text-slate-300">
                  akmsyfulbd12@gmail.com
                </p>
              </div>
              <div>
                <h2 className="font-bold">Address:</h2>
                <p className="text-gray-700 dark:text-slate-300">
                  Tilagor,
                  <br />
                  Sylhet - 3100,
                  <br />
                  Bangladesh
                </p>
              </div>
              <div>
                <h2 className="font-bold">Quick Contact</h2>
                <div className="flex justify-start items-center gap-5">
                  <div className="!max-w-16">
                    <Link href={"mailto:akmsyfulbd12@gmail.com"}>
                      <GmailIconSvg />
                    </Link>
                  </div>

                  <div className="!max-w-12">
                    <Link href={"https://wa.me/+8801751760872"}>
                      <WhatsAppSvgIcon />
                    </Link>
                  </div>
                  <div className="!max-w-6">
                    <Link href={"https://m.me/akmsyful"}>
                      <MessengerSvgIcon />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
