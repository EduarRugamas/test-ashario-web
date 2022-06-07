import { searchClient } from '../config/config.js';


const search = instantsearch({
    indexName: 'menu-products-demo',
    searchClient
});


const HitsRender = (renderOptions, isFirstRender) => {
    const { hits, results, sendEvent, widgetParams } = renderOptions;
    document.querySelector('#container-hits').innerHTML = `
            ${hits.map( item =>
        `
        <div class="col">
            <div class="card rounded-0 product-card">
<!--                <div class="card-header bg-transparent border-bottom-0">-->
<!--                    <div class="d-flex align-items-center justify-content-end gap-3">-->
<!--                        <a href="javascript:;">-->
<!--                            <div class="product-compare"><span><i class="bx bx-git-compare"></i> Compare</span></div>-->
<!--                        </a>-->
<!--                        <a href="javascript:;">-->
<!--                        <div class="product-wishlist"> <i class="bx bx-heart"></i></div>-->
<!--                        </a>-->
<!--                    </div>-->
<!--                </div>-->
                <img src="${item.image_urls}" class="card-img-top" alt="..." id="imagen-product">
                <div class="card-body">
                    <div class="product-info">
                        <a href="javascript:;">
                            <p class="product-catergory font-13 mb-1">${item.brand}</p>
                            <p class="product-catergory font-13 mb-1">${item.brand_subtype}</p>
                        </a>
                        <a href="javascript:;">
                            <h6 class="product-name mb-2">${instantsearch.highlight({ attribute: 'name', hit: item })}</h6>
                        </a>
                        <div class="d-flex align-items-center">
                            <div class="mb-1 product-price">
                                <!--  <span class="me-1 text-decoration-line-through">$99.00</span> -->
                                <span class="fs-5">\$ ${item.bucket_price}</span>
                            </div>
                            <div class="cursor-pointer ms-auto">
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                                <i class="bx bxs-star text-warning"></i>
                            </div>
                        </div>
                        <div class="product-action mt-2">
                            <div class="d-grid gap-2">
                                <a href="javascript:;" class="btn btn-dark btn-ecomm"><i class="bx bxs-cart-add"></i>Add to Cart</a>
                                <a href="javascript:;" class="btn btn-light btn-ecomm" data-bs-toggle="modal" data-bs-target="#QuickViewProduct"><i class="bx bx-zoom-in"></i>Quick View</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
    ).join('')}
    `;
};

const CustomHits = instantsearch.connectors.connectHits(HitsRender);


const RenderMenu = (renderOptions, isFirstRender) => {

    const { items, canRefine, refine, sendEvent, createUrl, isShowingMore, canTogglesShowMore, toggleShowMore, widgetParams } = renderOptions;

    document.querySelector('#container-menu').innerHTML = `
        ${items.map( item => 
        `
        <li>
            <a href="${createUrl(item.value)}"> ${item.label} 
                <span class="float-end badge rounded-pill bg-primary">${item.count}</span>
            </a>
        </li>   
        `).join('')}
    `;

};

const CustomMenu = instantsearch.connectors.connectMenu(RenderMenu);


const RenderRangeSlider = (renderOptions, isFirstRender) => {
    const { start, range, canRefine, refine, sendEvent, widgetParams } = renderOptions;
    document.querySelector('#container-slider-thc').innerHTML = `
        
        <div class="range-input">
            <input type="range" class="range-min" min="${range.min}" max="${range.max}" value="${Number.isFinite(start[0]) ? start[0] : '0'}" >
            <input type="range" class="range-max" min="${range.max}" max="${range.min}" value="${Number.isFinite(start[0]) ? start[0] : '0'}" >
        </div>
    
    `;
};

const CustomRangeSlider = instantsearch.connectors.connectRange(RenderRangeSlider)

search.addWidgets([

    instantsearch.widgets.configure({
        enablePersonalization: true
    }),

    instantsearch.widgets.searchBox({
        container: '#searchBox',
        placeholder: 'Search for Products',
        cssClasses: {
            input: 'form-control bg-transparent'
        }
    }),

    instantsearch.widgets.sortBy({
        container: '#container-sortby-A-Z',
        items: [
            {label: 'A-Z', value: ''},
            {label: 'Price Low to High', value: 'menu-products-by-price-demo'},
            {label: 'Price High to Low', value: 'menu-products-by-price-desc-demo'},
            {label: 'THC Low to High', value: 'menu-products-by-thc-potency-desc-demo'},
            {label: 'THC High to Low', value: 'menu-products-by-thc-potency-asc-demo'}
        ]
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
    // instantsearch.widgets.rangeSlider({
    //     container: '#container-slider-thc',
    //     attribute: 'percent_thc',
    //     min: 0,
    // }),
    CustomRangeSlider({attribute: 'percent_thc'}),

    instantsearch.widgets.rangeSlider({
        container: '#container-slider-cbd',
        attribute: 'percent_cbd',
        min: 0
    }),

    instantsearch.widgets.numericMenu({
        container: '#container-price',
        attribute: 'bucket_price',
        items : [
            {
                label: 'All'
            },
            {
                label: 'Under $20', end: 20
            },
            {
                label: '$20 - $40', start: 20, end: 40
            },
            {
                label: '$40 - $60', start: 40, end: 60
            },
            {
                label: '$60 - $80', start: 60, end: 80
            },
            {
                label: '$80 & above', start: 80
            }
        ]
    }),

    // instantsearch.widgets.menu({
    //     container: '#container-brands',
    //     attribute: 'brand',
    //     templates: {
    //         item: `
    //         <li>
    //         <a href="{{url}}">
    //             {{label}}
    //             <span class="float-end badge rounded-pill bg-primary">{{count}}</span>
    //         </a>
    //         </li>
    //         `
    //     }
    // }),

    CustomMenu({attribute: 'brand'}),

    CustomHits({}),

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

    // instantsearch.widgets.hits({
    //    container: '#container-hits',
    //    templates: {
    //        item: `
    //               <figure>
    //                   <img src="{{image_urls}}">
    //               </figure>
    //
    //                     <div class="content-subtype">
    //                          <p class="text-brand">{{brand}}</p>
    //                          <p class="text-bran-sub-type">{{brand_subtype}}</p>
    //                     </div>
    //                     <div>
    //                         <h6>{{#helpers.highlight}}{"attribute": "name"}{{/helpers.highlight}}</h6>
    //                     </div>
    //                     <div class="content-details-d-p">
    //                         <p class="description">{{description}}</p>
    //                         <span class="text-bucket_price">\${{bucket_price}}</span>
    //                     </div>
    //                     <div class="container-button-learn-more">
    //                         <a href="#">Quick View</a>
    //                     </div>
    //        `
    //    }
    // }),


    instantsearch.widgets.pagination({
        container: '#pagination-container',
    })

]);

search.start();
