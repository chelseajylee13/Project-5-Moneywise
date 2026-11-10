import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import { AppRouter } from "./AppRouter";

describe("AppRouter", () => {
  beforeEach(() => {
    window.location.hash = "#/";
  });

  it("renders the Moneywise landing route", () => {
    render(<AppRouter />);

    expect(
      screen.getByRole("heading", { name: "Meet the way you think about money." }),
    ).toBeInTheDocument();
  });

  it("provides a recovery path for an unknown route", () => {
    window.location.hash = "#/not-a-route";
    render(<AppRouter />);

    expect(screen.getByRole("heading", { name: "That page is not available." })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Return home" })).toHaveAttribute("href", "#/");
  });
});
