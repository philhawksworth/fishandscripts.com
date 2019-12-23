import App from './App.svelte';

import episode1 from './episodes/season-1-episode-1-hello-world.md';
import episode2 from './episodes/season-1-episode-2-misconceptions-of-programming.md';
import episode3 from './episodes/season-1-episode-3-more-things.md';
import episode4 from './episodes/season-1-episode-4-flamboyant-fans-and-productivity.md';
import episode5 from './episodes/season-1-episode-5-utility-css-teaching-flashy-pcs.md';
import episode6 from './episodes/season-1-episode-6-fast-or-finished.md';
import episode7 from './episodes/season-1-episode-7-grumpy-airpods-and-css-grid.md';
import episode8 from './episodes/season-1-episode-8-untangling-typescript.md';
import episode9 from './episodes/season-1-episode-9-xmas-special-and-2020-plans.md';

const episodes = [
  episode1,
  episode2,
  episode3,
  episode4,
  episode5,
  episode6,
  episode7,
  episode8,
  episode9,
];

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
