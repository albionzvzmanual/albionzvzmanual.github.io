# Caller Decision Framework

[Jump to the caller decision diagram](#caller-evidence-diagram){ .tactical-jump }

## Core rule

A caller turns information into executable decisions.

Good calling is not only finding clumps. It is matching roster, terrain, enemy style, cooldown state, and objective pressure into the next safest useful action.

## The caller's repeated questions

1. What is our formation trying to do?
2. What is the enemy trying to force?
3. Which front is lethal next?
4. Which side has spent cooldowns?
5. Which terrain matters right now?
6. Are we hitting, stabilizing, crossing, chasing, rotating, or resetting?
7. What happens after our engage?

## The next-step rule

Every engage should have a next idea:

- push through
- spread and Q/W
- back out
- hold the choke
- cross the bridge
- switch fronts
- punish the counter
- mount/chase

A good first call with no next step can still collapse.

## Roster reality

Callers must call the roster they have, not the perfect roster in theory.

Ask:

- Do we have enough healers connected?
- Are supports reliable enough for this crossing?
- Can DPS hit this timing?
- Are tanks playing forward enough to create safety?
- Is this strategy above the roster's current maturity?

## Common caller mistakes

- calling a ranged formation like a melee flood formation
- taking terrain the roster cannot execute on
- switching fronts before stabilizing
- overcommitting because the enemy survived a bad risk once
- reading total deaths but not role deaths
- ignoring the next enemy counter path

## Worked example: a visible clump beyond support reach

**Situation:** enemy frontliners are grouped beyond a corner. Friendly damage can reach the corner, but the tail and one healing group are still crossing behind you. A scout last saw a small enemy group approaching the far exit and has since lost sight of it.

| What you know | How it affects the decision |
| --- | --- |
| **Observed:** the visible front turns away. The tail is still crossing. | There may be room to move at the corner, while the tail still needs cover. |
| **Inferred:** the front may be giving up ground. | A short advance could keep pressure on it. The turn does not establish that it has spent its tools. |
| **Unresolved:** the group last seen on the side route may still be moving toward the exit. | If it reaches the tail, it could cut the covered return. Check its current position before spending the cover that can answer it. |

**Decision:** finish crossing under cover, keep pressure on what is reachable and ask the scout to check the exit. This keeps the objective within reach while protecting against a costly possibility. Base the allocation of cover on the earlier sighting and the exposure of the tail. If waiting would miss the objective, consider a limited advance that the available cover can support. Name the tradeoff and keep a route for recovery.

**What changes the call:**

- **Advance after useful new evidence.** The scout sees the side group moving away and the tail's healer confirms reach. Recheck the target, timing and return before ordering the hit or advance.
- **Maintain the limited plan.** The scout still has no sight of the exit and existing cover still works. Finish what you can do from this position. Reassess when another report arrives or waiting begins to cost the objective.
- **Change the call.** The side group enters the return lane, or the assigned healer loses reach. Shift the next action to an alternate covered route or a reachable recovery position while it is still available.

<figure class="tactical-figure" id="caller-evidence-diagram" aria-labelledby="caller-evidence-diagram-title" tabindex="-1">
  <figcaption>
    <strong id="caller-evidence-diagram-title">What new evidence changes the call?</strong>
    <span>Hypothetical crossing. The first panel shows the information available now. The second compares three possible updates to the same limited plan.</span>
  </figcaption>
  <div class="tactical-panels">
    <img src="../../assets/diagrams/caller-known.svg" width="360" height="300" alt="The visible front turns away. It may yield ground. A different enemy group was last seen on the side route. The exit is unseen, and the tail still needs a covered return.">
    <img src="../../assets/diagrams/caller-branches.svg" width="360" height="300" alt="Advance if the flank is seen leaving and the tail has cover. Maintain a limited crossing if the exit remains unseen and current cover holds. Change the call if the return is cut or healing is lost.">
  </div>
  <ul class="tactical-key" role="list" aria-label="Diagram key">
    <li><i class="key-ally" aria-hidden="true"></i>L lead · T tail</li>
    <li><i class="key-enemy" aria-hidden="true"></i>Observed enemy</li>
    <li><i class="key-last-known" aria-hidden="true"></i>Last-known enemy position</li>
    <li><i class="key-inference" aria-hidden="true"></i>Credible inference</li>
    <li><i class="key-uncertainty" aria-hidden="true"></i>? Unseen exit</li>
    <li><i class="key-return" aria-hidden="true"></i>Covered return</li>
  </ul>
  <details class="tactical-enlarge">
    <summary>View larger panels</summary>
    <p>Focus a panel and use the arrow keys to scroll, or swipe sideways on a narrow screen.</p>
    <div class="tactical-zoom-scroll" role="region" aria-label="Enlarged panel A: observations, last-known position, inference and unknown exit" tabindex="0">
      <img src="../../assets/diagrams/caller-known.svg" loading="lazy" width="360" height="300" alt="The visible front turns away. It may yield ground. A different enemy group was last seen on the side route. The exit is unseen, and the tail still needs a covered return.">
    </div>
    <div class="tactical-zoom-scroll" role="region" aria-label="Enlarged panel B: three decisions after the next report" tabindex="0">
      <img src="../../assets/diagrams/caller-branches.svg" loading="lazy" width="360" height="300" alt="Advance if the flank is seen leaving and the tail has cover. Maintain a limited crossing if the exit remains unseen and current cover holds. Change the call if the return is cut or healing is lost.">
    </div>
  </details>
  <details class="tactical-text">
    <summary>Read the diagram in words</summary>
    <p><strong>A · Start with the limited plan.</strong> The front turning away is observed. It may be giving up ground, but its remaining tools are unknown. A second group was last seen near the side route. Its current position near the exit is unknown. Cover the tail and ask the scout to check while keeping reachable pressure.</p>
    <p><strong>B · Update when the evidence changes.</strong> Advance after the flank is seen moving away and the tail can be covered, provided the hit or approach and return still work. Finish the covered crossing if there is still no sight of the exit and waiting leaves enough time. If enemies cut the return or the healer loses reach, change the call toward a covered fallback while it is available.</p>
    <p><strong>Decide.</strong> If waiting would miss the objective, weigh a limited advance against the consequences of losing the return. Name what existing cover can actually support. Urgency changes the cost of waiting, not the evidence.</p>
  </details>
</figure>

**Review:** at each decision, name what was observed, what was inferred and what remained unknown. Ask which fact would change the call and what delaying would cost. Judge the choice using what the caller knew at the time.

## Training prompt

Review caller macro separately from player execution:

- Was the call reasonable with available information?
- Did the roster have the tools and positioning to execute it?
- Did players fail the call, or did the call ask for something impossible?
- What should the next call have been?

## Decide what cannot wait

First check the next threat, the reachable route and the allies who can cover it. If one of those is unknown, make a reversible call and request the missing report. Review roster fit and long-term plans between contacts.

## Related pages

- [Caller / Officers](../roles/caller-officers.md)
- [Fight Flow](../foundations/fight-flow.md)
- [Terrain Decides Calls](../terrain-objectives/terrain-decides-calls.md)
