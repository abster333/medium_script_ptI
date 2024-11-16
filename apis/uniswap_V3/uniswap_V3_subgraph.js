const axios = require('axios');


async function uniswapSubgraph_V3_Api(query) {
  try {
    const url = 'https://gateway.thegraph.com/api/ad1435e8721f29bb5c77715a690b9fca/subgraphs/id/5zvR82QoaXYFyDEKLZ9t6v9adgnptxYpKpSbxtgVENFV';
    
    //'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3';
    const { data } = await axios.post(url, query);

    return data.data;
  } catch (error) {
    console.error('there was an issue with calling uniswap_v3 subGraph', error);
  }
}

module.exports = {
  uniswapSubgraph_V3_Api,
};
