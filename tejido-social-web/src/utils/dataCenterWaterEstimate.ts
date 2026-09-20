/**
 * Rough water-consumption estimator for data centers that don't publish
 * their own figures, used on the Central America data centers map.
 *
 * Formula: liters = capacityMW * 1000 (kW/MW) * hoursElapsed * wueLPerKWh.
 * This treats nameplate/announced capacity as a sustained average draw
 * (the same simplification the Limón jobs dossier already uses when it
 * equates 200 MW with "13.5% of Costa Rica's electricity consumption") —
 * it is a upper-bound-ish estimate, not a metered reading. WUE (Water
 * Usage Effectiveness, L/kWh) varies by cooling technology and climate;
 * see the article's methodology callout for the source and range.
 */

const MS_PER_HOUR = 1000 * 60 * 60;

export interface WaterEstimateInput {
  capacityMW: number;
  wueLPerKWh: number;
  since: Date;
  asOf?: Date;
}

/** Hours between `since` and `asOf` (defaults to now), floored at 0 for a future `since`. */
export function hoursElapsed(since: Date, asOf: Date = new Date()): number {
  return Math.max(0, (asOf.getTime() - since.getTime()) / MS_PER_HOUR);
}

/** Estimated liters consumed, assuming sustained draw at `capacityMW` from `since` through `asOf`. */
export function estimateLiters({capacityMW, wueLPerKWh, since, asOf}: WaterEstimateInput): number {
  const hours = hoursElapsed(since, asOf);
  return capacityMW * 1000 * hours * wueLPerKWh;
}

/** Formats a liter count as millions of liters, e.g. 2_264_000_000 -> "2 264". */
export function formatMillionLiters(liters: number): string {
  const millions = liters / 1_000_000;
  return new Intl.NumberFormat('es-CR', {maximumFractionDigits: 0}).format(millions);
}
