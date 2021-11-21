import { FC } from "react";
import { useToys } from "../hooks/toys";
import { Toy } from "./toy";

export const NewToyList: FC = () => {
  const { isLoading: isLoadingToys, data: toys } = useToys();

  if (isLoadingToys) {
    return <div>Loading...</div>;
  }

  if (!toys) {
    return <div>No toys</div>;
  }

  return (
    <div>
      <ul>
        {toys.map((toy) => (
          <Toy key={toy} name={toy} />
        ))}
      </ul>
    </div>
  );
};
