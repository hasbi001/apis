const fetch = require('node-fetch');

exports.findOne = (req, res) => {
    const keyword = req.params.keyword;
    
    fetch(
        "https://www.googleapis.com/books/v1/volumes?q="+keyword
    )
    .then((response) => response.json())
    .then((data) => console.log(data.items[0].id))
    .catch((err) => res.send(err));
};