# Website Update Plan - Progress Tracker

## Completed Steps
- [ ] None yet

## Pending Steps

### 1. Clean Directory Structure
- [x] Move all contents from `Anshul Website/Anshul Website/app/` to `Anshul Website/` root
- [x] Update paths if needed
- [x] Delete old `app/` folder

**Completed**

### 2. Security Fix
- [x] Create `.env` with `VITE_EMAILJS_USER_ID=cqk6g8uNjrKkaa5c0`
- [x] Update App.jsx to use `import.meta.env.VITE_EMAILJS_USER_ID`

**Completed**

### 3. UI/UX Updates
- [ ] Hero.jsx: Add counter animation to stats
- [ ] Navbar.jsx: Add GitHub logo link to repo
- [ ] Contact.jsx: Improve form validation
- [ ] Footer.jsx: Add social links/GitHub
- [ ] Global: Add lazy loading to images

### 4. Features Add
- [ ] Portfolio: Add category filter
- [ ] Testimonials: Improve carousel

### 5. SEO/Perf
- [ ] Update index.html meta tags
- [ ] Add PWA manifest

### 6. Testing
- [ ] `npm install`
- [ ] `npm run dev` - test forms/EmailJS/PDF

### 7. Git Integration
- [x] Create branch `blackboxai/website-update`
- [x] Commit changes
- [ ] Push to https://github.com/anshulgole16/web-dep.-website-.git
- [ ] Open PR

**In progress**

**Next Action**: Start with directory cleanup.
