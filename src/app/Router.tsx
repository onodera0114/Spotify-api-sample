import { useMemo } from "react";
import { LoaderFunctionArgs, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "@/app/routes/Root";
import { QueryClient, useQueryClient } from "@tanstack/react-query";

// export const createAppRouter = (queryClient: QueryClient): ReturnType<typeof createBrowserRouter> =>
export const createAppRouter = (queryClient: QueryClient): ReturnType<typeof createBrowserRouter> =>
  createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          lazy: async (): Promise<{ Component: React.ComponentType<Record<string, unknown>> }> => {
            const { Home } = await import("@/app/routes/Home");
            return { Component: Home };
          },
        },
        {
          path: "search",
          children: [
            {
              path: "track",
              lazy: async (): Promise<{ Component: React.ComponentType<Record<string, unknown>> }> => {
                const { SearchTrack } = await import("@/app/routes/search/Track");
                return { Component: SearchTrack };
              },
            },
            {
              path: "artist",
              lazy: async (): Promise<{ Component: React.ComponentType<Record<string, unknown>> }> => {
                const { SearchArtist } = await import("@/app/routes/search/Artist");
                return { Component: SearchArtist };
              },
            },
            {
              path: "album",
              lazy: async (): Promise<{ Component: React.ComponentType<Record<string, unknown>> }> => {
                const { SearchAlbum } = await import("@/app/routes/search/Album");
                return { Component: SearchAlbum };
              },
            },
          ],
        },
        {
          path: "track/:trackId",
          lazy: async (): Promise<{ Component: React.ComponentType<Record<string, unknown>> }> => {
            const { Track } = await import("@/app/routes/Track");
            return { Component: Track };
          },
          loader: async (args: LoaderFunctionArgs): Promise<unknown> => {
            const { trackLoader } = await import("@/app/routes/Track");
            return trackLoader(queryClient)(args);
          },
        },
        {
          path: "artist/:artistId",
          lazy: async (): Promise<{ Component: React.ComponentType<Record<string, unknown>> }> => {
            const { Artist } = await import("@/app/routes/Artist");
            return { Component: Artist };
          },
          loader: async (args: LoaderFunctionArgs): Promise<unknown> => {
            const { artistLoader } = await import("@/app/routes/Artist");
            return artistLoader(queryClient)(args);
          },
        },
        {
          path: "album/:albumId",
          lazy: async (): Promise<{ Component: React.ComponentType<Record<string, unknown>> }> => {
            const { Album } = await import("@/app/routes/Album");
            return { Component: Album };
          },
        },
      ],
    },
    {
      path: "*",
      lazy: async (): Promise<{ Component: React.ComponentType<Record<string, unknown>> }> => {
        const { NotFound } = await import("@/app/routes/NotFound");
        return { Component: NotFound };
      },
    },
  ]);

export const AppRouter = (): JSX.Element => {
  const queryClient = useQueryClient();
  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

  return <RouterProvider router={router} />;
};
