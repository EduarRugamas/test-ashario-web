import { searchClient } from '../config/config.js'

const search = instantsearch({
    indexName: 'menu-products-demo',
    searchClient
});


search.addWidgets([

    instantsearch.widgets.configure({
        enablePersonalization: true
    }),

    instantsearch.widgets.searchBox({
        container: '#searchBox',
        placeholder: 'Search for Products',
        cssClasses: {
            input: 'form-control bg-transparent mt-5'
        }
    }),

    // instantsearch.widgets.hits({
    //     container: '#container-hits',
    //     templates: {
    //         item:
    //         `
    //         <div class="col">
    //                                        <div class="card rounded-0 product-card">
    //
    //                                             <img src="{{image_urls}}" class="card-img-top"
    //                                                  alt="...">
    //                                             <div class="card-body">
    //                                                 <div class="product-info">
    //                                                     <a href="javascript:;">
    //                                                         <p class="product-catergory font-13 mb-1">{{brand}}</p>
    //                                                         <p class="product-catergory font-13 mb-1">{{brand_subtype}}</p>
    //                                                     </a>
    //                                                     <a href="javascript:;">
    //                                                         <h6 class="product-name mb-2">{{#helpers.highlight}}{"attribute": "name"}{{/helpers.highlight}}</h6>
    //                                                     </a>
    //                                                     <div class="d-flex align-items-center">
    //                                                         <div class="mb-1 product-price">
    //                                                             <span class="fs-5">\$ {{bucket_price}}</span>
    //                                                         </div>
    //                                                     </div>
    //                                                     <div class="product-action mt-2">
    //                                                         <div class="d-grid gap-2">
    //                                                             <a href="javascript:;" class="btn btn-dark btn-ecomm">
    //                                                                 <i class="bx bxs-cart-add"></i>Add to Cart</a>
    //                                                             <a href="javascript:;" class="btn btn-light btn-ecomm"
    //                                                                data-bs-toggle="modal"
    //                                                                data-bs-target="#QuickViewProduct"><i
    //                                                                     class="bx bx-zoom-in"></i>Quick View</a>
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //         </div>
    //         `
    //     }
    // }),

    // instantsearch.widgets.hits({
    //     container: '#container-hits',
    //     templates: {
    //         empty: 'No results for <q>{{ query }}</q>',
    //         item: `
    //         <div class="card-views">
    //             <figure>
    //                 <img src="{{image_urls}}" width="100" height="210">
    //             </figure>
    //             <div class="contenido">
    //                <h3 class="text-brand">{{brand}}</h3>
    //                <h3 class="text-bran-sub-type">{{brand_subtype}}</h3>
    //                <div>
    //                     <h6>{{#helpers.highlight}}{"attribute": "name"}{{/helpers.highlight}}</h6>
    //                </div>
    //               <p class="description">{{description}}</p>
    //               <span class="text-bucket_price">\$ {{bucket_price}}</span>
    //            </div>
    //         </div>
    //
    //         `
    //     }
    // }),

    instantsearch.widgets.hits({
       container: '#container-hits',
       templates: {
           item: `
           <div class="tarjetas">
              <div class="">
                 <img class="img-one imagen-section" src="{{image_urls}}" alt="">
              </div>
              <div class="content">
                   <h2 class="string-name-product">{{#helpers.highlight}}{"attribute": "name"}{{/helpers.highlight}}</h2>
                   <h4 class="string-brand-product">{{brand}}</h4>
                   <h4 class="string-brand-sub-type-product">{{brand_subtype}}</h4>
                   <p class="string-description-product">{{description}}</p>
                   <a href="#">Quick View</a>
              </div>
           </div>
           `
       }
    }),

    instantsearch.widgets.pagination({
        container: '#pagination-container',
        // templates: {
        //     first: `<a class="page-link" href="javascript:;" aria-label="Prev"> <i class='bx bx-chevron-left'></i> Prev</a>`,
        //     next: `<a class="page-link" href="javascript:;" aria-label="Next"><i class='bx bx-chevron-right'></i>  Next </a>`
        // }
    })

]);

search.start();
