'use client';

import { useEffect } from 'react';

export default function JuicerInstagram() {
  useEffect(() => {
    const scriptUrl = 'https://www.juicer.io/embed/isovolleyball/embed-code.js';

    // Only append the Juicer script once on the client.
    if (!document.querySelector(`script[src="${scriptUrl}"]`)) {
      const script = document.createElement('script');
      script.src = scriptUrl;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.juicer.io/embed.css"
      />
      <ul
        className="juicer-feed"
        data-feed-id="isovolleyball"
        data-per="9"
        aria-label="Inside Out Volleyball Instagram feed"
      >
        <li>Loading Instagram feed...</li>
      </ul>
    </>
  );
}
