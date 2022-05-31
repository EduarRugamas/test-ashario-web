import { searchClient } from '../config/config.js'

const search = instantsearch({
    indexName: 'menu-products-demo',
    searchClient
});


search.addWidgets([
    instantsearch.widgets.searchBox({
        container: '#searchBox',
        placeholder: 'Search for Products',
        cssClasses: {
            input: 'form-control bg-transparent mt-5'
        }
    }),

    instantsearch.widgets.refinementList({
        container: '#RefinementList-container',
        attribute: 'category',
        templates: {
            item:
            `
                 <li>
                     <a href="${{url}}">
                     {{label}}
                     <span class="float-end badge rounded-pill bg-primary">{{count}}</span></a>
                 </li>
            
            `,
            cssClasses: {
                checkbox: false
            }
        }
    })
]);

search.start();
