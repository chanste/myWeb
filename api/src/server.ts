import app from "./app";

const server = app.listen(app.get("port"), () => {
  console.log("This server is listening port %d"),
    app.get("port"),
    app.get("env");
  debugger;
});

export default server;
