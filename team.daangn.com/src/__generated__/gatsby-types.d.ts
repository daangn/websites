/* eslint-disable */

declare namespace GatsbyTypes {
type Maybe<T> = T | undefined;
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: string;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: never;
  PrismicImageThumbnailsType: any;
};










type File = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type File_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type File_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

/** Node Interface */
type Node = {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type Internal = {
  readonly content: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description: Maybe<Scalars['String']>;
  readonly fieldOwners: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType: Maybe<Scalars['Boolean']>;
  readonly mediaType: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};


type Directory = Node & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Directory_modifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_accessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly flags: Maybe<SiteFlags>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type Site_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SiteFlags = {
  readonly FAST_DEV: Maybe<Scalars['Boolean']>;
  readonly QUERY_ON_DEMAND: Maybe<Scalars['Boolean']>;
  readonly LAZY_IMAGES: Maybe<Scalars['Boolean']>;
  readonly PARALLEL_SOURCING: Maybe<Scalars['Boolean']>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
};

type SitePage = Node & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly context: Maybe<SitePageContext>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
  readonly componentPath: Maybe<Scalars['String']>;
};

type SitePageContext = {
  readonly id: Maybe<Scalars['String']>;
  readonly parent__ghId: Maybe<Scalars['String']>;
  readonly _xparams: Maybe<SitePageContext_xparams>;
};

type SitePageContext_xparams = {
  readonly parent__ghId: Maybe<Scalars['String']>;
};

type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type ImageFit =
  | 'cover'
  | 'contain'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type ImageCropFocus =
  | 'CENTER'
  | 1
  | 5
  | 2
  | 6
  | 3
  | 7
  | 4
  | 8
  | 16
  | 17;

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity: Maybe<Scalars['Int']>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'white'
  | 'left'
  | 'right'
  | 'minority'
  | 'majority';

type Potrace = {
  readonly turnPolicy: Maybe<PotraceTurnPolicy>;
  readonly turdSize: Maybe<Scalars['Float']>;
  readonly alphaMax: Maybe<Scalars['Float']>;
  readonly optCurve: Maybe<Scalars['Boolean']>;
  readonly optTolerance: Maybe<Scalars['Float']>;
  readonly threshold: Maybe<Scalars['Int']>;
  readonly blackOnWhite: Maybe<Scalars['Boolean']>;
  readonly color: Maybe<Scalars['String']>;
  readonly background: Maybe<Scalars['String']>;
};

type ImageSharp = Node & {
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['JSON'];
  readonly original: Maybe<ImageSharpOriginal>;
  readonly resize: Maybe<ImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type ImageSharp_fixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


type ImageSharp_fluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<DuotoneGradient>;
  traceSVG: Maybe<Potrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


type ImageSharp_gatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder: Maybe<ImagePlaceholder>;
  blurredOptions: Maybe<BlurredOptions>;
  tracedSVGOptions: Maybe<Potrace>;
  formats: Maybe<ReadonlyArray<Maybe<ImageFormat>>>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<JPGOptions>;
  pngOptions: Maybe<PNGOptions>;
  webpOptions: Maybe<WebPOptions>;
  avifOptions: Maybe<AVIFOptions>;
  transformOptions: Maybe<TransformOptions>;
  backgroundColor: Maybe<Scalars['String']>;
};


type ImageSharp_resizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

type ImageSharpFixed = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type ImageSharpFluid = {
  readonly base64: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationWidth: Scalars['Int'];
  readonly presentationHeight: Scalars['Int'];
};


type ImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: Maybe<ImageFormat>;
};

type JPGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly progressive: Maybe<Scalars['Boolean']>;
};

type PNGOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly compressionSpeed: Maybe<Scalars['Int']>;
};

type WebPOptions = {
  readonly quality: Maybe<Scalars['Int']>;
};

type AVIFOptions = {
  readonly quality: Maybe<Scalars['Int']>;
  readonly lossless: Maybe<Scalars['Boolean']>;
  readonly speed: Maybe<Scalars['Int']>;
};

type TransformOptions = {
  readonly grayscale: Maybe<Scalars['Boolean']>;
  readonly duotone: Maybe<DuotoneGradient>;
  readonly rotate: Maybe<Scalars['Int']>;
  readonly trim: Maybe<Scalars['Float']>;
  readonly cropFocus: Maybe<ImageCropFocus>;
  readonly fit: Maybe<ImageFit>;
};

type ImageSharpOriginal = {
  readonly width: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
};

type ImageSharpResize = {
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly originalName: Maybe<Scalars['String']>;
};

type PrismicFaqEntriesGroupType = {
  readonly question: Maybe<Scalars['String']>;
  readonly answer: Maybe<PrismicStructuredTextType>;
};

type PrismicFaqDataType = {
  readonly entries: Maybe<ReadonlyArray<Maybe<PrismicFaqEntriesGroupType>>>;
};

