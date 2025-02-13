import { useContract, useNFTs } from "@thirdweb-dev/react";
import React from "react";
import Container from "../components/Container/Container";
import NFTGrid from "../components/NFT/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/contractAddresses";
import ProfilePage from "./profile/[address]";
import styles from "../styles/Profile.module.css";
import Link from "next/link";
import { Spinner } from "@chakra-ui/react"

export default function Buy() {
  // Load all of the NFTs from the NFT Collection
  const { contract } = useContract(NFT_COLLECTION_ADDRESS);
  const { data: data, isLoading: isLoading } = useNFTs(contract, {
    start: 0,
    count: 50,
  });
  const { data: data2, isLoading: isLoading2 } = useNFTs(contract, {
    start: 50,
    count: 100,
  });

  if (isLoading) {
    return (
      <div
        style={{
          width: "100%",
          diplay: "flex",
          alignItems: "center",
          textAlign: "center",
          marginBottom: "50%"
        }}
      >
        <h3> <Spinner size='lg' /></h3>
      </div>
    );
  }

  return (
    <Container maxWidth="md">
  
      <p>
       
      </p>

      <hr></hr>
      <NFTGrid
        data={data}
        isLoading={isLoading}
        emptyText={"Looks like There are no NFTs here."}
      />
      {onclick ? (
         <NFTGrid
         data={data}
         isLoading={isLoading}
         emptyText={"Looks like There are no NFTs here."}
       />
      ): (
        <>
        NEXT
        </>
      )}
      <div style={{ height: "50px" }}></div>

      <hr></hr>
      <div style={{ height: "50px" }}></div>
    </Container>
  );
}