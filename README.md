# 🎓 EduLearn – Engineering Career Guidance Portal

A beginner-friendly React project for engineering students and freshers. Explore IT careers, see required skills and roadmaps, browse jobs, practise interview questions, and try a simple login system.

> ⚠️ **Authentication note:** Login/Register here is for **frontend learning only**. Users and passwords are stored in the browser's `localStorage` in plain text. This is **not production-level security**. Real apps need a backend, hashed passwords and secure tokens.

---

## 1. Tech Stack
React 18 · Vite · JavaScript (ES6+) · React Router DOM v6 · Plain CSS · Fetch API · localStorage

## 2. Setup

1. **Install Node.js** (v18 or newer) from https://nodejs.org and check:
   ```bash
   node -v
   npm -v
   ```
2. **Unzip** the project and open the folder in a terminal:
   ```bash
   cd EduLearn
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the dev server**:
   ```bash
   npm run dev
   ```
   Open the link shown (usually http://localhost:5173).

### Creating the same project from scratch (for practice)
```bash
npm create vite@latest EduLearn -- --template react
cd EduLearn
npm install
npm install react-router-dom
npm run dev
```

## 3. Build and Deploy

**Build:**
```bash
npm run build      # creates the dist/ folder
npm run preview    # test the production build locally
```

**Deploy to Vercel:**
1. Push the project to a GitHub repository.
2. Go to https://vercel.com and sign in with GitHub.
3. Click **Add New → Project** and import your repository.
4. Vercel detects Vite automatically (Build: `npm run build`, Output: `dist`). Click **Deploy**.
5. `vercel.json` is already included so refreshing on pages like `/careers/2` does not give a 404.

## 4. Folder Structure
```
EduLearn/
├── public/jobs.json            # sample jobs data fetched with fetch()
├── vercel.json                 # fixes page refresh on Vercel
└── src/
    ├── main.jsx                # entry point, wraps app in BrowserRouter
    ├── App.jsx                 # routes + login state
    ├── index.css               # all styles
    ├── components/
    │   ├── Navbar.jsx
    │   ├── CareerCard.jsx
    │   └── ProtectedRoute.jsx
    ├── pages/
    │   ├── Home.jsx
    │   ├── Careers.jsx
    │   ├── CareerDetails.jsx
    │   ├── Jobs.jsx
    │   ├── InterviewPractice.jsx
    │   ├── Login.jsx
    │   ├── Register.jsx
    │   └── Profile.jsx
    └── data/careers.js
```

## 5. How to Test the App
1. Go to **Register**, create an account (password 6+ characters).
2. Go to **Login** with the same email and password → you land on **Profile**.
3. Refresh the page → you stay logged in (localStorage).
4. Click **Logout** → you return to Login. Visiting `/profile` now redirects to Login.
5. Try **Careers** (search, View Details), **Jobs** (search, category filter, Apply) and **Interview** (Show/Hide Answer, Next).

---

## 6. Concepts and Where They Are Used

| Concept | File |
|---|---|
| Functional components, JSX | every file |
| Props | `CareerCard` (career), `Navbar` (user), `ProtectedRoute` (user, children), `Login` (onLogin), `Profile` (user, onLogout) |
| `useState` | Careers (search), Jobs, InterviewPractice, Register, Login, Navbar, App |
| `useEffect` + `fetch` + `async/await` + `try/catch` | `Jobs.jsx` |
| Lists with `map()` and `key` | Home, Careers, CareerDetails, Jobs, Interview |
| Conditional rendering | Jobs (loading/error/empty), Interview (answer), Navbar (login state), ProtectedRoute |
| Controlled components + validation | Register, Login, search boxes |
| `BrowserRouter`, `Routes`, `Route`, `Link` | main.jsx, App.jsx, Navbar |
| `useParams` | CareerDetails |
| `useNavigate` | Login, Register, Profile |
| `Navigate` | ProtectedRoute |
| localStorage | App.jsx (token, currentUser), Register (users) |

## 7. How Things Work (Short Explanations)

**Props:** data flows from parent to child. `Careers` renders `<CareerCard career={career} />`; inside, `career.title` is used. Props are read-only.

**State:** `const [search, setSearch] = useState("")` stores a value. Calling `setSearch(...)` updates it and React re-renders the component.

**Controlled input:** `value={search}` + `onChange={(e) => setSearch(e.target.value)}` — React state is the single source of truth for the input.

**API fetching (Jobs.jsx):**
1. State: `jobs`, `loading`, `error`.
2. `useEffect(..., [])` runs once after the first render.
3. Inside, an `async` function calls `await fetch("/jobs.json")`.
4. `response.json()` converts the response to JavaScript data → `setJobs(data)`.
5. `catch` sets an error message; `finally` sets `loading` to false.
6. The JSX shows a loading message, an error message, or the job cards.

> To use a real API instead, change the URL, e.g. `https://remotive.com/api/remote-jobs?category=software-dev&limit=20`, and use `data.jobs` (field names differ: `title`, `company_name`, `candidate_required_location`, `job_type`, `url`).

