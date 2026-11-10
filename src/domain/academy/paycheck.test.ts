import { describe, expect, it } from "vitest";

import { calculatePaycheck } from "./paycheck";

describe("calculatePaycheck", () => {
  it.each([
    [0, 0, 0, 0, 2400],
    [3, 90, 45, 135, 2310],
    [6, 180, 90, 270, 2220],
    [10, 300, 90, 390, 2100],
  ])(
    "calculates the fictional scenario at %i%%",
    (percent, employee, match, total, takeHome) => {
      expect(calculatePaycheck(percent)).toEqual({
        employeeContributionPercent: percent,
        employeeContribution: employee,
        employerMatch: match,
        totalRetirementContribution: total,
        estimatedTakeHome: takeHome,
      });
    },
  );

  it.each([-1, 101, Number.NaN])("rejects invalid contribution %s", (percent) => {
    expect(() => calculatePaycheck(percent)).toThrow(RangeError);
  });
});
