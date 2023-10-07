const fetch = require("node-fetch");
var randomize = require("randomatic");

class BINANCE {
  async ScrapDataCoin() {
    const request = fetch("https://www.binance.info/fapi/v1/ticker/24hr", {
      headers: {
        "X-Forwarded-For": `${""}${randomize("0", 3)}${"."}${randomize(
          "0",
          3
        )}${"."}${randomize("0", 3)}${"."}${randomize("0", 3)}${""}`,
        "X-Real-IP": `${""}${randomize("0", 3)}${"."}${randomize(
          "0",
          3
        )}${"."}${randomize("0", 3)}${"."}${randomize("0", 3)}${""}`,
        X_REAL_IP: `${""}${randomize("0", 3)}${"."}${randomize(
          "0",
          3
        )}${"."}${randomize("0", 3)}${"."}${randomize("0", 3)}${""}`,
        HTTP_X_FORWARDED_FOR: `${""}${randomize("0", 3)}${"."}${randomize(
          "0",
          3
        )}${"."}${randomize("0", 3)}${"."}${randomize("0", 3)}${""}`,
      },
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
    }).then((res) => res.json());
    return await request;
  }
  async DataCoinHots() {
    const request = fetch(
      "https://www.binance.info/bapi/composite/v2/public/market/hot-coins?currency=USD",
      {
        headers: {
          "X-Forwarded-For": `${""}${randomize("0", 3)}${"."}${randomize(
            "0",
            3
          )}${"."}${randomize("0", 3)}${"."}${randomize("0", 3)}${""}`,
          "X-Real-IP": `${""}${randomize("0", 3)}${"."}${randomize(
            "0",
            3
          )}${"."}${randomize("0", 3)}${"."}${randomize("0", 3)}${""}`,
          X_REAL_IP: `${""}${randomize("0", 3)}${"."}${randomize(
            "0",
            3
          )}${"."}${randomize("0", 3)}${"."}${randomize("0", 3)}${""}`,
          HTTP_X_FORWARDED_FOR: `${""}${randomize("0", 3)}${"."}${randomize(
            "0",
            3
          )}${"."}${randomize("0", 3)}${"."}${randomize("0", 3)}${""}`,
        },
        referrerPolicy: "strict-origin-when-cross-origin",
        body: null,
        method: "GET",
      }
    ).then((res) => res.json());
    return await request;
  }
  async CekDataToken(token) {
    const request = fetch(
      "https://www.binance.info/bapi/asset/v2/public/asset-service/product/get-product-by-symbol?symbol=" +
        token,
      {
        headers: {
          "X-Forwarded-For": `${""}${randomize("0", 3)}${"."}${randomize(
            "0",
            3
          )}${"."}${randomize("0", 3)}${"."}${randomize("0", 3)}${""}`,
          "X-Real-IP": `${""}${randomize("0", 3)}${"."}${randomize(
            "0",
            3
          )}${"."}${randomize("0", 3)}${"."}${randomize("0", 3)}${""}`,
          X_REAL_IP: `${""}${randomize("0", 3)}${"."}${randomize(
            "0",
            3
          )}${"."}${randomize("0", 3)}${"."}${randomize("0", 3)}${""}`,
          HTTP_X_FORWARDED_FOR: `${""}${randomize("0", 3)}${"."}${randomize(
            "0",
            3
          )}${"."}${randomize("0", 3)}${"."}${randomize("0", 3)}${""}`,
        },
        referrerPolicy: "strict-origin-when-cross-origin",
        body: null,
        method: "GET",
      }
    ).then((res) => res.json());
    return await request;
  }
}
module.exports = BINANCE;
