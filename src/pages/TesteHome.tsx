import { useUsersData } from "../services/useUsersData";
import { TUser } from "../types/TUsersData";

export default function TesteHome() {
  const { data, isLoading, isError } = useUsersData();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data.</p>;

  return (
    <div>
      <h1>Teste Home</h1>
      <ul>
        {data?.data.map((user: TUser) => (
          <li key={user.id}>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Cidade: {user.address.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
