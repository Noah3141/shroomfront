// src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
    id: number;
    title: string;
    description: string;
    ingredients: string[];
    image: string;
}

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor(private http: HttpClient) {}

    fetchProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(`https://api.sampleapis.com/coffee/hot`);
    }
}
