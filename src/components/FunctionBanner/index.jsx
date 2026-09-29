import React, {useEffect, useRef, useState} from 'react';
import styles from './styles.module.css';

export default function FunctionBanner({children}) {
  const canvasRef = useRef(null);
  const timeRef = useRef(0);
  const [paused, setPaused] = useState(true);
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPaused(motion.matches);
    update();
    motion.addEventListener('change', update);
    return () => motion.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return undefined;
    let frame, width = 1, height = 1, previous;
    function draw() {
      context.clearRect(0, 0, width, height);
      const color = getComputedStyle(canvas).getPropertyValue('--mesh-color').trim();
      const size = Math.min(width * .3, height * .6);
      const originX = width * (width < 700 ? .67 : .75);
      const originY = height * .53;
      const phase = timeRef.current;
      const project = (u, v) => {
        const radius = Math.sqrt(u * u + v * v);
        const elevation = Math.sin(radius * 4 - phase) * .34 + Math.cos(u * 3 + phase * .45) * Math.sin(v * 3 - phase * .3) * .24;
        return [originX + (u - v) * size * .62, originY + (u + v) * size * .24 - elevation * size * .8];
      };
      context.strokeStyle = color;
      context.lineWidth = 1;
      for (let axis = 0; axis < 2; axis++) {
        for (let row = 0; row <= 30; row++) {
          const fixed = row / 15 - 1;
          context.globalAlpha = .2 + row / 30 * .45;
          context.beginPath();
          for (let column = 0; column <= 60; column++) {
            const variable = column / 30 - 1;
            const point = axis === 0 ? project(fixed, variable) : project(variable, fixed);
            if (column === 0) context.moveTo(...point);
            else context.lineTo(...point);
          }
          context.stroke();
        }
      }
      context.globalAlpha = 1;
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
      if (!paused && !document.hidden) frame = requestAnimationFrame(animate);
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
  }, [paused]);
  return (
    <section className={styles.banner} aria-label="计算机知识库">
      <canvas ref={canvasRef} role="img" aria-label="由正弦与余弦函数绘制、随时间变化的曲面" />
      <div className={styles.content}>{children}</div>
      <button className={styles.playback} type="button" onClick={() => setPaused(!paused)} aria-label={paused ? '播放动画' : '暂停动画'}>{paused ? '▷ 播放' : 'Ⅱ 暂停'}</button>
    </section>
  );
}
