import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private products: Product[] = [
    new Product(1, 'Product1', 2, 2, 'This is product 1', 'Foundation'),
    new Product(2, 'Product2', 3, 3, 'This is product 1', 'Foundation'),
    new Product(3, 'Product3', 4, 4.5, 'This is product 1', 'Foundation'),
    new Product(4, 'Product4', 5, 3.5, 'This is product 1', 'Foundation'),
    new Product(5, 'Product5', 5, 5, 'This is product 1', 'Foundation'),
    new Product(6, 'Product6', 6, 1, 'This is product 1', 'Foundation')
  ]
  private comments: Comment[] = [
    new Comment(1, 1, '2017-02-02 22:22:22', 'Lily', 3, 'It is a good product!'),
    new Comment(2, 1, '2017-02-02 22:22:22', 'Lily', 2, 'It is a good product!'),
    new Comment(3, 1, '2017-02-02 22:22:22', 'Lily', 4.5, 'It is a good product!'),
    new Comment(4, 2, '2017-02-02 22:22:22', 'Lily', 4.3, 'It is a good product!'),
    new Comment(5, 3, '2017-02-02 22:22:22', 'Lily', 5, 'It is a good product!'),
    new Comment(6, 3, '2017-02-02 22:22:22', 'Lily', 1, 'It is a good product!')
  ]

  constructor() { }

  getProducts() : Product[] {
    return this.products
  }
  getProduct(id: number) : Product {
    return this.products.find((product) => product.id == id)
  }
  getCommentsForProductId(id: number) : Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id)
  }

}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public category: string
  ) { }
}

export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) { }
}