type PrismicFaq = PrismicDocument & Node & {
  readonly data: Maybe<PrismicFaqDataType>;
  readonly dataRaw: Scalars['JSON'];
  readonly dataString: Scalars['String'];
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly alternate_languages: ReadonlyArray<PrismicLinkType>;
  readonly type: Scalars['String'];
  readonly prismicId: Scalars['ID'];
  readonly _previewable: Scalars['ID'];
  readonly uid: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type PrismicFaq_first_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type PrismicFaq_last_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type PrismicDocument = {
  /** The document's data object without transformations exactly as it comes from the Prismic API. */
  readonly dataRaw: Scalars['JSON'];
  /**
   * The document's data object without transformations. The object is stringified via `JSON.stringify` to eliminate the need to declare subfields.
   * @deprecated Use `dataRaw` instead which returns JSON.
   */
  readonly dataString: Maybe<Scalars['String']>;
  /** The document's initial publication date. */
  readonly first_publication_date: Maybe<Scalars['Date']>;
  /** The document's Prismic API URL. */
  readonly href: Maybe<Scalars['String']>;
  /** The document's URL derived via the link resolver. */
  readonly url: Maybe<Scalars['String']>;
  /** Globally unique identifier. Note that this differs from the `prismicID` field. */
  readonly id: Scalars['ID'];
  /** The document's language. */
  readonly lang: Scalars['String'];
  /** The document's most recent publication date */
  readonly last_publication_date: Maybe<Scalars['Date']>;
  /** The document's list of tags. */
  readonly tags: ReadonlyArray<Scalars['String']>;
  /** Alternate languages for the document. */
  readonly alternate_languages: ReadonlyArray<PrismicLinkType>;
  /** The document's Prismic API ID type. */
  readonly type: Scalars['String'];
  /** The document's Prismic ID. */
  readonly prismicId: Scalars['ID'];
  /** Marks the document as previewable using Prismic's preview system. Include this field if updates to the document should be previewable by content editors before publishing. **Note: the value of this field is not stable and should not be used directly**. */
  readonly _previewable: Scalars['ID'];
};


type PrismicDocument_first_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type PrismicDocument_last_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type PrismicSiteNavigationHeaderEntriesGroupType = {
  readonly display_name: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicLinkType>;
  readonly category: Maybe<Scalars['String']>;
};

type PrismicSiteNavigationFooterEntriesGroupType = {
  readonly display_name: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicLinkType>;
  readonly category: Maybe<Scalars['String']>;
};

type PrismicSiteNavigationSocialEntriesGroupType = {
  readonly social_type: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicLinkType>;
};

type PrismicSiteNavigationDataType = {
  readonly canonical_link: Maybe<PrismicLinkType>;
  readonly header_entries: Maybe<ReadonlyArray<Maybe<PrismicSiteNavigationHeaderEntriesGroupType>>>;
  readonly footer_entries: Maybe<ReadonlyArray<Maybe<PrismicSiteNavigationFooterEntriesGroupType>>>;
  readonly social_entries: Maybe<ReadonlyArray<Maybe<PrismicSiteNavigationSocialEntriesGroupType>>>;
};

type PrismicSiteNavigation = PrismicDocument & Node & {
  readonly data: Maybe<PrismicSiteNavigationDataType>;
  readonly dataRaw: Scalars['JSON'];
  readonly dataString: Scalars['String'];
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly alternate_languages: ReadonlyArray<PrismicLinkType>;
  readonly type: Scalars['String'];
  readonly prismicId: Scalars['ID'];
  readonly _previewable: Scalars['ID'];
  readonly uid: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type SiteNavigation */
  readonly childrenSiteNavigation: Maybe<ReadonlyArray<Maybe<SiteNavigation>>>;
  /** Returns the first child node of type SiteNavigation or null if there are no children of given type on this node */
  readonly childSiteNavigation: Maybe<SiteNavigation>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type PrismicSiteNavigation_first_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type PrismicSiteNavigation_last_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type PrismicTermsAndConditionsDataType = {
  readonly description: Maybe<Scalars['String']>;
  readonly revision_date: Maybe<Scalars['Date']>;
  readonly content: Maybe<PrismicStructuredTextType>;
};


type PrismicTermsAndConditionsDataType_revision_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type PrismicTermsAndConditions = PrismicDocument & Node & {
  readonly data: Maybe<PrismicTermsAndConditionsDataType>;
  readonly dataRaw: Scalars['JSON'];
  readonly dataString: Scalars['String'];
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly alternate_languages: ReadonlyArray<PrismicLinkType>;
  readonly type: Scalars['String'];
  readonly prismicId: Scalars['ID'];
  readonly _previewable: Scalars['ID'];
  readonly uid: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type PrismicTermsAndConditions_first_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type PrismicTermsAndConditions_last_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type PrismicAllDocumentTypes = PrismicFaq | PrismicSiteNavigation | PrismicTermsAndConditions;


type PrismicImageFixedType = {
  readonly base64: Scalars['String'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Scalars['String'];
  readonly srcSetWebp: Scalars['String'];
  readonly sizes: Scalars['String'];
  readonly width: Scalars['Int'];
  readonly height: Scalars['Int'];
};

type PrismicImageFluidType = {
  readonly base64: Scalars['String'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Scalars['String'];
  readonly srcSetWebp: Scalars['String'];
  readonly sizes: Scalars['String'];
  readonly aspectRatio: Scalars['Float'];
};

/** An image field with optional constrained thumbnails. */
type PrismicImageType = PrismicImageInterface & {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  readonly url: Maybe<Scalars['String']>;
  readonly fixed: Maybe<PrismicImageFixedType>;
  readonly fluid: Maybe<PrismicImageFluidType>;
  readonly localFile: Maybe<File>;
  readonly thumbnails: Maybe<Scalars['PrismicImageThumbnailsType']>;
};


/** An image field with optional constrained thumbnails. */
type PrismicImageType_urlArgs = {
  imgixParams?: Maybe<ImgixUrlParamsInput>;
};


/** An image field with optional constrained thumbnails. */
type PrismicImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixUrlParamsInput>;
  placeholderImgixParams?: Maybe<ImgixUrlParamsInput>;
};


/** An image field with optional constrained thumbnails. */
type PrismicImageType_fluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  imgixParams?: Maybe<ImgixUrlParamsInput>;
  placeholderImgixParams?: Maybe<ImgixUrlParamsInput>;
};

type PrismicImageInterface = {
  /** The image's alternative text. */
  readonly alt: Maybe<Scalars['String']>;
  /** The image's copyright text. */
  readonly copyright: Maybe<Scalars['String']>;
  /** The image's dimensions. */
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** The image's URL on Prismic's CDN. */
  readonly url: Maybe<Scalars['String']>;
  /** The locally downloaded image if `shouldNormalizeImage` returns true. */
  readonly localFile: Maybe<File>;
  readonly fixed: Maybe<PrismicImageFixedType>;
  readonly fluid: Maybe<PrismicImageFluidType>;
};

type ImgixUrlParamsInput = {
  /** Specifies an aspect ratio to maintain when resizing and cropping the image. [See docs](https://docs.imgix.com/apis/url/size/ar). */
  readonly ar: Maybe<Scalars['String']>;
  /** Applies automatic enhancements to images. [See docs](https://docs.imgix.com/apis/url/auto). */
  readonly auto: Maybe<Scalars['String']>;
  /** Colors the background of padded and partially-transparent images. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/bg). */
  readonly bg: Maybe<Scalars['String']>;
  /** Changes the blend alignment relative to the parent image. [See docs](https://docs.imgix.com/apis/url/blending/blend-align). */
  readonly blendAlign: Maybe<Scalars['String']>;
  /** Alias for `blendAlign`. */
  readonly blendalign: Maybe<Scalars['String']>;
  /** Alias for `blendAlign`. */
  readonly ba: Maybe<Scalars['String']>;
  /** Changes the alpha of the blend image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/blending/blend-alpha). */
  readonly blendAlpha: Maybe<Scalars['Int']>;
  /** Alias for `blendAlpha`. */
  readonly blendalpha: Maybe<Scalars['Int']>;
  /** Alias for `blendAlpha`. */
  readonly balph: Maybe<Scalars['Int']>;
  /** Specifies a color to use when applying the blend. [See docs](https://docs.imgix.com/apis/url/blending/blend-color). */
  readonly blendColor: Maybe<Scalars['String']>;
  /** Alias for `blendColor`. */
  readonly blendcolor: Maybe<Scalars['String']>;
  /** Alias for `blendColor`. */
  readonly blendClr: Maybe<Scalars['String']>;
  /** Alias for `blendColor`. */
  readonly blendclr: Maybe<Scalars['String']>;
  /** Specifies the type of crop for blend images. [See docs](https://docs.imgix.com/apis/url/blending/blend-crop). */
  readonly blendCrop: Maybe<Scalars['String']>;
  /** Alias for `blendCrop`. */
  readonly blendcrop: Maybe<Scalars['String']>;
  /** Alias for `blendCrop`. */
  readonly bc: Maybe<Scalars['String']>;
  /** Specifies the fit mode for blend images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/blending/blend-fit). */
  readonly blendFit: Maybe<Scalars['String']>;
  /** Alias for `blendFit`. */
  readonly blendfit: Maybe<Scalars['String']>;
  /** Alias for `blendFit`. */
  readonly bf: Maybe<Scalars['String']>;
  /** Adjusts the height of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-h). */
  readonly blendH: Maybe<Scalars['Int']>;
  /** Alias for `blendH`. */
  readonly blendh: Maybe<Scalars['Int']>;
  /** Alias for `blendH`. */
  readonly bh: Maybe<Scalars['Int']>;
  /** Sets the blend mode for a blend image. Default: `overlay`. [See docs](https://docs.imgix.com/apis/url/blending/blend-mode). */
  readonly blendMode: Maybe<Scalars['String']>;
  /** Alias for `blendMode`. */
  readonly blendmode: Maybe<Scalars['String']>;
  /** Alias for `blendMode`. */
  readonly bm: Maybe<Scalars['String']>;
  /** Applies padding to the blend image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-pad). */
  readonly blendPad: Maybe<Scalars['Int']>;
  /** Alias for `blendPad`. */
  readonly blendpad: Maybe<Scalars['Int']>;
  /** Alias for `blendPad`. */
  readonly bp: Maybe<Scalars['Int']>;
  /** Adjusts the size of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-size). */
  readonly blendSize: Maybe<Scalars['String']>;
  /** Alias for `blendSize`. */
  readonly blendsize: Maybe<Scalars['String']>;
  /** Alias for `blendSize`. */
  readonly bs: Maybe<Scalars['String']>;
  /** Adjusts the width of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-w). */
  readonly blendW: Maybe<Scalars['Int']>;
  /** Alias for `blendW`. */
  readonly blendw: Maybe<Scalars['Int']>;
  /** Alias for `blendW`. */
  readonly bw: Maybe<Scalars['Int']>;
  /** Adjusts the x-offset of the blend image relative to its parent. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-x). */
  readonly blendX: Maybe<Scalars['Int']>;
  /** Alias for `blendX`. */
  readonly blendx: Maybe<Scalars['Int']>;
  /** Alias for `blendX`. */
  readonly bx: Maybe<Scalars['Int']>;
  /** Adjusts the y-offset of the blend image relative to its parent. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-y). */
  readonly blendY: Maybe<Scalars['Int']>;
  /** Alias for `blendY`. */
  readonly blendy: Maybe<Scalars['Int']>;
  /** Alias for `blendY`. */
  readonly by: Maybe<Scalars['Int']>;
  /** Specifies the location of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend). */
  readonly blend: Maybe<Scalars['String']>;
  /** Alias for `blend`. */
  readonly b: Maybe<Scalars['String']>;
  /** Applies a gaussian blur to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/blur). */
  readonly blur: Maybe<Scalars['Int']>;
  /** Sets bottom border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-bottom). */
  readonly borderBottom: Maybe<Scalars['Int']>;
  /** Sets left border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-left). */
  readonly borderLeft: Maybe<Scalars['Int']>;
  /** Sets the inner radius of the image's border in pixels. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner). */
  readonly borderRadiusInner: Maybe<Scalars['String']>;
  /** Sets the outer radius of the image's border in pixels. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius). */
  readonly borderRadius: Maybe<Scalars['String']>;
  /** Sets right border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-right). */
  readonly borderRight: Maybe<Scalars['Int']>;
  /** Sets top border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-top). */
  readonly borderTop: Maybe<Scalars['Int']>;
  /** Applies a border to an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border). */
  readonly border: Maybe<Scalars['String']>;
  /** Adjusts the brightness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/bri). */
  readonly bri: Maybe<Scalars['Int']>;
  /** Sets one or more Client-Hints headers. [See docs](https://docs.imgix.com/apis/url/format/ch). */
  readonly ch: Maybe<Scalars['String']>;
  /** Specifies the output chroma subsampling rate. Default: `420`. [See docs](https://docs.imgix.com/apis/url/format/chromasub). */
  readonly chromasub: Maybe<Scalars['Int']>;
  /** Limits the number of unique colors in an image. [See docs](https://docs.imgix.com/apis/url/format/colorquant). */
  readonly colorquant: Maybe<Scalars['Int']>;
  /** Specifies how many colors to include in a palette-extraction response. Default: `6`. [See docs](https://docs.imgix.com/apis/url/color-palette/colors). */
  readonly colors: Maybe<Scalars['Int']>;
  /** Adjusts the contrast of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/con). */
  readonly con: Maybe<Scalars['Int']>;
  /** Specifies the radius value for a rounded corner mask. [See docs](https://docs.imgix.com/apis/url/mask/corner-radius). */
  readonly cornerRadius: Maybe<Scalars['String']>;
  /** Specifies how to crop an image. [See docs](https://docs.imgix.com/apis/url/size/crop). */
  readonly crop: Maybe<Scalars['String']>;
  /** Specifies the color space of the output image. [See docs](https://docs.imgix.com/apis/url/format/cs). */
  readonly cs: Maybe<Scalars['String']>;
  /** Forces a URL to use send-file in its response. [See docs](https://docs.imgix.com/apis/url/format/dl). */
  readonly dl: Maybe<Scalars['String']>;
  /** Sets the DPI value in the EXIF header. [See docs](https://docs.imgix.com/apis/url/format/dpi). */
  readonly dpi: Maybe<Scalars['Int']>;
  /** Adjusts the device-pixel ratio of the output image. Default: `1`. [See docs](https://docs.imgix.com/apis/url/dpr). */
  readonly dpr: Maybe<Scalars['Float']>;
  /** Changes the alpha of the duotone effect atop the source image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/stylize/duotone-alpha). */
  readonly duotoneAlpha: Maybe<Scalars['Int']>;
  /** Applies a duotone effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/duotone). */
  readonly duotone: Maybe<Scalars['String']>;
  /** Adjusts the exposure of the output image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/exp). */
  readonly exp: Maybe<Scalars['Int']>;
  /** A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code. [See docs](https://docs.imgix.com/apis/url/expires). */
  readonly expires: Maybe<Scalars['String']>;
  /** Selects a face to crop to. [See docs](https://docs.imgix.com/apis/url/face-detection/faceindex). */
  readonly faceindex: Maybe<Scalars['Int']>;
  /** Adjusts padding around a selected face. Default: `1`. [See docs](https://docs.imgix.com/apis/url/face-detection/facepad). */
  readonly facepad: Maybe<Scalars['Float']>;
  /** Specifies that face data should be included in output when combined with `fm=json`. [See docs](https://docs.imgix.com/apis/url/face-detection/faces). */
  readonly faces: Maybe<Scalars['Int']>;
  /** Sets the fill color for images with additional space created by the fit setting. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/fill/fill-color). */
  readonly fillColor: Maybe<Scalars['String']>;
  /** Alias for `fillColor`. */
  readonly fillcolor: Maybe<Scalars['String']>;
  /** Determines how to fill in additional space created by the fit setting. [See docs](https://docs.imgix.com/apis/url/fill/fill). */
  readonly fill: Maybe<Scalars['String']>;
  /** Specifies how to map the source image to the output image dimensions. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/size/fit). */
  readonly fit: Maybe<Scalars['String']>;
  /** Alias for `fit`. */
  readonly f: Maybe<Scalars['String']>;
  /** Flips an image on a specified axis. [See docs](https://docs.imgix.com/apis/url/rotation/flip). */
  readonly flip: Maybe<Scalars['String']>;
  /** Changes the format of the output image. [See docs](https://docs.imgix.com/apis/url/format/fm). */
  readonly fm: Maybe<Scalars['String']>;
  /** Displays crosshairs identifying the location of the set focal point. Default: `false`. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug). */
  readonly fpDebug: Maybe<Scalars['Boolean']>;
  /** Sets the relative horizontal value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x). */
  readonly fpX: Maybe<Scalars['Int']>;
  /** Sets the relative vertical value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y). */
  readonly fpY: Maybe<Scalars['Int']>;
  /** Sets the relative zoom value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z). */
  readonly fpZ: Maybe<Scalars['Float']>;
  /** Adjusts the gamma of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/gam). */
  readonly gam: Maybe<Scalars['Int']>;
  /** Sets grid colors for the transparency checkerboard grid. */
  readonly gridColors: Maybe<Scalars['String']>;
  /** Sets grid size for the transparency checkerboard grid. */
  readonly gridSize: Maybe<Scalars['Int']>;
  /** Adjusts the height of the output image. [See docs](https://docs.imgix.com/apis/url/size/h). */
  readonly h: Maybe<Scalars['Int']>;
  /** Alias for `h`. */
  readonly height: Maybe<Scalars['Int']>;
  /** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/high). */
  readonly high: Maybe<Scalars['Int']>;
  /** Applies a half-tone effect to the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/htn). */
  readonly htn: Maybe<Scalars['Int']>;
  /** Adjusts the hue of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/hue). */
  readonly hue: Maybe<Scalars['Int']>;
  /** Inverts the colors on the source image. Default: `false`. [See docs](https://docs.imgix.com/apis/url/adjustment/invert). */
  readonly invert: Maybe<Scalars['Boolean']>;
  /** Alias for `invert`. */
  readonly inv: Maybe<Scalars['Boolean']>;
  /** Specifies that the output image should be a lossless variant. Default: `false`. [See docs](https://docs.imgix.com/apis/url/format/lossless). */
  readonly lossless: Maybe<Scalars['Boolean']>;
  /** Changes the watermark alignment relative to the parent image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-align). */
  readonly markAlign: Maybe<Scalars['String']>;
  /** Alias for `markAlign`. */
  readonly ma: Maybe<Scalars['String']>;
  /** Alias for `markAlign`. */
  readonly markalign: Maybe<Scalars['String']>;
  /** Changes the alpha of the watermark image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-alpha). */
  readonly markAlpha: Maybe<Scalars['Int']>;
  /** Alias for `markAlpha`. */
  readonly markalpha: Maybe<Scalars['Int']>;
  /** Alias for `markAlpha`. */
  readonly malph: Maybe<Scalars['Int']>;
  /** Changes base URL of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-base). */
  readonly markBase: Maybe<Scalars['String']>;
  /** Alias for `markBase`. */
  readonly mb: Maybe<Scalars['String']>;
  /** Alias for `markBase`. */
  readonly markbase: Maybe<Scalars['String']>;
  /** Specifies the fit mode for watermark images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-fit). */
  readonly markFit: Maybe<Scalars['String']>;
  /** Alias for `markFit`. */
  readonly mf: Maybe<Scalars['String']>;
  /** Alias for `markFit`. */
  readonly markfit: Maybe<Scalars['String']>;
  /** Adjusts the height of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-h). */
  readonly markH: Maybe<Scalars['Int']>;
  /** Alias for `markH`. */
  readonly mh: Maybe<Scalars['Int']>;
  /** Alias for `markH`. */
  readonly markh: Maybe<Scalars['Int']>;
  /** Applies padding to the watermark image. Default: `5`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-pad). */
  readonly markPad: Maybe<Scalars['Int']>;
  /** Alias for `markPad`. */
  readonly mp: Maybe<Scalars['Int']>;
  /** Alias for `markPad`. */
  readonly markpad: Maybe<Scalars['Int']>;
  /** Rotates a watermark or tiled watermarks by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-rot). */
  readonly markRot: Maybe<Scalars['Float']>;
  /** Adjusts the scale of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-scale). */
  readonly markScale: Maybe<Scalars['Int']>;
  /** Alias for `markScale`. */
  readonly ms: Maybe<Scalars['Int']>;
  /** Alias for `markScale`. */
  readonly markscale: Maybe<Scalars['Int']>;
  /** Adds tiled watermark. [See docs](https://docs.imgix.com/apis/url/watermark/mark-tile). */
  readonly markTile: Maybe<Scalars['String']>;
  /** Alias for `markTile`. */
  readonly mtile: Maybe<Scalars['String']>;
  /** Alias for `markTile`. */
  readonly marktile: Maybe<Scalars['String']>;
  /** Adjusts the width of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-w). */
  readonly markW: Maybe<Scalars['Int']>;
  /** Alias for `markW`. */
  readonly mw: Maybe<Scalars['Int']>;
  /** Alias for `markW`. */
  readonly markw: Maybe<Scalars['Int']>;
  /** Adjusts the x-offset of the watermark image relative to its parent. [See docs](https://docs.imgix.com/apis/url/watermark/mark-x). */
  readonly markX: Maybe<Scalars['Int']>;
  /** Alias for `markX`. */
  readonly mx: Maybe<Scalars['Int']>;
  /** Alias for `markX`. */
  readonly markx: Maybe<Scalars['Int']>;
  /** Adjusts the y-offset of the watermark image relative to its parent. [See docs](https://docs.imgix.com/apis/url/watermark/mark-y). */
  readonly markY: Maybe<Scalars['Int']>;
  /** Alias for `markY`. */
  readonly my: Maybe<Scalars['Int']>;
  /** Alias for `markY`. */
  readonly marky: Maybe<Scalars['Int']>;
  /** Specifies the location of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark). */
  readonly mark: Maybe<Scalars['String']>;
  /** Alias for `mark`. */
  readonly m: Maybe<Scalars['String']>;
  /** Colors the background of the transparent mask area of images. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/mask/mask-bg). */
  readonly maskBg: Maybe<Scalars['String']>;
  /** Alias for `maskBg`. */
  readonly maskbg: Maybe<Scalars['String']>;
  /** Defines the type of mask and specifies the URL if that type is selected. [See docs](https://docs.imgix.com/apis/url/mask). */
  readonly mask: Maybe<Scalars['String']>;
  /** Specifies the maximum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-height). */
  readonly maxH: Maybe<Scalars['Int']>;
  /** Alias for `maxH`. */
  readonly maxHeight: Maybe<Scalars['Int']>;
  /** Specifies the maximum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-width). */
  readonly maxW: Maybe<Scalars['Int']>;
  /** Alias for `maxW`. */
  readonly maxWidth: Maybe<Scalars['Int']>;
  /** Specifies the minimum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-height). */
  readonly minH: Maybe<Scalars['Int']>;
  /** Alias for `minH`. */
  readonly minHeight: Maybe<Scalars['Int']>;
  /** Specifies the minimum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-width). */
  readonly minW: Maybe<Scalars['Int']>;
  /** Alias for `minW`. */
  readonly minWidth: Maybe<Scalars['Int']>;
  /** Applies a monochrome effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/monochrome). */
  readonly monochrome: Maybe<Scalars['String']>;
  /** Alias for `monochrome`. */
  readonly mono: Maybe<Scalars['String']>;
  /** Reduces the noise in an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nr). */
  readonly nr: Maybe<Scalars['Int']>;
  /** Provides a threshold by which to sharpen an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nrs). */
  readonly nrs: Maybe<Scalars['Int']>;
  /** Changes the image orientation. [See docs](https://docs.imgix.com/apis/url/rotation/orient). */
  readonly orient: Maybe<Scalars['Int']>;
  /** Alias for `orient`. */
  readonly or: Maybe<Scalars['Int']>;
  /** Sets bottom padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom). */
  readonly padBottom: Maybe<Scalars['Int']>;
  /** Sets left padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-left). */
  readonly padLeft: Maybe<Scalars['Int']>;
  /** Sets right padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-right). */
  readonly padRight: Maybe<Scalars['Int']>;
  /** Sets top padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-top). */
  readonly padTop: Maybe<Scalars['Int']>;
  /** Pads an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad). */
  readonly pad: Maybe<Scalars['Int']>;
  /** Selects a page from a PDF for display. Default: `1`. [See docs](https://docs.imgix.com/apis/url/pdf/page). */
  readonly page: Maybe<Scalars['Int']>;
  /** Specifies an output format for palette-extraction. [See docs](https://docs.imgix.com/apis/url/color-palette/palette). */
  readonly palette: Maybe<Scalars['String']>;
  /** Enables or disables PDF annotation. Default: `true`. [See docs](https://docs.imgix.com/apis/url/pdf/pdf-annotation). */
  readonly pdfAnnotation: Maybe<Scalars['Boolean']>;
  /** Alias for `pdfAnnotation`. */
  readonly annotation: Maybe<Scalars['Boolean']>;
  /** Specifies a CSS prefix for all classes in palette-extraction. Default: `image`. [See docs](https://docs.imgix.com/apis/url/color-palette/prefix). */
  readonly prefix: Maybe<Scalars['String']>;
  /** Applies a pixelation effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/px). */
  readonly px: Maybe<Scalars['Int']>;
  /** Adjusts the quality of an output image. Default: `75`. [See docs](https://docs.imgix.com/apis/url/format/q). */
  readonly q: Maybe<Scalars['Int']>;
  /** Crops an image to a specified rectangle. [See docs](https://docs.imgix.com/apis/url/size/rect). */
  readonly rect: Maybe<Scalars['String']>;
  /** Rotates an image by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/rotation/rot). */
  readonly rot: Maybe<Scalars['Float']>;
  /** Adjusts the saturation of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sat). */
  readonly sat: Maybe<Scalars['Int']>;
  /** Applies a sepia effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/sepia). */
  readonly sepia: Maybe<Scalars['Int']>;
  /** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/shad). */
  readonly shad: Maybe<Scalars['Float']>;
  /** Adjusts the sharpness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sharp). */
  readonly sharp: Maybe<Scalars['Float']>;
  /** Adds checkerboard behind images which support transparency. [See docs](https://docs.imgix.com/apis/url/fill/transparency). */
  readonly transparency: Maybe<Scalars['String']>;
  /** Specifies a trim color on a trim operation. [See docs](https://docs.imgix.com/apis/url/trim/trim-color). */
  readonly trimColor: Maybe<Scalars['String']>;
  /** Alias for `trimColor`. */
  readonly trimcolor: Maybe<Scalars['String']>;
  /** Specifies the mean difference on a trim operation. Default: `11`. [See docs](https://docs.imgix.com/apis/url/trim/trim-md). */
  readonly trimMd: Maybe<Scalars['Float']>;
  /** Alias for `trimMd`. */
  readonly trimmd: Maybe<Scalars['Float']>;
  /** Pads the area of the source image before trimming. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-pad). */
  readonly trimPad: Maybe<Scalars['Int']>;
  /** Alias for `trimPad`. */
  readonly trimpad: Maybe<Scalars['Int']>;
  /** Specifies the standard deviation on a trim operation. Default: `10`. [See docs](https://docs.imgix.com/apis/url/trim/trim-sd). */
  readonly trimSd: Maybe<Scalars['Float']>;
  /** Alias for `trimSd`. */
  readonly trimsd: Maybe<Scalars['Float']>;
  /** Specifies the tolerance on a trim operation. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-tol). */
  readonly trimTol: Maybe<Scalars['Float']>;
  /** Alias for `trimTol`. */
  readonly trimtol: Maybe<Scalars['Float']>;
  /** Trims the source image. [See docs](https://docs.imgix.com/apis/url/trim/trim). */
  readonly trim: Maybe<Scalars['String']>;
  /** Sets the vertical and horizontal alignment of rendered text relative to the base image. [See docs](https://docs.imgix.com/apis/url/text/txt-align). */
  readonly txtAlign: Maybe<Scalars['String']>;
  /** Alias for `txtAlign`. */
  readonly txtalign: Maybe<Scalars['String']>;
  /** Alias for `txtAlign`. */
  readonly ta: Maybe<Scalars['String']>;
  /** Sets the clipping properties of rendered text. Default: `end`. [See docs](https://docs.imgix.com/apis/url/text/txt-clip). */
  readonly txtClip: Maybe<Scalars['String']>;
  /** Alias for `txtClip`. */
  readonly txtclip: Maybe<Scalars['String']>;
  /** Alias for `txtClip`. */
  readonly tcl: Maybe<Scalars['String']>;
  /** Specifies the color of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-color). */
  readonly txtColor: Maybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  readonly txtcolor: Maybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  readonly txtClr: Maybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  readonly txtclr: Maybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  readonly tc: Maybe<Scalars['String']>;
  /** Specifies the fit approach for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-fit). */
  readonly txtFit: Maybe<Scalars['String']>;
  /** Alias for `txtFit`. */
  readonly txtfit: Maybe<Scalars['String']>;
  /** Selects a font for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-font). */
  readonly txtFont: Maybe<Scalars['String']>;
  /** Alias for `txtFont`. */
  readonly tf: Maybe<Scalars['String']>;
  /** Alias for `txtFont`. */
  readonly txtfont: Maybe<Scalars['String']>;
  /** Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint. Default: `0`. [See docs](https://docs.imgix.com/apis/url/typesetting/txt-lead). */
  readonly txtLead: Maybe<Scalars['Int']>;
  /** Alias for `txtLead`. */
  readonly txtlead: Maybe<Scalars['Int']>;
  /** Controls the level of ligature substitution. [See docs](https://docs.imgix.com/apis/url/text/txt-lig). */
  readonly txtLig: Maybe<Scalars['Int']>;
  /** Alias for `txtLig`. */
  readonly txtlig: Maybe<Scalars['Int']>;
  /** Specifies a text outline color. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/text/txt-line-color). */
  readonly txtLineColor: Maybe<Scalars['String']>;
  /** Alias for `txtLineColor`. */
  readonly txtlinecolor: Maybe<Scalars['String']>;
  /** Alias for `txtLineColor`. */
  readonly txtLineClr: Maybe<Scalars['String']>;
  /** Alias for `txtLineColor`. */
  readonly txtlineclr: Maybe<Scalars['String']>;
  /** Outlines the rendered text with a specified color. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-line). */
  readonly txtLine: Maybe<Scalars['Int']>;
  /** Alias for `txtLine`. */
  readonly txtline: Maybe<Scalars['Int']>;
  /** Alias for `txtLine`. */
  readonly tl: Maybe<Scalars['Int']>;
  /** Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image. [See docs](https://docs.imgix.com/apis/url/text/txt-pad). */
  readonly txtPad: Maybe<Scalars['Int']>;
  /** Alias for `txtPad`. */
  readonly txtpad: Maybe<Scalars['Int']>;
  /** Alias for `txtPad`. */
  readonly tp: Maybe<Scalars['Int']>;
  /** Applies a shadow to rendered text. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-shad). */
  readonly txtShad: Maybe<Scalars['Float']>;
  /** Alias for `txtShad`. */
  readonly txtshad: Maybe<Scalars['Float']>;
  /** Alias for `txtShad`. */
  readonly tsh: Maybe<Scalars['Float']>;
  /** Sets the font size of rendered text. Default: `12`. [See docs](https://docs.imgix.com/apis/url/text/txt-size). */
  readonly txtSize: Maybe<Scalars['Int']>;
  /** Alias for `txtSize`. */
  readonly tsz: Maybe<Scalars['Int']>;
  /** Alias for `txtSize`. */
  readonly txtsize: Maybe<Scalars['Int']>;
  /** Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint. Default: `0`. [See docs](https://docs.imgix.com/apis/url/typesetting/txt-track). */
  readonly txtTrack: Maybe<Scalars['Int']>;
  /** Alias for `txtTrack`. */
  readonly txttrack: Maybe<Scalars['Int']>;
  /** Alias for `txtTrack`. */
  readonly tt: Maybe<Scalars['Int']>;
  /** Sets the width of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-width). */
  readonly txtWidth: Maybe<Scalars['Int']>;
  /** Alias for `txtWidth`. */
  readonly txtwidth: Maybe<Scalars['Int']>;
  /** Sets the text string to render. [See docs](https://docs.imgix.com/apis/url/text/txt). */
  readonly txt: Maybe<Scalars['String']>;
  /** Alias for `txt`. */
  readonly t: Maybe<Scalars['String']>;
  /** Sharpens the source image using an unsharp mask. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/usm). */
  readonly usm: Maybe<Scalars['Int']>;
  /** Specifies the radius for an unsharp mask operation. Default: `2.5`. [See docs](https://docs.imgix.com/apis/url/adjustment/usmrad). */
  readonly usmrad: Maybe<Scalars['Float']>;
  /** Adjusts the vibrance of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/vib). */
  readonly vib: Maybe<Scalars['Int']>;
  /** Adjusts the width of the output image. [See docs](https://docs.imgix.com/apis/url/size/w). */
  readonly w: Maybe<Scalars['Int']>;
  /** Alias for `w`. */
  readonly width: Maybe<Scalars['Int']>;
};

/** An image thumbnail with constraints. */
type PrismicImageThumbnailType = PrismicImageInterface & {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  readonly url: Maybe<Scalars['String']>;
  readonly fixed: Maybe<PrismicImageFixedType>;
  readonly fluid: Maybe<PrismicImageFluidType>;
  readonly localFile: Maybe<File>;
};


/** An image thumbnail with constraints. */
type PrismicImageThumbnailType_urlArgs = {
  imgixParams?: Maybe<ImgixUrlParamsInput>;
};


/** An image thumbnail with constraints. */
type PrismicImageThumbnailType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixUrlParamsInput>;
  placeholderImgixParams?: Maybe<ImgixUrlParamsInput>;
};


/** An image thumbnail with constraints. */
type PrismicImageThumbnailType_fluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  imgixParams?: Maybe<ImgixUrlParamsInput>;
  placeholderImgixParams?: Maybe<ImgixUrlParamsInput>;
};

/** A text field with formatting options. */
type PrismicStructuredTextType = {
  /** The HTML value of the text using `prismic-dom` and the HTML serializer. */
  readonly html: Maybe<Scalars['String']>;
  /** The plain text value of the text using `prismic-dom`. */
  readonly text: Maybe<Scalars['String']>;
  /** The field's value without transformations exactly as it comes from the Prismic API. */
  readonly raw: Maybe<Scalars['JSON']>;
};

/** A field for storing geo-coordinates. */
type PrismicGeoPointType = {
  /** The latitude value of the geo-coordinate. */
  readonly latitude: Maybe<Scalars['Float']>;
  /** The longitude value of the geo-coordinate. */
  readonly longitude: Maybe<Scalars['Float']>;
};

/** Embed videos, songs, tweets, slices, etc. */
type PrismicEmbedType = {
  /** The ID of the resource author. Fetched via oEmbed data. */
  readonly author_id: Maybe<Scalars['ID']>;
  /** The name of the author/owner of the resource. Fetched via oEmbed data. */
  readonly author_name: Maybe<Scalars['String']>;
  /** A URL for the author/owner of the resource. Fetched via oEmbed data. */
  readonly author_url: Maybe<Scalars['String']>;
  /** The suggested cache lifetime for this resource, in seconds. Consumers may choose to use this value or not. Fetched via oEmbed data. */
  readonly cache_age: Maybe<Scalars['String']>;
  /** The URL of the resource. */
  readonly embed_url: Maybe<Scalars['String']>;
  /** The HTML required to display the resource. The HTML should have no padding or margins. Consumers may wish to load the HTML in an off-domain iframe to avoid XSS vulnerabilities. Fetched via oEmbed data. */
  readonly html: Maybe<Scalars['String']>;
  /** The name of the resource. */
  readonly name: Maybe<Scalars['String']>;
  /** The name of the resource provider. Fetched via oEmbed data. */
  readonly provider_name: Maybe<Scalars['String']>;
  /** The URL of the resource provider. Fetched via oEmbed data. */
  readonly provider_url: Maybe<Scalars['String']>;
  /** The width of the resource's thumbnail. Fetched via oEmbed data. */
  readonly thumbnail_height: Maybe<Scalars['Int']>;
  /** A URL to a thumbnail image representing the resource. Fetched via oEmbed data. */
  readonly thumbnail_url: Maybe<Scalars['String']>;
  /** The width of the resource's thumbnail. Fetched via oEmbed data. */
  readonly thumbnail_width: Maybe<Scalars['Int']>;
  /** A text title, describing the resource. Fetched via oEmbed data. */
  readonly title: Maybe<Scalars['String']>;
  /** The resource type. Fetched via oEmbed data. */
  readonly type: Maybe<Scalars['String']>;
  /** The oEmbed version number. */
  readonly version: Maybe<Scalars['String']>;
  /** The source URL of the resource. Fetched via oEmbed data. */
  readonly url: Maybe<Scalars['String']>;
  /** The width in pixel of the resource. Fetched via oEmbed data. */
  readonly width: Maybe<Scalars['Int']>;
  /** The height in pixel of the resource. Fetched via oEmbed data. */
  readonly height: Maybe<Scalars['Int']>;
  /** The ID of the resource media. Fetched via oEmbed data. */
  readonly media_id: Maybe<Scalars['ID']>;
  /** A description for the resource. */
  readonly description: Maybe<Scalars['String']>;
  /** The ID of a video. */
  readonly video_id: Maybe<Scalars['ID']>;
};

/** Dimensions for images. */
type PrismicImageDimensionsType = {
  /** Width of the image in pixels. */
  readonly width: Scalars['Int'];
  /** Height of the image in pixels. */
  readonly height: Scalars['Int'];
};

/** Types of links. */
type PrismicLinkTypes =
  /** Any of the other types */
  | 'Any'
  /** Internal content */
  | 'Document'
  /** Internal media content */
  | 'Media'
  /** URL */
  | 'Web';

/** Link to web, media, and internal content. */
type PrismicLinkType = {
  /** The type of link. */
  readonly link_type: PrismicLinkTypes;
  /** If a Document link, `true` if linked document does not exist, `false` otherwise. */
  readonly isBroken: Maybe<Scalars['Boolean']>;
  /** The document's URL derived via the link resolver. */
  readonly url: Maybe<Scalars['String']>;
  /** The link's target. */
  readonly target: Maybe<Scalars['String']>;
  /** If a Media link, the size of the file. */
  readonly size: Maybe<Scalars['Int']>;
  /** If a Document link, the linked document's Prismic ID. */
  readonly id: Maybe<Scalars['ID']>;
  /** If a Document link, the linked document's Prismic custom type API ID */
  readonly type: Maybe<Scalars['String']>;
  /** If a Document link, the linked document's list of tags. */
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  /** If a Document link, the linked document's language. */
  readonly lang: Maybe<Scalars['String']>;
  /** If a Document link, the linked document's slug. */
  readonly slug: Maybe<Scalars['String']>;
  /** If a Document link, the linked document's UID. */
  readonly uid: Maybe<Scalars['String']>;
  /** If a Document link, the linked document. */
  readonly document: Maybe<PrismicAllDocumentTypes>;
  /** The field's value without transformations exactly as it comes from the Prismic API. */
  readonly raw: Maybe<Scalars['JSON']>;
};

type PrismicSliceType = {
  /** The slice type API ID. */
  readonly slice_type: Scalars['String'];
  /** The slice label. */
  readonly slice_label: Maybe<Scalars['String']>;
};

type JobPost = Node & {
  readonly title: Scalars['String'];
  readonly boardUrl: Scalars['String'];
  readonly content: ReadonlyArray<JobPostContentSection>;
  readonly rawContent: Scalars['String'];
  readonly employmentType: JobEmploymentType;
  readonly alternativeCivilianService: Scalars['Boolean'];
  readonly priorExperience: JobPriorExperience;
  readonly chapter: Scalars['String'];
  readonly keywords: ReadonlyArray<Scalars['String']>;
  readonly gatsbyPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type JobPost_gatsbyPathArgs = {
  filePath: Maybe<Scalars['String']>;
};

type JobEmploymentType =
  | 'FULL_TIME'
  | 'CONTRACTOR'
  | 'INTERN';

type JobPriorExperience =
  | 'YES'
  | 'NO'
  | 'WHATEVER';

type HeadingLevel =
  | 'H1'
  | 'H2'
  | 'H3'
  | 'H4'
  | 'H5'
  | 'H6';

type JobPostContentUnorderedListSection = JobPostContentSection & {
  readonly title: Scalars['String'];
  readonly level: HeadingLevel;
  readonly rawContent: Scalars['String'];
  readonly items: ReadonlyArray<Scalars['String']>;
};

type JobPostContentOrderedListSection = JobPostContentSection & {
  readonly title: Scalars['String'];
  readonly level: HeadingLevel;
  readonly rawContent: Scalars['String'];
  readonly items: ReadonlyArray<Scalars['String']>;
};

type JobPostContentParagraphSection = JobPostContentSection & {
  readonly title: Scalars['String'];
  readonly level: HeadingLevel;
  readonly rawContent: Scalars['String'];
  readonly paragraph: Scalars['String'];
};

type JobPostContentSection = {
  readonly title: Scalars['String'];
  readonly level: HeadingLevel;
  readonly rawContent: Scalars['String'];
};

type Faq = Node & {
  readonly entries: ReadonlyArray<FaqEntry>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type FaqEntry = {
  readonly id: Scalars['ID'];
  readonly question: Scalars['String'];
  readonly answerHtml: Scalars['String'];
};

type SiteNavigation = Node & {
  readonly headerEntries: ReadonlyArray<SiteNavigationEntry>;
  readonly footerEntries: ReadonlyArray<SiteNavigationEntry>;
  readonly socialProfiles: ReadonlyArray<SocialProfileEntry>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SocialService =
  | 'FACEBOOK'
  | 'INSTAGRAM'
  | 'TWITTER'
  | 'LINKEDIN'
  | 'MEDIUM'
  | 'GITHUB';

type SiteNavigationEntry = {
  readonly href: Scalars['String'];
  readonly displayName: Scalars['String'];
  readonly category: Maybe<Scalars['String']>;
};

type SiteNavigationEntryInternal = SiteNavigationEntry & {
  readonly href: Scalars['String'];
  readonly displayName: Scalars['String'];
  readonly category: Maybe<Scalars['String']>;
  readonly pathname: Scalars['String'];
};

type SiteNavigationEntryExternal = SiteNavigationEntry & {
  readonly href: Scalars['String'];
  readonly displayName: Scalars['String'];
  readonly category: Maybe<Scalars['String']>;
  readonly url: Scalars['String'];
};

type SocialProfileEntry = {
  readonly service: SocialService;
  readonly url: Scalars['String'];
};

type GreenhouseJobCustomFieldType =
  | 'SHORT_TEXT'
  | 'LONG_TEXT'
  | 'SINGLE_SELECT'
  | 'MULTI_SELECT'
  | 'YES_NO'
  | 'CURRENCY'
  | 'DATE'
  | 'URL'
  | 'USER'
  | 'CURRENCY_RANGE'
  | 'NUMBER_RANGE';

type GreenhouseJob = Node & {
  readonly ghId: Scalars['String'];
  readonly title: Scalars['String'];
  /** URL to public Greenhouse job board UI */
  readonly boardUrl: Scalars['String'];
  readonly content: Scalars['String'];
  readonly updatedAt: Scalars['Date'];
  readonly metadata: ReadonlyArray<GreenhouseJobCustomFieldMetadata>;
  /** Returns all children nodes filtered by type JobPost */
  readonly childrenJobPost: Maybe<ReadonlyArray<Maybe<JobPost>>>;
  /** Returns the first child node of type JobPost or null if there are no children of given type on this node */
  readonly childJobPost: Maybe<JobPost>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type GreenhouseJob_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type GreenhouseJobCustomFieldMetadata = {
  readonly id: Scalars['String'];
  readonly name: Scalars['String'];
  readonly type: GreenhouseJobCustomFieldType;
  readonly value: Maybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly buildTime: Maybe<Scalars['Date']>;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type SitePlugin = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<SitePluginPluginOptions>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly packageJson: Maybe<SitePluginPackageJson>;
};

type SitePluginPluginOptions = {
  readonly base64Width: Maybe<Scalars['Int']>;
  readonly stripMetadata: Maybe<Scalars['Boolean']>;
  readonly defaultQuality: Maybe<Scalars['Int']>;
  readonly failOnError: Maybe<Scalars['Boolean']>;
  readonly root: Maybe<Scalars['String']>;
  readonly aliases: Maybe<SitePluginPluginOptionsAliases>;
  readonly outputPath: Maybe<Scalars['String']>;
  readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchema>;
  readonly emitPluginDocuments: Maybe<SitePluginPluginOptionsEmitPluginDocuments>;
  readonly repositoryName: Maybe<Scalars['String']>;
  readonly accessToken: Maybe<Scalars['String']>;
  readonly schemas: Maybe<SitePluginPluginOptionsSchemas>;
  readonly uid: Maybe<Scalars['String']>;
  readonly baseUrl: Maybe<Scalars['String']>;
  readonly boardToken: Maybe<Scalars['String']>;
  readonly includeContent: Maybe<Scalars['Boolean']>;
  readonly path: Maybe<Scalars['String']>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
  readonly allExtensions: Maybe<Scalars['Boolean']>;
  readonly isTSX: Maybe<Scalars['Boolean']>;
  readonly jsxPragma: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsAliases = {
  readonly _: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsEmitSchema = {
  readonly src___generated___gatsby_introspection_json: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsEmitPluginDocuments = {
  readonly src___generated___gatsby_plugin_documents_graphql: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsSchemas = {
  readonly faq: Maybe<SitePluginPluginOptionsSchemasFaq>;
  readonly site_navigation: Maybe<SitePluginPluginOptionsSchemasSite_navigation>;
  readonly terms_and_conditions: Maybe<SitePluginPluginOptionsSchemasTerms_and_conditions>;
};

type SitePluginPluginOptionsSchemasFaq = {
  readonly Main: Maybe<SitePluginPluginOptionsSchemasFaqMain>;
};

type SitePluginPluginOptionsSchemasFaqMain = {
  readonly uid: Maybe<SitePluginPluginOptionsSchemasFaqMainUid>;
  readonly entries: Maybe<SitePluginPluginOptionsSchemasFaqMainEntries>;
};

type SitePluginPluginOptionsSchemasFaqMainUid = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasFaqMainUidConfig>;
};

type SitePluginPluginOptionsSchemasFaqMainUidConfig = {
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasFaqMainEntries = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasFaqMainEntriesConfig>;
};

type SitePluginPluginOptionsSchemasFaqMainEntriesConfig = {
  readonly fields: Maybe<SitePluginPluginOptionsSchemasFaqMainEntriesConfigFields>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasFaqMainEntriesConfigFields = {
  readonly question: Maybe<SitePluginPluginOptionsSchemasFaqMainEntriesConfigFieldsQuestion>;
  readonly answer: Maybe<SitePluginPluginOptionsSchemasFaqMainEntriesConfigFieldsAnswer>;
};

type SitePluginPluginOptionsSchemasFaqMainEntriesConfigFieldsQuestion = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasFaqMainEntriesConfigFieldsQuestionConfig>;
};

type SitePluginPluginOptionsSchemasFaqMainEntriesConfigFieldsQuestionConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasFaqMainEntriesConfigFieldsAnswer = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasFaqMainEntriesConfigFieldsAnswerConfig>;
};

type SitePluginPluginOptionsSchemasFaqMainEntriesConfigFieldsAnswerConfig = {
  readonly multi: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasSite_navigation = {
  readonly Main: Maybe<SitePluginPluginOptionsSchemasSite_navigationMain>;
};

type SitePluginPluginOptionsSchemasSite_navigationMain = {
  readonly uid: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainUid>;
  readonly canonical_link: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainCanonical_link>;
  readonly header_entries: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainHeader_entries>;
  readonly footer_entries: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainFooter_entries>;
  readonly social_entries: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainSocial_entries>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainUid = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainUidConfig>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainUidConfig = {
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainCanonical_link = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainCanonical_linkConfig>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainCanonical_linkConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainHeader_entries = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainHeader_entriesConfig>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainHeader_entriesConfig = {
  readonly fields: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainHeader_entriesConfigFields>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainHeader_entriesConfigFields = {
  readonly display_name: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainHeader_entriesConfigFieldsDisplay_name>;
  readonly link: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainHeader_entriesConfigFieldsLink>;
  readonly category: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainHeader_entriesConfigFieldsCategory>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainHeader_entriesConfigFieldsDisplay_name = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainHeader_entriesConfigFieldsDisplay_nameConfig>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainHeader_entriesConfigFieldsDisplay_nameConfig = {
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainHeader_entriesConfigFieldsLink = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainHeader_entriesConfigFieldsLinkConfig>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainHeader_entriesConfigFieldsLinkConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainHeader_entriesConfigFieldsCategory = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainHeader_entriesConfigFieldsCategoryConfig>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainHeader_entriesConfigFieldsCategoryConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainFooter_entries = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainFooter_entriesConfig>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainFooter_entriesConfig = {
  readonly fields: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainFooter_entriesConfigFields>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainFooter_entriesConfigFields = {
  readonly display_name: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainFooter_entriesConfigFieldsDisplay_name>;
  readonly link: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainFooter_entriesConfigFieldsLink>;
  readonly category: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainFooter_entriesConfigFieldsCategory>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainFooter_entriesConfigFieldsDisplay_name = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainFooter_entriesConfigFieldsDisplay_nameConfig>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainFooter_entriesConfigFieldsDisplay_nameConfig = {
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainFooter_entriesConfigFieldsLink = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainFooter_entriesConfigFieldsLinkConfig>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainFooter_entriesConfigFieldsLinkConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainFooter_entriesConfigFieldsCategory = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainFooter_entriesConfigFieldsCategoryConfig>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainFooter_entriesConfigFieldsCategoryConfig = {
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainSocial_entries = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainSocial_entriesConfig>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainSocial_entriesConfig = {
  readonly fields: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainSocial_entriesConfigFields>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainSocial_entriesConfigFields = {
  readonly social_type: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainSocial_entriesConfigFieldsSocial_type>;
  readonly link: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainSocial_entriesConfigFieldsLink>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainSocial_entriesConfigFieldsSocial_type = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainSocial_entriesConfigFieldsSocial_typeConfig>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainSocial_entriesConfigFieldsSocial_typeConfig = {
  readonly options: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainSocial_entriesConfigFieldsLink = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainSocial_entriesConfigFieldsLinkConfig>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainSocial_entriesConfigFieldsLinkConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTerms_and_conditions = {
  readonly Main: Maybe<SitePluginPluginOptionsSchemasTerms_and_conditionsMain>;
};

type SitePluginPluginOptionsSchemasTerms_and_conditionsMain = {
  readonly uid: Maybe<SitePluginPluginOptionsSchemasTerms_and_conditionsMainUid>;
  readonly description: Maybe<SitePluginPluginOptionsSchemasTerms_and_conditionsMainDescription>;
  readonly revision_date: Maybe<SitePluginPluginOptionsSchemasTerms_and_conditionsMainRevision_date>;
  readonly content: Maybe<SitePluginPluginOptionsSchemasTerms_and_conditionsMainContent>;
};

type SitePluginPluginOptionsSchemasTerms_and_conditionsMainUid = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTerms_and_conditionsMainUidConfig>;
};

type SitePluginPluginOptionsSchemasTerms_and_conditionsMainUidConfig = {
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTerms_and_conditionsMainDescription = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTerms_and_conditionsMainDescriptionConfig>;
};

type SitePluginPluginOptionsSchemasTerms_and_conditionsMainDescriptionConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTerms_and_conditionsMainRevision_date = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTerms_and_conditionsMainRevision_dateConfig>;
};

type SitePluginPluginOptionsSchemasTerms_and_conditionsMainRevision_dateConfig = {
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTerms_and_conditionsMainContent = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTerms_and_conditionsMainContentConfig>;
};

type SitePluginPluginOptionsSchemasTerms_and_conditionsMainContentConfig = {
  readonly multi: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPackageJson = {
  readonly name: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly main: Maybe<Scalars['String']>;
  readonly license: Maybe<Scalars['String']>;
  readonly dependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDependencies>>>;
  readonly devDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies: Maybe<ReadonlyArray<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  readonly keywords: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

type SitePluginPackageJsonDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonDevDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginPackageJsonPeerDependencies = {
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
};

type Query = {
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly site: Maybe<Site>;
  readonly allSite: SiteConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly prismicFaq: Maybe<PrismicFaq>;
  readonly allPrismicFaq: PrismicFaqConnection;
  readonly prismicSiteNavigation: Maybe<PrismicSiteNavigation>;
  readonly allPrismicSiteNavigation: PrismicSiteNavigationConnection;
  readonly prismicTermsAndConditions: Maybe<PrismicTermsAndConditions>;
  readonly allPrismicTermsAndConditions: PrismicTermsAndConditionsConnection;
  readonly jobPost: Maybe<JobPost>;
  readonly allJobPost: JobPostConnection;
  readonly faq: Maybe<Faq>;
  readonly allFaq: FaqConnection;
  readonly siteNavigation: Maybe<SiteNavigation>;
  readonly allSiteNavigation: SiteNavigationConnection;
  readonly greenhouseJob: Maybe<GreenhouseJob>;
  readonly allGreenhouseJob: GreenhouseJobConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
};


type Query_fileArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  childImageSharp: Maybe<ImageSharpFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFileArgs = {
  filter: Maybe<FileFilterInput>;
  sort: Maybe<FileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_directoryArgs = {
  sourceInstanceName: Maybe<StringQueryOperatorInput>;
  absolutePath: Maybe<StringQueryOperatorInput>;
  relativePath: Maybe<StringQueryOperatorInput>;
  extension: Maybe<StringQueryOperatorInput>;
  size: Maybe<IntQueryOperatorInput>;
  prettySize: Maybe<StringQueryOperatorInput>;
  modifiedTime: Maybe<DateQueryOperatorInput>;
  accessTime: Maybe<DateQueryOperatorInput>;
  changeTime: Maybe<DateQueryOperatorInput>;
  birthTime: Maybe<DateQueryOperatorInput>;
  root: Maybe<StringQueryOperatorInput>;
  dir: Maybe<StringQueryOperatorInput>;
  base: Maybe<StringQueryOperatorInput>;
  ext: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  relativeDirectory: Maybe<StringQueryOperatorInput>;
  dev: Maybe<IntQueryOperatorInput>;
  mode: Maybe<IntQueryOperatorInput>;
  nlink: Maybe<IntQueryOperatorInput>;
  uid: Maybe<IntQueryOperatorInput>;
  gid: Maybe<IntQueryOperatorInput>;
  rdev: Maybe<IntQueryOperatorInput>;
  ino: Maybe<FloatQueryOperatorInput>;
  atimeMs: Maybe<FloatQueryOperatorInput>;
  mtimeMs: Maybe<FloatQueryOperatorInput>;
  ctimeMs: Maybe<FloatQueryOperatorInput>;
  atime: Maybe<DateQueryOperatorInput>;
  mtime: Maybe<DateQueryOperatorInput>;
  ctime: Maybe<DateQueryOperatorInput>;
  birthtime: Maybe<DateQueryOperatorInput>;
  birthtimeMs: Maybe<FloatQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allDirectoryArgs = {
  filter: Maybe<DirectoryFilterInput>;
  sort: Maybe<DirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  flags: Maybe<SiteFlagsFilterInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePageArgs = {
  path: Maybe<StringQueryOperatorInput>;
  component: Maybe<StringQueryOperatorInput>;
  internalComponentName: Maybe<StringQueryOperatorInput>;
  componentChunkName: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  context: Maybe<SitePageContextFilterInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  componentPath: Maybe<StringQueryOperatorInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_imageSharpArgs = {
  fixed: Maybe<ImageSharpFixedFilterInput>;
  fluid: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  original: Maybe<ImageSharpOriginalFilterInput>;
  resize: Maybe<ImageSharpResizeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allImageSharpArgs = {
  filter: Maybe<ImageSharpFilterInput>;
  sort: Maybe<ImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicFaqArgs = {
  data: Maybe<PrismicFaqDataTypeFilterInput>;
  dataRaw: Maybe<JSONQueryOperatorInput>;
  dataString: Maybe<StringQueryOperatorInput>;
  first_publication_date: Maybe<DateQueryOperatorInput>;
  href: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  lang: Maybe<StringQueryOperatorInput>;
  last_publication_date: Maybe<DateQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  alternate_languages: Maybe<PrismicLinkTypeFilterListInput>;
  type: Maybe<StringQueryOperatorInput>;
  prismicId: Maybe<IDQueryOperatorInput>;
  _previewable: Maybe<IDQueryOperatorInput>;
  uid: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allPrismicFaqArgs = {
  filter: Maybe<PrismicFaqFilterInput>;
  sort: Maybe<PrismicFaqSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicSiteNavigationArgs = {
  data: Maybe<PrismicSiteNavigationDataTypeFilterInput>;
  dataRaw: Maybe<JSONQueryOperatorInput>;
  dataString: Maybe<StringQueryOperatorInput>;
  first_publication_date: Maybe<DateQueryOperatorInput>;
  href: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  lang: Maybe<StringQueryOperatorInput>;
  last_publication_date: Maybe<DateQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  alternate_languages: Maybe<PrismicLinkTypeFilterListInput>;
  type: Maybe<StringQueryOperatorInput>;
  prismicId: Maybe<IDQueryOperatorInput>;
  _previewable: Maybe<IDQueryOperatorInput>;
  uid: Maybe<StringQueryOperatorInput>;
  childrenSiteNavigation: Maybe<SiteNavigationFilterListInput>;
  childSiteNavigation: Maybe<SiteNavigationFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allPrismicSiteNavigationArgs = {
  filter: Maybe<PrismicSiteNavigationFilterInput>;
  sort: Maybe<PrismicSiteNavigationSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicTermsAndConditionsArgs = {
  data: Maybe<PrismicTermsAndConditionsDataTypeFilterInput>;
  dataRaw: Maybe<JSONQueryOperatorInput>;
  dataString: Maybe<StringQueryOperatorInput>;
  first_publication_date: Maybe<DateQueryOperatorInput>;
  href: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  lang: Maybe<StringQueryOperatorInput>;
  last_publication_date: Maybe<DateQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  alternate_languages: Maybe<PrismicLinkTypeFilterListInput>;
  type: Maybe<StringQueryOperatorInput>;
  prismicId: Maybe<IDQueryOperatorInput>;
  _previewable: Maybe<IDQueryOperatorInput>;
  uid: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allPrismicTermsAndConditionsArgs = {
  filter: Maybe<PrismicTermsAndConditionsFilterInput>;
  sort: Maybe<PrismicTermsAndConditionsSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_jobPostArgs = {
  title: Maybe<StringQueryOperatorInput>;
  boardUrl: Maybe<StringQueryOperatorInput>;
  content: Maybe<JobPostContentSectionFilterListInput>;
  rawContent: Maybe<StringQueryOperatorInput>;
  employmentType: Maybe<JobEmploymentTypeQueryOperatorInput>;
  alternativeCivilianService: Maybe<BooleanQueryOperatorInput>;
  priorExperience: Maybe<JobPriorExperienceQueryOperatorInput>;
  chapter: Maybe<StringQueryOperatorInput>;
  keywords: Maybe<StringQueryOperatorInput>;
  gatsbyPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allJobPostArgs = {
  filter: Maybe<JobPostFilterInput>;
  sort: Maybe<JobPostSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_faqArgs = {
  entries: Maybe<FaqEntryFilterListInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allFaqArgs = {
  filter: Maybe<FaqFilterInput>;
  sort: Maybe<FaqSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteNavigationArgs = {
  headerEntries: Maybe<SiteNavigationEntryFilterListInput>;
  footerEntries: Maybe<SiteNavigationEntryFilterListInput>;
  socialProfiles: Maybe<SocialProfileEntryFilterListInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteNavigationArgs = {
  filter: Maybe<SiteNavigationFilterInput>;
  sort: Maybe<SiteNavigationSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_greenhouseJobArgs = {
  ghId: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  boardUrl: Maybe<StringQueryOperatorInput>;
  content: Maybe<StringQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  metadata: Maybe<GreenhouseJobCustomFieldMetadataFilterListInput>;
  childrenJobPost: Maybe<JobPostFilterListInput>;
  childJobPost: Maybe<JobPostFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allGreenhouseJobArgs = {
  filter: Maybe<GreenhouseJobFilterInput>;
  sort: Maybe<GreenhouseJobSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  buildTime: Maybe<DateQueryOperatorInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

type StringQueryOperatorInput = {
  readonly eq: Maybe<Scalars['String']>;
  readonly ne: Maybe<Scalars['String']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex: Maybe<Scalars['String']>;
  readonly glob: Maybe<Scalars['String']>;
};

type IntQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Int']>;
  readonly ne: Maybe<Scalars['Int']>;
  readonly gt: Maybe<Scalars['Int']>;
  readonly gte: Maybe<Scalars['Int']>;
  readonly lt: Maybe<Scalars['Int']>;
  readonly lte: Maybe<Scalars['Int']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Date']>;
  readonly ne: Maybe<Scalars['Date']>;
  readonly gt: Maybe<Scalars['Date']>;
  readonly gte: Maybe<Scalars['Date']>;
  readonly lt: Maybe<Scalars['Date']>;
  readonly lte: Maybe<Scalars['Date']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Float']>;
  readonly ne: Maybe<Scalars['Float']>;
  readonly gt: Maybe<Scalars['Float']>;
  readonly gte: Maybe<Scalars['Float']>;
  readonly lt: Maybe<Scalars['Float']>;
  readonly lte: Maybe<Scalars['Float']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: Maybe<ImageSharpFilterInput>;
};

type ImageSharpFilterInput = {
  readonly fixed: Maybe<ImageSharpFixedFilterInput>;
  readonly fluid: Maybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly original: Maybe<ImageSharpOriginalFilterInput>;
  readonly resize: Maybe<ImageSharpResizeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type ImageSharpFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type ImageSharpFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly originalImg: Maybe<StringQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
  readonly presentationWidth: Maybe<IntQueryOperatorInput>;
  readonly presentationHeight: Maybe<IntQueryOperatorInput>;
};

type JSONQueryOperatorInput = {
  readonly eq: Maybe<Scalars['JSON']>;
  readonly ne: Maybe<Scalars['JSON']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['JSON']>>>;
  readonly regex: Maybe<Scalars['JSON']>;
  readonly glob: Maybe<Scalars['JSON']>;
};

type ImageSharpOriginalFilterInput = {
  readonly width: Maybe<FloatQueryOperatorInput>;
  readonly height: Maybe<FloatQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
};

type ImageSharpResizeFilterInput = {
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly tracedSVG: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
  readonly originalName: Maybe<StringQueryOperatorInput>;
};

type NodeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: Maybe<NodeFilterInput>;
};

type InternalFilterInput = {
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly contentDigest: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly fieldOwners: Maybe<StringQueryOperatorInput>;
  readonly ignoreType: Maybe<BooleanQueryOperatorInput>;
  readonly mediaType: Maybe<StringQueryOperatorInput>;
  readonly owner: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
};

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

type FileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'childrenImageSharp'
  | 'childrenImageSharp.fixed.base64'
  | 'childrenImageSharp.fixed.tracedSVG'
  | 'childrenImageSharp.fixed.aspectRatio'
  | 'childrenImageSharp.fixed.width'
  | 'childrenImageSharp.fixed.height'
  | 'childrenImageSharp.fixed.src'
  | 'childrenImageSharp.fixed.srcSet'
  | 'childrenImageSharp.fixed.srcWebp'
  | 'childrenImageSharp.fixed.srcSetWebp'
  | 'childrenImageSharp.fixed.originalName'
  | 'childrenImageSharp.fluid.base64'
  | 'childrenImageSharp.fluid.tracedSVG'
  | 'childrenImageSharp.fluid.aspectRatio'
  | 'childrenImageSharp.fluid.src'
  | 'childrenImageSharp.fluid.srcSet'
  | 'childrenImageSharp.fluid.srcWebp'
  | 'childrenImageSharp.fluid.srcSetWebp'
  | 'childrenImageSharp.fluid.sizes'
  | 'childrenImageSharp.fluid.originalImg'
  | 'childrenImageSharp.fluid.originalName'
  | 'childrenImageSharp.fluid.presentationWidth'
  | 'childrenImageSharp.fluid.presentationHeight'
  | 'childrenImageSharp.gatsbyImageData'
  | 'childrenImageSharp.original.width'
  | 'childrenImageSharp.original.height'
  | 'childrenImageSharp.original.src'
  | 'childrenImageSharp.resize.src'
  | 'childrenImageSharp.resize.tracedSVG'
  | 'childrenImageSharp.resize.width'
  | 'childrenImageSharp.resize.height'
  | 'childrenImageSharp.resize.aspectRatio'
  | 'childrenImageSharp.resize.originalName'
  | 'childrenImageSharp.id'
  | 'childrenImageSharp.parent.id'
  | 'childrenImageSharp.parent.parent.id'
  | 'childrenImageSharp.parent.parent.children'
  | 'childrenImageSharp.parent.children'
  | 'childrenImageSharp.parent.children.id'
  | 'childrenImageSharp.parent.children.children'
  | 'childrenImageSharp.parent.internal.content'
  | 'childrenImageSharp.parent.internal.contentDigest'
  | 'childrenImageSharp.parent.internal.description'
  | 'childrenImageSharp.parent.internal.fieldOwners'
  | 'childrenImageSharp.parent.internal.ignoreType'
  | 'childrenImageSharp.parent.internal.mediaType'
  | 'childrenImageSharp.parent.internal.owner'
  | 'childrenImageSharp.parent.internal.type'
  | 'childrenImageSharp.children'
  | 'childrenImageSharp.children.id'
  | 'childrenImageSharp.children.parent.id'
  | 'childrenImageSharp.children.parent.children'
  | 'childrenImageSharp.children.children'
  | 'childrenImageSharp.children.children.id'
  | 'childrenImageSharp.children.children.children'
  | 'childrenImageSharp.children.internal.content'
  | 'childrenImageSharp.children.internal.contentDigest'
  | 'childrenImageSharp.children.internal.description'
  | 'childrenImageSharp.children.internal.fieldOwners'
  | 'childrenImageSharp.children.internal.ignoreType'
  | 'childrenImageSharp.children.internal.mediaType'
  | 'childrenImageSharp.children.internal.owner'
  | 'childrenImageSharp.children.internal.type'
  | 'childrenImageSharp.internal.content'
  | 'childrenImageSharp.internal.contentDigest'
  | 'childrenImageSharp.internal.description'
  | 'childrenImageSharp.internal.fieldOwners'
  | 'childrenImageSharp.internal.ignoreType'
  | 'childrenImageSharp.internal.mediaType'
  | 'childrenImageSharp.internal.owner'
  | 'childrenImageSharp.internal.type'
  | 'childImageSharp.fixed.base64'
  | 'childImageSharp.fixed.tracedSVG'
  | 'childImageSharp.fixed.aspectRatio'
  | 'childImageSharp.fixed.width'
  | 'childImageSharp.fixed.height'
  | 'childImageSharp.fixed.src'
  | 'childImageSharp.fixed.srcSet'
  | 'childImageSharp.fixed.srcWebp'
  | 'childImageSharp.fixed.srcSetWebp'
  | 'childImageSharp.fixed.originalName'
  | 'childImageSharp.fluid.base64'
  | 'childImageSharp.fluid.tracedSVG'
  | 'childImageSharp.fluid.aspectRatio'
  | 'childImageSharp.fluid.src'
  | 'childImageSharp.fluid.srcSet'
  | 'childImageSharp.fluid.srcWebp'
  | 'childImageSharp.fluid.srcSetWebp'
  | 'childImageSharp.fluid.sizes'
  | 'childImageSharp.fluid.originalImg'
  | 'childImageSharp.fluid.originalName'
  | 'childImageSharp.fluid.presentationWidth'
  | 'childImageSharp.fluid.presentationHeight'
  | 'childImageSharp.gatsbyImageData'
  | 'childImageSharp.original.width'
  | 'childImageSharp.original.height'
  | 'childImageSharp.original.src'
  | 'childImageSharp.resize.src'
  | 'childImageSharp.resize.tracedSVG'
  | 'childImageSharp.resize.width'
  | 'childImageSharp.resize.height'
  | 'childImageSharp.resize.aspectRatio'
  | 'childImageSharp.resize.originalName'
  | 'childImageSharp.id'
  | 'childImageSharp.parent.id'
  | 'childImageSharp.parent.parent.id'
  | 'childImageSharp.parent.parent.children'
  | 'childImageSharp.parent.children'
  | 'childImageSharp.parent.children.id'
  | 'childImageSharp.parent.children.children'
  | 'childImageSharp.parent.internal.content'
  | 'childImageSharp.parent.internal.contentDigest'
  | 'childImageSharp.parent.internal.description'
  | 'childImageSharp.parent.internal.fieldOwners'
  | 'childImageSharp.parent.internal.ignoreType'
  | 'childImageSharp.parent.internal.mediaType'
  | 'childImageSharp.parent.internal.owner'
  | 'childImageSharp.parent.internal.type'
  | 'childImageSharp.children'
  | 'childImageSharp.children.id'
  | 'childImageSharp.children.parent.id'
  | 'childImageSharp.children.parent.children'
  | 'childImageSharp.children.children'
  | 'childImageSharp.children.children.id'
  | 'childImageSharp.children.children.children'
  | 'childImageSharp.children.internal.content'
  | 'childImageSharp.children.internal.contentDigest'
  | 'childImageSharp.children.internal.description'
  | 'childImageSharp.children.internal.fieldOwners'
  | 'childImageSharp.children.internal.ignoreType'
  | 'childImageSharp.children.internal.mediaType'
  | 'childImageSharp.children.internal.owner'
  | 'childImageSharp.children.internal.type'
  | 'childImageSharp.internal.content'
  | 'childImageSharp.internal.contentDigest'
  | 'childImageSharp.internal.description'
  | 'childImageSharp.internal.fieldOwners'
  | 'childImageSharp.internal.ignoreType'
  | 'childImageSharp.internal.mediaType'
  | 'childImageSharp.internal.owner'
  | 'childImageSharp.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type FileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FileEdge>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type FileFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly childrenImageSharp: Maybe<ImageSharpFilterListInput>;
  readonly childImageSharp: Maybe<ImageSharpFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type DirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type DirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type DirectoryFilterInput = {
  readonly sourceInstanceName: Maybe<StringQueryOperatorInput>;
  readonly absolutePath: Maybe<StringQueryOperatorInput>;
  readonly relativePath: Maybe<StringQueryOperatorInput>;
  readonly extension: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly prettySize: Maybe<StringQueryOperatorInput>;
  readonly modifiedTime: Maybe<DateQueryOperatorInput>;
  readonly accessTime: Maybe<DateQueryOperatorInput>;
  readonly changeTime: Maybe<DateQueryOperatorInput>;
  readonly birthTime: Maybe<DateQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly dir: Maybe<StringQueryOperatorInput>;
  readonly base: Maybe<StringQueryOperatorInput>;
  readonly ext: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly relativeDirectory: Maybe<StringQueryOperatorInput>;
  readonly dev: Maybe<IntQueryOperatorInput>;
  readonly mode: Maybe<IntQueryOperatorInput>;
  readonly nlink: Maybe<IntQueryOperatorInput>;
  readonly uid: Maybe<IntQueryOperatorInput>;
  readonly gid: Maybe<IntQueryOperatorInput>;
  readonly rdev: Maybe<IntQueryOperatorInput>;
  readonly ino: Maybe<FloatQueryOperatorInput>;
  readonly atimeMs: Maybe<FloatQueryOperatorInput>;
  readonly mtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly ctimeMs: Maybe<FloatQueryOperatorInput>;
  readonly atime: Maybe<DateQueryOperatorInput>;
  readonly mtime: Maybe<DateQueryOperatorInput>;
  readonly ctime: Maybe<DateQueryOperatorInput>;
  readonly birthtime: Maybe<DateQueryOperatorInput>;
  readonly birthtimeMs: Maybe<FloatQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteSiteMetadataFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
};

type SiteFlagsFilterInput = {
  readonly FAST_DEV: Maybe<BooleanQueryOperatorInput>;
  readonly QUERY_ON_DEMAND: Maybe<BooleanQueryOperatorInput>;
  readonly LAZY_IMAGES: Maybe<BooleanQueryOperatorInput>;
  readonly PARALLEL_SOURCING: Maybe<BooleanQueryOperatorInput>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata.title'
  | 'siteMetadata.description'
  | 'siteMetadata.siteUrl'
  | 'port'
  | 'host'
  | 'flags.FAST_DEV'
  | 'flags.QUERY_ON_DEMAND'
  | 'flags.LAZY_IMAGES'
  | 'flags.PARALLEL_SOURCING'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteSiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly flags: Maybe<SiteFlagsFilterInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePageContextFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent__ghId: Maybe<StringQueryOperatorInput>;
  readonly _xparams: Maybe<SitePageContext_xparamsFilterInput>;
};

type SitePageContext_xparamsFilterInput = {
  readonly parent__ghId: Maybe<StringQueryOperatorInput>;
};

type SitePluginFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<SitePluginPluginOptionsFilterInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly packageJson: Maybe<SitePluginPackageJsonFilterInput>;
};

type SitePluginPluginOptionsFilterInput = {
  readonly base64Width: Maybe<IntQueryOperatorInput>;
  readonly stripMetadata: Maybe<BooleanQueryOperatorInput>;
  readonly defaultQuality: Maybe<IntQueryOperatorInput>;
  readonly failOnError: Maybe<BooleanQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly aliases: Maybe<SitePluginPluginOptionsAliasesFilterInput>;
  readonly outputPath: Maybe<StringQueryOperatorInput>;
  readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchemaFilterInput>;
  readonly emitPluginDocuments: Maybe<SitePluginPluginOptionsEmitPluginDocumentsFilterInput>;
  readonly repositoryName: Maybe<StringQueryOperatorInput>;
  readonly accessToken: Maybe<StringQueryOperatorInput>;
  readonly schemas: Maybe<SitePluginPluginOptionsSchemasFilterInput>;
  readonly uid: Maybe<StringQueryOperatorInput>;
  readonly baseUrl: Maybe<StringQueryOperatorInput>;
  readonly boardToken: Maybe<StringQueryOperatorInput>;
  readonly includeContent: Maybe<BooleanQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
  readonly allExtensions: Maybe<BooleanQueryOperatorInput>;
  readonly isTSX: Maybe<BooleanQueryOperatorInput>;
  readonly jsxPragma: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsAliasesFilterInput = {
  readonly _: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsEmitSchemaFilterInput = {
  readonly src___generated___gatsby_introspection_json: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsEmitPluginDocumentsFilterInput = {
  readonly src___generated___gatsby_plugin_documents_graphql: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasFilterInput = {
  readonly faq: Maybe<SitePluginPluginOptionsSchemasFaqFilterInput>;
  readonly site_navigation: Maybe<SitePluginPluginOptionsSchemasSite_navigationFilterInput>;
  readonly terms_and_conditions: Maybe<SitePluginPluginOptionsSchemasTerms_and_conditionsFilterInput>;
};

type SitePluginPluginOptionsSchemasFaqFilterInput = {
  readonly Main: Maybe<SitePluginPluginOptionsSchemasFaqMainFilterInput>;
};

type SitePluginPluginOptionsSchemasFaqMainFilterInput = {
  readonly uid: Maybe<SitePluginPluginOptionsSchemasFaqMainUidFilterInput>;
  readonly entries: Maybe<SitePluginPluginOptionsSchemasFaqMainEntriesFilterInput>;
};

type SitePluginPluginOptionsSchemasFaqMainUidFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasFaqMainUidConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasFaqMainUidConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasFaqMainEntriesFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasFaqMainEntriesConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasFaqMainEntriesConfigFilterInput = {
  readonly fields: Maybe<SitePluginPluginOptionsSchemasFaqMainEntriesConfigFieldsFilterInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasFaqMainEntriesConfigFieldsFilterInput = {
  readonly question: Maybe<SitePluginPluginOptionsSchemasFaqMainEntriesConfigFieldsQuestionFilterInput>;
  readonly answer: Maybe<SitePluginPluginOptionsSchemasFaqMainEntriesConfigFieldsAnswerFilterInput>;
};

type SitePluginPluginOptionsSchemasFaqMainEntriesConfigFieldsQuestionFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasFaqMainEntriesConfigFieldsQuestionConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasFaqMainEntriesConfigFieldsQuestionConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasFaqMainEntriesConfigFieldsAnswerFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasFaqMainEntriesConfigFieldsAnswerConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasFaqMainEntriesConfigFieldsAnswerConfigFilterInput = {
  readonly multi: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationFilterInput = {
  readonly Main: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainFilterInput = {
  readonly uid: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainUidFilterInput>;
  readonly canonical_link: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainCanonical_linkFilterInput>;
  readonly header_entries: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainHeader_entriesFilterInput>;
  readonly footer_entries: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainFooter_entriesFilterInput>;
  readonly social_entries: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainSocial_entriesFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainUidFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainUidConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainUidConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainCanonical_linkFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainCanonical_linkConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainCanonical_linkConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainHeader_entriesFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainHeader_entriesConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainHeader_entriesConfigFilterInput = {
  readonly fields: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainHeader_entriesConfigFieldsFilterInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainHeader_entriesConfigFieldsFilterInput = {
  readonly display_name: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainHeader_entriesConfigFieldsDisplay_nameFilterInput>;
  readonly link: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainHeader_entriesConfigFieldsLinkFilterInput>;
  readonly category: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainHeader_entriesConfigFieldsCategoryFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainHeader_entriesConfigFieldsDisplay_nameFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainHeader_entriesConfigFieldsDisplay_nameConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainHeader_entriesConfigFieldsDisplay_nameConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainHeader_entriesConfigFieldsLinkFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainHeader_entriesConfigFieldsLinkConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainHeader_entriesConfigFieldsLinkConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainHeader_entriesConfigFieldsCategoryFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainHeader_entriesConfigFieldsCategoryConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainHeader_entriesConfigFieldsCategoryConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainFooter_entriesFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainFooter_entriesConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainFooter_entriesConfigFilterInput = {
  readonly fields: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainFooter_entriesConfigFieldsFilterInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainFooter_entriesConfigFieldsFilterInput = {
  readonly display_name: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainFooter_entriesConfigFieldsDisplay_nameFilterInput>;
  readonly link: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainFooter_entriesConfigFieldsLinkFilterInput>;
  readonly category: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainFooter_entriesConfigFieldsCategoryFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainFooter_entriesConfigFieldsDisplay_nameFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainFooter_entriesConfigFieldsDisplay_nameConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainFooter_entriesConfigFieldsDisplay_nameConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainFooter_entriesConfigFieldsLinkFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainFooter_entriesConfigFieldsLinkConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainFooter_entriesConfigFieldsLinkConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainFooter_entriesConfigFieldsCategoryFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainFooter_entriesConfigFieldsCategoryConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainFooter_entriesConfigFieldsCategoryConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainSocial_entriesFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainSocial_entriesConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainSocial_entriesConfigFilterInput = {
  readonly fields: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainSocial_entriesConfigFieldsFilterInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainSocial_entriesConfigFieldsFilterInput = {
  readonly social_type: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainSocial_entriesConfigFieldsSocial_typeFilterInput>;
  readonly link: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainSocial_entriesConfigFieldsLinkFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainSocial_entriesConfigFieldsSocial_typeFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainSocial_entriesConfigFieldsSocial_typeConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainSocial_entriesConfigFieldsSocial_typeConfigFilterInput = {
  readonly options: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainSocial_entriesConfigFieldsLinkFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainSocial_entriesConfigFieldsLinkConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainSocial_entriesConfigFieldsLinkConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTerms_and_conditionsFilterInput = {
  readonly Main: Maybe<SitePluginPluginOptionsSchemasTerms_and_conditionsMainFilterInput>;
};

type SitePluginPluginOptionsSchemasTerms_and_conditionsMainFilterInput = {
  readonly uid: Maybe<SitePluginPluginOptionsSchemasTerms_and_conditionsMainUidFilterInput>;
  readonly description: Maybe<SitePluginPluginOptionsSchemasTerms_and_conditionsMainDescriptionFilterInput>;
  readonly revision_date: Maybe<SitePluginPluginOptionsSchemasTerms_and_conditionsMainRevision_dateFilterInput>;
  readonly content: Maybe<SitePluginPluginOptionsSchemasTerms_and_conditionsMainContentFilterInput>;
};

type SitePluginPluginOptionsSchemasTerms_and_conditionsMainUidFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTerms_and_conditionsMainUidConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTerms_and_conditionsMainUidConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTerms_and_conditionsMainDescriptionFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTerms_and_conditionsMainDescriptionConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTerms_and_conditionsMainDescriptionConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTerms_and_conditionsMainRevision_dateFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTerms_and_conditionsMainRevision_dateConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTerms_and_conditionsMainRevision_dateConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTerms_and_conditionsMainContentFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTerms_and_conditionsMainContentConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTerms_and_conditionsMainContentConfigFilterInput = {
  readonly multi: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly main: Maybe<StringQueryOperatorInput>;
  readonly license: Maybe<StringQueryOperatorInput>;
  readonly dependencies: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

type SitePluginPackageJsonDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

type SitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

type SitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
};

type SitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'isCreatedByStatefulCreatePages'
  | 'context.id'
  | 'context.parent__ghId'
  | 'context._xparams.parent__ghId'
  | 'pluginCreator.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.children'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'pluginCreator.resolve'
  | 'pluginCreator.name'
  | 'pluginCreator.version'
  | 'pluginCreator.pluginOptions.base64Width'
  | 'pluginCreator.pluginOptions.stripMetadata'
  | 'pluginCreator.pluginOptions.defaultQuality'
  | 'pluginCreator.pluginOptions.failOnError'
  | 'pluginCreator.pluginOptions.root'
  | 'pluginCreator.pluginOptions.aliases._'
  | 'pluginCreator.pluginOptions.outputPath'
  | 'pluginCreator.pluginOptions.emitSchema.src___generated___gatsby_introspection_json'
  | 'pluginCreator.pluginOptions.emitPluginDocuments.src___generated___gatsby_plugin_documents_graphql'
  | 'pluginCreator.pluginOptions.repositoryName'
  | 'pluginCreator.pluginOptions.accessToken'
  | 'pluginCreator.pluginOptions.uid'
  | 'pluginCreator.pluginOptions.baseUrl'
  | 'pluginCreator.pluginOptions.boardToken'
  | 'pluginCreator.pluginOptions.includeContent'
  | 'pluginCreator.pluginOptions.path'
  | 'pluginCreator.pluginOptions.pathCheck'
  | 'pluginCreator.pluginOptions.allExtensions'
  | 'pluginCreator.pluginOptions.isTSX'
  | 'pluginCreator.pluginOptions.jsxPragma'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.packageJson.name'
  | 'pluginCreator.packageJson.description'
  | 'pluginCreator.packageJson.version'
  | 'pluginCreator.packageJson.main'
  | 'pluginCreator.packageJson.license'
  | 'pluginCreator.packageJson.dependencies'
  | 'pluginCreator.packageJson.dependencies.name'
  | 'pluginCreator.packageJson.dependencies.version'
  | 'pluginCreator.packageJson.devDependencies'
  | 'pluginCreator.packageJson.devDependencies.name'
  | 'pluginCreator.packageJson.devDependencies.version'
  | 'pluginCreator.packageJson.peerDependencies'
  | 'pluginCreator.packageJson.peerDependencies.name'
  | 'pluginCreator.packageJson.peerDependencies.version'
  | 'pluginCreator.packageJson.keywords'
  | 'pluginCreatorId'
  | 'componentPath';

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly context: Maybe<SitePageContextFilterInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
  readonly componentPath: Maybe<StringQueryOperatorInput>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type ImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldsEnum =
  | 'fixed.base64'
  | 'fixed.tracedSVG'
  | 'fixed.aspectRatio'
  | 'fixed.width'
  | 'fixed.height'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcWebp'
  | 'fixed.srcSetWebp'
  | 'fixed.originalName'
  | 'fluid.base64'
  | 'fluid.tracedSVG'
  | 'fluid.aspectRatio'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcWebp'
  | 'fluid.srcSetWebp'
  | 'fluid.sizes'
  | 'fluid.originalImg'
  | 'fluid.originalName'
  | 'fluid.presentationWidth'
  | 'fluid.presentationHeight'
  | 'gatsbyImageData'
  | 'original.width'
  | 'original.height'
  | 'original.src'
  | 'resize.src'
  | 'resize.tracedSVG'
  | 'resize.width'
  | 'resize.height'
  | 'resize.aspectRatio'
  | 'resize.originalName'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type ImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicFaqDataTypeFilterInput = {
  readonly entries: Maybe<PrismicFaqEntriesGroupTypeFilterListInput>;
};

type PrismicFaqEntriesGroupTypeFilterListInput = {
  readonly elemMatch: Maybe<PrismicFaqEntriesGroupTypeFilterInput>;
};

type PrismicFaqEntriesGroupTypeFilterInput = {
  readonly question: Maybe<StringQueryOperatorInput>;
  readonly answer: Maybe<PrismicStructuredTextTypeFilterInput>;
};

type PrismicStructuredTextTypeFilterInput = {
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly text: Maybe<StringQueryOperatorInput>;
  readonly raw: Maybe<JSONQueryOperatorInput>;
};

type PrismicLinkTypeFilterListInput = {
  readonly elemMatch: Maybe<PrismicLinkTypeFilterInput>;
};

type PrismicLinkTypeFilterInput = {
  readonly link_type: Maybe<PrismicLinkTypesQueryOperatorInput>;
  readonly isBroken: Maybe<BooleanQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly target: Maybe<StringQueryOperatorInput>;
  readonly size: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<IDQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly uid: Maybe<StringQueryOperatorInput>;
  readonly raw: Maybe<JSONQueryOperatorInput>;
};

type PrismicLinkTypesQueryOperatorInput = {
  readonly eq: Maybe<PrismicLinkTypes>;
  readonly ne: Maybe<PrismicLinkTypes>;
  readonly in: Maybe<ReadonlyArray<Maybe<PrismicLinkTypes>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<PrismicLinkTypes>>>;
};

type IDQueryOperatorInput = {
  readonly eq: Maybe<Scalars['ID']>;
  readonly ne: Maybe<Scalars['ID']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
};

type PrismicFaqConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicFaqEdge>;
  readonly nodes: ReadonlyArray<PrismicFaq>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<PrismicFaqGroupConnection>;
};


type PrismicFaqConnection_distinctArgs = {
  field: PrismicFaqFieldsEnum;
};


type PrismicFaqConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicFaqFieldsEnum;
};

type PrismicFaqEdge = {
  readonly next: Maybe<PrismicFaq>;
  readonly node: PrismicFaq;
  readonly previous: Maybe<PrismicFaq>;
};

type PrismicFaqFieldsEnum =
  | 'data.entries'
  | 'data.entries.question'
  | 'data.entries.answer.html'
  | 'data.entries.answer.text'
  | 'data.entries.answer.raw'
  | 'dataRaw'
  | 'dataString'
  | 'first_publication_date'
  | 'href'
  | 'url'
  | 'lang'
  | 'last_publication_date'
  | 'tags'
  | 'alternate_languages'
  | 'alternate_languages.link_type'
  | 'alternate_languages.isBroken'
  | 'alternate_languages.url'
  | 'alternate_languages.target'
  | 'alternate_languages.size'
  | 'alternate_languages.id'
  | 'alternate_languages.type'
  | 'alternate_languages.tags'
  | 'alternate_languages.lang'
  | 'alternate_languages.slug'
  | 'alternate_languages.uid'
  | 'alternate_languages.raw'
  | 'type'
  | 'prismicId'
  | '_previewable'
  | 'uid'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type PrismicFaqGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicFaqEdge>;
  readonly nodes: ReadonlyArray<PrismicFaq>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type PrismicFaqFilterInput = {
  readonly data: Maybe<PrismicFaqDataTypeFilterInput>;
  readonly dataRaw: Maybe<JSONQueryOperatorInput>;
  readonly dataString: Maybe<StringQueryOperatorInput>;
  readonly first_publication_date: Maybe<DateQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly last_publication_date: Maybe<DateQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly alternate_languages: Maybe<PrismicLinkTypeFilterListInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly prismicId: Maybe<IDQueryOperatorInput>;
  readonly _previewable: Maybe<IDQueryOperatorInput>;
  readonly uid: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicFaqSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicFaqFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicSiteNavigationDataTypeFilterInput = {
  readonly canonical_link: Maybe<PrismicLinkTypeFilterInput>;
  readonly header_entries: Maybe<PrismicSiteNavigationHeaderEntriesGroupTypeFilterListInput>;
  readonly footer_entries: Maybe<PrismicSiteNavigationFooterEntriesGroupTypeFilterListInput>;
  readonly social_entries: Maybe<PrismicSiteNavigationSocialEntriesGroupTypeFilterListInput>;
};

type PrismicSiteNavigationHeaderEntriesGroupTypeFilterListInput = {
  readonly elemMatch: Maybe<PrismicSiteNavigationHeaderEntriesGroupTypeFilterInput>;
};

type PrismicSiteNavigationHeaderEntriesGroupTypeFilterInput = {
  readonly display_name: Maybe<StringQueryOperatorInput>;
  readonly link: Maybe<PrismicLinkTypeFilterInput>;
  readonly category: Maybe<StringQueryOperatorInput>;
};

type PrismicSiteNavigationFooterEntriesGroupTypeFilterListInput = {
  readonly elemMatch: Maybe<PrismicSiteNavigationFooterEntriesGroupTypeFilterInput>;
};

type PrismicSiteNavigationFooterEntriesGroupTypeFilterInput = {
  readonly display_name: Maybe<StringQueryOperatorInput>;
  readonly link: Maybe<PrismicLinkTypeFilterInput>;
  readonly category: Maybe<StringQueryOperatorInput>;
};

type PrismicSiteNavigationSocialEntriesGroupTypeFilterListInput = {
  readonly elemMatch: Maybe<PrismicSiteNavigationSocialEntriesGroupTypeFilterInput>;
};

type PrismicSiteNavigationSocialEntriesGroupTypeFilterInput = {
  readonly social_type: Maybe<StringQueryOperatorInput>;
  readonly link: Maybe<PrismicLinkTypeFilterInput>;
};

type SiteNavigationFilterListInput = {
  readonly elemMatch: Maybe<SiteNavigationFilterInput>;
};

type SiteNavigationFilterInput = {
  readonly headerEntries: Maybe<SiteNavigationEntryFilterListInput>;
  readonly footerEntries: Maybe<SiteNavigationEntryFilterListInput>;
  readonly socialProfiles: Maybe<SocialProfileEntryFilterListInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteNavigationEntryFilterListInput = {
  readonly elemMatch: Maybe<SiteNavigationEntryFilterInput>;
};

type SiteNavigationEntryFilterInput = {
  readonly href: Maybe<StringQueryOperatorInput>;
  readonly displayName: Maybe<StringQueryOperatorInput>;
  readonly category: Maybe<StringQueryOperatorInput>;
};

type SocialProfileEntryFilterListInput = {
  readonly elemMatch: Maybe<SocialProfileEntryFilterInput>;
};

type SocialProfileEntryFilterInput = {
  readonly service: Maybe<SocialServiceQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
};

type SocialServiceQueryOperatorInput = {
  readonly eq: Maybe<SocialService>;
  readonly ne: Maybe<SocialService>;
  readonly in: Maybe<ReadonlyArray<Maybe<SocialService>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<SocialService>>>;
};

type PrismicSiteNavigationConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicSiteNavigationEdge>;
  readonly nodes: ReadonlyArray<PrismicSiteNavigation>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<PrismicSiteNavigationGroupConnection>;
};


type PrismicSiteNavigationConnection_distinctArgs = {
  field: PrismicSiteNavigationFieldsEnum;
};


type PrismicSiteNavigationConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicSiteNavigationFieldsEnum;
};

type PrismicSiteNavigationEdge = {
  readonly next: Maybe<PrismicSiteNavigation>;
  readonly node: PrismicSiteNavigation;
  readonly previous: Maybe<PrismicSiteNavigation>;
};

type PrismicSiteNavigationFieldsEnum =
  | 'data.canonical_link.link_type'
  | 'data.canonical_link.isBroken'
  | 'data.canonical_link.url'
  | 'data.canonical_link.target'
  | 'data.canonical_link.size'
  | 'data.canonical_link.id'
  | 'data.canonical_link.type'
  | 'data.canonical_link.tags'
  | 'data.canonical_link.lang'
  | 'data.canonical_link.slug'
  | 'data.canonical_link.uid'
  | 'data.canonical_link.raw'
  | 'data.header_entries'
  | 'data.header_entries.display_name'
  | 'data.header_entries.link.link_type'
  | 'data.header_entries.link.isBroken'
  | 'data.header_entries.link.url'
  | 'data.header_entries.link.target'
  | 'data.header_entries.link.size'
  | 'data.header_entries.link.id'
  | 'data.header_entries.link.type'
  | 'data.header_entries.link.tags'
  | 'data.header_entries.link.lang'
  | 'data.header_entries.link.slug'
  | 'data.header_entries.link.uid'
  | 'data.header_entries.link.raw'
  | 'data.header_entries.category'
  | 'data.footer_entries'
  | 'data.footer_entries.display_name'
  | 'data.footer_entries.link.link_type'
  | 'data.footer_entries.link.isBroken'
  | 'data.footer_entries.link.url'
  | 'data.footer_entries.link.target'
  | 'data.footer_entries.link.size'
  | 'data.footer_entries.link.id'
  | 'data.footer_entries.link.type'
  | 'data.footer_entries.link.tags'
  | 'data.footer_entries.link.lang'
  | 'data.footer_entries.link.slug'
  | 'data.footer_entries.link.uid'
  | 'data.footer_entries.link.raw'
  | 'data.footer_entries.category'
  | 'data.social_entries'
  | 'data.social_entries.social_type'
  | 'data.social_entries.link.link_type'
  | 'data.social_entries.link.isBroken'
  | 'data.social_entries.link.url'
  | 'data.social_entries.link.target'
  | 'data.social_entries.link.size'
  | 'data.social_entries.link.id'
  | 'data.social_entries.link.type'
  | 'data.social_entries.link.tags'
  | 'data.social_entries.link.lang'
  | 'data.social_entries.link.slug'
  | 'data.social_entries.link.uid'
  | 'data.social_entries.link.raw'
  | 'dataRaw'
  | 'dataString'
  | 'first_publication_date'
  | 'href'
  | 'url'
  | 'lang'
  | 'last_publication_date'
  | 'tags'
  | 'alternate_languages'
  | 'alternate_languages.link_type'
  | 'alternate_languages.isBroken'
  | 'alternate_languages.url'
  | 'alternate_languages.target'
  | 'alternate_languages.size'
  | 'alternate_languages.id'
  | 'alternate_languages.type'
  | 'alternate_languages.tags'
  | 'alternate_languages.lang'
  | 'alternate_languages.slug'
  | 'alternate_languages.uid'
  | 'alternate_languages.raw'
  | 'type'
  | 'prismicId'
  | '_previewable'
  | 'uid'
  | 'childrenSiteNavigation'
  | 'childrenSiteNavigation.headerEntries'
  | 'childrenSiteNavigation.headerEntries.href'
  | 'childrenSiteNavigation.headerEntries.displayName'
  | 'childrenSiteNavigation.headerEntries.category'
  | 'childrenSiteNavigation.footerEntries'
  | 'childrenSiteNavigation.footerEntries.href'
  | 'childrenSiteNavigation.footerEntries.displayName'
  | 'childrenSiteNavigation.footerEntries.category'
  | 'childrenSiteNavigation.socialProfiles'
  | 'childrenSiteNavigation.socialProfiles.service'
  | 'childrenSiteNavigation.socialProfiles.url'
  | 'childrenSiteNavigation.id'
  | 'childrenSiteNavigation.parent.id'
  | 'childrenSiteNavigation.parent.parent.id'
  | 'childrenSiteNavigation.parent.parent.children'
  | 'childrenSiteNavigation.parent.children'
  | 'childrenSiteNavigation.parent.children.id'
  | 'childrenSiteNavigation.parent.children.children'
  | 'childrenSiteNavigation.parent.internal.content'
  | 'childrenSiteNavigation.parent.internal.contentDigest'
  | 'childrenSiteNavigation.parent.internal.description'
  | 'childrenSiteNavigation.parent.internal.fieldOwners'
  | 'childrenSiteNavigation.parent.internal.ignoreType'
  | 'childrenSiteNavigation.parent.internal.mediaType'
  | 'childrenSiteNavigation.parent.internal.owner'
  | 'childrenSiteNavigation.parent.internal.type'
  | 'childrenSiteNavigation.children'
  | 'childrenSiteNavigation.children.id'
  | 'childrenSiteNavigation.children.parent.id'
  | 'childrenSiteNavigation.children.parent.children'
  | 'childrenSiteNavigation.children.children'
  | 'childrenSiteNavigation.children.children.id'
  | 'childrenSiteNavigation.children.children.children'
  | 'childrenSiteNavigation.children.internal.content'
  | 'childrenSiteNavigation.children.internal.contentDigest'
  | 'childrenSiteNavigation.children.internal.description'
  | 'childrenSiteNavigation.children.internal.fieldOwners'
  | 'childrenSiteNavigation.children.internal.ignoreType'
  | 'childrenSiteNavigation.children.internal.mediaType'
  | 'childrenSiteNavigation.children.internal.owner'
  | 'childrenSiteNavigation.children.internal.type'
  | 'childrenSiteNavigation.internal.content'
  | 'childrenSiteNavigation.internal.contentDigest'
  | 'childrenSiteNavigation.internal.description'
  | 'childrenSiteNavigation.internal.fieldOwners'
  | 'childrenSiteNavigation.internal.ignoreType'
  | 'childrenSiteNavigation.internal.mediaType'
  | 'childrenSiteNavigation.internal.owner'
  | 'childrenSiteNavigation.internal.type'
  | 'childSiteNavigation.headerEntries'
  | 'childSiteNavigation.headerEntries.href'
  | 'childSiteNavigation.headerEntries.displayName'
  | 'childSiteNavigation.headerEntries.category'
  | 'childSiteNavigation.footerEntries'
  | 'childSiteNavigation.footerEntries.href'
  | 'childSiteNavigation.footerEntries.displayName'
  | 'childSiteNavigation.footerEntries.category'
  | 'childSiteNavigation.socialProfiles'
  | 'childSiteNavigation.socialProfiles.service'
  | 'childSiteNavigation.socialProfiles.url'
  | 'childSiteNavigation.id'
  | 'childSiteNavigation.parent.id'
  | 'childSiteNavigation.parent.parent.id'
  | 'childSiteNavigation.parent.parent.children'
  | 'childSiteNavigation.parent.children'
  | 'childSiteNavigation.parent.children.id'
  | 'childSiteNavigation.parent.children.children'
  | 'childSiteNavigation.parent.internal.content'
  | 'childSiteNavigation.parent.internal.contentDigest'
  | 'childSiteNavigation.parent.internal.description'
  | 'childSiteNavigation.parent.internal.fieldOwners'
  | 'childSiteNavigation.parent.internal.ignoreType'
  | 'childSiteNavigation.parent.internal.mediaType'
  | 'childSiteNavigation.parent.internal.owner'
  | 'childSiteNavigation.parent.internal.type'
  | 'childSiteNavigation.children'
  | 'childSiteNavigation.children.id'
  | 'childSiteNavigation.children.parent.id'
  | 'childSiteNavigation.children.parent.children'
  | 'childSiteNavigation.children.children'
  | 'childSiteNavigation.children.children.id'
  | 'childSiteNavigation.children.children.children'
  | 'childSiteNavigation.children.internal.content'
  | 'childSiteNavigation.children.internal.contentDigest'
  | 'childSiteNavigation.children.internal.description'
  | 'childSiteNavigation.children.internal.fieldOwners'
  | 'childSiteNavigation.children.internal.ignoreType'
  | 'childSiteNavigation.children.internal.mediaType'
  | 'childSiteNavigation.children.internal.owner'
  | 'childSiteNavigation.children.internal.type'
  | 'childSiteNavigation.internal.content'
  | 'childSiteNavigation.internal.contentDigest'
  | 'childSiteNavigation.internal.description'
  | 'childSiteNavigation.internal.fieldOwners'
  | 'childSiteNavigation.internal.ignoreType'
  | 'childSiteNavigation.internal.mediaType'
  | 'childSiteNavigation.internal.owner'
  | 'childSiteNavigation.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type PrismicSiteNavigationGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicSiteNavigationEdge>;
  readonly nodes: ReadonlyArray<PrismicSiteNavigation>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type PrismicSiteNavigationFilterInput = {
  readonly data: Maybe<PrismicSiteNavigationDataTypeFilterInput>;
  readonly dataRaw: Maybe<JSONQueryOperatorInput>;
  readonly dataString: Maybe<StringQueryOperatorInput>;
  readonly first_publication_date: Maybe<DateQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly last_publication_date: Maybe<DateQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly alternate_languages: Maybe<PrismicLinkTypeFilterListInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly prismicId: Maybe<IDQueryOperatorInput>;
  readonly _previewable: Maybe<IDQueryOperatorInput>;
  readonly uid: Maybe<StringQueryOperatorInput>;
  readonly childrenSiteNavigation: Maybe<SiteNavigationFilterListInput>;
  readonly childSiteNavigation: Maybe<SiteNavigationFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicSiteNavigationSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicSiteNavigationFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicTermsAndConditionsDataTypeFilterInput = {
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly revision_date: Maybe<DateQueryOperatorInput>;
  readonly content: Maybe<PrismicStructuredTextTypeFilterInput>;
};

type PrismicTermsAndConditionsConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicTermsAndConditionsEdge>;
  readonly nodes: ReadonlyArray<PrismicTermsAndConditions>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<PrismicTermsAndConditionsGroupConnection>;
};


type PrismicTermsAndConditionsConnection_distinctArgs = {
  field: PrismicTermsAndConditionsFieldsEnum;
};


type PrismicTermsAndConditionsConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicTermsAndConditionsFieldsEnum;
};

type PrismicTermsAndConditionsEdge = {
  readonly next: Maybe<PrismicTermsAndConditions>;
  readonly node: PrismicTermsAndConditions;
  readonly previous: Maybe<PrismicTermsAndConditions>;
};

type PrismicTermsAndConditionsFieldsEnum =
  | 'data.description'
  | 'data.revision_date'
  | 'data.content.html'
  | 'data.content.text'
  | 'data.content.raw'
  | 'dataRaw'
  | 'dataString'
  | 'first_publication_date'
  | 'href'
  | 'url'
  | 'lang'
  | 'last_publication_date'
  | 'tags'
  | 'alternate_languages'
  | 'alternate_languages.link_type'
  | 'alternate_languages.isBroken'
  | 'alternate_languages.url'
  | 'alternate_languages.target'
  | 'alternate_languages.size'
  | 'alternate_languages.id'
  | 'alternate_languages.type'
  | 'alternate_languages.tags'
  | 'alternate_languages.lang'
  | 'alternate_languages.slug'
  | 'alternate_languages.uid'
  | 'alternate_languages.raw'
  | 'type'
  | 'prismicId'
  | '_previewable'
  | 'uid'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type PrismicTermsAndConditionsGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicTermsAndConditionsEdge>;
  readonly nodes: ReadonlyArray<PrismicTermsAndConditions>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type PrismicTermsAndConditionsFilterInput = {
  readonly data: Maybe<PrismicTermsAndConditionsDataTypeFilterInput>;
  readonly dataRaw: Maybe<JSONQueryOperatorInput>;
  readonly dataString: Maybe<StringQueryOperatorInput>;
  readonly first_publication_date: Maybe<DateQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly last_publication_date: Maybe<DateQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly alternate_languages: Maybe<PrismicLinkTypeFilterListInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly prismicId: Maybe<IDQueryOperatorInput>;
  readonly _previewable: Maybe<IDQueryOperatorInput>;
  readonly uid: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicTermsAndConditionsSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicTermsAndConditionsFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type JobPostContentSectionFilterListInput = {
  readonly elemMatch: Maybe<JobPostContentSectionFilterInput>;
};

type JobPostContentSectionFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly level: Maybe<HeadingLevelQueryOperatorInput>;
  readonly rawContent: Maybe<StringQueryOperatorInput>;
};

type HeadingLevelQueryOperatorInput = {
  readonly eq: Maybe<HeadingLevel>;
  readonly ne: Maybe<HeadingLevel>;
  readonly in: Maybe<ReadonlyArray<Maybe<HeadingLevel>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<HeadingLevel>>>;
};

type JobEmploymentTypeQueryOperatorInput = {
  readonly eq: Maybe<JobEmploymentType>;
  readonly ne: Maybe<JobEmploymentType>;
  readonly in: Maybe<ReadonlyArray<Maybe<JobEmploymentType>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<JobEmploymentType>>>;
};

type JobPriorExperienceQueryOperatorInput = {
  readonly eq: Maybe<JobPriorExperience>;
  readonly ne: Maybe<JobPriorExperience>;
  readonly in: Maybe<ReadonlyArray<Maybe<JobPriorExperience>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<JobPriorExperience>>>;
};

type JobPostConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<JobPostEdge>;
  readonly nodes: ReadonlyArray<JobPost>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<JobPostGroupConnection>;
};


type JobPostConnection_distinctArgs = {
  field: JobPostFieldsEnum;
};


type JobPostConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: JobPostFieldsEnum;
};

type JobPostEdge = {
  readonly next: Maybe<JobPost>;
  readonly node: JobPost;
  readonly previous: Maybe<JobPost>;
};

type JobPostFieldsEnum =
  | 'title'
  | 'boardUrl'
  | 'content'
  | 'content.title'
  | 'content.level'
  | 'content.rawContent'
  | 'rawContent'
  | 'employmentType'
  | 'alternativeCivilianService'
  | 'priorExperience'
  | 'chapter'
  | 'keywords'
  | 'gatsbyPath'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type JobPostGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<JobPostEdge>;
  readonly nodes: ReadonlyArray<JobPost>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type JobPostFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly boardUrl: Maybe<StringQueryOperatorInput>;
  readonly content: Maybe<JobPostContentSectionFilterListInput>;
  readonly rawContent: Maybe<StringQueryOperatorInput>;
  readonly employmentType: Maybe<JobEmploymentTypeQueryOperatorInput>;
  readonly alternativeCivilianService: Maybe<BooleanQueryOperatorInput>;
  readonly priorExperience: Maybe<JobPriorExperienceQueryOperatorInput>;
  readonly chapter: Maybe<StringQueryOperatorInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
  readonly gatsbyPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type JobPostSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<JobPostFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type FaqEntryFilterListInput = {
  readonly elemMatch: Maybe<FaqEntryFilterInput>;
};

type FaqEntryFilterInput = {
  readonly id: Maybe<IDQueryOperatorInput>;
  readonly question: Maybe<StringQueryOperatorInput>;
  readonly answerHtml: Maybe<StringQueryOperatorInput>;
};

type FaqConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FaqEdge>;
  readonly nodes: ReadonlyArray<Faq>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<FaqGroupConnection>;
};


type FaqConnection_distinctArgs = {
  field: FaqFieldsEnum;
};


type FaqConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FaqFieldsEnum;
};

type FaqEdge = {
  readonly next: Maybe<Faq>;
  readonly node: Faq;
  readonly previous: Maybe<Faq>;
};

type FaqFieldsEnum =
  | 'entries'
  | 'entries.id'
  | 'entries.question'
  | 'entries.answerHtml'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type FaqGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<FaqEdge>;
  readonly nodes: ReadonlyArray<Faq>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type FaqFilterInput = {
  readonly entries: Maybe<FaqEntryFilterListInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type FaqSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<FaqFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteNavigationConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteNavigationEdge>;
  readonly nodes: ReadonlyArray<SiteNavigation>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteNavigationGroupConnection>;
};


type SiteNavigationConnection_distinctArgs = {
  field: SiteNavigationFieldsEnum;
};


type SiteNavigationConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteNavigationFieldsEnum;
};

type SiteNavigationEdge = {
  readonly next: Maybe<SiteNavigation>;
  readonly node: SiteNavigation;
  readonly previous: Maybe<SiteNavigation>;
};

type SiteNavigationFieldsEnum =
  | 'headerEntries'
  | 'headerEntries.href'
  | 'headerEntries.displayName'
  | 'headerEntries.category'
  | 'footerEntries'
  | 'footerEntries.href'
  | 'footerEntries.displayName'
  | 'footerEntries.category'
  | 'socialProfiles'
  | 'socialProfiles.service'
  | 'socialProfiles.url'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type SiteNavigationGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteNavigationEdge>;
  readonly nodes: ReadonlyArray<SiteNavigation>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteNavigationSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteNavigationFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type GreenhouseJobCustomFieldMetadataFilterListInput = {
  readonly elemMatch: Maybe<GreenhouseJobCustomFieldMetadataFilterInput>;
};

type GreenhouseJobCustomFieldMetadataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<GreenhouseJobCustomFieldTypeQueryOperatorInput>;
  readonly value: Maybe<StringQueryOperatorInput>;
};

type GreenhouseJobCustomFieldTypeQueryOperatorInput = {
  readonly eq: Maybe<GreenhouseJobCustomFieldType>;
  readonly ne: Maybe<GreenhouseJobCustomFieldType>;
  readonly in: Maybe<ReadonlyArray<Maybe<GreenhouseJobCustomFieldType>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<GreenhouseJobCustomFieldType>>>;
};

type JobPostFilterListInput = {
  readonly elemMatch: Maybe<JobPostFilterInput>;
};

type GreenhouseJobConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GreenhouseJobEdge>;
  readonly nodes: ReadonlyArray<GreenhouseJob>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<GreenhouseJobGroupConnection>;
};


type GreenhouseJobConnection_distinctArgs = {
  field: GreenhouseJobFieldsEnum;
};


type GreenhouseJobConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GreenhouseJobFieldsEnum;
};

type GreenhouseJobEdge = {
  readonly next: Maybe<GreenhouseJob>;
  readonly node: GreenhouseJob;
  readonly previous: Maybe<GreenhouseJob>;
};

type GreenhouseJobFieldsEnum =
  | 'ghId'
  | 'title'
  | 'boardUrl'
  | 'content'
  | 'updatedAt'
  | 'metadata'
  | 'metadata.id'
  | 'metadata.name'
  | 'metadata.type'
  | 'metadata.value'
  | 'childrenJobPost'
  | 'childrenJobPost.title'
  | 'childrenJobPost.boardUrl'
  | 'childrenJobPost.content'
  | 'childrenJobPost.content.title'
  | 'childrenJobPost.content.level'
  | 'childrenJobPost.content.rawContent'
  | 'childrenJobPost.rawContent'
  | 'childrenJobPost.employmentType'
  | 'childrenJobPost.alternativeCivilianService'
  | 'childrenJobPost.priorExperience'
  | 'childrenJobPost.chapter'
  | 'childrenJobPost.keywords'
  | 'childrenJobPost.gatsbyPath'
  | 'childrenJobPost.id'
  | 'childrenJobPost.parent.id'
  | 'childrenJobPost.parent.parent.id'
  | 'childrenJobPost.parent.parent.children'
  | 'childrenJobPost.parent.children'
  | 'childrenJobPost.parent.children.id'
  | 'childrenJobPost.parent.children.children'
  | 'childrenJobPost.parent.internal.content'
  | 'childrenJobPost.parent.internal.contentDigest'
  | 'childrenJobPost.parent.internal.description'
  | 'childrenJobPost.parent.internal.fieldOwners'
  | 'childrenJobPost.parent.internal.ignoreType'
  | 'childrenJobPost.parent.internal.mediaType'
  | 'childrenJobPost.parent.internal.owner'
  | 'childrenJobPost.parent.internal.type'
  | 'childrenJobPost.children'
  | 'childrenJobPost.children.id'
  | 'childrenJobPost.children.parent.id'
  | 'childrenJobPost.children.parent.children'
  | 'childrenJobPost.children.children'
  | 'childrenJobPost.children.children.id'
  | 'childrenJobPost.children.children.children'
  | 'childrenJobPost.children.internal.content'
  | 'childrenJobPost.children.internal.contentDigest'
  | 'childrenJobPost.children.internal.description'
  | 'childrenJobPost.children.internal.fieldOwners'
  | 'childrenJobPost.children.internal.ignoreType'
  | 'childrenJobPost.children.internal.mediaType'
  | 'childrenJobPost.children.internal.owner'
  | 'childrenJobPost.children.internal.type'
  | 'childrenJobPost.internal.content'
  | 'childrenJobPost.internal.contentDigest'
  | 'childrenJobPost.internal.description'
  | 'childrenJobPost.internal.fieldOwners'
  | 'childrenJobPost.internal.ignoreType'
  | 'childrenJobPost.internal.mediaType'
  | 'childrenJobPost.internal.owner'
  | 'childrenJobPost.internal.type'
  | 'childJobPost.title'
  | 'childJobPost.boardUrl'
  | 'childJobPost.content'
  | 'childJobPost.content.title'
  | 'childJobPost.content.level'
  | 'childJobPost.content.rawContent'
  | 'childJobPost.rawContent'
  | 'childJobPost.employmentType'
  | 'childJobPost.alternativeCivilianService'
  | 'childJobPost.priorExperience'
  | 'childJobPost.chapter'
  | 'childJobPost.keywords'
  | 'childJobPost.gatsbyPath'
  | 'childJobPost.id'
  | 'childJobPost.parent.id'
  | 'childJobPost.parent.parent.id'
  | 'childJobPost.parent.parent.children'
  | 'childJobPost.parent.children'
  | 'childJobPost.parent.children.id'
  | 'childJobPost.parent.children.children'
  | 'childJobPost.parent.internal.content'
  | 'childJobPost.parent.internal.contentDigest'
  | 'childJobPost.parent.internal.description'
  | 'childJobPost.parent.internal.fieldOwners'
  | 'childJobPost.parent.internal.ignoreType'
  | 'childJobPost.parent.internal.mediaType'
  | 'childJobPost.parent.internal.owner'
  | 'childJobPost.parent.internal.type'
  | 'childJobPost.children'
  | 'childJobPost.children.id'
  | 'childJobPost.children.parent.id'
  | 'childJobPost.children.parent.children'
  | 'childJobPost.children.children'
  | 'childJobPost.children.children.id'
  | 'childJobPost.children.children.children'
  | 'childJobPost.children.internal.content'
  | 'childJobPost.children.internal.contentDigest'
  | 'childJobPost.children.internal.description'
  | 'childJobPost.children.internal.fieldOwners'
  | 'childJobPost.children.internal.ignoreType'
  | 'childJobPost.children.internal.mediaType'
  | 'childJobPost.children.internal.owner'
  | 'childJobPost.children.internal.type'
  | 'childJobPost.internal.content'
  | 'childJobPost.internal.contentDigest'
  | 'childJobPost.internal.description'
  | 'childJobPost.internal.fieldOwners'
  | 'childJobPost.internal.ignoreType'
  | 'childJobPost.internal.mediaType'
  | 'childJobPost.internal.owner'
  | 'childJobPost.internal.type'
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type';

type GreenhouseJobGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GreenhouseJobEdge>;
  readonly nodes: ReadonlyArray<GreenhouseJob>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type GreenhouseJobFilterInput = {
  readonly ghId: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly boardUrl: Maybe<StringQueryOperatorInput>;
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly metadata: Maybe<GreenhouseJobCustomFieldMetadataFilterListInput>;
  readonly childrenJobPost: Maybe<JobPostFilterListInput>;
  readonly childJobPost: Maybe<JobPostFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type GreenhouseJobSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<GreenhouseJobFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'buildTime';

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteBuildMetadataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly buildTime: Maybe<DateQueryOperatorInput>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'id'
  | 'parent.id'
  | 'parent.parent.id'
  | 'parent.parent.parent.id'
  | 'parent.parent.parent.children'
  | 'parent.parent.children'
  | 'parent.parent.children.id'
  | 'parent.parent.children.children'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.children'
  | 'parent.children.id'
  | 'parent.children.parent.id'
  | 'parent.children.parent.children'
  | 'parent.children.children'
  | 'parent.children.children.id'
  | 'parent.children.children.children'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'children'
  | 'children.id'
  | 'children.parent.id'
  | 'children.parent.parent.id'
  | 'children.parent.parent.children'
  | 'children.parent.children'
  | 'children.parent.children.id'
  | 'children.parent.children.children'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.children'
  | 'children.children.id'
  | 'children.children.parent.id'
  | 'children.children.parent.children'
  | 'children.children.children'
  | 'children.children.children.id'
  | 'children.children.children.children'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions.base64Width'
  | 'pluginOptions.stripMetadata'
  | 'pluginOptions.defaultQuality'
  | 'pluginOptions.failOnError'
  | 'pluginOptions.root'
  | 'pluginOptions.aliases._'
  | 'pluginOptions.outputPath'
  | 'pluginOptions.emitSchema.src___generated___gatsby_introspection_json'
  | 'pluginOptions.emitPluginDocuments.src___generated___gatsby_plugin_documents_graphql'
  | 'pluginOptions.repositoryName'
  | 'pluginOptions.accessToken'
  | 'pluginOptions.uid'
  | 'pluginOptions.baseUrl'
  | 'pluginOptions.boardToken'
  | 'pluginOptions.includeContent'
  | 'pluginOptions.path'
  | 'pluginOptions.pathCheck'
  | 'pluginOptions.allExtensions'
  | 'pluginOptions.isTSX'
  | 'pluginOptions.jsxPragma'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson.name'
  | 'packageJson.description'
  | 'packageJson.version'
  | 'packageJson.main'
  | 'packageJson.license'
  | 'packageJson.dependencies'
  | 'packageJson.dependencies.name'
  | 'packageJson.dependencies.version'
  | 'packageJson.devDependencies'
  | 'packageJson.devDependencies.name'
  | 'packageJson.devDependencies.version'
  | 'packageJson.peerDependencies'
  | 'packageJson.peerDependencies.name'
  | 'packageJson.peerDependencies.version'
  | 'packageJson.keywords';

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type FaqPageQueryVariables = Exact<{ [key: string]: never; }>;


type FaqPageQuery = { readonly faq: Maybe<FaqAccordion_faqFragment> };

type IndexPageQueryVariables = Exact<{ [key: string]: never; }>;


type IndexPageQuery = { readonly __typename: 'Query' };

type JobsPageQueryVariables = Exact<{ [key: string]: never; }>;


type JobsPageQuery = { readonly allJobPost: JobPostingList_jobPostsFragment };

type JobPostPageQueryVariables = Exact<{
  id: Scalars['String'];
}>;


type JobPostPageQuery = { readonly jobPost: Maybe<(
    Pick<JobPost, 'id' | 'title' | 'employmentType'>
    & { applyPath: JobPost['gatsbyPath'] }
    & { readonly content: ReadonlyArray<(
      { readonly __typename: 'JobPostContentUnorderedListSection' }
      & JobPostContentUnorderedListSection_contentFragment
    ) | (
      { readonly __typename: 'JobPostContentOrderedListSection' }
      & JobPostContentOrderedListSection_contentFragment
    ) | (
      { readonly __typename: 'JobPostContentParagraphSection' }
      & JobPostContentParagraphSection_contentFragment
    )> }
  )> };

type JobApplicationPageQueryVariables = Exact<{
  id: Scalars['String'];
}>;


type JobApplicationPageQuery = { readonly jobPost: Maybe<Pick<JobPost, 'title'>>, readonly privacyPolicy: Maybe<(
    Pick<PrismicTermsAndConditions, 'id'>
    & { readonly data: Maybe<{ readonly content: Maybe<Pick<PrismicStructuredTextType, 'html'>> }> }
  )>, readonly sensitiveInfoPolicy: Maybe<(
    Pick<PrismicTermsAndConditions, 'id'>
    & { readonly data: Maybe<{ readonly content: Maybe<Pick<PrismicStructuredTextType, 'html'>> }> }
  )> };

type FaqAccordion_faqFragment = { readonly entries: ReadonlyArray<FaqAccordionItem_entryFragment> };

type JobPostContentOrderedListSection_contentFragment = Pick<JobPostContentOrderedListSection, 'title' | 'items'>;

type JobPostContentParagraphSection_contentFragment = Pick<JobPostContentParagraphSection, 'title' | 'paragraph'>;

type FaqAccordionItem_entryFragment = Pick<FaqEntry, 'id' | 'question' | 'answerHtml'>;

type Footer_navigationFragment = { readonly footerEntries: ReadonlyArray<(
    { readonly __typename: 'SiteNavigationEntryInternal' }
    & Pick<SiteNavigationEntryInternal, 'pathname' | 'href' | 'displayName'>
  ) | (
    { readonly __typename: 'SiteNavigationEntryExternal' }
    & Pick<SiteNavigationEntryExternal, 'url' | 'href' | 'displayName'>
  )>, readonly socialProfiles: ReadonlyArray<SocialServiceProfile_profileFragment> };

type JobPostContentUnorderedListSection_contentFragment = Pick<JobPostContentUnorderedListSection, 'title' | 'items'>;

type JobPostingListItem_jobPostFragment = Pick<JobPost, 'id' | 'title' | 'chapter' | 'employmentType' | 'priorExperience'>;

type NavigationMenu_navigationFragment = { readonly headerEntries: ReadonlyArray<(
    { readonly __typename: 'SiteNavigationEntryInternal' }
    & Pick<SiteNavigationEntryInternal, 'pathname' | 'href' | 'displayName'>
  ) | (
    { readonly __typename: 'SiteNavigationEntryExternal' }
    & Pick<SiteNavigationEntryExternal, 'url' | 'href' | 'displayName'>
  )> };

type Header_navigationFragment = NavigationMenu_navigationFragment;

type JobPostingList_jobPostsFragment = { readonly nodes: ReadonlyArray<(
    Pick<JobPost, 'id'>
    & { pagePath: JobPost['gatsbyPath'] }
    & JobPostingListItem_jobPostFragment
  )> };

type SocialServiceProfile_profileFragment = Pick<SocialProfileEntry, 'service' | 'url'>;

type GatsbyPrismicImageFixedFragment = Pick<PrismicImageFixedType, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyPrismicImageFixed_noBase64Fragment = Pick<PrismicImageFixedType, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyPrismicImageFixed_withWebpFragment = Pick<PrismicImageFixedType, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyPrismicImageFixed_withWebp_noBase64Fragment = Pick<PrismicImageFixedType, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyPrismicImageFluidFragment = Pick<PrismicImageFluidType, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyPrismicImageFluid_noBase64Fragment = Pick<PrismicImageFluidType, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyPrismicImageFluid_withWebpFragment = Pick<PrismicImageFluidType, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyPrismicImageFluid_withWebp_noBase64Fragment = Pick<PrismicImageFluidType, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_withWebp_tracedSVGFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFixed_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

type GatsbyImageSharpFixed_withWebp_noBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

type GatsbyImageSharpFluid_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_tracedSVGFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type GatsbyImageSharpFluid_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

type GatsbyImageSharpFluid_withWebp_noBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

type LayoutStaticQueryVariables = Exact<{ [key: string]: never; }>;


type LayoutStaticQuery = { readonly siteNavigation: Maybe<(
    Header_navigationFragment
    & Footer_navigationFragment
  )> };

}