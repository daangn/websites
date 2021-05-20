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
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly url: Maybe<Scalars['String']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL: Maybe<Scalars['String']>;
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
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
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
  readonly siteMetadata: SiteMetadata;
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
  readonly DEV_SSR: Maybe<Scalars['Boolean']>;
};

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
};

type SiteFunction = Node & {
  readonly apiRoute: Scalars['String'];
  readonly originalFilePath: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
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
};

type SitePageContext = {
  readonly id: Maybe<Scalars['String']>;
  readonly uid: Maybe<Scalars['String']>;
  readonly _xparams: Maybe<SitePageContext_xparams>;
};

type SitePageContext_xparams = {
  readonly uid: Maybe<Scalars['String']>;
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

type PrismicMbtiTestQuestionBodyIePrimaryType = {
  readonly question: Maybe<Scalars['String']>;
  readonly answer_i: Maybe<PrismicStructuredTextType>;
  readonly answer_e: Maybe<PrismicStructuredTextType>;
};

type PrismicMbtiTestQuestionBodyIe = PrismicSliceType & Node & {
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
  readonly primary: Maybe<PrismicMbtiTestQuestionBodyIePrimaryType>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type PrismicSliceType = {
  /** The slice type API ID. */
  readonly slice_type: Scalars['String'];
  /** The slice label. */
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicMbtiTestQuestionBodyNsPrimaryType = {
  readonly question: Maybe<Scalars['String']>;
  readonly answer_n: Maybe<PrismicStructuredTextType>;
  readonly answer_s: Maybe<PrismicStructuredTextType>;
};

type PrismicMbtiTestQuestionBodyNs = PrismicSliceType & Node & {
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
  readonly primary: Maybe<PrismicMbtiTestQuestionBodyNsPrimaryType>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type PrismicMbtiTestQuestionBodyFtPrimaryType = {
  readonly question: Maybe<Scalars['String']>;
  readonly answer_f: Maybe<PrismicStructuredTextType>;
  readonly answer_t: Maybe<PrismicStructuredTextType>;
};

type PrismicMbtiTestQuestionBodyFt = PrismicSliceType & Node & {
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
  readonly primary: Maybe<PrismicMbtiTestQuestionBodyFtPrimaryType>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type PrismicMbtiTestQuestionBodyPjPrimaryType = {
  readonly question: Maybe<Scalars['String']>;
  readonly answer_p: Maybe<PrismicStructuredTextType>;
  readonly answer_j: Maybe<PrismicStructuredTextType>;
};

type PrismicMbtiTestQuestionBodyPj = PrismicSliceType & Node & {
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
  readonly primary: Maybe<PrismicMbtiTestQuestionBodyPjPrimaryType>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type PrismicMbtiTestQuestionBodySlicesType = PrismicMbtiTestQuestionBodyIe | PrismicMbtiTestQuestionBodyNs | PrismicMbtiTestQuestionBodyFt | PrismicMbtiTestQuestionBodyPj;

type PrismicMbtiTestQuestionDataType = {
  readonly body: ReadonlyArray<PrismicMbtiTestQuestionBodySlicesType>;
};

type PrismicMbtiTestQuestion = PrismicDocument & Node & {
  readonly data: Maybe<PrismicMbtiTestQuestionDataType>;
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
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type PrismicMbtiTestQuestion_first_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type PrismicMbtiTestQuestion_last_publication_dateArgs = {
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

type PrismicMbtiTestResultCommentsGroupType = {
  readonly text: Maybe<Scalars['String']>;
};

type PrismicMbtiTestResultTagsGroupType = {
  readonly tag_name: Maybe<Scalars['String']>;
};

type PrismicMbtiTestResultRemarksGroupType = {
  readonly remark_name: Scalars['String'];
  readonly remark_description: Maybe<PrismicStructuredTextType>;
};

type PrismicMbtiTestResultRelationsGroupType = {
  readonly relation_type: Maybe<Scalars['String']>;
  readonly relation_color: Maybe<Scalars['String']>;
  readonly relation_entry: Maybe<PrismicLinkType>;
};

type PrismicMbtiTestResultDataType = {
  readonly summary: Maybe<Scalars['String']>;
  readonly og_description: Maybe<Scalars['String']>;
  readonly opengraph_image: Maybe<PrismicImageType>;
  readonly comments: Maybe<ReadonlyArray<Maybe<PrismicMbtiTestResultCommentsGroupType>>>;
  readonly thumbnail: PrismicImageType;
  readonly avatar: Maybe<PrismicImageType>;
  readonly tags: Maybe<ReadonlyArray<Maybe<PrismicMbtiTestResultTagsGroupType>>>;
  readonly remarks: Maybe<ReadonlyArray<Maybe<PrismicMbtiTestResultRemarksGroupType>>>;
  readonly relations: ReadonlyArray<PrismicMbtiTestResultRelationsGroupType>;
};

type PrismicMbtiTestResult = PrismicDocument & Node & {
  readonly data: Maybe<PrismicMbtiTestResultDataType>;
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


type PrismicMbtiTestResult_first_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type PrismicMbtiTestResult_last_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type PrismicMbtiIntroDataType = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly opengraph_image: Maybe<PrismicImageType>;
};

type PrismicMbtiIntro = PrismicDocument & Node & {
  readonly data: Maybe<PrismicMbtiIntroDataType>;
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
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type PrismicMbtiIntro_first_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type PrismicMbtiIntro_last_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type PrismicAllDocumentTypes = PrismicMbtiTestQuestion | PrismicMbtiTestResult | PrismicMbtiIntro;


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
  readonly width: Scalars['Int'];
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

type SiteMetadata = {
  readonly siteUrl: Scalars['String'];
  readonly siteName: Scalars['String'];
  readonly shortName: Maybe<Scalars['String']>;
};

type PrismicFaq = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly uid: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
  readonly href: Maybe<Scalars['String']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly first_publication_date: Maybe<Scalars['Date']>;
  readonly last_publication_date: Maybe<Scalars['Date']>;
  readonly slugs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly lang: Maybe<Scalars['String']>;
  readonly data: Maybe<PrismicFaqData>;
  readonly prismicId: Maybe<Scalars['String']>;
  readonly dataString: Maybe<Scalars['String']>;
  readonly dataRaw: Maybe<PrismicFaqDataRaw>;
  readonly _previewable: Maybe<Scalars['String']>;
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

type PrismicFaqData = {
  readonly entries: Maybe<ReadonlyArray<Maybe<PrismicFaqDataEntries>>>;
};

type PrismicFaqDataEntries = {
  readonly question: Maybe<Scalars['String']>;
  readonly answer: Maybe<ReadonlyArray<Maybe<PrismicFaqDataEntriesAnswer>>>;
};

type PrismicFaqDataEntriesAnswer = {
  readonly type: Maybe<Scalars['String']>;
  readonly text: Maybe<Scalars['String']>;
  readonly spans: Maybe<ReadonlyArray<Maybe<PrismicFaqDataEntriesAnswerSpans>>>;
};

type PrismicFaqDataEntriesAnswerSpans = {
  readonly start: Maybe<Scalars['Int']>;
  readonly end: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
  readonly data: Maybe<PrismicFaqDataEntriesAnswerSpansData>;
};

type PrismicFaqDataEntriesAnswerSpansData = {
  readonly link_type: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

type PrismicFaqDataRaw = {
  readonly entries: Maybe<ReadonlyArray<Maybe<PrismicFaqDataRawEntries>>>;
};

type PrismicFaqDataRawEntries = {
  readonly question: Maybe<Scalars['String']>;
  readonly answer: Maybe<ReadonlyArray<Maybe<PrismicFaqDataRawEntriesAnswer>>>;
};

type PrismicFaqDataRawEntriesAnswer = {
  readonly type: Maybe<Scalars['String']>;
  readonly text: Maybe<Scalars['String']>;
  readonly spans: Maybe<ReadonlyArray<Maybe<PrismicFaqDataRawEntriesAnswerSpans>>>;
};

type PrismicFaqDataRawEntriesAnswerSpans = {
  readonly start: Maybe<Scalars['Int']>;
  readonly end: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
  readonly data: Maybe<PrismicFaqDataRawEntriesAnswerSpansData>;
};

type PrismicFaqDataRawEntriesAnswerSpansData = {
  readonly link_type: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

type PrismicSiteNavigation = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly uid: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
  readonly href: Maybe<Scalars['String']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly first_publication_date: Maybe<Scalars['Date']>;
  readonly last_publication_date: Maybe<Scalars['Date']>;
  readonly slugs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly lang: Maybe<Scalars['String']>;
  readonly data: Maybe<PrismicSiteNavigationData>;
  readonly prismicId: Maybe<Scalars['String']>;
  readonly dataString: Maybe<Scalars['String']>;
  readonly dataRaw: Maybe<PrismicSiteNavigationDataRaw>;
  readonly _previewable: Maybe<Scalars['String']>;
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

type PrismicSiteNavigationData = {
  readonly canonical_link: Maybe<PrismicSiteNavigationDataCanonical_link>;
  readonly header_entries: Maybe<ReadonlyArray<Maybe<PrismicSiteNavigationDataHeader_entries>>>;
  readonly footer_entries: Maybe<ReadonlyArray<Maybe<PrismicSiteNavigationDataFooter_entries>>>;
  readonly social_entries: Maybe<ReadonlyArray<Maybe<PrismicSiteNavigationDataSocial_entries>>>;
};

type PrismicSiteNavigationDataCanonical_link = {
  readonly link_type: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

type PrismicSiteNavigationDataHeader_entries = {
  readonly display_name: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicSiteNavigationDataHeader_entriesLink>;
};

type PrismicSiteNavigationDataHeader_entriesLink = {
  readonly link_type: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

type PrismicSiteNavigationDataFooter_entries = {
  readonly display_name: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicSiteNavigationDataFooter_entriesLink>;
};

type PrismicSiteNavigationDataFooter_entriesLink = {
  readonly link_type: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

type PrismicSiteNavigationDataSocial_entries = {
  readonly social_type: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicSiteNavigationDataSocial_entriesLink>;
};

type PrismicSiteNavigationDataSocial_entriesLink = {
  readonly link_type: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

type PrismicSiteNavigationDataRaw = {
  readonly canonical_link: Maybe<PrismicSiteNavigationDataRawCanonical_link>;
  readonly header_entries: Maybe<ReadonlyArray<Maybe<PrismicSiteNavigationDataRawHeader_entries>>>;
  readonly footer_entries: Maybe<ReadonlyArray<Maybe<PrismicSiteNavigationDataRawFooter_entries>>>;
  readonly social_entries: Maybe<ReadonlyArray<Maybe<PrismicSiteNavigationDataRawSocial_entries>>>;
};

type PrismicSiteNavigationDataRawCanonical_link = {
  readonly link_type: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

type PrismicSiteNavigationDataRawHeader_entries = {
  readonly display_name: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicSiteNavigationDataRawHeader_entriesLink>;
};

type PrismicSiteNavigationDataRawHeader_entriesLink = {
  readonly link_type: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

type PrismicSiteNavigationDataRawFooter_entries = {
  readonly display_name: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicSiteNavigationDataRawFooter_entriesLink>;
};

type PrismicSiteNavigationDataRawFooter_entriesLink = {
  readonly link_type: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

type PrismicSiteNavigationDataRawSocial_entries = {
  readonly social_type: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicSiteNavigationDataRawSocial_entriesLink>;
};

type PrismicSiteNavigationDataRawSocial_entriesLink = {
  readonly link_type: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

type PrismicTermsAndConditions = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly uid: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
  readonly href: Maybe<Scalars['String']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly first_publication_date: Maybe<Scalars['Date']>;
  readonly last_publication_date: Maybe<Scalars['Date']>;
  readonly slugs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly lang: Maybe<Scalars['String']>;
  readonly data: Maybe<PrismicTermsAndConditionsData>;
  readonly prismicId: Maybe<Scalars['String']>;
  readonly dataString: Maybe<Scalars['String']>;
  readonly dataRaw: Maybe<PrismicTermsAndConditionsDataRaw>;
  readonly _previewable: Maybe<Scalars['String']>;
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

type PrismicTermsAndConditionsData = {
  readonly description: Maybe<Scalars['String']>;
  readonly revision_date: Maybe<Scalars['Date']>;
  readonly content: Maybe<ReadonlyArray<Maybe<PrismicTermsAndConditionsDataContent>>>;
};


type PrismicTermsAndConditionsData_revision_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type PrismicTermsAndConditionsDataContent = {
  readonly type: Maybe<Scalars['String']>;
  readonly text: Maybe<Scalars['String']>;
  readonly spans: Maybe<ReadonlyArray<Maybe<PrismicTermsAndConditionsDataContentSpans>>>;
};

type PrismicTermsAndConditionsDataContentSpans = {
  readonly start: Maybe<Scalars['Int']>;
  readonly end: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
  readonly data: Maybe<PrismicTermsAndConditionsDataContentSpansData>;
};

type PrismicTermsAndConditionsDataContentSpansData = {
  readonly link_type: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

type PrismicTermsAndConditionsDataRaw = {
  readonly description: Maybe<Scalars['String']>;
  readonly revision_date: Maybe<Scalars['Date']>;
  readonly content: Maybe<ReadonlyArray<Maybe<PrismicTermsAndConditionsDataRawContent>>>;
};


type PrismicTermsAndConditionsDataRaw_revision_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type PrismicTermsAndConditionsDataRawContent = {
  readonly type: Maybe<Scalars['String']>;
  readonly text: Maybe<Scalars['String']>;
  readonly spans: Maybe<ReadonlyArray<Maybe<PrismicTermsAndConditionsDataRawContentSpans>>>;
};

type PrismicTermsAndConditionsDataRawContentSpans = {
  readonly start: Maybe<Scalars['Int']>;
  readonly end: Maybe<Scalars['Int']>;
  readonly type: Maybe<Scalars['String']>;
  readonly data: Maybe<PrismicTermsAndConditionsDataRawContentSpansData>;
};

type PrismicTermsAndConditionsDataRawContentSpansData = {
  readonly link_type: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
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
  readonly name: Maybe<Scalars['String']>;
  readonly path: Maybe<Scalars['String']>;
  readonly id: Maybe<Scalars['String']>;
  readonly defaultDataLayer: Maybe<SitePluginPluginOptionsDefaultDataLayer>;
  readonly includeInDevelopment: Maybe<Scalars['Boolean']>;
  readonly routeChangeEventName: Maybe<Scalars['String']>;
  readonly base64Width: Maybe<Scalars['Int']>;
  readonly stripMetadata: Maybe<Scalars['Boolean']>;
  readonly defaultQuality: Maybe<Scalars['Int']>;
  readonly failOnError: Maybe<Scalars['Boolean']>;
  readonly sourceMap: Maybe<Scalars['Boolean']>;
  readonly autoLabel: Maybe<Scalars['String']>;
  readonly labelFormat: Maybe<Scalars['String']>;
  readonly cssPropOptimization: Maybe<Scalars['Boolean']>;
  readonly root: Maybe<Scalars['String']>;
  readonly aliases: Maybe<SitePluginPluginOptionsAliases>;
  readonly outputPath: Maybe<Scalars['String']>;
  readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchema>;
  readonly emitPluginDocuments: Maybe<SitePluginPluginOptionsEmitPluginDocuments>;
  readonly short_name: Maybe<Scalars['String']>;
  readonly start_url: Maybe<Scalars['String']>;
  readonly background_color: Maybe<Scalars['String']>;
  readonly theme_color: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly legacy: Maybe<Scalars['Boolean']>;
  readonly theme_color_in_head: Maybe<Scalars['Boolean']>;
  readonly cache_busting_mode: Maybe<Scalars['String']>;
  readonly crossOrigin: Maybe<Scalars['String']>;
  readonly include_favicon: Maybe<Scalars['Boolean']>;
  readonly cacheDigest: Maybe<Scalars['String']>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
  readonly allExtensions: Maybe<Scalars['Boolean']>;
  readonly isTSX: Maybe<Scalars['Boolean']>;
  readonly jsxPragma: Maybe<Scalars['String']>;
  readonly repositoryName: Maybe<Scalars['String']>;
  readonly prismicToolbar: Maybe<Scalars['Boolean']>;
  readonly schemas: Maybe<SitePluginPluginOptionsSchemas>;
};

type SitePluginPluginOptionsDefaultDataLayer = {
  readonly type: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsAliases = {
  readonly _src: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsEmitSchema = {
  readonly src___generated___gatsby_introspection_json: Maybe<Scalars['Boolean']>;
  readonly src___generated___gatsby_schema_graphql: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsEmitPluginDocuments = {
  readonly src___generated___gatsby_plugin_documents_graphql: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsSchemas = {
  readonly mbti_test_question: Maybe<SitePluginPluginOptionsSchemasMbti_test_question>;
  readonly mbti_test_result: Maybe<SitePluginPluginOptionsSchemasMbti_test_result>;
  readonly mbti_intro: Maybe<SitePluginPluginOptionsSchemasMbti_intro>;
};

type SitePluginPluginOptionsSchemasMbti_test_question = {
  readonly Main: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMain>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMain = {
  readonly body: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBody>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBody = {
  readonly type: Maybe<Scalars['String']>;
  readonly fieldset: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfig>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfig = {
  readonly choices: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoices>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoices = {
  readonly ie: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesIe>;
  readonly ns: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesNs>;
  readonly ft: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesFt>;
  readonly pj: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesPj>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesIe = {
  readonly type: Maybe<Scalars['String']>;
  readonly fieldset: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesIeNon_repeat>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesIeNon_repeat = {
  readonly question: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesIeNon_repeatQuestion>;
  readonly answer_i: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesIeNon_repeatAnswer_i>;
  readonly answer_e: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesIeNon_repeatAnswer_e>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesIeNon_repeatQuestion = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesIeNon_repeatQuestionConfig>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesIeNon_repeatQuestionConfig = {
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesIeNon_repeatAnswer_i = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesIeNon_repeatAnswer_iConfig>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesIeNon_repeatAnswer_iConfig = {
  readonly single: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesIeNon_repeatAnswer_e = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesIeNon_repeatAnswer_eConfig>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesIeNon_repeatAnswer_eConfig = {
  readonly single: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesNs = {
  readonly type: Maybe<Scalars['String']>;
  readonly fieldset: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesNsNon_repeat>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesNsNon_repeat = {
  readonly question: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesNsNon_repeatQuestion>;
  readonly answer_n: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesNsNon_repeatAnswer_n>;
  readonly answer_s: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesNsNon_repeatAnswer_s>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesNsNon_repeatQuestion = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesNsNon_repeatQuestionConfig>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesNsNon_repeatQuestionConfig = {
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesNsNon_repeatAnswer_n = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesNsNon_repeatAnswer_nConfig>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesNsNon_repeatAnswer_nConfig = {
  readonly single: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesNsNon_repeatAnswer_s = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesNsNon_repeatAnswer_sConfig>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesNsNon_repeatAnswer_sConfig = {
  readonly single: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesFt = {
  readonly type: Maybe<Scalars['String']>;
  readonly fieldset: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesFtNon_repeat>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesFtNon_repeat = {
  readonly question: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesFtNon_repeatQuestion>;
  readonly answer_f: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesFtNon_repeatAnswer_f>;
  readonly answer_t: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesFtNon_repeatAnswer_t>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesFtNon_repeatQuestion = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesFtNon_repeatQuestionConfig>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesFtNon_repeatQuestionConfig = {
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesFtNon_repeatAnswer_f = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesFtNon_repeatAnswer_fConfig>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesFtNon_repeatAnswer_fConfig = {
  readonly single: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesFtNon_repeatAnswer_t = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesFtNon_repeatAnswer_tConfig>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesFtNon_repeatAnswer_tConfig = {
  readonly single: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesPj = {
  readonly type: Maybe<Scalars['String']>;
  readonly fieldset: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesPjNon_repeat>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesPjNon_repeat = {
  readonly question: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesPjNon_repeatQuestion>;
  readonly answer_p: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesPjNon_repeatAnswer_p>;
  readonly answer_j: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesPjNon_repeatAnswer_j>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesPjNon_repeatQuestion = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesPjNon_repeatQuestionConfig>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesPjNon_repeatQuestionConfig = {
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesPjNon_repeatAnswer_p = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesPjNon_repeatAnswer_pConfig>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesPjNon_repeatAnswer_pConfig = {
  readonly single: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesPjNon_repeatAnswer_j = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesPjNon_repeatAnswer_jConfig>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesPjNon_repeatAnswer_jConfig = {
  readonly single: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMbti_test_result = {
  readonly Main: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMain>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMain = {
  readonly uid: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainUid>;
  readonly summary: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainSummary>;
  readonly og_description: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainOg_description>;
  readonly opengraph_image: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainOpengraph_image>;
  readonly comments: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainComments>;
  readonly thumbnail: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainThumbnail>;
  readonly avatar: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainAvatar>;
  readonly tags: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainTags>;
  readonly remarks: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainRemarks>;
  readonly relations: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainRelations>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainUid = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainUidConfig>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainUidConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainSummary = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainSummaryConfig>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainSummaryConfig = {
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainOg_description = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainOg_descriptionConfig>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainOg_descriptionConfig = {
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainOpengraph_image = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainOpengraph_imageConfig>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainOpengraph_imageConfig = {
  readonly constraint: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainOpengraph_imageConfigConstraint>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainOpengraph_imageConfigConstraint = {
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainComments = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainCommentsConfig>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainCommentsConfig = {
  readonly fields: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainCommentsConfigFields>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainCommentsConfigFields = {
  readonly text: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainCommentsConfigFieldsText>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainCommentsConfigFieldsText = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainCommentsConfigFieldsTextConfig>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainCommentsConfigFieldsTextConfig = {
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainThumbnail = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainThumbnailConfig>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainThumbnailConfig = {
  readonly constraint: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainThumbnailConfigConstraint>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainThumbnailConfigConstraint = {
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainAvatar = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainAvatarConfig>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainAvatarConfig = {
  readonly constraint: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainAvatarConfigConstraint>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainAvatarConfigConstraint = {
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainTags = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainTagsConfig>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainTagsConfig = {
  readonly fields: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainTagsConfigFields>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainTagsConfigFields = {
  readonly tag_name: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainTagsConfigFieldsTag_name>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainTagsConfigFieldsTag_name = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainTagsConfigFieldsTag_nameConfig>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainTagsConfigFieldsTag_nameConfig = {
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainRemarks = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainRemarksConfig>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainRemarksConfig = {
  readonly fields: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainRemarksConfigFields>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainRemarksConfigFields = {
  readonly remark_name: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainRemarksConfigFieldsRemark_name>;
  readonly remark_description: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainRemarksConfigFieldsRemark_description>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainRemarksConfigFieldsRemark_name = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainRemarksConfigFieldsRemark_nameConfig>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainRemarksConfigFieldsRemark_nameConfig = {
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainRemarksConfigFieldsRemark_description = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainRemarksConfigFieldsRemark_descriptionConfig>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainRemarksConfigFieldsRemark_descriptionConfig = {
  readonly single: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainRelations = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainRelationsConfig>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainRelationsConfig = {
  readonly fields: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainRelationsConfigFields>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainRelationsConfigFields = {
  readonly relation_type: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainRelationsConfigFieldsRelation_type>;
  readonly relation_color: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainRelationsConfigFieldsRelation_color>;
  readonly relation_entry: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainRelationsConfigFieldsRelation_entry>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainRelationsConfigFieldsRelation_type = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainRelationsConfigFieldsRelation_typeConfig>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainRelationsConfigFieldsRelation_typeConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainRelationsConfigFieldsRelation_color = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainRelationsConfigFieldsRelation_colorConfig>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainRelationsConfigFieldsRelation_colorConfig = {
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainRelationsConfigFieldsRelation_entry = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainRelationsConfigFieldsRelation_entryConfig>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainRelationsConfigFieldsRelation_entryConfig = {
  readonly select: Maybe<Scalars['String']>;
  readonly customtypes: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMbti_intro = {
  readonly Main: Maybe<SitePluginPluginOptionsSchemasMbti_introMain>;
};

type SitePluginPluginOptionsSchemasMbti_introMain = {
  readonly title: Maybe<SitePluginPluginOptionsSchemasMbti_introMainTitle>;
  readonly description: Maybe<SitePluginPluginOptionsSchemasMbti_introMainDescription>;
  readonly opengraph_image: Maybe<SitePluginPluginOptionsSchemasMbti_introMainOpengraph_image>;
};

type SitePluginPluginOptionsSchemasMbti_introMainTitle = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_introMainTitleConfig>;
};

type SitePluginPluginOptionsSchemasMbti_introMainTitleConfig = {
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMbti_introMainDescription = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_introMainDescriptionConfig>;
};

type SitePluginPluginOptionsSchemasMbti_introMainDescriptionConfig = {
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMbti_introMainOpengraph_image = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_introMainOpengraph_imageConfig>;
};

type SitePluginPluginOptionsSchemasMbti_introMainOpengraph_imageConfig = {
  readonly constraint: Maybe<SitePluginPluginOptionsSchemasMbti_introMainOpengraph_imageConfigConstraint>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMbti_introMainOpengraph_imageConfigConstraint = {
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
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
  readonly siteFunction: Maybe<SiteFunction>;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly prismicMbtiTestQuestionBodyIe: Maybe<PrismicMbtiTestQuestionBodyIe>;
  readonly allPrismicMbtiTestQuestionBodyIe: PrismicMbtiTestQuestionBodyIeConnection;
  readonly prismicMbtiTestQuestionBodyNs: Maybe<PrismicMbtiTestQuestionBodyNs>;
  readonly allPrismicMbtiTestQuestionBodyNs: PrismicMbtiTestQuestionBodyNsConnection;
  readonly prismicMbtiTestQuestionBodyFt: Maybe<PrismicMbtiTestQuestionBodyFt>;
  readonly allPrismicMbtiTestQuestionBodyFt: PrismicMbtiTestQuestionBodyFtConnection;
  readonly prismicMbtiTestQuestionBodyPj: Maybe<PrismicMbtiTestQuestionBodyPj>;
  readonly allPrismicMbtiTestQuestionBodyPj: PrismicMbtiTestQuestionBodyPjConnection;
  readonly prismicMbtiTestQuestion: Maybe<PrismicMbtiTestQuestion>;
  readonly allPrismicMbtiTestQuestion: PrismicMbtiTestQuestionConnection;
  readonly prismicMbtiTestResult: Maybe<PrismicMbtiTestResult>;
  readonly allPrismicMbtiTestResult: PrismicMbtiTestResultConnection;
  readonly prismicMbtiIntro: Maybe<PrismicMbtiIntro>;
  readonly allPrismicMbtiIntro: PrismicMbtiIntroConnection;
  readonly prismicFaq: Maybe<PrismicFaq>;
  readonly allPrismicFaq: PrismicFaqConnection;
  readonly prismicSiteNavigation: Maybe<PrismicSiteNavigation>;
  readonly allPrismicSiteNavigation: PrismicSiteNavigationConnection;
  readonly prismicTermsAndConditions: Maybe<PrismicTermsAndConditions>;
  readonly allPrismicTermsAndConditions: PrismicTermsAndConditionsConnection;
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
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  publicURL: Maybe<StringQueryOperatorInput>;
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
  blksize: Maybe<IntQueryOperatorInput>;
  blocks: Maybe<IntQueryOperatorInput>;
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
  siteMetadata: Maybe<SiteMetadataFilterInput>;
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


type Query_siteFunctionArgs = {
  apiRoute: Maybe<StringQueryOperatorInput>;
  originalFilePath: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  matchPath: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteFunctionArgs = {
  filter: Maybe<SiteFunctionFilterInput>;
  sort: Maybe<SiteFunctionSortInput>;
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


type Query_prismicMbtiTestQuestionBodyIeArgs = {
  slice_type: Maybe<StringQueryOperatorInput>;
  slice_label: Maybe<StringQueryOperatorInput>;
  primary: Maybe<PrismicMbtiTestQuestionBodyIePrimaryTypeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allPrismicMbtiTestQuestionBodyIeArgs = {
  filter: Maybe<PrismicMbtiTestQuestionBodyIeFilterInput>;
  sort: Maybe<PrismicMbtiTestQuestionBodyIeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicMbtiTestQuestionBodyNsArgs = {
  slice_type: Maybe<StringQueryOperatorInput>;
  slice_label: Maybe<StringQueryOperatorInput>;
  primary: Maybe<PrismicMbtiTestQuestionBodyNsPrimaryTypeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allPrismicMbtiTestQuestionBodyNsArgs = {
  filter: Maybe<PrismicMbtiTestQuestionBodyNsFilterInput>;
  sort: Maybe<PrismicMbtiTestQuestionBodyNsSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicMbtiTestQuestionBodyFtArgs = {
  slice_type: Maybe<StringQueryOperatorInput>;
  slice_label: Maybe<StringQueryOperatorInput>;
  primary: Maybe<PrismicMbtiTestQuestionBodyFtPrimaryTypeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allPrismicMbtiTestQuestionBodyFtArgs = {
  filter: Maybe<PrismicMbtiTestQuestionBodyFtFilterInput>;
  sort: Maybe<PrismicMbtiTestQuestionBodyFtSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicMbtiTestQuestionBodyPjArgs = {
  slice_type: Maybe<StringQueryOperatorInput>;
  slice_label: Maybe<StringQueryOperatorInput>;
  primary: Maybe<PrismicMbtiTestQuestionBodyPjPrimaryTypeFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allPrismicMbtiTestQuestionBodyPjArgs = {
  filter: Maybe<PrismicMbtiTestQuestionBodyPjFilterInput>;
  sort: Maybe<PrismicMbtiTestQuestionBodyPjSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicMbtiTestQuestionArgs = {
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
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allPrismicMbtiTestQuestionArgs = {
  filter: Maybe<PrismicMbtiTestQuestionFilterInput>;
  sort: Maybe<PrismicMbtiTestQuestionSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicMbtiTestResultArgs = {
  data: Maybe<PrismicMbtiTestResultDataTypeFilterInput>;
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


type Query_allPrismicMbtiTestResultArgs = {
  filter: Maybe<PrismicMbtiTestResultFilterInput>;
  sort: Maybe<PrismicMbtiTestResultSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicMbtiIntroArgs = {
  data: Maybe<PrismicMbtiIntroDataTypeFilterInput>;
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
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allPrismicMbtiIntroArgs = {
  filter: Maybe<PrismicMbtiIntroFilterInput>;
  sort: Maybe<PrismicMbtiIntroSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicFaqArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  uid: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  href: Maybe<StringQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  first_publication_date: Maybe<DateQueryOperatorInput>;
  last_publication_date: Maybe<DateQueryOperatorInput>;
  slugs: Maybe<StringQueryOperatorInput>;
  lang: Maybe<StringQueryOperatorInput>;
  data: Maybe<PrismicFaqDataFilterInput>;
  prismicId: Maybe<StringQueryOperatorInput>;
  dataString: Maybe<StringQueryOperatorInput>;
  dataRaw: Maybe<PrismicFaqDataRawFilterInput>;
  _previewable: Maybe<StringQueryOperatorInput>;
};


type Query_allPrismicFaqArgs = {
  filter: Maybe<PrismicFaqFilterInput>;
  sort: Maybe<PrismicFaqSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicSiteNavigationArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  uid: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  href: Maybe<StringQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  first_publication_date: Maybe<DateQueryOperatorInput>;
  last_publication_date: Maybe<DateQueryOperatorInput>;
  slugs: Maybe<StringQueryOperatorInput>;
  lang: Maybe<StringQueryOperatorInput>;
  data: Maybe<PrismicSiteNavigationDataFilterInput>;
  prismicId: Maybe<StringQueryOperatorInput>;
  dataString: Maybe<StringQueryOperatorInput>;
  dataRaw: Maybe<PrismicSiteNavigationDataRawFilterInput>;
  _previewable: Maybe<StringQueryOperatorInput>;
};


type Query_allPrismicSiteNavigationArgs = {
  filter: Maybe<PrismicSiteNavigationFilterInput>;
  sort: Maybe<PrismicSiteNavigationSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicTermsAndConditionsArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  uid: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  href: Maybe<StringQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  first_publication_date: Maybe<DateQueryOperatorInput>;
  last_publication_date: Maybe<DateQueryOperatorInput>;
  slugs: Maybe<StringQueryOperatorInput>;
  lang: Maybe<StringQueryOperatorInput>;
  data: Maybe<PrismicTermsAndConditionsDataFilterInput>;
  prismicId: Maybe<StringQueryOperatorInput>;
  dataString: Maybe<StringQueryOperatorInput>;
  dataRaw: Maybe<PrismicTermsAndConditionsDataRawFilterInput>;
  _previewable: Maybe<StringQueryOperatorInput>;
};


type Query_allPrismicTermsAndConditionsArgs = {
  filter: Maybe<PrismicTermsAndConditionsFilterInput>;
  sort: Maybe<PrismicTermsAndConditionsSortInput>;
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
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileConnection_sumArgs = {
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
  | 'blksize'
  | 'blocks'
  | 'url'
  | 'publicURL'
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
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly publicURL: Maybe<StringQueryOperatorInput>;
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
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_sumArgs = {
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
  | 'blksize'
  | 'blocks'
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
  readonly blksize: Maybe<IntQueryOperatorInput>;
  readonly blocks: Maybe<IntQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type DirectorySortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<DirectoryFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteMetadataFilterInput = {
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
  readonly siteName: Maybe<StringQueryOperatorInput>;
  readonly shortName: Maybe<StringQueryOperatorInput>;
};

type SiteFlagsFilterInput = {
  readonly FAST_DEV: Maybe<BooleanQueryOperatorInput>;
  readonly QUERY_ON_DEMAND: Maybe<BooleanQueryOperatorInput>;
  readonly LAZY_IMAGES: Maybe<BooleanQueryOperatorInput>;
  readonly PARALLEL_SOURCING: Maybe<BooleanQueryOperatorInput>;
  readonly DEV_SSR: Maybe<BooleanQueryOperatorInput>;
};

type SiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_sumArgs = {
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
  | 'siteMetadata.siteUrl'
  | 'siteMetadata.siteName'
  | 'siteMetadata.shortName'
  | 'port'
  | 'host'
  | 'flags.FAST_DEV'
  | 'flags.QUERY_ON_DEMAND'
  | 'flags.LAZY_IMAGES'
  | 'flags.PARALLEL_SOURCING'
  | 'flags.DEV_SSR'
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
  readonly siteMetadata: Maybe<SiteMetadataFilterInput>;
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

type SiteFunctionConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldsEnum =
  | 'apiRoute'
  | 'originalFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
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
  | 'internal.type';

type SiteFunctionGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type SiteFunctionFilterInput = {
  readonly apiRoute: Maybe<StringQueryOperatorInput>;
  readonly originalFilePath: Maybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly absoluteCompiledFilePath: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteFunctionSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteFunctionFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SitePageContextFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly uid: Maybe<StringQueryOperatorInput>;
  readonly _xparams: Maybe<SitePageContext_xparamsFilterInput>;
};

type SitePageContext_xparamsFilterInput = {
  readonly uid: Maybe<StringQueryOperatorInput>;
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
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly defaultDataLayer: Maybe<SitePluginPluginOptionsDefaultDataLayerFilterInput>;
  readonly includeInDevelopment: Maybe<BooleanQueryOperatorInput>;
  readonly routeChangeEventName: Maybe<StringQueryOperatorInput>;
  readonly base64Width: Maybe<IntQueryOperatorInput>;
  readonly stripMetadata: Maybe<BooleanQueryOperatorInput>;
  readonly defaultQuality: Maybe<IntQueryOperatorInput>;
  readonly failOnError: Maybe<BooleanQueryOperatorInput>;
  readonly sourceMap: Maybe<BooleanQueryOperatorInput>;
  readonly autoLabel: Maybe<StringQueryOperatorInput>;
  readonly labelFormat: Maybe<StringQueryOperatorInput>;
  readonly cssPropOptimization: Maybe<BooleanQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly aliases: Maybe<SitePluginPluginOptionsAliasesFilterInput>;
  readonly outputPath: Maybe<StringQueryOperatorInput>;
  readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchemaFilterInput>;
  readonly emitPluginDocuments: Maybe<SitePluginPluginOptionsEmitPluginDocumentsFilterInput>;
  readonly short_name: Maybe<StringQueryOperatorInput>;
  readonly start_url: Maybe<StringQueryOperatorInput>;
  readonly background_color: Maybe<StringQueryOperatorInput>;
  readonly theme_color: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly legacy: Maybe<BooleanQueryOperatorInput>;
  readonly theme_color_in_head: Maybe<BooleanQueryOperatorInput>;
  readonly cache_busting_mode: Maybe<StringQueryOperatorInput>;
  readonly crossOrigin: Maybe<StringQueryOperatorInput>;
  readonly include_favicon: Maybe<BooleanQueryOperatorInput>;
  readonly cacheDigest: Maybe<StringQueryOperatorInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
  readonly allExtensions: Maybe<BooleanQueryOperatorInput>;
  readonly isTSX: Maybe<BooleanQueryOperatorInput>;
  readonly jsxPragma: Maybe<StringQueryOperatorInput>;
  readonly repositoryName: Maybe<StringQueryOperatorInput>;
  readonly prismicToolbar: Maybe<BooleanQueryOperatorInput>;
  readonly schemas: Maybe<SitePluginPluginOptionsSchemasFilterInput>;
};

type SitePluginPluginOptionsDefaultDataLayerFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsAliasesFilterInput = {
  readonly _src: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsEmitSchemaFilterInput = {
  readonly src___generated___gatsby_introspection_json: Maybe<BooleanQueryOperatorInput>;
  readonly src___generated___gatsby_schema_graphql: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsEmitPluginDocumentsFilterInput = {
  readonly src___generated___gatsby_plugin_documents_graphql: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasFilterInput = {
  readonly mbti_test_question: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionFilterInput>;
  readonly mbti_test_result: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultFilterInput>;
  readonly mbti_intro: Maybe<SitePluginPluginOptionsSchemasMbti_introFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionFilterInput = {
  readonly Main: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainFilterInput = {
  readonly body: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly fieldset: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigFilterInput = {
  readonly choices: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesFilterInput = {
  readonly ie: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesIeFilterInput>;
  readonly ns: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesNsFilterInput>;
  readonly ft: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesFtFilterInput>;
  readonly pj: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesPjFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesIeFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly fieldset: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesIeNon_repeatFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesIeNon_repeatFilterInput = {
  readonly question: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesIeNon_repeatQuestionFilterInput>;
  readonly answer_i: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesIeNon_repeatAnswer_iFilterInput>;
  readonly answer_e: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesIeNon_repeatAnswer_eFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesIeNon_repeatQuestionFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesIeNon_repeatQuestionConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesIeNon_repeatQuestionConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesIeNon_repeatAnswer_iFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesIeNon_repeatAnswer_iConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesIeNon_repeatAnswer_iConfigFilterInput = {
  readonly single: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesIeNon_repeatAnswer_eFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesIeNon_repeatAnswer_eConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesIeNon_repeatAnswer_eConfigFilterInput = {
  readonly single: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesNsFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly fieldset: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesNsNon_repeatFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesNsNon_repeatFilterInput = {
  readonly question: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesNsNon_repeatQuestionFilterInput>;
  readonly answer_n: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesNsNon_repeatAnswer_nFilterInput>;
  readonly answer_s: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesNsNon_repeatAnswer_sFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesNsNon_repeatQuestionFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesNsNon_repeatQuestionConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesNsNon_repeatQuestionConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesNsNon_repeatAnswer_nFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesNsNon_repeatAnswer_nConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesNsNon_repeatAnswer_nConfigFilterInput = {
  readonly single: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesNsNon_repeatAnswer_sFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesNsNon_repeatAnswer_sConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesNsNon_repeatAnswer_sConfigFilterInput = {
  readonly single: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesFtFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly fieldset: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesFtNon_repeatFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesFtNon_repeatFilterInput = {
  readonly question: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesFtNon_repeatQuestionFilterInput>;
  readonly answer_f: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesFtNon_repeatAnswer_fFilterInput>;
  readonly answer_t: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesFtNon_repeatAnswer_tFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesFtNon_repeatQuestionFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesFtNon_repeatQuestionConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesFtNon_repeatQuestionConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesFtNon_repeatAnswer_fFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesFtNon_repeatAnswer_fConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesFtNon_repeatAnswer_fConfigFilterInput = {
  readonly single: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesFtNon_repeatAnswer_tFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesFtNon_repeatAnswer_tConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesFtNon_repeatAnswer_tConfigFilterInput = {
  readonly single: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesPjFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly fieldset: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesPjNon_repeatFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesPjNon_repeatFilterInput = {
  readonly question: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesPjNon_repeatQuestionFilterInput>;
  readonly answer_p: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesPjNon_repeatAnswer_pFilterInput>;
  readonly answer_j: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesPjNon_repeatAnswer_jFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesPjNon_repeatQuestionFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesPjNon_repeatQuestionConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesPjNon_repeatQuestionConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesPjNon_repeatAnswer_pFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesPjNon_repeatAnswer_pConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesPjNon_repeatAnswer_pConfigFilterInput = {
  readonly single: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesPjNon_repeatAnswer_jFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesPjNon_repeatAnswer_jConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_questionMainBodyConfigChoicesPjNon_repeatAnswer_jConfigFilterInput = {
  readonly single: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultFilterInput = {
  readonly Main: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainFilterInput = {
  readonly uid: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainUidFilterInput>;
  readonly summary: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainSummaryFilterInput>;
  readonly og_description: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainOg_descriptionFilterInput>;
  readonly opengraph_image: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainOpengraph_imageFilterInput>;
  readonly comments: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainCommentsFilterInput>;
  readonly thumbnail: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainThumbnailFilterInput>;
  readonly avatar: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainAvatarFilterInput>;
  readonly tags: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainTagsFilterInput>;
  readonly remarks: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainRemarksFilterInput>;
  readonly relations: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainRelationsFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainUidFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainUidConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainUidConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainSummaryFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainSummaryConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainSummaryConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainOg_descriptionFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainOg_descriptionConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainOg_descriptionConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainOpengraph_imageFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainOpengraph_imageConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainOpengraph_imageConfigFilterInput = {
  readonly constraint: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainOpengraph_imageConfigConstraintFilterInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainOpengraph_imageConfigConstraintFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainCommentsFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainCommentsConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainCommentsConfigFilterInput = {
  readonly fields: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainCommentsConfigFieldsFilterInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainCommentsConfigFieldsFilterInput = {
  readonly text: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainCommentsConfigFieldsTextFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainCommentsConfigFieldsTextFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainCommentsConfigFieldsTextConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainCommentsConfigFieldsTextConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainThumbnailFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainThumbnailConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainThumbnailConfigFilterInput = {
  readonly constraint: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainThumbnailConfigConstraintFilterInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainThumbnailConfigConstraintFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainAvatarFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainAvatarConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainAvatarConfigFilterInput = {
  readonly constraint: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainAvatarConfigConstraintFilterInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainAvatarConfigConstraintFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainTagsFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainTagsConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainTagsConfigFilterInput = {
  readonly fields: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainTagsConfigFieldsFilterInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainTagsConfigFieldsFilterInput = {
  readonly tag_name: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainTagsConfigFieldsTag_nameFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainTagsConfigFieldsTag_nameFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainTagsConfigFieldsTag_nameConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainTagsConfigFieldsTag_nameConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainRemarksFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainRemarksConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainRemarksConfigFilterInput = {
  readonly fields: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainRemarksConfigFieldsFilterInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainRemarksConfigFieldsFilterInput = {
  readonly remark_name: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainRemarksConfigFieldsRemark_nameFilterInput>;
  readonly remark_description: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainRemarksConfigFieldsRemark_descriptionFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainRemarksConfigFieldsRemark_nameFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainRemarksConfigFieldsRemark_nameConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainRemarksConfigFieldsRemark_nameConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainRemarksConfigFieldsRemark_descriptionFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainRemarksConfigFieldsRemark_descriptionConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainRemarksConfigFieldsRemark_descriptionConfigFilterInput = {
  readonly single: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainRelationsFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainRelationsConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainRelationsConfigFilterInput = {
  readonly fields: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainRelationsConfigFieldsFilterInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainRelationsConfigFieldsFilterInput = {
  readonly relation_type: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainRelationsConfigFieldsRelation_typeFilterInput>;
  readonly relation_color: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainRelationsConfigFieldsRelation_colorFilterInput>;
  readonly relation_entry: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainRelationsConfigFieldsRelation_entryFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainRelationsConfigFieldsRelation_typeFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainRelationsConfigFieldsRelation_typeConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainRelationsConfigFieldsRelation_typeConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainRelationsConfigFieldsRelation_colorFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainRelationsConfigFieldsRelation_colorConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainRelationsConfigFieldsRelation_colorConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainRelationsConfigFieldsRelation_entryFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_test_resultMainRelationsConfigFieldsRelation_entryConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_test_resultMainRelationsConfigFieldsRelation_entryConfigFilterInput = {
  readonly select: Maybe<StringQueryOperatorInput>;
  readonly customtypes: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_introFilterInput = {
  readonly Main: Maybe<SitePluginPluginOptionsSchemasMbti_introMainFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_introMainFilterInput = {
  readonly title: Maybe<SitePluginPluginOptionsSchemasMbti_introMainTitleFilterInput>;
  readonly description: Maybe<SitePluginPluginOptionsSchemasMbti_introMainDescriptionFilterInput>;
  readonly opengraph_image: Maybe<SitePluginPluginOptionsSchemasMbti_introMainOpengraph_imageFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_introMainTitleFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_introMainTitleConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_introMainTitleConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_introMainDescriptionFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_introMainDescriptionConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_introMainDescriptionConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_introMainOpengraph_imageFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMbti_introMainOpengraph_imageConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMbti_introMainOpengraph_imageConfigFilterInput = {
  readonly constraint: Maybe<SitePluginPluginOptionsSchemasMbti_introMainOpengraph_imageConfigConstraintFilterInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMbti_introMainOpengraph_imageConfigConstraintFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
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
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_sumArgs = {
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
  | 'context.uid'
  | 'context._xparams.uid'
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
  | 'pluginCreator.pluginOptions.name'
  | 'pluginCreator.pluginOptions.path'
  | 'pluginCreator.pluginOptions.id'
  | 'pluginCreator.pluginOptions.defaultDataLayer.type'
  | 'pluginCreator.pluginOptions.includeInDevelopment'
  | 'pluginCreator.pluginOptions.routeChangeEventName'
  | 'pluginCreator.pluginOptions.base64Width'
  | 'pluginCreator.pluginOptions.stripMetadata'
  | 'pluginCreator.pluginOptions.defaultQuality'
  | 'pluginCreator.pluginOptions.failOnError'
  | 'pluginCreator.pluginOptions.sourceMap'
  | 'pluginCreator.pluginOptions.autoLabel'
  | 'pluginCreator.pluginOptions.labelFormat'
  | 'pluginCreator.pluginOptions.cssPropOptimization'
  | 'pluginCreator.pluginOptions.root'
  | 'pluginCreator.pluginOptions.aliases._src'
  | 'pluginCreator.pluginOptions.outputPath'
  | 'pluginCreator.pluginOptions.emitSchema.src___generated___gatsby_introspection_json'
  | 'pluginCreator.pluginOptions.emitSchema.src___generated___gatsby_schema_graphql'
  | 'pluginCreator.pluginOptions.emitPluginDocuments.src___generated___gatsby_plugin_documents_graphql'
  | 'pluginCreator.pluginOptions.short_name'
  | 'pluginCreator.pluginOptions.start_url'
  | 'pluginCreator.pluginOptions.background_color'
  | 'pluginCreator.pluginOptions.theme_color'
  | 'pluginCreator.pluginOptions.display'
  | 'pluginCreator.pluginOptions.icon'
  | 'pluginCreator.pluginOptions.legacy'
  | 'pluginCreator.pluginOptions.theme_color_in_head'
  | 'pluginCreator.pluginOptions.cache_busting_mode'
  | 'pluginCreator.pluginOptions.crossOrigin'
  | 'pluginCreator.pluginOptions.include_favicon'
  | 'pluginCreator.pluginOptions.cacheDigest'
  | 'pluginCreator.pluginOptions.pathCheck'
  | 'pluginCreator.pluginOptions.allExtensions'
  | 'pluginCreator.pluginOptions.isTSX'
  | 'pluginCreator.pluginOptions.jsxPragma'
  | 'pluginCreator.pluginOptions.repositoryName'
  | 'pluginCreator.pluginOptions.prismicToolbar'
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
  | 'pluginCreatorId';

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
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_sumArgs = {
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

type PrismicMbtiTestQuestionBodyIePrimaryTypeFilterInput = {
  readonly question: Maybe<StringQueryOperatorInput>;
  readonly answer_i: Maybe<PrismicStructuredTextTypeFilterInput>;
  readonly answer_e: Maybe<PrismicStructuredTextTypeFilterInput>;
};

type PrismicStructuredTextTypeFilterInput = {
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly text: Maybe<StringQueryOperatorInput>;
  readonly raw: Maybe<JSONQueryOperatorInput>;
};

type PrismicMbtiTestQuestionBodyIeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicMbtiTestQuestionBodyIeEdge>;
  readonly nodes: ReadonlyArray<PrismicMbtiTestQuestionBodyIe>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicMbtiTestQuestionBodyIeGroupConnection>;
};


type PrismicMbtiTestQuestionBodyIeConnection_distinctArgs = {
  field: PrismicMbtiTestQuestionBodyIeFieldsEnum;
};


type PrismicMbtiTestQuestionBodyIeConnection_maxArgs = {
  field: PrismicMbtiTestQuestionBodyIeFieldsEnum;
};


type PrismicMbtiTestQuestionBodyIeConnection_minArgs = {
  field: PrismicMbtiTestQuestionBodyIeFieldsEnum;
};


type PrismicMbtiTestQuestionBodyIeConnection_sumArgs = {
  field: PrismicMbtiTestQuestionBodyIeFieldsEnum;
};


type PrismicMbtiTestQuestionBodyIeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicMbtiTestQuestionBodyIeFieldsEnum;
};

type PrismicMbtiTestQuestionBodyIeEdge = {
  readonly next: Maybe<PrismicMbtiTestQuestionBodyIe>;
  readonly node: PrismicMbtiTestQuestionBodyIe;
  readonly previous: Maybe<PrismicMbtiTestQuestionBodyIe>;
};

type PrismicMbtiTestQuestionBodyIeFieldsEnum =
  | 'slice_type'
  | 'slice_label'
  | 'primary.question'
  | 'primary.answer_i.html'
  | 'primary.answer_i.text'
  | 'primary.answer_i.raw'
  | 'primary.answer_e.html'
  | 'primary.answer_e.text'
  | 'primary.answer_e.raw'
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

type PrismicMbtiTestQuestionBodyIeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicMbtiTestQuestionBodyIeEdge>;
  readonly nodes: ReadonlyArray<PrismicMbtiTestQuestionBodyIe>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type PrismicMbtiTestQuestionBodyIeFilterInput = {
  readonly slice_type: Maybe<StringQueryOperatorInput>;
  readonly slice_label: Maybe<StringQueryOperatorInput>;
  readonly primary: Maybe<PrismicMbtiTestQuestionBodyIePrimaryTypeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicMbtiTestQuestionBodyIeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicMbtiTestQuestionBodyIeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicMbtiTestQuestionBodyNsPrimaryTypeFilterInput = {
  readonly question: Maybe<StringQueryOperatorInput>;
  readonly answer_n: Maybe<PrismicStructuredTextTypeFilterInput>;
  readonly answer_s: Maybe<PrismicStructuredTextTypeFilterInput>;
};

type PrismicMbtiTestQuestionBodyNsConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicMbtiTestQuestionBodyNsEdge>;
  readonly nodes: ReadonlyArray<PrismicMbtiTestQuestionBodyNs>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicMbtiTestQuestionBodyNsGroupConnection>;
};


type PrismicMbtiTestQuestionBodyNsConnection_distinctArgs = {
  field: PrismicMbtiTestQuestionBodyNsFieldsEnum;
};


type PrismicMbtiTestQuestionBodyNsConnection_maxArgs = {
  field: PrismicMbtiTestQuestionBodyNsFieldsEnum;
};


type PrismicMbtiTestQuestionBodyNsConnection_minArgs = {
  field: PrismicMbtiTestQuestionBodyNsFieldsEnum;
};


type PrismicMbtiTestQuestionBodyNsConnection_sumArgs = {
  field: PrismicMbtiTestQuestionBodyNsFieldsEnum;
};


type PrismicMbtiTestQuestionBodyNsConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicMbtiTestQuestionBodyNsFieldsEnum;
};

type PrismicMbtiTestQuestionBodyNsEdge = {
  readonly next: Maybe<PrismicMbtiTestQuestionBodyNs>;
  readonly node: PrismicMbtiTestQuestionBodyNs;
  readonly previous: Maybe<PrismicMbtiTestQuestionBodyNs>;
};

type PrismicMbtiTestQuestionBodyNsFieldsEnum =
  | 'slice_type'
  | 'slice_label'
  | 'primary.question'
  | 'primary.answer_n.html'
  | 'primary.answer_n.text'
  | 'primary.answer_n.raw'
  | 'primary.answer_s.html'
  | 'primary.answer_s.text'
  | 'primary.answer_s.raw'
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

type PrismicMbtiTestQuestionBodyNsGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicMbtiTestQuestionBodyNsEdge>;
  readonly nodes: ReadonlyArray<PrismicMbtiTestQuestionBodyNs>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type PrismicMbtiTestQuestionBodyNsFilterInput = {
  readonly slice_type: Maybe<StringQueryOperatorInput>;
  readonly slice_label: Maybe<StringQueryOperatorInput>;
  readonly primary: Maybe<PrismicMbtiTestQuestionBodyNsPrimaryTypeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicMbtiTestQuestionBodyNsSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicMbtiTestQuestionBodyNsFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicMbtiTestQuestionBodyFtPrimaryTypeFilterInput = {
  readonly question: Maybe<StringQueryOperatorInput>;
  readonly answer_f: Maybe<PrismicStructuredTextTypeFilterInput>;
  readonly answer_t: Maybe<PrismicStructuredTextTypeFilterInput>;
};

type PrismicMbtiTestQuestionBodyFtConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicMbtiTestQuestionBodyFtEdge>;
  readonly nodes: ReadonlyArray<PrismicMbtiTestQuestionBodyFt>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicMbtiTestQuestionBodyFtGroupConnection>;
};


type PrismicMbtiTestQuestionBodyFtConnection_distinctArgs = {
  field: PrismicMbtiTestQuestionBodyFtFieldsEnum;
};


type PrismicMbtiTestQuestionBodyFtConnection_maxArgs = {
  field: PrismicMbtiTestQuestionBodyFtFieldsEnum;
};


type PrismicMbtiTestQuestionBodyFtConnection_minArgs = {
  field: PrismicMbtiTestQuestionBodyFtFieldsEnum;
};


type PrismicMbtiTestQuestionBodyFtConnection_sumArgs = {
  field: PrismicMbtiTestQuestionBodyFtFieldsEnum;
};


type PrismicMbtiTestQuestionBodyFtConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicMbtiTestQuestionBodyFtFieldsEnum;
};

type PrismicMbtiTestQuestionBodyFtEdge = {
  readonly next: Maybe<PrismicMbtiTestQuestionBodyFt>;
  readonly node: PrismicMbtiTestQuestionBodyFt;
  readonly previous: Maybe<PrismicMbtiTestQuestionBodyFt>;
};

type PrismicMbtiTestQuestionBodyFtFieldsEnum =
  | 'slice_type'
  | 'slice_label'
  | 'primary.question'
  | 'primary.answer_f.html'
  | 'primary.answer_f.text'
  | 'primary.answer_f.raw'
  | 'primary.answer_t.html'
  | 'primary.answer_t.text'
  | 'primary.answer_t.raw'
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

type PrismicMbtiTestQuestionBodyFtGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicMbtiTestQuestionBodyFtEdge>;
  readonly nodes: ReadonlyArray<PrismicMbtiTestQuestionBodyFt>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type PrismicMbtiTestQuestionBodyFtFilterInput = {
  readonly slice_type: Maybe<StringQueryOperatorInput>;
  readonly slice_label: Maybe<StringQueryOperatorInput>;
  readonly primary: Maybe<PrismicMbtiTestQuestionBodyFtPrimaryTypeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicMbtiTestQuestionBodyFtSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicMbtiTestQuestionBodyFtFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicMbtiTestQuestionBodyPjPrimaryTypeFilterInput = {
  readonly question: Maybe<StringQueryOperatorInput>;
  readonly answer_p: Maybe<PrismicStructuredTextTypeFilterInput>;
  readonly answer_j: Maybe<PrismicStructuredTextTypeFilterInput>;
};

type PrismicMbtiTestQuestionBodyPjConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicMbtiTestQuestionBodyPjEdge>;
  readonly nodes: ReadonlyArray<PrismicMbtiTestQuestionBodyPj>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicMbtiTestQuestionBodyPjGroupConnection>;
};


type PrismicMbtiTestQuestionBodyPjConnection_distinctArgs = {
  field: PrismicMbtiTestQuestionBodyPjFieldsEnum;
};


type PrismicMbtiTestQuestionBodyPjConnection_maxArgs = {
  field: PrismicMbtiTestQuestionBodyPjFieldsEnum;
};


type PrismicMbtiTestQuestionBodyPjConnection_minArgs = {
  field: PrismicMbtiTestQuestionBodyPjFieldsEnum;
};


type PrismicMbtiTestQuestionBodyPjConnection_sumArgs = {
  field: PrismicMbtiTestQuestionBodyPjFieldsEnum;
};


type PrismicMbtiTestQuestionBodyPjConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicMbtiTestQuestionBodyPjFieldsEnum;
};

type PrismicMbtiTestQuestionBodyPjEdge = {
  readonly next: Maybe<PrismicMbtiTestQuestionBodyPj>;
  readonly node: PrismicMbtiTestQuestionBodyPj;
  readonly previous: Maybe<PrismicMbtiTestQuestionBodyPj>;
};

type PrismicMbtiTestQuestionBodyPjFieldsEnum =
  | 'slice_type'
  | 'slice_label'
  | 'primary.question'
  | 'primary.answer_p.html'
  | 'primary.answer_p.text'
  | 'primary.answer_p.raw'
  | 'primary.answer_j.html'
  | 'primary.answer_j.text'
  | 'primary.answer_j.raw'
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

type PrismicMbtiTestQuestionBodyPjGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicMbtiTestQuestionBodyPjEdge>;
  readonly nodes: ReadonlyArray<PrismicMbtiTestQuestionBodyPj>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type PrismicMbtiTestQuestionBodyPjFilterInput = {
  readonly slice_type: Maybe<StringQueryOperatorInput>;
  readonly slice_label: Maybe<StringQueryOperatorInput>;
  readonly primary: Maybe<PrismicMbtiTestQuestionBodyPjPrimaryTypeFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicMbtiTestQuestionBodyPjSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicMbtiTestQuestionBodyPjFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
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

type PrismicMbtiTestQuestionConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicMbtiTestQuestionEdge>;
  readonly nodes: ReadonlyArray<PrismicMbtiTestQuestion>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicMbtiTestQuestionGroupConnection>;
};


type PrismicMbtiTestQuestionConnection_distinctArgs = {
  field: PrismicMbtiTestQuestionFieldsEnum;
};


type PrismicMbtiTestQuestionConnection_maxArgs = {
  field: PrismicMbtiTestQuestionFieldsEnum;
};


type PrismicMbtiTestQuestionConnection_minArgs = {
  field: PrismicMbtiTestQuestionFieldsEnum;
};


type PrismicMbtiTestQuestionConnection_sumArgs = {
  field: PrismicMbtiTestQuestionFieldsEnum;
};


type PrismicMbtiTestQuestionConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicMbtiTestQuestionFieldsEnum;
};

type PrismicMbtiTestQuestionEdge = {
  readonly next: Maybe<PrismicMbtiTestQuestion>;
  readonly node: PrismicMbtiTestQuestion;
  readonly previous: Maybe<PrismicMbtiTestQuestion>;
};

type PrismicMbtiTestQuestionFieldsEnum =
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

type PrismicMbtiTestQuestionGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicMbtiTestQuestionEdge>;
  readonly nodes: ReadonlyArray<PrismicMbtiTestQuestion>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type PrismicMbtiTestQuestionFilterInput = {
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
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicMbtiTestQuestionSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicMbtiTestQuestionFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicMbtiTestResultDataTypeFilterInput = {
  readonly summary: Maybe<StringQueryOperatorInput>;
  readonly og_description: Maybe<StringQueryOperatorInput>;
  readonly opengraph_image: Maybe<PrismicImageTypeFilterInput>;
  readonly comments: Maybe<PrismicMbtiTestResultCommentsGroupTypeFilterListInput>;
  readonly thumbnail: Maybe<PrismicImageTypeFilterInput>;
  readonly avatar: Maybe<PrismicImageTypeFilterInput>;
  readonly tags: Maybe<PrismicMbtiTestResultTagsGroupTypeFilterListInput>;
  readonly remarks: Maybe<PrismicMbtiTestResultRemarksGroupTypeFilterListInput>;
  readonly relations: Maybe<PrismicMbtiTestResultRelationsGroupTypeFilterListInput>;
};

type PrismicImageTypeFilterInput = {
  readonly alt: Maybe<StringQueryOperatorInput>;
  readonly copyright: Maybe<StringQueryOperatorInput>;
  readonly dimensions: Maybe<PrismicImageDimensionsTypeFilterInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly fixed: Maybe<PrismicImageFixedTypeFilterInput>;
  readonly fluid: Maybe<PrismicImageFluidTypeFilterInput>;
  readonly localFile: Maybe<FileFilterInput>;
  readonly thumbnails: Maybe<PrismicImageThumbnailsTypeQueryOperatorInput>;
};

type PrismicImageDimensionsTypeFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type PrismicImageFixedTypeFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type PrismicImageFluidTypeFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
};

type PrismicImageThumbnailsTypeQueryOperatorInput = {
  readonly eq: Maybe<Scalars['PrismicImageThumbnailsType']>;
  readonly ne: Maybe<Scalars['PrismicImageThumbnailsType']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['PrismicImageThumbnailsType']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['PrismicImageThumbnailsType']>>>;
};

type PrismicMbtiTestResultCommentsGroupTypeFilterListInput = {
  readonly elemMatch: Maybe<PrismicMbtiTestResultCommentsGroupTypeFilterInput>;
};

type PrismicMbtiTestResultCommentsGroupTypeFilterInput = {
  readonly text: Maybe<StringQueryOperatorInput>;
};

type PrismicMbtiTestResultTagsGroupTypeFilterListInput = {
  readonly elemMatch: Maybe<PrismicMbtiTestResultTagsGroupTypeFilterInput>;
};

type PrismicMbtiTestResultTagsGroupTypeFilterInput = {
  readonly tag_name: Maybe<StringQueryOperatorInput>;
};

type PrismicMbtiTestResultRemarksGroupTypeFilterListInput = {
  readonly elemMatch: Maybe<PrismicMbtiTestResultRemarksGroupTypeFilterInput>;
};

type PrismicMbtiTestResultRemarksGroupTypeFilterInput = {
  readonly remark_name: Maybe<StringQueryOperatorInput>;
  readonly remark_description: Maybe<PrismicStructuredTextTypeFilterInput>;
};

type PrismicMbtiTestResultRelationsGroupTypeFilterListInput = {
  readonly elemMatch: Maybe<PrismicMbtiTestResultRelationsGroupTypeFilterInput>;
};

type PrismicMbtiTestResultRelationsGroupTypeFilterInput = {
  readonly relation_type: Maybe<StringQueryOperatorInput>;
  readonly relation_color: Maybe<StringQueryOperatorInput>;
  readonly relation_entry: Maybe<PrismicLinkTypeFilterInput>;
};

type PrismicMbtiTestResultConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicMbtiTestResultEdge>;
  readonly nodes: ReadonlyArray<PrismicMbtiTestResult>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicMbtiTestResultGroupConnection>;
};


type PrismicMbtiTestResultConnection_distinctArgs = {
  field: PrismicMbtiTestResultFieldsEnum;
};


type PrismicMbtiTestResultConnection_maxArgs = {
  field: PrismicMbtiTestResultFieldsEnum;
};


type PrismicMbtiTestResultConnection_minArgs = {
  field: PrismicMbtiTestResultFieldsEnum;
};


type PrismicMbtiTestResultConnection_sumArgs = {
  field: PrismicMbtiTestResultFieldsEnum;
};


type PrismicMbtiTestResultConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicMbtiTestResultFieldsEnum;
};

type PrismicMbtiTestResultEdge = {
  readonly next: Maybe<PrismicMbtiTestResult>;
  readonly node: PrismicMbtiTestResult;
  readonly previous: Maybe<PrismicMbtiTestResult>;
};

type PrismicMbtiTestResultFieldsEnum =
  | 'data.summary'
  | 'data.og_description'
  | 'data.opengraph_image.alt'
  | 'data.opengraph_image.copyright'
  | 'data.opengraph_image.dimensions.width'
  | 'data.opengraph_image.dimensions.height'
  | 'data.opengraph_image.url'
  | 'data.opengraph_image.fixed.base64'
  | 'data.opengraph_image.fixed.src'
  | 'data.opengraph_image.fixed.srcSet'
  | 'data.opengraph_image.fixed.srcWebp'
  | 'data.opengraph_image.fixed.srcSetWebp'
  | 'data.opengraph_image.fixed.sizes'
  | 'data.opengraph_image.fixed.width'
  | 'data.opengraph_image.fixed.height'
  | 'data.opengraph_image.fluid.base64'
  | 'data.opengraph_image.fluid.src'
  | 'data.opengraph_image.fluid.srcSet'
  | 'data.opengraph_image.fluid.srcWebp'
  | 'data.opengraph_image.fluid.srcSetWebp'
  | 'data.opengraph_image.fluid.sizes'
  | 'data.opengraph_image.fluid.aspectRatio'
  | 'data.opengraph_image.localFile.sourceInstanceName'
  | 'data.opengraph_image.localFile.absolutePath'
  | 'data.opengraph_image.localFile.relativePath'
  | 'data.opengraph_image.localFile.extension'
  | 'data.opengraph_image.localFile.size'
  | 'data.opengraph_image.localFile.prettySize'
  | 'data.opengraph_image.localFile.modifiedTime'
  | 'data.opengraph_image.localFile.accessTime'
  | 'data.opengraph_image.localFile.changeTime'
  | 'data.opengraph_image.localFile.birthTime'
  | 'data.opengraph_image.localFile.root'
  | 'data.opengraph_image.localFile.dir'
  | 'data.opengraph_image.localFile.base'
  | 'data.opengraph_image.localFile.ext'
  | 'data.opengraph_image.localFile.name'
  | 'data.opengraph_image.localFile.relativeDirectory'
  | 'data.opengraph_image.localFile.dev'
  | 'data.opengraph_image.localFile.mode'
  | 'data.opengraph_image.localFile.nlink'
  | 'data.opengraph_image.localFile.uid'
  | 'data.opengraph_image.localFile.gid'
  | 'data.opengraph_image.localFile.rdev'
  | 'data.opengraph_image.localFile.ino'
  | 'data.opengraph_image.localFile.atimeMs'
  | 'data.opengraph_image.localFile.mtimeMs'
  | 'data.opengraph_image.localFile.ctimeMs'
  | 'data.opengraph_image.localFile.atime'
  | 'data.opengraph_image.localFile.mtime'
  | 'data.opengraph_image.localFile.ctime'
  | 'data.opengraph_image.localFile.birthtime'
  | 'data.opengraph_image.localFile.birthtimeMs'
  | 'data.opengraph_image.localFile.blksize'
  | 'data.opengraph_image.localFile.blocks'
  | 'data.opengraph_image.localFile.url'
  | 'data.opengraph_image.localFile.publicURL'
  | 'data.opengraph_image.localFile.childrenImageSharp'
  | 'data.opengraph_image.localFile.id'
  | 'data.opengraph_image.localFile.children'
  | 'data.opengraph_image.thumbnails'
  | 'data.comments'
  | 'data.comments.text'
  | 'data.thumbnail.alt'
  | 'data.thumbnail.copyright'
  | 'data.thumbnail.dimensions.width'
  | 'data.thumbnail.dimensions.height'
  | 'data.thumbnail.url'
  | 'data.thumbnail.fixed.base64'
  | 'data.thumbnail.fixed.src'
  | 'data.thumbnail.fixed.srcSet'
  | 'data.thumbnail.fixed.srcWebp'
  | 'data.thumbnail.fixed.srcSetWebp'
  | 'data.thumbnail.fixed.sizes'
  | 'data.thumbnail.fixed.width'
  | 'data.thumbnail.fixed.height'
  | 'data.thumbnail.fluid.base64'
  | 'data.thumbnail.fluid.src'
  | 'data.thumbnail.fluid.srcSet'
  | 'data.thumbnail.fluid.srcWebp'
  | 'data.thumbnail.fluid.srcSetWebp'
  | 'data.thumbnail.fluid.sizes'
  | 'data.thumbnail.fluid.aspectRatio'
  | 'data.thumbnail.localFile.sourceInstanceName'
  | 'data.thumbnail.localFile.absolutePath'
  | 'data.thumbnail.localFile.relativePath'
  | 'data.thumbnail.localFile.extension'
  | 'data.thumbnail.localFile.size'
  | 'data.thumbnail.localFile.prettySize'
  | 'data.thumbnail.localFile.modifiedTime'
  | 'data.thumbnail.localFile.accessTime'
  | 'data.thumbnail.localFile.changeTime'
  | 'data.thumbnail.localFile.birthTime'
  | 'data.thumbnail.localFile.root'
  | 'data.thumbnail.localFile.dir'
  | 'data.thumbnail.localFile.base'
  | 'data.thumbnail.localFile.ext'
  | 'data.thumbnail.localFile.name'
  | 'data.thumbnail.localFile.relativeDirectory'
  | 'data.thumbnail.localFile.dev'
  | 'data.thumbnail.localFile.mode'
  | 'data.thumbnail.localFile.nlink'
  | 'data.thumbnail.localFile.uid'
  | 'data.thumbnail.localFile.gid'
  | 'data.thumbnail.localFile.rdev'
  | 'data.thumbnail.localFile.ino'
  | 'data.thumbnail.localFile.atimeMs'
  | 'data.thumbnail.localFile.mtimeMs'
  | 'data.thumbnail.localFile.ctimeMs'
  | 'data.thumbnail.localFile.atime'
  | 'data.thumbnail.localFile.mtime'
  | 'data.thumbnail.localFile.ctime'
  | 'data.thumbnail.localFile.birthtime'
  | 'data.thumbnail.localFile.birthtimeMs'
  | 'data.thumbnail.localFile.blksize'
  | 'data.thumbnail.localFile.blocks'
  | 'data.thumbnail.localFile.url'
  | 'data.thumbnail.localFile.publicURL'
  | 'data.thumbnail.localFile.childrenImageSharp'
  | 'data.thumbnail.localFile.id'
  | 'data.thumbnail.localFile.children'
  | 'data.thumbnail.thumbnails'
  | 'data.avatar.alt'
  | 'data.avatar.copyright'
  | 'data.avatar.dimensions.width'
  | 'data.avatar.dimensions.height'
  | 'data.avatar.url'
  | 'data.avatar.fixed.base64'
  | 'data.avatar.fixed.src'
  | 'data.avatar.fixed.srcSet'
  | 'data.avatar.fixed.srcWebp'
  | 'data.avatar.fixed.srcSetWebp'
  | 'data.avatar.fixed.sizes'
  | 'data.avatar.fixed.width'
  | 'data.avatar.fixed.height'
  | 'data.avatar.fluid.base64'
  | 'data.avatar.fluid.src'
  | 'data.avatar.fluid.srcSet'
  | 'data.avatar.fluid.srcWebp'
  | 'data.avatar.fluid.srcSetWebp'
  | 'data.avatar.fluid.sizes'
  | 'data.avatar.fluid.aspectRatio'
  | 'data.avatar.localFile.sourceInstanceName'
  | 'data.avatar.localFile.absolutePath'
  | 'data.avatar.localFile.relativePath'
  | 'data.avatar.localFile.extension'
  | 'data.avatar.localFile.size'
  | 'data.avatar.localFile.prettySize'
  | 'data.avatar.localFile.modifiedTime'
  | 'data.avatar.localFile.accessTime'
  | 'data.avatar.localFile.changeTime'
  | 'data.avatar.localFile.birthTime'
  | 'data.avatar.localFile.root'
  | 'data.avatar.localFile.dir'
  | 'data.avatar.localFile.base'
  | 'data.avatar.localFile.ext'
  | 'data.avatar.localFile.name'
  | 'data.avatar.localFile.relativeDirectory'
  | 'data.avatar.localFile.dev'
  | 'data.avatar.localFile.mode'
  | 'data.avatar.localFile.nlink'
  | 'data.avatar.localFile.uid'
  | 'data.avatar.localFile.gid'
  | 'data.avatar.localFile.rdev'
  | 'data.avatar.localFile.ino'
  | 'data.avatar.localFile.atimeMs'
  | 'data.avatar.localFile.mtimeMs'
  | 'data.avatar.localFile.ctimeMs'
  | 'data.avatar.localFile.atime'
  | 'data.avatar.localFile.mtime'
  | 'data.avatar.localFile.ctime'
  | 'data.avatar.localFile.birthtime'
  | 'data.avatar.localFile.birthtimeMs'
  | 'data.avatar.localFile.blksize'
  | 'data.avatar.localFile.blocks'
  | 'data.avatar.localFile.url'
  | 'data.avatar.localFile.publicURL'
  | 'data.avatar.localFile.childrenImageSharp'
  | 'data.avatar.localFile.id'
  | 'data.avatar.localFile.children'
  | 'data.avatar.thumbnails'
  | 'data.tags'
  | 'data.tags.tag_name'
  | 'data.remarks'
  | 'data.remarks.remark_name'
  | 'data.remarks.remark_description.html'
  | 'data.remarks.remark_description.text'
  | 'data.remarks.remark_description.raw'
  | 'data.relations'
  | 'data.relations.relation_type'
  | 'data.relations.relation_color'
  | 'data.relations.relation_entry.link_type'
  | 'data.relations.relation_entry.isBroken'
  | 'data.relations.relation_entry.url'
  | 'data.relations.relation_entry.target'
  | 'data.relations.relation_entry.size'
  | 'data.relations.relation_entry.id'
  | 'data.relations.relation_entry.type'
  | 'data.relations.relation_entry.tags'
  | 'data.relations.relation_entry.lang'
  | 'data.relations.relation_entry.slug'
  | 'data.relations.relation_entry.uid'
  | 'data.relations.relation_entry.raw'
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

type PrismicMbtiTestResultGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicMbtiTestResultEdge>;
  readonly nodes: ReadonlyArray<PrismicMbtiTestResult>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type PrismicMbtiTestResultFilterInput = {
  readonly data: Maybe<PrismicMbtiTestResultDataTypeFilterInput>;
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

type PrismicMbtiTestResultSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicMbtiTestResultFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicMbtiIntroDataTypeFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly opengraph_image: Maybe<PrismicImageTypeFilterInput>;
};

type PrismicMbtiIntroConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicMbtiIntroEdge>;
  readonly nodes: ReadonlyArray<PrismicMbtiIntro>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicMbtiIntroGroupConnection>;
};


type PrismicMbtiIntroConnection_distinctArgs = {
  field: PrismicMbtiIntroFieldsEnum;
};


type PrismicMbtiIntroConnection_maxArgs = {
  field: PrismicMbtiIntroFieldsEnum;
};


type PrismicMbtiIntroConnection_minArgs = {
  field: PrismicMbtiIntroFieldsEnum;
};


type PrismicMbtiIntroConnection_sumArgs = {
  field: PrismicMbtiIntroFieldsEnum;
};


type PrismicMbtiIntroConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicMbtiIntroFieldsEnum;
};

type PrismicMbtiIntroEdge = {
  readonly next: Maybe<PrismicMbtiIntro>;
  readonly node: PrismicMbtiIntro;
  readonly previous: Maybe<PrismicMbtiIntro>;
};

type PrismicMbtiIntroFieldsEnum =
  | 'data.title'
  | 'data.description'
  | 'data.opengraph_image.alt'
  | 'data.opengraph_image.copyright'
  | 'data.opengraph_image.dimensions.width'
  | 'data.opengraph_image.dimensions.height'
  | 'data.opengraph_image.url'
  | 'data.opengraph_image.fixed.base64'
  | 'data.opengraph_image.fixed.src'
  | 'data.opengraph_image.fixed.srcSet'
  | 'data.opengraph_image.fixed.srcWebp'
  | 'data.opengraph_image.fixed.srcSetWebp'
  | 'data.opengraph_image.fixed.sizes'
  | 'data.opengraph_image.fixed.width'
  | 'data.opengraph_image.fixed.height'
  | 'data.opengraph_image.fluid.base64'
  | 'data.opengraph_image.fluid.src'
  | 'data.opengraph_image.fluid.srcSet'
  | 'data.opengraph_image.fluid.srcWebp'
  | 'data.opengraph_image.fluid.srcSetWebp'
  | 'data.opengraph_image.fluid.sizes'
  | 'data.opengraph_image.fluid.aspectRatio'
  | 'data.opengraph_image.localFile.sourceInstanceName'
  | 'data.opengraph_image.localFile.absolutePath'
  | 'data.opengraph_image.localFile.relativePath'
  | 'data.opengraph_image.localFile.extension'
  | 'data.opengraph_image.localFile.size'
  | 'data.opengraph_image.localFile.prettySize'
  | 'data.opengraph_image.localFile.modifiedTime'
  | 'data.opengraph_image.localFile.accessTime'
  | 'data.opengraph_image.localFile.changeTime'
  | 'data.opengraph_image.localFile.birthTime'
  | 'data.opengraph_image.localFile.root'
  | 'data.opengraph_image.localFile.dir'
  | 'data.opengraph_image.localFile.base'
  | 'data.opengraph_image.localFile.ext'
  | 'data.opengraph_image.localFile.name'
  | 'data.opengraph_image.localFile.relativeDirectory'
  | 'data.opengraph_image.localFile.dev'
  | 'data.opengraph_image.localFile.mode'
  | 'data.opengraph_image.localFile.nlink'
  | 'data.opengraph_image.localFile.uid'
  | 'data.opengraph_image.localFile.gid'
  | 'data.opengraph_image.localFile.rdev'
  | 'data.opengraph_image.localFile.ino'
  | 'data.opengraph_image.localFile.atimeMs'
  | 'data.opengraph_image.localFile.mtimeMs'
  | 'data.opengraph_image.localFile.ctimeMs'
  | 'data.opengraph_image.localFile.atime'
  | 'data.opengraph_image.localFile.mtime'
  | 'data.opengraph_image.localFile.ctime'
  | 'data.opengraph_image.localFile.birthtime'
  | 'data.opengraph_image.localFile.birthtimeMs'
  | 'data.opengraph_image.localFile.blksize'
  | 'data.opengraph_image.localFile.blocks'
  | 'data.opengraph_image.localFile.url'
  | 'data.opengraph_image.localFile.publicURL'
  | 'data.opengraph_image.localFile.childrenImageSharp'
  | 'data.opengraph_image.localFile.id'
  | 'data.opengraph_image.localFile.children'
  | 'data.opengraph_image.thumbnails'
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

type PrismicMbtiIntroGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicMbtiIntroEdge>;
  readonly nodes: ReadonlyArray<PrismicMbtiIntro>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type PrismicMbtiIntroFilterInput = {
  readonly data: Maybe<PrismicMbtiIntroDataTypeFilterInput>;
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
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicMbtiIntroSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicMbtiIntroFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicFaqDataFilterInput = {
  readonly entries: Maybe<PrismicFaqDataEntriesFilterListInput>;
};

type PrismicFaqDataEntriesFilterListInput = {
  readonly elemMatch: Maybe<PrismicFaqDataEntriesFilterInput>;
};

type PrismicFaqDataEntriesFilterInput = {
  readonly question: Maybe<StringQueryOperatorInput>;
  readonly answer: Maybe<PrismicFaqDataEntriesAnswerFilterListInput>;
};

type PrismicFaqDataEntriesAnswerFilterListInput = {
  readonly elemMatch: Maybe<PrismicFaqDataEntriesAnswerFilterInput>;
};

type PrismicFaqDataEntriesAnswerFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly text: Maybe<StringQueryOperatorInput>;
  readonly spans: Maybe<PrismicFaqDataEntriesAnswerSpansFilterListInput>;
};

type PrismicFaqDataEntriesAnswerSpansFilterListInput = {
  readonly elemMatch: Maybe<PrismicFaqDataEntriesAnswerSpansFilterInput>;
};

type PrismicFaqDataEntriesAnswerSpansFilterInput = {
  readonly start: Maybe<IntQueryOperatorInput>;
  readonly end: Maybe<IntQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly data: Maybe<PrismicFaqDataEntriesAnswerSpansDataFilterInput>;
};

type PrismicFaqDataEntriesAnswerSpansDataFilterInput = {
  readonly link_type: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
};

type PrismicFaqDataRawFilterInput = {
  readonly entries: Maybe<PrismicFaqDataRawEntriesFilterListInput>;
};

type PrismicFaqDataRawEntriesFilterListInput = {
  readonly elemMatch: Maybe<PrismicFaqDataRawEntriesFilterInput>;
};

type PrismicFaqDataRawEntriesFilterInput = {
  readonly question: Maybe<StringQueryOperatorInput>;
  readonly answer: Maybe<PrismicFaqDataRawEntriesAnswerFilterListInput>;
};

type PrismicFaqDataRawEntriesAnswerFilterListInput = {
  readonly elemMatch: Maybe<PrismicFaqDataRawEntriesAnswerFilterInput>;
};

type PrismicFaqDataRawEntriesAnswerFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly text: Maybe<StringQueryOperatorInput>;
  readonly spans: Maybe<PrismicFaqDataRawEntriesAnswerSpansFilterListInput>;
};

type PrismicFaqDataRawEntriesAnswerSpansFilterListInput = {
  readonly elemMatch: Maybe<PrismicFaqDataRawEntriesAnswerSpansFilterInput>;
};

type PrismicFaqDataRawEntriesAnswerSpansFilterInput = {
  readonly start: Maybe<IntQueryOperatorInput>;
  readonly end: Maybe<IntQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly data: Maybe<PrismicFaqDataRawEntriesAnswerSpansDataFilterInput>;
};

type PrismicFaqDataRawEntriesAnswerSpansDataFilterInput = {
  readonly link_type: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
};

type PrismicFaqConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicFaqEdge>;
  readonly nodes: ReadonlyArray<PrismicFaq>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicFaqGroupConnection>;
};


type PrismicFaqConnection_distinctArgs = {
  field: PrismicFaqFieldsEnum;
};


type PrismicFaqConnection_maxArgs = {
  field: PrismicFaqFieldsEnum;
};


type PrismicFaqConnection_minArgs = {
  field: PrismicFaqFieldsEnum;
};


type PrismicFaqConnection_sumArgs = {
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
  | 'uid'
  | 'type'
  | 'href'
  | 'tags'
  | 'first_publication_date'
  | 'last_publication_date'
  | 'slugs'
  | 'lang'
  | 'data.entries'
  | 'data.entries.question'
  | 'data.entries.answer'
  | 'data.entries.answer.type'
  | 'data.entries.answer.text'
  | 'data.entries.answer.spans'
  | 'prismicId'
  | 'dataString'
  | 'dataRaw.entries'
  | 'dataRaw.entries.question'
  | 'dataRaw.entries.answer'
  | 'dataRaw.entries.answer.type'
  | 'dataRaw.entries.answer.text'
  | 'dataRaw.entries.answer.spans'
  | '_previewable';

type PrismicFaqGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicFaqEdge>;
  readonly nodes: ReadonlyArray<PrismicFaq>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type PrismicFaqFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly uid: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly first_publication_date: Maybe<DateQueryOperatorInput>;
  readonly last_publication_date: Maybe<DateQueryOperatorInput>;
  readonly slugs: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly data: Maybe<PrismicFaqDataFilterInput>;
  readonly prismicId: Maybe<StringQueryOperatorInput>;
  readonly dataString: Maybe<StringQueryOperatorInput>;
  readonly dataRaw: Maybe<PrismicFaqDataRawFilterInput>;
  readonly _previewable: Maybe<StringQueryOperatorInput>;
};

type PrismicFaqSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicFaqFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicSiteNavigationDataFilterInput = {
  readonly canonical_link: Maybe<PrismicSiteNavigationDataCanonical_linkFilterInput>;
  readonly header_entries: Maybe<PrismicSiteNavigationDataHeader_entriesFilterListInput>;
  readonly footer_entries: Maybe<PrismicSiteNavigationDataFooter_entriesFilterListInput>;
  readonly social_entries: Maybe<PrismicSiteNavigationDataSocial_entriesFilterListInput>;
};

type PrismicSiteNavigationDataCanonical_linkFilterInput = {
  readonly link_type: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
};

type PrismicSiteNavigationDataHeader_entriesFilterListInput = {
  readonly elemMatch: Maybe<PrismicSiteNavigationDataHeader_entriesFilterInput>;
};

type PrismicSiteNavigationDataHeader_entriesFilterInput = {
  readonly display_name: Maybe<StringQueryOperatorInput>;
  readonly link: Maybe<PrismicSiteNavigationDataHeader_entriesLinkFilterInput>;
};

type PrismicSiteNavigationDataHeader_entriesLinkFilterInput = {
  readonly link_type: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
};

type PrismicSiteNavigationDataFooter_entriesFilterListInput = {
  readonly elemMatch: Maybe<PrismicSiteNavigationDataFooter_entriesFilterInput>;
};

type PrismicSiteNavigationDataFooter_entriesFilterInput = {
  readonly display_name: Maybe<StringQueryOperatorInput>;
  readonly link: Maybe<PrismicSiteNavigationDataFooter_entriesLinkFilterInput>;
};

type PrismicSiteNavigationDataFooter_entriesLinkFilterInput = {
  readonly link_type: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
};

type PrismicSiteNavigationDataSocial_entriesFilterListInput = {
  readonly elemMatch: Maybe<PrismicSiteNavigationDataSocial_entriesFilterInput>;
};

type PrismicSiteNavigationDataSocial_entriesFilterInput = {
  readonly social_type: Maybe<StringQueryOperatorInput>;
  readonly link: Maybe<PrismicSiteNavigationDataSocial_entriesLinkFilterInput>;
};

type PrismicSiteNavigationDataSocial_entriesLinkFilterInput = {
  readonly link_type: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
};

type PrismicSiteNavigationDataRawFilterInput = {
  readonly canonical_link: Maybe<PrismicSiteNavigationDataRawCanonical_linkFilterInput>;
  readonly header_entries: Maybe<PrismicSiteNavigationDataRawHeader_entriesFilterListInput>;
  readonly footer_entries: Maybe<PrismicSiteNavigationDataRawFooter_entriesFilterListInput>;
  readonly social_entries: Maybe<PrismicSiteNavigationDataRawSocial_entriesFilterListInput>;
};

type PrismicSiteNavigationDataRawCanonical_linkFilterInput = {
  readonly link_type: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
};

type PrismicSiteNavigationDataRawHeader_entriesFilterListInput = {
  readonly elemMatch: Maybe<PrismicSiteNavigationDataRawHeader_entriesFilterInput>;
};

type PrismicSiteNavigationDataRawHeader_entriesFilterInput = {
  readonly display_name: Maybe<StringQueryOperatorInput>;
  readonly link: Maybe<PrismicSiteNavigationDataRawHeader_entriesLinkFilterInput>;
};

type PrismicSiteNavigationDataRawHeader_entriesLinkFilterInput = {
  readonly link_type: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
};

type PrismicSiteNavigationDataRawFooter_entriesFilterListInput = {
  readonly elemMatch: Maybe<PrismicSiteNavigationDataRawFooter_entriesFilterInput>;
};

type PrismicSiteNavigationDataRawFooter_entriesFilterInput = {
  readonly display_name: Maybe<StringQueryOperatorInput>;
  readonly link: Maybe<PrismicSiteNavigationDataRawFooter_entriesLinkFilterInput>;
};

type PrismicSiteNavigationDataRawFooter_entriesLinkFilterInput = {
  readonly link_type: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
};

type PrismicSiteNavigationDataRawSocial_entriesFilterListInput = {
  readonly elemMatch: Maybe<PrismicSiteNavigationDataRawSocial_entriesFilterInput>;
};

type PrismicSiteNavigationDataRawSocial_entriesFilterInput = {
  readonly social_type: Maybe<StringQueryOperatorInput>;
  readonly link: Maybe<PrismicSiteNavigationDataRawSocial_entriesLinkFilterInput>;
};

type PrismicSiteNavigationDataRawSocial_entriesLinkFilterInput = {
  readonly link_type: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
};

type PrismicSiteNavigationConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicSiteNavigationEdge>;
  readonly nodes: ReadonlyArray<PrismicSiteNavigation>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicSiteNavigationGroupConnection>;
};


type PrismicSiteNavigationConnection_distinctArgs = {
  field: PrismicSiteNavigationFieldsEnum;
};


type PrismicSiteNavigationConnection_maxArgs = {
  field: PrismicSiteNavigationFieldsEnum;
};


type PrismicSiteNavigationConnection_minArgs = {
  field: PrismicSiteNavigationFieldsEnum;
};


type PrismicSiteNavigationConnection_sumArgs = {
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
  | 'uid'
  | 'type'
  | 'href'
  | 'tags'
  | 'first_publication_date'
  | 'last_publication_date'
  | 'slugs'
  | 'lang'
  | 'data.canonical_link.link_type'
  | 'data.canonical_link.url'
  | 'data.header_entries'
  | 'data.header_entries.display_name'
  | 'data.header_entries.link.link_type'
  | 'data.header_entries.link.url'
  | 'data.footer_entries'
  | 'data.footer_entries.display_name'
  | 'data.footer_entries.link.link_type'
  | 'data.footer_entries.link.url'
  | 'data.social_entries'
  | 'data.social_entries.social_type'
  | 'data.social_entries.link.link_type'
  | 'data.social_entries.link.url'
  | 'prismicId'
  | 'dataString'
  | 'dataRaw.canonical_link.link_type'
  | 'dataRaw.canonical_link.url'
  | 'dataRaw.header_entries'
  | 'dataRaw.header_entries.display_name'
  | 'dataRaw.header_entries.link.link_type'
  | 'dataRaw.header_entries.link.url'
  | 'dataRaw.footer_entries'
  | 'dataRaw.footer_entries.display_name'
  | 'dataRaw.footer_entries.link.link_type'
  | 'dataRaw.footer_entries.link.url'
  | 'dataRaw.social_entries'
  | 'dataRaw.social_entries.social_type'
  | 'dataRaw.social_entries.link.link_type'
  | 'dataRaw.social_entries.link.url'
  | '_previewable';

type PrismicSiteNavigationGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicSiteNavigationEdge>;
  readonly nodes: ReadonlyArray<PrismicSiteNavigation>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type PrismicSiteNavigationFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly uid: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly first_publication_date: Maybe<DateQueryOperatorInput>;
  readonly last_publication_date: Maybe<DateQueryOperatorInput>;
  readonly slugs: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly data: Maybe<PrismicSiteNavigationDataFilterInput>;
  readonly prismicId: Maybe<StringQueryOperatorInput>;
  readonly dataString: Maybe<StringQueryOperatorInput>;
  readonly dataRaw: Maybe<PrismicSiteNavigationDataRawFilterInput>;
  readonly _previewable: Maybe<StringQueryOperatorInput>;
};

type PrismicSiteNavigationSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicSiteNavigationFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicTermsAndConditionsDataFilterInput = {
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly revision_date: Maybe<DateQueryOperatorInput>;
  readonly content: Maybe<PrismicTermsAndConditionsDataContentFilterListInput>;
};

type PrismicTermsAndConditionsDataContentFilterListInput = {
  readonly elemMatch: Maybe<PrismicTermsAndConditionsDataContentFilterInput>;
};

type PrismicTermsAndConditionsDataContentFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly text: Maybe<StringQueryOperatorInput>;
  readonly spans: Maybe<PrismicTermsAndConditionsDataContentSpansFilterListInput>;
};

type PrismicTermsAndConditionsDataContentSpansFilterListInput = {
  readonly elemMatch: Maybe<PrismicTermsAndConditionsDataContentSpansFilterInput>;
};

type PrismicTermsAndConditionsDataContentSpansFilterInput = {
  readonly start: Maybe<IntQueryOperatorInput>;
  readonly end: Maybe<IntQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly data: Maybe<PrismicTermsAndConditionsDataContentSpansDataFilterInput>;
};

type PrismicTermsAndConditionsDataContentSpansDataFilterInput = {
  readonly link_type: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
};

type PrismicTermsAndConditionsDataRawFilterInput = {
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly revision_date: Maybe<DateQueryOperatorInput>;
  readonly content: Maybe<PrismicTermsAndConditionsDataRawContentFilterListInput>;
};

type PrismicTermsAndConditionsDataRawContentFilterListInput = {
  readonly elemMatch: Maybe<PrismicTermsAndConditionsDataRawContentFilterInput>;
};

type PrismicTermsAndConditionsDataRawContentFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly text: Maybe<StringQueryOperatorInput>;
  readonly spans: Maybe<PrismicTermsAndConditionsDataRawContentSpansFilterListInput>;
};

type PrismicTermsAndConditionsDataRawContentSpansFilterListInput = {
  readonly elemMatch: Maybe<PrismicTermsAndConditionsDataRawContentSpansFilterInput>;
};

type PrismicTermsAndConditionsDataRawContentSpansFilterInput = {
  readonly start: Maybe<IntQueryOperatorInput>;
  readonly end: Maybe<IntQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly data: Maybe<PrismicTermsAndConditionsDataRawContentSpansDataFilterInput>;
};

type PrismicTermsAndConditionsDataRawContentSpansDataFilterInput = {
  readonly link_type: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
};

type PrismicTermsAndConditionsConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicTermsAndConditionsEdge>;
  readonly nodes: ReadonlyArray<PrismicTermsAndConditions>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicTermsAndConditionsGroupConnection>;
};


type PrismicTermsAndConditionsConnection_distinctArgs = {
  field: PrismicTermsAndConditionsFieldsEnum;
};


type PrismicTermsAndConditionsConnection_maxArgs = {
  field: PrismicTermsAndConditionsFieldsEnum;
};


type PrismicTermsAndConditionsConnection_minArgs = {
  field: PrismicTermsAndConditionsFieldsEnum;
};


type PrismicTermsAndConditionsConnection_sumArgs = {
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
  | 'uid'
  | 'type'
  | 'href'
  | 'tags'
  | 'first_publication_date'
  | 'last_publication_date'
  | 'slugs'
  | 'lang'
  | 'data.description'
  | 'data.revision_date'
  | 'data.content'
  | 'data.content.type'
  | 'data.content.text'
  | 'data.content.spans'
  | 'data.content.spans.start'
  | 'data.content.spans.end'
  | 'data.content.spans.type'
  | 'prismicId'
  | 'dataString'
  | 'dataRaw.description'
  | 'dataRaw.revision_date'
  | 'dataRaw.content'
  | 'dataRaw.content.type'
  | 'dataRaw.content.text'
  | 'dataRaw.content.spans'
  | 'dataRaw.content.spans.start'
  | 'dataRaw.content.spans.end'
  | 'dataRaw.content.spans.type'
  | '_previewable';

type PrismicTermsAndConditionsGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicTermsAndConditionsEdge>;
  readonly nodes: ReadonlyArray<PrismicTermsAndConditions>;
  readonly pageInfo: PageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type PrismicTermsAndConditionsFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly uid: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly first_publication_date: Maybe<DateQueryOperatorInput>;
  readonly last_publication_date: Maybe<DateQueryOperatorInput>;
  readonly slugs: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly data: Maybe<PrismicTermsAndConditionsDataFilterInput>;
  readonly prismicId: Maybe<StringQueryOperatorInput>;
  readonly dataString: Maybe<StringQueryOperatorInput>;
  readonly dataRaw: Maybe<PrismicTermsAndConditionsDataRawFilterInput>;
  readonly _previewable: Maybe<StringQueryOperatorInput>;
};

type PrismicTermsAndConditionsSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicTermsAndConditionsFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_sumArgs = {
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
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_sumArgs = {
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
  | 'pluginOptions.name'
  | 'pluginOptions.path'
  | 'pluginOptions.id'
  | 'pluginOptions.defaultDataLayer.type'
  | 'pluginOptions.includeInDevelopment'
  | 'pluginOptions.routeChangeEventName'
  | 'pluginOptions.base64Width'
  | 'pluginOptions.stripMetadata'
  | 'pluginOptions.defaultQuality'
  | 'pluginOptions.failOnError'
  | 'pluginOptions.sourceMap'
  | 'pluginOptions.autoLabel'
  | 'pluginOptions.labelFormat'
  | 'pluginOptions.cssPropOptimization'
  | 'pluginOptions.root'
  | 'pluginOptions.aliases._src'
  | 'pluginOptions.outputPath'
  | 'pluginOptions.emitSchema.src___generated___gatsby_introspection_json'
  | 'pluginOptions.emitSchema.src___generated___gatsby_schema_graphql'
  | 'pluginOptions.emitPluginDocuments.src___generated___gatsby_plugin_documents_graphql'
  | 'pluginOptions.short_name'
  | 'pluginOptions.start_url'
  | 'pluginOptions.background_color'
  | 'pluginOptions.theme_color'
  | 'pluginOptions.display'
  | 'pluginOptions.icon'
  | 'pluginOptions.legacy'
  | 'pluginOptions.theme_color_in_head'
  | 'pluginOptions.cache_busting_mode'
  | 'pluginOptions.crossOrigin'
  | 'pluginOptions.include_favicon'
  | 'pluginOptions.cacheDigest'
  | 'pluginOptions.pathCheck'
  | 'pluginOptions.allExtensions'
  | 'pluginOptions.isTSX'
  | 'pluginOptions.jsxPragma'
  | 'pluginOptions.repositoryName'
  | 'pluginOptions.prismicToolbar'
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

type ResultRemarks_dataFragment = { readonly remarks: Maybe<ReadonlyArray<Maybe<(
    Pick<PrismicMbtiTestResultRemarksGroupType, 'remark_name'>
    & { readonly remark_description: Maybe<Pick<PrismicStructuredTextType, 'text'>> }
  )>>> };

type ResultRelations_dataFragment = { readonly relations: ReadonlyArray<(
    Pick<PrismicMbtiTestResultRelationsGroupType, 'relation_type' | 'relation_color'>
    & { readonly relation_entry: Maybe<(
      Pick<PrismicLinkType, 'id' | 'url'>
      & { readonly document: Maybe<(
        Pick<PrismicMbtiTestResult, 'id'>
        & { readonly data: Maybe<(
          Pick<PrismicMbtiTestResultDataType, 'summary'>
          & { readonly avatar: Maybe<(
            Pick<PrismicImageType, 'url'>
            & { readonly dimensions: Maybe<Pick<PrismicImageDimensionsType, 'width' | 'height'>> }
          )> }
        )> }
      )> }
    )> }
  )> };

type ResultComments_dataFragment = { readonly comments: Maybe<ReadonlyArray<Maybe<Pick<PrismicMbtiTestResultCommentsGroupType, 'text'>>>> };

type ResultTags_dataFragment = { readonly tags: Maybe<ReadonlyArray<Maybe<Pick<PrismicMbtiTestResultTagsGroupType, 'tag_name'>>>> };

type UseSiteMetaQueryVariables = Exact<{ [key: string]: never; }>;


type UseSiteMetaQuery = { readonly site: Maybe<{ readonly siteMetadata: Pick<SiteMetadata, 'siteUrl' | 'siteName'> }> };

type ResultPageView_prismicMbtiTestResultFragment = (
  Pick<PrismicMbtiTestResultDataType, 'summary'>
  & { readonly relations: ReadonlyArray<{ readonly __typename: 'PrismicMbtiTestResultRelationsGroupType' }>, readonly thumbnail: (
    Pick<PrismicImageType, 'alt' | 'url'>
    & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> }
  ), readonly remarks: Maybe<ReadonlyArray<Maybe<{ readonly __typename: 'PrismicMbtiTestResultRemarksGroupType' }>>> }
  & ResultTags_dataFragment
  & ResultComments_dataFragment
  & ResultRemarks_dataFragment
  & ResultRelations_dataFragment
);

type MBTITargetResultViewPageQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


type MBTITargetResultViewPageQuery = { readonly prismicMbtiTestResult: Maybe<(
    Pick<PrismicMbtiTestResult, 'id' | 'uid'>
    & { readonly data: Maybe<ResultPageView_prismicMbtiTestResultFragment> }
  )> };

type MBTITargetResultPageQueryVariables = Exact<{
  uid: Scalars['String'];
}>;


type MBTITargetResultPageQuery = { readonly prismicMbtiTestResult: Maybe<(
    Pick<PrismicMbtiTestResult, 'id' | 'uid'>
    & { readonly data: Maybe<(
      Pick<PrismicMbtiTestResultDataType, 'summary' | 'og_description'>
      & { readonly opengraph_image: Maybe<(
        Pick<PrismicImageType, 'url'>
        & { readonly dimensions: Maybe<Pick<PrismicImageDimensionsType, 'width' | 'height'>> }
      )> }
      & ResultPageView_prismicMbtiTestResultFragment
    )> }
  )> };

type MBTIQuestionPageQueryVariables = Exact<{ [key: string]: never; }>;


type MBTIQuestionPageQuery = { readonly prismicMbtiTestQuestion: Maybe<{ readonly data: Maybe<{ readonly body: ReadonlyArray<(
        { readonly __typename: 'PrismicMbtiTestQuestionBodyIe' }
        & { readonly primary: Maybe<(
          Pick<PrismicMbtiTestQuestionBodyIePrimaryType, 'question'>
          & { readonly answer_i: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly answer_e: Maybe<Pick<PrismicStructuredTextType, 'text'>> }
        )> }
      ) | (
        { readonly __typename: 'PrismicMbtiTestQuestionBodyNs' }
        & { readonly primary: Maybe<(
          Pick<PrismicMbtiTestQuestionBodyNsPrimaryType, 'question'>
          & { readonly answer_n: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly answer_s: Maybe<Pick<PrismicStructuredTextType, 'text'>> }
        )> }
      ) | (
        { readonly __typename: 'PrismicMbtiTestQuestionBodyFt' }
        & { readonly primary: Maybe<(
          Pick<PrismicMbtiTestQuestionBodyFtPrimaryType, 'question'>
          & { readonly answer_f: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly answer_t: Maybe<Pick<PrismicStructuredTextType, 'text'>> }
        )> }
      ) | (
        { readonly __typename: 'PrismicMbtiTestQuestionBodyPj' }
        & { readonly primary: Maybe<(
          Pick<PrismicMbtiTestQuestionBodyPjPrimaryType, 'question'>
          & { readonly answer_p: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly answer_j: Maybe<Pick<PrismicStructuredTextType, 'text'>> }
        )> }
      )> }> }> };

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

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSiteFunction: { readonly nodes: ReadonlyArray<Pick<SiteFunction, 'apiRoute'>> }, readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type MBTIIntroPageQueryVariables = Exact<{ [key: string]: never; }>;


type MBTIIntroPageQuery = { readonly prismicMbtiIntro: Maybe<{ readonly data: Maybe<(
      Pick<PrismicMbtiIntroDataType, 'title' | 'description'>
      & { readonly opengraph_image: Maybe<(
        Pick<PrismicImageType, 'url'>
        & { readonly dimensions: Maybe<Pick<PrismicImageDimensionsType, 'width' | 'height'>> }
      )> }
    )> }> };

}