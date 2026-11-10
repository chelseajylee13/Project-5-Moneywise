import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { AppRouter } from "./AppRouter";

describe("Moneywise core journey", () => {
  beforeEach(() => {
    window.location.hash = "#/assessment/1";
    window.scrollTo = vi.fn();
  });

  it("blocks an unanswered question and explains how to recover", async () => {
    const user = userEvent.setup();
    render(<AppRouter />);

    await user.click(screen.getByRole("button", { name: "Next" }));

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Choose a response before continuing.",
    );
    expect(window.location.hash).toBe("#/assessment/1");
  });

  it("preserves an edited answer when navigating back", async () => {
    const user = userEvent.setup();
    render(<AppRouter />);

    await user.click(screen.getByRole("radio", { name: "Strongly agree" }));
    await user.click(screen.getByRole("button", { name: "Next" }));
    await user.click(screen.getByRole("button", { name: "Back" }));

    expect(screen.getByRole("radio", { name: "Strongly agree" })).toBeChecked();
  });

  it("supports selecting a response from the keyboard", async () => {
    const user = userEvent.setup();
    render(<AppRouter />);

    const firstOption = screen.getByRole("radio", { name: "Strongly disagree" });
    firstOption.focus();
    await user.keyboard("[Space]");

    expect(firstOption).toBeChecked();
  });

  it("completes all 16 questions and reaches results and recommendations", async () => {
    const user = userEvent.setup();
    render(<AppRouter />);

    for (let index = 0; index < 16; index += 1) {
      const options = screen.getAllByRole("radio");
      await user.click(options[0]);
      await user.click(
        screen.getByRole("button", {
          name: index === 15 ? "See my result" : "Next",
        }),
      );
    }

    expect(
      screen.getByRole("heading", { name: "The Method Maker" }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("img")).toHaveLength(4);
    expect(
      screen.getByText("How was my result calculated?"),
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("link", { name: "Continue to my learning path" }),
    );

    expect(
      screen.getByRole("heading", { name: "Start where your responses connect." }),
    ).toBeInTheDocument();
    expect(screen.getByText("Your First Paycheck & Employer Match")).toBeInTheDocument();
  });
});
