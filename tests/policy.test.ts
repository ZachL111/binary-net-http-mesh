function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { classify, score, Signal } from "../src/policy";

type FixtureCase = Signal & { name: string; score: number; decision: "accept" | "review" };

const cases: FixtureCase[] = [
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
  equal(score(item), item.score);
  equal(classify(item), item.decision);
}
