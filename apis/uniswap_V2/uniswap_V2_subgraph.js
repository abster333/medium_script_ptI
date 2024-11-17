const axios = require('axios');

async function uniswapSubgraph_V2_Api(query) {
  try {

    const url = 'https://gateway.thegraph.com/api/ad1435e8721f29bb5c77715a690b9fca/subgraphs/id/A3Np3RQbaBA6oKJgiwDJeo5T3zrYfGHPWFYayMwtNDum';
    //'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2';
    const { data } = await axios.post(url, query);

    return data.data;
  } catch (error) {
    console.error('there was an issue with calling uniswap_v2 subGraph', error);
  }
}

module.exports = {
  uniswapSubgraph_V2_Api,
};
