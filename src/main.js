import App from './App.svelte';

import * as autoEpisodes from 'glob:./episodes/*.md';
import sortEpisodes from './sort-episodes';

const episodes = Object.values(autoEpisodes).map(e => e.default);

const app = new App({
  target: document.body,
  props: {
    episodes,
  },
});

export default app;
