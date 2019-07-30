const axios = require("axios");

const getExpDataById = id => {
  return axios
    .post(
      `https://api.towords.com/experience/get_share_experience.do?experience_id=${id}`
    )
    .then(({ data }) => {
      console.log(data.code);

      if (data.code === 200) return data.result;
      else {
        throw "error:post experience data!";
      }
    })
    .catch(err => {
      if (err) throw err;
    });
};

module.exports = {
  getExpDataById
};
