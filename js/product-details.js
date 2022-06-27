import {searchClient} from '../config/config.js';

const urlParams = new URLSearchParams(window.location.search);

const objectId = urlParams.get('objectID');
const indexName = 'menu-products-production';
const index = searchClient.initIndex(indexName);

console.log('el objecto id', objectId);

index.search('', {
    filters: `objectID:${objectId}`
}).then(({hits}) => {
    // console.log(hits);

    console.log(hits);
    // usando el hits[0].name etc
    const contenedor = document.getElementById('product-details');

    contenedor.innerHTML = `
       <section class="py-3 border-bottom border-top d-none d-md-flex bg-light">
            <div class="container">
                <div class="page-breadcrumb d-flex align-items-center">
                    <h3 class="breadcrumb-title pe-3">${hits[0].name}</h3>
                </div>
            </div>
       </section>
    <!--end breadcrumb-->
    <!--start product detail-->
       <section class="py-4">
            <div class="container">
                <div class="product-detail-card">
                    <div class="product-detail-body">
                        <div class="row g-0">
                            <div class="col-12 col-lg-5">
                                <div class="image-zoom-section">
                                    <div class="product-gallery owl-carousel owl-theme border mb-3 p-3 owl-loaded owl-drag">
                                        <div class="owl-stage-outer">
                                            <div class="owl-item" style="width: 400px; align-items: center; object-fit: cover;">
                                                <div class="item">
                                                    <img src="" alt="" class="img-fluid" id="imagen_carusel">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>                                
                            </div>
                            <div class="col-12 col-lg-7">
                                <div class="product-info-section p-3">
                                        <div class="badge bg-badge-category mb-2">
                                            <p style="text-transform: uppercase;" class="m-1 align-content-center font-14">${hits[0].category}</p>
                                        </div>
                                        <h3 class="mt-4 mt-lg-0 mb-0">${hits[0].name}</h3>
                                        <div class="d-inline-block mt-2" >
                                            <p class="badge bg-success font-13 ">${hits[0].brand}</p>
                                            <p class="badge bg-success font-13 ">${hits[0].brand_subtype}</p>
                                        </div>
                                        <div class="d-flex align-items-center mt-0 gap-2" id="text_price" >
                                            <!-- <h5 class="mb-0 text-decoration-line-through text-light-3">$98.00</h5>-->
                                            <!--  <h4 class="mb-0" ></h4>-->
                                        </div>
                                        <div class="mt-3">
                                            <h6>Details:</h6>
                                            <dl class="row mt-3" id="container-details-dl">
                                                <dt class="col-sm-3">Product id</dt>
                                                <dd class="col-sm-9"># ${hits[0].product_id}</dd>
                                            </dl>
                                            <!--<p class="mb-0">${hits[0].description}</p>-->
                                        
                                            <h6>Description:</h6>
                                             <p class="mb-0">${hits[0]._highlightResult.description.value}</p>
                                        </div>
                                        <div class="row row-cols-auto align-items-center mt-3">
                                            <div class="col" id="container_quantity">
                                                <label class="form-label">Quantity</label>
                                                <select class="form-select form-select-sm" id="quantity"></select>
                                            </div>
                                            <div class="col" id="container_weight">
                                                <label class="form-label">weight</label>
                                                <select class="form-select form-select-sm" id="select-weight"></select>
                                            </div>
                                        </div>
                                        <div class="d-flex gap-2 mt-3">
                                            <a href="#" class="btn btn-white btn-ecomm" id="add-to-cart"><i class="bx bxs-cart-add"></i>Add to Cart</a> 
                                            <a href="javascript:;" class="btn btn-light btn-ecomm"><i class="bx bx-heart"></i>Add to Wishlist</a>
                                        </div>
                                        <hr/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </section>
    `;

    // percent_cbd: 0
    // percent_cbda: 0
    // percent_tac: 0
    // percent_thc: 26
    // percent_thca: 0

    if (hits[0].percent_cbd === 0 || hits[0].percent_cbd === null) {
        console.log('no tiene cbd');
    } else {
        let container_details = document.getElementById('container-details-dl');
        let dt_title = document.createElement('dt');
        let dd_string = document.createElement('dd');
        dt_title.className = 'col-sm-3';
        dt_title.style = 'text-transform: uppercase;';
        dt_title.textContent = 'cbd';
        dd_string.className = 'col-sm-9';
        dd_string.textContent = `${hits[0].percent_cbd}.00%`;
        container_details.appendChild(dt_title);
        container_details.appendChild(dd_string);
    }

    if (hits[0].percent_cbda === 0 || hits[0].percent_cbda === null) {
        console.log('no tiene cbda');
    } else {
        let container_details = document.getElementById('container-details-dl');
        let dt_title = document.createElement('dt');
        let dd_string = document.createElement('dd');
        dt_title.className = 'col-sm-3';
        dt_title.style = 'text-transform: uppercase;';
        dt_title.textContent = 'cbda';
        dd_string.className = 'col-sm-9';
        dd_string.textContent = `${hits[0].percent_cbda}.00%`;
        container_details.appendChild(dt_title);
        container_details.appendChild(dd_string);
    }

    if (hits[0].percent_tac === 0 || hits[0].percent_tac === null) {
        console.log('no tiene tac');
    } else {
        let container_details = document.getElementById('container-details-dl');
        let dt_title = document.createElement('dt');
        let dd_string = document.createElement('dd');
        dt_title.className = 'col-sm-3';
        dt_title.style = 'text-transform: uppercase;';
        dt_title.textContent = 'tac';
        dd_string.className = 'col-sm-9';
        dd_string.textContent = `${hits[0].percent_tac}.00%`;
        container_details.appendChild(dt_title);
        container_details.appendChild(dd_string);
    }

    if (hits[0].percent_thc === 0 || hits[0].percent_thc === null) {
        console.log('no tiene percent_thc');
    }else {
        let container_details = document.getElementById('container-details-dl');
        let dt_title = document.createElement('dt');
        let dd_string = document.createElement('dd');
        dt_title.className = 'col-sm-3';
        dt_title.style = 'text-transform: uppercase;';
        dt_title.textContent = 'tac';
        dd_string.className = 'col-sm-9';
        dd_string.textContent = `${hits[0].percent_thc}.00%`;
        container_details.appendChild(dt_title);
        container_details.appendChild(dd_string);
    }


    if (hits[0].percent_thca === 0 || hits[0].percent_thca === null){
        console.log('no tiene percent_thca');
    }else {
        let container_details = document.getElementById('container-details-dl');
        let dt_title = document.createElement('dt');
        let dd_string = document.createElement('dd');
        dt_title.className = 'col-sm-3';
        dt_title.style = 'text-transform: uppercase;';
        dt_title.textContent = 'tac';
        dd_string.className = 'col-sm-9';
        dd_string.textContent = `${hits[0].percent_thca}.00%`;
        container_details.appendChild(dt_title);
        container_details.appendChild(dd_string);
    }


if (hits[0].max_cart_quantity === 0 || hits[0].max_cart_quantity === null || hits[0].max_cart_quantity === undefined) {
    console.log('No hay cantidad disponible para el carrito');
} else {

    const container_select_quantity = document.querySelector('#quantity');
    let max_cart_quantity = hits[0].max_cart_quantity;

    console.log('cantidad maxima para enviar al carrito: ', max_cart_quantity);

    for (let quantity_select = 1; quantity_select <= max_cart_quantity; quantity_select++) {
        console.log(quantity_select);
        const options_quantity = document.createElement('option');
        options_quantity.value = quantity_select;
        options_quantity.text = quantity_select;
        container_select_quantity.appendChild(options_quantity);
    }
}


if (hits[0].available_weights.length === 0) {

    let container_select_weight = document.querySelector('#container_weight');
    container_select_weight.style = 'display: none;';
    console.log('No existe ningun elemento en el available weight');

} else {

    let container_select_weight = document.querySelector('#select-weight');

    for (let item of hits[0].available_weights) {

        console.log('weight: ', item);
        const options = document.createElement('option');
        options.value = item;
        options.text = item;
        container_select_weight.appendChild(options);

    }
}

const $select_weight = document.querySelector('#select-weight');
const $select_quantity = document.querySelector('#quantity');
let container_price = document.getElementById('text_price');

if (hits[0].available_weights.length === 0) {
    let text_price = document.createElement('h4');
    text_price.className = "mb-0";
    text_price.id = "h4_price";
    text_price.textContent = `$ ${hits[0].price_each}`;
    container_price.appendChild(text_price);
} else {
    let option_weigh_current = document.getElementById('select-weight').value;
    console.log(option_weigh_current);
    if (option_weigh_current === 'gram') {
        let text_price = document.createElement('h4');
        text_price.className = "mb-0";
        text_price.id = "h4_price";
        text_price.textContent = `$ ${hits[0].price_gram}`;
        container_price.appendChild(text_price);
    } else if (option_weigh_current === 'eighth ounce') {
        let text_price = document.createElement('h4');
        text_price.className = "mb-0";
        text_price.id = "h4_price";
        text_price.textContent = `$ ${hits[0].price_eighth_ounce}`;
        container_price.appendChild(text_price);
    } else if (option_weigh_current === 'quarter ounce') {
        let text_price = document.createElement('h4');
        text_price.className = "mb-0";
        text_price.id = "h4_price";
        text_price.textContent = `$ ${hits[0].price_quarter_ounce}`;
        container_price.appendChild(text_price);
    } else if (option_weigh_current === 'half ounce') {
        let text_price = document.createElement('h4');
        text_price.className = "mb-0";
        text_price.id = "h4_price";
        text_price.textContent = `$ ${hits[0].price_half_ounce}`;
        container_price.appendChild(text_price);
    } else if (option_weigh_current === 'ounce') {
        let text_price = document.createElement('h4');
        text_price.className = "mb-0";
        text_price.id = "h4_price";
        text_price.textContent = `$ ${hits[0].price_ounce}`;
        container_price.appendChild(text_price);
    } else if (option_weigh_current === "half gram") {
        let text_price = document.createElement('h4');
        text_price.className = "mb-0";
        text_price.id = "h4_price";
        text_price.textContent = `$ ${hits[0].price_half_gram}`;
        container_price.appendChild(text_price);
    }
}

function selected_weight_change() {
    let option_select_quantity = document.getElementById('quantity');
    let current_option_weight = document.getElementById('select-weight').value;
    let h4_price_string = document.getElementById('h4_price');
    if (current_option_weight === 'gram') {
        h4_price_string.textContent = `$ ${hits[0].price_gram}`;
        option_select_quantity.selectedIndex = 0;
    } else if (current_option_weight === 'eighth ounce') {
        h4_price_string.textContent = `$ ${hits[0].price_eighth_ounce}`;
        option_select_quantity.selectedIndex = 0;
    } else if (current_option_weight === 'quarter ounce') {
        h4_price_string.textContent = `$ ${hits[0].price_quarter_ounce}`;
        option_select_quantity.selectedIndex = 0;
    } else if (current_option_weight === 'half ounce') {
        h4_price_string.textContent = `$ ${hits[0].price_half_ounce}`;
        option_select_quantity.selectedIndex = 0;
    } else if (current_option_weight === 'half gram') {
        h4_price_string.textContent = `$ ${hits[0].price_half_gram}`;
        option_select_quantity.selectedIndex = 0;
    } else if (current_option_weight === 'ounce') {
        h4_price_string.textContent = `$ ${hits[0].price_ounce}`;
        option_select_quantity.selectedIndex = 0;
    }

}

function selected_quantity_change() {

    let selec_option_quantity = parseInt(document.getElementById('quantity').value);
    let select_option_weight = document.getElementById('select-weight').value;
    let h4_price_replace = document.getElementById('h4_price');
    let price_each_int = parseFloat(hits[0].price_each);
    if (hits[0].available_weights.length === 0) {
        let price_each_string = (price_each_int * selec_option_quantity).toFixed(2);
        h4_price_replace.textContent = `$ ${price_each_string}`;
    } else if (select_option_weight === 'gram') {
        let price_gram_int = parseFloat(hits[0].price_gram);
        let price_gram_string = (price_gram_int * selec_option_quantity).toFixed(2);
        h4_price_replace.textContent = `$ ${price_gram_string}`;

    } else if (select_option_weight === 'eighth ounce') {
        let price_eighth_ounce_int = parseFloat(hits[0].price_eighth_ounce);
        let price_eighth_ounce_string = (price_eighth_ounce_int * selec_option_quantity).toFixed(2);
        h4_price_replace.textContent = `$ ${price_eighth_ounce_string}`;

    } else if (select_option_weight === 'quarter ounce') {
        let price_quarter_ounce_int = parseFloat(hits[0].price_quarter_ounce);
        let price_quarter_ounce_string = (price_quarter_ounce_int * selec_option_quantity).toFixed(2);
        h4_price_replace.textContent = `$ ${price_quarter_ounce_string}`;

    } else if (select_option_weight === 'half ounce') {
        let price_half_ounce_int = parseFloat(hits[0].price_half_ounce);
        let price_half_ounce_string = (price_half_ounce_int * selec_option_quantity).toFixed(2);
        h4_price_replace.textContent = `$ ${price_half_ounce_string}`;

    } else if (select_option_weight === 'half gram') {
        let price_half_gram_int = parseFloat(hits[0].price_half_gram);
        let price_half_gram_string = (price_half_gram_int * selec_option_quantity).toFixed(2);
        h4_price_replace.textContent = `$ ${price_half_gram_string}`;

    } else if (select_option_weight === 'ounce') {
        let price_ounce_int = parseFloat(hits[0].price_ounce);
        let price_ounce_string = (price_ounce_int * selec_option_quantity).toFixed(2);
        h4_price_replace.textContent = `$ ${price_ounce_string}`;

    }

}

$select_weight.addEventListener('change', selected_weight_change);
$select_quantity.addEventListener('change', selected_quantity_change);


$(document).ready(function () {
    $('#add-to-cart').click(function () {

        const product_id = hits[0].product_id;
        let selected_option_quantity = parseInt(document.getElementById('quantity').value);
        let selected_option_weight = document.getElementById('select-weight').value;
        selected_option_weight = selected_option_weight.replace(/ /g, '_');

        console.log(`Informacion a enviar: -> ${product_id}, ${selected_option_quantity}, ${selected_option_weight} `)

        add_to_cart(product_id, selected_option_quantity, selected_option_weight);
    });
});

const images = hits[0].image_urls;

let posicionActual = 0;
let $container_img = document.querySelector('#imagen_carusel');

if (images.length === 0) {
    $container_img.src = '../assets/images/errors-images/image-not-found.jpeg';
} else {
    $container_img.src = `${images[posicionActual]}`;
}


})
;

