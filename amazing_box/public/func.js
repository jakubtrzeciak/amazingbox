/* eslint-disable import/prefer-default-export */
/* eslint-disable object-shorthand */
/* eslint-disable  arrow-body-style */
/* eslint-disable  arrow-parens */
import axios from 'axios';

export const func = {
  getProdcuctsWindowData: () => {
    const options = {
      headers: {
        'X-API-key': '41bbcc4b3adee5d66100eb1c18244eeb5ae5cbab897f97d066728eb523d4c3e9bf73e9e6e2d7efb45fbfdaa8d258927fd08fa6f4106a76d2b7c873b636cc0e3d',
        'X-client-id': '69f7ee4a-a05d-4855-a8b6-0015c762cb07',
      },
    };

    return axios.get('https://api.1cart.eu/v1/products/all', options)
      .then(resp1 => resp1.data);
  },

  getProductsStocks: () => {
    const options = {
      headers: {
        'X-API-key': '41bbcc4b3adee5d66100eb1c18244eeb5ae5cbab897f97d066728eb523d4c3e9bf73e9e6e2d7efb45fbfdaa8d258927fd08fa6f4106a76d2b7c873b636cc0e3d',
        'X-client-id': '69f7ee4a-a05d-4855-a8b6-0015c762cb07',
      },
    };

    return axios.get('https://api.1cart.eu/v1/stocks/all', options)
      .then(resp1 => resp1.data);
  },

  getSheetsData: () => {
    return axios.get('https://spreadsheets.google.com/feeds/cells/1sZCYphAXYbdaC7R8o2KLQe9acLxqO9vJAkLznfhCd8U/1/public/full?alt=json')
      .then(resp1 => resp1.data.feed.entry);
  },

  sendMail: (name, email, message) => {
    axios.post('connect/connect.php', JSON.stringify({
      name: name,
      email: email,
      message: message,
    }))
      .then((resp1) => {
        localStorage.setItem('response', JSON.stringify(resp1));
      })
      .catch((error) => {
        localStorage.setItem('response', JSON.stringify(error));
      });

    return localStorage.getItem('response');
  },
};
