import http from "http";
import app from "./app.js";

const server = http.createServer(app);

const PORT = process.env.SERVER_PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
