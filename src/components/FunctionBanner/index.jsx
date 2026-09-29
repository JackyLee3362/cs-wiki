import React, {useEffect, useRef} from 'react';
import styles from './styles.module.css';

export default function FunctionBanner({children}) {
  const canvasRef = useRef(null);
  const timeRef = useRef(0);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return undefined;
    let frame, width = 1, height = 1, previous;
    function draw() {
      context.clearRect(0, 0, width, height);
      const compact = width < 700;
      const size = Math.min(width * (compact ? .4 : .31), height * (compact ? .33 : .46));
      const originX = width * (compact ? .5 : .76);
      const originY = height * (compact ? .76 : .56);
      const phase = timeRef.current;
      const project = (u, v, z = 0) => {
        const sway = Math.sin(phase * .35) * .025;
        return [originX + (u - v) * size * .72, originY + (u + v) * size * (.32 + sway) - z * size];
      };
      function line(points, color, thickness = 1) {
        context.beginPath();
        points.forEach((p, i) => i ? context.lineTo(...p) : context.moveTo(...p));
        context.strokeStyle = color; context.lineWidth = thickness; context.stroke();
      }
      function polygon(points, fill, stroke) {
        context.beginPath();
        points.forEach((p, i) => i ? context.lineTo(...p) : context.moveTo(...p));
        context.closePath(); context.fillStyle = fill; context.fill();
        if (stroke) {context.strokeStyle = stroke; context.lineWidth = 1; context.stroke();}
      }
      const glow = context.createRadialGradient(originX, originY, 0, originX, originY, size * 1.6);
      glow.addColorStop(0, 'rgba(50,211,188,.12)'); glow.addColorStop(1, 'rgba(50,211,188,0)');
      context.fillStyle = glow; context.fillRect(0, 0, width, height);
      polygon([[-1.2,-1.2],[1.2,-1.2],[1.2,1.2],[-1.2,1.2]].map(p => project(...p)), 'rgba(14,32,42,.7)', 'rgba(109,195,205,.18)');
      for (let i = -12; i <= 12; i++) {
        const n = i / 10;
        line([project(n,-1.2),project(n,1.2)], 'rgba(85,166,180,.07)');
        line([project(-1.2,n),project(1.2,n)], 'rgba(85,166,180,.07)');
      }
      // Four banks of circuit traces; packets travel along each projected path.
      for (let side = 0; side < 4; side++) {
        for (let i = 0; i < 7; i++) {
          const offset = (i - 3) * .105;
          const reach = .84 + (i % 3) * .12;
          const rotate = ([x,y]) => side === 0 ? [x,y] : side === 1 ? [-y,x] : side === 2 ? [-x,-y] : [y,-x];
          const points = [[.38,offset],[.57,offset],[.72,offset + (i - 3) * .06],[reach,offset + (i - 3) * .06]].map(p => project(...rotate(p)));
          line(points, i % 2 ? 'rgba(73,211,195,.3)' : 'rgba(100,169,226,.3)', 1.3);
          const progress = ((phase * .4 + side * .24 + i * .137) % 1) * (points.length - 1);
          const index = Math.floor(progress), fraction = progress - index;
          const a = points[index], b = points[Math.min(index + 1, points.length - 1)];
          const x = a[0] + (b[0] - a[0]) * fraction, y = a[1] + (b[1] - a[1]) * fraction;
          context.shadowColor = '#66e4d3'; context.shadowBlur = 12;
          context.fillStyle = i % 2 ? '#71e8d3' : '#93c8f1';
          context.beginPath(); context.arc(x,y,2,0,Math.PI*2); context.fill(); context.shadowBlur = 0;
          const end = points[points.length - 1];
          context.beginPath(); context.arc(...end, 3, 0, Math.PI*2); context.strokeStyle = 'rgba(126,210,213,.45)'; context.stroke();
        }
      }
      const float = .14 + Math.sin(phase * .8) * .035;
      const corners = [[-.37,-.37],[.37,-.37],[.37,.37],[-.37,.37]];
      const top = corners.map(p => project(...p,float));
      const bottom = corners.map(p => project(...p,float-.13));
      polygon([top[1],top[2],bottom[2],bottom[1]], '#122c38', 'rgba(107,217,210,.4)');
      polygon([top[2],top[3],bottom[3],bottom[2]], '#163440', 'rgba(107,217,210,.4)');
      polygon(top, '#153b46', 'rgba(124,242,219,.8)');
      polygon([[-.28,-.28],[.28,-.28],[.28,.28],[-.28,.28]].map(p => project(...p,float+.01)), '#102b35', 'rgba(104,207,200,.28)');
      for (let side = 0; side < 4; side++) {
        for (let i = -3; i <= 3; i++) {
          const rotate = ([x,y]) => side === 0 ? [x,y] : side === 1 ? [-y,x] : side === 2 ? [-x,-y] : [y,-x];
          line([[.37,i*.085],[.46,i*.085]].map(p=>project(...rotate(p),float-.04)), '#78b8bb', 2);
        }
      }
      context.textAlign = 'center'; context.textBaseline = 'middle';
      context.font = '10px ui-monospace, monospace'; context.fillStyle = 'rgba(138,190,198,.65)';
      context.fillText('COMPUTER SCIENCE',originX,originY+size*1.02);
    }
    function animate(timestamp) {
      if (previous !== undefined) timeRef.current += Math.min(timestamp - previous, 50) * .00065;
      previous = timestamp;
      draw();
      frame = requestAnimationFrame(animate);
    }
    function resize() {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(rect.width, 1); height = Math.max(rect.height, 1);
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio); canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      draw();
    }
    function updateMotion() {
      cancelAnimationFrame(frame);
      previous = undefined;
      if (!document.hidden) frame = requestAnimationFrame(animate);
      else draw();
    }
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    document.addEventListener('visibilitychange', updateMotion);
    resize(); updateMotion();
    return () => {
      cancelAnimationFrame(frame); observer.disconnect();
      document.removeEventListener('visibilitychange', updateMotion);
    };
  }, []);
  return (
    <section className={styles.banner} aria-label="计算机知识库">
      <canvas ref={canvasRef} role="img" aria-label="实时绘制的处理器与电路板，数据脉冲沿线路流动" />
      <div className={styles.content}>{children}</div>
    </section>
  );
}
