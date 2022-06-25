import { ethers } from 'ethers';
import {
  LensHubAbi,
  lensHubContrac,
  LensPeripheryAbi,
  LensPeripheryContract,
} from './config';
import { getSigner } from './ethers.service';

// lens contract info can all be found on the deployed
// contract address on polygon.
export const lensHub = new ethers.Contract(lensHubContrac, LensHubAbi, getSigner());

export const lensPeriphery = new ethers.Contract(
  LensPeripheryContract,
  LensPeripheryAbi,
  getSigner()
);
