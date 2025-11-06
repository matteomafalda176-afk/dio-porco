# Scrollable Header - Code Examples

Complete code examples for implementing and customizing the scrollable header.

---

## 📋 Table of Contents

1. [Basic Implementation](#basic-implementation)
2. [CSS Customization](#css-customization)
3. [JavaScript Customization](#javascript-customization)
4. [Accessibility Examples](#accessibility-examples)
5. [Mobile Menu Examples](#mobile-menu-examples)
6. [Performance Examples](#performance-examples)

---

## 1. Basic Implementation

### Complete Header Component (Simplified)

```tsx
import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  }, []);

  return (
    <header className={`fixed top-0 w-full z-40 ${
      scrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <nav>
        <button onClick={() => scrollToSection('home')}>
          Home
        </button>
        <button onClick={() => scrollToSection('about')}>
          About
        </button>
      </nav>
    </header>
  );
};

export default Header;
```

---

## 2. CSS Customization

### Example 1: Change Header Height

```css
/* Default: ~80px total height */
header {
  padding: 1.5rem 0;  /* 24px top and bottom */
}

/* Taller header: ~100px */
header {
  padding: 2rem 0;  /* 32px top and bottom */
}

/* Compact header: ~60px */
header {
  padding: 1rem 0;  /* 16px top and bottom */
}

/* Don't forget to update scroll-margin! */
section {
  scroll-margin-top: 100px;  /* Match your header height */
}
```

### Example 2: Custom Scrolled State

```tsx
// Transparent to solid
<header className={`fixed w-full z-40 transition-all ${
  scrolled
    ? 'bg-gray-900 shadow-lg'
    : 'bg-transparent'
}`}>

// Transparent to gradient
<header className={`fixed w-full z-40 transition-all ${
  scrolled
    ? 'bg-gradient-to-r from-blue-900 to-purple-900'
    : 'bg-transparent'
}`}>

// Transparent to colored with blur
<header className={`fixed w-full z-40 transition-all ${
  scrolled
    ? 'bg-indigo-900/90 backdrop-blur-lg shadow-xl'
    : 'bg-transparent'
}`}>
```

### Example 3: Custom Active State Styling

```tsx
// Underline indicator
<button className={`relative ${
  activeSection === 'home' ? 'text-blue-400' : 'text-white'
}`}>
  Home
  <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-400 transition-all ${
    activeSection === 'home' ? 'w-full' : 'w-0'
  }`}></span>
</button>

// Background indicator
<button className={`px-4 py-2 rounded-lg transition-all ${
  activeSection === 'home'
    ? 'bg-blue-500 text-white'
    : 'bg-transparent text-gray-300 hover:bg-gray-800'
}`}>
  Home
</button>

// Dot indicator
<button className="flex items-center gap-2">
  {activeSection === 'home' && (
    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
  )}
  Home
</button>
```

---

## 3. JavaScript Customization

### Example 1: Custom Scroll Threshold

```tsx
// Activate after different scroll distances
useEffect(() => {
  const handleScroll = () => {
    // Option 1: Activate immediately
    setScrolled(window.scrollY > 0);

    // Option 2: Activate after 50px
    setScrolled(window.scrollY > 50);

    // Option 3: Activate after viewport height
    setScrolled(window.scrollY > window.innerHeight);

    // Option 4: Activate after specific element
    const element = document.getElementById('trigger-point');
    if (element) {
      const triggerY = element.offsetTop;
      setScrolled(window.scrollY > triggerY);
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

### Example 2: Add Scroll Direction Detection

```tsx
const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

useEffect(() => {
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setScrollDirection('down');
    } else if (currentScrollY < lastScrollY) {
      setScrollDirection('up');
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// Use scroll direction
<header className={`fixed w-full z-40 transition-transform ${
  scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
}`}>
```

### Example 3: Custom Navigation Items

```tsx
// Static navigation items
const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Services', id: 'services' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Contact', id: 'contact' },
];

// Dynamic navigation with icons
const navItems = [
  { label: 'Home', id: 'home', icon: <Home size={20} /> },
  { label: 'About', id: 'about', icon: <User size={20} /> },
  { label: 'Work', id: 'work', icon: <Briefcase size={20} /> },
  { label: 'Contact', id: 'contact', icon: <Mail size={20} /> },
];

// Render with icons
{navItems.map((item) => (
  <button
    key={item.id}
    onClick={() => scrollToSection(item.id)}
    className="flex items-center gap-2"
  >
    {item.icon}
    <span>{item.label}</span>
  </button>
))}

// Conditional navigation (show/hide based on auth)
const navItems = user ? [
  { label: 'Dashboard', id: 'dashboard' },
  { label: 'Profile', id: 'profile' },
  { label: 'Logout', id: 'logout' },
] : [
  { label: 'Home', id: 'home' },
  { label: 'Login', id: 'login' },
];
```

### Example 4: Advanced Scroll Offset Calculation

```tsx
const scrollToSection = useCallback((sectionId: string) => {
  const element = document.getElementById(sectionId);
  const header = document.querySelector('header');

  if (element && header) {
    // Dynamic header height
    const headerHeight = header.offsetHeight;

    // Add extra padding
    const extraPadding = 20;

    // Calculate position
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY
      - headerHeight
      - extraPadding;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}, []);
```

---

## 4. Accessibility Examples

### Example 1: Enhanced Keyboard Navigation

```tsx
const handleKeyDown = (e: React.KeyboardEvent, sectionId: string) => {
  // Handle Enter and Space
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    scrollToSection(sectionId);
  }

  // Handle Escape to close mobile menu
  if (e.key === 'Escape' && isMenuOpen) {
    setIsMenuOpen(false);
  }
};

<button
  onClick={() => scrollToSection('home')}
  onKeyDown={(e) => handleKeyDown(e, 'home')}
  aria-label="Navigate to home section"
>
  Home
</button>
```

### Example 2: Skip Navigation Link

```tsx
<header>
  {/* Skip to main content link for keyboard users */}
  <a
    href="#main-content"
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white text-black px-4 py-2 rounded"
  >
    Skip to main content
  </a>

  {/* Regular navigation */}
  <nav>...</nav>
</header>

{/* Main content with ID */}
<main id="main-content">
  {/* Page content */}
</main>

/* CSS for sr-only */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.focus\:not-sr-only:focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

### Example 3: Screen Reader Announcements

```tsx
import { useEffect, useRef } from 'react';

const Header: React.FC = () => {
  const announceRef = useRef<HTMLDivElement>(null);

  const announceNavigation = (section: string) => {
    if (announceRef.current) {
      announceRef.current.textContent = `Navigating to ${section} section`;
    }
  };

  return (
    <header>
      {/* Screen reader only announcements */}
      <div
        ref={announceRef}
        className="sr-only"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      />

      <nav>
        <button onClick={() => {
          scrollToSection('home');
          announceNavigation('home');
        }}>
          Home
        </button>
      </nav>
    </header>
  );
};
```

---

## 5. Mobile Menu Examples

### Example 1: Slide-in Mobile Menu

```tsx
{/* Mobile menu with slide animation */}
<div className={`
  fixed inset-y-0 right-0 w-64 bg-gray-900
  transform transition-transform duration-300 ease-in-out
  ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
  md:hidden
`}>
  <nav className="p-6">
    {navItems.map((item) => (
      <button key={item.id} onClick={() => scrollToSection(item.id)}>
        {item.label}
      </button>
    ))}
  </nav>
</div>

{/* Overlay backdrop */}
{isMenuOpen && (
  <div
    className="fixed inset-0 bg-black/50 md:hidden"
    onClick={() => setIsMenuOpen(false)}
  />
)}
```

### Example 2: Full-Screen Mobile Menu

```tsx
{/* Full-screen overlay menu */}
{isMenuOpen && (
  <div className="fixed inset-0 bg-gray-900 z-50 md:hidden animate-fade-in">
    <div className="flex flex-col h-full p-8">
      {/* Close button */}
      <button
        onClick={() => setIsMenuOpen(false)}
        className="self-end mb-8"
        aria-label="Close menu"
      >
        <X size={32} />
      </button>

      {/* Navigation items - centered */}
      <nav className="flex-1 flex flex-col justify-center space-y-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="text-3xl font-bold text-white hover:text-blue-400 transition-colors"
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  </div>
)}
```

### Example 3: Drawer Menu with Sections

```tsx
{/* Drawer menu with grouped sections */}
{isMenuOpen && (
  <div className="fixed inset-y-0 right-0 w-80 bg-gray-900 overflow-y-auto md:hidden">
    <div className="p-6">
      {/* Close button */}
      <button onClick={() => setIsMenuOpen(false)} className="mb-8">
        <X size={24} />
      </button>

      {/* Navigation section */}
      <div className="mb-8">
        <h3 className="text-gray-400 text-sm font-semibold mb-4">
          Navigation
        </h3>
        <nav className="space-y-3">
          {mainNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left text-white hover:text-blue-400"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Quick links section */}
      <div>
        <h3 className="text-gray-400 text-sm font-semibold mb-4">
          Quick Links
        </h3>
        <nav className="space-y-3">
          {quickLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-white hover:text-blue-400"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  </div>
)}
```

---

## 6. Performance Examples

### Example 1: Optimized Scroll Handler

```tsx
useEffect(() => {
  let rafId: number | null = null;
  let lastScrollY = window.scrollY;
  let ticking = false;

  const handleScroll = () => {
    if (!ticking) {
      rafId = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        // Only update if scrolled more than threshold
        if (Math.abs(currentScrollY - lastScrollY) > 5) {
          setScrolled(currentScrollY > 20);
          lastScrollY = currentScrollY;
        }

        ticking = false;
      });

      ticking = true;
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => {
    window.removeEventListener('scroll', handleScroll);
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
    }
  };
}, []);
```

### Example 2: Memoized Navigation Items

```tsx
import { useMemo } from 'react';

const navItems = useMemo(() => [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Contact', id: 'contact' },
], []);

// Memoized scroll function
const scrollToSection = useCallback((sectionId: string) => {
  // ... scroll logic
}, []);
```

### Example 3: Lazy Loading Icons

```tsx
import { lazy, Suspense } from 'react';

// Lazy load icon components
const HomeIcon = lazy(() => import('lucide-react').then(m => ({ default: m.Home })));
const MenuIcon = lazy(() => import('lucide-react').then(m => ({ default: m.Menu })));

// Use with Suspense
<Suspense fallback={<div className="w-6 h-6" />}>
  <MenuIcon size={24} />
</Suspense>
```

---

## 🎯 Complete Example: Production-Ready Header

```tsx
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Menu, X } from 'lucide-react';

interface NavItem {
  label: string;
  id: string;
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems: NavItem[] = useMemo(() => [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'About', id: 'about' },
  ], []);

  // Optimized scroll detection
  useEffect(() => {
    let rafId: number | null = null;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (rafId !== null) return;

      rafId = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;

        if (Math.abs(currentScrollY - lastScrollY) > 5) {
          setScrolled(currentScrollY > 20);
          lastScrollY = currentScrollY;
        }

        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  // Active section detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -80% 0px',
        threshold: 0
      }
    );

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [navItems]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Smooth scroll handler
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setIsMenuOpen(false);
      setActiveSection(sectionId);
    }
  }, []);

  return (
    <header
      role="banner"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-md shadow-sm border-b border-gray-700'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white">
              Your Brand
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" aria-label="Primary navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                aria-label={`Navigate to ${item.label}`}
                aria-current={activeSection === item.id ? 'page' : undefined}
                className={`text-white hover:text-gray-300 font-medium transition-all duration-300 relative group focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1 ${
                  activeSection === item.id ? 'text-blue-400' : ''
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-300 rounded-full ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden text-white p-2 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden bg-black/98 backdrop-blur-md rounded-2xl mt-4 p-6 shadow-lg border border-gray-700"
          >
            <nav className="flex flex-col space-y-4" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  aria-label={`Navigate to ${item.label}`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                  className={`text-left text-white hover:text-blue-400 font-medium transition-colors duration-300 py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    activeSection === item.id ? 'text-blue-400 bg-gray-800' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
```

---

## 📚 Usage in App

```tsx
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="home" className="min-h-screen">
          Home Content
        </section>
        <section id="services" className="min-h-screen">
          Services Content
        </section>
        <section id="portfolio" className="min-h-screen">
          Portfolio Content
        </section>
        <section id="about" className="min-h-screen">
          About Content
        </section>
      </main>
    </>
  );
}

export default App;
```

---

**Version:** 1.0
**Status:** Production Ready
**Documentation:** Complete
