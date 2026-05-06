function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 66, slack: 39, drag: 13, confidence: 53 };
equal(domainReviewScore(item), 185);
equal(domainReviewLane(item), "ship");
