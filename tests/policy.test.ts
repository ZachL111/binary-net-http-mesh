import * as assert from "node:assert/strict";
import { classify, score, Signal } from "../src/policy";

const cases: Array<Signal & { score: number; decision: "accept" | "review" }> = [
  {
    "name": "case_1",
    "demand": 64,
    "capacity": 81,
    "latency": 26,
    "risk": 10,
    "weight": 9,
    "score": 88,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 92,
    "capacity": 103,
    "latency": 23,
    "risk": 25,
    "weight": 9,
    "score": 70,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 82,
    "capacity": 107,
    "latency": 27,
    "risk": 8,
    "weight": 6,
    "score": 152,
    "decision": "accept"
  }
];

for (const item of cases) {
  assert.equal(score(item), item.score);
  assert.equal(classify(item), item.decision);
}
