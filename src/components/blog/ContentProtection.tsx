import { useEffect } from "react";

interface ContentProtectionProps {
  children: React.ReactNode;
}

const ContentProtection = ({ children }: ContentProtectionProps) => {
  useEffect(() => {
    // Disable keyboard shortcuts for copying
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+C, Ctrl+X, Ctrl+A, Ctrl+S, Ctrl+U (view source), Ctrl+P (print)
      if (e.ctrlKey && ['c', 'x', 'a', 's', 'u', 'p'].includes(e.key.toLowerCase())) {
        e.preventDefault();
        return false;
      }
      // Cmd+C, Cmd+X, Cmd+A, Cmd+S, Cmd+U (Mac)
      if (e.metaKey && ['c', 'x', 'a', 's', 'u', 'p'].includes(e.key.toLowerCase())) {
        e.preventDefault();
        return false;
      }
      // F12 (DevTools)
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }
      // Ctrl+Shift+I (DevTools), Ctrl+Shift+J (Console), Ctrl+Shift+C (Inspect)
      if (e.ctrlKey && e.shiftKey && ['i', 'j', 'c'].includes(e.key.toLowerCase())) {
        e.preventDefault();
        return false;
      }
    };

    // Disable text selection via double-click/triple-click
    const handleSelectStart = (e: Event) => {
      const target = e.target as HTMLElement;
      // Allow selection in inputs and textareas
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        return true;
      }
      e.preventDefault();
      return false;
    };

    // Disable drag
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable copy event
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('copy', handleCopy);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('copy', handleCopy);
    };
  }, []);

  return (
    <div 
      className="protected-content"
      onContextMenu={(e) => e.preventDefault()}
      onCopy={(e) => e.preventDefault()}
      onCut={(e) => e.preventDefault()}
      style={{
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',
        WebkitTouchCallout: 'none',
      }}
    >
      {children}
    </div>
  );
};

export default ContentProtection;
