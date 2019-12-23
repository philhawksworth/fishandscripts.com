<script>
  import { Router, Link, Route } from 'svelte-routing';
  import { globalHistory } from 'svelte-routing/src/history';
  import Episode from './Episode.svelte';
  import About from './About.svelte';
  import Header from './Header.svelte';
  import sortEpisodes from './sort-episodes.js';

  export let episodes;

  const sortedEpisodes = sortEpisodes(episodes);

  let prevUrl = null;
  globalHistory.listen(event => {
    const newUrl = event.location.pathname;

    if (prevUrl !== null && prevUrl !== newUrl) {
      prevUrl = newUrl;
      window && window.scrollTo(0, 0);
    } else if (prevUrl === null) {
      prevUrl = newUrl;
    }
  });

  let activeEpisode = null;

  $: {
    activeEpisode = sortedEpisodes.find(e => {
      const urlForComparing = (prevUrl || window.location.pathname).replace(
        '/',
        ''
      );
      return e.url === urlForComparing;
    });
  }
</script>

<style>
  :global(:root) {
    --fish-blue: #1b3e7c;
  }

  main {
    margin: 0 auto 40px auto;
    padding-bottom: 60px;
  }
</style>

<svelte:head>
  {#if activeEpisode}
    <title>{activeEpisode.metadata.title}</title>
  {:else}
    <title>Fish and Scripts</title>
  {/if}
</svelte:head>
<Router>
  <Header />
  <main>
    {#each sortedEpisodes as episode}
      <Route path={episode.url}>
        <Episode {episode} summaryOnly={false} />
      </Route>
    {/each}

    <Route path="/">
      {#each sortedEpisodes as episode, i}
        <Episode {episode} summaryOnly={i > 0} latestSubTitle={i === 0} />

        {#if i === 0}
          <About />
        {/if}
      {/each}
    </Route>
  </main>
</Router>
