import axios from 'axios';


export const translateYourSelectedText = async (language,text) => {
    const response = await axios.get(`https://app-eu.readspeaker.com/webreader/v1/?&cid=12587&cat=Translate&p=google&t=${text}&lout=${language}&url=${window.location.href}`);
    const { data } = response;
    return data;
  };