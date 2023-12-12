import { Link } from "@remix-run/react";

export const meta = () => {
  return [{ title: "New Remix App" }];
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
