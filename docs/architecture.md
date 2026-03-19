# ארכיטקטורת אתר — בורגר יוני 71

## סקירה כללית
אתר חנות/מסעדה עבור סניף "בורגר יוני 71" ברמת השרון.
האתר מבוסס על העיצוב והמבנה של אתר הייחוס: https://yoni71.pages.dev
פלטפורמת Deployment: **Cloudflare Pages**
סוג: **Single Page Application** (SPA) — אתר סטטי עם HTML/CSS/JS

---

## מידע עסקי

| פרט | ערך |
|---|---|
| שם העסק | בורגר יוני 71 |
| שם באנגלית | Burger Yoni 71 / Y-71 |
| כתובת | סוקולוב 72, רמת השרון |
| טלפון | *8664 / 073-3860007 |
| כשרות | כשר יורה דעת מחפוד |
| דירוג Wolt | 8.4 |
| קואורדינטות | 32.146122, 34.8388519 |

### שעות פעילות
| יום | שעות |
|---|---|
| ראשון | 11:00 – 01:00 |
| שני | 11:00 – 01:00 |
| שלישי | 11:00 – 01:00 |
| רביעי | 11:00 – 01:00 |
| חמישי | 11:00 – 01:00 |
| שישי | סגור |
| שבת | 18:30 – 01:00 |

---

## מבנה האתר (Sections)

### 1. Header / Navigation (Sticky)
- לוגו Y-71 (ימין, RTL)
- ניווט: דף הבית | תפריט | אירועים | אודות | צור קשר
- כפתור CTA: "להזמנה" (מוביל ל-Tabit/Wolt)
- תפריט המבורגר במובייל

### 2. Hero Section
- תמונת רקע full-width של המבורגר
- כותרת ציטוט: "להאכיל אנשים — זאת המצווה הכי גדולה"
- כותרת משנה: "BURGER YONI 71 — BURGER & BAR"
- שני כפתורי CTA: "לתפריט" | "להזמנה מהירה"
- חץ scroll-down

### 3. המנות שלנו (Featured Dishes)
- 3 כרטיסי מנות מרכזיות (לא השווארמות של האתר המקורי — כאן המבורגרים):
  - המבורגר גולד — 62 ₪
  - המבורגר פסיכיאטר — 72 ₪
  - המבורגר פלאטיניום — 62 ₪
- כל כרטיס: תמונה + שם + תיאור קצר + כפתור "להזמנה"

### 4. אודות / סלוגן
- רקע ירוק כהה
- תמונת הבעלים/לוגו
- טקסט: "אצלנו כולם מקבלים 100% בשר — 100% אהבה!"

### 5. גלריה
- רקע בז'/חום
- גריד/קרוסלת תמונות (3 תמונות לפחות)
- תמונות מהמסעדה, האוכל, האווירה

### 6. אירועים (Events/Catering)
- רקע ירוק כהה
- כותרת: "חדש! שירות אירועים עד בית הלקוח"
- תיאור: "תנו לנו להגיע אליכם עד הבית עם אוכל אותנטי ואיכותי"
- כפתור "לפרטים" (מוביל לוואטסאפ)

