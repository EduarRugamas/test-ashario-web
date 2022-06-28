import { searchClient } from '../config/config.js';

data = {
    messageType: 'buildCart',
    payload: {
        products: [],
        user: {
            firstName: 'John',
            lastName: 'Smith',
            birthDate: '1988-04-20',
            phone: '5551112222',
            email: 'johnsmith@gmail.com',
            externalId: '12345',
        },
        cognitoToken: undefined,
        storeId: 68,
        headlessPartnerName: 'Partner Name',
        headlessCheckoutPartnerId: '1234-asdf-5678-ghjk', // provided by Jane
        options: {
            theme: {
                themeColor: "#004f89",
                navigationColor: "#ffc03c",
                ctaTextColor: "#ffffff",
                backgroundColor: '#f3e9db',
                font: {
                    fontFamily: 'Gilroy',
                    url: '//db.onlinewebfonts.com/t/1dc8ecd8056a5ea7aa7de1db42b5b639.woff2',
                    color: '#111C4E'
                },
                calloutBackground: '#FFC03C',
                calloutTextColor: '#111C4E',
                buttonBorderRadius: '24px',
            },
            redirectUrl: 'https://harmonious-mooncake-eb8276.netlify.app/views/shop-grid-left-sidebar.html',
            disableWeightSelection: false,// setting this to true will disable changing weight selections
            disableLoadingSpinner: false,
            disableAuthFeatures: true, //setting this to false will allow users to sign in but only in the checkout iFrame
            disablePrepayment: false,
            kiosk: false // set to true to enable kiosk mode
        },
    },
}

window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
    let payload = event.data && event.data.payload;
    let messageType = event.data && event.data.messageType;

    if (messageType === "loadingEvent" && payload.name === "headlessAppLoaded") {
        let frame = document.getElementById("jane-menu");
        frame.contentWindow.postMessage(data, "*");
    }
}
