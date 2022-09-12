const { get } = require("http");

get("http://www.google.com", (res) => {
  res.on("data", (data) => {
    console.log(data.toString());
  });
  res.on("end", () => {
    console.log("\n\nNo more Data");
  });
});
