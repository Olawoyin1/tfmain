import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    const cur = document.getElementById('cur');
    const ring = document.getElementById('curRing');
    
    if (!cur || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cur.style.left = mx + 'px';
      cur.style.top = my + 'px';
    };

    const loop = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      requestAnimationFrame(loop);
    };

    document.addEventListener('mousemove', handleMouseMove);
    loop();

    // Handle hover effects on interactive elements
    const interactiveElements = document.querySelectorAll('a, button');
    
    const handleMouseEnter = () => {
      cur.style.width = '20px';
      cur.style.height = '20px';
      ring.style.transform = 'translate(-50%, -50%) scale(1.6)';
    };

    const handleMouseLeave = () => {
      cur.style.width = '12px';
      cur.style.height = '12px';
      ring.style.transform = 'translate(-50%, -50%) scale(1)';
    };

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" id="cur"></div>
      <div className="cursor-ring" id="curRing"></div>
    </>
  );
};

export default CustomCursor;
