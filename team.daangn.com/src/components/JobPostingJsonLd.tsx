import * as React from 'react';
import type { JobPosting, WithContext } from 'schema-dts';
import type { DeferSeoProps } from 'gatsby-plugin-next-seo';
import type { Overrides } from 'gatsby-plugin-next-seo/src/utils/shared-types';
import { JsonLd } from 'gatsby-plugin-next-seo';

type EmploymentType = (
  | 'FULL_TIME'
  | 'CONTRACTOR'
  | 'PART_TIME'
  | 'FREE_LANCER'
  | 'INTERN'
  | 'OTHER'
);

interface JobPostingJsonLdProps extends DeferSeoProps, Overrides<JobPosting> {
  title: string,
  description?: string,
  datePosted?: string,
  validThrough?: string,
  employmentType?: EmploymentType,
  experienceRequirements?: string | string[],
  locations?: {
    postalCode: string,
    streetAddress?: string,
    addressLocality?: string,
    addressRegion: string,
    addressCountry: string,
  }[],
  organization?: {
    name: string,
    description?: string,
    url: string,
    logoUrl?: string,
  },
  identifier?: {
    name: string,
    value: string,
  },
};

const JobPostingJsonLd: React.FC<JobPostingJsonLdProps> = ({
  title,
  description,
  datePosted,
  validThrough,
  employmentType,
  experienceRequirements,
  locations,
  organization,
  identifier,
  overrides,
  defer = false,
}) => {
  const json: WithContext<JobPosting> = {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title,
    description,
    datePosted,
    validThrough,
    employmentType,
    experienceRequirements,
    ...locations && {
      jobLocation: locations.map(location => ({
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          ...location,
        },
      })),
    },
    ...organization && {
      hiringOrganization: {
        '@type': 'Organization',
        name: organization.name,
        sameAs: organization.url,
        logo: organization.logoUrl,
        description: organization.description,
      },
    },
    ...identifier && {
      identifier: {
        '@type': 'PropertyValue',
        propertyID: identifier.name,
        value: identifier.value,
      },
    },
    ...overrides,
  };

  return <JsonLd defer={defer} json={json} />
};

export default JobPostingJsonLd;
