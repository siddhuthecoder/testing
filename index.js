import { ethers } from "./ethers-5.2.esm.min.js";


const connectButton=document.getElementById("connectButton");
const fundButton=document.getElementById("fundButton");
connectButton.onclick=connect;
fundButton.onclick=fund;


async function connect() {
  if (typeof window.ethereum != undefined) {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    connectButton.innerHTML = "Connected";
  } else {
    console.log("NO I cant see metamask");
    connectButton.innerHTML =
      "Please Install MetaMask";
  } 

}
async function fund(ethAmount){
   console.log(`Funding with ${ethAmount}...`);
   if (typeof window.ethereum!=="undefined ") {
      
   }
}
 