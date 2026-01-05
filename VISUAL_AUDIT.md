# Visual Styling Audit: Current Implementation vs Figma Export

## Control Buttons (`ControlButtons.tsx` vs `Controls.tsx`)

### Differences Found:
1. **Layout Structure**:
   - **Figma**: Save/Load buttons are in a separate row (`Row1`) below Play/Random/Clear
   - **Current**: All buttons are in a single row
   - **Impact**: Layout difference - Figma has 2 rows, current has 1 row

2. **Save Button Width**:
   - **Figma**: Fixed width `w-[154px]`
   - **Current**: Auto width (no fixed width)
   - **Impact**: Button sizing difference

3. **Interactive States**:
   - **Figma**: No hover/active states (static)
   - **Current**: Has `hover:scale-[1.02]`, `active:scale-[0.98]`, `hover:bg-[rgba(255,255,255,0.16)]`
   - **Impact**: Current has better UX, but not in Figma export

4. **Play Button Background**:
   - **Figma**: ViewBox `0 0 154 32` (wider)
   - **Current**: ViewBox `0 0 143 48` (taller, narrower)
   - **Impact**: Different gradient dimensions

## LED Interface (`LEDInterface.tsx` vs `Interface.tsx`)

### Differences Found:
1. **Visualizer**:
   - **Figma**: Empty placeholder (no bars)
   - **Current**: Dynamic bars based on frequency data
   - **Impact**: Current is functional, Figma is static

2. **Volume Control**:
   - **Figma**: Static display
   - **Current**: Interactive drag handler
   - **Impact**: Current is functional

3. **Tempo Display**:
   - **Figma**: Hardcoded "120"
   - **Current**: Dynamic `{tempo}` value
   - **Impact**: Current is functional

4. **Swing Display**:
   - **Figma**: Static bars (3px active, rest inactive)
   - **Current**: Dynamic bars based on swing value
   - **Impact**: Current is functional

## Sequencer Grid

### Differences Found:
1. **Cell Styling**:
   - **Current**: Has hover states (`hover:scale-105`, `active:scale-95`)
   - **Figma**: Static cells
   - **Impact**: Current has better UX

2. **Structural Beat Highlighting**:
   - **Current**: Every 4th step (0, 4, 8, 12) has different gradient
   - **Figma**: Similar pattern visible in hardcoded cells
   - **Impact**: Matches conceptually

## SFX Buttons (`SFXButtons.tsx`)

### Differences Found:
1. **HORN Button**:
   - **Figma**: Present in export
   - **Current**: Present but handler is stubbed
   - **Impact**: Needs implementation

2. **Interactive States**:
   - **Current**: Has `hover:bg-[rgba(255,255,255,0.16)]` transitions
   - **Figma**: Static
   - **Impact**: Current has better UX

## Phrases Component (`Phrases.tsx`)

### Differences Found:
1. **Queued Phrase Indicator**:
   - **Current**: Has `queuedPhrase` prop for visual feedback
   - **Figma**: No queued state (static)
   - **Impact**: Current has better UX

2. **Active Phrase Styling**:
   - **Current**: Shadow and gradient when active
   - **Figma**: Similar styling
   - **Impact**: Matches

## Summary

### Styling Matches:
- ✅ Color values (rgba values match)
- ✅ Font families (`PP_Neue_Montreal_Mono:Medium`)
- ✅ Border styles and opacity
- ✅ Spacing values (gap-[8px], padding values)
- ✅ Border radius values (rounded-[6px], etc.)

### Styling Differences:
- ⚠️ Layout: Control buttons row structure (Figma has 2 rows, current has 1)
- ⚠️ Save button width (Figma has fixed width)
- ⚠️ Play button gradient dimensions (different viewBox)
- ⚠️ Interactive states (current has hover/active, Figma doesn't)

### Functional Differences (Expected):
- ✅ Current has dynamic/interactive elements
- ✅ Current has hover states for better UX
- ✅ Current has functional visualizer

### Recommendations:
1. **Keep interactive states** - They improve UX
2. **Consider layout change** - Move Save/Load to second row if matching Figma exactly
3. **Fix Save button width** - Add `w-[154px]` to match Figma
4. **Verify Play button gradient** - Check if viewBox difference matters visually

