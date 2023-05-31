# Currency converter

Create a currency converter webpage. The page should convert the given currency to the chosen one.

- In the interface already set up in `index.html` the user can select a crypto currency and input the price
- The user will be able to convert the crypto currency into another selected currency e.g. USD/EUR etc
- Don't change the `index.html` file
- Write your code in `main.js` that should display the conversion result to the user when they press the **Convert** button

## Instructions

- Use the coinbase API to get the spot price; https://docs.cloud.coinbase.com/sign-in-with-coinbase/docs/api-prices#get-spot-price
  - Note: some APIs have usage limitations; too many requests too quickly might limit your access
  - Example query: https://api.coinbase.com/v2/prices/LTC-EUR/spot

(ignore dropdown values):

![preview](./demo.gif)