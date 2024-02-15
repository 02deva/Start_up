const express = require('express');
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

// Additional routes and middleware can be defined here

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
