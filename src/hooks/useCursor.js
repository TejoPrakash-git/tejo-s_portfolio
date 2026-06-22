import { useEffect, useRef } from 'react';

export function useCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onEnterLink = () => {
      dot.classList.add('cursor-dot--hover');
      ringEl.classList.add('cursor-ring--hover');
    };

    const onLeaveLink = () => {
      dot.classList.remove('cursor-dot--hover');
      ringEl.classList.remove('cursor-ring--hover');
    };

    function animate() {
      ring.current.x += (pos.current.x - ring.current.x) * 0.1;
      ring.current.y += (pos.current.y - ring.current.y) * 0.1;

      dot.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      ringEl.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`;

      raf.current = requestAnimationFrame(animate);
    }

    animate();
    document.addEventListener('mousemove', onMove);

    const linkObserver = new MutationObserver(() => {
      document.querySelectorAll('a, button, [data-cursor-hover]').forEach(el => {
        el.removeEventListener('mouseenter', onEnterLink);
        el.removeEventListener('mouseleave', onLeaveLink);
        el.addEventListener('mouseenter', onEnterLink);
        el.addEventListener('mouseleave', onLeaveLink);
      });
    });

    linkObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
      linkObserver.disconnect();
    };
  }, []);

  return { dotRef, ringRef };
}
