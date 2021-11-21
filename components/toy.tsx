import { FC } from "react";
import { useToyMutation } from "../hooks/toys";
type Props = {
  name: string;
};
export const Toy: FC<Props> = ({ name }) => {
  const {
    mutate: sendToy,
    isLoading: isSendingToy,
    isSuccess: isToySent,
  } = useToyMutation();

  return (
    <li>
      {name} |{" "}
      {isToySent ? (
        "Toy sent!"
      ) : (
        <a
          href="#"
          onClick={() => {
            sendToy({ toy: name });
          }}
        >
          Send toy
        </a>
      )}
      {isSendingToy && <> | Sending toy...</>}
    </li>
  );
};
