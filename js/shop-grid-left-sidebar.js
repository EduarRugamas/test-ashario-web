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
                 <li class="d-none">
                     <a href="" style="{{#isRefined}}font-weight: bold{{/isRefined}}">
                     {{label}}
                     <span class="float-end badge rounded-pill bg-primary">{{count}}</span></a>
                 </li>
            
            `,
            cssClasses: {
                checkbox: 'd-none'
            }
        }
    })
]);

search.start();
