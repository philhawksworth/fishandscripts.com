const sortEpisodes = episodes => {
  const episodesDescOrder = episodes
    .sort((a, b) => {
      const aDate = new Date(a.metadata.date);
      const bDate = new Date(b.metadata.date);

      return Number(bDate) - Number(aDate);
    })
    .map(episode => ({
      ...episode,
      url: episode.filename.replace('.md', ''),
    }));

  return episodesDescOrder;
};

export default sortEpisodes;
