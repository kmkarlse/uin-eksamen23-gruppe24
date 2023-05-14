import { client } from "./client";

export const fetchAllGames = async () => {
  const data = await client.fetch(
    `{
      "count": count(*[_type == "games"]),
      "games": *[_type == "games"]
      {game_title, id, hours_played, favorite, "genres": genres[]->gebre_slug},
  }`
  );

  return data;
};

export const fetchAllGenres = async () => {
  const data = await client.fetch(`*[_type == "genres"]`);
  return data;
};

export const fetchAGame = async (slug) => {
  const data = await client.fetch(
    `*[_type == "games" && slug.current == $slug]
    {game_title, api, hours_played, favorite, "genre": genres->name}
    `,
    { slug }
  );

  return data;
};

export const fetchUser = async (username) => {
  const data = await client.fetch(
    `*[_type == "user" && (email == $username)]`,
    { username }
  );

  return data;
};
