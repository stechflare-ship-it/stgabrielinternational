import React from 'react';
import { useSEO, SEOTagOptions, injectMetaTags, setMetaTag, setLinkTag, injectJsonLd } from '../utils/seo';

export type { SEOTagOptions, SEOBreadcrumbItem } from '../utils/seo';
export { injectMetaTags, setMetaTag, setLinkTag, injectJsonLd, useSEO };

export interface SEOMetadataProps extends SEOTagOptions {}

/**
 * Declarative React Component that dynamically injects page meta tags,
 * OpenGraph sharing tags, Twitter Card tags, and structured JSON-LD schemas
 * for maximum SEO performance.
 */
export const SEOMetadata: React.FC<SEOMetadataProps> = (props) => {
  useSEO(props);
  return null;
};
