export const data = {
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