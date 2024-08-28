import axios from 'axios';

export default async function handler(req, res) {
  const { path, ...query } = req.query;
  try {
    const response = await axios.get(`https://api.rawg.io${path}`, {
      params: query,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response ? error.response.status : 500).json(error.message);
  }
}