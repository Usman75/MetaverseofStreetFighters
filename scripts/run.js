
    const main = async () => {
        const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
        const gameContract = await gameContractFactory.deploy(
          ["Guru", "Chela", "Cheli"],       // Names
          ["https://i.imgur.com/gxrMMlH.png", // Images
          "https://i.imgur.com/GqLBEnC.png", 
          "https://i.imgur.com/zHHqOqY.png"],
          [300, 250, 100],                    // HP values
          [100, 50, 25],
          "Iron Golem", // Boss name
      "https://i.imgur.com/ljY0pGI.png", // Boss image
      10000, // Boss hp
      50 // Boss attack damage                     // Attack damage values
                           // Attack damage values
        );
        await gameContract.deployed();
        console.log("Contract deployed to:", gameContract.address);

        let txn;
        // We only have three characters.
        // an NFT w/ the character at index 2 of our array.
        txn = await gameContract.mintCharacterNFT(0);
            await txn.wait();

        // Get the value of the NFT's URI.
        // let returnedTokenUri = await gameContract.tokenURI(1);
        //     console.log("Token URI:", returnedTokenUri);

            
        // txn = await gameContract.mintCharacterNFT(0);
        //     await txn.wait();

        txn = await gameContract.attackBoss();
        await txn.wait();

        txn = await gameContract.attackBoss();
await txn.wait();

txn = await gameContract.attackBoss();
await txn.wait();

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