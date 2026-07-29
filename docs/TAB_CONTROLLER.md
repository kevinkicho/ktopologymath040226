# TabController (opt-in lifecycle harness)

Thin shared helper for module tab switching. It does **not** replace draw code, RAF loops, or speed math.

## What it preserves

| Concern | Owner |
|--------|--------|
| `window.animSpeed` | Module sliders + `TabController.setSpeed` + `auto-start.js` rAF scaler |
| Auto-start which animation | Module `autoStart(id)` callback |
| Cancel on leave | Module `cancelAll()` (+ optional `registerStop`) |
| Canvas drawing | Module `enter(id)` / existing `draw*` |

## What it standardizes

1. **cancelAll** before leaving a tab  
2. **setActive** (panels + `.active` + `aria-selected`)  
3. **enter** (resize + first draw)  
4. **autoStart** on next animation frame (skips if user switched again)

## Opt-in usage

```html
<script src="lib/tab-controller.js"></script>
```

```js
const tc = TabController.create('15_quaternions', {
  initial: 0,
  cancelAll: _cancelAllAnims15,
  setActive(id) {
    // show panel id, toggle tab chrome
    TabController.showIndexedPanels(id, NUM_TABS, 'panel', 'flex');
    TabController.setTabChrome(document.querySelectorAll('.tab'), id);
  },
  enter(id) {
    activeTab = id;
    redrawTab();
  },
  autoStart(id) {
    autoStartAnimations(); // existing module function
  },
});

function switchTab(t) {
  tc.go(t);
}
```

To disable auto-start for a module: pass `autoStart: false`.

## Migration policy

- **Do not** mass-migrate all 63 modules in one change.
- Opt in when fixing lifecycle bugs or expanding a module.
- Keep Playwright guardrails green: `npm run test:all-guards` (or at least `npm run test:lifecycle` + `npm run test:all-canvases`)

## Tests

```bash
npm run test:all-guards         # full hard suite (recommended pre-commit)
npm run test:lifecycle          # all modules
npm run test:lifecycle:15       # quaternions + TabController unit checks
npm run test:all-canvases       # every tab · every canvas
# or filter by name:
# npx playwright test tests/tab-lifecycle.spec.js -g "03_mandel|15_quat"
```

Hard fails (lifecycle):
- `pageerror` / `ReferenceError` on load or tab switch
- duplicate tab labels within a module
- opt-in modules missing `window.TabController`
- majority of canvas tabs fully blank after settle

Hard fails (all-canvases): every canvas in the active panel zero-sized, nested under `display:none`, or fully blank after settle — see [`TESTING.md`](TESTING.md).

Does **not** fail if animations are paused or auto-start is off — only lifecycle safety.
