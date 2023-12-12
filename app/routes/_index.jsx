import { Link } from "@remix-run/react";
import styles from "../styles/home.css";

export const meta = () => {
  return [{ title: "Accueil" }];
};

export default function Index() {
  return (
    <main id="content">
      <h1>Gestion de contacts</h1>

      <p>Cette application vous permet de gérer votre liste de contacts.</p>

      <p id="cta">
        <Link to="/contacts">Voir mes contacts</Link>
      </p>
    </main>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
