<script>
  import { Link } from 'svelte-routing';
</script>

<style>
  header {
    max-width: 900px;
    width: 90%;
    margin: 0 auto;

    padding: 20px 0;
    display: grid;

    grid-template-columns: 100px 1fr;
    border-bottom: 1px solid var(--fish-blue);
  }

  img {
    float: left;
    height: 100px;
    width: auto;
  }

  header h1 {
    color: var(--fish-blue);
    letter-spacing: -1px;
    margin: 0;
    font-size: 2.5em;
  }

  header p {
    margin: 0;
  }

  #header-contents {
    margin-left: 20px;
  }

  #subscriptions {
    padding: 0;
    margin: 6px 0 0 0;
    list-style: none;
    display: flex;
  }

  #subscriptions li {
    margin-right: 8px;
  }
  #subscriptions li:last-of-type {
    margin-right: 0;
  }
</style>

<header>
  <img src="/img/logo.png" alt="Fish and Scripts logo" />
  <div id="header-contents">
    <h1>
      <Link to="/">FishAndScripts</Link>
    </h1>
    <p>
      The all things web development podcast by two Brits with opinions and
      puns.
    </p>
    <ul id="subscriptions">
      <li>
        <a href="https://twitter.com/fishandscripts">Twitter</a>
      </li>
      <li>
        <a
          href="https://podcasts.apple.com/us/podcast/fish-and-scripts/id1478308659?uo=4">
          Apple Podcasts
        </a>
      </li>
      <li>
        <a href="https://pca.st/7mDxBz">Pocket Casts</a>
      </li>
      <li>
        <a href="https://overcast.fm/itunes1478308659/fish-and-scripts">
          Overcast
        </a>
      </li>
      <li>
        <a
          href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy9jZjQwYmQwL3BvZGNhc3QvcnNz">
          Google Podcasts
        </a>
      </li>
      <li>
        <a href="https://open.spotify.com/show/25Itv5R9zPyOpi6uby8Uwm">
          Spotify
        </a>
      </li>
      <li>
        <a href="https://www.breaker.audio/fish-and-scripts">Breaker</a>
      </li>
      <li>
        <a href="https://anchor.fm/s/cf40bd0/podcast/rss">RSS</a>
      </li>
    </ul>
  </div>
</header>
