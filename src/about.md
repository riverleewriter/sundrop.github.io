---
layout: base.njk
altUrl: /fr/a-propos/
title: About
description: "SUNDROP is a community platform for Montreal musicians. See past shows at Turbo Haüs and La Feuille Verte, and what's next."
---

<article class="prose about">

<h1>About</h1>

<p class="lede">SUNDROP is a community platform for Montreal musicians. We book small mixed bills in venues and cafés around the city.</p>

<p class="lede">Whether you're just starting out, dusting off your guitar after many years, or playing in a new band for the first time, we're here to cheer you on as you launch into live music performance.</p>

<p class="lede">We also book ticketed shows for experienced musicians, offering our platform to artists at various stages in their career.</p>

<section>
  <h2>Upcoming shows</h2>
  {% if events.upcoming.length %}
  <ul class="gallery">
    {%- for e in events.upcoming %}{% include "poster.njk" %}{% endfor %}
  </ul>
  {% else %}
  <p>Nothing announced yet. New shows go up first on <a href="{{ events.tickets }}" rel="noopener">Bloom</a> and <a href="{{ site.instagram }}" rel="noopener">Instagram</a>.</p>
  {% endif %}
</section>

<section>
  <h2>Past shows</h2>
  <ul class="gallery">
    {%- for e in events.past %}{% include "poster.njk" %}{% endfor %}
  </ul>
  <p>See our <a href="{{ site.instagram }}" rel="noopener">Instagram</a> page for photos and reels.</p>
</section>

</article>
