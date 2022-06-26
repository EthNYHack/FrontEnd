import React from "react";
import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { GET_PROFILES } from "@/queries/profile/get-profiles";

import { DoesFollow } from "@/components/lens/profile";
import { Avatar } from "@/components/elements/Avatar";

export const ProfilePage = () => {
  let { handle } = useParams();

  const {
    data: profileData,
    loading,
    error,
  } = useQuery(GET_PROFILES, {
    variables: {
      request: { handles: [handle] },
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  const profile = profileData.profiles.items[0];
  console.log("profile", profile);

  if (!profile) return <div>No profile found for this handle</div>;
  return (
    <div className="flex flex-col flex-auto min-w-0">
  <div className="flex flex-col shadow bg-card ">
    <div><img src="../../assets/cover.jpeg" alt="Cover image" className="h-40 lg:h-80 object-cover profile"/></div>
    <div className="flex flex-col flex-0 lg:flex-row items-center max-w-5xl w-full mx-auto p-6 lg:h-18 bg-card">
      <div className="-mt-20 lg:mt-22 rounded-full">
      <Avatar profile={profile} />
      </div>
      <div className="flex flex-col items-center lg:items-start mt-4 lg:mt-0 lg:ml-8">
        <div className="text-lg font-bold leading-none">{profile.name}</div>
        <div className="text-lg font-bold leading-none">{profile.handle}</div>
        <div className="text-secondary">{profile.bio}</div>
      </div>
      <div className="flex flex-col items-center lg:items-start mt-4 lg:mt-0 lg:ml-8">
        <div className="text-lg font-bold leading-none">Loading ....</div>
      </div>


      <div className="hidden lg:flex h-8 mx-8 border-l-2"></div>
      <div className="flex items-center mt-8 mb-4 lg:m-0 lg:ml-auto space-x-6">
        <a className="font-medium" > Home </a>
        <a className="text-secondary">Edit Profile</a>
      </div>
    </div>
  </div>
  <div className="flex flex-auto w-full max-w-5xl mx-auto p sm:p-8 pt-2">
    <div className="hidden lg:flex flex-col items-start mr-8">
      <div className="flex flex-col max-w-80 w-full p-8  ">
        <div className="text-2xl font-semibold leading-tight  ">Your Participation</div>
        <div className="mt-4">
          We display the recent activity related to give feedback about regulations and rules Remember all the comments and feedback are stored in more than one public blockchain
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
          <img src="assets/images/id.png" alt="Card cover image"
               className="w-full h-full object-cover"/></div>
      </div>
    </div>
  </div>

  <br/>


</div>

  );
};
