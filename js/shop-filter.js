import { searchClient } from '../config/config.js';

const search = instantsearch({
    indexName: 'menu-products-demo',
    searchClient,
    routing: true
});

function QuickViewModal (items) {

    console.log(items.name);



    // $('#QuickViewModalBtn').click( function () {
    //     $('#text-modal-product-name').val(items.name);
    //     $('#text-modal-product-price').val(items.bucket_price);
    //     $('#text-modal-product-description').val(items.description);
    //     $('#text-modal-product-objectID').val(items.objectID);
    // });
    // $('#text-modal-product-name').val(item_hits.name);
}

const HitsRender = (renderOptions, isFirstRender) => {
    const { hits, results, sendEvent, widgetParams } = renderOptions;

    const url = 'product-details.html?objectID=' + hits.objectID;

    widgetParams.container.innerHTML = `
            ${hits.map( item =>
        `
        <div class="col">
            <div class="card rounded-0 product-card">
                <img src="${item.image_urls}" class="card-img-top" alt="..." id="imagen-product">
                <div class="card-body">
                    <div class="product-info">
                        <a href="javascript:;">
                            <p class="product-catergory font-13 mb-1">${item.brand}</p>
                            <p class="product-catergory font-13 mb-1">${item.brand_subtype}</p>
                            <p class="product-catergory font-13 mb-1">${item.objectID}</p>
                        </a>
                        <a href="javascript:;">
                            <h6 class="product-name mb-2">${instantsearch.highlight({ attribute: 'name', hit: item })}</h6>
                        </a>
                        <div class="d-flex align-items-center">
                            <div class="mb-1 product-price">
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
                                <a href="${url}" class="btn btn-dark btn-ecomm">Product Details</a>
                                <a href="" class="btn btn-light btn-ecomm" data-bs-toggle="modal" data-bs-target="#QuickViewProduct" id="QuickViewModalBtn" onclick="QuickViewModal(item)"><i class="bx bx-zoom-in"></i>Quick View</a>
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
        CustomHits({container: document.querySelector('#container-hits')})
    ]),
    instantsearch.widgets.index({ indexName: 'menu-products-demo', indexId: '4435' }).addWidgets([
        instantsearch.widgets.hits({
            container: '#container-hits-demo'
        })
    ])
]);

search.start();
