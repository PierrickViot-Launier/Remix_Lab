import React from "react";
import NouveauContact, {
  links as nouveauContactLinks,
} from "../components/NouveauContact";

import { getStoredContacts, storeContacts } from "../data/contacts";
import { redirect } from "@remix-run/node";
import ListeContacts, {
  links as listeContactsLinks,
} from "../components/ListeContacts";
import { useLoaderData } from "@remix-run/react";

export const meta = () => {
  return [{ title: "Mes contacts" }];
};

export default function ContactsPage() {
  const contacts = useLoaderData();

  return (
    <main>
      <ListeContacts contacts={contacts} />

      <NouveauContact />
    </main>
  );
}

export async function loader() {
  const contacts = await getStoredContacts();

  return contacts;
}

export async function action({ request }) {
  const formData = await request.formData();

  const contactData = Object.fromEntries(formData);

  if (contactData.courriel.trim().length < 5) {
    return { message: "Veuillez entrez un courriel valide" };
  }

  const contactsExistants = await getStoredContacts();

  contactData.id = contactsExistants.length + 1;

  const contactsMisAJour = contactsExistants.concat(contactData);

  await storeContacts(contactsMisAJour);

  return redirect("/contacts");
}

export function links() {
  return [...nouveauContactLinks(), ...listeContactsLinks()];
}
