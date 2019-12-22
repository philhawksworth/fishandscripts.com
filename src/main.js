import App from './App.svelte';

import episode1 from './episodes/season-1-episode-1-hello-world.md';
import episode2 from './episodes/season-1-episode-2-misconceptions-of-programming.md';

const episodes = [episode1, episode2];

const episodesDescOrder = episodes.sort((a, b) => {
  const aDateParts = a.metadata.date.split('-').map(x => parseInt(x));
  const bDateParts = b.metadata.date.split('-').map(x => parseInt(x));

  const aDate = new Date(aDateParts[0], aDateParts[1] - 1, aDateParts[2]);
  const bDate = new Date(bDateParts[0], bDateParts[1] - 1, bDateParts[2]);

  return Number(bDate) - Number(aDate);
});

console.log('sorted', episodesDescOrder);

const app = new App({
  target: document.body,
  props: {
    episodes: episodesDescOrder,
  },
});

export default app;
