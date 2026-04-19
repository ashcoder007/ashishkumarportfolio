import { render, screen, within } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  window.history.pushState({}, "", "/");
});

test("renders the portfolio home page and navigation", () => {
  render(<App />);

  const primaryNav = screen.getByRole("navigation", { name: /primary/i });

  expect(within(primaryNav).getByRole("link", { name: /profile/i })).toBeInTheDocument();
  expect(within(primaryNav).getByRole("link", { name: /^projects$/i })).toBeInTheDocument();
  expect(within(primaryNav).getByRole("link", { name: /certificates/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /ashish kumar/i })).toBeInTheDocument();
});

test("renders the projects page when loaded directly on its route", () => {
  window.history.pushState({}, "", "/projects");

  render(<App />);

  expect(screen.getByRole("heading", { name: /project showcase/i })).toBeInTheDocument();
  expect(screen.getByText(/tirth saathi/i)).toBeInTheDocument();
});
