export default {
  name: 'games',
  type: 'document',
  title: 'Games',
  fields: [
    {
      name: 'game_title',
      type: 'string',
      title: 'Game-Name',
    },
    {
      name: 'id',
      type: 'number',
      title: 'API-Id',
    },
    {
      name: 'slug',
      type: 'slug',
      tittle: 'Url',
      options: {
        source: 'game_title',
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/[^\w-]+/g, '_')
            .slice(0, 150),
      },
    },
    {
      name: 'hours_played',
      type: 'number',
      title: 'Hours_Played',
    },
    {
      name: 'favorite',
      type: 'boolean',
      title: 'Favorite',
    },
    {
      name: 'genres',
      title: 'genres',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'genres'}],
        },
      ],
    },
  ],
}
