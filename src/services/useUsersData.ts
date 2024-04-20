import { useQuery } from "react-query";
import { getUsersData } from "../api/apiJsonplaceholder";

export function useUsersData() {
  const query = useQuery({
    queryKey: "usersData",
    queryFn: getUsersData,
  });
  return query;
}
