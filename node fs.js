/* const fs = require('fs');
const axios = require('axios');

const fetchData = () => {
    axios('http://jsonplaceholder.typicode.com/posts')
        .then(res => console.log(res.data))
        .then(data => { return data })
        .catch(err => console.log(err))
}

fs.writeFile('results/textfile.txt', fetchData, (err) => {
    if (err) return console.log(err);
    else console.log('Write successful');
})

 */

const axios = require('axios');
const file = require('fs');

// Make request using to the api using axios
axios.get('http://jsonplaceholder.typicode.com/posts')
    .then(response => {
        // console.log(response.data);
        file.writeFile('results/textfile.json', JSON.stringify(response.data), err => {
            console.log(err);
        });
    })
    .catch(err => {
        console.log(err)
    });