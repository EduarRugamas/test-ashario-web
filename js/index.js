const search = instantsearch({
    indexName: 'janesRoots',
    searchClient: algoliasearch('VFM4X0N23A', 'd16d4804f78c38777368ea8ced79e56e')
});

search.addWidgets([
    instantsearch.widgets.hits({
        container: '#conta',
        templates: {
            value: function (suggestion) {
                console.log(suggestion.name)
            }
        }
    })
]);

search.start();
