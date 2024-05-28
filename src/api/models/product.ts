export type ProductItemDto = {
    id: number;
    title: string;
    brand: null;
    sap_id: string;
    sku: string;
    class_name: string;
    created_at: string;
    favorite: boolean;
    categories: {
        id: number;
        parent_category_id: number;
        title: string;
        category_type: string;
        class_name: string;
        created_at: string;
        images: {
            id: number;
            sort_order: null;
            attachment_type: string;
            class_name: string;
            created_at: string;
            thumbnail: string;
            large: string;
            small: string;
            extra_small: string;
            original: string;
            extra_props: {
                identified: boolean;
            };
        }[];
    }[];
    original_price: string;
    discounted_price: string;
    price: string;
    quantity: number;
    max_allowed_quantity: number;
    shelf_zone: string;
    shelf_section: string;
    storage_shelf_zone: string;
    storage_shelf_section: string;
    sap_quantity: number;
    store_id: number;
    tax_percentage: string;
    properties: never[];
    url: string;
    store_product_id: number;
    images: {
        id: number;
        sort_order: null;
        attachment_type: string;
        class_name: string;
        created_at: string;
        thumbnail: string;
        large: string;
        small: string;
        extra_small: string;
        original: string;
        extra_props: {
            identified: boolean;
        };
    }[]
};

export type ProductDto = {
    data: {
        items: ProductItemDto[]
    }
};