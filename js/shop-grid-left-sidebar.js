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

    instantsearch.widgets.menu({
        container: '#menuList-container',
        attribute: 'category',
        template: {
            item:
            `
            <li>
            <a href="javascript:;">
            {{label}} 
            <span class="float-end badge rounded-pill bg-primary">{{count}}</span></a>
            </li>
            `
        }
    })

]);

search.start();
