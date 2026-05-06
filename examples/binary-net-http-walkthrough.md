# Binary Net HTTP Mesh Walkthrough

The fixture is intentionally compact, so the review starts with the cases that pull farthest apart.

| Case | Focus | Score | Lane |
| --- | --- | ---: | --- |
| baseline | packet span | 185 | ship |
| stress | retry pressure | 153 | ship |
| edge | route drift | 138 | watch |
| recovery | socket risk | 109 | watch |
| stale | packet span | 210 | ship |

Start with `stale` and `recovery`. They create the widest contrast in this repository's fixture set, which makes them better review anchors than the middle cases.

The next useful expansion would be a malformed fixture around retry pressure and socket risk.
