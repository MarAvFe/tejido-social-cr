---
name: doubt-driven-development
description: Before a non-trivial claim or decision stands, have a fresh-context reviewer try to disprove it. Use when publishing or correcting a factual statement about a real organization, person, law, event or date (who founded what, who took part, what a statute says); when a page's claim rests on a source you haven't re-read this session; when making an irreversible or structural change (moving published URLs, security of padron-backend, CI gates); or when the user asks to stress-test something. Not for typo fixes, renames or following an explicit instruction.
---

<!-- Adapted from addyosmani/agent-skills@bcab6a1, skills/doubt-driven-development (MIT, see ../THIRD_PARTY_NOTICES.md). Trimmed for a content-heavy static site; cross-model CLI and persona sections removed. -->

# Doubt-Driven Development

A confident answer is not a correct one. Long sessions quietly turn
assumptions into "facts". This skill makes a fresh-context reviewer, biased to
**disprove**, look at a claim before it ships.

This site's worst error so far was of exactly this kind: the CARS history said
the collective organized the ICE campaign, when it didn't exist yet. The text
was fluent, internally consistent and wrong, and nothing mechanical could have
caught it.

## When it applies

A claim is non-trivial when at least one holds:

- It states a fact about a real organization, person, law, date or event.
- It attributes an action, role or founding to someone ("X organized Y").
- It paraphrases a statute, directive or press report.
- Its correctness depends on context a future reader can't see.
- It is hard to undo once public (published URLs, deploys, the padrón).

Skip it for mechanical edits, formatting, file moves, and changes the user
dictated word for word.

## The cycle

```
- [ ] 1 CLAIM      wrote the claim + why it matters
- [ ] 2 EXTRACT    isolated the text + the sources it must satisfy
- [ ] 3 DOUBT      fresh-context reviewer, adversarial prompt
- [ ] 4 RECONCILE  classified every finding against the text
- [ ] 5 STOP       trivial findings, 3 cycles, or user says ship
```

**1. CLAIM.** Two or three lines: what the text asserts, and what breaks if
it's wrong ("a real collective is credited with a campaign it didn't run").

**2. EXTRACT.** The reviewer gets the **artifact** (the exact paragraph or
diff) and the **contract** (the sources it must be consistent with: press
links, the statute article, the user's own account quoted verbatim, the
ficha fields). Not your reasoning, not your conclusion.

**3. DOUBT.** Spawn a fresh subagent (Agent tool, general-purpose) with:

```
Adversarial review. Find what is wrong with this text.
Assume the author is overconfident. Look for:
- statements not supported by the sources given
- actions or roles attributed to the wrong organization or person
- dates, numbers or names that don't match the sources
- claims stated as settled that the sources leave open
- personal names of private individuals (the site never publishes them)
Do NOT validate. Do NOT summarize. List issues, or say explicitly that
you found none after checking every sentence.

ARTIFACT: <text>
CONTRACT: <sources>
```

Never pass the CLAIM; it biases the reviewer toward agreement.

**4. RECONCILE.** You're still the author. Re-read the text against each
finding and classify, first match wins:

1. **Contract gap**: the reviewer lacked a source you have. Add it, re-run.
2. **Valid**: change the text, re-loop.
3. **Trade-off**: real but accepted; say so to the user.
4. **Noise**: correct given context; note why.

**5. STOP** when a cycle returns only trivial findings, after 3 cycles
(escalate to the user instead of grinding), or when the user says ship.
Three unresolved cycles means the text isn't ready.

## Red flags

- Asking "is this good?" instead of "find what's wrong".
- Treating the reviewer's output as a verdict without re-reading the text.
- Doubting only after pushing to `main`; that's too late on this repo,
  where changes usually deploy directly.
- Two or more cycles with substantive findings and none classified valid:
  that's validation theater. Stop and tell the user.
