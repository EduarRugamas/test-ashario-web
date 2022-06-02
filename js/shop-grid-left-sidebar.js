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

    instantsearch.widgets.menu({
        container: '#container-menu',
        attribute: 'category',
        templates: {
            item: `
            <li>
            <a href="{{url}}">
                {{label}} 
                <span class="float-end badge rounded-pill bg-primary">{{count}}</span>
            </a>
            </li>
            `
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
            
       
                  <figure>
                      <img src="{{image_urls}}">
                  </figure>
                    
                        <div class="content-subtype">
                             <p class="text-brand">{{brand}}</p>
                             <p class="text-bran-sub-type">{{brand_subtype}}</p>
                        </div>
                        <div>
                            <h6>{{#helpers.highlight}}{"attribute": "name"}{{/helpers.highlight}}</h6>
                        </div>
                        <div class="content-details-d-p">
                            <p class="description">{{description}}</p>
                            <span class="text-bucket_price">\${{bucket_price}}</span>  
                        </div>
                        <div class="container-button-learn-more">
                            <a href="#">Quick View</a>
                        </div>      
        
    
           `
       }
    }),

    instantsearch.widgets.pagination({
        container: '#pagination-container',

    })

]);

search.start();
