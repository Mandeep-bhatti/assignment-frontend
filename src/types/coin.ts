export interface Coin {
    name:string;
    symbol:string;
    currentPrice:number;
    marketCap:string;
    lastUpdatedDate:Date | string;
    change24:number;
    image?:string
} 