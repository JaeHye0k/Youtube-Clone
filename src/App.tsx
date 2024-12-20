import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/layout/Layout";
import Error from "./components/common/Error";
import { ThemeProvider } from "styled-components";
import { useThemeStore } from "./stores/themeStore";
import { GlobalStyle } from "./style/global";
import MainPage from "./pages/MainPage";
import SearchResult from "./pages/SearchResult";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000,
            retry: 1,
            refetchOnWindowFocus: false,
        },
    },
});

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout>
                <MainPage />
            </Layout>
        ),
        errorElement: <Error />,
    },
    {
        path: "/login",
        element: <LoginPage />,
        errorElement: <Error />,
    },
    {
        path: "/join",
        element: <JoinPage />,
        errorElement: <Error />,
    },
    {
        path: "/results",
        element: (
            <Layout>
                <SearchResult />
            </Layout>
        ),
        errorElement: <Error />,
    },
]);

function App() {
    const { getTheme } = useThemeStore();

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={getTheme()}>
                <GlobalStyle />
                <RouterProvider router={router} />
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;
