import App from "../../App";
import { client } from "./client";
import jwt from "jsonwebtoken";

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

//skfzhgyM3U8Zb0zvuiG1svtpnnlymzimOgCU4XGECtpotz7Bq664ELnUgPaAafU8TyXFkJBSgekAeiH6qIFpPY1N4TkL2BayevNvU0R3nfnpaGYBuFB1FU5TstbPwtraTJjUEMHpRVkhCLFUzT9OkgetSGYutIf46iTTNkk0eXLWZPqHqcCG

function generateSessionToken(userId) {
  const secret =
    "skfzhgyM3U8Zb0zvuiG1svtpnnlymzimOgCU4XGECtpotz7Bq664ELnUgPaAafU8TyXFkJBSgekAeiH6qIFpPY1N4TkL2BayevNvU0R3nfnpaGYBuFB1FU5TstbPwtraTJjUEMHpRVkhCLFUzT9OkgetSGYutIf46iTTNkk0eXLWZPqHqcCG"; // Change this to your own secret key
  const payload = {
    sub: userId,
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // Expires in 24 hours
  };
  return jwt.sign(payload, secret);
}

App.post("/login", async (req, res) => {
  const { email, username, password } = req.body;

  const query = `*[_type: "user" && (email == $email || username: == $password)]`;

  const params = {
    email,
    username,
    password,
  };

  const result = await client.fetch(query, params);

  if (result.length > 0) {
    const token = generateSessionToken(result[0]._id);

    res.json({
      success: true,
      token,
    });
  } else {
    res.json({
      success: false,
      message: "Invalid email/username or password",
    });
  }
});
