'use client';
import { PRODUCT_CATEGORIES } from '@/config';
import React, { useEffect, useRef, useState } from 'react';
import NavItem from './NavItem';
import { useOnClickOutside } from '@/hooks/use-on-click-outside';

function NavItems() {
  const [activeIndex, setActiveIndex] = useState<null | Number>(null);

  useEffect(() => {
    const hadeler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveIndex(null);
      }
    };
    document.addEventListener('keydown', hadeler);
    return () => document.removeEventListener('keydown', hadeler);
  }, []);

  const isAnyOpen = activeIndex !== null;

  const navRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(navRef, () => setActiveIndex(null));

  return (
    <div className="flex gap-4 h-full" ref={navRef}>
      {PRODUCT_CATEGORIES.map((category, i) => {
        const handelOpen = () => {
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        };
        const isOpen = i === activeIndex;
        return (
          <NavItem
            category={category}
            handelOpen={handelOpen}
            isOpen={isOpen}
            key={category.value}
            isAnyOpen={isAnyOpen}
          />
        );
      })}
    </div>
  );
}

export default NavItems;
