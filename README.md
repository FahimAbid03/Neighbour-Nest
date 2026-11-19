# FAHIM · NeighbourNest

Home, sign-in, registration, membership status, and profile

## Run the demo

1. Extract the ZIP.
2. Open a terminal in the extracted project folder (the folder containing `index.html`).
3. Run `python -m http.server 8000` (Windows: `py -m http.server 8000`).
4. Open http://localhost:8000 in your browser.

Use the same browser tab as you move between pages. The demo uses sample
records and saves changes for that tab's session. Login and password changes
are simulations. There is no backend or installation step.

## Try this module

Try a blank registration, submit a valid membership request, and edit it while pending. To see the sample profile, use a different valid email and any password of at least eight characters on the login page.

Use the complete project ZIP to demonstrate workflows that cross into another
member's pages.

| Screen | HTML | CSS | JavaScript |
| --- | --- | --- | --- |
| Home | `index.html` | `fahim.css` | `index.js` |
| Log in | `login.html` | `fahim.css` | `login.js` |
| Register | `register.html` | `fahim.css` | `register.js` |
| Membership status | `membership.html` | `fahim.css` | `membership.js` |
| Edit membership request | `pending-profile.html` | `fahim.css` | `pending-profile.js` |
| Profile | `profile.html` | `fahim.css` | `profile.js` |
| Edit profile | `profile-edit.html` | `fahim.css` | `profile-edit.js` |

## Code layout

All pages in this module use `fahim.css`.

Each screen has its own `.html` and `.js` with the same base name.
HTML contains the page and its templates for rows or cards. JavaScript handles
clicks, form validation and updates. `shared/` contains demo data and helpers.

Form validation follows the practice sheet: `novalidate`, a submit listener,
`event.preventDefault()`, a `valid` flag, field-level error messages and red
or green borders. Try submitting a blank form, then filling it in.
