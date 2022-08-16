/* eslint-disable @next/next/no-img-element */
import types from "next/types"
import { FunctionComponent } from "react"
import { NftMeta } from "../../../types/nft"
import NFTItem from "../item"

type NFTListProps = {
  nfts:NftMeta[]
}

 const NFTList:FunctionComponent<NFTListProps> = ({nfts}) => {
  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      {nfts.map(nft=>
        <div key={nft.image} className="flex flex-col rounded-lg shadow-lg overflow-hidden ">
          <NFTItem
            item={nft}
          />
        </div>)}
    </div> 
  )
 }

 export default NFTList