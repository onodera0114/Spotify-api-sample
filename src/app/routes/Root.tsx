import { Header } from "@/components/layouts/Header";
import { Outlet } from "react-router-dom";

export const Root = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};
