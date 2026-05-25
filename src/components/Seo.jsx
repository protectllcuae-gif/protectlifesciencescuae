import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { ADDRESS_TEXT, COMPANY_NAME, EMAIL_ADDRESS, SOCIAL_LINKS, WEBSITE_URL } from '../config';

const Seo = ({ title, description, image, type = 'website', keywords, breadcrumbs }) => {
  const location = useLocation();
  const canonical = `${WEBSITE_URL}${location.pathname}`;
  const fullTitle = title ? `${title} | ${COMPANY_NAME}` : COMPANY_NAME;
  const imageUrl = image || `${WEBSITE_URL}/world-map.png`;
  const sameAs = Object.values(SOCIAL_LINKS).filter((url) => url && url !== '#');

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_NAME,
    url: WEBSITE_URL,
    logo: `${WEBSITE_URL}/favicon.svg`,
    email: `mailto:${EMAIL_ADDRESS}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS_TEXT,
    },
    sameAs,
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: fullTitle,
    description,
    url: canonical,
    isPartOf: {
      '@type': 'WebSite',
      url: WEBSITE_URL,
      name: COMPANY_NAME,
    },
    inLanguage: 'en',
  };

  const breadcrumbSchema = breadcrumbs
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: `${WEBSITE_URL}${crumb.url}`,
        })),
      }
    : null;

  const schema = breadcrumbSchema ? [organizationSchema, webPageSchema, breadcrumbSchema] : [organizationSchema, webPageSchema];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <link rel="canonical" href={canonical} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default Seo;
