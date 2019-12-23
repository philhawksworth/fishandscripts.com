import App from './App.svelte';

import * as autoEpisodes from 'glob:./episodes/*.md';

const episodes = Object.values(autoEpisodes).map(e => e.default);

const episodesDescOrder = episodes
  .sort((a, b) => {
    const aDateParts = a.metadata.date.split('-').map(x => parseInt(x));
    const bDateParts = b.metadata.date.split('-').map(x => parseInt(x));

    const aDate = new Date(aDateParts[0], aDateParts[1] - 1, aDateParts[2]);
    const bDate = new Date(bDateParts[0], bDateParts[1] - 1, bDateParts[2]);

    return Number(bDate) - Number(aDate);
  })
  .map(episode => ({
    ...episode,
    url: episode.filename.replace('.md', ''),
  }));

const app = new App({
  target: document.body,
  props: {
    episodes: episodesDescOrder,
  },
});

export default app;
