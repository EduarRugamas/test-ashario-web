import { searchClient } from '../config/config.js'

const search = instantsearch({
    indexName: 'menu-products-demo',
    searchClient
});


search.addWidgets([
    instantsearch.widgets.searchBox({
        container: '#searchBox',
        placeholder: 'Search for Products',
        cssClasses: {
            input: 'form-control bg-transparent mt-5'
        }
    }),

    instantsearch.widgets.hits({
        container: '#container-hits',
        templates: {
            item:
            `
            <div class="col">
                                           <div class="card rounded-0 product-card">
                                               
                                                <img src="../assets/images/products/01.png" class="card-img-top"
                                                     alt="...">
                                                <div class="card-body">
                                                    <div class="product-info">
                                                        <a href="javascript:;">
                                                            <p class="product-catergory font-13 mb-1">Catergory Name</p>
                                                        </a>
                                                        <a href="javascript:;">
                                                            <h6 class="product-name mb-2">Product Short Name</h6>
                                                        </a>
                                                        <div class="d-flex align-items-center">
                                                            <div class="mb-1 product-price"><span
                                                                    class="me-1 text-decoration-line-through">$99.00</span>
                                                                <span class="fs-5">$49.00</span>
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
                                                                <a href="javascript:;" class="btn btn-dark btn-ecomm">
                                                                    <i class="bx bxs-cart-add"></i>Add to Cart</a>
                                                                <a href="javascript:;" class="btn btn-light btn-ecomm"
                                                                   data-bs-toggle="modal"
                                                                   data-bs-target="#QuickViewProduct"><i
                                                                        class="bx bx-zoom-in"></i>Quick View</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>  
            </div>
            

            
            `
        }
    })

]);

search.start();
