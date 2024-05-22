import axios from "axios";

export const fetchNews = async (topic) => {
  const response = await axios(
    `https://newsapi.org/v2/everything?q=tesla&from=2024-05-21&sortBy=publishedAt&apiKey=41a7404cd629478288b2753c202bc934
    `
  );

  console.log(response.data.articles);
  return response.data.articles;
};
