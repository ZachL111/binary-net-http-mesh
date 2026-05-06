import * as assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 66, slack: 39, drag: 13, confidence: 53 };
assert.equal(domainReviewScore(item), 185);
assert.equal(domainReviewLane(item), "ship");
