/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const func = {
  getProdcuctsWindowData: () => {
    const options = {
      headers: {
        'X-API-key': '41bbcc4b3adee5d66100eb1c18244eeb5ae5cbab897f97d066728eb523d4c3e9bf73e9e6e2d7efb45fbfdaa8d258927fd08fa6f4106a76d2b7c873b636cc0e3d',
        'X-client-id': '69f7ee4a-a05d-4855-a8b6-0015c762cb07',
      },
    };

    axios.get('https://api.1cart.eu/v1/products/all', options)
      .then((resp1) => {
        localStorage.setItem('all-products', JSON.stringify(resp1));
      });
    return localStorage.getItem('all-products');
  },

  getProductsStocks: () => {
    const options = {
      headers: {
        'X-API-key': '41bbcc4b3adee5d66100eb1c18244eeb5ae5cbab897f97d066728eb523d4c3e9bf73e9e6e2d7efb45fbfdaa8d258927fd08fa6f4106a76d2b7c873b636cc0e3d',
        'X-client-id': '69f7ee4a-a05d-4855-a8b6-0015c762cb07',
      },
    };

    axios.get('https://api.1cart.eu/v1/stocks/all', options)
      .then((resp1) => {
        localStorage.setItem('stocks', JSON.stringify(resp1));
      });
    return localStorage.getItem('stocks');
  },
};
