import { getContacts } from "@/actions/contacts";
import { Button } from "@/components/ui/button";
import { Eye, Pencil, Plus, Trash } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function page() {
  const contacts = await getContacts();
  return (
    <div className="p-16">
      <div className="grid grid-cols-12 min-h-screen">
        <div className="col-span-2 border-r-2 p-8">
          <Button asChild>
            <Link href="/new">
              {" "}
              <Plus />
              Create Contact
            </Link>
          </Button>
        </div>
        <div className="col-span-10 p-8">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Contact List ({contacts.length})
          </h2>
          <div className="py-4">
            {contacts.map((contact, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-between bg-blue-50 mb-3 py-2 rounded-lg px-4"
                >
                  <span>{contact.name}</span>
                  <span>{contact.phone}</span>
                  <div className="flex gap-3">
                    <button>
                      <Eye className="w-4 h-4" />
                    </button>
                    <button>
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button>
                      <Trash className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
