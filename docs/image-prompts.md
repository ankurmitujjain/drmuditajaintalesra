# Image prompts for the service pages

Works with ChatGPT (image generation), Google Gemini, Midjourney, Ideogram, Leonardo or Canva AI.

## How to use
1. Paste the **style block** below at the start of every prompt. It keeps all the images looking like one set.
2. Generate in **landscape 16:9** (about 1600×900; Midjourney: `--ar 16:9`).
3. Pick the best result and save it as **WebP**, max 1600 px wide and under 200 KB. Use squoosh.app, which is free.
4. Save it to `public/images/` under the exact file name given, then tell Claude (or the agent) to set it as the `heroImage` and show it on the page.

## Rules (important for a medical website)
- **No text, letters, logos or watermarks** in the image. AI tools garble text.
- **Don't generate a "Dr. Mudita" lookalike** or any fake photo of her or her clinic. Use real photos for that.
- No blood, gore or graphic surgery. Keep it calm, respectful and modest.
- Show **Indian women** of the right age for each topic, in natural clothing (saree, salwar kameez or kurta).
- Don't show a fake real hospital name or brand.
- If a result looks medically wrong (wrong anatomy, odd hands, extra fingers), regenerate it.

---

## Style block (paste first, every time)
```
Style: soft, modern editorial health illustration for an Indian women's health clinic website. Warm, calming palette of soft teal, blush pink, cream and gentle lavender. Clean composition with generous empty space on one side. Gentle natural lighting, subtle depth, friendly and reassuring mood. Respectful and modest. No text, no letters, no logos, no watermark. Landscape 16:9, high resolution.
```

**For a photo look instead of an illustration**, replace the first sentence with:
`Style: realistic, softly lit lifestyle photograph, shallow depth of field, natural colours,`

---

## Prompts by page

### 1. Uterine Fibroids → `uterine-fibroids.webp`
```
[STYLE BLOCK] A clear, simplified medical illustration of the female uterus in soft pink tones showing a few rounded benign fibroids in different positions (inside the cavity, within the wall, and on the outer surface), drawn in a calm educational way, not graphic. Uterus on the right, plain soft teal background on the left.
```

### 2. PCOS / PCOD → `pcos-pcod-treatment.webp`
```
[STYLE BLOCK] A young Indian woman in her twenties in a casual kurta, sitting relaxed at home holding a cup of tea, looking calm and confident. Subtle surrounding elements suggesting a healthy routine: a bowl of fruit and vegetables, a yoga mat, a small calendar with circled days (no readable text). Woman on the right, empty space on the left.
```

### 3. Endometriosis → `endometriosis-treatment.webp`
```
[STYLE BLOCK] An Indian woman in her late twenties resting on a sofa with a hot water bag on her lower abdomen, eyes gently closed, expression showing mild discomfort turning into relief. Soft blanket, warm lamp light, a glass of water on the side table. Calm, empathetic mood, not dramatic.
```

### 4. Ovarian Cysts → `ovarian-cysts.webp`
```
[STYLE BLOCK] A simplified, friendly anatomical illustration of the uterus, fallopian tubes and two ovaries in soft pink and lavender, with one ovary showing a small smooth round fluid-filled cyst highlighted by a soft glow. Educational, clean, not graphic. Illustration on the right, soft cream background on the left.
```

### 5. Laparoscopic Hysterectomy → `laparoscopic-hysterectomy.webp`
```
[STYLE BLOCK] A modern, clean operating theatre seen from a calm distance: a laparoscopic camera tower with monitors showing abstract soft-coloured shapes, surgical lights, neatly arranged instruments, a surgical team in teal scrubs and masks seen from behind and out of focus. No patient visible, no blood. Bright, sterile, reassuring atmosphere.
```

### 6. Menopause Care → `menopause-care.webp`
```
[STYLE BLOCK] A graceful Indian woman in her early fifties with a few grey streaks in her hair, wearing a cotton saree, walking in a green park in the morning light, smiling softly and looking healthy and active. Light breeze, trees, warm sunrise tones. Woman on the right third, open sky and greenery on the left.
```

