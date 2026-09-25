---
name: interview-me
description: Find out what the user actually wants before building, one question at a time with a guess attached, until you can predict their answers. Use when a request is missing who it's for, why now, what success looks like or the binding constraint ("add a padrón", "make a page for X"); when you notice yourself filling in requirements silently; or when the user says "interview me", "grill me" or "are we sure?". Not for unambiguous edits, factual questions or mechanical changes, and never in non-interactive runs.
---

<!-- Adapted from addyosmani/agent-skills@bcab6a1, skills/interview-me (MIT, see ../THIRD_PARTY_NOTICES.md). Trimmed; references to skills not vendored here removed. -->

# Interview Me

What people ask for and what they want differ. The cheapest moment to find
the gap is before anything is built. On this project the padrón is the
example: the request was "a CRUD table", the real need was "stop the list
circulating on WhatsApp and make it easy to reach affiliates", which led to a
different design (no bulk view, no export, sending instead of downloading).

## When it applies

- The ask is missing at least one of: **who** it's for, **why**, what
  **success** looks like, the binding **constraint**.
- The request is conventional rather than specific ("a dashboard", "a
  table") and unpacking it would mean guessing.
- Two reasonable values are in tension and the user hasn't picked one
  (convenience vs. privacy, speed vs. accuracy).

Not for: unambiguous edits, "how does X work" questions, mechanical changes,
or when the user asked for speed. Needs a live user; in a non-interactive run,
report the ambiguity as a blocker instead.

## The process

**1. Hypothesis with a confidence number.** One sentence of what you think
they want, plus 0–100%. Below ~70%, add what's missing on the same line.

**2. One question at a time, each with a guess.**

```
Q:     <one focused question>
GUESS: <your answer and the reasoning behind it>
```

Wait for the reaction before the next one. Batches get skimmed; later
questions often depend on earlier answers. Be visibly willing to be wrong,
and sometimes guess in a direction you expect pushback on, so a polite
"yes" isn't mistaken for agreement.

**3. Listen for "should want".** Best-practice talk ("scalable", "the
standard way", "I think I'm supposed to") is not a requirement. Ask: "If you
didn't have to justify this to anyone, what would you actually want?"

**4. Restate** when you can predict their answers to your next three
questions:

```
- Outcome:
- Who benefits:
- Why now:
- Success:
- Constraint:
- Out of scope:     (never skip this line)
Yes / no / refine?
```

**5. Explicit yes.** "Whatever you think", "sounds good" or "sure, let's
go" are not yes. Re-ask with two concrete options. When the user genuinely
doesn't know (as with voseo vs. ustedeo), give a recommendation with its main
trade-off, proceed on it, and make it cheap to reverse.

**6. Stop.** Deliver the confirmed restate and hand the next step back to
the user. Don't start building in the same turn.

## Red flags

- Three or more questions in one message.
- A question without a guess attached.
- Accepting "whatever you think" as a decision.
- Building before an explicit yes.
- Several rounds without confidence visibly rising: step back and say so.
