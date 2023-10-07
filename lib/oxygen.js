const fetch = require("node-fetch");
var randomize = require("randomatic");

class OXYGEN {
  async register(device, email, password, username) {
    const request = fetch("https://api.release.oxygean.com/auth/register", {
      method: "POST",
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
        Host: "api.release.oxygean.com",
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "app-version": "400.1.2",
        version: 1,
        "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
        "platform-os": "ios",
        "app-build-number": "3",
        "Accept-Encoding": "gzip, deflate",
        "User-Agent": "Oxygean/3 CFNetwork/1404.0.5 Darwin/22.3.0",
      },
      body: JSON.stringify({
        data: {
          email: email,
          username: username,
          password: password,
        },
        meta: {
          deviceId: device,
          provider: "default",
          invitedBy: "651ea070162eab001c1fc0b5",
        },
      }),
    }).then((res) => res.json());
    return await request;
  }
}
module.exports = OXYGEN;
