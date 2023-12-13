import React from "react";
import styles from "./ListeContacts.css";

export default function ListeContacts({ contacts }) {
  return (
    <>
      <h1>Mes contacts</h1>

      {contacts.length === 0 ? (
        <h2 id="no-contact">Aucun contact pour le moment</h2>
      ) : (
        <ul id="contact-list">
          {contacts.map((contact, index) => (
            <li key={contact.id} className="contact">
              <article>
                <header>
                  <ul className="contact-meta">
                    <li>Contact #{index + 1}</li>
                  </ul>

                  <h2 className="nom">{contact.nom}</h2>
                </header>

                <p>{contact.courriel}</p>
              </article>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
