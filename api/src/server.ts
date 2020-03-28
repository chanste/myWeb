import app from "./app";

const server = app.listen(app.get("port"), () => {
  console.log("This server is on"), app.get("port"), app.get("env");
  debugger;
});

export default server;
