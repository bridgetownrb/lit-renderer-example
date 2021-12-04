---
# Feel free to add content and custom Front Matter to this file.

layout: home
template_engine: serbea
---

Lit SSR at work!

On initial load the statically generated timestamp is always the same. But upon hydration, the component will kick off an interval timer and update every two seconds.

{%= lit data: { hello: "everybody" } do %}
  <happy-days hello="${data.hello}">
    {{ "This is nice! " | titleize }}
  </happy-days>
{% end %}
