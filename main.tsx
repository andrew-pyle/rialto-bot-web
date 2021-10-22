/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { h, renderSSR } from "https://deno.land/x/nano_jsx@v0.0.20/mod.ts";

addEventListener("fetch", (event) => {
  const html = renderSSR(<SignUpForm />);
  event.respondWith(
    new Response(html, {
      headers: {
        "Content-Type": "text/html",
      },
    })
  );
});

function SignUpForm() {
  return (
    <form>
      <label>
        <input type="email" />
      </label>
    </form>
  );
}
