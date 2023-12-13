import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";

import styles from "./styles/main.css";
import MainNavigation from "./components/MainNavigation";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <Meta />

        <Links />
      </head>

      <body>
        <header>
          <MainNavigation />
        </header>

        <Outlet />

        <ScrollRestoration />

        <Scripts />

        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <Meta />

        <Links />

        <title>Une erreur est survenu</title>
      </head>

      <body>
        <header>
          <MainNavigation />
        </header>

        <main className="error">
          <h1>Une erreur est survenu</h1>

          <p>{error.message}</p>

          <p>
            Retour à la <Link to={"/"}>page d'accueil</Link>
          </p>
        </main>

        <ScrollRestoration />

        <Scripts />

        <LiveReload />
      </body>
    </html>
  );
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}
