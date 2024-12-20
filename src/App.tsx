import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/layout/Layout";
import Error from "./components/common/Error";
import { ThemeProvider } from "styled-components";
import { useThemeStore } from "./stores/themeStore";
import { GlobalStyle } from "./style/global";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import SearchResult from "./pages/SearchResult";
import WatchPage from './pages/WatchPage';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000,
            retry: 1,
            refetchOnWindowFocus: false
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
        element: <Login />,
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
    {
        path: "/watch",
        element: (
            <Layout>
                <WatchPage />
            </Layout>
        ),
        errorElement: <Error />,
    },
    {
        path: "/watch/:videoId",
        element: <WatchPage />,
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
