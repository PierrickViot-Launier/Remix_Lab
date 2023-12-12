import React from "react";
import NouveauContact, {
  links as nouveauContactLinks,
} from "../components/NouveauContact";

import { getStoredContacts, storeContacts } from "../data/contacts";
import { redirect } from "@remix-run/node";

export const meta = () => {
  return [{ title: "Mes contacts" }];
};

export default function ContactsPage() {
  return (
    <main>
      <NouveauContact />
    </main>
  );
}

export async function action({ request }) {
  const formData = await request.formData();

  const contactData = Object.fromEntries(formData);

  const contactsExistants = await getStoredContacts();

  contactData.id = contactsExistants.length + 1;

  const contactsMisAJour = contactsExistants.concat(contactData);

  await storeContacts(contactsMisAJour);

  return redirect("/contacts");
}

export function links() {
  return [...nouveauContactLinks()];
}
