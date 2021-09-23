/*export enum QuoteKind {
    Iconic = "Iconic Quote",
    Obscure = "Obscure Quote"
}*/

export interface Quote {
    ID: number
    Kind: string
    Quote: string
    Source: string
}