function add_to_cart(product_id, select_option_quantity, select_option_weight) {
    let data = {
        messageType: "buildCart",
        payload: {
            products: [],
            user: {
                firstName: "John",   //valores que se reemplazaran por el nombre de la cuenta real
                lastName: "Smith",
                birthDate: "1988-04-20",
                phone: "5556661212",
                email: "johnsmith@gmail.com",
                externalId: "12345",
            },
            storeId: 4435,
            headlessPartnerName: "AsharioCompany",
            headlessCheckoutPartnerId: '1234-asdf-5678-ghjk',
            options: {
                font: {
                    fontFamily: "Roboto",
                    url:
                        "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2",
                },
                theme: {
                    themeColor: "#38b1fa",
                    navigationColor: "#38b1fa",
                    ctaTextColor: "#ffffff",
                },
                redirectUrl: 'https://harmonious-mooncake-eb8276.netlify.app/',
                disableAuthFeatures: true,
                disableLoadingSpinner: false,
                disableWeightSelection: false,
                disablePrepayment: false,
                disableMarketingCheckoutAgreements: true,
                kiosk: false
            },
        }
    }

    console.log('JSON sin agregar producto al carrito : ', data);


    if ((product_id === null || product_id === undefined) || (select_option_quantity === 0 || select_option_quantity === null || select_option_quantity === undefined)) {
        console.log("los datos vienen vacios o null o undefined");
        console.log("El productId esta vacio y el count esta vacio");
    } else if (select_option_weight === "" || select_option_weight === null || select_option_weight === undefined) {
        data.payload.products.push({
            productId: product_id,
            priceId: "each",
            count: select_option_quantity
        });

        //console.log('Informacion ya agregada al json products: ', JSON.stringify(data));

        console.log("Llego hasta aqui");
        console.log("Informacion ya agregada al json products:", data);
        let frame = document.getElementById('jane-menu');
        frame.contentWindow.postMessage(data, '*');
        console.log("Se agrego al carrito");

    } else {

        data.payload.products.push({
            productId: product_id,
            priceId: select_option_weight,
            count: select_option_quantity
        });

        //console.log('Informacion ya agregada al json products: ', JSON.stringify(data));

        console.log("Llego hasta aqui");
        console.log("Informacion ya agregada al json products:", data);
        let frame = document.getElementById('jane-menu');
        frame.contentWindow.postMessage(data, '*');
        console.log("Se agrego al carrito");
    }

    // window.addEventListener("message", receiveMessage, false);

}


