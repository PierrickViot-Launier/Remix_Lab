import React from "react";
import styles from "./NouveauContact.css";

export default function NouveauContact() {
  return (
    <>
      <h1>Nouveau Contact</h1>
      <form method="post" id="contact-form">
        <p>
          <label htmlFor="nom">Nom</label>
          <input type="text" id="nom" name="nom" required />
        </p>

        <p>
          <label htmlFor="courriel">Courriel</label>
          <input type="text" id="courriel" name="courriel" required />
        </p>

        <div className="form-actions">
          <button>Ajouter un contact</button>
        </div>
      </form>
    </>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
