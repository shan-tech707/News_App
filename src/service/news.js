import {
  articles_url,
  country_code,
  category,
  _api_key,
} from '../../src/config/rest_config';

export const getArticles = async () => {
   try {
     let art = await fetch(
       `${articles_url}?country=${country_code}&category=${category}&apiKey=${_api_key}`,
     );
     let result = await art.json();

     return result.articles;
   } catch (error) {
     throw error;
   }
 };

export const getBusinessArticles = async () => {
  try {
    let art = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6ccbfaf91e7e43ffb19d46dd6475c625`,
    );
    let result = await art.json();

    return result.articles;
  } catch (error) {
    throw error;
  }
};

export const getTechnologyArticles = async () => {
  try {
    let art = await fetch(
      `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6ccbfaf91e7e43ffb19d46dd6475c625`,
    );
    let result = await art.json();

    return result.articles;
  } catch (error) {
    throw error;
  }
};