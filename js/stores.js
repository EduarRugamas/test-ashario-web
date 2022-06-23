import {searchClient} from '../config/config.js';

const search = instantsearch({
    indexName: 'menu-products-production',
    searchClient
});

//  widgets custom o personalizados

// widgets de hits o mostrar elementos en tarjetas
const HitsRender = (renderOptions, isFirstRender) => {
    const {hits, results, BindEvent, widgetParams} = renderOptions;

    console.log('aqui estan los objetos de el hits', hits);


    widgetParams.container.innerHTML = `
            ${hits.map(item =>
        `
        <div class="col">
            <div class="card rounded-0 product-card">
                        <a href="product-details.html?objectID=${item.objectID}">
                            <img src="${ item.image_urls === 0 ? item.image_urls : '../assets/images/errors-images/image-not-found.jpeg' }" class="card-img-top" alt="${item.name}" id="imagen-product">
                        </a>
                    <div class="card-body">
                        <div class="product-info">
                            <a href="product-details.html?objectID=${item.objectID}">
                                <p class="product-catergory font-13 mb-1">${item.brand}</p>
                                <p class="product-catergory font-13 mb-1">${item.brand_subtype}</p>
                            <!--- <p class="product-catergory font-13 mb-1">${item.objectID}</p> --->
                            </a>
                            <a href="product-details.html?objectID=${item.objectID}">
                                <h6 class="product-name mb-2">${instantsearch.highlight({attribute: 'name', hit: item})}</h6>
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
                                    <a href="product-details.html?objectID=${item.objectID}" class="btn btn-dark btn-ecomm">Product Details</a>
                                    <a href="" class="btn btn-light btn-ecomm" data-bs-toggle="modal" data-bs-target="#QuickViewProduct" id="QuickViewModalBtn"><i class="bx bx-zoom-in"></i>Quick View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>    
        `
    ).join('')}
    `;

    // hits.map(item => {
    //     let posicionActual = 0;
    //     const container_img = document.querySelector('#imagen-product');
    //     let img = item.image_urls;
    //     if (img.length === 0) {
    //         container_img.src = '../assets/images/errors-images/image-not-found.jpeg'
    //     } else {
    //         container_img.src = `${img[posicionActual]}`
    //     }
    //
    // });


};
const CustomHits = instantsearch.connectors.connectHits(HitsRender);

//   fin de widgets custom o personalizados


search.addWidgets([

    instantsearch.widgets.index({indexName: 'menu-products-production', indexId: '4434'}).addWidgets([
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

        instantsearch.widgets.rangeSlider({
            container: '#container-slider-thc',
            attribute: 'percent_thc',
            min: 0,
            // cssClasses: {
            //     root: 'font-weight-bold'
            // }
        }),

        instantsearch.widgets.rangeSlider({
            container: '#container-slider-cbd',
            attribute: 'percent_cbd',
            min: 0
        }),

        instantsearch.widgets.numericMenu({
            container: '#container-price',
            attribute: 'bucket_price',
            items: [
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

        CustomHits({container: document.querySelector('#container-hits')}),

        instantsearch.widgets.pagination({
            container: '#pagination-container',
        })
    ]),

]);

search.start();


function store_product_4434() {
    search.addWidgets([
        instantsearch.widgets.index({indexName: 'menu-products-production', indexId: '4434'}).addWidgets([
            CustomHits({container: document.querySelector('')})
        ])
    ]);

    search.start();
}

function store_product_4435() {
    search.addWidgets([
        instantsearch.widgets.index({indexName: 'menu-products-production', indexId: '4435'}).addWidgets([
            CustomHits({container: document.querySelector('')})
        ])
    ]);

    search.start();
}



