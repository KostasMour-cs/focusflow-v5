# FocusFlow v4.9.97 — Modular Structure

## File Structure

```
focusflow/
├── index.html              # Main HTML (no inline CSS or JS)
├── css/
│   └── styles.css          # All application styles
├── js/
│   ├── app.js              # Constants, global state (db/T), save/load, data export/import, session restore
│   ├── timer.js            # Pomodoro timer, phases, streak, journal, focus mode
│   ├── dashboard.js        # Dashboard tabs, heatmap, week chart, pie chart, day notes
│   ├── subjects.js         # Subject CRUD, subject detail view, notes
│   ├── history.js          # History rendering, session delete, recalcStats
│   ├── achievements.js     # Achievement checks, profile/badge system, sidebar, toast/modal utils
│   ├── shop.js             # Themes, sound packs, shop rendering, reward engine, support email
│   ├── pet.js              # Pet SVGs, pet logic, quests, shop-pets, exams, smart reminder
│   └── mobile-nav.js       # Bottom navigation bar, mobile header sync
└── serve.py                # Local dev server (Python 3)
```

## Running Locally

Because the app loads external `.js` files, it must be served over HTTP (not opened as `file://`):

```bash
python3 serve.py
# Then open: http://localhost:8080
```

Or with Node.js:
```bash
npx serve .
```

## Architecture Notes

All JavaScript uses **global scope** (classic `<script>` tags, no `type="module"`).  
This is intentional — the HTML uses hundreds of inline `onclick="functionName()"` handlers  
that require global function access. Using ES6 modules would break all event handlers.

### Load order (index.html):
1. `app.js` — must be first (defines `db`, `T`, `COLORS`, `ACHIEVEMENTS`, etc.)
2. `timer.js` — depends on `db`, `T`, `CIRC`
3. `dashboard.js` — depends on `db`, `T`
4. `subjects.js` — depends on `db`, `T`, `COLORS`
5. `history.js` — depends on `db`, `T`
6. `achievements.js` — depends on `db`, `ACHIEVEMENTS`; also defines `showToast`, `openModal`, `_ac`
7. `shop.js` — depends on `_ac` (from achievements.js), `db`
8. `pet.js` — depends on `db`, `PET_XP_PER_MIN`, SVG functions; also has exam/terms/reminder code
9. `mobile-nav.js` — patches `showPage`, sets up bottom nav

### localStorage Keys (unchanged):
- `ff3` — primary data store
- `ff_db2`, `ff_db` — legacy fallback keys
- `ff_active_session` — iOS Safari session persistence
- `ff_terms_accepted` — terms acceptance flag
- `pq_<date>` — daily pet quest cache
