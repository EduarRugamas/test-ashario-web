const searchClient = algoliasearch('VFM4X0N23A', 'd16d4804f78c38777368ea8ced79e56e');

const search = instantsearch({
    indexName: 'menu-products-demo',
    searchClient
});

search.addWidgets([

    instantsearch.widgets.searchBox({
        container: '#searchbox'
    }),

    // instantsearch.widgets.hits({
    //     container: '#hits',
    //     templates: {
    //         item: `
    //             <p class="texto"> {{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}</p>
    //           `
    //     }
    // })
]);

search.start();
