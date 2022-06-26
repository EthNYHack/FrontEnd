import React from "react";
import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/e4fa10cddeaf401698a3ae52121cdd79');
const user = 'crisgarner.eth'
const resolver = await provider.getResolver(
  user);
 const nft = 'https://bafybeicvyvlcrvj7zlo4tbqek2s7jfssllba52vtuc4lxzdvjvbwm27yo4.ipfs.infura-ipfs.io/'
 const bg = 'https://ipfs.infura.io/ipfs/QmTuqB8RgqGi3qgWA6Xr3yRx88pUcqX56fB4TCJfgZ78YQ'

export const MyProfile = () => {

 
    return(
        <div className="flex flex-col flex-auto min-w-0">
        <div className="flex flex-col shadow bg-card ">
          <div><img src={bg} alt="Cover image" className="h-40 lg:h-80 object-cover profile"/></div>
          <div className="flex flex-col flex-0 lg:flex-row items-center max-w-5xl w-full mx-auto p-6 lg:h-18 bg-card">
            <div className="-mt-20 lg:mt-22 rounded-full">
            <img src={nft} className="w-32 h-32 rounded-full ring-4 ring-bg-card"/>
            </div>
            <div className="flex flex-col items-center lg:items-start mt-4 lg:mt-0 lg:ml-8">
              <div className="text-lg font-bold leading-none">{user}</div>
              <div className="text-lg font-bold leading-none"></div>
              <div className="text-secondary"></div>
            </div>
            <div className="flex flex-col items-center lg:items-start mt-4 lg:mt-0 lg:ml-8">
              <div className="text-lg font-bold leading-none"></div>
            </div>
      
      
            <div className="hidden lg:flex h-8 mx-8 border-l-2"></div>
            <div className="flex items-center mt-8 mb-4 lg:m-0 lg:ml-auto space-x-6">
              <a className="text-secondary"></a>
            </div>
          </div>
        </div>
        <div className="flex flex-auto w-full max-w-5xl mx-auto p sm:p-8 pt-2">
          <div className=" lg:flex flex-col items-start mr-8">
            <div className="flex flex-col max-w-80 w-full p-8  ">
              <div className="text-2xl font-semibold leading-tight">Certifications </div>
              <div className="mt-4">
                We display the recent activity related to Certifications recognitions, level ups about carrer, verifications about course completation and more.
              </div>
              <hr className="w-full border-t my-6"/>
              <div className="flex flex-col my-3">
                <div className="flex items-center">
                  <span className="leading-none">
                  </span>
                </div>
                <div className="flex items-center mt-4">
                  
                  <span className="leading-none">
      
                  </span>
                </div>
                <div className="flex items-center mt-4">
                 
                  <span className="leading-none">
      
                  </span>
                </div>
              </div>
            </div>
      
      
          </div>
          <div className="flex flex-col items-start">
            <div 
              className="flex flex-col md:flex-row justify-between max-w-80 md:max-w-160 w-full p-8 pb-4 ">
              <div className="flex flex-col flex-auto order-2 md:order-1">
                <div className="text-2xl font-semibold leading-tight"></div>
              </div>
      <br/>
              <div className="order-1 md:order-2 w-full md:w-40 md:ml-6 mb-8 md:mb-4 rounded-lg overflow-hidden">
                <img src="assets/coverg.jpeg" alt="Card image"
                     className="w-full h-full object-cover"/></div>
            </div>
          </div>
        </div>
      
        <br/>
      
      
      </div>
        
        );



};




