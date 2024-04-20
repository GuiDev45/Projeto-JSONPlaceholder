import { QueryClient, QueryClientProvider } from "react-query";
import "./global.css";
import TesteHome from "./pages/TesteHome";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>App</h1>
        <TesteHome />
      </div>
    </QueryClientProvider>
  );
}
