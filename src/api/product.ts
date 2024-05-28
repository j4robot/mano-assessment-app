

import data from './db.json';
import { ProductDto, ProductItemDto } from './models/product';

const products = data as ProductDto;

export async function getProducts(): Promise<ProductItemDto[]> {
    return products.data.items;
}

export async function getProductById(productId: number): Promise<ProductItemDto | undefined> {
    const product = products.data.items.find(item => item.id == productId)
    return product;
}