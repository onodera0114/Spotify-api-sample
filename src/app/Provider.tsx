import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { queryConfig } from "@/lib/reactQuery";
import { MainError } from "@/components/errors/Main";
import { Loading } from "@/components/layouts/Loading";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      })
  );

  return (
    <React.Suspense fallback={<Loading />}>
      <ErrorBoundary FallbackComponent={MainError}>
        <QueryClientProvider client={queryClient}>
          {import.meta.env.DEV && <ReactQueryDevtools />}
          {children}
        </QueryClientProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
