import app from "./app";

const server = app.listen(app.get("port"), () => {
  console.log("This server is listening port %d"), app.get("port");
  debugger;
});

export default server;
