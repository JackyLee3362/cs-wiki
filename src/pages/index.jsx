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
            <h1>计算机<span>知识库</span></h1>
            <p>计算机基础、工具与实践笔记</p>
            <Link className="button button--primary button--lg" to="/bases/">进入知识库</Link>
          </div>
        </FunctionBanner>
      </main>
    </Layout>
  );
}
