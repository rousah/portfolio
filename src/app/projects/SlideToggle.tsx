import { useState, useRef, useEffect } from 'react';

export function SlideToggle({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: React.ReactNode;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(`${contentRef.current?.scrollHeight}px`);
    } else {
      setMaxHeight('0px');
    }
  }, [isOpen]);

  return (
    <div
      ref={contentRef}
      className="slide-toggle"
      style={{
        maxHeight,
        transition: 'max-height 0.4s ease',
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  );
}
