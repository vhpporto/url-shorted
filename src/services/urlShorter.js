import database from "../../infra/database.js";
import generateUrlShorted from "../utils/generateUrlShorted.js";
import { validateUrlExpiration } from "../utils/validateUrlExpiration.js";

export const urlShorter = async (req, res) => {
  try {
    const url = req.body.url;

    if (url) {
      const expirationDate = new Date().getTime() + 10000 * 30;
      const expirationDateIsoString = new Date(expirationDate).toISOString();
      const shortUrl = generateUrlShorted(url);

      const checkUrlAlreadyExists = await database.query({
        text: `SELECT url, short_url, expiration_date FROM URLS WHERE url = $1;`,
        values: [url],
      });

      if (
        checkUrlAlreadyExists.rows.length > 0 &&
        validateUrlExpiration(checkUrlAlreadyExists.rows[0].expiration_date)
      ) {
        const short = checkUrlAlreadyExists.rows[0].short_url;
        return res.json({ url: `${process.env.DEFAULT_HOST}/${short}` });
      }

      await database.query({
        text: `INSERT INTO URLS(url, expiration_date, short_url) VALUES($1, $2, $3);`,
        values: [url, expirationDateIsoString, shortUrl],
      });

      const resultUrl = `${process.env.DEFAULT_HOST}/${shortUrl}`;
      return res.json({ url: resultUrl });
    }
    return res.sendStatus();
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
};

export const redirectUrl = async (req, res) => {
  try {
    const url = req.params.url;
    const urlShorted = await database.query({
      text: `SELECT url, expiration_date FROM URLS WHERE short_url = $1;`,
      values: [url],
    });

    if (
      urlShorted.rows.length > 0 &&
      validateUrlExpiration(urlShorted.rows[0].expiration_date)
    ) {
      return res.redirect(urlShorted.rows[0].url);
    }
    return res.sendStatus(404);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
};
