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
    <div className={styles.controls}>
      <a className="navbar-github-link" href="https://github.com/jackylee3362/cs-wiki" target="_blank" rel="noopener noreferrer" aria-label="GitHub 仓库（新窗口打开）" title="GitHub · cs-wiki">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 .75a11.25 11.25 0 0 0-3.558 21.922c.563.104.769-.244.769-.542 0-.267-.01-.975-.015-1.914-3.13.68-3.79-1.508-3.79-1.508-.512-1.3-1.25-1.647-1.25-1.647-1.022-.7.078-.686.078-.686 1.13.079 1.725 1.16 1.725 1.16 1.005 1.723 2.635 1.225 3.277.937.103-.728.393-1.225.715-1.507-2.499-.284-5.126-1.25-5.126-5.565 0-1.229.439-2.234 1.16-3.021-.116-.285-.503-1.429.11-2.978 0 0 .945-.303 3.094 1.154A10.78 10.78 0 0 1 12 6.177c.956.004 1.919.129 2.819.379 2.148-1.457 3.092-1.154 3.092-1.154.615 1.549.228 2.693.112 2.978.722.787 1.158 1.792 1.158 3.021 0 4.326-2.631 5.278-5.138 5.557.404.349.766 1.034.766 2.084 0 1.505-.014 2.72-.014 3.089 0 .3.203.651.774.541A11.252 11.252 0 0 0 12 .75Z" />
        </svg>
      </a>
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
    </div>
  );
}
