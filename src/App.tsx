import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode, useState } from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import SearchParams from "./components/SearchParams";
import AdoptedPetContext from "./context/AdoptedPetContext.ts";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
});

function App() {
    // const [adoptedPet] = useState(null);

    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                {/* <AdoptedPetContext.Provider value={adoptedPet}> */}
                <div>
                    <Link to="/" className="home-page">
                        <h1>Adopt Me!</h1>
                    </Link>
                </div>
                <Routes>
                    <Route
                        path="/"
                        element={<SearchParams></SearchParams>}
                    ></Route>
                    <Route
                        path="/details/:id"
                        element={<Details></Details>}
                    ></Route>
                </Routes>
                {/* </AdoptedPetContext.Provider> */}
            </QueryClientProvider>
        </BrowserRouter>
    );
}

const container = document.getElementById("root")!;
const root = ReactDOMClient.createRoot(container);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
