# Visual Layout Reference Guide

## 📐 Team Section - Three-Column Layout Specification

### **Desktop Layout (≥ 640px)**

```
┌─────────────────────────────────────────────────────────────────┐
│                        Il Nostro Team                           │
│                     (Centered Title H3)                         │
└─────────────────────────────────────────────────────────────────┘

┌───────────────────┐  ┌───────────────────┐  ┌───────────────────┐
│   ┌─────────┐     │  │   ┌─────────┐     │  │   ┌─────────┐     │
│   │  Icon   │     │  │   │  Icon   │     │  │   │  Icon   │     │
│   └─────────┘     │  │   └─────────┘     │  │   └─────────┘     │
│                   │  │                   │  │                   │
│     Damiano       │  │   Alessandro      │  │     Matteo        │
│   Creative Dir.   │  │  Motion Designer  │  │   3D Artist       │
│                   │  │                   │  │                   │
│   Description     │  │   Description     │  │   Description     │
│   text here...    │  │   text here...    │  │   text here...    │
│   (flex-grow)     │  │   (flex-grow)     │  │   (flex-grow)     │
│                   │  │                   │  │                   │
│ ┌──────┐ ┌─────┐ │  │ ┌──────┐ ┌─────┐ │  │ ┌──────┐ ┌─────┐ │
│ │Skill1│ │Skill2│ │  │ │Skill1│ │Skill2│ │  │ │Skill1│ │Skill2│ │
│ └──────┘ └─────┘ │  │ └──────┘ └─────┘ │  │ └──────┘ └─────┘ │
└───────────────────┘  └───────────────────┘  └───────────────────┘
   gap: 1.5rem (24px)     gap: 1.5rem (24px)
```

**Key Features:**
- Equal column widths: `grid-template-columns: repeat(3, 1fr)`
- Consistent gaps: `gap-6` (24px)
- Max width container: `max-w-6xl mx-auto`
- Centered on page with equal margins

### **Mobile Layout (< 640px)**

```
┌───────────────────────────────────────┐
│        Il Nostro Team                 │
│      (Centered Title H3)              │
└───────────────────────────────────────┘

┌───────────────────────────────────────┐
│         ┌─────────┐                   │
│         │  Icon   │                   │
│         └─────────┘                   │
│                                       │
│           Damiano                     │
│       Creative Director               │
│                                       │
│       Description text...             │
│                                       │
│    ┌──────┐ ┌──────┐ ┌──────┐       │
│    │Skill1│ │Skill2│ │Skill3│       │
│    └──────┘ └──────┘ └──────┘       │
└───────────────────────────────────────┘
              ↓ gap: 1rem (16px)
┌───────────────────────────────────────┐
│         ┌─────────┐                   │
│         │  Icon   │                   │
│         └─────────┘                   │
│                                       │
│          Alessandro                   │
│       Motion Designer                 │
│                                       │
│       Description text...             │
│                                       │
│    ┌──────┐ ┌──────┐ ┌──────┐       │
│    │Skill1│ │Skill2│ │Skill3│       │
│    └──────┘ └──────┘ └──────┘       │
└───────────────────────────────────────┘
              ↓ gap: 1rem (16px)
┌───────────────────────────────────────┐
│         ┌─────────┐                   │
│         │  Icon   │                   │
│         └─────────┘                   │
│                                       │
│           Matteo                      │
│          3D Artist                    │
│                                       │
│       Description text...             │
│                                       │
│    ┌──────┐ ┌──────┐ ┌──────┐       │
│    │Skill1│ │Skill2│ │Skill3│       │
│    └──────┘ └──────┘ └──────┘       │
└───────────────────────────────────────┘
```

---

## 📏 Spacing Scale Reference

### **Section Padding (Vertical)**

```
Mobile (< 640px):     py-8   →  32px top & bottom
Tablet (640-1023px):  py-12  →  48px top & bottom
Desktop (≥ 1024px):   py-14  →  56px top & bottom
```

### **Header Margins (Below Titles)**

