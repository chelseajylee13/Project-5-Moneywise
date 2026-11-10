import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { FirstPaycheckScreen } from "./FirstPaycheckScreen";

describe("FirstPaycheckScreen", () => {
  it("updates contributions, match, and take-home pay from the range control", async () => {
    render(
      <MemoryRouter>
        <FirstPaycheckScreen />
      </MemoryRouter>,
    );

    const slider = screen.getByRole("slider", { name: /Employee contribution/ });
    expect(slider).toHaveValue("6");
    expect(screen.getByText("$90")).toBeInTheDocument();
    expect(screen.getByText("$270")).toBeInTheDocument();
    expect(screen.getByText("$2,220")).toBeInTheDocument();

    fireEvent.change(slider, { target: { value: "10" } });

    expect(slider).toHaveValue("10");
    expect(screen.getByText("$390")).toBeInTheDocument();
    expect(screen.getByText("$2,100")).toBeInTheDocument();
  });
});
