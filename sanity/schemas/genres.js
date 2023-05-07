export default {
  name: 'genres',
  type: 'document',
  title: 'Genres',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Genres_Name',
    },
    {
      name: 'gebre_slug',
      type: 'slug',
      title: 'URL-title',
      options: {
        source: 'name',
        slugify: (input) => input.toLowerCase().replace(/[^\w-]+/g, '_'),
      },
    },
  ],
}
