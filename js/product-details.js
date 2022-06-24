import {searchClient} from '../config/config.js';
const urlParams = new URLSearchParams(window.location.search);

const objectId = urlParams.get('objectID');
const indexName = 'menu-products-production';
const index = searchClient.initIndex(indexName);

console.log('el objecto id', objectId);

index.search('', {
    filters: `objectID:${objectId}`
}).then( ({hits} )=> {
    // console.log(hits);

    console.log(hits);
    // usando el hits[0].name etc
    const contenedor = document.getElementById('product-details');

    contenedor.innerHTML=`
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
                                    <h3 class="mt-3 mt-lg-0 mb-0">${hits[0].name}</h3>
                                    <div class="product-rating d-flex align-items-center mt-2">
                                    <div class="rates cursor-pointer font-13">
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-warning"></i>
                                        <i class="bx bxs-star text-light-4"></i>
                                    </div>
                                    <div class="ms-1">
                                        <p class="mb-0">(24 Ratings)</p>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center mt-3 gap-2">
                                    <!-- <h5 class="mb-0 text-decoration-line-through text-light-3">$98.00</h5>-->
                                    <h4 class="mb-0">\$ ${hits[0].bucket_price}</h4>
                                </div>
                                <div class="mt-3">
                                    <h6>Discription :</h6>
                                    <p class="mb-0">${hits[0].description}</p>
                                </div>
                                <dl class="row mt-3">
                                    <dt class="col-sm-3">Product id</dt>
                                    <dd class="col-sm-9"># ${hits[0].product_id}</dd>
<!--                                    <dt class="col-sm-3">Delivery</dt>-->
<!--                                    <dd class="col-sm-9">Russia, USA, and Europe</dd>-->
                                </dl>
                                <div class="row row-cols-auto align-items-center mt-3">
                                    <div class="col">
                                        <label class="form-label">Quantity</label>
                                            <select class="form-select form-select-sm" id="quantity">
                                                <option value="1" selected>1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                    </div>
                                    <div class="col">
                                        <label class="form-label">weight</label>
                                            <select class="form-select form-select-sm" id="select-weight">
                                           
                                            </select>
                                    </div>
<!--                                    <div class="col">-->
<!--                                        <label class="form-label">Colors</label>-->
<!--                                            <div class="color-indigators d-flex align-items-center gap-2">-->
<!--                                            <div class="color-indigator-item bg-primary"></div>-->
<!--                                            <div class="color-indigator-item bg-danger"></div>-->
<!--                                            <div class="color-indigator-item bg-success"></div>-->
<!--                                            <div class="color-indigator-item bg-warning"></div>-->
<!--                                    </div>-->
<!--                                </div>-->
                            </div>
                            <!--end row-->
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

    if (hits[0].available_weights.length === 0 ) {
        let container_select_weight = document.querySelector('#select-weight');
        console.log('No existe ningun elemento en el available weight');
    }else {
        let container_select_weight = document.querySelector('#select-weight');
        for( let item of hits[0].available_weights ){
            console.log('weight: ', item);
        }
    }


    $(document).ready(function () {
        $('#add-to-cart').click( function () {
            const product_id = hits[0].product_id;
            const SelectedOption = parseInt(document.getElementById('quantity').value)
            // const OptionNumber = parseInt(SelectedOption);
            console.log('opcion seleccionada',SelectedOption)
            console.log(`Informacion a enviar: -> ${product_id}, ${SelectedOption} `)

            add_to_cart(product_id, SelectedOption);
        });
    });

    const images = hits[0].image_urls;
    console.log(images);

    let posicionActual = 0;
    let $container_img = document.querySelector('#imagen_carusel');
    function nextPhoto(){
        console.log('click right');
        if (posicionActual >= images.length - 1){
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderImages();
    }

    function backPhoto() {
        console.log('click left');
        if (posicionActual <= 0){
            posicionActual = images.length - 1;
        }else {
            posicionActual--;
        }
        renderImages();
    }

    function renderImages(){
        if(images.length === 0 ){
            $container_img.src = '../assets/images/errors-images/image-not-found.jpeg'
        }else {
            $container_img.src = `${images[posicionActual]}`
        }

    }

    // $btn_siguiente.addEventListener('click', nextPhoto);
    // $btn_retroceder.addEventListener('click', backPhoto);

    renderImages();




});

function add_to_cart(product_id, SelectedOption) {
    var data = {
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
            storeId: 4434,
            headlessPartnerName: "Ashario Company",
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
                redirectUrl: 'https://iheartjane.com/',
                disableAuthFeatures: true,
                disableLoadingSpinner: false,
                disableWeightSelection: false,
                disableMarketingCheckoutAgreements: true
            },
        }
    }

    console.log('Informacion sin agregar al JSON product: ',JSON.stringify(data));


    data.payload.products.push( { productId: product_id, priceId: "eighth_ounce", count: SelectedOption, } );

    console.log('Informacion ya agregada al json products: ', JSON.stringify(data));

    console.log("Llego hasta aqui");
    console.log("informacion del json", data)
    let frame = document.getElementById('jane-menu');
    frame.contentWindow.postMessage(data, '*');
    console.log("Se agrego al carrito");

}


function receiveMessage(event) {
    let payload = event.data && event.data.messageType;
    let messageType = event.data && event.data.messageType;

    if (messageType === "loadingEvent" && payload.name === "headlessAppLoaded"){
        console.log("Llego hasta aqui");
        console.log("informacion del json",event.data)
        let frame = document.getElementById('jane-menu');
        frame.contentWindow.postMessage(event.data, '*');
        console.log("Se agrego al carrito");
    }
}











