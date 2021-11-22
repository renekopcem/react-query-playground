import React, { FC } from "react";
import { useToys } from "../hooks/toys";
import { Toy } from "./toy";

export const ToyList: FC = () => {
  const {
    isLoading: isLoadingToys,
    data: toys,
    isFetching: isRefreshingToys,
    refetch: refetchToys,
  } = useToys();

  if (isLoadingToys) {
    return <div>Loading...</div>;
  }

  if (!toys) {
    return <div>No toys</div>;
  }

  return (
    <div>
      {isRefreshingToys ? <div>Refreshing...</div> : null}
      <ul>
        {toys.map((toy) => (
          <Toy name={toy} key={toy} />
        ))}
      </ul>
      <div>
        <a
          href="#"
          onClick={() => {
            refetchToys();
          }}
        >
          Refresh Toys
        </a>
      </div>
    </div>
  );
};
