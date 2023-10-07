const BINANCE = require("./lib/api");
const qrcode = require("qrcode-terminal");
const { Client, LocalAuth } = require("whatsapp-web.js");
const delay = require("delay");
const client = new Client({
  restartOnAuthFail: true,
  puppeteer: {
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-accelerated-2d-canvas",
      "--no-first-run",
      "--no-zygote",
      "--single-process", // <- this one doesn't works in Windows
      "--disable-gpu",
    ],
  },
  authStrategy: new LocalAuth(),
});
// console.log(client)
client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.initialize();
client.on("message", (message) => {
  if (message.body.includes(".notice")) {
    (async () => {
      setInterval(async () => {
        const apiserver = new BINANCE();
        const getData = await apiserver.ScrapDataCoin();
        //   console.log(getData);
        for (let index = 0; index < getData.length; index++) {
          const element = getData[index];
          if (element.symbol.includes("USDT")) {
            if (parseInt(element.priceChangePercent) === 2) {
              console.log("Name", element.symbol);
              console.log("Price", element.lastPrice);
              console.log("Precentasi", element.priceChangePercent + "%");
              console.log("Volume 24 hours " + "$. " + element.quoteVolume);
              console.log("");
              const datarespone = `${"Name : " + element.symbol}\n${
                "Price : " + element.lastPrice
              }\n${"Precentasi : " + element.priceChangePercent + "%"}\n${
                "Volume 24 hours : " + "$ " + parseFloat(element.quoteVolume)
              }\n`;
              await delay(2000);
              client.sendMessage(message.from, datarespone);
            }
          }
        }
      }, 3600000);
    })();
  }
  if (message.body.includes(".list_token_hot")) {
    console.log(message.body);
    (async () => {
      const apiserver = new BINANCE();
      const getData = await apiserver.DataCoinHots();
      for (let index = 0; index < getData.data.length; index++) {
        const element = getData.data[index];
        const DataToken = await apiserver.CekDataToken(element.symbol);
        console.log("Name", element.symbol);
        console.log("Price", DataToken.data.c);
        console.log("Precentasi", element.priceChangePercent + "%");
        console.log("Volume 24 hours " + "$. " + DataToken.data.v);
        console.log("");
        const datarespone = `${"Name : " + element.symbol}\n${
          "Price : " + DataToken.data.c
        }\n${"Volume 24 hours : " + "$" + parseFloat(DataToken.data.v)}\n`;
        await delay(2000);
        client.sendMessage(message.from, datarespone);
      }
    })();
  }
  if (message.body.includes(".cektoken")) {
    const coins = message.body;
    (async () => {
      const apiserver = new BINANCE();
      const getData = await apiserver.ScrapDataCoin();
      for (let index = 0; index < getData.length; index++) {
        const element = getData[index];
        if (element.symbol === coins.split(" ")[1]) {
          console.log("Name", element.symbol);
          console.log("Price", element.lastPrice);
          console.log("Precentasi", element.priceChangePercent + "%");
          console.log("Volume 24 hours " + "$. " + element.quoteVolume);
          console.log("");
          const datarespone = `${"Name : " + element.symbol}\n${
            "Price : " + element.lastPrice
          }\n${"Precentasi : " + element.priceChangePercent + "%"}\n${
            "Volume 24 hours : " + "$ " + parseFloat(element.quoteVolume)
          }\n`;
          await delay(2000);
          client.sendMessage(message.from, datarespone);
        }
      }
    })();
  }
  if (message.body.includes(".command")) {
    const datarespone = `==== LIST COMMAND ====\n*.list_token_hot* => Melihat Token Token Hot Today\n*.cektoken BNBUSDT* => Melihat Data Token\n`;
    client.sendMessage(message.from, datarespone);
  }
});
