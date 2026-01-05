# Drag and Drop Testing Plan

## Note Drag Operations

### 1. Command+Click (Move Operation)

#### Test Cases:
1. **Basic Move**:
   - Cmd+Click on a step with notes (BASS or KEYS track)
   - Click on another step in the same track
   - **Expected**: Notes move from source to destination, source is cleared

2. **Move to Different Track**:
   - Cmd+Click on BASS track step 0 with notes
   - Click on KEYS track step 4
   - **Expected**: Notes appear on KEYS step 4, BASS step 0 is cleared

3. **Move to Same Position**:
   - Cmd+Click on step 5 with notes
   - Click on step 5 again
   - **Expected**: Notes remain, no change (or handled gracefully)

4. **Move to Occupied Step**:
   - Cmd+Click on step 2 with notes ["C3", "E3"]
   - Click on step 8 with notes ["G3"]
   - **Expected**: Step 8 notes replaced with ["C3", "E3"], step 2 cleared

5. **Cancel Move (Escape)**:
   - Cmd+Click on step 3 with notes
   - Press Escape
   - **Expected**: Notes restored to step 3, drag cancelled

6. **Cancel Move (Click Background)**:
   - Cmd+Click on step 1 with notes
   - Click outside sequencer grid
   - **Expected**: Notes restored to step 1, drag cancelled

### 2. Option+Click (Duplicate Operation)

#### Test Cases:
1. **Basic Duplicate**:
   - Option+Click on step 0 with notes
   - Click on step 8
   - **Expected**: Notes appear on step 8, step 0 still has original notes

2. **Multiple Duplicates**:
   - Option+Click on step 2 with notes
   - Click on step 4, then step 6, then step 8
   - **Expected**: All steps get copies, step 2 retains original

3. **Duplicate to Different Track**:
   - Option+Click on BASS step 0 with notes
   - Click on KEYS step 0
   - **Expected**: KEYS step 0 gets notes, BASS step 0 unchanged

4. **Cancel Duplicate**:
   - Option+Click on step 5 with notes
   - Press Escape
   - **Expected**: Drag cancelled, step 5 unchanged

### 3. Edge Cases

#### Test Cases:
1. **Drag from Empty Step**:
   - Cmd+Click on step with no notes
   - **Expected**: No drag starts, nothing happens

2. **Drag to Rhythm Track**:
   - Cmd+Click on BASS step with notes
   - Click on Kick track step
   - **Expected**: No drop (only works on melody tracks), drag continues

3. **Drag During Playback**:
   - Start playback
   - Cmd+Click on step with notes
   - Click on another step
   - **Expected**: Notes move, playback continues

4. **Rapid Drag Operations**:
   - Quickly Cmd+Click and drop multiple times
   - **Expected**: All operations complete correctly, no state corruption

5. **Drag with History**:
   - Make a change
   - Cmd+Click and move notes
   - Undo (Cmd+Z)
   - **Expected**: Notes return to original position

## Phrase Drag Operations

### 1. Option+Click Phrase (Duplicate Phrase)

#### Test Cases:
1. **Basic Phrase Duplicate**:
   - Option+Click on Phrase 1 (with data)
   - Click on Phrase 2 (empty)
   - **Expected**: Phrase 2 gets copy of Phrase 1, Phrase 1 unchanged

2. **Duplicate to Occupied Phrase**:
   - Option+Click on Phrase 1
   - Click on Phrase 3 (with existing data)
   - **Expected**: Phrase 3 replaced with Phrase 1 copy, Phrase 1 unchanged

3. **Duplicate to Active Phrase**:
   - Option+Click on Phrase 2
   - Click on Phrase 1 (currently active)
   - **Expected**: Phrase 1 replaced, becomes active

4. **Cancel Phrase Duplicate**:
   - Option+Click on Phrase 1
   - Press Escape or click background
   - **Expected**: Drag cancelled, no changes

5. **Phrase Duplicate During Playback**:
   - Start playback on Phrase 1
   - Option+Click on Phrase 2
   - Click on Phrase 3
   - **Expected**: Phrase 3 updated, playback continues on Phrase 1

## Code Logic Review

### handleDragStart (Cmd+Click Move)
- ✅ Checks if notes exist before starting drag
- ✅ Clears source step immediately (move operation)
- ✅ Sets draggedNote state with all necessary data
- ✅ Does NOT save to history (saves on drop)

**Potential Issue**: If user cancels, notes are already cleared. handleDragCancel restores them - ✅ Correct

### handleDuplicateStart (Option+Click Copy)
- ✅ Checks if notes exist before starting drag
- ✅ Does NOT clear source step (copy operation)
- ✅ Sets draggedNote state
- ✅ Correctly differentiates from move operation

### handleDragDrop
- ✅ Checks if draggedNote exists
- ✅ Only works on melody tracks (checked in SequencerGrid)
- ✅ Replaces target step notes
- ✅ Saves to history
- ✅ Clears drag state

**Potential Issue**: No check if target step already has notes - but this is intentional (replace behavior)

### handleDragCancel
- ✅ Checks if draggedNote exists
- ✅ Restores notes to original position
- ✅ Only restores if it was a move operation (Cmd+Click)
- ✅ Clears drag state

**Note**: handleDragCancel correctly handles both move and duplicate - for duplicate, cancel just clears drag state (source unchanged)

### handlePhraseClick
- ✅ Handles three modes: duplicate, drop, normal switch
- ✅ Saves current phrase before switching
- ✅ Handles queued phrase switching during playback
- ✅ Prevents duplicate to same phrase

## Keyboard Shortcuts

### Test Cases:
1. **Escape During Drag**:
   - Start any drag operation
   - Press Escape
   - **Expected**: Drag cancelled, state restored if move operation

2. **Escape Not During Drag**:
   - No drag active
   - Press Escape
   - **Expected**: No effect (or handled gracefully)

## Visual Feedback

### Test Cases:
1. **Drag Ghost Visibility**:
   - Start drag operation
   - **Expected**: DragGhost component follows cursor

2. **Phrase Drag Ghost**:
   - Option+Click phrase
   - **Expected**: PhraseDragGhost shows phrase number

3. **Cursor Position Tracking**:
   - Move mouse during drag
   - **Expected**: Ghost follows cursor smoothly

## Summary

### ✅ Code Logic Verified:
1. Move operation (Cmd+Click) correctly clears source
2. Duplicate operation (Option+Click) preserves source
3. Cancel operation restores state correctly
4. Phrase duplication works correctly
5. History is saved on drop, not on start

### ⚠️ Edge Cases to Test:
1. Rapid drag operations
2. Drag during playback
3. Drag with undo/redo
4. Drag to same position
5. Drag from/to different tracks

### Recommendations:
1. Add visual indicator when hovering over valid drop target
2. Consider preventing drop on same position for move operation
3. Add confirmation for overwriting existing notes (optional)
4. Test with very long notes arrays
5. Test with special characters in chord names

