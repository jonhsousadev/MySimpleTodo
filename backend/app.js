const server = require('./server/index.js');

const PORT = process.env.PORT || 3300;

server.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));