**Routing:** `BrowserRouter` (main.jsx) enables routing. `Routes/Route` in App.jsx map URLs to pages. `Link` changes the page without reloading. `/careers/:id` + `useParams()` reads the id.

**Authentication flow:**
1. **Register:** validate → save user in `localStorage["users"]` → `navigate("/login")`.
2. **Login:** validate → find matching user → call `onLogin(user)`.
3. **App.jsx `handleLogin`:** saves `token` and `currentUser` in localStorage and sets `user` state.
4. `navigate("/profile")` opens Profile.
5. **ProtectedRoute:** if `user` is null → `<Navigate to="/login" />`, else show the page.
6. **Logout:** remove items from localStorage, set `user` to null, `navigate("/login")`.
7. On refresh, `useState(() => ...)` in App.jsx reads `currentUser` from localStorage, so you stay logged in.

## 8. Interview Questions by Topic

**Components / Props / State**
- What is a functional component? What is JSX?
- Props vs state?
- Why can't we change props?
- Why is `key` needed in lists and why not use the index?
- What is lifting state up? (Login state lives in `App` and goes down as props.)

**useEffect / API**
- What does the empty dependency array `[]` mean?
- Why can't `useEffect` callback be `async` directly? (It must return nothing or a cleanup function, so we define an async function inside.)
- How do you handle loading and error states?
- `fetch` vs `axios`? Why check `response.ok`?

**Forms**
- Controlled vs uncontrolled components?
- Why `e.preventDefault()`?
- How did you validate the form?

**Routing**
- `Link` vs `<a>`? `useNavigate` vs `Navigate`? `useParams`?
- What is a protected route and how did you build it?
- Why is `vercel.json` needed for a single-page app?

**Authentication**
- Where do you store login info and is it safe? (localStorage is simple but not secure; real apps use backend + secure tokens.)
- How does the user stay logged in after refresh?

## 9. Practice Tasks
1. **CareerCard:** add a `category` badge using a new field from `careers.js`.
2. **Careers:** add a category dropdown filter next to search.
3. **CareerDetails:** add a "Back" button using `useNavigate(-1)`.
4. **Jobs:** add a "Job type" filter (Full-time / Internship / Contract).
5. **Jobs:** replace `/jobs.json` with the Remotive API and map its fields.
6. **Interview:** add a "Previous Question" button and a score counter.
7. **Register:** show an error if the password has no number.
8. **Profile:** add a "Saved careers" list stored in localStorage.
9. **Navbar:** highlight the current page link (hint: `NavLink`, then learn about `useLocation`).
10. **Challenge:** add a "Show/Hide password" checkbox on Login.

## 10. Troubleshooting
- **`npm` not found:** reinstall Node.js and restart the terminal.
- **Blank page after deploy / 404 on refresh:** make sure `vercel.json` is in the project root.
- **Jobs not loading:** confirm `public/jobs.json` exists and the dev server is running.
- **Forgot your test password:** open DevTools → Application → Local Storage and delete `users`.

Happy learning! 🚀
