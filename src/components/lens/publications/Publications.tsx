import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { EXPLORE_PUBLICATIONS } from "@/queries/explore-publications";

import { Avatar } from "@/components/elements/Avatar";

interface PublicationType {
  id: string;
  profile: any;
  metadata: {
    name: string;
    description: string;
    content: string;
    image: string;
    media: any;
  };
  stats: {
    totalAmountOfMirrors: number;
    totalAmountOfCollects: number;
    totalAmountOfComments: number;
  };
  createdAt: string;
  appId: string;
}

export const Publications = () => {
  let navigate = useNavigate();
  const { data, loading, error } = useQuery(EXPLORE_PUBLICATIONS, {
    variables: {
      request: {
        sortCriteria: "LATEST",
        limit: 20,
      },
    },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  // console.log(data);

  return (
    <div className="flex-auto p-6 sm:p-10">
      <h1 className="text-xl font-bold text-center"></h1>
      {data && data.explorePublications.items && (
        <>
          {data.explorePublications.items.map(
            (item: PublicationType, index: number) => (
              <div
                key={index}
                className="flex flex-col items-center max-w-80 w-full p-8 pb-6 card"
              >
                <div className="flex flex-col items-center max-w-80 w-full p-8 pb-6">
                <div className="p-6 -mt-20 lg:mt-22 rounded-full">
      <Avatar profile={item.profile} />
      </div>
                  <div className="text-2xl font-semibold leading-tight text-center mt-8">
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-semibold text-gray-900 -mt-1">
                        {item.profile.name}
                      </h2>
                      <small className="text-sm text-gray-700">
                        {item.createdAt}
                      </small>
                    </div>
                    <p>@{item.profile.handle}</p>

                    <p className="mt-3 text-gray-700 text-sm">
                      {item.metadata.content.toString()}
                    </p>

                    <div className="mt-4 flex items-center">
                      <div className="flex  text-gray-700 text-sm mr-8">
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                          />
                        </svg>
                        <span>{item.stats.totalAmountOfComments}</span>
                      </div>
                     
                    </div>
                    <button onClick={() => navigate(`/profile/${item.profile.handle}`)} className='w-full border-2 p-1 rounded text-gray-700 uppercase font-semibold text-lg hover:bg-gray-200'children='See'/>
                  </div>
                </div>
              </div>
            )
          )}
        </>
      )}
    </div>
  );
};
