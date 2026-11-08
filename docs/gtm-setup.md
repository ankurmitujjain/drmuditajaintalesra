# Google Tag Manager (GTM) Setup Guide

**Container ID:** `GTM-KTNGJW3Z`  
**Target GA4 Measurement ID:** `G-R45CXSB5JJ`  
**Site:** `https://drmuditajaintalesra.com`

---

## 1. Architecture Overview
Per site performance and privacy architecture:
- GTM is loaded as the **single tag container** on all pages (`<head>` and `<noscript>` fallback).
- GA4 is configured **inside GTM** (no standalone `gtag.js` script tag in the site source).
- The website pushes custom events to `window.dataLayer` whenever an interactive action occurs.

---

## 2. Variables to Create in GTM

Under **Variables > User-Defined Variables**, click **New**:

1. **`DLV - page_path`**
   - Type: Data Layer Variable
   - Data Layer Variable Name: `page_path`
2. **`DLV - cta_position`**
   - Type: Data Layer Variable
   - Data Layer Variable Name: `cta_position`
3. **`DLV - form_id`**
   - Type: Data Layer Variable
   - Data Layer Variable Name: `form_id`

---

## 3. Triggers to Create in GTM

Under **Triggers**, create Custom Event triggers:

1. **Trigger: `Custom - whatsapp_click`**
   - Trigger Type: Custom Event
   - Event name: `whatsapp_click`
   - Fires on: All Custom Events
2. **Trigger: `Custom - phone_click`**
   - Trigger Type: Custom Event
   - Event name: `phone_click`
   - Fires on: All Custom Events
3. **Trigger: `Custom - directions_click`**
   - Trigger Type: Custom Event
   - Event name: `directions_click`
   - Fires on: All Custom Events
4. **Trigger: `Custom - form_submit`**
   - Trigger Type: Custom Event
   - Event name: `form_submit`
   - Fires on: All Custom Events

---

## 4. Tags to Create in GTM

### Tag 1: Google Tag (GA4 Base Configuration)
- **Tag Type:** Google Tag
- **Tag ID:** `G-R45CXSB5JJ`
- **Trigger:** `Initialization - All Pages` (or `All Pages`)
- **Configuration Settings:**
  - `send_page_view`: `true`

### Tag 2: GA4 Event - WhatsApp Click (Key Event)
- **Tag Type:** Google Analytics: GA4 Event
- **Measurement ID:** `G-R45CXSB5JJ`
- **Event Name:** `whatsapp_click`
- **Event Parameters:**
  - `page_path`: `{{DLV - page_path}}`
  - `cta_position`: `{{DLV - cta_position}}`
- **Trigger:** `Custom - whatsapp_click`

### Tag 3: GA4 Event - Phone Call Click
- **Tag Type:** Google Analytics: GA4 Event
- **Measurement ID:** `G-R45CXSB5JJ`
- **Event Name:** `phone_click`
- **Event Parameters:**
  - `page_path`: `{{DLV - page_path}}`
  - `cta_position`: `{{DLV - cta_position}}`
- **Trigger:** `Custom - phone_click`

### Tag 4: GA4 Event - Directions Click
- **Tag Type:** Google Analytics: GA4 Event
- **Measurement ID:** `G-R45CXSB5JJ`
- **Event Name:** `directions_click`
- **Event Parameters:**
  - `page_path`: `{{DLV - page_path}}`
- **Trigger:** `Custom - directions_click`

### Tag 5: GA4 Event - Form Submit
- **Tag Type:** Google Analytics: GA4 Event
- **Measurement ID:** `G-R45CXSB5JJ`
- **Event Name:** `form_submit`
- **Event Parameters:**
  - `page_path`: `{{DLV - page_path}}`
  - `form_id`: `{{DLV - form_id}}`
- **Trigger:** `Custom - form_submit`

---

## 5. Marking Key Events (Conversions) in GA4

Once GTM is published and initial test clicks are performed:
1. Open Google Analytics 4 (`G-R45CXSB5JJ`).
2. Navigate to **Admin > Data display > Events**.
3. Toggle **Mark as key event** for:
   - `whatsapp_click` (Primary lead event)
   - `phone_click` (Direct phone consultation call)
   - `form_submit` (Appointment request form submission)