```
Mobile:   mb-8   →  32px
Tablet:   mb-10  →  40px
Desktop:  mb-12  →  48px
```

### **Title Margins (H2)**

```
Mobile:   mb-3  →  12px
Tablet:   mb-4  →  16px
Desktop:  mb-5  →  20px
```

### **Subsection Margins (H3)**

```
Mobile:   mb-6   →  24px
Tablet:   mb-8   →  32px
Desktop:  mb-10  →  40px
```

### **Grid Gaps**

```
Team Section:
  Mobile:   gap-4   →  16px
  Tablet:   gap-5   →  20px
  Desktop:  gap-6   →  24px

Services Section:
  Mobile:   gap-3   →  12px
  Tablet:   gap-5   →  20px
  Desktop:  gap-6   →  24px

Values Section:
  Mobile:   gap-3   →  12px
  Tablet:   gap-5   →  20px
  Desktop:  gap-6   →  24px
```

---

## 🎨 Typography Hierarchy

### **Visual Scale**

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  H1 (Hero Title)                                        │
│  text-4xl sm:text-5xl lg:text-7xl                      │
│  Font Size: 36px → 48px → 72px                         │
│  Line Height: 1.1                                       │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  H2 (Section Titles)                                    │
│  text-3xl sm:text-4xl lg:text-5xl                      │
│  Font Size: 30px → 36px → 48px                         │
│  Margin Below: mb-3 sm:mb-4 lg:mb-5                    │
│  All Sections: Services, Portfolio, About, Contact     │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  H3 (Subsection Titles)                                 │
│  text-2xl sm:text-3xl                                   │
│  Font Size: 24px → 30px                                │
│  Margin Below: mb-6 sm:mb-8 lg:mb-10                   │
│  Examples: "Il Nostro Team", "I Nostri Valori"        │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  H4 (Card Titles)                                       │
│  text-base sm:text-lg lg:text-xl                       │
│  Font Size: 16px → 18px → 20px                         │
│  Examples: Team member names, Value titles             │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Body Text (Large)                                      │
│  text-lg sm:text-xl                                     │
│  Font Size: 18px → 20px                                │
│  Usage: Section introductions                          │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Body Text (Base)                                       │
│  text-base sm:text-lg                                   │
│  Font Size: 16px → 18px                                │
│  Usage: Main content, descriptions                     │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Body Text (Small)                                      │
│  text-xs sm:text-sm lg:text-base                       │
│  Font Size: 12px → 14px → 16px                         │
│  Usage: Card details, metadata                         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 📦 Card Anatomy

### **Team Card Structure**

```
┌─────────────────────────────────────────┐ ← Border: border-brand-gray/30
│  Padding: p-4 sm:p-5 lg:p-6            │   Radius: rounded-2xl sm:rounded-3xl
│                                          │   Display: flex flex-col
│  ┌────────────────────────────────────┐ │
│  │        Icon Container              │ │ ← Size: w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16
│  │      (Centered Avatar)             │ │   Margin: mb-2 sm:mb-3 lg:mb-4
│  └────────────────────────────────────┘ │
│                                          │
│         Member Name (H4)                │ ← Size: text-base sm:text-lg lg:text-xl
│  text-base sm:text-lg lg:text-xl       │   Margin: mb-1
│                                          │
│        Role Title                       │ ← Color: text-brand-orange
│  text-xs sm:text-sm lg:text-base       │   Margin: mb-2 sm:mb-3 lg:mb-4
│                                          │
│         Description                     │ ← Size: text-xs sm:text-sm lg:text-base
│  This grows to fill space               │   Flex: flex-grow
│  text-xs sm:text-sm lg:text-base       │   Margin: mb-3 sm:mb-4
│  (flex-grow makes equal heights)        │
│                                          │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ │ ← Skills at bottom
│  │Skill1│ │Skill2│ │Skill3│ │Skill4│ │   (auto-pushed by flex-grow)
│  └──────┘ └──────┘ └──────┘ └──────┘ │
│                                          │
└─────────────────────────────────────────┘
```

