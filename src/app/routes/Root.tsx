import { Outlet } from "react-router-dom";

export const Root = (): JSX.Element => {
  return (
    <>
      <h1>ルート</h1>
      <Outlet />
    </>
  );
};
