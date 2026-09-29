import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import FunctionBanner from '../components/FunctionBanner';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="首页" description="计算机知识库">
      <main className={styles.home}>
        <FunctionBanner>
          <div className={`container ${styles.content}`}>
            <div className={styles.eyebrow}><span /> COMPUTER SCIENCE NOTES</div>
            <h1>计算机<span>知识库</span></h1>
            <p>从基础原理到动手实践，<br />让知识相互连接。</p>
            <Link className="button button--primary button--lg" to="/overview/">进入知识库 <span aria-hidden="true">→</span></Link>
            <div className={styles.topics}><Link to="/bases/">基础原理</Link><span> / </span><Link to="/wiki/">工具百科</Link><span> / </span><Link to="/articles/">实践笔记</Link></div>
          </div>
        </FunctionBanner>
      </main>
    </Layout>
  );
}
