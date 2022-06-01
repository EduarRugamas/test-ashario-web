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
            item(data) {
                const { label, count, url  } = data;

                return `<a href="${url}">
                ${label}
                <span class="float-end badge rounded-pill bg-primary">${count.toLocaleString()}</span>
</a>`;
            }
        }
    })

]);

search.start();
