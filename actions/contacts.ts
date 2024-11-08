"use server";

import { ContactFormProps } from "@/components/ContactForm";
import { db } from "@/prisma/db";

export async function getContacts() {
  try {
    const contacts = await db.contact.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return contacts;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function createContact(data: ContactFormProps) {
  try {
    const newContact = await db.contact.create({
      data,
    });
    console.log(newContact);
    return newContact;
  } catch (error) {
    console.log(error);
  }
}
