<script>
  export let episode;
  export let summaryOnly;

  const { html, metadata, filename } = episode;
  const url = filename.replace(".md", "");
</script>

<style>
  .post-contents {
    font-size: 1em;
  }

  /* last of type ul is the show notes
   * has to be global so Svelte includes it in the bundle
   */
  :global(.post-contents ul) {
    margin: 0;
  }

  :global(.post-contents h2) {
    font-weight: 500;
    margin: 10px 0 5px 0;
  }

  h1 {
    font-size: 2em;
  }

  h1 span {
    display: block;
    text-transform: uppercase;
    color: #bbb;
    letter-spacing: -1.2px;
    font-weight: normal;
    font-size: 0.6em;
  }

  .anchor-iframe {
    width: 80%;
    height: 120px;
    padding: 10px 0;
  }

  @media (max-width: 800px) {
    .anchor-iframe {
      width: 100%;
    }
  }
</style>

<section>

  <h1>
    {#if summaryOnly === false}
      <span>Latest episode</span>
    {/if}
    <a href={url}>{metadata.title}</a>
  </h1>

  {#if summaryOnly}
    <p class="summary">{metadata.subtitle}</p>
  {:else}
    <iframe
      src={metadata.audioURL}
      title="{metadata.title} audio"
      class="anchor-iframe"
      frameborder="0"
      scrolling="no" />

    <div class="post-contents">
      {@html html}
    </div>
  {/if}
</section>
