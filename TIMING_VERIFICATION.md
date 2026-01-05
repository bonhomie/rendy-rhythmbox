# Audio Timing Verification

## Swing Calculation Analysis

### Current Implementation (lines 702-712 in App.tsx)

```typescript
const isOddStep = stepIndex % 2 === 1;
const swingDelay = isOddStep ? (baseStepDuration * swingAmount) : 0;
const nextStepDuration = baseStepDuration + swingDelay;

const actualDuration = (stepIndex % 2 === 0 && stepIndex > 0) 
  ? baseStepDuration - (baseStepDuration * swingAmount * 0.5)
  : nextStepDuration;
```

### Analysis:
1. **Odd steps (1, 3, 5, 7...)**: Delayed by `swingAmount` - ✅ Correct
2. **Even steps (0, 2, 4, 6...)**: 
   - Step 0: Uses `baseStepDuration` (no compensation) - ✅ Correct (first step)
   - Steps 2, 4, 6...: Subtracts `swingAmount * 0.5` - ⚠️ **Potential Issue**

### Issue Identified:
The compensation on even steps uses `0.5` multiplier, but this may not maintain perfect loop timing. 

**Expected behavior for swing:**
- If odd step is delayed by `X`, the following even step should be advanced by `X` to keep the pair's total duration constant
- Current: Even step is shortened by `X * 0.5`, which means the pair's total duration increases by `X * 0.5`

**Recommendation:**
- Change line 711 to: `baseStepDuration - (baseStepDuration * swingAmount)` 
- This would make even steps shorter by the full swing amount, keeping pairs constant

**However:** The current implementation may be intentional to create a "pushed" feel. Need to verify against Figma prototype behavior.

## Step Scheduling Verification

### Current Implementation (lines 714-719)

```typescript
nextStepTime += actualDuration;
stepIndex = (stepIndex + 1) % 16;

const delay = (nextStepTime - audioEngineRef.current!.getCurrentTime()) * 1000;
intervalRef.current = window.setTimeout(scheduleNextStep, Math.max(0, delay));
```

### Analysis:
- ✅ Uses `getCurrentTime()` for precise scheduling
- ✅ Calculates delay in milliseconds correctly
- ✅ Uses `Math.max(0, delay)` to prevent negative delays
- ✅ Properly wraps stepIndex with modulo 16

**Status:** ✅ Correct implementation

## Phrase Switching During Playback

### Current Implementation (lines 536-550)

```typescript
if (stepIndex === 0 && queuedPhraseRef.current !== null) {
  const newPhraseId = queuedPhraseRef.current;
  
  setPhrases(prev => {
    const newTracks = JSON.parse(JSON.stringify(prev[newPhraseId]));
    tracksRef.current = newTracks; // Update ref immediately for playback
    setTracks(newTracks); // Update state for UI
    return prev;
  });
  
  setActivePhrase(newPhraseId);
  setQueuedPhrase(null);
}
```

### Analysis:
- ✅ Switches at step 0 (start of loop) - correct
- ✅ Updates `tracksRef.current` immediately before playing sounds - correct
- ✅ Updates state for UI - correct
- ✅ Clears queued phrase - correct

**Status:** ✅ Correct implementation

## Arpeggiator Timing

### Current Implementation (lines 626-649)

```typescript
const rateMultiplier = arpRate === '1/16' ? 1 : arpRate === '1/8' ? 2 : 4;
const arpNoteInterval = (60 / currentTempo) / 4 * rateMultiplier;
const noteTime = now + (idx * arpNoteInterval);
```

### Analysis:
- ✅ `1/16` = 1x base step duration - correct
- ✅ `1/8` = 2x base step duration - correct  
- ✅ `1/4` = 4x base step duration - correct
- ✅ Uses `tempoRef.current` to get current tempo - correct
- ✅ Schedules notes relative to `now` - correct

**Status:** ✅ Correct implementation

## Summary

### ✅ Verified Correct:
1. Step scheduling mechanism
2. Phrase switching timing
3. Arpeggiator rate calculations

### ⚠️ Needs Verification:
1. Swing compensation math (even step shortening)
   - Current: `swingAmount * 0.5`
   - Suggested: `swingAmount` (full compensation)
   - **Action:** Test both and verify against Figma prototype feel

### Recommendations:
1. Test swing feel at different values (0%, 8%, 16%, 32%, 64%)
2. Verify loop timing remains constant over multiple cycles
3. Compare against Figma prototype if possible
4. Consider making swing compensation configurable if current behavior is intentional

