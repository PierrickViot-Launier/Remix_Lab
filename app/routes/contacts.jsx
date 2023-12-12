import React from "react";
import NouveauContact, {
  links as nouveauContactLinks,
} from "../components/NouveauContact";

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

export function links() {
  return [...nouveauContactLinks()];
}
