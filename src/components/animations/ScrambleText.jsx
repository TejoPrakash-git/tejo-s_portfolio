import { useEffect, useRef, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&';

export default function ScrambleText({
  phrases,
  className = '',
  speed = 30,
  pauseDuration = 3000,
}) {
  const [display, setDisplay] = useState('');
  const phraseIndex = useRef(0);
  const timeouts = useRef([]);

  function clear() {
    timeouts.current.forEach(clearTimeout);
    timeouts.current = [];
  }

  function scrambleTo(target, onDone) {
    const totalFrames = target.length * 5;
    let frame = 0;

    function tick() {
      setDisplay(
        target
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' ';
            if (i < frame / 5) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join('')
      );
      frame++;
      if (frame <= totalFrames) {
        const id = setTimeout(tick, speed);
        timeouts.current.push(id);
      } else {
        setDisplay(target);
        if (onDone) {
          const id = setTimeout(onDone, pauseDuration);
          timeouts.current.push(id);
        }
      }
    }

    tick();
  }

  function cycle() {
    const phrase = phrases[phraseIndex.current % phrases.length];
    phraseIndex.current++;
    scrambleTo(phrase, cycle);
  }

  useEffect(() => {
    const id = setTimeout(cycle, 600);
    timeouts.current.push(id);
    return clear;
  }, []);

  return <span className={className}>{display || '\u00A0'}</span>;
}
