# AUTOPSY.md — www.yourzaxbys.com

## 🔥 The Roast

**What is this?** A franchise management platform that can't even build. That's like a restaurant that can't turn on the grill.

**The Good:**

- Comprehensive feature vision (analytics, HR, maintenance, catering)
- Solid tech stack (Next.js 16, Convex, Clerk)
- Clean UI components (Radix + Tailwind)
- PostHog + Sentry monitoring configured

**The Bad:**

- **BUILD IS BROKEN** — Missing `@/components/ui/navbar` (imports a file that doesn't exist)
- components/layout/public/navbar.tsx imports from `@/components/ui/navbar` but there's only `header.tsx`
- Sentry deprecation warnings all over
- `baseline-browser-mapping` outdated warnings
- Logo files duplicated (logo.afdesign, logo.jpg, logo.png, logo.svg all in root — should be in /public)

**The Ugly:**

- Can't deploy what doesn't build
- No manifest.ts, sitemap.ts, or robots.ts (missing SEO basics)
- No tests
- \_project.ts file in waynesville but not here — inconsistent project structure

---

## 📊 Rating

| Aspect                   | Score | Notes                                                     |
| ------------------------ | ----- | --------------------------------------------------------- |
| **Buildability**         | 0/10  | Broken. Does not compile.                                 |
| **Architecture**         | 6/10  | Good structure, but inconsistent between main/waynesville |
| **UI/UX**                | 7/10  | Clean Radix components, good design system                |
| **SEO**                  | 2/10  | Missing manifest, sitemap, robots TS files                |
| **DX**                   | 4/10  | Deprecation warnings, missing components                  |
| **Documentation**        | 6/10  | Good README, but ROADMAP/CHANGELOG sparse                 |
| **Production Readiness** | 0/10  | Can't ship broken code                                    |

**Overall: 3.5/10** — Has potential but is currently undeployable.

---

## 🎯 Plan

### Phase 1: Emergency Fix (30 min)

1. Fix navbar import — either create `@/components/ui/navbar.tsx` or update import to use `header.tsx`
2. Verify build passes
3. Update Sentry config to use non-deprecated options
4. Update `baseline-browser-mapping` package

### Phase 2: SEO & Standards (1 hour)

1. Create `app/manifest.ts`
2. Create `app/sitemap.ts`
3. Create `app/robots.ts`
4. Move logo files from root to `/public`
5. Add proper meta tags to layout

### Phase 3: Parity with Waynesville (2 hours)

1. Compare feature sets between www and waynesville
2. Ensure consistent project structure
3. Add \_project.ts if waynesville has one
4. Standardize component organization

### Phase 4: Testing & Polish (2 hours)

1. Add basic smoke tests
2. Fix remaining TypeScript warnings
3. Update dependencies
4. Clean up unused code

---

## 🚀 Execution Order

1. **IMMEDIATE**: Fix build (navbar import)
2. **TODAY**: SEO files + dependency updates
3. **THIS WEEK**: Parity audit with waynesville
4. **NEXT WEEK**: Testing + polish

---

_Generated: 2026-02-11_
