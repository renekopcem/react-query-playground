import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from "react-query";
import { Toy } from "../types/toys";

export const useToys = (
  options?: UseQueryOptions<Toy[], unknown, Toy[], "toys">
) =>
  useQuery(
    "toys",
    () =>
      new Promise<Toy[]>((resolve) => {
        console.info("loading toys");
        return setTimeout(() => resolve(["Teddy", "Woody"]), 1000);
      }),
    options
  );

export const useToyMutation = (
  options?: UseMutationOptions<undefined, unknown, { toy: Toy }, unknown>
) => {
  // const queryClient = useQueryClient();

  return useMutation(
    ({ toy }: { toy: Toy }) =>
      new Promise<undefined>((resolve) => {
        console.info(`sending ${toy}`);
        setTimeout(() => resolve(undefined), 1000);
      }),
    {
      ...options,
      onMutate: ({ toy }) => {
        // queryClient.setQueryData<Toy[]>("toys", (prevToys) =>
        //   prevToys ? prevToys.filter((t) => t !== toy) : []
        // );
      },
    }
  );
};
