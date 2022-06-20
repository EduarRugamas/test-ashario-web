import {searchClient} from '../config/config.js';
const urlParams = new URLSearchParams(window.location.search);

const objectId = urlParams.get('objectID');
const indexName = 'menu-products-demo';
const index = searchClient.initIndex(indexName);

console.log('el objecto id', objectId);

index.search('', {
    filters: `objectID:${objectId}`
}).then( ({hits} )=> {
    // console.log(hits);

    console.log(hits);
    // usando el hits[0].name etc
    const contenedor = document.getElementById('product-details');

    const product_id = hits[0].product_id;

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
                                    <div class="product-gallery owl-carousel owl-theme border mb-3 p-3" data-slider-id="1">
                                        <div class="owl-stage-outer">
                                            <div class="owl-item active" style=" width: 431px; margin-right: 10px; ">
                                                <div class="item"> 
                                                    <img src="${hits[0].image_urls}" alt="" class="img-fluid">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <img src="${hits[0].image_urls}" class="img-fluid" alt="">
                                        </div>
                                        <div class="item">
                                             <img src="${hits[0].image_urls}" class="img-fluid" alt="">
                                        </div>
                                        <div class="item">
                                            <img src="${hits[0].image_urls}" class="img-fluid" alt="">
                                        </div>
                                        <div class="item">
                                            <img src="${hits[0].image_urls}" class="img-fluid" alt="">
                                        </div>
                                    </div>
                                    <div class="owl-thumbs d-flex justify-content-center" data-slider-id="1">
                                        <button class="owl-thumb-item">
                                            <img src="${hits[0].image_urls}" class="" alt="">
                                        </button>
                                        <button class="owl-thumb-item">
                                            <img src="${hits[0].image_urls}" class="" alt="">
                                        </button>
                                        <button class="owl-thumb-item">
                                            <img src="${hits[0].image_urls}" class="" alt="">
                                        </button>
                                        <button class="owl-thumb-item">
                                            <img src="${hits[0].image_urls}" class="" alt="">
                                        </button>
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
<!--                                    <div class="col">-->
<!--                                        <label class="form-label">Size</label>-->
<!--                                            <select class="form-select form-select-sm">-->
<!--                                                <option>S</option>-->
<!--                                                <option>M</option>-->
<!--                                                <option>L</option>-->
<!--                                                <option>XS</option>-->
<!--                                                <option>XL</option>-->
<!--                                            </select>-->
<!--                                    </div>-->
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
                                <a href="javascript:;" class="btn btn-white btn-ecomm"  onclick="javascript:add_to_cart(product_id)" id="add-to-cart"><i class="bx bxs-cart-add"></i>Add to Cart</a> 
                                <a href="javascript:;" class="btn btn-light btn-ecomm"><i class="bx bx-heart"></i>Add to Wishlist</a>
                            </div>
                            <hr/>
<!--                            <div class="product-sharing">-->
<!--                                <ul class="list-inline">-->
<!--                                    <li class="list-inline-item">-->
<!--                                        <a href="javascript:;"><i class='bx bxl-facebook'></i></a>-->
<!--                                    </li>-->
<!--                                    <li class="list-inline-item">-->
<!--                                        <a href="javascript:;"><i class='bx bxl-linkedin'></i></a>-->
<!--                                    </li>-->
<!--                                    <li class="list-inline-item">-->
<!--                                        <a href="javascript:;"><i class='bx bxl-twitter'></i></a>-->
<!--                                    </li>-->
<!--                                    <li class="list-inline-item">-->
<!--                                        <a href="javascript:;"><i class='bx bxl-instagram'></i></a>-->
<!--                                    </li>-->
<!--                                    <li class="list-inline-item">-->
<!--                                        <a href="javascript:;"><i class='bx bxl-google'></i></a>-->
<!--                                    </li>-->
<!--                                </ul>-->
<!--                            </div>-->
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
       </section>
    `;

});

function add_to_cart(productId) {

    $(document).ready(function () {
        $('#add-to-cart').click( function () {
            $('#quantity').each( function () {
                let option = $(this).find('select').val();
                console.log(option)

                let new_data = data.payload.products.push( { productId: productId, priceId: "eighth_ounce", count: option, } );
                console.log('agregando la nueva innformacion de un producto ', JSON.stringify(new_data));

            });
        });
    });


    var data = {
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
                email: "johnsmith@example.com",
                externalId: "12345",
            },
            storeId: 68,
            headlessPartnerName: "Your Company Name",
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
                redirectUrl: "https://yourwebsite.html",
                disableAuthFeatures: true,
                disableLoadingSpinner: false,
                disableWeightSelection: false,
                disableMarketingCheckoutAgreements: true
            },
        }
    }

    console.log(JSON.stringify(data.payload.products));
}



