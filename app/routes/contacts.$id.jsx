import { Link, useLoaderData } from "@remix-run/react";
import React from "react";
import styles from "../styles/contact-details.css";
import { getStoredContacts } from "../data/contacts";

export default function ContactDetails() {
  const contact = useLoaderData();

  return (
    <main id="contact-details">
      <header>
        <nav>
          <Link to="/contacts">Retour à la liste de contacts</Link>
        </nav>

        <h1>{contact.nom}</h1>
      </header>

      <p id="contact-details-content">{contact.courriel}</p>
    </main>
  );
}

export async function loader({ params }) {
  const contacts = await getStoredContacts();

  const id = params.id;

  const contactChoisi = contacts.find((contact) => contact.id == id);

  return contactChoisi;
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export function meta({ data }) {
  return [{ title: data.nom }];
}
