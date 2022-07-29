const API_LIKES = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/dZgTTlr5uztQNogDJTyt/likes';

const Getdata = async () => {
  const response = await fetch(API_LIKES);
  const data = await response.json();
  return data;
};

export default Getdata;
