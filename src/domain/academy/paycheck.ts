export interface PaycheckAssumptions {
  readonly monthlyGrossPay: number;
  readonly illustrativeWithholding: number;
  readonly benefitsDeduction: number;
  readonly employerMatchRate: number;
  readonly employerMatchLimitPercent: number;
}

export interface PaycheckResult {
  readonly employeeContributionPercent: number;
  readonly employeeContribution: number;
  readonly employerMatch: number;
  readonly totalRetirementContribution: number;
  readonly estimatedTakeHome: number;
}

export const paycheckAssumptions: PaycheckAssumptions = {
  monthlyGrossPay: 3000,
  illustrativeWithholding: 450,
  benefitsDeduction: 150,
  employerMatchRate: 0.5,
  employerMatchLimitPercent: 6,
};

function roundCurrency(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

export function calculatePaycheck(
  employeeContributionPercent: number,
  assumptions: PaycheckAssumptions = paycheckAssumptions,
): PaycheckResult {
  if (
    !Number.isFinite(employeeContributionPercent) ||
    employeeContributionPercent < 0 ||
    employeeContributionPercent > 100
  ) {
    throw new RangeError("Contribution percent must be between 0 and 100.");
  }

  const employeeContribution =
    assumptions.monthlyGrossPay * (employeeContributionPercent / 100);
  const matchableContribution = Math.min(
    employeeContribution,
    assumptions.monthlyGrossPay * (assumptions.employerMatchLimitPercent / 100),
  );
  const employerMatch = matchableContribution * assumptions.employerMatchRate;

  return {
    employeeContributionPercent,
    employeeContribution: roundCurrency(employeeContribution),
    employerMatch: roundCurrency(employerMatch),
    totalRetirementContribution: roundCurrency(employeeContribution + employerMatch),
    estimatedTakeHome: roundCurrency(
      assumptions.monthlyGrossPay -
        assumptions.illustrativeWithholding -
        assumptions.benefitsDeduction -
        employeeContribution,
    ),
  };
}
