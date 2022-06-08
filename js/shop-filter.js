import { searchClient } from '../config/config.js';

const search = instantsearch({
    indexName: 'stores-demo',
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


search.addWidgets([

    instantsearch.widgets.index({indexName: 'menu-products-demo', indexId: '4434'}).addWidgets([
        CustomHits({})
    ]),
    instantsearch.widgets.index({ indexName: 'menu-products-demo', indexId: '4435' }).addWidgets([
        CustomHits({})
    ])
]);

search.start();
