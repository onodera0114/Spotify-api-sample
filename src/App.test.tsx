import { render, screen } from "@testing-library/react";
import { user } from "../vitest.setup";
import { App } from "./App";

beforeEach(() => {
  render(<App />);
});

test("Vite + Reactが表示されている", () => {
  expect(screen.getByText("Vite + React")).toBeInTheDocument();
});
test("count is 0ボタンが表示されている", () => {
  expect(screen.getByRole("button", { name: "count is 0" })).toBeInTheDocument();
});
test("count is 0をクリックするとインクリメントされる", async () => {
  await user.click(screen.getByRole("button", { name: "count is 0" }));
  expect(screen.getByRole("button", { name: "count is 1" })).toBeInTheDocument();
});
