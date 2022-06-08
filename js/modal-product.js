import { searchClient } from '../config/config.js';
const urlParams = new URLSearchParams(window.location.search);
const objectID = urlParams.get('objectID');

const indexName = 'menu-products-demo';
const index = searchClient.initIndex(indexName);

console.log('el objecto id',objectID)

index.search(objectID).then( ({hits}) => {
    // codigo de html de el modal
    // usando el hits[0].name etc
    document.getElementById('QuickViewProduct').innerHTML = ``
});

