# Review Journal

The cases below are the review handles I would use before changing the implementation.

The local checks classify each case as `ship`, `watch`, or `hold`. That gives the project a small review vocabulary that matches its networking focus without claiming live deployment or external usage.

## Cases

- `baseline`: `packet span`, score 185, lane `ship`
- `stress`: `retry pressure`, score 153, lane `ship`
- `edge`: `route drift`, score 138, lane `watch`
- `recovery`: `socket risk`, score 109, lane `watch`
- `stale`: `packet span`, score 210, lane `ship`

## Note

A future change should add new cases before it changes the scoring rule.
