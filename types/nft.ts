export type trait = "attack" | "health" | "speed";


export type NftAttribute={
  trait_type: trait; 
  value: string
}

export type NftMeta = {
  name:  string,
  description: string,
  image: string,
  attributes: NftAttribute[]
}