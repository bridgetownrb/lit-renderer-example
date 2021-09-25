---
# Feel free to add content and custom Front Matter to this file.

layout: home
template_engine: erb
---

Welcome to Bridgetown!

<%= lit data: {hello: "there"} do %>
  <happy-days hello="${data.hello}"></happy-days>
<% end %>
