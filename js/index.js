import { callbackInstantSearch } from './config.js'

// const search = instantsearch({
//     indexName: 'menu-products-demo',
//     searchClient
// });

callbackInstantSearch('menu-products-demo').search.addWidgets([
    instantsearch.widgets.searchBox({
        container: '#searchbox'
    }),
]);

callbackInstantSearch().search.start();


// search.addWidgets([
//
//     instantsearch.widgets.searchBox({
//         container: '#searchbox'
//     }),
//
//     instantsearch.widgets.refinementList({
//         container: '#search-lineage',
//         attribute: 'category'
//     }),
//
//     instantsearch.widgets.rangeSlider({
//         container: '#rangeSlider-thc-potency',
//         attribute: 'percent_thc',
//         min: 0,
//     }),
//
//     instantsearch.widgets.rangeSlider({
//         container: '#rangeSlider-cbd-potency',
//         attribute: 'percent_cbd',
//         min: 0
//     }),
//
//     instantsearch.widgets.refinementList({
//         container: '#refinementList-categories',
//         attribute: 'kind'
//     }),
//
//     instantsearch.widgets.numericMenu({
//         container: '#numericMenu-price',
//         attribute: 'bucket_price',
//          items : [
//              {
//                  label: 'All'
//              },
//              {
//                 label: 'Under $20', end: 20
//              },
//              {
//                  label: '$20 - $40', start: 20, end: 40
//              },
//              {
//                  label: '$40 - $60', start: 40, end: 60
//              },
//              {
//                  label: '$60 - $80', start: 60, end: 80
//              },
//              {
//                  label: '$80 & above', start: 80
//              }
//          ]
//     }),
//     //preguntar ya que no hay parametro para filtrar por los gramos
//     // instantsearch.widgets.refinementList({
//     //     container: '#numericMenu-available-weights',
//     //     attribute: 'root_types',
//     // }),
//
//     //preguntar ya que no hay parametro para filtrar por los brands
//     // instantsearch.widgets.refinementList({
//     //    container: '#refinementList-brands',
//     //    attribute: 'brand_subtype'
//     // }),
//
//     instantsearch.widgets.hits({
//         container: '#hits',
//         templates: {
//             item: `
//                 <p class="texto"> {{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}</p>
//               `
//         }
//     })
// ]);
//
// search.start();
