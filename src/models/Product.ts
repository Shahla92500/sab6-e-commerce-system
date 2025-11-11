
export class Product {
    id?: number;
    title: string;
    price: number;
    category: string;
    discountPercentage: number;

    constructor (id:number, title: string, price: number,category: string, discountPercentage: number) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.category = category;
        this. discountPercentage = discountPercentage;
    }

 //defining the methods for Product class:

    displayDetails(): string {
        return `(title: ${this.title}) -category: ${this.category} costs $${this.price.toFixed(2)}.`;
    }
    getDiscount(percentage:number): number {
        return this.price * percentage/100;
        // returns disounted price
    }
    getPriceWithDiscount(discount:number): number {     
        return (this.price - discount);
        // returns disounted price
    }
    getPriceWithTax(taxRate:number): number {
        return (this.price * (taxRate + 1));
    }

}