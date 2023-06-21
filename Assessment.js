
// create a variable to hold your NFT's
let NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, eyeColor, hairColor, shirtType, bling ) {
    const NFT = 
         {
          name: name,
          eyeColor: eyeColor,
          hairColor: hairColor,
          shirtType: shirtType,
          bling: bling,
        };
      
        NFTs.push(NFT);
      }
      

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0; i < NFTs.length; i++){
        console.log("\n Name:" + NFTs[i].name);
        console.log(" Eye color:" + NFTs[i].eyeColor);
        console.log(" Hair color:" + NFTs[i].hairColor);
        console.log(" Shirt type:" + NFTs[i].shirtType);
        console.log(" Bling:" + NFTs[i].bling);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n Total supply: " + NFTs.length)
}

// call your functions below this line
mintNFT("ariel", "blue","red", " blouse", " diamond earring" );
mintNFT("jasmine", "brown","black", " stripped shirt", " golden neckless" );
mintNFT("patrick", "grey","blond", " polo shirt", " diamond neckless" );
listNFTs ();
getTotalSupply();
