export class Product{
    id:any;
    name: string;
  price: any;
  imageUrl: string;
  description: string;

  constructor(){
    this.id=null;
    this.name='';
    this.price=null;
    this.imageUrl='';
    this.description='';

  }
}
export const PRODUCTS: Product[ ] = [
  { id: 1,price:2344, name: 'Nike', imageUrl: 'assets/nike.png',description:'this is brand shoe. produced by  nike company'},
  { id: 2, price:234 ,name:'Puma', imageUrl: '../assets/puma.png',description:'this is brand new puma shoe produced puma company'},
  { id: 3, price:2199,name: 'fila', imageUrl: '/assets/fila.png',description:'this is brand new fila shoe prduced by fila company'}
];