### 7. Normal & Painless Delivery → `painless-normal-delivery.webp`
```
[STYLE BLOCK] A happy Indian couple in a calm hospital birthing room: the mother in a hospital gown holding her newborn baby wrapped in a soft white cloth, the father beside her gently touching the baby's hand. Warm soft light, peaceful and joyful mood, modest and natural.
```

### 8. Pregnancy Care / Obstetrics → `obstetrics-services.webp`
```
[STYLE BLOCK] A smiling pregnant Indian woman in her late twenties wearing a comfortable maternity kurta, gently holding her baby bump, sitting by a sunlit window. Soft cushions, a potted plant, calm and hopeful mood. Woman on the right, soft blurred window light on the left.
```

### 9. Infertility / Fertility → `fertility-services.webp`
```
[STYLE BLOCK] A young Indian couple sitting close together on a sofa, holding hands, looking at each other with hope and quiet optimism. Warm living-room setting, soft morning light, a small plant growing in a pot on the table as a symbol of new life. Gentle and emotional, not sad.
```

### 10. Laparoscopic Gynecology Procedures → `laparoscopic-gynecology-procedures.webp`
```
[STYLE BLOCK] A close-up of slim laparoscopic surgical instruments and a small laparoscope camera neatly arranged on a sterile teal surgical cloth, with a monitor glowing softly in the blurred background. Clean, precise, high-tech and reassuring. No blood, no patient.
```

### 11. Cervical Health & Pap Smear / HPV → `cervical-health-services.webp`
```
[STYLE BLOCK] A friendly Indian woman in her thirties sitting in a bright, clean clinic consultation room, talking comfortably with a female doctor whose back is to the camera (face not visible). A small model of the female pelvis on the desk. Calm, trusting, preventive-care mood.
```

### 12. Cosmetic Gynecology → `cosmetic-gynecology.webp`
```
[STYLE BLOCK] An abstract, elegant illustration symbolising feminine wellbeing and confidence: soft flowing shapes resembling flower petals and a lotus in blush pink and lavender, gentle gradients, minimal and tasteful. No human body, nothing explicit.
```

### 13. Vaginal Surgery / Prolapse / Pelvic Floor → `vaginal-surgery-services.webp`
```
[STYLE BLOCK] An Indian woman in her fifties doing a gentle pelvic floor or yoga exercise on a mat at home, guided by a calm atmosphere, wearing comfortable clothes, looking focused and at ease. Morning light, plants, peaceful and empowering mood.
```

### 14. MTP (Medical Termination of Pregnancy) → `medical-termination-of-pregnancy-mtp-services.webp`
```
[STYLE BLOCK] A calm, private and confidential clinic consultation scene: a woman's hands resting on a desk, a female doctor's hands gently offering support across the table (faces not shown), a glass of water and a closed folder. Soft neutral light, respectful, non-judgemental and reassuring mood. No pregnancy imagery.
```

---

## Hubs and other pages (optional)

### Our Services / Online Care → `online-consultation.webp`
```
[STYLE BLOCK] An Indian woman at home in a kurta, sitting comfortably on a sofa, on a video call on her smartphone with a doctor (the doctor appears as a soft, unrecognisable figure on the screen). Warm home setting, relaxed and convenient mood.
```

### Academy (for students) → `academy-obg-students.webp`
```
[STYLE BLOCK] A group of young Indian medical students and residents in white coats watching a live online lecture on a laptop and a large screen showing an abstract anatomy diagram, taking notes, engaged and curious. Modern study room, focused and inspiring mood.
```

---

## After you generate them
Tell Claude: *"I've added images to public/images: [list of file names]. Set them as heroImage for each service and show the image at the top of each service page."* Claude will also add descriptive alt text for accessibility and Google Images.
