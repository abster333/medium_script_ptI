/* eslint-disable no-unused-vars */
const axios = require('axios');






async function sushiswapSubgraph_Api(query) {
  try {
    const url = 'https://gateway.thegraph.com/api/ad1435e8721f29bb5c77715a690b9fca/subgraphs/id/77jZ9KWeyi3CJ96zkkj5s1CojKPHt6XJKjLFzsDCd8Fd';
    //'https://api.thegraph.com/subgraphs/name/sushiswap/exchange';
    const { data } = await axios.post(url, query);

    return data.data;
  } catch (error) {
    console.error('there was an issue with calling uniswap subGraph', error);
  }
}

module.exports = { sushiswapSubgraph_Api };






async function axios_call(query) {
  try {
    const url = 'end point here';
    const { data } = await axios.post(url, query);

    return data
  } catch (error) {
    console.error(error);
  }
}