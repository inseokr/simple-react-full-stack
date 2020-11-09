const express = require('express');
const os = require('os');
require('express-namespace');

const app = express();

app.namespace('/api', function () {
	app.use(express.static('dist'));
	app.get('/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

	app.listen(process.env.PORT || 8080, () => console.log(`ISEO: Listening on port ${process.env.PORT || 8080}!`));
	//app.listen(3000, () => console.log(`Listening on port 3000!`));
    //app.listen(8000, () => console.log(`Listening on port 8000!`));

});
