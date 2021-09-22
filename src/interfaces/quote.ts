export enum QuoteKind {
    Iconic = "Iconic Quote",
    Obscure = "Obscure Quote"
}

export interface Quote {
    ID: number
    Kind: QuoteKind
    Quote: string
    Source: string
}