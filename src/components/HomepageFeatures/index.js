import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    icon: '🔑',
    title: 'Secure Identity',
    description:
      'Industry-standard protocols like OIDC & OAuth 2.0 keep your identity layer secure and reliable out of the box.',
  },
  {
    icon: '🧩',
    title: 'Pluggable Architecture',
    description:
      'Swap mail providers, databases, and auth strategies without touching your core logic — just configure and go.',
  },
  {
    icon: '⚙️',
    title: 'Developer First',
    description:
      'Intuitive SDKs, first-class TypeScript support, and comprehensive docs so you integrate auth in minutes.',
  },
  {
    icon: '🏢',
    title: 'Enterprise Ready',
    description:
      'Multi-tenancy, RBAC, custom branding, and audit logging — everything large teams need at scale.',
  },
  {
    icon: '📧',
    title: 'Built-in Mail',
    description:
      'Send verification emails, password resets, and magic links through pluggable mail adapters.',
  },
  {
    icon: '🚀',
    title: 'Ship Faster',
    description:
      'Stop rebuilding auth from scratch. Drop CREDO in, configure your adapters, and focus on your product.',
  },
];

function Feature({ icon, title, description }) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>{icon}</div>
      <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
      <p className={styles.featureDesc}>{description}</p>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            Why CREDO?
          </Heading>
          <p className={styles.sectionSubtitle}>
            Everything you need for production-grade auth, nothing you don't.
          </p>
        </div>

        <div className={styles.featuresGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
