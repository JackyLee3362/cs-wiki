import React, {useEffect, useRef, useState} from 'react';
import OriginalSearchBar from '@theme-original/SearchBar';
import {useLocation} from '@docusaurus/router';
import styles from './styles.module.css';

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname]);
  useEffect(() => {
    function shortcut(event) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setOpen((value) => !value);
      }
    }
    document.addEventListener('keydown', shortcut);
    return () => document.removeEventListener('keydown', shortcut);
  }, []);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!open) {
      if (dialog.open) dialog.close();
      return undefined;
    }
    dialog.showModal();
    dialog.querySelector('input')?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {document.body.style.overflow = previousOverflow;};
  }, [open]);
  return (
    <>
      <button type="button" className={styles.trigger} onClick={() => setOpen(true)} aria-label="搜索知识库" aria-haspopup="dialog">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4 4" /></svg>
        <span>搜索</span><kbd>Ctrl K</kbd>
      </button>
      <dialog ref={dialogRef} className={styles.dialog} aria-label="搜索知识库" onCancel={() => setOpen(false)} onClose={() => setOpen(false)} onClick={(event) => {
        if (event.target === event.currentTarget) {
          const rect = event.currentTarget.getBoundingClientRect();
          if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) setOpen(false);
        }
      }}>
        <div className={styles.heading}><span>搜索知识库</span><button type="button" onClick={() => setOpen(false)} aria-label="关闭搜索">✕</button></div>
        <OriginalSearchBar />
        <p className={styles.hint}>输入关键词搜索文档 · Esc 关闭</p>
      </dialog>
    </>
  );
}