**Key Measurements:**
- Card padding: `16px → 20px → 24px` (responsive)
- Icon size: `48px → 56px → 64px` (responsive)
- Border radius: `16px → 24px` (responsive)
- Gap between skills: `gap-1.5 sm:gap-2` (6px → 8px)

---

## 🔄 Responsive Transformation

### **Team Section Breakpoint Behavior**

```
Mobile (< 640px):
┌──────────────┐
│   Damiano    │
└──────────────┘
       ↓
┌──────────────┐
│  Alessandro  │
└──────────────┘
       ↓
┌──────────────┐
│    Matteo    │
└──────────────┘

Tablet/Desktop (≥ 640px):
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│   Damiano    │ │  Alessandro  │ │    Matteo    │
└──────────────┘ └──────────────┘ └──────────────┘
    24px gap         24px gap
```

### **Section Height Comparison**

```
BEFORE (Old Layout):
├─ Header:      80px    ┐
├─ About:      2400px   │
├─ Services:   2200px   │  Total: ~7200px
├─ Portfolio:  1800px   │
├─ Contact:     800px   │
└─ Footer:      120px   ┘

AFTER (New Layout):
├─ Header:      80px    ┐
├─ About:      1600px   │  33% reduction
├─ Services:   1500px   │  Total: ~4930px
├─ Portfolio:  1250px   │  32% less scrolling!
├─ Contact:     550px   │
└─ Footer:      120px   ┘
```

---

## 🎯 Alignment Reference Points

### **Horizontal Alignment**

All section titles align to the same center point:

```
        ┌───────────────────────────────────┐
        │    I Nostri Servizi (H2)         │ ← Centered
        └───────────────────────────────────┘
                       ↓
        ┌───────────────────────────────────┐
        │       Portfolio (H2)              │ ← Centered
        └───────────────────────────────────┘
                       ↓
        ┌───────────────────────────────────┐
        │      Chi Siamo (H2)               │ ← Centered
        └───────────────────────────────────┘
```

**Implementation:**
- All use: `text-center`
- All use: `px-4` for edge padding
- All use: `font-display font-bold`
- All use: Same responsive text sizes

### **Vertical Rhythm**

```
Section Top Padding ──┐
                      32px (py-8)
Section Title ────────┤
                      12px (mb-3)
Subtitle/Intro ───────┤
                      32px (mb-8)
Content Block 1 ──────┤
                      32px (mb-8)
Content Block 2 ──────┤
                      32px (py-8)
Section Bottom Padding┘
```

---

## 💡 Implementation Checklist

### **Team Section:**
- [x] Changed grid to `grid-cols-1 sm:grid-cols-3`
- [x] Added `max-w-6xl mx-auto` for centering
- [x] Set consistent gaps: `gap-4 sm:gap-5 lg:gap-6`
- [x] Added `flex flex-col` to cards
- [x] Added `flex-grow` to description for equal heights
- [x] Alessandro positioned in center (index 1)

### **Spacing Reduction:**
- [x] Section padding: 30-40% reduction
- [x] Header margins: 25-30% reduction
- [x] Title margins: 40-50% reduction
- [x] Card padding: 15-25% reduction
- [x] Grid gaps: 15-25% reduction

### **Text Consistency:**
- [x] All H2 titles: `text-3xl sm:text-4xl lg:text-5xl`
- [x] All H3 titles: `text-2xl sm:text-3xl`
- [x] All title margins standardized
- [x] All text centered with `text-center`
- [x] Consistent horizontal padding with `px-4`

---

## 🚀 Quick Reference

**Team Grid Code:**
```tsx
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-6xl mx-auto">
```

**Standard Section Padding:**
```tsx
<section className="py-8 sm:py-12 lg:py-14">
```

**Standard Header Margin:**
```tsx
<div className="mb-8 sm:mb-10 lg:mb-12">
```

**Standard Title:**
```tsx
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-brand-white mb-3 sm:mb-4 lg:mb-5 px-4">
```

---

*Visual reference guide for layout implementation*
*All measurements in pixels and rem units*
*Responsive breakpoints: 640px (sm) and 1024px (lg)*
