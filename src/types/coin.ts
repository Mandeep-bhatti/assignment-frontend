export interface Coin {
    coinId:string;
    name:string;
    symbol:string;
    currentPrice:number;
    marketCap:string;
    lastUpdatedDate:Date | string;
    change24h:number;
    image?:string
} 