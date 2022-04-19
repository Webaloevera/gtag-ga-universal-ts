export const GA_TRACKING_ID: any = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

export function useGoogleAnalyticsEvents() {

    const pageview = (url: string): void => {
        gtag('config', GA_TRACKING_ID, {
            page_path: url,
        });
    };

    const trackAuth = (action: string): void => {
        gtag('event', action);
    };

    const trackSearch = (word: string): void => {
        gtag('event', 'search', {
            search_term: word
        });
    };

    const trackRefund = (id: string | number) => {
        gtag('event', 'refund', { "transaction_id": `${id}` });
    };

    const trackCheckoutStep = (step: number): void => {
        gtag("event", "set_checkout_option", {
            checkout_step: step,
        });
    };

    const trackBeginCheckout = (checkout: any): void => {
        if (checkout !== null) {
            gtag("event", "begin_checkout", {
                items: checkout?.orderLines?.map((product: any, index: number) => {
                    return {
                        id: '',
                        name: '',
                        list_name: '',
                        discount: '',
                        list_position: '',
                        quantity: '',
                        price: '',
                    }
                }),
            });
        }
    };

    const trackDeliveryStep = (method: string, checkout: any): void => {
        gtag('event', 'checkout_progress', {
            checkout_step: 2,
            checkout_option: method,
            currency: '',
            value: '',
            items: checkout?.orderLines?.map((product: any, index: number) => {
                return {
                    id: '',
                    name: '',
                    list_name: '',
                    list_position: '',
                    currency: '',
                    quantity: '',
                    price: '',
                }
            }),
        });
    };


    const trackPaymentStep = (method: number, checkout: any): void => {
        gtag('event', 'checkout_progress', {
            checkout_step: 3,
            checkout_option: '',
            items: checkout?.orderLines?.map((product: any, index: number) => {
                return {
                    id: '',
                    name: '',
                    list_name: '',
                    list_position: index + 1,
                    quantity: '',
                    price: '',
                }
            }),
        });
    };

    const trackPaymentStepPurchase = (checkout: any): void => {
        gtag('event', 'purchase', {
            transaction_id: '',
            affiliation: "Quickpay",
            value: '',
            tax: '',
            shipping: '',
            items: checkout?.orderLines?.map((product: any, index: number) => {
                return {
                    id: '',
                    name: '',
                    list_name: '',
                    discount: '',
                    list_position: index + 1,
                    quantity: '',
                    price: '',
                }
            }),
        });
    };
    const trackAddToCart = (product: any): void => {
        gtag("event", "add_to_cart", {
            currency: '',
            items: [{
                id: '',
                name: '',
                brand: '',
                category: '',
                quantity: '',
                price: '',
            }],
            value: ''
        });
    };

    const trackAddToFavorites = (product: any): void => {
        gtag("event", "add_to_wishlist", {
            currency: '',
            items: [{
                id: '',
                name: '',
                quantity: '',
                list_name: 'Favorites',
                price: '',
            }],
            value: '',
        });
    };

    const trackRemoveCartItem = (product: any): void => {
        gtag("event", "remove_from_cart", {
            currency: '',
            items: [{
                id: '',
                name: '',
                list_name: 'cart list',
                brand: '',
                category: '',
                quantity: '',
                price: '',
            }],
            value: ''
        });
    };

    const trackViewItem = (product: any, category: any): void => {
        gtag('event', 'view_item', {
            event_label: 'view product',
            items: [{
                id: '',
                name: '',
                list_name: '',
                brand: '',
                category: '',
                quantity: '',
                price: '',
            }],
        });
    }

    const trackSelectContent = (product: any, label: string): void => {
        gtag('event', 'select_content', {
            event_label: label,
            content_type: label,
            items: [{
                id: '',
                name: '',
                discount: '',
                quantity: 1,
                price: '',
            }],
        });
    }


    const trackViewItemList = (products: any) => {
        gtag('event', 'view_item_list', {
            event_label: 'view products',
            items: products?.documents.map((product: any, index: number) => {
                return {
                    id: '',
                    name: '',
                    category: '',
                    list_position: '',
                    quantity: '',
                    price: '',
                }
            }),
        });
    }


    return {
        pageview,
        trackAddToCart,
        trackRemoveCartItem,
        trackViewItem,
        trackAuth,
        trackRefund,
        trackAddToFavorites,
        trackViewItemList,
        trackSelectContent,
        trackBeginCheckout,
        trackDeliveryStep,
        trackPaymentStep,
        trackPaymentStepPurchase,
        trackSearch,
        trackCheckoutStep
    };
}
