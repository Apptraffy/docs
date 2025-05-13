
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { useEffect } from 'react';
import "./index.module.css"

export default function Home(): JSX.Element {
  useEffect(() => {
    window.location.href = "https://docs.traffy.site"
  }, [])
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      {/* <HomepageHeader /> */}
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
