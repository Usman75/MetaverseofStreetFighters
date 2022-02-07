const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
      ["Guru", "Chela", "Cheli"],       // Names
      ["https://i.imgur.com/gxrMMlH.png", // Images
      "https://i.imgur.com/GqLBEnC.png", 
      "https://i.imgur.com/zHHqOqY.png"],
      [100, 250, 300],                    // HP values
      [100, 50, 25],
      "Iron Golem", // Boss name
      "https://i.imgur.com/ljY0pGI.png", // Boss image
      10000, // Boss hp
      50 // Boss attack damage                     // Attack damage values
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);



    // Get the value of the NFT's URI.
    // let returnedTokenUri = await gameContract.tokenURI(1);
    //     console.log("Token URI:", returnedTokenUri);

        // let txn;
        // txn = await gameContract.mintCharacterNFT(0);
        // await txn.wait();
        // console.log("Minted NFT #1");
      
        // txn = await gameContract.mintCharacterNFT(1);
        // await txn.wait();
        // console.log("Minted NFT #2");
      
        // txn = await gameContract.mintCharacterNFT(2);
        // await txn.wait();
        // console.log("Minted NFT #3");
      
        // txn = await gameContract.mintCharacterNFT(1);
        // await txn.wait();
        // console.log("Minted NFT #4");
      
        // console.log("Done deploying and minting!");
      
  };

  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();