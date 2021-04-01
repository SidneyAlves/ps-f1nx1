import axios from "axios";
const apiKey = "k9yvllLrck1aWTmUTRikFKLDPYNxWqNs";
const limit = 10;
const searchEndPoint = "https://api.giphy.com/v1/gifs/";
const params = `&api_key=${apiKey}&limit=${limit}`;

const api = axios.create({
  baseURL: searchEndPoint,
});

// SIMULAÇÃO DA API (as funções que necessitam de back end estão com as chamadas comentadas, mockei um retorno em cada função)
// const backEnd = axios.create({
//   baseURL: "http://localhost:5001/",
// });

export const getTrending = async (offset = 0) => {
  let { data } = await api.get(`trending?&offset=${offset}${params}`);
  setLinks(data);
  return data.data;
};

export const getSearch = async (search, offset = 0) => {
  let { data } = await api.get(`search?&q=${search}&offset=${offset}${params}`);
  setLinks(data);
  return data.data;
};

export const saveGif = async (gif) => {
  // let { data } = await backEnd.post("gifs", {
  //   params: { id: gif.id, title: gif.title, url: gif.url },
  // });
  // return data
  await simReq(1000);
  // return { success: `Gif ${gif.title} salvo com sucesso` };
  return { error: `Gif ${gif.title} não pode ser salvo` };
};

export const editGif = async (gif) => {
  // let { data } = await backEnd.put(`gifs/${gif.id}`, {
  //   params: { title: gif.title, url: gif.url },
  // });
  // return data
  await simReq(1000);
  // return { success: `Gif ${gif.title} salvo com sucesso` };
  return { error: `Gif ${gif.title} não pode ser editado` };
};

export const removeGif = async (gif) => {
  // let { data } = await backEnd.delete(`gifs/${gif.id}`);
  // return data
  await simReq(1000);
  return { success: `Gif ${gif.title} removido com sucesso` };
  // return { error: `Gif ${gif.title} não pode ser removido` };
};

const setLinks = (json) => {
  let gifs = json.data.map((gif) => {
    gif.link = `https://media.giphy.com/media/${gif.id}/giphy.gif`;
  });
  return gifs;
};

// Simula requisição, bom pra simular trabalho com promisse no front-end
const simReq = (delay) => {
  return new Promise(function(resolve) {
    setTimeout(resolve, delay);
  });
};
