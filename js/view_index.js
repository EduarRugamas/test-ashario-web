import {searchClient} from './config';

const search = instantsearch({
    indexName: 'products-demo',
    searchClient
});

search.addWidgets([
    instantsearch.widgets.searchBox({
        container: '#searchBox',
        template: {
            item: `<input type="text" class="form-control w-100" placeholder="Search for Products">
                   <span class="input-group-text cursor-pointer bg-transparent"><i class='bx bx-search'></i></span>`
        }
    }),
]);

search.start();