function receiveMessage(event) {

    let data = {
        messageType: "buildCart",
        payload: {
            products: [
                {
                    productId: 2089,
                    priceId: "eighth_ounce",
                    count: 2,
                },
                {
                    productId: 2030,
                    priceId: "gram",
                    count: 1,
                },
            ],
            user: {
                firstName: "John",   //valores que se reemplazaran por el nombre de la cuenta real
                lastName: "Smith",
                birthDate: "1988-04-20",
                phone: "5556661212",
                email: "johnsmith@gmail.com",
                externalId: "12345",
            },
            storeId: 68,
            headlessPartnerName: "AsharioCompany",
            headlessCheckoutPartnerId: '1234-asdf-5678-ghjk',
            options: {
                font: {
                    fontFamily: "Roboto",
                    url:
                        "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2",
                },
                theme: {
                    themeColor: "#38b1fa",
                    navigationColor: "#38b1fa",
                    ctaTextColor: "#ffffff",
                },
                redirectUrl: 'https://harmonious-mooncake-eb8276.netlify.app/',
                disableAuthFeatures: true,
                disableLoadingSpinner: false,
                disableWeightSelection: false,
                disablePrepayment: false,
                disableMarketingCheckoutAgreements: true,
                kiosk: false
            },
        }
    }

    let payload = event.data && event.data.payload;
    let messageType = event.data && event.data.messageType;

    if (messageType === "loadingEvent" && payload.name === "headlessAppLoaded") {
        console.log("Llego hasta aqui");
        console.log("informacion del json", data)
        let frame = document.getElementById('jane-menu');
        frame.contentWindow.postMessage(data, '*');
        console.log("Se agrego al carrito");
    }
}

// function nextPhoto(){
//     console.log('click right');
//     if (posicionActual >= images.length - 1){
//         posicionActual = 0;
//     } else {
//         posicionActual++;
//     }
//     renderImages();
// }
//
// function backPhoto() {
//     console.log('click left');
//     if (posicionActual <= 0){
//         posicionActual = images.length - 1;
//     }else {
//         posicionActual--;
//     }
//     renderImages();
// }
//
// $btn_siguiente.addEventListener('click', nextPhoto);
// $btn_retroceder.addEventListener('click', backPhoto);









