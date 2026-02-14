import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import { useState } from 'react';

/* ── Hero ──────────────────────────────────────────── */
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <img
          src="/img/credo.svg"
          alt="CREDO logo"
          className={styles.heroLogo}
        />

        <Heading as="h1" className={styles.title}>
          Authentication,{'\n'}Re&#8209;imagined.
        </Heading>

        <p className={styles.subtitle}>
          Pluggable auth, mail providers, and database adapters — so you can
          ship secure apps without reinventing the wheel.
        </p>

        <div className={styles.buttons}>
          <Link
            className={clsx('button button--lg', styles.primaryBtn)}
            to="/docs/intro"
          >
            Get Started →
          </Link>

          <Link
            className={clsx('button button--outline button--lg', styles.secondaryBtn)}
            to="https://github.com/OgunwandeBukunmi/credo"
          >
            View on GitHub ⭐
          </Link>
        </div>
      </div>
    </header>
  );
}

/* ── Install command ──────────────────────────────── */
function InstallBanner() {
  const [copied, setCopied] = useState(false);
  const command = 'npm install @oluwabukunmi/credo';

  function handleCopy() {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className={styles.installSection}>
      <div
        className={styles.installCard}
        onClick={handleCopy}
        role="button"
        tabIndex={0}
        title="Click to copy"
      >
        <span className={styles.installPrefix}>$</span>
        <span className={styles.installCmd}>{command}</span>
        <span className={styles.installCopy}>
          {copied ? '✓ Copied!' : '📋'}
        </span>
      </div>
    </section>
  );
}

/* ── Trust stats ──────────────────────────────────── */
function StatsSection() {
  const stats = [
    { number: '🔐', label: 'Secure by Default' },
    { number: '⚡', label: 'Quick Setup' },
    { number: '🔌', label: 'Pluggable Design' },
    { number: '🛡️', label: 'Battle Tested' },
  ];

  return (
    <section className={styles.statsSection}>
      <div className={styles.statsGrid}>
        {stats.map((s, i) => (
          <div key={i} className={styles.statItem}>
            <div className={styles.statNumber}>{s.number}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── CTA ──────────────────────────────────────────── */
function CtaSection() {
  return (
    <section className={styles.ctaSection}>
      <h2 className={styles.ctaTitle}>Ready to ship faster?</h2>
      <p className={styles.ctaDesc}>
        Add production-grade authentication to your app in minutes,
        not weeks. Get started with CREDO today.
      </p>
      <div className={styles.buttons}>
        <Link
          className={clsx('button button--lg', styles.primaryBtn)}
          to="/docs/intro"
        >
          Read the Docs →
        </Link>
        <Link
          className={clsx('button button--outline button--lg', styles.secondaryBtn)}
          to="https://github.com/OgunwandeBukunmi/credo"
        >
          Star on GitHub
        </Link>
      </div>
    </section>
  );
}

/* ── Page ─────────────────────────────────────────── */
export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Credo – pluggable authentication, mail providers, and database adapters"
      className={styles.layoutWrapper}
    >
      <HomepageHeader />
      <InstallBanner />

      <main>
        <HomepageFeatures />
        <StatsSection />
        <CtaSection />
      </main>
    </Layout>
  );
}
