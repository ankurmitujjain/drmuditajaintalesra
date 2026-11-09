# 90-Day Implementation & Growth Checklist: SEO, AEO & YouTube
**Practice:** Mudita Women Health Care Center · Dr. Mudita Jain Talesra, Bhopal  
**Timeline:** Weeks 1 to 12 (Quarterly Sprint)

---

## Phase 1: Technical Foundation & Clean Build (Weeks 1 – 2)

### Automated Agent Deliverables (Completed)
- [x] Scaffolding of ultra-clean Astro 5 static site (zero client JS bloat, 5.4 KB CSS, 29 KB homepage).
- [x] Single source of truth configured in `src/data/site.ts` with verified MPMC Reg. MP-8475.
- [x] Absolute canonicals generated on `https://drmuditajaintalesra.com/` across all 26 routes.
- [x] Elimination of all legacy WordPress artifacts (`wp-content/`, `wp-includes/`, `wpcf7`, `rs6.min.js`, `ekko`).
- [x] Deletion of 17 demo portfolio files, demo sitemaps, and author/category stubs with `410 Gone` and `301` rules in `_redirects`.
- [x] Lightweight mobile sticky bar (WhatsApp + Call) and floating desktop WhatsApp CTA with GA4 event hooks (`whatsapp_click`, `phone_click`).
- [x] Comprehensive JSON-LD schema graphs (`MedicalClinic` with Bhopal coordinates, `Physician` with qualifications and degrees, `BreadcrumbList`, `MedicalWebPage`, `BlogPosting`, `FAQPage`).
- [x] Single valid XML sitemap generated at `dist/sitemap-index.xml`.
- [x] `public/robots.txt` granting explicit crawling access to modern AI engines (GPTBot, ClaudeBot, PerplexityBot, etc.).
- [x] Modern WebP image optimization and strict security headers in `_headers` and `netlify.toml`.

### Doctor / User Action Items (Immediate Setup)
- [ ] **Google Search Console:** Submit `https://drmuditajaintalesra.com/sitemap-index.xml` and request re-indexing of homepage and core services.
- [ ] **Google Business Profile (CID `17123718235604844238`):**
  - Verify Primary Category is "Gynecologist".
  - Set Website URL = `https://drmuditajaintalesra.com/`.
  - Set Appointment URL = `https://drmuditajaintalesra.com/book-appointment/`.
  - Confirm hours: Mon–Fri 5:00 PM – 8:00 PM (Sat–Sun Closed).
- [ ] **WhatsApp Business App:**
  - Create business profile with clinic name "Mudita Women Health Care Center" and address `E-8, Plot G-1/24-25, Gulmohar Colony, Bhopal`.
  - Add auto-greeting message and quick replies for timings, location map, and consultation slots.
- [ ] **Reception QR Standees:** Print two small standees with QR codes pointing to `https://drmuditajaintalesra.com/whatsapp` and `https://drmuditajaintalesra.com/review`.

---

## Phase 2: Local Authority, Reviews & Verification (Weeks 3 – 5)

### Agent Tasks
- [ ] Monitor Search Console crawl statistics and 410 removals.
- [ ] Generate Phase 2 Hindi (`/hi/`) versions for homepage and top 5 services with hreflang tags.
- [ ] Expand service page content for newly emerging long-tail queries.

### Doctor / User Action Items
- [ ] **Directory NAP Alignment:** Verify identical Name, Address, and Phone on Practo, Justdial, and Lybrate.
- [ ] **Collect 15 Google Reviews:** Send the `/review` short link on WhatsApp to satisfied patients following delivery or postoperative discharge.
- [ ] **Apply for YouTube Health Shelf:** Submit MP Medical Council permanent registration certificate (Reg. No. MP-8475) via YouTube Studio health creator verification form for `@DrMuditaJainTalesra`.

---

## Phase 3: Content Velocity & Dual-Channel Video Production (Weeks 6 – 8)

### Agent Tasks
- [ ] Ingest new batch of blog posts from the 24-article calendar into `src/content/blog/` as drafts for review.
- [ ] Embed published YouTube videos with matching `VideoObject` schema on corresponding service and blog pages.

### Doctor Action Items (Batch Recording Sessions)
- [ ] **Recording Session 1 (2 Hours):**
  - Patient Channel (`@DrMuditaJainTalesra`): Record Shorts #1 to #5 and Long-Form #1 (Laparoscopic Hysterectomy Masterclass).
  - Academic Channel (`@DrMuditaJainVault`): Record Long-Form #1 (TLH Uterine Artery Ligation & Vault Closure).
- [ ] **Publishing & Community:** Publish with standardized description template, pinned comment with WhatsApp booking link, and chapter timestamps.

---

## Phase 4: Scale, Teleconsultation & Monetization (Weeks 9 – 12)

### Agent Tasks
- [ ] Analyze GA4 conversion funnels: track `whatsapp_click` and `phone_click` lead generation volume across different landing pages.
- [ ] Audit Core Web Vitals in Google Search Console (confirm Mobile LCP < 2.5s, CLS < 0.1).

### Doctor Action Items
- [ ] **Recording Session 2 & 3:** Record Patient Shorts #6 to #15 and Long-Form #2 (Normal Delivery Preparation) & #3 (PCOS Reversal).
- [ ] **Host First Live Stream:** Conduct a 45-minute live stream "Ask Dr. Mudita Anything: Pregnancy & Women's Health" on the patient channel.
- [ ] **Review Teleconsultation Funnel:** Evaluate inbound WhatsApp lead conversions and patient geographic distribution across Madhya Pradesh.
- [ ] **Academic Channel Watch Hours:** Track rolling 12-month watch hours on `@DrMuditaJainVault` toward YPP 4,000-hour eligibility.

## Academy: NDVH workshop track
- [ ] Confirm consent from trainees and OT staff for the photos and reviews on /academy/ndvh-training/
- [ ] Get the Review 2 author's name and Dr. Pushpa's full name for the credits
- [ ] Fix the next NDVH batch date and announce it in the student WhatsApp community
- [ ] After the batch: collect reviews and photos and update the page (see the academy plan routine)
- [ ] Record the first 4 "pelvic anatomy for vaginal surgery" lessons for the Google Classroom pre-course
