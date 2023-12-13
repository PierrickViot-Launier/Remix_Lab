import React from "react";
import styles from "./NouveauContact.css";
import { Form, useNavigation, useActionData } from "@remix-run/react";

export default function NouveauContact() {
  const navigation = useNavigation();

  const data = useActionData();

  const isSubmitting = navigation.state === "submitting";

  return (
    <>
      <h2>Nouveau Contact</h2>

      <Form method="post" id="contact-form">
        {data?.message && <p className="message">{data.message}</p>}

        <p>
          <label htmlFor="nom">Nom</label>
          <input type="text" id="nom" name="nom" required />
        </p>

        <p>
          <label htmlFor="courriel">Courriel</label>
          <input type="text" id="courriel" name="courriel" required />
        </p>

        <div className="form-actions">
          <button disabled={isSubmitting}>
            {isSubmitting ? "Ajout en cours..." : "Ajouter un contact"}
          </button>
        </div>
      </Form>
    </>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
