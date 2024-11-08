"use client";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { createContact } from "@/actions/contacts";
import { useRouter } from "next/navigation";

export type ContactFormProps = {
  name: string;
  phone: string;
};
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormProps>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  async function saveData(data: ContactFormProps) {
    setLoading(true);
    console.log(data);
    await createContact(data);
    setLoading(false);
    reset();
    // route to the contact list
    router.push("/");
  }
  return (
    <div className="flex items-center justify-center p-16">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form
          onSubmit={handleSubmit(saveData)}
          className="space-y-6"
          action="#"
        >
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Create New Contact
          </h5>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Full Name
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500">Name is required</p>}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone number
            </label>
            <input
              type="text"
              id="phone"
              {...register("phone", { required: true })}
              placeholder="0784143872"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
            {errors.phone && <p className="text-red-500">Phone is required</p>}
          </div>

          <button
            disabled={loading}
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {loading ? "Creating please wait..." : " Create Contact"}
          </button>
        </form>
      </div>
    </div>
  );
}