### 7. תפריט מלא (Menu Page / Section)
- קטגוריות (tabs / accordion):
  - עסקיות (ארוחות עם צ'יפס ושתייה)
  - ראשונות
  - עקריות (המבורגרים)
  - סלטים
  - תוספות
  - ארוחות ילדים
  - רטבים
  - קינוחים
  - משקאות חריפים
  - שתייה קלה
- כל מנה: שם + תיאור + מחיר + תמונה (אם קיימת)

### 8. להזמנה מהירה (Quick Order CTA)
- רקע בהיר
- כותרת: "להזמנה מהירה"
- טקסט: "רוצים להזמין? שלחו לנו הודעה בוואטסאפ ונחזור אליכם מיד"
- כפתור WhatsApp ירוק
- לינקים ל-Wolt ו-Tabit

### 9. Footer
- לוגו
- ניווט: דף הבית | תפריט | אירועים | אודות | צור קשר
- יצירת קשר: כתובת + טלפון
- אייקונים חברתיים: Facebook, Instagram, WhatsApp, טלפון
- קישור למדיניות פרטיות
- קישור להצהרת נגישות
- "כל הזכויות שמורות © 2026 בורגר יוני 71"

### 10. Floating Elements
- כפתור WhatsApp צף (שמאל למטה)
- כפתור נגישות צף (ימין למטה)

---

## עמודים נוספים (או מודאלים)

### מדיניות פרטיות
- עמוד נפרד `/privacy` או מודאל
- תוכן סטנדרטי בעברית

### הצהרת נגישות
- עמוד נפרד `/accessibility` או מודאל
- תקן AA של WCAG 2.1
- פרטי רכז/ת נגישות

### תנאי שימוש
- עמוד נפרד `/terms` או מודאל

---

## עיצוב (Design System)

### צבעים
| שם | ערך | שימוש |
|---|---|---|
| ירוק כהה (Primary) | #273E2F | Nav, backgrounds, טקסט |
| חום/זהב (Secondary) | #AC886D | כפתורים, הדגשות, hover |
| קרם (Background Light) | #F5F0EB | רקע סקציות בהירות |
| לבן-שמנת | #FFFFFE | רקע כרטיסים |
| לבן | #FFFFFF | טקסט על רקע כהה |
| שחור שקוף | rgba(0,0,0,0.5) | overlay על תמונות |

### טיפוגרפיה
- **פונט ראשי:** Heebo (Google Fonts) — עברית
- **פונט משני:** Heebo Fallback / Arial / sans-serif
- **כיוון:** RTL (Right-to-Left)
- **גדלים:**
  - H1: 3rem (Hero)
  - H2: 2.25rem (Section titles)
  - H3: 1.5rem (Card titles)
  - Body: 1rem
  - Small: 0.875rem

### כפתורים
- Primary: רקע #AC886D, טקסט לבן, border-radius: 50px
- Secondary: border 2px #FFFFFE, טקסט לבן, border-radius: 50px
- Hover: opacity או צבע כהה יותר

### רספונסיביות
- Desktop: > 1024px
- Tablet: 768px – 1024px
- Mobile: < 768px
- Hamburger menu במובייל

---

## סטאק טכנולוגי

| רכיב | טכנולוגיה |
|---|---|
| HTML | HTML5 Semantic |
| CSS | CSS3 + Custom Properties + Flexbox/Grid |
| JavaScript | Vanilla JS (no framework) |
| Fonts | Google Fonts (Heebo) |
| Icons | Font Awesome או SVG inline |
| Animations | CSS transitions + Intersection Observer |
| Maps | Google Maps Embed / link |
| Deployment | Cloudflare Pages |
| Accessibility | WCAG 2.1 AA |
| Performance | Lazy loading, WebP images, minified |

---

## קישורי הזמנה

| פלטפורמה | URL |
|---|---|
| Tabit | https://tabitisrael.co.il/tabit-order?siteName=burgeryoni&step=enter |
| Wolt | https://wolt.com/he/isr/tel-aviv/restaurant/yoni-burger |
| WhatsApp | https://wa.me/97273386007 (לאמת מספר) |

---

## SEO & Meta

```html
<title>בורגר יוני 71 | המבורגרים כשרים ברמת השרון</title>
<meta name="description" content="בורגר יוני 71 — בורגר שף כשר ברמת השרון. המבורגרים מבשר מובחר, קריספי צ'יקן, ג'בטות ועוד. הזמינו עכשיו בוולט או בטאביט!">
<meta name="keywords" content="בורגר יוני 71, המבורגר כשר, רמת השרון, בורגר שף, משלוחים, Y-71">
<meta property="og:title" content="בורגר יוני 71 — Burger & Bar">
<meta property="og:description" content="בורגר שף כשר מבית Y-71 ברמת השרון. 100% בשר, 100% אהבה!">
<meta property="og:type" content="restaurant">
<meta property="og:locale" content="he_IL">
```

---

## מבנה קבצים

```
burger-yoni-71/
├── index.html          # עמוד ראשי (SPA)
├── privacy.html        # מדיניות פרטיות
├── accessibility.html  # הצהרת נגישות
├── terms.html          # תנאי שימוש
├── css/
│   └── style.css       # סגנונות ראשיים
├── js/
│   └── main.js         # JavaScript ראשי
├── images/
│   ├── logo.png        # לוגו Y-71
│   ├── hero-burger.jpg # תמונת Hero
│   ├── burger-gold.jpg
│   ├── burger-psychiater.jpg
│   ├── burger-platinum.jpg
│   ├── crispy-chicken.jpg
│   ├── jabata.jpg
│   ├── chips.jpg
│   ├── gallery-1.jpg
│   ├── gallery-2.jpg
│   ├── gallery-3.jpg
│   └── owners.jpg
├── favicon.ico
└── _redirects          # Cloudflare Pages redirects
```

---

## דרישות ביצוע (Performance)

- **Lighthouse Score:** מעל 90 בכל הקטגוריות
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **תמונות:** WebP עם fallback, lazy loading
- **CSS/JS:** Minified, inline critical CSS
- **Fonts:** font-display: swap
