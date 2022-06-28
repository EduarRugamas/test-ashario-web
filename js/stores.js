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

    //${ item.image_urls.length > 0 ? item.image_urls[0] : '../assets/images/errors-images/image-not-found.jpeg'}
    let container_id_img = 'imagen-product';

    widgetParams.container.innerHTML = `
            ${hits.map(item =>
        `
        <div class="col">
            <div class="card rounded-0 product-card">
                        <a href="product-details.html?objectID=${item.objectID}">
                            <img src="" onload="javascript:play_carrousel(item.image_urls[0])" class="card-img-top" alt="${item.name}" id="imagen-product">
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

};
const CustomHits = instantsearch.connectors.connectHits(HitsRender);

//   fin de widgets custom o personalizados


search.addWidgets([

    instantsearch.widgets.index({indexName: 'menu-products-production'}).addWidgets([

        instantsearch.widgets.configure({filters: 'kind:flower AND store_id:4434'}),

        instantsearch.widgets.searchBox({
            container: '#searchBox',
            placeholder: 'Search for Products',
            cssClasses: {
                input: 'form-control bg-transparent'
            }
        }),

        instantsearch.widgets.menu({
            container: '#container-menu',
            attribute: 'category',
            templates: {
                item: `
            <li>
            <a href="{{url}}" style="text-transform: uppercase;">
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

function play_carrousel (array_images) {


    const TIEMPO_INTERVALO_MILESIMAS_SEG = 3000;
    let intervalo = 0;
    let posicionActual = 0;
    let container_img = document.querySelector('#imagen-product');

        if (array_images.length === 0 || array_images.length === null ) {
            container_img.src = '../assets/images/errors-images/image-not-found.jpeg';
        }else {
            function pasarFoto() {
                if(posicionActual >= array_images.length - 1) {
                    posicionActual = 0;
                } else {
                    posicionActual++;
                }
                container_img.src = `${array_images[posicionActual]}`;
            }

            intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        }



}



function renderizarImagen (array_img) {
    const imgs = array_img;

    if (imgs.length === 0) {
        container_img.src = '../assets/images/errors-images/image-not-found.jpeg';
    } else {

    }

}






