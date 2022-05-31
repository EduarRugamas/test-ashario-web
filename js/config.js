const searchClient = algoliasearch('VFM4X0N23A', 'd16d4804f78c38777368ea8ced79e56e');

export function callbackInstantSearch(value) {
    return instantsearch({
        indexName: `${value}`,
        searchClient
    });
}

