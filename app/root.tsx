import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "remix";
import type { MetaFunction } from "remix";

import config from "./config.js";

export const meta: MetaFunction = () => {
  return { title: config.app.name };
};

export function links() {
  return [
    { rel: 'stylesheet', href: '/css/reset.css' },
    { rel: 'manifest', href: '/manifest.json' }
  ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}
