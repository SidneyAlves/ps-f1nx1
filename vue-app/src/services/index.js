import axios from "axios";
const apiKey = "k9yvllLrck1aWTmUTRikFKLDPYNxWqNs";
const limit = 10;
const searchEndPoint = "https://api.giphy.com/v1/gifs/";
const params = `&api_key=${apiKey}&limit=${limit}`;

const api = axios.create({
  baseURL: searchEndPoint,
});

export const getTrending = async () => {
  let { data } = await api.get(`trending?${params}`);
  setLinks(data);
  return data.data;
};

export const getSearch = async (search, offset = 0) => {
  // let url = `${searchEndPoint}&api_key=${apiKey}&q=${search}&limit=${limit}`;
  // fetch(url)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((json) => {
  //     console.log(json.data);
  //     retrn response.json();
  //   })
  //   .then((jsonrn response.json();
  //   })
  //   .then((json) => {
  //     console.log(json.data);
  //     return json.data;
  //   })
  //   .catch((err) => {
  //     con) => {
  //     console.log(json.data);
  //     return json.data;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  let { data } = await api.get(`search?&q=${search}&offset=${offset}${params}`);
  setLinks(data);
  return data.data;
};

const setLinks = (json) => {
  let gifs = json.data.map((gif) => {
    gif.link = `https://media.giphy.com/media/${gif.id}/giphy.gif`;
  });
  return gifs;
};
