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
  /** Text content with rich formatting capabilities using a Prismic format called Structured Text. */
  PrismicStructuredText: any;
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
  readonly siteMetadata: SiteMetadata;
  readonly port: Maybe<Scalars['Int']>;
  readonly host: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly jsxRuntime: Maybe<Scalars['String']>;
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

type SiteSiteMetadata = {
  readonly title: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
};

type SiteFunction = Node & {
  readonly functionRoute: Scalars['String'];
  readonly pluginName: Scalars['String'];
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
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
  readonly pageContext: Maybe<Scalars['JSON']>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SitePlugin = Node & {
  readonly resolve: Maybe<Scalars['String']>;
  readonly name: Maybe<Scalars['String']>;
  readonly version: Maybe<Scalars['String']>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<Scalars['JSON']>;
  readonly packageJson: Maybe<Scalars['JSON']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type SiteBuildMetadata = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type SiteBuildMetadata_buildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
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

type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'auto'
  | 'jpg'
  | 'png'
  | 'webp'
  | 'avif';

type GatsbyImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type GatsbyImagePlaceholder =
  | 'dominantColor'
  | 'tracedSVG'
  | 'blurred'
  | 'none';

type LocalSearchJobPosts = Node & {
  /** The name of the index. */
  readonly name: Scalars['String'];
  /** The search engine used to create the index. */
  readonly engine: Scalars['String'];
  /** The search index created using the selected engine. */
  readonly index: Scalars['String'];
  /** A JSON object used to map search results to their data. */
  readonly store: Scalars['JSON'];
  /** Save the index to the site's static directory and return a public URL to it. */
  readonly publicIndexURL: Scalars['String'];
  /** Save the store to the site's static directory and return a public URL to it. */
  readonly publicStoreURL: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type PrismicAlternateLanguageType = {
  readonly id: Maybe<Scalars['ID']>;
  readonly uid: Maybe<Scalars['String']>;
  readonly lang: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
  readonly document: Maybe<PrismicAllDocumentTypes>;
  readonly raw: Maybe<Scalars['JSON']>;
};

type PrismicEmbedType = Node & {
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type PrismicGeoPointType = {
  readonly longitude: Scalars['Float'];
  readonly latitude: Scalars['Float'];
};

type PrismicImageDimensionsType = {
  readonly width: Scalars['Int'];
  readonly height: Scalars['Int'];
};

type PrismicImageThumbnailType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
};


type PrismicImageThumbnailType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicImageThumbnailType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicImageThumbnailType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicImageThumbnailType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicLinkType = {
  readonly link_type: Maybe<PrismicLinkTypeEnum>;
  readonly isBroken: Maybe<Scalars['Boolean']>;
  readonly url: Maybe<Scalars['String']>;
  readonly target: Maybe<Scalars['String']>;
  readonly size: Maybe<Scalars['Int']>;
  readonly id: Maybe<Scalars['ID']>;
  readonly type: Maybe<Scalars['String']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly lang: Maybe<Scalars['String']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly uid: Maybe<Scalars['String']>;
  readonly document: Maybe<PrismicAllDocumentTypes>;
  readonly localFile: Maybe<File>;
  readonly raw: Maybe<Scalars['JSON']>;
};

type PrismicLinkTypeEnum =
  | 'Any'
  | 'Document'
  | 'Media'
  | 'Web';

type PrismicSliceType = {
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicSharedSliceType = {
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
  readonly variation: Scalars['String'];
  readonly version: Scalars['String'];
};

type PrismicStructuredTextType = {
  readonly text: Maybe<Scalars['String']>;
  readonly html: Maybe<Scalars['String']>;
  readonly richText: Scalars['PrismicStructuredText'];
  /** @deprecated This field has been renamed to `richText`. The `richText` field has the same value the `raw` field. */
  readonly raw: Scalars['PrismicStructuredText'];
};

type PrismicTypePathType = Node & {
  readonly kind: Scalars['String'];
  readonly path: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type ImgixFixed = {
  readonly base64: Scalars['String'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Scalars['String'];
  readonly srcSetWebp: Scalars['String'];
  readonly sizes: Scalars['String'];
  readonly width: Scalars['Int'];
  readonly height: Scalars['Int'];
};

type ImgixFluid = {
  readonly base64: Scalars['String'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp: Scalars['String'];
  readonly srcSetWebp: Scalars['String'];
  readonly sizes: Scalars['String'];
  readonly aspectRatio: Scalars['Float'];
};

type ImgixPlaceholder =
  | 'dominantColor'
  | 'blurred'
  | 'none';

type ImgixParamsInput = {
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
  readonly blendH: Maybe<Scalars['Float']>;
  /** Alias for `blendH`. */
  readonly blendh: Maybe<Scalars['Float']>;
  /** Alias for `blendH`. */
  readonly bh: Maybe<Scalars['Float']>;
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
  readonly blendW: Maybe<Scalars['Float']>;
  /** Alias for `blendW`. */
  readonly blendw: Maybe<Scalars['Float']>;
  /** Alias for `blendW`. */
  readonly bw: Maybe<Scalars['Float']>;
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
  readonly fpX: Maybe<Scalars['Float']>;
  /** Sets the relative vertical value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y). */
  readonly fpY: Maybe<Scalars['Float']>;
  /** Sets the relative zoom value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z). */
  readonly fpZ: Maybe<Scalars['Float']>;
  /** Adjusts the gamma of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/gam). */
  readonly gam: Maybe<Scalars['Int']>;
  /** Sets grid colors for the transparency checkerboard grid. */
  readonly gridColors: Maybe<Scalars['String']>;
  /** Sets grid size for the transparency checkerboard grid. */
  readonly gridSize: Maybe<Scalars['Int']>;
  /** Adjusts the height of the output image. [See docs](https://docs.imgix.com/apis/url/size/h). */
  readonly h: Maybe<Scalars['Float']>;
  /** Alias for `h`. */
  readonly height: Maybe<Scalars['Float']>;
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
  /** Determine if IPTC data should be passed for JPEG images. */
  readonly iptc: Maybe<Scalars['String']>;
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
  readonly markH: Maybe<Scalars['Float']>;
  /** Alias for `markH`. */
  readonly mh: Maybe<Scalars['Float']>;
  /** Alias for `markH`. */
  readonly markh: Maybe<Scalars['Float']>;
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
  readonly markW: Maybe<Scalars['Float']>;
  /** Alias for `markW`. */
  readonly mw: Maybe<Scalars['Float']>;
  /** Alias for `markW`. */
  readonly markw: Maybe<Scalars['Float']>;
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
  readonly w: Maybe<Scalars['Float']>;
  /** Alias for `w`. */
  readonly width: Maybe<Scalars['Float']>;
};

type PrismicMbtiTestResult = Node & {
  readonly prismicId: Scalars['ID'];
  readonly alternate_languages: ReadonlyArray<PrismicAlternateLanguageType>;
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
  readonly _previewable: Scalars['ID'];
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

type PrismicMbtiIntro = Node & {
  readonly prismicId: Scalars['ID'];
  readonly alternate_languages: ReadonlyArray<PrismicAlternateLanguageType>;
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
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

type PrismicMbtiTestQuestion = Node & {
  readonly prismicId: Scalars['ID'];
  readonly alternate_languages: ReadonlyArray<PrismicAlternateLanguageType>;
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
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

type PrismicAdsIntro = Node & {
  readonly prismicId: Scalars['ID'];
  readonly alternate_languages: ReadonlyArray<PrismicAlternateLanguageType>;
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
  readonly _previewable: Scalars['ID'];
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type PrismicAdsIntro_first_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type PrismicAdsIntro_last_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type PrismicTeamPage = Node & {
  readonly prismicId: Scalars['ID'];
  readonly alternate_languages: ReadonlyArray<PrismicAlternateLanguageType>;
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
  readonly _previewable: Scalars['ID'];
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type PrismicTeamPage_first_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type PrismicTeamPage_last_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type PrismicMemberProfileDataImageImageThumbnailsType = {
  readonly small_banner: Maybe<PrismicImageThumbnailType>;
  readonly wide_banner: Maybe<PrismicImageThumbnailType>;
};

type PrismicTermsAndConditionsDataType = {
  readonly content: Maybe<PrismicStructuredTextType>;
  readonly description: Maybe<Scalars['String']>;
  readonly revision_date: Maybe<Scalars['Date']>;
};


type PrismicTermsAndConditionsDataType_revision_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type PrismicFaqDataEntries = {
  readonly answer: Maybe<PrismicStructuredTextType>;
  readonly question: Maybe<Scalars['String']>;
};

type PrismicTermsAndConditions = Node & {
  readonly uid: Scalars['String'];
  readonly data: PrismicTermsAndConditionsDataType;
  readonly dataRaw: Scalars['JSON'];
  readonly prismicId: Scalars['ID'];
  readonly alternate_languages: ReadonlyArray<PrismicAlternateLanguageType>;
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
  readonly _previewable: Scalars['ID'];
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

type PrismicTeamBannerDataLeftImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
};


type PrismicTeamBannerDataLeftImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamBannerDataLeftImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamBannerDataLeftImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamBannerDataLeftImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicFaqDataType = {
  readonly entries: Maybe<ReadonlyArray<Maybe<PrismicFaqDataEntries>>>;
};

type PrismicGlobalContentsDataAboutBackgroundImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
};


type PrismicGlobalContentsDataAboutBackgroundImageImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicGlobalContentsDataAboutBackgroundImageImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicGlobalContentsDataAboutBackgroundImageImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicGlobalContentsDataAboutBackgroundImageImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicFaq = Node & {
  readonly uid: Scalars['String'];
  readonly data: PrismicFaqDataType;
  readonly dataRaw: Scalars['JSON'];
  readonly prismicId: Scalars['ID'];
  readonly alternate_languages: ReadonlyArray<PrismicAlternateLanguageType>;
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
  readonly _previewable: Scalars['ID'];
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

type PrismicSiteNavigationDataFooterEntries = {
  readonly display_text: Maybe<Scalars['String']>;
  readonly group: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicLinkType>;
};

type PrismicMemberProfileDataImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  readonly thumbnails: Maybe<PrismicMemberProfileDataImageImageThumbnailsType>;
};


type PrismicMemberProfileDataImageImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicMemberProfileDataImageImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicMemberProfileDataImageImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicMemberProfileDataImageImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicTeamContentsDataCompletedPageLinkGroup = {
  readonly display_text: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicLinkType>;
};

type PrismicAdvertisementContentsDataBodyVisitorCountSlideItem = {
  readonly region: Maybe<Scalars['String']>;
  readonly visitor_count: Maybe<Scalars['Float']>;
};

type PrismicAdvertisementContentsDataBodyVisitorCountSlidePrimary = {
  readonly date: Maybe<Scalars['Date']>;
};


type PrismicAdvertisementContentsDataBodyVisitorCountSlidePrimary_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type PrismicPayContentsDataBodyHeroPrimaryImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
};


type PrismicPayContentsDataBodyHeroPrimaryImageImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicPayContentsDataBodyHeroPrimaryImageImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicPayContentsDataBodyHeroPrimaryImageImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicPayContentsDataBodyHeroPrimaryImageImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicAdvertisementContentsDataBodyVisitorCountSlide = PrismicSliceType & {
  readonly items: ReadonlyArray<PrismicAdvertisementContentsDataBodyVisitorCountSlideItem>;
  readonly primary: PrismicAdvertisementContentsDataBodyVisitorCountSlidePrimary;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicTeamBannerDataRightImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
};


type PrismicTeamBannerDataRightImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamBannerDataRightImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamBannerDataRightImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamBannerDataRightImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicMemberProfileDataType = {
  readonly email: Maybe<Scalars['String']>;
  readonly image: Maybe<PrismicMemberProfileDataImageImageType>;
  readonly name: Maybe<Scalars['String']>;
  readonly nickname: Maybe<Scalars['String']>;
  readonly role: Maybe<Scalars['String']>;
};

type PrismicPayContentsDataBodyHeroPrimary = {
  readonly image: Maybe<PrismicPayContentsDataBodyHeroPrimaryImageImageType>;
};

type PrismicTeamsArticleDataBodyArticleSectionItemsThumbnailImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
};


type PrismicTeamsArticleDataBodyArticleSectionItemsThumbnailImageImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamsArticleDataBodyArticleSectionItemsThumbnailImageImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamsArticleDataBodyArticleSectionItemsThumbnailImageImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamsArticleDataBodyArticleSectionItemsThumbnailImageImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicTeamBannerDataType = {
  readonly left: Maybe<PrismicTeamBannerDataLeftImageType>;
  readonly right: Maybe<PrismicTeamBannerDataRightImageType>;
};

type PrismicMemberProfile = Node & {
  readonly data: PrismicMemberProfileDataType;
  readonly dataRaw: Scalars['JSON'];
  readonly prismicId: Scalars['ID'];
  readonly alternate_languages: ReadonlyArray<PrismicAlternateLanguageType>;
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
  readonly _previewable: Scalars['ID'];
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type PrismicMemberProfile_first_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type PrismicMemberProfile_last_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type PrismicSiteNavigationDataHeaderEntries = {
  readonly display_text: Maybe<Scalars['String']>;
  readonly group: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicLinkType>;
};

type PrismicAdvertisementContentsDataBodySlicesType = PrismicAdvertisementContentsDataBodyVisitorCountSlide;

type PrismicTeamBanner = Node & {
  readonly data: PrismicTeamBannerDataType;
  readonly dataRaw: Scalars['JSON'];
  readonly prismicId: Scalars['ID'];
  readonly alternate_languages: ReadonlyArray<PrismicAlternateLanguageType>;
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
  readonly _previewable: Scalars['ID'];
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type PrismicTeamBanner_first_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type PrismicTeamBanner_last_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type PrismicGlobalContentsDataAboutBodyDetailsListItem = {
  readonly label: Maybe<Scalars['String']>;
  readonly text: Maybe<Scalars['String']>;
};

type PrismicAdvertisementContentsDataType = {
  readonly body: ReadonlyArray<PrismicAdvertisementContentsDataBodySlicesType>;
};

type PrismicAdvertisementContents = Node & {
  readonly data: PrismicAdvertisementContentsDataType;
  readonly dataRaw: Scalars['JSON'];
  readonly prismicId: Scalars['ID'];
  readonly alternate_languages: ReadonlyArray<PrismicAlternateLanguageType>;
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
  readonly _previewable: Scalars['ID'];
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type PrismicAdvertisementContents_first_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type PrismicAdvertisementContents_last_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type PrismicTeamsArticleDataBodyArticleSectionItem = {
  readonly thumbnail_description: Maybe<PrismicStructuredTextType>;
  readonly thumbnail_image: Maybe<PrismicTeamsArticleDataBodyArticleSectionItemsThumbnailImageImageType>;
};

type PrismicTeamsArticleDataBodyArticleSectionPrimary = {
  readonly body_text: Maybe<PrismicStructuredTextType>;
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicSiteNavigationDataSnsProfiles = {
  readonly link: Maybe<PrismicLinkType>;
  readonly service: Maybe<Scalars['String']>;
};

type PrismicTeamsArticleDataBodyArticleSection = PrismicSliceType & {
  readonly items: ReadonlyArray<PrismicTeamsArticleDataBodyArticleSectionItem>;
  readonly primary: PrismicTeamsArticleDataBodyArticleSectionPrimary;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicSiteNavigationDataType = {
  readonly address: Maybe<PrismicStructuredTextType>;
  readonly copyright: Maybe<PrismicStructuredTextType>;
  readonly email: Maybe<PrismicStructuredTextType>;
  readonly footer_entries: Maybe<ReadonlyArray<Maybe<PrismicSiteNavigationDataFooterEntries>>>;
  readonly header_entries: Maybe<ReadonlyArray<Maybe<PrismicSiteNavigationDataHeaderEntries>>>;
  readonly sns_profiles: Maybe<ReadonlyArray<Maybe<PrismicSiteNavigationDataSnsProfiles>>>;
  readonly tel: Maybe<PrismicStructuredTextType>;
};

type PrismicTeamContentsDataCultureBodyBenefitItem = {
  readonly description: Maybe<PrismicStructuredTextType>;
  readonly subtext: Maybe<Scalars['String']>;
  readonly subtitle: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataCultureBodyBenefitPrimary = {
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicPayContentsDataBodyTitleAndDescriptionPrimary = {
  readonly description: Maybe<PrismicStructuredTextType>;
  readonly inverted: Maybe<Scalars['Boolean']>;
  readonly key_text: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicLinkType>;
  readonly link_text: Maybe<Scalars['String']>;
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicGlobalContentsDataAboutBodySubtitleAndImagesItemsImageImageThumbnailsType = {
  readonly mobile: Maybe<PrismicImageThumbnailType>;
};

type PrismicTeamsArticleDataBodySlicesType = PrismicTeamsArticleDataBodyArticleSection;

type PrismicSiteNavigation = Node & {
  readonly uid: Scalars['String'];
  readonly data: PrismicSiteNavigationDataType;
  readonly dataRaw: Scalars['JSON'];
  readonly prismicId: Scalars['ID'];
  readonly alternate_languages: ReadonlyArray<PrismicAlternateLanguageType>;
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
  readonly _previewable: Scalars['ID'];
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

type PrismicGlobalContentsDataAboutBodySubtitleAndImagesItemsImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  readonly thumbnails: Maybe<PrismicGlobalContentsDataAboutBodySubtitleAndImagesItemsImageImageThumbnailsType>;
};


type PrismicGlobalContentsDataAboutBodySubtitleAndImagesItemsImageImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicGlobalContentsDataAboutBodySubtitleAndImagesItemsImageImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicGlobalContentsDataAboutBodySubtitleAndImagesItemsImageImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicGlobalContentsDataAboutBodySubtitleAndImagesItemsImageImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicTeamsArticleDataPageMetaImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
};


type PrismicTeamsArticleDataPageMetaImageImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamsArticleDataPageMetaImageImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamsArticleDataPageMetaImageImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamsArticleDataPageMetaImageImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicGlobalContentsDataAboutBodySubtitleAndImagesItem = {
  readonly image: Maybe<PrismicGlobalContentsDataAboutBodySubtitleAndImagesItemsImageImageType>;
};

type PrismicGlobalContentsDataAboutBodySubtitleAndImagesPrimary = {
  readonly subtitle: Maybe<PrismicStructuredTextType>;
};

type PrismicPayContentsDataBodyTitleAndIllustrationPrimaryIllustrationImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
};


type PrismicPayContentsDataBodyTitleAndIllustrationPrimaryIllustrationImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicPayContentsDataBodyTitleAndIllustrationPrimaryIllustrationImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicPayContentsDataBodyTitleAndIllustrationPrimaryIllustrationImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicPayContentsDataBodyTitleAndIllustrationPrimaryIllustrationImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicTeamsArticleDataType = {
  readonly body: ReadonlyArray<PrismicTeamsArticleDataBodySlicesType>;
  readonly page_meta_description: Maybe<Scalars['String']>;
  readonly page_meta_image: Maybe<PrismicTeamsArticleDataPageMetaImageImageType>;
  readonly page_meta_title: Maybe<Scalars['String']>;
  readonly page_title: Maybe<PrismicStructuredTextType>;
};

type PrismicTeamContentsDataCultureBodyHowWeWorkItem = {
  readonly description: Maybe<PrismicStructuredTextType>;
  readonly group: Maybe<Scalars['String']>;
  readonly key_text: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataCultureBodyHowWeWorkPrimary = {
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicTeamsArticle = Node & {
  readonly uid: Scalars['String'];
  readonly data: PrismicTeamsArticleDataType;
  readonly dataRaw: Scalars['JSON'];
  readonly prismicId: Scalars['ID'];
  readonly alternate_languages: ReadonlyArray<PrismicAlternateLanguageType>;
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
  readonly _previewable: Scalars['ID'];
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type PrismicTeamsArticle_first_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type PrismicTeamsArticle_last_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type PrismicPayContentsDataBodyTitleAndIllustrationPrimary = {
  readonly illustration: Maybe<PrismicPayContentsDataBodyTitleAndIllustrationPrimaryIllustrationImageType>;
  readonly inverted: Maybe<Scalars['Boolean']>;
  readonly key_text: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicLinkType>;
  readonly link_text: Maybe<Scalars['String']>;
  readonly sub_title: Maybe<PrismicStructuredTextType>;
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicGlobalContentsDataAboutBodySubtitleAndLinksItem = {
  readonly date: Maybe<Scalars['Date']>;
  readonly link: Maybe<PrismicLinkType>;
  readonly text: Maybe<Scalars['String']>;
};


type PrismicGlobalContentsDataAboutBodySubtitleAndLinksItem_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type PrismicGlobalContentsDataAboutBodySubtitleAndLinksPrimary = {
  readonly subtitle: Maybe<PrismicStructuredTextType>;
};

type PrismicTeamContentsDataCultureBodyIllustrationAndDescriptionPrimaryIllustrationImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
};


type PrismicTeamContentsDataCultureBodyIllustrationAndDescriptionPrimaryIllustrationImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataCultureBodyIllustrationAndDescriptionPrimaryIllustrationImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataCultureBodyIllustrationAndDescriptionPrimaryIllustrationImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataCultureBodyIllustrationAndDescriptionPrimaryIllustrationImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicGlobalContentsDataAboutBodySubtitleAndTextPrimary = {
  readonly subtitle: Maybe<PrismicStructuredTextType>;
  readonly text: Maybe<PrismicStructuredTextType>;
};

type PrismicTeamContentsDataCultureBodyIllustrationAndDescriptionPrimary = {
  readonly description: Maybe<PrismicStructuredTextType>;
  readonly expanded: Maybe<Scalars['Boolean']>;
  readonly illustration: Maybe<PrismicTeamContentsDataCultureBodyIllustrationAndDescriptionPrimaryIllustrationImageType>;
  readonly inverted: Maybe<Scalars['Boolean']>;
  readonly link: Maybe<PrismicLinkType>;
  readonly link_text: Maybe<Scalars['String']>;
};

type PrismicPayContentsDataBodyWideBannerPrimaryThumbnailImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
};


type PrismicPayContentsDataBodyWideBannerPrimaryThumbnailImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicPayContentsDataBodyWideBannerPrimaryThumbnailImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicPayContentsDataBodyWideBannerPrimaryThumbnailImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicPayContentsDataBodyWideBannerPrimaryThumbnailImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicGlobalContentsDataAboutBodyDetailsList = PrismicSliceType & {
  readonly items: ReadonlyArray<PrismicGlobalContentsDataAboutBodyDetailsListItem>;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicGlobalContentsDataAboutBodySubtitleAndImages = PrismicSliceType & {
  readonly items: ReadonlyArray<PrismicGlobalContentsDataAboutBodySubtitleAndImagesItem>;
  readonly primary: PrismicGlobalContentsDataAboutBodySubtitleAndImagesPrimary;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicGlobalContentsDataAboutBodySubtitleAndLinks = PrismicSliceType & {
  readonly items: ReadonlyArray<PrismicGlobalContentsDataAboutBodySubtitleAndLinksItem>;
  readonly primary: PrismicGlobalContentsDataAboutBodySubtitleAndLinksPrimary;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicGlobalContentsDataAboutBodySubtitleAndText = PrismicSliceType & {
  readonly primary: PrismicGlobalContentsDataAboutBodySubtitleAndTextPrimary;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicPayContentsDataBodyWideBannerPrimary = {
  readonly background_color: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicLinkType>;
  readonly link_text: Maybe<Scalars['String']>;
  readonly thumbnail: Maybe<PrismicPayContentsDataBodyWideBannerPrimaryThumbnailImageType>;
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicGlobalContentsDataAboutBodySlicesType = PrismicGlobalContentsDataAboutBodyDetailsList | PrismicGlobalContentsDataAboutBodySubtitleAndImages | PrismicGlobalContentsDataAboutBodySubtitleAndLinks | PrismicGlobalContentsDataAboutBodySubtitleAndText;

type PrismicPayContentsDataBodyHero = PrismicSliceType & {
  readonly primary: PrismicPayContentsDataBodyHeroPrimary;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicPayContentsDataBodyTitleAndDescription = PrismicSliceType & {
  readonly primary: PrismicPayContentsDataBodyTitleAndDescriptionPrimary;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicPayContentsDataBodyTitleAndIllustration = PrismicSliceType & {
  readonly primary: PrismicPayContentsDataBodyTitleAndIllustrationPrimary;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicPayContentsDataBodyWideBanner = PrismicSliceType & {
  readonly primary: PrismicPayContentsDataBodyWideBannerPrimary;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataCultureBodyKeyVisualPrimaryKeyVisualImageImageThumbnailsType = {
  readonly portrait: Maybe<PrismicImageThumbnailType>;
};

type PrismicPayContentsDataBodySlicesType = PrismicPayContentsDataBodyHero | PrismicPayContentsDataBodyTitleAndDescription | PrismicPayContentsDataBodyTitleAndIllustration | PrismicPayContentsDataBodyWideBanner;

type PrismicGlobalContentsDataAboutOpengraphImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
};


type PrismicGlobalContentsDataAboutOpengraphImageImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicGlobalContentsDataAboutOpengraphImageImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicGlobalContentsDataAboutOpengraphImageImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicGlobalContentsDataAboutOpengraphImageImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicTeamContentsDataCultureBodyKeyVisualPrimaryKeyVisualImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  readonly thumbnails: Maybe<PrismicTeamContentsDataCultureBodyKeyVisualPrimaryKeyVisualImageImageThumbnailsType>;
};


type PrismicTeamContentsDataCultureBodyKeyVisualPrimaryKeyVisualImageImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataCultureBodyKeyVisualPrimaryKeyVisualImageImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataCultureBodyKeyVisualPrimaryKeyVisualImageImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataCultureBodyKeyVisualPrimaryKeyVisualImageImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicPayContentsDataLogoIconImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
};


type PrismicPayContentsDataLogoIconImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicPayContentsDataLogoIconImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicPayContentsDataLogoIconImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicPayContentsDataLogoIconImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicTeamContentsDataCultureBodyKeyVisualPrimary = {
  readonly description: Maybe<PrismicStructuredTextType>;
  readonly expanded: Maybe<Scalars['Boolean']>;
  readonly key_visual_image: Maybe<PrismicTeamContentsDataCultureBodyKeyVisualPrimaryKeyVisualImageImageType>;
};

type PrismicPayContentsDataType = {
  readonly body: ReadonlyArray<PrismicPayContentsDataBodySlicesType>;
  readonly logo_icon: Maybe<PrismicPayContentsDataLogoIconImageType>;
};

type PrismicPayContents = Node & {
  readonly data: PrismicPayContentsDataType;
  readonly dataRaw: Scalars['JSON'];
  readonly prismicId: Scalars['ID'];
  readonly alternate_languages: ReadonlyArray<PrismicAlternateLanguageType>;
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
  readonly _previewable: Scalars['ID'];
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type PrismicPayContents_first_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type PrismicPayContents_last_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type PrismicGlobalContentsDataMainBodyCentreSectionPrimaryImageImageThumbnailsType = {
  readonly mobile: Maybe<PrismicImageThumbnailType>;
};

type PrismicTeamContentsDataCultureBodyMemberQuoteCarouselItemsImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
};


type PrismicTeamContentsDataCultureBodyMemberQuoteCarouselItemsImageImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataCultureBodyMemberQuoteCarouselItemsImageImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataCultureBodyMemberQuoteCarouselItemsImageImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataCultureBodyMemberQuoteCarouselItemsImageImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicTeamContentsDataCultureBodyMemberQuoteCarouselItem = {
  readonly image: Maybe<PrismicTeamContentsDataCultureBodyMemberQuoteCarouselItemsImageImageType>;
  readonly quote: Maybe<Scalars['String']>;
  readonly who: Maybe<Scalars['String']>;
};

type PrismicGlobalContentsDataMainBodyCentreSectionPrimaryImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  readonly thumbnails: Maybe<PrismicGlobalContentsDataMainBodyCentreSectionPrimaryImageImageThumbnailsType>;
};


type PrismicGlobalContentsDataMainBodyCentreSectionPrimaryImageImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicGlobalContentsDataMainBodyCentreSectionPrimaryImageImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicGlobalContentsDataMainBodyCentreSectionPrimaryImageImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicGlobalContentsDataMainBodyCentreSectionPrimaryImageImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicGlobalContentsDataMainBodyCentreSectionPrimary = {
  readonly image: Maybe<PrismicGlobalContentsDataMainBodyCentreSectionPrimaryImageImageType>;
  readonly text: Maybe<PrismicStructuredTextType>;
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicTeamContentsDataCultureBodyTitleAndDescriptionPrimary = {
  readonly description: Maybe<PrismicStructuredTextType>;
  readonly inverted: Maybe<Scalars['Boolean']>;
  readonly key_text: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicLinkType>;
  readonly link_text: Maybe<Scalars['String']>;
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicGlobalContentsDataMainBodyDownloadSectionPrimary = {
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicTeamContentsDataCultureBodyTitleAndIllustrationPrimaryIllustrationImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
};


type PrismicTeamContentsDataCultureBodyTitleAndIllustrationPrimaryIllustrationImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataCultureBodyTitleAndIllustrationPrimaryIllustrationImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataCultureBodyTitleAndIllustrationPrimaryIllustrationImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataCultureBodyTitleAndIllustrationPrimaryIllustrationImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicGlobalContentsDataMainBodyHeroSectionPrimaryBackgroundImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
};


type PrismicGlobalContentsDataMainBodyHeroSectionPrimaryBackgroundImageImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicGlobalContentsDataMainBodyHeroSectionPrimaryBackgroundImageImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicGlobalContentsDataMainBodyHeroSectionPrimaryBackgroundImageImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicGlobalContentsDataMainBodyHeroSectionPrimaryBackgroundImageImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicGlobalContentsDataMainBodyHeroSectionPrimarySideImageImageThumbnailsType = {
  readonly mobile: Maybe<PrismicImageThumbnailType>;
};

type PrismicTeamContentsDataCultureBodyTitleAndIllustrationPrimary = {
  readonly illustration: Maybe<PrismicTeamContentsDataCultureBodyTitleAndIllustrationPrimaryIllustrationImageType>;
  readonly inverted: Maybe<Scalars['Boolean']>;
  readonly key_text: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicLinkType>;
  readonly link_text: Maybe<Scalars['String']>;
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicGlobalContentsDataMainBodyHeroSectionPrimarySideImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  readonly thumbnails: Maybe<PrismicGlobalContentsDataMainBodyHeroSectionPrimarySideImageImageThumbnailsType>;
};


type PrismicGlobalContentsDataMainBodyHeroSectionPrimarySideImageImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicGlobalContentsDataMainBodyHeroSectionPrimarySideImageImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicGlobalContentsDataMainBodyHeroSectionPrimarySideImageImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicGlobalContentsDataMainBodyHeroSectionPrimarySideImageImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicGlobalContentsDataMainBodyHeroSectionPrimary = {
  readonly background_color: Maybe<Scalars['String']>;
  readonly background_image: Maybe<PrismicGlobalContentsDataMainBodyHeroSectionPrimaryBackgroundImageImageType>;
  readonly side_image: Maybe<PrismicGlobalContentsDataMainBodyHeroSectionPrimarySideImageImageType>;
  readonly text: Maybe<PrismicStructuredTextType>;
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicTeamContentsDataCultureBodyWideBannerPrimaryThumbnailImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
};


type PrismicTeamContentsDataCultureBodyWideBannerPrimaryThumbnailImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataCultureBodyWideBannerPrimaryThumbnailImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataCultureBodyWideBannerPrimaryThumbnailImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataCultureBodyWideBannerPrimaryThumbnailImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicTeamContentsDataCultureBodyWideBannerPrimary = {
  readonly background_color: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicLinkType>;
  readonly link_text: Maybe<Scalars['String']>;
  readonly thumbnail: Maybe<PrismicTeamContentsDataCultureBodyWideBannerPrimaryThumbnailImageType>;
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicTeamContentsDataCultureBodyBenefit = PrismicSliceType & {
  readonly items: ReadonlyArray<PrismicTeamContentsDataCultureBodyBenefitItem>;
  readonly primary: PrismicTeamContentsDataCultureBodyBenefitPrimary;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataCultureBodyDivider = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataCultureBodyHowWeWork = PrismicSliceType & {
  readonly items: ReadonlyArray<PrismicTeamContentsDataCultureBodyHowWeWorkItem>;
  readonly primary: PrismicTeamContentsDataCultureBodyHowWeWorkPrimary;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataCultureBodyIllustrationAndDescription = PrismicSliceType & {
  readonly primary: PrismicTeamContentsDataCultureBodyIllustrationAndDescriptionPrimary;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataCultureBodyKeyVisual = PrismicSliceType & {
  readonly primary: PrismicTeamContentsDataCultureBodyKeyVisualPrimary;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataCultureBodyMemberQuoteCarousel = PrismicSliceType & {
  readonly items: ReadonlyArray<PrismicTeamContentsDataCultureBodyMemberQuoteCarouselItem>;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataCultureBodyTitleAndDescription = PrismicSliceType & {
  readonly primary: PrismicTeamContentsDataCultureBodyTitleAndDescriptionPrimary;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataCultureBodyTitleAndIllustration = PrismicSliceType & {
  readonly primary: PrismicTeamContentsDataCultureBodyTitleAndIllustrationPrimary;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataCultureBodyWideBanner = PrismicSliceType & {
  readonly primary: PrismicTeamContentsDataCultureBodyWideBannerPrimary;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicGlobalContentsDataMainBodyIllustrationSectionPrimaryImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
};


type PrismicGlobalContentsDataMainBodyIllustrationSectionPrimaryImageImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicGlobalContentsDataMainBodyIllustrationSectionPrimaryImageImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicGlobalContentsDataMainBodyIllustrationSectionPrimaryImageImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicGlobalContentsDataMainBodyIllustrationSectionPrimaryImageImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicTeamContentsDataCultureBodySlicesType = PrismicTeamContentsDataCultureBodyBenefit | PrismicTeamContentsDataCultureBodyDivider | PrismicTeamContentsDataCultureBodyHowWeWork | PrismicTeamContentsDataCultureBodyIllustrationAndDescription | PrismicTeamContentsDataCultureBodyKeyVisual | PrismicTeamContentsDataCultureBodyMemberQuoteCarousel | PrismicTeamContentsDataCultureBodyTitleAndDescription | PrismicTeamContentsDataCultureBodyTitleAndIllustration | PrismicTeamContentsDataCultureBodyWideBanner;

type PrismicGlobalContentsDataMainBodyIllustrationSectionPrimary = {
  readonly image: Maybe<PrismicGlobalContentsDataMainBodyIllustrationSectionPrimaryImageImageType>;
  readonly inverted: Maybe<Scalars['Boolean']>;
  readonly text: Maybe<PrismicStructuredTextType>;
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicTeamContentsDataCulturePageMetaImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
};


type PrismicTeamContentsDataCulturePageMetaImageImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataCulturePageMetaImageImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataCulturePageMetaImageImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataCulturePageMetaImageImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicGlobalContentsDataMainBodyMockupSectionItem = {
  readonly icon: Maybe<Scalars['String']>;
  readonly text: Maybe<Scalars['String']>;
};

type PrismicGlobalContentsDataMainBodyMockupSectionPrimary = {
  readonly background_color: Maybe<Scalars['String']>;
  readonly inverted: Maybe<Scalars['Boolean']>;
  readonly phone_mockup_component: Maybe<Scalars['String']>;
  readonly text: Maybe<PrismicStructuredTextType>;
  readonly text_highlight_color: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataFaqEntries = {
  readonly answer: Maybe<PrismicStructuredTextType>;
  readonly question: Maybe<Scalars['String']>;
};

type PrismicGlobalContentsDataMainBodyParallaxSectionPrimaryBackgroundImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
};


type PrismicGlobalContentsDataMainBodyParallaxSectionPrimaryBackgroundImageImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicGlobalContentsDataMainBodyParallaxSectionPrimaryBackgroundImageImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicGlobalContentsDataMainBodyParallaxSectionPrimaryBackgroundImageImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicGlobalContentsDataMainBodyParallaxSectionPrimaryBackgroundImageImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicTeamContentsDataJobsPageMetaImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
};


type PrismicTeamContentsDataJobsPageMetaImageImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataJobsPageMetaImageImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataJobsPageMetaImageImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataJobsPageMetaImageImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicGlobalContentsDataMainBodyParallaxSectionPrimary = {
  readonly background_image: Maybe<PrismicGlobalContentsDataMainBodyParallaxSectionPrimaryBackgroundImageImageType>;
  readonly title: Maybe<PrismicStructuredTextType>;
  readonly top_icon: Maybe<Scalars['String']>;
  readonly top_text: Maybe<PrismicStructuredTextType>;
};

type PrismicGlobalContentsDataMainBodyPopularSectionPrimary = {
  readonly more_button: Maybe<Scalars['String']>;
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicTeamContentsDataLifeBodyKeyVisualPrimaryKeyVisualImageImageThumbnailsType = {
  readonly portrait: Maybe<PrismicImageThumbnailType>;
};

type PrismicTeamContentsDataLifeBodyKeyVisualPrimaryKeyVisualImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  readonly thumbnails: Maybe<PrismicTeamContentsDataLifeBodyKeyVisualPrimaryKeyVisualImageImageThumbnailsType>;
};


type PrismicTeamContentsDataLifeBodyKeyVisualPrimaryKeyVisualImageImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataLifeBodyKeyVisualPrimaryKeyVisualImageImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataLifeBodyKeyVisualPrimaryKeyVisualImageImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataLifeBodyKeyVisualPrimaryKeyVisualImageImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicTeamContentsDataLifeBodyKeyVisualPrimary = {
  readonly description: Maybe<PrismicStructuredTextType>;
  readonly expanded: Maybe<Scalars['Boolean']>;
  readonly key_visual_image: Maybe<PrismicTeamContentsDataLifeBodyKeyVisualPrimaryKeyVisualImageImageType>;
};

type PrismicGlobalContentsDataMainBodyReviewSectionPrimaryImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
};


type PrismicGlobalContentsDataMainBodyReviewSectionPrimaryImageImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicGlobalContentsDataMainBodyReviewSectionPrimaryImageImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicGlobalContentsDataMainBodyReviewSectionPrimaryImageImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicGlobalContentsDataMainBodyReviewSectionPrimaryImageImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicGlobalContentsDataMainBodyReviewSectionItem = {
  readonly content: Maybe<PrismicStructuredTextType>;
  readonly text_highlight_color: Maybe<Scalars['String']>;
  readonly user_name: Maybe<Scalars['String']>;
  readonly user_region: Maybe<Scalars['String']>;
};

type PrismicGlobalContentsDataMainBodyReviewSectionPrimary = {
  readonly background_color: Maybe<Scalars['String']>;
  readonly image: Maybe<PrismicGlobalContentsDataMainBodyReviewSectionPrimaryImageImageType>;
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicTeamContentsDataLifeBodyLifeContentItemsThumbnailImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
};


type PrismicTeamContentsDataLifeBodyLifeContentItemsThumbnailImageImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataLifeBodyLifeContentItemsThumbnailImageImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataLifeBodyLifeContentItemsThumbnailImageImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataLifeBodyLifeContentItemsThumbnailImageImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicGlobalContentsDataMainBodyCentreSection = PrismicSliceType & {
  readonly primary: PrismicGlobalContentsDataMainBodyCentreSectionPrimary;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicGlobalContentsDataMainBodyDownloadSection = PrismicSliceType & {
  readonly primary: PrismicGlobalContentsDataMainBodyDownloadSectionPrimary;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicGlobalContentsDataMainBodyHeroSection = PrismicSliceType & {
  readonly primary: PrismicGlobalContentsDataMainBodyHeroSectionPrimary;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicGlobalContentsDataMainBodyIllustrationSection = PrismicSliceType & {
  readonly primary: PrismicGlobalContentsDataMainBodyIllustrationSectionPrimary;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicGlobalContentsDataMainBodyMockupSection = PrismicSliceType & {
  readonly items: ReadonlyArray<PrismicGlobalContentsDataMainBodyMockupSectionItem>;
  readonly primary: PrismicGlobalContentsDataMainBodyMockupSectionPrimary;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicGlobalContentsDataMainBodyParallaxSection = PrismicSliceType & {
  readonly primary: PrismicGlobalContentsDataMainBodyParallaxSectionPrimary;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicGlobalContentsDataMainBodyPopularSection = PrismicSliceType & {
  readonly primary: PrismicGlobalContentsDataMainBodyPopularSectionPrimary;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicGlobalContentsDataMainBodyReviewSection = PrismicSliceType & {
  readonly items: ReadonlyArray<PrismicGlobalContentsDataMainBodyReviewSectionItem>;
  readonly primary: PrismicGlobalContentsDataMainBodyReviewSectionPrimary;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicGlobalContentsDataMainBodySlicesType = PrismicGlobalContentsDataMainBodyCentreSection | PrismicGlobalContentsDataMainBodyDownloadSection | PrismicGlobalContentsDataMainBodyHeroSection | PrismicGlobalContentsDataMainBodyIllustrationSection | PrismicGlobalContentsDataMainBodyMockupSection | PrismicGlobalContentsDataMainBodyParallaxSection | PrismicGlobalContentsDataMainBodyPopularSection | PrismicGlobalContentsDataMainBodyReviewSection;

type PrismicTeamContentsDataLifeBodyLifeContentItem = {
  readonly thumbnail_description: Maybe<PrismicStructuredTextType>;
  readonly thumbnail_image: Maybe<PrismicTeamContentsDataLifeBodyLifeContentItemsThumbnailImageImageType>;
};

type PrismicTeamContentsDataLifeBodyLifeContentPrimary = {
  readonly body_text: Maybe<PrismicStructuredTextType>;
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicTeamContentsDataLifeBodyKeyVisual = PrismicSliceType & {
  readonly primary: PrismicTeamContentsDataLifeBodyKeyVisualPrimary;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataLifeBodyLifeContent = PrismicSliceType & {
  readonly items: ReadonlyArray<PrismicTeamContentsDataLifeBodyLifeContentItem>;
  readonly primary: PrismicTeamContentsDataLifeBodyLifeContentPrimary;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicGlobalContentsDataMainOpengraphImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
};


type PrismicGlobalContentsDataMainOpengraphImageImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicGlobalContentsDataMainOpengraphImageImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicGlobalContentsDataMainOpengraphImageImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicGlobalContentsDataMainOpengraphImageImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicTeamContentsDataLifeBodySlicesType = PrismicTeamContentsDataLifeBodyKeyVisual | PrismicTeamContentsDataLifeBodyLifeContent;

type PrismicGlobalContentsDataType = {
  readonly about_background_image: Maybe<PrismicGlobalContentsDataAboutBackgroundImageImageType>;
  readonly about_body: ReadonlyArray<PrismicGlobalContentsDataAboutBodySlicesType>;
  readonly about_opengraph_image: Maybe<PrismicGlobalContentsDataAboutOpengraphImageImageType>;
  readonly about_opengraph_image_link: Maybe<Scalars['String']>;
  readonly about_page_description: Maybe<Scalars['String']>;
  readonly about_page_title: Maybe<Scalars['String']>;
  readonly about_title: Maybe<PrismicStructuredTextType>;
  readonly app_store_link: Maybe<Scalars['String']>;
  readonly google_play_link: Maybe<Scalars['String']>;
  readonly main_body: ReadonlyArray<PrismicGlobalContentsDataMainBodySlicesType>;
  readonly main_opengraph_image: Maybe<PrismicGlobalContentsDataMainOpengraphImageImageType>;
  readonly main_opengraph_image_link: Maybe<Scalars['String']>;
  readonly main_page_description: Maybe<Scalars['String']>;
  readonly main_page_title: Maybe<Scalars['String']>;
  readonly one_link: Maybe<Scalars['String']>;
  readonly one_link_button_text: Maybe<Scalars['String']>;
};

type PrismicGlobalContents = Node & {
  readonly data: PrismicGlobalContentsDataType;
  readonly dataRaw: Scalars['JSON'];
  readonly prismicId: Scalars['ID'];
  readonly alternate_languages: ReadonlyArray<PrismicAlternateLanguageType>;
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
  readonly _previewable: Scalars['ID'];
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type PrismicGlobalContents_first_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type PrismicGlobalContents_last_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataLifePageMetaImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
};


type PrismicTeamContentsDataLifePageMetaImageImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataLifePageMetaImageImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataLifePageMetaImageImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataLifePageMetaImageImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicTeamContentsDataMainBodyBenefitItem = {
  readonly description: Maybe<PrismicStructuredTextType>;
  readonly subtext: Maybe<Scalars['String']>;
  readonly subtitle: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataMainBodyBenefitPrimary = {
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicTeamContentsDataMainBodyHowWeWorkItem = {
  readonly description: Maybe<PrismicStructuredTextType>;
  readonly group: Maybe<Scalars['String']>;
  readonly key_text: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataMainBodyHowWeWorkPrimary = {
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicTeamContentsDataMainBodyIllustrationAndDescriptionPrimaryIllustrationImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
};


type PrismicTeamContentsDataMainBodyIllustrationAndDescriptionPrimaryIllustrationImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataMainBodyIllustrationAndDescriptionPrimaryIllustrationImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataMainBodyIllustrationAndDescriptionPrimaryIllustrationImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataMainBodyIllustrationAndDescriptionPrimaryIllustrationImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicTeamContentsDataMainBodyIllustrationAndDescriptionPrimary = {
  readonly description: Maybe<PrismicStructuredTextType>;
  readonly expanded: Maybe<Scalars['Boolean']>;
  readonly illustration: Maybe<PrismicTeamContentsDataMainBodyIllustrationAndDescriptionPrimaryIllustrationImageType>;
  readonly inverted: Maybe<Scalars['Boolean']>;
  readonly link: Maybe<PrismicLinkType>;
  readonly link_text: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataMainBodyKeyVisualPrimaryKeyVisualImageImageThumbnailsType = {
  readonly portrait: Maybe<PrismicImageThumbnailType>;
};

type PrismicTeamContentsDataMainBodyKeyVisualPrimaryKeyVisualImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  readonly thumbnails: Maybe<PrismicTeamContentsDataMainBodyKeyVisualPrimaryKeyVisualImageImageThumbnailsType>;
};


type PrismicTeamContentsDataMainBodyKeyVisualPrimaryKeyVisualImageImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataMainBodyKeyVisualPrimaryKeyVisualImageImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataMainBodyKeyVisualPrimaryKeyVisualImageImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataMainBodyKeyVisualPrimaryKeyVisualImageImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicTeamContentsDataMainBodyKeyVisualPrimary = {
  readonly description: Maybe<PrismicStructuredTextType>;
  readonly expanded: Maybe<Scalars['Boolean']>;
  readonly key_visual_image: Maybe<PrismicTeamContentsDataMainBodyKeyVisualPrimaryKeyVisualImageImageType>;
};

type PrismicTeamContentsDataMainBodyMemberQuoteCarouselItemsImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
};


type PrismicTeamContentsDataMainBodyMemberQuoteCarouselItemsImageImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataMainBodyMemberQuoteCarouselItemsImageImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataMainBodyMemberQuoteCarouselItemsImageImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataMainBodyMemberQuoteCarouselItemsImageImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicTeamContentsDataMainBodyMemberQuoteCarouselItem = {
  readonly image: Maybe<PrismicTeamContentsDataMainBodyMemberQuoteCarouselItemsImageImageType>;
  readonly quote: Maybe<Scalars['String']>;
  readonly who: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataMainBodyTitleAndDescriptionPrimary = {
  readonly description: Maybe<PrismicStructuredTextType>;
  readonly inverted: Maybe<Scalars['Boolean']>;
  readonly key_text: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicLinkType>;
  readonly link_text: Maybe<Scalars['String']>;
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicTeamContentsDataMainBodyTitleAndIllustrationPrimaryIllustrationImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
};


type PrismicTeamContentsDataMainBodyTitleAndIllustrationPrimaryIllustrationImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataMainBodyTitleAndIllustrationPrimaryIllustrationImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataMainBodyTitleAndIllustrationPrimaryIllustrationImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataMainBodyTitleAndIllustrationPrimaryIllustrationImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicTeamContentsDataMainBodyTitleAndIllustrationPrimary = {
  readonly illustration: Maybe<PrismicTeamContentsDataMainBodyTitleAndIllustrationPrimaryIllustrationImageType>;
  readonly inverted: Maybe<Scalars['Boolean']>;
  readonly key_text: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicLinkType>;
  readonly link_text: Maybe<Scalars['String']>;
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicTeamContentsDataMainBodyWideBannerPrimaryThumbnailImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
};


type PrismicTeamContentsDataMainBodyWideBannerPrimaryThumbnailImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataMainBodyWideBannerPrimaryThumbnailImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataMainBodyWideBannerPrimaryThumbnailImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataMainBodyWideBannerPrimaryThumbnailImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicTeamContentsDataMainBodyWideBannerPrimary = {
  readonly background_color: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicLinkType>;
  readonly link_text: Maybe<Scalars['String']>;
  readonly thumbnail: Maybe<PrismicTeamContentsDataMainBodyWideBannerPrimaryThumbnailImageType>;
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicTeamContentsDataMainBodyBenefit = PrismicSliceType & {
  readonly items: ReadonlyArray<PrismicTeamContentsDataMainBodyBenefitItem>;
  readonly primary: PrismicTeamContentsDataMainBodyBenefitPrimary;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataMainBodyDivider = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataMainBodyHowWeWork = PrismicSliceType & {
  readonly items: ReadonlyArray<PrismicTeamContentsDataMainBodyHowWeWorkItem>;
  readonly primary: PrismicTeamContentsDataMainBodyHowWeWorkPrimary;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataMainBodyIllustrationAndDescription = PrismicSliceType & {
  readonly primary: PrismicTeamContentsDataMainBodyIllustrationAndDescriptionPrimary;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataMainBodyKeyVisual = PrismicSliceType & {
  readonly primary: PrismicTeamContentsDataMainBodyKeyVisualPrimary;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataMainBodyMemberQuoteCarousel = PrismicSliceType & {
  readonly items: ReadonlyArray<PrismicTeamContentsDataMainBodyMemberQuoteCarouselItem>;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataMainBodyTitleAndDescription = PrismicSliceType & {
  readonly primary: PrismicTeamContentsDataMainBodyTitleAndDescriptionPrimary;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataMainBodyTitleAndIllustration = PrismicSliceType & {
  readonly primary: PrismicTeamContentsDataMainBodyTitleAndIllustrationPrimary;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataMainBodyWideBanner = PrismicSliceType & {
  readonly primary: PrismicTeamContentsDataMainBodyWideBannerPrimary;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataMainBodySlicesType = PrismicTeamContentsDataMainBodyBenefit | PrismicTeamContentsDataMainBodyDivider | PrismicTeamContentsDataMainBodyHowWeWork | PrismicTeamContentsDataMainBodyIllustrationAndDescription | PrismicTeamContentsDataMainBodyKeyVisual | PrismicTeamContentsDataMainBodyMemberQuoteCarousel | PrismicTeamContentsDataMainBodyTitleAndDescription | PrismicTeamContentsDataMainBodyTitleAndIllustration | PrismicTeamContentsDataMainBodyWideBanner;

type PrismicTeamContentsDataMainPageMetaImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
};


type PrismicTeamContentsDataMainPageMetaImageImageType_urlArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataMainPageMetaImageImageType_fixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParamsInput>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataMainPageMetaImageImageType_fluidArgs = {
  imgixParams?: Maybe<ImgixParamsInput>;
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  srcSetBreakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  placeholderImgixParams?: Maybe<ImgixParamsInput>;
};


type PrismicTeamContentsDataMainPageMetaImageImageType_gatsbyImageDataArgs = {
  layout: Maybe<GatsbyImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  outputPixelDensities: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  backgroundColor: Maybe<Scalars['String']>;
  imgixParams: Maybe<ImgixParamsInput>;
  placeholderImgixParams: Maybe<ImgixParamsInput>;
  placeholder: Maybe<ImgixPlaceholder>;
  widthTolerance?: Maybe<Scalars['Float']>;
  srcSetMinWidth?: Maybe<Scalars['Int']>;
  srcSetMaxWidth?: Maybe<Scalars['Int']>;
};

type PrismicTeamContentsDataNotfoundPageLinkGroup = {
  readonly display_text: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicLinkType>;
};

type PrismicTeamContentsDataType = {
  readonly completed_page_content: Maybe<PrismicStructuredTextType>;
  readonly completed_page_link_group: Maybe<ReadonlyArray<Maybe<PrismicTeamContentsDataCompletedPageLinkGroup>>>;
  readonly culture_body: ReadonlyArray<PrismicTeamContentsDataCultureBodySlicesType>;
  readonly culture_page_meta_description: Maybe<Scalars['String']>;
  readonly culture_page_meta_image: Maybe<PrismicTeamContentsDataCulturePageMetaImageImageType>;
  readonly culture_page_meta_title: Maybe<Scalars['String']>;
  readonly culture_page_title: Maybe<PrismicStructuredTextType>;
  readonly enable_culture_page: Maybe<Scalars['Boolean']>;
  readonly enable_faq_page: Maybe<Scalars['Boolean']>;
  readonly enable_life_page: Maybe<Scalars['Boolean']>;
  readonly faq_entries: Maybe<ReadonlyArray<Maybe<PrismicTeamContentsDataFaqEntries>>>;
  readonly faq_page_meta_description: Maybe<Scalars['String']>;
  readonly faq_page_meta_title: Maybe<Scalars['String']>;
  readonly faq_page_title: Maybe<PrismicStructuredTextType>;
  readonly fb_app_id: Maybe<Scalars['String']>;
  readonly jobs_page_meta_description: Maybe<Scalars['String']>;
  readonly jobs_page_meta_image: Maybe<PrismicTeamContentsDataJobsPageMetaImageImageType>;
  readonly jobs_page_meta_title: Maybe<Scalars['String']>;
  readonly jobs_page_title: Maybe<PrismicStructuredTextType>;
  readonly life_body: ReadonlyArray<PrismicTeamContentsDataLifeBodySlicesType>;
  readonly life_page_meta_description: Maybe<Scalars['String']>;
  readonly life_page_meta_image: Maybe<PrismicTeamContentsDataLifePageMetaImageImageType>;
  readonly life_page_meta_title: Maybe<Scalars['String']>;
  readonly life_page_title: Maybe<PrismicStructuredTextType>;
  readonly main_body: ReadonlyArray<PrismicTeamContentsDataMainBodySlicesType>;
  readonly main_page_meta_description: Maybe<Scalars['String']>;
  readonly main_page_meta_image: Maybe<PrismicTeamContentsDataMainPageMetaImageImageType>;
  readonly main_page_meta_title: Maybe<Scalars['String']>;
  readonly main_page_title: Maybe<PrismicStructuredTextType>;
  readonly notfound_page_link_group: Maybe<ReadonlyArray<Maybe<PrismicTeamContentsDataNotfoundPageLinkGroup>>>;
  readonly notfound_page_title: Maybe<PrismicStructuredTextType>;
  readonly twitter_site_handle: Maybe<Scalars['String']>;
};

type PrismicTeamContents = Node & {
  readonly data: PrismicTeamContentsDataType;
  readonly dataRaw: Scalars['JSON'];
  readonly prismicId: Scalars['ID'];
  readonly alternate_languages: ReadonlyArray<PrismicAlternateLanguageType>;
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
  readonly _previewable: Scalars['ID'];
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type PrismicTeamContents_first_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type PrismicTeamContents_last_publication_dateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type PrismicAllDocumentTypes = PrismicMbtiTestResult | PrismicMbtiIntro | PrismicMbtiTestQuestion | PrismicAdsIntro | PrismicGlobalContents | PrismicFaq | PrismicMemberProfile | PrismicPayContents | PrismicSiteNavigation | PrismicTeamBanner | PrismicTeamContents | PrismicTeamPage | PrismicTeamsArticle | PrismicTermsAndConditions | PrismicAdvertisementContents;

type LokaliseTranslation = Node & {
  readonly locale: Scalars['String'];
  readonly messages: LokaliseMessages;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type LokaliseMessages = {
  readonly jobs_page__chapter_all: Maybe<Scalars['String']>;
  readonly jobs_page__employment_type_intern: Maybe<Scalars['String']>;
  readonly jobs_page__employment_type_fulltime: Maybe<Scalars['String']>;
  readonly jobs_page__employment_type_contractor: Maybe<Scalars['String']>;
  readonly jobs_page__employment_type_all: Maybe<Scalars['String']>;
  readonly jobs_page__employment_type_assistant: Maybe<Scalars['String']>;
  readonly jobs_page__search: Maybe<Scalars['String']>;
  readonly job_post_list__empty_placeholder__no_results: Maybe<Scalars['String']>;
  readonly job_post_list__empty_placeholder__back_to_list: Maybe<Scalars['String']>;
  readonly job_post_layout__tab_apply: Maybe<Scalars['String']>;
  readonly job_post_layout__tab_view: Maybe<Scalars['String']>;
  readonly job_post_layout__property_karrot_market: Maybe<Scalars['String']>;
  readonly job_post_page__faq: Maybe<Scalars['String']>;
  readonly job_post_page__back_to_list: Maybe<Scalars['String']>;
  readonly job_post_page__external_post_notice: Maybe<Scalars['String']>;
  readonly job_post_page__external_post_link: Maybe<Scalars['String']>;
  readonly job_application_page__field_portpolio_label: Maybe<Scalars['String']>;
  readonly job_application_page__field_phone_label: Maybe<Scalars['String']>;
  readonly job_application_page__field_phone_placeholder: Maybe<Scalars['String']>;
  readonly job_application_page__field_email_label: Maybe<Scalars['String']>;
  readonly job_application_page__field_resume_placeholder: Maybe<Scalars['String']>;
  readonly job_application_page__field_portpolio_placeholder: Maybe<Scalars['String']>;
  readonly job_application_page__field_resume_description: Maybe<Scalars['String']>;
  readonly job_application_page__field_name_label: Maybe<Scalars['String']>;
  readonly job_application_page__field_portpolio_description: Maybe<Scalars['String']>;
  readonly job_application_page__field_name_placeholder: Maybe<Scalars['String']>;
  readonly job_application_page__field_email_placeholder: Maybe<Scalars['String']>;
  readonly job_application_page__field_resume_label: Maybe<Scalars['String']>;
  readonly job_application_page__terms_sensitive_info: Maybe<Scalars['String']>;
  readonly job_application_page__button_submit: Maybe<Scalars['String']>;
  readonly job_application_page__terms_privacy_info: Maybe<Scalars['String']>;
  readonly job_application_page__confirm_apply: Maybe<Scalars['String']>;
  readonly job_post_layout__property_karrot_pay: Maybe<Scalars['String']>;
  readonly job_application_page__alert_completed: Maybe<Scalars['String']>;
  readonly job_application_page__alert_failed: Maybe<Scalars['String']>;
  readonly jobs_page__default_meta_title: Maybe<Scalars['String']>;
  readonly job_post_layout__prior_experience_yes: Maybe<Scalars['String']>;
  readonly job_post_layout__prior_experience_no: Maybe<Scalars['String']>;
  readonly job_post_layout__prior_experience_whatever: Maybe<Scalars['String']>;
  readonly job_application_page__field_file_placeholder: Maybe<Scalars['String']>;
  readonly detail_link__default_label: Maybe<Scalars['String']>;
  readonly form_field__placeholder: Maybe<Scalars['String']>;
  readonly form_field__empty_placeholder: Maybe<Scalars['String']>;
  readonly form_field__organization_name: Maybe<Scalars['String']>;
  readonly form_field__yes_placeholder: Maybe<Scalars['String']>;
  readonly form_field__no_placeholder: Maybe<Scalars['String']>;
};

type PrismicImageFixedType = {
  readonly base64: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly src: Maybe<Scalars['String']>;
  readonly srcSet: Maybe<Scalars['String']>;
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
};

type PrismicImageFluidType = {
  readonly base64: Maybe<Scalars['String']>;
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
  readonly srcSet: Maybe<Scalars['String']>;
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly sizes: Maybe<Scalars['String']>;
};

type Query = {
  readonly site: Maybe<Site>;
  readonly file: Maybe<File>;
  readonly allFile: FileConnection;
  readonly directory: Maybe<Directory>;
  readonly allDirectory: DirectoryConnection;
  readonly allSite: SiteConnection;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly sitePage: Maybe<SitePage>;
  readonly allSitePage: SitePageConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly localSearchJobPosts: Maybe<LocalSearchJobPosts>;
  readonly allLocalSearchJobPosts: LocalSearchJobPostsConnection;
  readonly prismicEmbedType: Maybe<PrismicEmbedType>;
  readonly allPrismicEmbedType: PrismicEmbedTypeConnection;
  readonly prismicTypePathType: Maybe<PrismicTypePathType>;
  readonly allPrismicTypePathType: PrismicTypePathTypeConnection;
  readonly prismicMbtiTestResult: Maybe<PrismicMbtiTestResult>;
  readonly allPrismicMbtiTestResult: PrismicMbtiTestResultConnection;
  readonly prismicMbtiIntro: Maybe<PrismicMbtiIntro>;
  readonly allPrismicMbtiIntro: PrismicMbtiIntroConnection;
  readonly prismicMbtiTestQuestion: Maybe<PrismicMbtiTestQuestion>;
  readonly allPrismicMbtiTestQuestion: PrismicMbtiTestQuestionConnection;
  readonly prismicAdsIntro: Maybe<PrismicAdsIntro>;
  readonly allPrismicAdsIntro: PrismicAdsIntroConnection;
  readonly prismicTeamPage: Maybe<PrismicTeamPage>;
  readonly allPrismicTeamPage: PrismicTeamPageConnection;
  readonly prismicTermsAndConditions: Maybe<PrismicTermsAndConditions>;
  readonly allPrismicTermsAndConditions: PrismicTermsAndConditionsConnection;
  readonly prismicFaq: Maybe<PrismicFaq>;
  readonly allPrismicFaq: PrismicFaqConnection;
  readonly prismicMemberProfile: Maybe<PrismicMemberProfile>;
  readonly allPrismicMemberProfile: PrismicMemberProfileConnection;
  readonly prismicTeamBanner: Maybe<PrismicTeamBanner>;
  readonly allPrismicTeamBanner: PrismicTeamBannerConnection;
  readonly prismicAdvertisementContents: Maybe<PrismicAdvertisementContents>;
  readonly allPrismicAdvertisementContents: PrismicAdvertisementContentsConnection;
  readonly prismicSiteNavigation: Maybe<PrismicSiteNavigation>;
  readonly allPrismicSiteNavigation: PrismicSiteNavigationConnection;
  readonly prismicTeamsArticle: Maybe<PrismicTeamsArticle>;
  readonly allPrismicTeamsArticle: PrismicTeamsArticleConnection;
  readonly prismicPayContents: Maybe<PrismicPayContents>;
  readonly allPrismicPayContents: PrismicPayContentsConnection;
  readonly prismicGlobalContents: Maybe<PrismicGlobalContents>;
  readonly allPrismicGlobalContents: PrismicGlobalContentsConnection;
  readonly prismicTeamContents: Maybe<PrismicTeamContents>;
  readonly allPrismicTeamContents: PrismicTeamContentsConnection;
  readonly lokaliseTranslation: Maybe<LokaliseTranslation>;
  readonly allLokaliseTranslation: LokaliseTranslationConnection;
  readonly jobPost: Maybe<JobPost>;
  readonly allJobPost: JobPostConnection;
  readonly greenhouseJobBoardJob: Maybe<GreenhouseJobBoardJob>;
  readonly allGreenhouseJobBoardJob: GreenhouseJobBoardJobConnection;
  readonly greenhouseJobBoardDepartment: Maybe<GreenhouseJobBoardDepartment>;
  readonly allGreenhouseJobBoardDepartment: GreenhouseJobBoardDepartmentConnection;
};


type Query_siteArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  siteMetadata: Maybe<SiteMetadataFilterInput>;
  port: Maybe<IntQueryOperatorInput>;
  host: Maybe<StringQueryOperatorInput>;
  polyfill: Maybe<BooleanQueryOperatorInput>;
  pathPrefix: Maybe<StringQueryOperatorInput>;
  jsxRuntime: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
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


type Query_allSiteArgs = {
  filter: Maybe<SiteFilterInput>;
  sort: Maybe<SiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteFunctionArgs = {
  functionRoute: Maybe<StringQueryOperatorInput>;
  pluginName: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
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
  pageContext: Maybe<JSONQueryOperatorInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSitePageArgs = {
  filter: Maybe<SitePageFilterInput>;
  sort: Maybe<SitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_sitePluginArgs = {
  resolve: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  version: Maybe<StringQueryOperatorInput>;
  nodeAPIs: Maybe<StringQueryOperatorInput>;
  browserAPIs: Maybe<StringQueryOperatorInput>;
  ssrAPIs: Maybe<StringQueryOperatorInput>;
  pluginFilepath: Maybe<StringQueryOperatorInput>;
  pluginOptions: Maybe<JSONQueryOperatorInput>;
  packageJson: Maybe<JSONQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSitePluginArgs = {
  filter: Maybe<SitePluginFilterInput>;
  sort: Maybe<SitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_siteBuildMetadataArgs = {
  buildTime: Maybe<DateQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: Maybe<SiteBuildMetadataFilterInput>;
  sort: Maybe<SiteBuildMetadataSortInput>;
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


type Query_localSearchJobPostsArgs = {
  name: Maybe<StringQueryOperatorInput>;
  engine: Maybe<StringQueryOperatorInput>;
  index: Maybe<StringQueryOperatorInput>;
  store: Maybe<JSONQueryOperatorInput>;
  publicIndexURL: Maybe<StringQueryOperatorInput>;
  publicStoreURL: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allLocalSearchJobPostsArgs = {
  filter: Maybe<LocalSearchJobPostsFilterInput>;
  sort: Maybe<LocalSearchJobPostsSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicEmbedTypeArgs = {
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allPrismicEmbedTypeArgs = {
  filter: Maybe<PrismicEmbedTypeFilterInput>;
  sort: Maybe<PrismicEmbedTypeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicTypePathTypeArgs = {
  kind: Maybe<StringQueryOperatorInput>;
  path: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allPrismicTypePathTypeArgs = {
  filter: Maybe<PrismicTypePathTypeFilterInput>;
  sort: Maybe<PrismicTypePathTypeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicMbtiTestResultArgs = {
  prismicId: Maybe<IDQueryOperatorInput>;
  alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  first_publication_date: Maybe<DateQueryOperatorInput>;
  href: Maybe<StringQueryOperatorInput>;
  lang: Maybe<StringQueryOperatorInput>;
  last_publication_date: Maybe<DateQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  _previewable: Maybe<IDQueryOperatorInput>;
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
  prismicId: Maybe<IDQueryOperatorInput>;
  alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  first_publication_date: Maybe<DateQueryOperatorInput>;
  href: Maybe<StringQueryOperatorInput>;
  lang: Maybe<StringQueryOperatorInput>;
  last_publication_date: Maybe<DateQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
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


type Query_prismicMbtiTestQuestionArgs = {
  prismicId: Maybe<IDQueryOperatorInput>;
  alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  first_publication_date: Maybe<DateQueryOperatorInput>;
  href: Maybe<StringQueryOperatorInput>;
  lang: Maybe<StringQueryOperatorInput>;
  last_publication_date: Maybe<DateQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
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


type Query_prismicAdsIntroArgs = {
  prismicId: Maybe<IDQueryOperatorInput>;
  alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  first_publication_date: Maybe<DateQueryOperatorInput>;
  href: Maybe<StringQueryOperatorInput>;
  lang: Maybe<StringQueryOperatorInput>;
  last_publication_date: Maybe<DateQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  _previewable: Maybe<IDQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allPrismicAdsIntroArgs = {
  filter: Maybe<PrismicAdsIntroFilterInput>;
  sort: Maybe<PrismicAdsIntroSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicTeamPageArgs = {
  prismicId: Maybe<IDQueryOperatorInput>;
  alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  first_publication_date: Maybe<DateQueryOperatorInput>;
  href: Maybe<StringQueryOperatorInput>;
  lang: Maybe<StringQueryOperatorInput>;
  last_publication_date: Maybe<DateQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  _previewable: Maybe<IDQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allPrismicTeamPageArgs = {
  filter: Maybe<PrismicTeamPageFilterInput>;
  sort: Maybe<PrismicTeamPageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicTermsAndConditionsArgs = {
  uid: Maybe<StringQueryOperatorInput>;
  data: Maybe<PrismicTermsAndConditionsDataTypeFilterInput>;
  dataRaw: Maybe<JSONQueryOperatorInput>;
  prismicId: Maybe<IDQueryOperatorInput>;
  alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  first_publication_date: Maybe<DateQueryOperatorInput>;
  href: Maybe<StringQueryOperatorInput>;
  lang: Maybe<StringQueryOperatorInput>;
  last_publication_date: Maybe<DateQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  _previewable: Maybe<IDQueryOperatorInput>;
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


type Query_prismicFaqArgs = {
  uid: Maybe<StringQueryOperatorInput>;
  data: Maybe<PrismicFaqDataTypeFilterInput>;
  dataRaw: Maybe<JSONQueryOperatorInput>;
  prismicId: Maybe<IDQueryOperatorInput>;
  alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  first_publication_date: Maybe<DateQueryOperatorInput>;
  href: Maybe<StringQueryOperatorInput>;
  lang: Maybe<StringQueryOperatorInput>;
  last_publication_date: Maybe<DateQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  _previewable: Maybe<IDQueryOperatorInput>;
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


type Query_prismicMemberProfileArgs = {
  data: Maybe<PrismicMemberProfileDataTypeFilterInput>;
  dataRaw: Maybe<JSONQueryOperatorInput>;
  prismicId: Maybe<IDQueryOperatorInput>;
  alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  first_publication_date: Maybe<DateQueryOperatorInput>;
  href: Maybe<StringQueryOperatorInput>;
  lang: Maybe<StringQueryOperatorInput>;
  last_publication_date: Maybe<DateQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  _previewable: Maybe<IDQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allPrismicMemberProfileArgs = {
  filter: Maybe<PrismicMemberProfileFilterInput>;
  sort: Maybe<PrismicMemberProfileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicTeamBannerArgs = {
  data: Maybe<PrismicTeamBannerDataTypeFilterInput>;
  dataRaw: Maybe<JSONQueryOperatorInput>;
  prismicId: Maybe<IDQueryOperatorInput>;
  alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  first_publication_date: Maybe<DateQueryOperatorInput>;
  href: Maybe<StringQueryOperatorInput>;
  lang: Maybe<StringQueryOperatorInput>;
  last_publication_date: Maybe<DateQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  _previewable: Maybe<IDQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allPrismicTeamBannerArgs = {
  filter: Maybe<PrismicTeamBannerFilterInput>;
  sort: Maybe<PrismicTeamBannerSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicAdvertisementContentsArgs = {
  dataRaw: Maybe<JSONQueryOperatorInput>;
  prismicId: Maybe<IDQueryOperatorInput>;
  alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  first_publication_date: Maybe<DateQueryOperatorInput>;
  href: Maybe<StringQueryOperatorInput>;
  lang: Maybe<StringQueryOperatorInput>;
  last_publication_date: Maybe<DateQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  _previewable: Maybe<IDQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allPrismicAdvertisementContentsArgs = {
  filter: Maybe<PrismicAdvertisementContentsFilterInput>;
  sort: Maybe<PrismicAdvertisementContentsSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicSiteNavigationArgs = {
  uid: Maybe<StringQueryOperatorInput>;
  data: Maybe<PrismicSiteNavigationDataTypeFilterInput>;
  dataRaw: Maybe<JSONQueryOperatorInput>;
  prismicId: Maybe<IDQueryOperatorInput>;
  alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  first_publication_date: Maybe<DateQueryOperatorInput>;
  href: Maybe<StringQueryOperatorInput>;
  lang: Maybe<StringQueryOperatorInput>;
  last_publication_date: Maybe<DateQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  _previewable: Maybe<IDQueryOperatorInput>;
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


type Query_prismicTeamsArticleArgs = {
  uid: Maybe<StringQueryOperatorInput>;
  data: Maybe<PrismicTeamsArticleDataTypeFilterInput>;
  dataRaw: Maybe<JSONQueryOperatorInput>;
  prismicId: Maybe<IDQueryOperatorInput>;
  alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  first_publication_date: Maybe<DateQueryOperatorInput>;
  href: Maybe<StringQueryOperatorInput>;
  lang: Maybe<StringQueryOperatorInput>;
  last_publication_date: Maybe<DateQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  _previewable: Maybe<IDQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allPrismicTeamsArticleArgs = {
  filter: Maybe<PrismicTeamsArticleFilterInput>;
  sort: Maybe<PrismicTeamsArticleSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicPayContentsArgs = {
  data: Maybe<PrismicPayContentsDataTypeFilterInput>;
  dataRaw: Maybe<JSONQueryOperatorInput>;
  prismicId: Maybe<IDQueryOperatorInput>;
  alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  first_publication_date: Maybe<DateQueryOperatorInput>;
  href: Maybe<StringQueryOperatorInput>;
  lang: Maybe<StringQueryOperatorInput>;
  last_publication_date: Maybe<DateQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  _previewable: Maybe<IDQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allPrismicPayContentsArgs = {
  filter: Maybe<PrismicPayContentsFilterInput>;
  sort: Maybe<PrismicPayContentsSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicGlobalContentsArgs = {
  data: Maybe<PrismicGlobalContentsDataTypeFilterInput>;
  dataRaw: Maybe<JSONQueryOperatorInput>;
  prismicId: Maybe<IDQueryOperatorInput>;
  alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  first_publication_date: Maybe<DateQueryOperatorInput>;
  href: Maybe<StringQueryOperatorInput>;
  lang: Maybe<StringQueryOperatorInput>;
  last_publication_date: Maybe<DateQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  _previewable: Maybe<IDQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allPrismicGlobalContentsArgs = {
  filter: Maybe<PrismicGlobalContentsFilterInput>;
  sort: Maybe<PrismicGlobalContentsSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_prismicTeamContentsArgs = {
  data: Maybe<PrismicTeamContentsDataTypeFilterInput>;
  dataRaw: Maybe<JSONQueryOperatorInput>;
  prismicId: Maybe<IDQueryOperatorInput>;
  alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  first_publication_date: Maybe<DateQueryOperatorInput>;
  href: Maybe<StringQueryOperatorInput>;
  lang: Maybe<StringQueryOperatorInput>;
  last_publication_date: Maybe<DateQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
  type: Maybe<StringQueryOperatorInput>;
  url: Maybe<StringQueryOperatorInput>;
  _previewable: Maybe<IDQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allPrismicTeamContentsArgs = {
  filter: Maybe<PrismicTeamContentsFilterInput>;
  sort: Maybe<PrismicTeamContentsSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_lokaliseTranslationArgs = {
  locale: Maybe<StringQueryOperatorInput>;
  messages: Maybe<LokaliseMessagesFilterInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allLokaliseTranslationArgs = {
  filter: Maybe<LokaliseTranslationFilterInput>;
  sort: Maybe<LokaliseTranslationSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_jobPostArgs = {
  slug: Maybe<StringQueryOperatorInput>;
  absoluteUrl: Maybe<StringQueryOperatorInput>;
  ghId: Maybe<StringQueryOperatorInput>;
  parentJob: Maybe<GreenhouseJobBoardJobFilterInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  validThrough: Maybe<DateQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  boardToken: Maybe<StringQueryOperatorInput>;
  boardUrl: Maybe<StringQueryOperatorInput>;
  content: Maybe<JobPostContentSectionFilterListInput>;
  rawContent: Maybe<StringQueryOperatorInput>;
  corporate: Maybe<JobCorporateQueryOperatorInput>;
  employmentType: Maybe<JobEmploymentTypeQueryOperatorInput>;
  alternativeCivilianService: Maybe<BooleanQueryOperatorInput>;
  priorExperience: Maybe<JobPriorExperienceQueryOperatorInput>;
  chapter: Maybe<StringQueryOperatorInput>;
  keywords: Maybe<StringQueryOperatorInput>;
  order: Maybe<IntQueryOperatorInput>;
  externalUrl: Maybe<StringQueryOperatorInput>;
  tags: Maybe<StringQueryOperatorInput>;
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


type Query_greenhouseJobBoardJobArgs = {
  ghId: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  boardUrl: Maybe<StringQueryOperatorInput>;
  content: Maybe<StringQueryOperatorInput>;
  updatedAt: Maybe<DateQueryOperatorInput>;
  questions: Maybe<GreenhouseJobBoardJobQuestionFilterListInput>;
  locationQuestions: Maybe<GreenhouseJobBoardJobQuestionFilterListInput>;
  departments: Maybe<GreenhouseJobBoardDepartmentFilterListInput>;
  metadata: Maybe<GreenhouseJobBoardJobCustomFieldMetadataFilterListInput>;
  boardToken: Maybe<StringQueryOperatorInput>;
  childJobPost: Maybe<JobPostFilterInput>;
  childrenJobPost: Maybe<JobPostFilterListInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allGreenhouseJobBoardJobArgs = {
  filter: Maybe<GreenhouseJobBoardJobFilterInput>;
  sort: Maybe<GreenhouseJobBoardJobSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


type Query_greenhouseJobBoardDepartmentArgs = {
  ghId: Maybe<StringQueryOperatorInput>;
  name: Maybe<StringQueryOperatorInput>;
  jobs: Maybe<GreenhouseJobBoardJobFilterListInput>;
  parentDepartment: Maybe<GreenhouseJobBoardDepartmentFilterInput>;
  childDepartments: Maybe<GreenhouseJobBoardDepartmentFilterListInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
};


type Query_allGreenhouseJobBoardDepartmentArgs = {
  filter: Maybe<GreenhouseJobBoardDepartmentFilterInput>;
  sort: Maybe<GreenhouseJobBoardDepartmentSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
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

type SiteMetadataFilterInput = {
  readonly siteUrl: Maybe<StringQueryOperatorInput>;
  readonly siteName: Maybe<StringQueryOperatorInput>;
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

type BooleanQueryOperatorInput = {
  readonly eq: Maybe<Scalars['Boolean']>;
  readonly ne: Maybe<Scalars['Boolean']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type FileGroupConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_maxArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_minArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_sumArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type DirectoryGroupConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_maxArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_minArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_sumArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
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
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'jsxRuntime'
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteGroupConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_maxArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_minArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_sumArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

type SiteFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly siteMetadata: Maybe<SiteMetadataFilterInput>;
  readonly port: Maybe<IntQueryOperatorInput>;
  readonly host: Maybe<StringQueryOperatorInput>;
  readonly polyfill: Maybe<BooleanQueryOperatorInput>;
  readonly pathPrefix: Maybe<StringQueryOperatorInput>;
  readonly jsxRuntime: Maybe<StringQueryOperatorInput>;
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
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteFunctionGroupConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_maxArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_minArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_sumArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

type SiteFunctionFilterInput = {
  readonly functionRoute: Maybe<StringQueryOperatorInput>;
  readonly pluginName: Maybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath: Maybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath: Maybe<StringQueryOperatorInput>;
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

type SitePluginFilterInput = {
  readonly resolve: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly version: Maybe<StringQueryOperatorInput>;
  readonly nodeAPIs: Maybe<StringQueryOperatorInput>;
  readonly browserAPIs: Maybe<StringQueryOperatorInput>;
  readonly ssrAPIs: Maybe<StringQueryOperatorInput>;
  readonly pluginFilepath: Maybe<StringQueryOperatorInput>;
  readonly pluginOptions: Maybe<JSONQueryOperatorInput>;
  readonly packageJson: Maybe<JSONQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
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
  | 'pageContext'
  | 'pluginCreator.resolve'
  | 'pluginCreator.name'
  | 'pluginCreator.version'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.pluginOptions'
  | 'pluginCreator.packageJson'
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

type SitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePageGroupConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_maxArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_minArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_sumArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

type SitePageFilterInput = {
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly internalComponentName: Maybe<StringQueryOperatorInput>;
  readonly componentChunkName: Maybe<StringQueryOperatorInput>;
  readonly matchPath: Maybe<StringQueryOperatorInput>;
  readonly pageContext: Maybe<JSONQueryOperatorInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SitePageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePageFieldsEnum>>>;
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
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
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

type SitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SitePluginGroupConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_maxArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_minArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_sumArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

type SitePluginSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SitePluginFieldsEnum>>>;
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
  | 'buildTime'
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

type SiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type SiteBuildMetadataGroupConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_maxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_minArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_sumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

type SiteBuildMetadataFilterInput = {
  readonly buildTime: Maybe<DateQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type SiteBuildMetadataSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<SiteBuildMetadataFieldsEnum>>>;
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type ImageSharpGroupConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_maxArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_minArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_sumArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

type ImageSharpSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<ImageSharpFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type LocalSearchJobPostsConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<LocalSearchJobPostsEdge>;
  readonly nodes: ReadonlyArray<LocalSearchJobPosts>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<LocalSearchJobPostsGroupConnection>;
};


type LocalSearchJobPostsConnection_distinctArgs = {
  field: LocalSearchJobPostsFieldsEnum;
};


type LocalSearchJobPostsConnection_maxArgs = {
  field: LocalSearchJobPostsFieldsEnum;
};


type LocalSearchJobPostsConnection_minArgs = {
  field: LocalSearchJobPostsFieldsEnum;
};


type LocalSearchJobPostsConnection_sumArgs = {
  field: LocalSearchJobPostsFieldsEnum;
};


type LocalSearchJobPostsConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: LocalSearchJobPostsFieldsEnum;
};

type LocalSearchJobPostsEdge = {
  readonly next: Maybe<LocalSearchJobPosts>;
  readonly node: LocalSearchJobPosts;
  readonly previous: Maybe<LocalSearchJobPosts>;
};

type LocalSearchJobPostsFieldsEnum =
  | 'name'
  | 'engine'
  | 'index'
  | 'store'
  | 'publicIndexURL'
  | 'publicStoreURL'
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

type LocalSearchJobPostsGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<LocalSearchJobPostsEdge>;
  readonly nodes: ReadonlyArray<LocalSearchJobPosts>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<LocalSearchJobPostsGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type LocalSearchJobPostsGroupConnection_distinctArgs = {
  field: LocalSearchJobPostsFieldsEnum;
};


type LocalSearchJobPostsGroupConnection_maxArgs = {
  field: LocalSearchJobPostsFieldsEnum;
};


type LocalSearchJobPostsGroupConnection_minArgs = {
  field: LocalSearchJobPostsFieldsEnum;
};


type LocalSearchJobPostsGroupConnection_sumArgs = {
  field: LocalSearchJobPostsFieldsEnum;
};


type LocalSearchJobPostsGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: LocalSearchJobPostsFieldsEnum;
};

type LocalSearchJobPostsFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly engine: Maybe<StringQueryOperatorInput>;
  readonly index: Maybe<StringQueryOperatorInput>;
  readonly store: Maybe<JSONQueryOperatorInput>;
  readonly publicIndexURL: Maybe<StringQueryOperatorInput>;
  readonly publicStoreURL: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type LocalSearchJobPostsSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<LocalSearchJobPostsFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicEmbedTypeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicEmbedTypeEdge>;
  readonly nodes: ReadonlyArray<PrismicEmbedType>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicEmbedTypeGroupConnection>;
};


type PrismicEmbedTypeConnection_distinctArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};


type PrismicEmbedTypeConnection_maxArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};


type PrismicEmbedTypeConnection_minArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};


type PrismicEmbedTypeConnection_sumArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};


type PrismicEmbedTypeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicEmbedTypeFieldsEnum;
};

type PrismicEmbedTypeEdge = {
  readonly next: Maybe<PrismicEmbedType>;
  readonly node: PrismicEmbedType;
  readonly previous: Maybe<PrismicEmbedType>;
};

type PrismicEmbedTypeFieldsEnum =
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

type PrismicEmbedTypeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicEmbedTypeEdge>;
  readonly nodes: ReadonlyArray<PrismicEmbedType>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicEmbedTypeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type PrismicEmbedTypeGroupConnection_distinctArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};


type PrismicEmbedTypeGroupConnection_maxArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};


type PrismicEmbedTypeGroupConnection_minArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};


type PrismicEmbedTypeGroupConnection_sumArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};


type PrismicEmbedTypeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicEmbedTypeFieldsEnum;
};

type PrismicEmbedTypeFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicEmbedTypeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicEmbedTypeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicTypePathTypeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicTypePathTypeEdge>;
  readonly nodes: ReadonlyArray<PrismicTypePathType>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicTypePathTypeGroupConnection>;
};


type PrismicTypePathTypeConnection_distinctArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};


type PrismicTypePathTypeConnection_maxArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};


type PrismicTypePathTypeConnection_minArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};


type PrismicTypePathTypeConnection_sumArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};


type PrismicTypePathTypeConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicTypePathTypeFieldsEnum;
};

type PrismicTypePathTypeEdge = {
  readonly next: Maybe<PrismicTypePathType>;
  readonly node: PrismicTypePathType;
  readonly previous: Maybe<PrismicTypePathType>;
};

type PrismicTypePathTypeFieldsEnum =
  | 'kind'
  | 'path'
  | 'type'
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

type PrismicTypePathTypeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicTypePathTypeEdge>;
  readonly nodes: ReadonlyArray<PrismicTypePathType>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicTypePathTypeGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type PrismicTypePathTypeGroupConnection_distinctArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};


type PrismicTypePathTypeGroupConnection_maxArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};


type PrismicTypePathTypeGroupConnection_minArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};


type PrismicTypePathTypeGroupConnection_sumArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};


type PrismicTypePathTypeGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicTypePathTypeFieldsEnum;
};

type PrismicTypePathTypeFilterInput = {
  readonly kind: Maybe<StringQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicTypePathTypeSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicTypePathTypeFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type IDQueryOperatorInput = {
  readonly eq: Maybe<Scalars['ID']>;
  readonly ne: Maybe<Scalars['ID']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['ID']>>>;
};

type PrismicAlternateLanguageTypeFilterListInput = {
  readonly elemMatch: Maybe<PrismicAlternateLanguageTypeFilterInput>;
};

type PrismicAlternateLanguageTypeFilterInput = {
  readonly id: Maybe<IDQueryOperatorInput>;
  readonly uid: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly raw: Maybe<JSONQueryOperatorInput>;
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
  | 'prismicId'
  | 'alternate_languages'
  | 'alternate_languages.id'
  | 'alternate_languages.uid'
  | 'alternate_languages.lang'
  | 'alternate_languages.type'
  | 'alternate_languages.raw'
  | 'first_publication_date'
  | 'href'
  | 'lang'
  | 'last_publication_date'
  | 'tags'
  | 'type'
  | 'url'
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

type PrismicMbtiTestResultGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicMbtiTestResultEdge>;
  readonly nodes: ReadonlyArray<PrismicMbtiTestResult>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicMbtiTestResultGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type PrismicMbtiTestResultGroupConnection_distinctArgs = {
  field: PrismicMbtiTestResultFieldsEnum;
};


type PrismicMbtiTestResultGroupConnection_maxArgs = {
  field: PrismicMbtiTestResultFieldsEnum;
};


type PrismicMbtiTestResultGroupConnection_minArgs = {
  field: PrismicMbtiTestResultFieldsEnum;
};


type PrismicMbtiTestResultGroupConnection_sumArgs = {
  field: PrismicMbtiTestResultFieldsEnum;
};


type PrismicMbtiTestResultGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicMbtiTestResultFieldsEnum;
};

type PrismicMbtiTestResultFilterInput = {
  readonly prismicId: Maybe<IDQueryOperatorInput>;
  readonly alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  readonly first_publication_date: Maybe<DateQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly last_publication_date: Maybe<DateQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly _previewable: Maybe<IDQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicMbtiTestResultSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicMbtiTestResultFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
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
  | 'prismicId'
  | 'alternate_languages'
  | 'alternate_languages.id'
  | 'alternate_languages.uid'
  | 'alternate_languages.lang'
  | 'alternate_languages.type'
  | 'alternate_languages.raw'
  | 'first_publication_date'
  | 'href'
  | 'lang'
  | 'last_publication_date'
  | 'tags'
  | 'type'
  | 'url'
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicMbtiIntroGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type PrismicMbtiIntroGroupConnection_distinctArgs = {
  field: PrismicMbtiIntroFieldsEnum;
};


type PrismicMbtiIntroGroupConnection_maxArgs = {
  field: PrismicMbtiIntroFieldsEnum;
};


type PrismicMbtiIntroGroupConnection_minArgs = {
  field: PrismicMbtiIntroFieldsEnum;
};


type PrismicMbtiIntroGroupConnection_sumArgs = {
  field: PrismicMbtiIntroFieldsEnum;
};


type PrismicMbtiIntroGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicMbtiIntroFieldsEnum;
};

type PrismicMbtiIntroFilterInput = {
  readonly prismicId: Maybe<IDQueryOperatorInput>;
  readonly alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  readonly first_publication_date: Maybe<DateQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly last_publication_date: Maybe<DateQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
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
  | 'prismicId'
  | 'alternate_languages'
  | 'alternate_languages.id'
  | 'alternate_languages.uid'
  | 'alternate_languages.lang'
  | 'alternate_languages.type'
  | 'alternate_languages.raw'
  | 'first_publication_date'
  | 'href'
  | 'lang'
  | 'last_publication_date'
  | 'tags'
  | 'type'
  | 'url'
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicMbtiTestQuestionGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type PrismicMbtiTestQuestionGroupConnection_distinctArgs = {
  field: PrismicMbtiTestQuestionFieldsEnum;
};


type PrismicMbtiTestQuestionGroupConnection_maxArgs = {
  field: PrismicMbtiTestQuestionFieldsEnum;
};


type PrismicMbtiTestQuestionGroupConnection_minArgs = {
  field: PrismicMbtiTestQuestionFieldsEnum;
};


type PrismicMbtiTestQuestionGroupConnection_sumArgs = {
  field: PrismicMbtiTestQuestionFieldsEnum;
};


type PrismicMbtiTestQuestionGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicMbtiTestQuestionFieldsEnum;
};

type PrismicMbtiTestQuestionFilterInput = {
  readonly prismicId: Maybe<IDQueryOperatorInput>;
  readonly alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  readonly first_publication_date: Maybe<DateQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly last_publication_date: Maybe<DateQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
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

type PrismicAdsIntroConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicAdsIntroEdge>;
  readonly nodes: ReadonlyArray<PrismicAdsIntro>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicAdsIntroGroupConnection>;
};


type PrismicAdsIntroConnection_distinctArgs = {
  field: PrismicAdsIntroFieldsEnum;
};


type PrismicAdsIntroConnection_maxArgs = {
  field: PrismicAdsIntroFieldsEnum;
};


type PrismicAdsIntroConnection_minArgs = {
  field: PrismicAdsIntroFieldsEnum;
};


type PrismicAdsIntroConnection_sumArgs = {
  field: PrismicAdsIntroFieldsEnum;
};


type PrismicAdsIntroConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicAdsIntroFieldsEnum;
};

type PrismicAdsIntroEdge = {
  readonly next: Maybe<PrismicAdsIntro>;
  readonly node: PrismicAdsIntro;
  readonly previous: Maybe<PrismicAdsIntro>;
};

type PrismicAdsIntroFieldsEnum =
  | 'prismicId'
  | 'alternate_languages'
  | 'alternate_languages.id'
  | 'alternate_languages.uid'
  | 'alternate_languages.lang'
  | 'alternate_languages.type'
  | 'alternate_languages.raw'
  | 'first_publication_date'
  | 'href'
  | 'lang'
  | 'last_publication_date'
  | 'tags'
  | 'type'
  | 'url'
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

type PrismicAdsIntroGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicAdsIntroEdge>;
  readonly nodes: ReadonlyArray<PrismicAdsIntro>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicAdsIntroGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type PrismicAdsIntroGroupConnection_distinctArgs = {
  field: PrismicAdsIntroFieldsEnum;
};


type PrismicAdsIntroGroupConnection_maxArgs = {
  field: PrismicAdsIntroFieldsEnum;
};


type PrismicAdsIntroGroupConnection_minArgs = {
  field: PrismicAdsIntroFieldsEnum;
};


type PrismicAdsIntroGroupConnection_sumArgs = {
  field: PrismicAdsIntroFieldsEnum;
};


type PrismicAdsIntroGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicAdsIntroFieldsEnum;
};

type PrismicAdsIntroFilterInput = {
  readonly prismicId: Maybe<IDQueryOperatorInput>;
  readonly alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  readonly first_publication_date: Maybe<DateQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly last_publication_date: Maybe<DateQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly _previewable: Maybe<IDQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicAdsIntroSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicAdsIntroFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicTeamPageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicTeamPageEdge>;
  readonly nodes: ReadonlyArray<PrismicTeamPage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicTeamPageGroupConnection>;
};


type PrismicTeamPageConnection_distinctArgs = {
  field: PrismicTeamPageFieldsEnum;
};


type PrismicTeamPageConnection_maxArgs = {
  field: PrismicTeamPageFieldsEnum;
};


type PrismicTeamPageConnection_minArgs = {
  field: PrismicTeamPageFieldsEnum;
};


type PrismicTeamPageConnection_sumArgs = {
  field: PrismicTeamPageFieldsEnum;
};


type PrismicTeamPageConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicTeamPageFieldsEnum;
};

type PrismicTeamPageEdge = {
  readonly next: Maybe<PrismicTeamPage>;
  readonly node: PrismicTeamPage;
  readonly previous: Maybe<PrismicTeamPage>;
};

type PrismicTeamPageFieldsEnum =
  | 'prismicId'
  | 'alternate_languages'
  | 'alternate_languages.id'
  | 'alternate_languages.uid'
  | 'alternate_languages.lang'
  | 'alternate_languages.type'
  | 'alternate_languages.raw'
  | 'first_publication_date'
  | 'href'
  | 'lang'
  | 'last_publication_date'
  | 'tags'
  | 'type'
  | 'url'
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

type PrismicTeamPageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicTeamPageEdge>;
  readonly nodes: ReadonlyArray<PrismicTeamPage>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicTeamPageGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type PrismicTeamPageGroupConnection_distinctArgs = {
  field: PrismicTeamPageFieldsEnum;
};


type PrismicTeamPageGroupConnection_maxArgs = {
  field: PrismicTeamPageFieldsEnum;
};


type PrismicTeamPageGroupConnection_minArgs = {
  field: PrismicTeamPageFieldsEnum;
};


type PrismicTeamPageGroupConnection_sumArgs = {
  field: PrismicTeamPageFieldsEnum;
};


type PrismicTeamPageGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicTeamPageFieldsEnum;
};

type PrismicTeamPageFilterInput = {
  readonly prismicId: Maybe<IDQueryOperatorInput>;
  readonly alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  readonly first_publication_date: Maybe<DateQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly last_publication_date: Maybe<DateQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly _previewable: Maybe<IDQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicTeamPageSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicTeamPageFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicTermsAndConditionsDataTypeFilterInput = {
  readonly content: Maybe<PrismicStructuredTextTypeFilterInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly revision_date: Maybe<DateQueryOperatorInput>;
};

type PrismicStructuredTextTypeFilterInput = {
  readonly text: Maybe<StringQueryOperatorInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly richText: Maybe<PrismicStructuredTextQueryOperatorInput>;
  readonly raw: Maybe<PrismicStructuredTextQueryOperatorInput>;
};

type PrismicStructuredTextQueryOperatorInput = {
  readonly eq: Maybe<Scalars['PrismicStructuredText']>;
  readonly ne: Maybe<Scalars['PrismicStructuredText']>;
  readonly in: Maybe<ReadonlyArray<Maybe<Scalars['PrismicStructuredText']>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<Scalars['PrismicStructuredText']>>>;
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
  | 'uid'
  | 'data.content.text'
  | 'data.content.html'
  | 'data.content.richText'
  | 'data.content.raw'
  | 'data.description'
  | 'data.revision_date'
  | 'dataRaw'
  | 'prismicId'
  | 'alternate_languages'
  | 'alternate_languages.id'
  | 'alternate_languages.uid'
  | 'alternate_languages.lang'
  | 'alternate_languages.type'
  | 'alternate_languages.raw'
  | 'first_publication_date'
  | 'href'
  | 'lang'
  | 'last_publication_date'
  | 'tags'
  | 'type'
  | 'url'
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

type PrismicTermsAndConditionsGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicTermsAndConditionsEdge>;
  readonly nodes: ReadonlyArray<PrismicTermsAndConditions>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicTermsAndConditionsGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type PrismicTermsAndConditionsGroupConnection_distinctArgs = {
  field: PrismicTermsAndConditionsFieldsEnum;
};


type PrismicTermsAndConditionsGroupConnection_maxArgs = {
  field: PrismicTermsAndConditionsFieldsEnum;
};


type PrismicTermsAndConditionsGroupConnection_minArgs = {
  field: PrismicTermsAndConditionsFieldsEnum;
};


type PrismicTermsAndConditionsGroupConnection_sumArgs = {
  field: PrismicTermsAndConditionsFieldsEnum;
};


type PrismicTermsAndConditionsGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicTermsAndConditionsFieldsEnum;
};

type PrismicTermsAndConditionsFilterInput = {
  readonly uid: Maybe<StringQueryOperatorInput>;
  readonly data: Maybe<PrismicTermsAndConditionsDataTypeFilterInput>;
  readonly dataRaw: Maybe<JSONQueryOperatorInput>;
  readonly prismicId: Maybe<IDQueryOperatorInput>;
  readonly alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  readonly first_publication_date: Maybe<DateQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly last_publication_date: Maybe<DateQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly _previewable: Maybe<IDQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicTermsAndConditionsSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicTermsAndConditionsFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicFaqDataTypeFilterInput = {
  readonly entries: Maybe<PrismicFaqDataEntriesFilterListInput>;
};

type PrismicFaqDataEntriesFilterListInput = {
  readonly elemMatch: Maybe<PrismicFaqDataEntriesFilterInput>;
};

type PrismicFaqDataEntriesFilterInput = {
  readonly answer: Maybe<PrismicStructuredTextTypeFilterInput>;
  readonly question: Maybe<StringQueryOperatorInput>;
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
  | 'uid'
  | 'data.entries'
  | 'data.entries.answer.text'
  | 'data.entries.answer.html'
  | 'data.entries.answer.richText'
  | 'data.entries.answer.raw'
  | 'data.entries.question'
  | 'dataRaw'
  | 'prismicId'
  | 'alternate_languages'
  | 'alternate_languages.id'
  | 'alternate_languages.uid'
  | 'alternate_languages.lang'
  | 'alternate_languages.type'
  | 'alternate_languages.raw'
  | 'first_publication_date'
  | 'href'
  | 'lang'
  | 'last_publication_date'
  | 'tags'
  | 'type'
  | 'url'
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

type PrismicFaqGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicFaqEdge>;
  readonly nodes: ReadonlyArray<PrismicFaq>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicFaqGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type PrismicFaqGroupConnection_distinctArgs = {
  field: PrismicFaqFieldsEnum;
};


type PrismicFaqGroupConnection_maxArgs = {
  field: PrismicFaqFieldsEnum;
};


type PrismicFaqGroupConnection_minArgs = {
  field: PrismicFaqFieldsEnum;
};


type PrismicFaqGroupConnection_sumArgs = {
  field: PrismicFaqFieldsEnum;
};


type PrismicFaqGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicFaqFieldsEnum;
};

type PrismicFaqFilterInput = {
  readonly uid: Maybe<StringQueryOperatorInput>;
  readonly data: Maybe<PrismicFaqDataTypeFilterInput>;
  readonly dataRaw: Maybe<JSONQueryOperatorInput>;
  readonly prismicId: Maybe<IDQueryOperatorInput>;
  readonly alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  readonly first_publication_date: Maybe<DateQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly last_publication_date: Maybe<DateQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly _previewable: Maybe<IDQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicFaqSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicFaqFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicMemberProfileDataTypeFilterInput = {
  readonly email: Maybe<StringQueryOperatorInput>;
  readonly image: Maybe<PrismicMemberProfileDataImageImageTypeFilterInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly nickname: Maybe<StringQueryOperatorInput>;
  readonly role: Maybe<StringQueryOperatorInput>;
};

type PrismicMemberProfileDataImageImageTypeFilterInput = {
  readonly alt: Maybe<StringQueryOperatorInput>;
  readonly copyright: Maybe<StringQueryOperatorInput>;
  readonly dimensions: Maybe<PrismicImageDimensionsTypeFilterInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly fixed: Maybe<ImgixFixedFilterInput>;
  readonly fluid: Maybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly localFile: Maybe<FileFilterInput>;
  readonly thumbnails: Maybe<PrismicMemberProfileDataImageImageThumbnailsTypeFilterInput>;
};

type PrismicImageDimensionsTypeFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type ImgixFixedFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type ImgixFluidFilterInput = {
  readonly base64: Maybe<StringQueryOperatorInput>;
  readonly src: Maybe<StringQueryOperatorInput>;
  readonly srcSet: Maybe<StringQueryOperatorInput>;
  readonly srcWebp: Maybe<StringQueryOperatorInput>;
  readonly srcSetWebp: Maybe<StringQueryOperatorInput>;
  readonly sizes: Maybe<StringQueryOperatorInput>;
  readonly aspectRatio: Maybe<FloatQueryOperatorInput>;
};

type PrismicMemberProfileDataImageImageThumbnailsTypeFilterInput = {
  readonly small_banner: Maybe<PrismicImageThumbnailTypeFilterInput>;
  readonly wide_banner: Maybe<PrismicImageThumbnailTypeFilterInput>;
};

type PrismicImageThumbnailTypeFilterInput = {
  readonly alt: Maybe<StringQueryOperatorInput>;
  readonly copyright: Maybe<StringQueryOperatorInput>;
  readonly dimensions: Maybe<PrismicImageDimensionsTypeFilterInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly fixed: Maybe<ImgixFixedFilterInput>;
  readonly fluid: Maybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly localFile: Maybe<FileFilterInput>;
};

type PrismicMemberProfileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicMemberProfileEdge>;
  readonly nodes: ReadonlyArray<PrismicMemberProfile>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicMemberProfileGroupConnection>;
};


type PrismicMemberProfileConnection_distinctArgs = {
  field: PrismicMemberProfileFieldsEnum;
};


type PrismicMemberProfileConnection_maxArgs = {
  field: PrismicMemberProfileFieldsEnum;
};


type PrismicMemberProfileConnection_minArgs = {
  field: PrismicMemberProfileFieldsEnum;
};


type PrismicMemberProfileConnection_sumArgs = {
  field: PrismicMemberProfileFieldsEnum;
};


type PrismicMemberProfileConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicMemberProfileFieldsEnum;
};

type PrismicMemberProfileEdge = {
  readonly next: Maybe<PrismicMemberProfile>;
  readonly node: PrismicMemberProfile;
  readonly previous: Maybe<PrismicMemberProfile>;
};

type PrismicMemberProfileFieldsEnum =
  | 'data.email'
  | 'data.image.alt'
  | 'data.image.copyright'
  | 'data.image.dimensions.width'
  | 'data.image.dimensions.height'
  | 'data.image.url'
  | 'data.image.fixed.base64'
  | 'data.image.fixed.src'
  | 'data.image.fixed.srcSet'
  | 'data.image.fixed.srcWebp'
  | 'data.image.fixed.srcSetWebp'
  | 'data.image.fixed.sizes'
  | 'data.image.fixed.width'
  | 'data.image.fixed.height'
  | 'data.image.fluid.base64'
  | 'data.image.fluid.src'
  | 'data.image.fluid.srcSet'
  | 'data.image.fluid.srcWebp'
  | 'data.image.fluid.srcSetWebp'
  | 'data.image.fluid.sizes'
  | 'data.image.fluid.aspectRatio'
  | 'data.image.gatsbyImageData'
  | 'data.image.localFile.sourceInstanceName'
  | 'data.image.localFile.absolutePath'
  | 'data.image.localFile.relativePath'
  | 'data.image.localFile.extension'
  | 'data.image.localFile.size'
  | 'data.image.localFile.prettySize'
  | 'data.image.localFile.modifiedTime'
  | 'data.image.localFile.accessTime'
  | 'data.image.localFile.changeTime'
  | 'data.image.localFile.birthTime'
  | 'data.image.localFile.root'
  | 'data.image.localFile.dir'
  | 'data.image.localFile.base'
  | 'data.image.localFile.ext'
  | 'data.image.localFile.name'
  | 'data.image.localFile.relativeDirectory'
  | 'data.image.localFile.dev'
  | 'data.image.localFile.mode'
  | 'data.image.localFile.nlink'
  | 'data.image.localFile.uid'
  | 'data.image.localFile.gid'
  | 'data.image.localFile.rdev'
  | 'data.image.localFile.ino'
  | 'data.image.localFile.atimeMs'
  | 'data.image.localFile.mtimeMs'
  | 'data.image.localFile.ctimeMs'
  | 'data.image.localFile.atime'
  | 'data.image.localFile.mtime'
  | 'data.image.localFile.ctime'
  | 'data.image.localFile.birthtime'
  | 'data.image.localFile.birthtimeMs'
  | 'data.image.localFile.blksize'
  | 'data.image.localFile.blocks'
  | 'data.image.localFile.url'
  | 'data.image.localFile.childrenImageSharp'
  | 'data.image.localFile.id'
  | 'data.image.localFile.children'
  | 'data.name'
  | 'data.nickname'
  | 'data.role'
  | 'dataRaw'
  | 'prismicId'
  | 'alternate_languages'
  | 'alternate_languages.id'
  | 'alternate_languages.uid'
  | 'alternate_languages.lang'
  | 'alternate_languages.type'
  | 'alternate_languages.raw'
  | 'first_publication_date'
  | 'href'
  | 'lang'
  | 'last_publication_date'
  | 'tags'
  | 'type'
  | 'url'
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

type PrismicMemberProfileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicMemberProfileEdge>;
  readonly nodes: ReadonlyArray<PrismicMemberProfile>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicMemberProfileGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type PrismicMemberProfileGroupConnection_distinctArgs = {
  field: PrismicMemberProfileFieldsEnum;
};


type PrismicMemberProfileGroupConnection_maxArgs = {
  field: PrismicMemberProfileFieldsEnum;
};


type PrismicMemberProfileGroupConnection_minArgs = {
  field: PrismicMemberProfileFieldsEnum;
};


type PrismicMemberProfileGroupConnection_sumArgs = {
  field: PrismicMemberProfileFieldsEnum;
};


type PrismicMemberProfileGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicMemberProfileFieldsEnum;
};

type PrismicMemberProfileFilterInput = {
  readonly data: Maybe<PrismicMemberProfileDataTypeFilterInput>;
  readonly dataRaw: Maybe<JSONQueryOperatorInput>;
  readonly prismicId: Maybe<IDQueryOperatorInput>;
  readonly alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  readonly first_publication_date: Maybe<DateQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly last_publication_date: Maybe<DateQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly _previewable: Maybe<IDQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicMemberProfileSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicMemberProfileFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicTeamBannerDataTypeFilterInput = {
  readonly left: Maybe<PrismicTeamBannerDataLeftImageTypeFilterInput>;
  readonly right: Maybe<PrismicTeamBannerDataRightImageTypeFilterInput>;
};

type PrismicTeamBannerDataLeftImageTypeFilterInput = {
  readonly alt: Maybe<StringQueryOperatorInput>;
  readonly copyright: Maybe<StringQueryOperatorInput>;
  readonly dimensions: Maybe<PrismicImageDimensionsTypeFilterInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly fixed: Maybe<ImgixFixedFilterInput>;
  readonly fluid: Maybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly localFile: Maybe<FileFilterInput>;
};

type PrismicTeamBannerDataRightImageTypeFilterInput = {
  readonly alt: Maybe<StringQueryOperatorInput>;
  readonly copyright: Maybe<StringQueryOperatorInput>;
  readonly dimensions: Maybe<PrismicImageDimensionsTypeFilterInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly fixed: Maybe<ImgixFixedFilterInput>;
  readonly fluid: Maybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly localFile: Maybe<FileFilterInput>;
};

type PrismicTeamBannerConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicTeamBannerEdge>;
  readonly nodes: ReadonlyArray<PrismicTeamBanner>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicTeamBannerGroupConnection>;
};


type PrismicTeamBannerConnection_distinctArgs = {
  field: PrismicTeamBannerFieldsEnum;
};


type PrismicTeamBannerConnection_maxArgs = {
  field: PrismicTeamBannerFieldsEnum;
};


type PrismicTeamBannerConnection_minArgs = {
  field: PrismicTeamBannerFieldsEnum;
};


type PrismicTeamBannerConnection_sumArgs = {
  field: PrismicTeamBannerFieldsEnum;
};


type PrismicTeamBannerConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicTeamBannerFieldsEnum;
};

type PrismicTeamBannerEdge = {
  readonly next: Maybe<PrismicTeamBanner>;
  readonly node: PrismicTeamBanner;
  readonly previous: Maybe<PrismicTeamBanner>;
};

type PrismicTeamBannerFieldsEnum =
  | 'data.left.alt'
  | 'data.left.copyright'
  | 'data.left.dimensions.width'
  | 'data.left.dimensions.height'
  | 'data.left.url'
  | 'data.left.fixed.base64'
  | 'data.left.fixed.src'
  | 'data.left.fixed.srcSet'
  | 'data.left.fixed.srcWebp'
  | 'data.left.fixed.srcSetWebp'
  | 'data.left.fixed.sizes'
  | 'data.left.fixed.width'
  | 'data.left.fixed.height'
  | 'data.left.fluid.base64'
  | 'data.left.fluid.src'
  | 'data.left.fluid.srcSet'
  | 'data.left.fluid.srcWebp'
  | 'data.left.fluid.srcSetWebp'
  | 'data.left.fluid.sizes'
  | 'data.left.fluid.aspectRatio'
  | 'data.left.gatsbyImageData'
  | 'data.left.localFile.sourceInstanceName'
  | 'data.left.localFile.absolutePath'
  | 'data.left.localFile.relativePath'
  | 'data.left.localFile.extension'
  | 'data.left.localFile.size'
  | 'data.left.localFile.prettySize'
  | 'data.left.localFile.modifiedTime'
  | 'data.left.localFile.accessTime'
  | 'data.left.localFile.changeTime'
  | 'data.left.localFile.birthTime'
  | 'data.left.localFile.root'
  | 'data.left.localFile.dir'
  | 'data.left.localFile.base'
  | 'data.left.localFile.ext'
  | 'data.left.localFile.name'
  | 'data.left.localFile.relativeDirectory'
  | 'data.left.localFile.dev'
  | 'data.left.localFile.mode'
  | 'data.left.localFile.nlink'
  | 'data.left.localFile.uid'
  | 'data.left.localFile.gid'
  | 'data.left.localFile.rdev'
  | 'data.left.localFile.ino'
  | 'data.left.localFile.atimeMs'
  | 'data.left.localFile.mtimeMs'
  | 'data.left.localFile.ctimeMs'
  | 'data.left.localFile.atime'
  | 'data.left.localFile.mtime'
  | 'data.left.localFile.ctime'
  | 'data.left.localFile.birthtime'
  | 'data.left.localFile.birthtimeMs'
  | 'data.left.localFile.blksize'
  | 'data.left.localFile.blocks'
  | 'data.left.localFile.url'
  | 'data.left.localFile.childrenImageSharp'
  | 'data.left.localFile.id'
  | 'data.left.localFile.children'
  | 'data.right.alt'
  | 'data.right.copyright'
  | 'data.right.dimensions.width'
  | 'data.right.dimensions.height'
  | 'data.right.url'
  | 'data.right.fixed.base64'
  | 'data.right.fixed.src'
  | 'data.right.fixed.srcSet'
  | 'data.right.fixed.srcWebp'
  | 'data.right.fixed.srcSetWebp'
  | 'data.right.fixed.sizes'
  | 'data.right.fixed.width'
  | 'data.right.fixed.height'
  | 'data.right.fluid.base64'
  | 'data.right.fluid.src'
  | 'data.right.fluid.srcSet'
  | 'data.right.fluid.srcWebp'
  | 'data.right.fluid.srcSetWebp'
  | 'data.right.fluid.sizes'
  | 'data.right.fluid.aspectRatio'
  | 'data.right.gatsbyImageData'
  | 'data.right.localFile.sourceInstanceName'
  | 'data.right.localFile.absolutePath'
  | 'data.right.localFile.relativePath'
  | 'data.right.localFile.extension'
  | 'data.right.localFile.size'
  | 'data.right.localFile.prettySize'
  | 'data.right.localFile.modifiedTime'
  | 'data.right.localFile.accessTime'
  | 'data.right.localFile.changeTime'
  | 'data.right.localFile.birthTime'
  | 'data.right.localFile.root'
  | 'data.right.localFile.dir'
  | 'data.right.localFile.base'
  | 'data.right.localFile.ext'
  | 'data.right.localFile.name'
  | 'data.right.localFile.relativeDirectory'
  | 'data.right.localFile.dev'
  | 'data.right.localFile.mode'
  | 'data.right.localFile.nlink'
  | 'data.right.localFile.uid'
  | 'data.right.localFile.gid'
  | 'data.right.localFile.rdev'
  | 'data.right.localFile.ino'
  | 'data.right.localFile.atimeMs'
  | 'data.right.localFile.mtimeMs'
  | 'data.right.localFile.ctimeMs'
  | 'data.right.localFile.atime'
  | 'data.right.localFile.mtime'
  | 'data.right.localFile.ctime'
  | 'data.right.localFile.birthtime'
  | 'data.right.localFile.birthtimeMs'
  | 'data.right.localFile.blksize'
  | 'data.right.localFile.blocks'
  | 'data.right.localFile.url'
  | 'data.right.localFile.childrenImageSharp'
  | 'data.right.localFile.id'
  | 'data.right.localFile.children'
  | 'dataRaw'
  | 'prismicId'
  | 'alternate_languages'
  | 'alternate_languages.id'
  | 'alternate_languages.uid'
  | 'alternate_languages.lang'
  | 'alternate_languages.type'
  | 'alternate_languages.raw'
  | 'first_publication_date'
  | 'href'
  | 'lang'
  | 'last_publication_date'
  | 'tags'
  | 'type'
  | 'url'
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

type PrismicTeamBannerGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicTeamBannerEdge>;
  readonly nodes: ReadonlyArray<PrismicTeamBanner>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicTeamBannerGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type PrismicTeamBannerGroupConnection_distinctArgs = {
  field: PrismicTeamBannerFieldsEnum;
};


type PrismicTeamBannerGroupConnection_maxArgs = {
  field: PrismicTeamBannerFieldsEnum;
};


type PrismicTeamBannerGroupConnection_minArgs = {
  field: PrismicTeamBannerFieldsEnum;
};


type PrismicTeamBannerGroupConnection_sumArgs = {
  field: PrismicTeamBannerFieldsEnum;
};


type PrismicTeamBannerGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicTeamBannerFieldsEnum;
};

type PrismicTeamBannerFilterInput = {
  readonly data: Maybe<PrismicTeamBannerDataTypeFilterInput>;
  readonly dataRaw: Maybe<JSONQueryOperatorInput>;
  readonly prismicId: Maybe<IDQueryOperatorInput>;
  readonly alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  readonly first_publication_date: Maybe<DateQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly last_publication_date: Maybe<DateQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly _previewable: Maybe<IDQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicTeamBannerSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicTeamBannerFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicAdvertisementContentsConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicAdvertisementContentsEdge>;
  readonly nodes: ReadonlyArray<PrismicAdvertisementContents>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicAdvertisementContentsGroupConnection>;
};


type PrismicAdvertisementContentsConnection_distinctArgs = {
  field: PrismicAdvertisementContentsFieldsEnum;
};


type PrismicAdvertisementContentsConnection_maxArgs = {
  field: PrismicAdvertisementContentsFieldsEnum;
};


type PrismicAdvertisementContentsConnection_minArgs = {
  field: PrismicAdvertisementContentsFieldsEnum;
};


type PrismicAdvertisementContentsConnection_sumArgs = {
  field: PrismicAdvertisementContentsFieldsEnum;
};


type PrismicAdvertisementContentsConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicAdvertisementContentsFieldsEnum;
};

type PrismicAdvertisementContentsEdge = {
  readonly next: Maybe<PrismicAdvertisementContents>;
  readonly node: PrismicAdvertisementContents;
  readonly previous: Maybe<PrismicAdvertisementContents>;
};

type PrismicAdvertisementContentsFieldsEnum =
  | 'dataRaw'
  | 'prismicId'
  | 'alternate_languages'
  | 'alternate_languages.id'
  | 'alternate_languages.uid'
  | 'alternate_languages.lang'
  | 'alternate_languages.type'
  | 'alternate_languages.raw'
  | 'first_publication_date'
  | 'href'
  | 'lang'
  | 'last_publication_date'
  | 'tags'
  | 'type'
  | 'url'
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

type PrismicAdvertisementContentsGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicAdvertisementContentsEdge>;
  readonly nodes: ReadonlyArray<PrismicAdvertisementContents>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicAdvertisementContentsGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type PrismicAdvertisementContentsGroupConnection_distinctArgs = {
  field: PrismicAdvertisementContentsFieldsEnum;
};


type PrismicAdvertisementContentsGroupConnection_maxArgs = {
  field: PrismicAdvertisementContentsFieldsEnum;
};


type PrismicAdvertisementContentsGroupConnection_minArgs = {
  field: PrismicAdvertisementContentsFieldsEnum;
};


type PrismicAdvertisementContentsGroupConnection_sumArgs = {
  field: PrismicAdvertisementContentsFieldsEnum;
};


type PrismicAdvertisementContentsGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicAdvertisementContentsFieldsEnum;
};

type PrismicAdvertisementContentsFilterInput = {
  readonly dataRaw: Maybe<JSONQueryOperatorInput>;
  readonly prismicId: Maybe<IDQueryOperatorInput>;
  readonly alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  readonly first_publication_date: Maybe<DateQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly last_publication_date: Maybe<DateQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly _previewable: Maybe<IDQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicAdvertisementContentsSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicAdvertisementContentsFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicSiteNavigationDataTypeFilterInput = {
  readonly address: Maybe<PrismicStructuredTextTypeFilterInput>;
  readonly copyright: Maybe<PrismicStructuredTextTypeFilterInput>;
  readonly email: Maybe<PrismicStructuredTextTypeFilterInput>;
  readonly footer_entries: Maybe<PrismicSiteNavigationDataFooterEntriesFilterListInput>;
  readonly header_entries: Maybe<PrismicSiteNavigationDataHeaderEntriesFilterListInput>;
  readonly sns_profiles: Maybe<PrismicSiteNavigationDataSnsProfilesFilterListInput>;
  readonly tel: Maybe<PrismicStructuredTextTypeFilterInput>;
};

type PrismicSiteNavigationDataFooterEntriesFilterListInput = {
  readonly elemMatch: Maybe<PrismicSiteNavigationDataFooterEntriesFilterInput>;
};

type PrismicSiteNavigationDataFooterEntriesFilterInput = {
  readonly display_text: Maybe<StringQueryOperatorInput>;
  readonly group: Maybe<StringQueryOperatorInput>;
  readonly link: Maybe<PrismicLinkTypeFilterInput>;
};

type PrismicLinkTypeFilterInput = {
  readonly link_type: Maybe<PrismicLinkTypeEnumQueryOperatorInput>;
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
  readonly localFile: Maybe<FileFilterInput>;
  readonly raw: Maybe<JSONQueryOperatorInput>;
};

type PrismicLinkTypeEnumQueryOperatorInput = {
  readonly eq: Maybe<PrismicLinkTypeEnum>;
  readonly ne: Maybe<PrismicLinkTypeEnum>;
  readonly in: Maybe<ReadonlyArray<Maybe<PrismicLinkTypeEnum>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<PrismicLinkTypeEnum>>>;
};

type PrismicSiteNavigationDataHeaderEntriesFilterListInput = {
  readonly elemMatch: Maybe<PrismicSiteNavigationDataHeaderEntriesFilterInput>;
};

type PrismicSiteNavigationDataHeaderEntriesFilterInput = {
  readonly display_text: Maybe<StringQueryOperatorInput>;
  readonly group: Maybe<StringQueryOperatorInput>;
  readonly link: Maybe<PrismicLinkTypeFilterInput>;
};

type PrismicSiteNavigationDataSnsProfilesFilterListInput = {
  readonly elemMatch: Maybe<PrismicSiteNavigationDataSnsProfilesFilterInput>;
};

type PrismicSiteNavigationDataSnsProfilesFilterInput = {
  readonly link: Maybe<PrismicLinkTypeFilterInput>;
  readonly service: Maybe<StringQueryOperatorInput>;
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
  | 'uid'
  | 'data.address.text'
  | 'data.address.html'
  | 'data.address.richText'
  | 'data.address.raw'
  | 'data.copyright.text'
  | 'data.copyright.html'
  | 'data.copyright.richText'
  | 'data.copyright.raw'
  | 'data.email.text'
  | 'data.email.html'
  | 'data.email.richText'
  | 'data.email.raw'
  | 'data.footer_entries'
  | 'data.footer_entries.display_text'
  | 'data.footer_entries.group'
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
  | 'data.header_entries'
  | 'data.header_entries.display_text'
  | 'data.header_entries.group'
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
  | 'data.sns_profiles'
  | 'data.sns_profiles.link.link_type'
  | 'data.sns_profiles.link.isBroken'
  | 'data.sns_profiles.link.url'
  | 'data.sns_profiles.link.target'
  | 'data.sns_profiles.link.size'
  | 'data.sns_profiles.link.id'
  | 'data.sns_profiles.link.type'
  | 'data.sns_profiles.link.tags'
  | 'data.sns_profiles.link.lang'
  | 'data.sns_profiles.link.slug'
  | 'data.sns_profiles.link.uid'
  | 'data.sns_profiles.link.raw'
  | 'data.sns_profiles.service'
  | 'data.tel.text'
  | 'data.tel.html'
  | 'data.tel.richText'
  | 'data.tel.raw'
  | 'dataRaw'
  | 'prismicId'
  | 'alternate_languages'
  | 'alternate_languages.id'
  | 'alternate_languages.uid'
  | 'alternate_languages.lang'
  | 'alternate_languages.type'
  | 'alternate_languages.raw'
  | 'first_publication_date'
  | 'href'
  | 'lang'
  | 'last_publication_date'
  | 'tags'
  | 'type'
  | 'url'
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

type PrismicSiteNavigationGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicSiteNavigationEdge>;
  readonly nodes: ReadonlyArray<PrismicSiteNavigation>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicSiteNavigationGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type PrismicSiteNavigationGroupConnection_distinctArgs = {
  field: PrismicSiteNavigationFieldsEnum;
};


type PrismicSiteNavigationGroupConnection_maxArgs = {
  field: PrismicSiteNavigationFieldsEnum;
};


type PrismicSiteNavigationGroupConnection_minArgs = {
  field: PrismicSiteNavigationFieldsEnum;
};


type PrismicSiteNavigationGroupConnection_sumArgs = {
  field: PrismicSiteNavigationFieldsEnum;
};


type PrismicSiteNavigationGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicSiteNavigationFieldsEnum;
};

type PrismicSiteNavigationFilterInput = {
  readonly uid: Maybe<StringQueryOperatorInput>;
  readonly data: Maybe<PrismicSiteNavigationDataTypeFilterInput>;
  readonly dataRaw: Maybe<JSONQueryOperatorInput>;
  readonly prismicId: Maybe<IDQueryOperatorInput>;
  readonly alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  readonly first_publication_date: Maybe<DateQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly last_publication_date: Maybe<DateQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly _previewable: Maybe<IDQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicSiteNavigationSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicSiteNavigationFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicTeamsArticleDataTypeFilterInput = {
  readonly page_meta_description: Maybe<StringQueryOperatorInput>;
  readonly page_meta_image: Maybe<PrismicTeamsArticleDataPageMetaImageImageTypeFilterInput>;
  readonly page_meta_title: Maybe<StringQueryOperatorInput>;
  readonly page_title: Maybe<PrismicStructuredTextTypeFilterInput>;
};

type PrismicTeamsArticleDataPageMetaImageImageTypeFilterInput = {
  readonly alt: Maybe<StringQueryOperatorInput>;
  readonly copyright: Maybe<StringQueryOperatorInput>;
  readonly dimensions: Maybe<PrismicImageDimensionsTypeFilterInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly fixed: Maybe<ImgixFixedFilterInput>;
  readonly fluid: Maybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly localFile: Maybe<FileFilterInput>;
};

type PrismicTeamsArticleConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicTeamsArticleEdge>;
  readonly nodes: ReadonlyArray<PrismicTeamsArticle>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicTeamsArticleGroupConnection>;
};


type PrismicTeamsArticleConnection_distinctArgs = {
  field: PrismicTeamsArticleFieldsEnum;
};


type PrismicTeamsArticleConnection_maxArgs = {
  field: PrismicTeamsArticleFieldsEnum;
};


type PrismicTeamsArticleConnection_minArgs = {
  field: PrismicTeamsArticleFieldsEnum;
};


type PrismicTeamsArticleConnection_sumArgs = {
  field: PrismicTeamsArticleFieldsEnum;
};


type PrismicTeamsArticleConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicTeamsArticleFieldsEnum;
};

type PrismicTeamsArticleEdge = {
  readonly next: Maybe<PrismicTeamsArticle>;
  readonly node: PrismicTeamsArticle;
  readonly previous: Maybe<PrismicTeamsArticle>;
};

type PrismicTeamsArticleFieldsEnum =
  | 'uid'
  | 'data.page_meta_description'
  | 'data.page_meta_image.alt'
  | 'data.page_meta_image.copyright'
  | 'data.page_meta_image.dimensions.width'
  | 'data.page_meta_image.dimensions.height'
  | 'data.page_meta_image.url'
  | 'data.page_meta_image.fixed.base64'
  | 'data.page_meta_image.fixed.src'
  | 'data.page_meta_image.fixed.srcSet'
  | 'data.page_meta_image.fixed.srcWebp'
  | 'data.page_meta_image.fixed.srcSetWebp'
  | 'data.page_meta_image.fixed.sizes'
  | 'data.page_meta_image.fixed.width'
  | 'data.page_meta_image.fixed.height'
  | 'data.page_meta_image.fluid.base64'
  | 'data.page_meta_image.fluid.src'
  | 'data.page_meta_image.fluid.srcSet'
  | 'data.page_meta_image.fluid.srcWebp'
  | 'data.page_meta_image.fluid.srcSetWebp'
  | 'data.page_meta_image.fluid.sizes'
  | 'data.page_meta_image.fluid.aspectRatio'
  | 'data.page_meta_image.gatsbyImageData'
  | 'data.page_meta_image.localFile.sourceInstanceName'
  | 'data.page_meta_image.localFile.absolutePath'
  | 'data.page_meta_image.localFile.relativePath'
  | 'data.page_meta_image.localFile.extension'
  | 'data.page_meta_image.localFile.size'
  | 'data.page_meta_image.localFile.prettySize'
  | 'data.page_meta_image.localFile.modifiedTime'
  | 'data.page_meta_image.localFile.accessTime'
  | 'data.page_meta_image.localFile.changeTime'
  | 'data.page_meta_image.localFile.birthTime'
  | 'data.page_meta_image.localFile.root'
  | 'data.page_meta_image.localFile.dir'
  | 'data.page_meta_image.localFile.base'
  | 'data.page_meta_image.localFile.ext'
  | 'data.page_meta_image.localFile.name'
  | 'data.page_meta_image.localFile.relativeDirectory'
  | 'data.page_meta_image.localFile.dev'
  | 'data.page_meta_image.localFile.mode'
  | 'data.page_meta_image.localFile.nlink'
  | 'data.page_meta_image.localFile.uid'
  | 'data.page_meta_image.localFile.gid'
  | 'data.page_meta_image.localFile.rdev'
  | 'data.page_meta_image.localFile.ino'
  | 'data.page_meta_image.localFile.atimeMs'
  | 'data.page_meta_image.localFile.mtimeMs'
  | 'data.page_meta_image.localFile.ctimeMs'
  | 'data.page_meta_image.localFile.atime'
  | 'data.page_meta_image.localFile.mtime'
  | 'data.page_meta_image.localFile.ctime'
  | 'data.page_meta_image.localFile.birthtime'
  | 'data.page_meta_image.localFile.birthtimeMs'
  | 'data.page_meta_image.localFile.blksize'
  | 'data.page_meta_image.localFile.blocks'
  | 'data.page_meta_image.localFile.url'
  | 'data.page_meta_image.localFile.childrenImageSharp'
  | 'data.page_meta_image.localFile.id'
  | 'data.page_meta_image.localFile.children'
  | 'data.page_meta_title'
  | 'data.page_title.text'
  | 'data.page_title.html'
  | 'data.page_title.richText'
  | 'data.page_title.raw'
  | 'dataRaw'
  | 'prismicId'
  | 'alternate_languages'
  | 'alternate_languages.id'
  | 'alternate_languages.uid'
  | 'alternate_languages.lang'
  | 'alternate_languages.type'
  | 'alternate_languages.raw'
  | 'first_publication_date'
  | 'href'
  | 'lang'
  | 'last_publication_date'
  | 'tags'
  | 'type'
  | 'url'
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

type PrismicTeamsArticleGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicTeamsArticleEdge>;
  readonly nodes: ReadonlyArray<PrismicTeamsArticle>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicTeamsArticleGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type PrismicTeamsArticleGroupConnection_distinctArgs = {
  field: PrismicTeamsArticleFieldsEnum;
};


type PrismicTeamsArticleGroupConnection_maxArgs = {
  field: PrismicTeamsArticleFieldsEnum;
};


type PrismicTeamsArticleGroupConnection_minArgs = {
  field: PrismicTeamsArticleFieldsEnum;
};


type PrismicTeamsArticleGroupConnection_sumArgs = {
  field: PrismicTeamsArticleFieldsEnum;
};


type PrismicTeamsArticleGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicTeamsArticleFieldsEnum;
};

type PrismicTeamsArticleFilterInput = {
  readonly uid: Maybe<StringQueryOperatorInput>;
  readonly data: Maybe<PrismicTeamsArticleDataTypeFilterInput>;
  readonly dataRaw: Maybe<JSONQueryOperatorInput>;
  readonly prismicId: Maybe<IDQueryOperatorInput>;
  readonly alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  readonly first_publication_date: Maybe<DateQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly last_publication_date: Maybe<DateQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly _previewable: Maybe<IDQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicTeamsArticleSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicTeamsArticleFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicPayContentsDataTypeFilterInput = {
  readonly logo_icon: Maybe<PrismicPayContentsDataLogoIconImageTypeFilterInput>;
};

type PrismicPayContentsDataLogoIconImageTypeFilterInput = {
  readonly alt: Maybe<StringQueryOperatorInput>;
  readonly copyright: Maybe<StringQueryOperatorInput>;
  readonly dimensions: Maybe<PrismicImageDimensionsTypeFilterInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly fixed: Maybe<ImgixFixedFilterInput>;
  readonly fluid: Maybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly localFile: Maybe<FileFilterInput>;
};

type PrismicPayContentsConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicPayContentsEdge>;
  readonly nodes: ReadonlyArray<PrismicPayContents>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicPayContentsGroupConnection>;
};


type PrismicPayContentsConnection_distinctArgs = {
  field: PrismicPayContentsFieldsEnum;
};


type PrismicPayContentsConnection_maxArgs = {
  field: PrismicPayContentsFieldsEnum;
};


type PrismicPayContentsConnection_minArgs = {
  field: PrismicPayContentsFieldsEnum;
};


type PrismicPayContentsConnection_sumArgs = {
  field: PrismicPayContentsFieldsEnum;
};


type PrismicPayContentsConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicPayContentsFieldsEnum;
};

type PrismicPayContentsEdge = {
  readonly next: Maybe<PrismicPayContents>;
  readonly node: PrismicPayContents;
  readonly previous: Maybe<PrismicPayContents>;
};

type PrismicPayContentsFieldsEnum =
  | 'data.logo_icon.alt'
  | 'data.logo_icon.copyright'
  | 'data.logo_icon.dimensions.width'
  | 'data.logo_icon.dimensions.height'
  | 'data.logo_icon.url'
  | 'data.logo_icon.fixed.base64'
  | 'data.logo_icon.fixed.src'
  | 'data.logo_icon.fixed.srcSet'
  | 'data.logo_icon.fixed.srcWebp'
  | 'data.logo_icon.fixed.srcSetWebp'
  | 'data.logo_icon.fixed.sizes'
  | 'data.logo_icon.fixed.width'
  | 'data.logo_icon.fixed.height'
  | 'data.logo_icon.fluid.base64'
  | 'data.logo_icon.fluid.src'
  | 'data.logo_icon.fluid.srcSet'
  | 'data.logo_icon.fluid.srcWebp'
  | 'data.logo_icon.fluid.srcSetWebp'
  | 'data.logo_icon.fluid.sizes'
  | 'data.logo_icon.fluid.aspectRatio'
  | 'data.logo_icon.gatsbyImageData'
  | 'data.logo_icon.localFile.sourceInstanceName'
  | 'data.logo_icon.localFile.absolutePath'
  | 'data.logo_icon.localFile.relativePath'
  | 'data.logo_icon.localFile.extension'
  | 'data.logo_icon.localFile.size'
  | 'data.logo_icon.localFile.prettySize'
  | 'data.logo_icon.localFile.modifiedTime'
  | 'data.logo_icon.localFile.accessTime'
  | 'data.logo_icon.localFile.changeTime'
  | 'data.logo_icon.localFile.birthTime'
  | 'data.logo_icon.localFile.root'
  | 'data.logo_icon.localFile.dir'
  | 'data.logo_icon.localFile.base'
  | 'data.logo_icon.localFile.ext'
  | 'data.logo_icon.localFile.name'
  | 'data.logo_icon.localFile.relativeDirectory'
  | 'data.logo_icon.localFile.dev'
  | 'data.logo_icon.localFile.mode'
  | 'data.logo_icon.localFile.nlink'
  | 'data.logo_icon.localFile.uid'
  | 'data.logo_icon.localFile.gid'
  | 'data.logo_icon.localFile.rdev'
  | 'data.logo_icon.localFile.ino'
  | 'data.logo_icon.localFile.atimeMs'
  | 'data.logo_icon.localFile.mtimeMs'
  | 'data.logo_icon.localFile.ctimeMs'
  | 'data.logo_icon.localFile.atime'
  | 'data.logo_icon.localFile.mtime'
  | 'data.logo_icon.localFile.ctime'
  | 'data.logo_icon.localFile.birthtime'
  | 'data.logo_icon.localFile.birthtimeMs'
  | 'data.logo_icon.localFile.blksize'
  | 'data.logo_icon.localFile.blocks'
  | 'data.logo_icon.localFile.url'
  | 'data.logo_icon.localFile.childrenImageSharp'
  | 'data.logo_icon.localFile.id'
  | 'data.logo_icon.localFile.children'
  | 'dataRaw'
  | 'prismicId'
  | 'alternate_languages'
  | 'alternate_languages.id'
  | 'alternate_languages.uid'
  | 'alternate_languages.lang'
  | 'alternate_languages.type'
  | 'alternate_languages.raw'
  | 'first_publication_date'
  | 'href'
  | 'lang'
  | 'last_publication_date'
  | 'tags'
  | 'type'
  | 'url'
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

type PrismicPayContentsGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicPayContentsEdge>;
  readonly nodes: ReadonlyArray<PrismicPayContents>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicPayContentsGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type PrismicPayContentsGroupConnection_distinctArgs = {
  field: PrismicPayContentsFieldsEnum;
};


type PrismicPayContentsGroupConnection_maxArgs = {
  field: PrismicPayContentsFieldsEnum;
};


type PrismicPayContentsGroupConnection_minArgs = {
  field: PrismicPayContentsFieldsEnum;
};


type PrismicPayContentsGroupConnection_sumArgs = {
  field: PrismicPayContentsFieldsEnum;
};


type PrismicPayContentsGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicPayContentsFieldsEnum;
};

type PrismicPayContentsFilterInput = {
  readonly data: Maybe<PrismicPayContentsDataTypeFilterInput>;
  readonly dataRaw: Maybe<JSONQueryOperatorInput>;
  readonly prismicId: Maybe<IDQueryOperatorInput>;
  readonly alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  readonly first_publication_date: Maybe<DateQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly last_publication_date: Maybe<DateQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly _previewable: Maybe<IDQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicPayContentsSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicPayContentsFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicGlobalContentsDataTypeFilterInput = {
  readonly about_background_image: Maybe<PrismicGlobalContentsDataAboutBackgroundImageImageTypeFilterInput>;
  readonly about_opengraph_image: Maybe<PrismicGlobalContentsDataAboutOpengraphImageImageTypeFilterInput>;
  readonly about_opengraph_image_link: Maybe<StringQueryOperatorInput>;
  readonly about_page_description: Maybe<StringQueryOperatorInput>;
  readonly about_page_title: Maybe<StringQueryOperatorInput>;
  readonly about_title: Maybe<PrismicStructuredTextTypeFilterInput>;
  readonly app_store_link: Maybe<StringQueryOperatorInput>;
  readonly google_play_link: Maybe<StringQueryOperatorInput>;
  readonly main_opengraph_image: Maybe<PrismicGlobalContentsDataMainOpengraphImageImageTypeFilterInput>;
  readonly main_opengraph_image_link: Maybe<StringQueryOperatorInput>;
  readonly main_page_description: Maybe<StringQueryOperatorInput>;
  readonly main_page_title: Maybe<StringQueryOperatorInput>;
  readonly one_link: Maybe<StringQueryOperatorInput>;
  readonly one_link_button_text: Maybe<StringQueryOperatorInput>;
};

type PrismicGlobalContentsDataAboutBackgroundImageImageTypeFilterInput = {
  readonly alt: Maybe<StringQueryOperatorInput>;
  readonly copyright: Maybe<StringQueryOperatorInput>;
  readonly dimensions: Maybe<PrismicImageDimensionsTypeFilterInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly fixed: Maybe<ImgixFixedFilterInput>;
  readonly fluid: Maybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly localFile: Maybe<FileFilterInput>;
};

type PrismicGlobalContentsDataAboutOpengraphImageImageTypeFilterInput = {
  readonly alt: Maybe<StringQueryOperatorInput>;
  readonly copyright: Maybe<StringQueryOperatorInput>;
  readonly dimensions: Maybe<PrismicImageDimensionsTypeFilterInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly fixed: Maybe<ImgixFixedFilterInput>;
  readonly fluid: Maybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly localFile: Maybe<FileFilterInput>;
};

type PrismicGlobalContentsDataMainOpengraphImageImageTypeFilterInput = {
  readonly alt: Maybe<StringQueryOperatorInput>;
  readonly copyright: Maybe<StringQueryOperatorInput>;
  readonly dimensions: Maybe<PrismicImageDimensionsTypeFilterInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly fixed: Maybe<ImgixFixedFilterInput>;
  readonly fluid: Maybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly localFile: Maybe<FileFilterInput>;
};

type PrismicGlobalContentsConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicGlobalContentsEdge>;
  readonly nodes: ReadonlyArray<PrismicGlobalContents>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicGlobalContentsGroupConnection>;
};


type PrismicGlobalContentsConnection_distinctArgs = {
  field: PrismicGlobalContentsFieldsEnum;
};


type PrismicGlobalContentsConnection_maxArgs = {
  field: PrismicGlobalContentsFieldsEnum;
};


type PrismicGlobalContentsConnection_minArgs = {
  field: PrismicGlobalContentsFieldsEnum;
};


type PrismicGlobalContentsConnection_sumArgs = {
  field: PrismicGlobalContentsFieldsEnum;
};


type PrismicGlobalContentsConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicGlobalContentsFieldsEnum;
};

type PrismicGlobalContentsEdge = {
  readonly next: Maybe<PrismicGlobalContents>;
  readonly node: PrismicGlobalContents;
  readonly previous: Maybe<PrismicGlobalContents>;
};

type PrismicGlobalContentsFieldsEnum =
  | 'data.about_background_image.alt'
  | 'data.about_background_image.copyright'
  | 'data.about_background_image.dimensions.width'
  | 'data.about_background_image.dimensions.height'
  | 'data.about_background_image.url'
  | 'data.about_background_image.fixed.base64'
  | 'data.about_background_image.fixed.src'
  | 'data.about_background_image.fixed.srcSet'
  | 'data.about_background_image.fixed.srcWebp'
  | 'data.about_background_image.fixed.srcSetWebp'
  | 'data.about_background_image.fixed.sizes'
  | 'data.about_background_image.fixed.width'
  | 'data.about_background_image.fixed.height'
  | 'data.about_background_image.fluid.base64'
  | 'data.about_background_image.fluid.src'
  | 'data.about_background_image.fluid.srcSet'
  | 'data.about_background_image.fluid.srcWebp'
  | 'data.about_background_image.fluid.srcSetWebp'
  | 'data.about_background_image.fluid.sizes'
  | 'data.about_background_image.fluid.aspectRatio'
  | 'data.about_background_image.gatsbyImageData'
  | 'data.about_background_image.localFile.sourceInstanceName'
  | 'data.about_background_image.localFile.absolutePath'
  | 'data.about_background_image.localFile.relativePath'
  | 'data.about_background_image.localFile.extension'
  | 'data.about_background_image.localFile.size'
  | 'data.about_background_image.localFile.prettySize'
  | 'data.about_background_image.localFile.modifiedTime'
  | 'data.about_background_image.localFile.accessTime'
  | 'data.about_background_image.localFile.changeTime'
  | 'data.about_background_image.localFile.birthTime'
  | 'data.about_background_image.localFile.root'
  | 'data.about_background_image.localFile.dir'
  | 'data.about_background_image.localFile.base'
  | 'data.about_background_image.localFile.ext'
  | 'data.about_background_image.localFile.name'
  | 'data.about_background_image.localFile.relativeDirectory'
  | 'data.about_background_image.localFile.dev'
  | 'data.about_background_image.localFile.mode'
  | 'data.about_background_image.localFile.nlink'
  | 'data.about_background_image.localFile.uid'
  | 'data.about_background_image.localFile.gid'
  | 'data.about_background_image.localFile.rdev'
  | 'data.about_background_image.localFile.ino'
  | 'data.about_background_image.localFile.atimeMs'
  | 'data.about_background_image.localFile.mtimeMs'
  | 'data.about_background_image.localFile.ctimeMs'
  | 'data.about_background_image.localFile.atime'
  | 'data.about_background_image.localFile.mtime'
  | 'data.about_background_image.localFile.ctime'
  | 'data.about_background_image.localFile.birthtime'
  | 'data.about_background_image.localFile.birthtimeMs'
  | 'data.about_background_image.localFile.blksize'
  | 'data.about_background_image.localFile.blocks'
  | 'data.about_background_image.localFile.url'
  | 'data.about_background_image.localFile.childrenImageSharp'
  | 'data.about_background_image.localFile.id'
  | 'data.about_background_image.localFile.children'
  | 'data.about_opengraph_image.alt'
  | 'data.about_opengraph_image.copyright'
  | 'data.about_opengraph_image.dimensions.width'
  | 'data.about_opengraph_image.dimensions.height'
  | 'data.about_opengraph_image.url'
  | 'data.about_opengraph_image.fixed.base64'
  | 'data.about_opengraph_image.fixed.src'
  | 'data.about_opengraph_image.fixed.srcSet'
  | 'data.about_opengraph_image.fixed.srcWebp'
  | 'data.about_opengraph_image.fixed.srcSetWebp'
  | 'data.about_opengraph_image.fixed.sizes'
  | 'data.about_opengraph_image.fixed.width'
  | 'data.about_opengraph_image.fixed.height'
  | 'data.about_opengraph_image.fluid.base64'
  | 'data.about_opengraph_image.fluid.src'
  | 'data.about_opengraph_image.fluid.srcSet'
  | 'data.about_opengraph_image.fluid.srcWebp'
  | 'data.about_opengraph_image.fluid.srcSetWebp'
  | 'data.about_opengraph_image.fluid.sizes'
  | 'data.about_opengraph_image.fluid.aspectRatio'
  | 'data.about_opengraph_image.gatsbyImageData'
  | 'data.about_opengraph_image.localFile.sourceInstanceName'
  | 'data.about_opengraph_image.localFile.absolutePath'
  | 'data.about_opengraph_image.localFile.relativePath'
  | 'data.about_opengraph_image.localFile.extension'
  | 'data.about_opengraph_image.localFile.size'
  | 'data.about_opengraph_image.localFile.prettySize'
  | 'data.about_opengraph_image.localFile.modifiedTime'
  | 'data.about_opengraph_image.localFile.accessTime'
  | 'data.about_opengraph_image.localFile.changeTime'
  | 'data.about_opengraph_image.localFile.birthTime'
  | 'data.about_opengraph_image.localFile.root'
  | 'data.about_opengraph_image.localFile.dir'
  | 'data.about_opengraph_image.localFile.base'
  | 'data.about_opengraph_image.localFile.ext'
  | 'data.about_opengraph_image.localFile.name'
  | 'data.about_opengraph_image.localFile.relativeDirectory'
  | 'data.about_opengraph_image.localFile.dev'
  | 'data.about_opengraph_image.localFile.mode'
  | 'data.about_opengraph_image.localFile.nlink'
  | 'data.about_opengraph_image.localFile.uid'
  | 'data.about_opengraph_image.localFile.gid'
  | 'data.about_opengraph_image.localFile.rdev'
  | 'data.about_opengraph_image.localFile.ino'
  | 'data.about_opengraph_image.localFile.atimeMs'
  | 'data.about_opengraph_image.localFile.mtimeMs'
  | 'data.about_opengraph_image.localFile.ctimeMs'
  | 'data.about_opengraph_image.localFile.atime'
  | 'data.about_opengraph_image.localFile.mtime'
  | 'data.about_opengraph_image.localFile.ctime'
  | 'data.about_opengraph_image.localFile.birthtime'
  | 'data.about_opengraph_image.localFile.birthtimeMs'
  | 'data.about_opengraph_image.localFile.blksize'
  | 'data.about_opengraph_image.localFile.blocks'
  | 'data.about_opengraph_image.localFile.url'
  | 'data.about_opengraph_image.localFile.childrenImageSharp'
  | 'data.about_opengraph_image.localFile.id'
  | 'data.about_opengraph_image.localFile.children'
  | 'data.about_opengraph_image_link'
  | 'data.about_page_description'
  | 'data.about_page_title'
  | 'data.about_title.text'
  | 'data.about_title.html'
  | 'data.about_title.richText'
  | 'data.about_title.raw'
  | 'data.app_store_link'
  | 'data.google_play_link'
  | 'data.main_opengraph_image.alt'
  | 'data.main_opengraph_image.copyright'
  | 'data.main_opengraph_image.dimensions.width'
  | 'data.main_opengraph_image.dimensions.height'
  | 'data.main_opengraph_image.url'
  | 'data.main_opengraph_image.fixed.base64'
  | 'data.main_opengraph_image.fixed.src'
  | 'data.main_opengraph_image.fixed.srcSet'
  | 'data.main_opengraph_image.fixed.srcWebp'
  | 'data.main_opengraph_image.fixed.srcSetWebp'
  | 'data.main_opengraph_image.fixed.sizes'
  | 'data.main_opengraph_image.fixed.width'
  | 'data.main_opengraph_image.fixed.height'
  | 'data.main_opengraph_image.fluid.base64'
  | 'data.main_opengraph_image.fluid.src'
  | 'data.main_opengraph_image.fluid.srcSet'
  | 'data.main_opengraph_image.fluid.srcWebp'
  | 'data.main_opengraph_image.fluid.srcSetWebp'
  | 'data.main_opengraph_image.fluid.sizes'
  | 'data.main_opengraph_image.fluid.aspectRatio'
  | 'data.main_opengraph_image.gatsbyImageData'
  | 'data.main_opengraph_image.localFile.sourceInstanceName'
  | 'data.main_opengraph_image.localFile.absolutePath'
  | 'data.main_opengraph_image.localFile.relativePath'
  | 'data.main_opengraph_image.localFile.extension'
  | 'data.main_opengraph_image.localFile.size'
  | 'data.main_opengraph_image.localFile.prettySize'
  | 'data.main_opengraph_image.localFile.modifiedTime'
  | 'data.main_opengraph_image.localFile.accessTime'
  | 'data.main_opengraph_image.localFile.changeTime'
  | 'data.main_opengraph_image.localFile.birthTime'
  | 'data.main_opengraph_image.localFile.root'
  | 'data.main_opengraph_image.localFile.dir'
  | 'data.main_opengraph_image.localFile.base'
  | 'data.main_opengraph_image.localFile.ext'
  | 'data.main_opengraph_image.localFile.name'
  | 'data.main_opengraph_image.localFile.relativeDirectory'
  | 'data.main_opengraph_image.localFile.dev'
  | 'data.main_opengraph_image.localFile.mode'
  | 'data.main_opengraph_image.localFile.nlink'
  | 'data.main_opengraph_image.localFile.uid'
  | 'data.main_opengraph_image.localFile.gid'
  | 'data.main_opengraph_image.localFile.rdev'
  | 'data.main_opengraph_image.localFile.ino'
  | 'data.main_opengraph_image.localFile.atimeMs'
  | 'data.main_opengraph_image.localFile.mtimeMs'
  | 'data.main_opengraph_image.localFile.ctimeMs'
  | 'data.main_opengraph_image.localFile.atime'
  | 'data.main_opengraph_image.localFile.mtime'
  | 'data.main_opengraph_image.localFile.ctime'
  | 'data.main_opengraph_image.localFile.birthtime'
  | 'data.main_opengraph_image.localFile.birthtimeMs'
  | 'data.main_opengraph_image.localFile.blksize'
  | 'data.main_opengraph_image.localFile.blocks'
  | 'data.main_opengraph_image.localFile.url'
  | 'data.main_opengraph_image.localFile.childrenImageSharp'
  | 'data.main_opengraph_image.localFile.id'
  | 'data.main_opengraph_image.localFile.children'
  | 'data.main_opengraph_image_link'
  | 'data.main_page_description'
  | 'data.main_page_title'
  | 'data.one_link'
  | 'data.one_link_button_text'
  | 'dataRaw'
  | 'prismicId'
  | 'alternate_languages'
  | 'alternate_languages.id'
  | 'alternate_languages.uid'
  | 'alternate_languages.lang'
  | 'alternate_languages.type'
  | 'alternate_languages.raw'
  | 'first_publication_date'
  | 'href'
  | 'lang'
  | 'last_publication_date'
  | 'tags'
  | 'type'
  | 'url'
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

type PrismicGlobalContentsGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicGlobalContentsEdge>;
  readonly nodes: ReadonlyArray<PrismicGlobalContents>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicGlobalContentsGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type PrismicGlobalContentsGroupConnection_distinctArgs = {
  field: PrismicGlobalContentsFieldsEnum;
};


type PrismicGlobalContentsGroupConnection_maxArgs = {
  field: PrismicGlobalContentsFieldsEnum;
};


type PrismicGlobalContentsGroupConnection_minArgs = {
  field: PrismicGlobalContentsFieldsEnum;
};


type PrismicGlobalContentsGroupConnection_sumArgs = {
  field: PrismicGlobalContentsFieldsEnum;
};


type PrismicGlobalContentsGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicGlobalContentsFieldsEnum;
};

type PrismicGlobalContentsFilterInput = {
  readonly data: Maybe<PrismicGlobalContentsDataTypeFilterInput>;
  readonly dataRaw: Maybe<JSONQueryOperatorInput>;
  readonly prismicId: Maybe<IDQueryOperatorInput>;
  readonly alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  readonly first_publication_date: Maybe<DateQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly last_publication_date: Maybe<DateQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly _previewable: Maybe<IDQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicGlobalContentsSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicGlobalContentsFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type PrismicTeamContentsDataTypeFilterInput = {
  readonly completed_page_content: Maybe<PrismicStructuredTextTypeFilterInput>;
  readonly completed_page_link_group: Maybe<PrismicTeamContentsDataCompletedPageLinkGroupFilterListInput>;
  readonly culture_page_meta_description: Maybe<StringQueryOperatorInput>;
  readonly culture_page_meta_image: Maybe<PrismicTeamContentsDataCulturePageMetaImageImageTypeFilterInput>;
  readonly culture_page_meta_title: Maybe<StringQueryOperatorInput>;
  readonly culture_page_title: Maybe<PrismicStructuredTextTypeFilterInput>;
  readonly enable_culture_page: Maybe<BooleanQueryOperatorInput>;
  readonly enable_faq_page: Maybe<BooleanQueryOperatorInput>;
  readonly enable_life_page: Maybe<BooleanQueryOperatorInput>;
  readonly faq_entries: Maybe<PrismicTeamContentsDataFaqEntriesFilterListInput>;
  readonly faq_page_meta_description: Maybe<StringQueryOperatorInput>;
  readonly faq_page_meta_title: Maybe<StringQueryOperatorInput>;
  readonly faq_page_title: Maybe<PrismicStructuredTextTypeFilterInput>;
  readonly fb_app_id: Maybe<StringQueryOperatorInput>;
  readonly jobs_page_meta_description: Maybe<StringQueryOperatorInput>;
  readonly jobs_page_meta_image: Maybe<PrismicTeamContentsDataJobsPageMetaImageImageTypeFilterInput>;
  readonly jobs_page_meta_title: Maybe<StringQueryOperatorInput>;
  readonly jobs_page_title: Maybe<PrismicStructuredTextTypeFilterInput>;
  readonly life_page_meta_description: Maybe<StringQueryOperatorInput>;
  readonly life_page_meta_image: Maybe<PrismicTeamContentsDataLifePageMetaImageImageTypeFilterInput>;
  readonly life_page_meta_title: Maybe<StringQueryOperatorInput>;
  readonly life_page_title: Maybe<PrismicStructuredTextTypeFilterInput>;
  readonly main_page_meta_description: Maybe<StringQueryOperatorInput>;
  readonly main_page_meta_image: Maybe<PrismicTeamContentsDataMainPageMetaImageImageTypeFilterInput>;
  readonly main_page_meta_title: Maybe<StringQueryOperatorInput>;
  readonly main_page_title: Maybe<PrismicStructuredTextTypeFilterInput>;
  readonly notfound_page_link_group: Maybe<PrismicTeamContentsDataNotfoundPageLinkGroupFilterListInput>;
  readonly notfound_page_title: Maybe<PrismicStructuredTextTypeFilterInput>;
  readonly twitter_site_handle: Maybe<StringQueryOperatorInput>;
};

type PrismicTeamContentsDataCompletedPageLinkGroupFilterListInput = {
  readonly elemMatch: Maybe<PrismicTeamContentsDataCompletedPageLinkGroupFilterInput>;
};

type PrismicTeamContentsDataCompletedPageLinkGroupFilterInput = {
  readonly display_text: Maybe<StringQueryOperatorInput>;
  readonly link: Maybe<PrismicLinkTypeFilterInput>;
};

type PrismicTeamContentsDataCulturePageMetaImageImageTypeFilterInput = {
  readonly alt: Maybe<StringQueryOperatorInput>;
  readonly copyright: Maybe<StringQueryOperatorInput>;
  readonly dimensions: Maybe<PrismicImageDimensionsTypeFilterInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly fixed: Maybe<ImgixFixedFilterInput>;
  readonly fluid: Maybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly localFile: Maybe<FileFilterInput>;
};

type PrismicTeamContentsDataFaqEntriesFilterListInput = {
  readonly elemMatch: Maybe<PrismicTeamContentsDataFaqEntriesFilterInput>;
};

type PrismicTeamContentsDataFaqEntriesFilterInput = {
  readonly answer: Maybe<PrismicStructuredTextTypeFilterInput>;
  readonly question: Maybe<StringQueryOperatorInput>;
};

type PrismicTeamContentsDataJobsPageMetaImageImageTypeFilterInput = {
  readonly alt: Maybe<StringQueryOperatorInput>;
  readonly copyright: Maybe<StringQueryOperatorInput>;
  readonly dimensions: Maybe<PrismicImageDimensionsTypeFilterInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly fixed: Maybe<ImgixFixedFilterInput>;
  readonly fluid: Maybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly localFile: Maybe<FileFilterInput>;
};

type PrismicTeamContentsDataLifePageMetaImageImageTypeFilterInput = {
  readonly alt: Maybe<StringQueryOperatorInput>;
  readonly copyright: Maybe<StringQueryOperatorInput>;
  readonly dimensions: Maybe<PrismicImageDimensionsTypeFilterInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly fixed: Maybe<ImgixFixedFilterInput>;
  readonly fluid: Maybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly localFile: Maybe<FileFilterInput>;
};

type PrismicTeamContentsDataMainPageMetaImageImageTypeFilterInput = {
  readonly alt: Maybe<StringQueryOperatorInput>;
  readonly copyright: Maybe<StringQueryOperatorInput>;
  readonly dimensions: Maybe<PrismicImageDimensionsTypeFilterInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly fixed: Maybe<ImgixFixedFilterInput>;
  readonly fluid: Maybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: Maybe<JSONQueryOperatorInput>;
  readonly localFile: Maybe<FileFilterInput>;
};

type PrismicTeamContentsDataNotfoundPageLinkGroupFilterListInput = {
  readonly elemMatch: Maybe<PrismicTeamContentsDataNotfoundPageLinkGroupFilterInput>;
};

type PrismicTeamContentsDataNotfoundPageLinkGroupFilterInput = {
  readonly display_text: Maybe<StringQueryOperatorInput>;
  readonly link: Maybe<PrismicLinkTypeFilterInput>;
};

type PrismicTeamContentsConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicTeamContentsEdge>;
  readonly nodes: ReadonlyArray<PrismicTeamContents>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicTeamContentsGroupConnection>;
};


type PrismicTeamContentsConnection_distinctArgs = {
  field: PrismicTeamContentsFieldsEnum;
};


type PrismicTeamContentsConnection_maxArgs = {
  field: PrismicTeamContentsFieldsEnum;
};


type PrismicTeamContentsConnection_minArgs = {
  field: PrismicTeamContentsFieldsEnum;
};


type PrismicTeamContentsConnection_sumArgs = {
  field: PrismicTeamContentsFieldsEnum;
};


type PrismicTeamContentsConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicTeamContentsFieldsEnum;
};

type PrismicTeamContentsEdge = {
  readonly next: Maybe<PrismicTeamContents>;
  readonly node: PrismicTeamContents;
  readonly previous: Maybe<PrismicTeamContents>;
};

type PrismicTeamContentsFieldsEnum =
  | 'data.completed_page_content.text'
  | 'data.completed_page_content.html'
  | 'data.completed_page_content.richText'
  | 'data.completed_page_content.raw'
  | 'data.completed_page_link_group'
  | 'data.completed_page_link_group.display_text'
  | 'data.completed_page_link_group.link.link_type'
  | 'data.completed_page_link_group.link.isBroken'
  | 'data.completed_page_link_group.link.url'
  | 'data.completed_page_link_group.link.target'
  | 'data.completed_page_link_group.link.size'
  | 'data.completed_page_link_group.link.id'
  | 'data.completed_page_link_group.link.type'
  | 'data.completed_page_link_group.link.tags'
  | 'data.completed_page_link_group.link.lang'
  | 'data.completed_page_link_group.link.slug'
  | 'data.completed_page_link_group.link.uid'
  | 'data.completed_page_link_group.link.raw'
  | 'data.culture_page_meta_description'
  | 'data.culture_page_meta_image.alt'
  | 'data.culture_page_meta_image.copyright'
  | 'data.culture_page_meta_image.dimensions.width'
  | 'data.culture_page_meta_image.dimensions.height'
  | 'data.culture_page_meta_image.url'
  | 'data.culture_page_meta_image.fixed.base64'
  | 'data.culture_page_meta_image.fixed.src'
  | 'data.culture_page_meta_image.fixed.srcSet'
  | 'data.culture_page_meta_image.fixed.srcWebp'
  | 'data.culture_page_meta_image.fixed.srcSetWebp'
  | 'data.culture_page_meta_image.fixed.sizes'
  | 'data.culture_page_meta_image.fixed.width'
  | 'data.culture_page_meta_image.fixed.height'
  | 'data.culture_page_meta_image.fluid.base64'
  | 'data.culture_page_meta_image.fluid.src'
  | 'data.culture_page_meta_image.fluid.srcSet'
  | 'data.culture_page_meta_image.fluid.srcWebp'
  | 'data.culture_page_meta_image.fluid.srcSetWebp'
  | 'data.culture_page_meta_image.fluid.sizes'
  | 'data.culture_page_meta_image.fluid.aspectRatio'
  | 'data.culture_page_meta_image.gatsbyImageData'
  | 'data.culture_page_meta_image.localFile.sourceInstanceName'
  | 'data.culture_page_meta_image.localFile.absolutePath'
  | 'data.culture_page_meta_image.localFile.relativePath'
  | 'data.culture_page_meta_image.localFile.extension'
  | 'data.culture_page_meta_image.localFile.size'
  | 'data.culture_page_meta_image.localFile.prettySize'
  | 'data.culture_page_meta_image.localFile.modifiedTime'
  | 'data.culture_page_meta_image.localFile.accessTime'
  | 'data.culture_page_meta_image.localFile.changeTime'
  | 'data.culture_page_meta_image.localFile.birthTime'
  | 'data.culture_page_meta_image.localFile.root'
  | 'data.culture_page_meta_image.localFile.dir'
  | 'data.culture_page_meta_image.localFile.base'
  | 'data.culture_page_meta_image.localFile.ext'
  | 'data.culture_page_meta_image.localFile.name'
  | 'data.culture_page_meta_image.localFile.relativeDirectory'
  | 'data.culture_page_meta_image.localFile.dev'
  | 'data.culture_page_meta_image.localFile.mode'
  | 'data.culture_page_meta_image.localFile.nlink'
  | 'data.culture_page_meta_image.localFile.uid'
  | 'data.culture_page_meta_image.localFile.gid'
  | 'data.culture_page_meta_image.localFile.rdev'
  | 'data.culture_page_meta_image.localFile.ino'
  | 'data.culture_page_meta_image.localFile.atimeMs'
  | 'data.culture_page_meta_image.localFile.mtimeMs'
  | 'data.culture_page_meta_image.localFile.ctimeMs'
  | 'data.culture_page_meta_image.localFile.atime'
  | 'data.culture_page_meta_image.localFile.mtime'
  | 'data.culture_page_meta_image.localFile.ctime'
  | 'data.culture_page_meta_image.localFile.birthtime'
  | 'data.culture_page_meta_image.localFile.birthtimeMs'
  | 'data.culture_page_meta_image.localFile.blksize'
  | 'data.culture_page_meta_image.localFile.blocks'
  | 'data.culture_page_meta_image.localFile.url'
  | 'data.culture_page_meta_image.localFile.childrenImageSharp'
  | 'data.culture_page_meta_image.localFile.id'
  | 'data.culture_page_meta_image.localFile.children'
  | 'data.culture_page_meta_title'
  | 'data.culture_page_title.text'
  | 'data.culture_page_title.html'
  | 'data.culture_page_title.richText'
  | 'data.culture_page_title.raw'
  | 'data.enable_culture_page'
  | 'data.enable_faq_page'
  | 'data.enable_life_page'
  | 'data.faq_entries'
  | 'data.faq_entries.answer.text'
  | 'data.faq_entries.answer.html'
  | 'data.faq_entries.answer.richText'
  | 'data.faq_entries.answer.raw'
  | 'data.faq_entries.question'
  | 'data.faq_page_meta_description'
  | 'data.faq_page_meta_title'
  | 'data.faq_page_title.text'
  | 'data.faq_page_title.html'
  | 'data.faq_page_title.richText'
  | 'data.faq_page_title.raw'
  | 'data.fb_app_id'
  | 'data.jobs_page_meta_description'
  | 'data.jobs_page_meta_image.alt'
  | 'data.jobs_page_meta_image.copyright'
  | 'data.jobs_page_meta_image.dimensions.width'
  | 'data.jobs_page_meta_image.dimensions.height'
  | 'data.jobs_page_meta_image.url'
  | 'data.jobs_page_meta_image.fixed.base64'
  | 'data.jobs_page_meta_image.fixed.src'
  | 'data.jobs_page_meta_image.fixed.srcSet'
  | 'data.jobs_page_meta_image.fixed.srcWebp'
  | 'data.jobs_page_meta_image.fixed.srcSetWebp'
  | 'data.jobs_page_meta_image.fixed.sizes'
  | 'data.jobs_page_meta_image.fixed.width'
  | 'data.jobs_page_meta_image.fixed.height'
  | 'data.jobs_page_meta_image.fluid.base64'
  | 'data.jobs_page_meta_image.fluid.src'
  | 'data.jobs_page_meta_image.fluid.srcSet'
  | 'data.jobs_page_meta_image.fluid.srcWebp'
  | 'data.jobs_page_meta_image.fluid.srcSetWebp'
  | 'data.jobs_page_meta_image.fluid.sizes'
  | 'data.jobs_page_meta_image.fluid.aspectRatio'
  | 'data.jobs_page_meta_image.gatsbyImageData'
  | 'data.jobs_page_meta_image.localFile.sourceInstanceName'
  | 'data.jobs_page_meta_image.localFile.absolutePath'
  | 'data.jobs_page_meta_image.localFile.relativePath'
  | 'data.jobs_page_meta_image.localFile.extension'
  | 'data.jobs_page_meta_image.localFile.size'
  | 'data.jobs_page_meta_image.localFile.prettySize'
  | 'data.jobs_page_meta_image.localFile.modifiedTime'
  | 'data.jobs_page_meta_image.localFile.accessTime'
  | 'data.jobs_page_meta_image.localFile.changeTime'
  | 'data.jobs_page_meta_image.localFile.birthTime'
  | 'data.jobs_page_meta_image.localFile.root'
  | 'data.jobs_page_meta_image.localFile.dir'
  | 'data.jobs_page_meta_image.localFile.base'
  | 'data.jobs_page_meta_image.localFile.ext'
  | 'data.jobs_page_meta_image.localFile.name'
  | 'data.jobs_page_meta_image.localFile.relativeDirectory'
  | 'data.jobs_page_meta_image.localFile.dev'
  | 'data.jobs_page_meta_image.localFile.mode'
  | 'data.jobs_page_meta_image.localFile.nlink'
  | 'data.jobs_page_meta_image.localFile.uid'
  | 'data.jobs_page_meta_image.localFile.gid'
  | 'data.jobs_page_meta_image.localFile.rdev'
  | 'data.jobs_page_meta_image.localFile.ino'
  | 'data.jobs_page_meta_image.localFile.atimeMs'
  | 'data.jobs_page_meta_image.localFile.mtimeMs'
  | 'data.jobs_page_meta_image.localFile.ctimeMs'
  | 'data.jobs_page_meta_image.localFile.atime'
  | 'data.jobs_page_meta_image.localFile.mtime'
  | 'data.jobs_page_meta_image.localFile.ctime'
  | 'data.jobs_page_meta_image.localFile.birthtime'
  | 'data.jobs_page_meta_image.localFile.birthtimeMs'
  | 'data.jobs_page_meta_image.localFile.blksize'
  | 'data.jobs_page_meta_image.localFile.blocks'
  | 'data.jobs_page_meta_image.localFile.url'
  | 'data.jobs_page_meta_image.localFile.childrenImageSharp'
  | 'data.jobs_page_meta_image.localFile.id'
  | 'data.jobs_page_meta_image.localFile.children'
  | 'data.jobs_page_meta_title'
  | 'data.jobs_page_title.text'
  | 'data.jobs_page_title.html'
  | 'data.jobs_page_title.richText'
  | 'data.jobs_page_title.raw'
  | 'data.life_page_meta_description'
  | 'data.life_page_meta_image.alt'
  | 'data.life_page_meta_image.copyright'
  | 'data.life_page_meta_image.dimensions.width'
  | 'data.life_page_meta_image.dimensions.height'
  | 'data.life_page_meta_image.url'
  | 'data.life_page_meta_image.fixed.base64'
  | 'data.life_page_meta_image.fixed.src'
  | 'data.life_page_meta_image.fixed.srcSet'
  | 'data.life_page_meta_image.fixed.srcWebp'
  | 'data.life_page_meta_image.fixed.srcSetWebp'
  | 'data.life_page_meta_image.fixed.sizes'
  | 'data.life_page_meta_image.fixed.width'
  | 'data.life_page_meta_image.fixed.height'
  | 'data.life_page_meta_image.fluid.base64'
  | 'data.life_page_meta_image.fluid.src'
  | 'data.life_page_meta_image.fluid.srcSet'
  | 'data.life_page_meta_image.fluid.srcWebp'
  | 'data.life_page_meta_image.fluid.srcSetWebp'
  | 'data.life_page_meta_image.fluid.sizes'
  | 'data.life_page_meta_image.fluid.aspectRatio'
  | 'data.life_page_meta_image.gatsbyImageData'
  | 'data.life_page_meta_image.localFile.sourceInstanceName'
  | 'data.life_page_meta_image.localFile.absolutePath'
  | 'data.life_page_meta_image.localFile.relativePath'
  | 'data.life_page_meta_image.localFile.extension'
  | 'data.life_page_meta_image.localFile.size'
  | 'data.life_page_meta_image.localFile.prettySize'
  | 'data.life_page_meta_image.localFile.modifiedTime'
  | 'data.life_page_meta_image.localFile.accessTime'
  | 'data.life_page_meta_image.localFile.changeTime'
  | 'data.life_page_meta_image.localFile.birthTime'
  | 'data.life_page_meta_image.localFile.root'
  | 'data.life_page_meta_image.localFile.dir'
  | 'data.life_page_meta_image.localFile.base'
  | 'data.life_page_meta_image.localFile.ext'
  | 'data.life_page_meta_image.localFile.name'
  | 'data.life_page_meta_image.localFile.relativeDirectory'
  | 'data.life_page_meta_image.localFile.dev'
  | 'data.life_page_meta_image.localFile.mode'
  | 'data.life_page_meta_image.localFile.nlink'
  | 'data.life_page_meta_image.localFile.uid'
  | 'data.life_page_meta_image.localFile.gid'
  | 'data.life_page_meta_image.localFile.rdev'
  | 'data.life_page_meta_image.localFile.ino'
  | 'data.life_page_meta_image.localFile.atimeMs'
  | 'data.life_page_meta_image.localFile.mtimeMs'
  | 'data.life_page_meta_image.localFile.ctimeMs'
  | 'data.life_page_meta_image.localFile.atime'
  | 'data.life_page_meta_image.localFile.mtime'
  | 'data.life_page_meta_image.localFile.ctime'
  | 'data.life_page_meta_image.localFile.birthtime'
  | 'data.life_page_meta_image.localFile.birthtimeMs'
  | 'data.life_page_meta_image.localFile.blksize'
  | 'data.life_page_meta_image.localFile.blocks'
  | 'data.life_page_meta_image.localFile.url'
  | 'data.life_page_meta_image.localFile.childrenImageSharp'
  | 'data.life_page_meta_image.localFile.id'
  | 'data.life_page_meta_image.localFile.children'
  | 'data.life_page_meta_title'
  | 'data.life_page_title.text'
  | 'data.life_page_title.html'
  | 'data.life_page_title.richText'
  | 'data.life_page_title.raw'
  | 'data.main_page_meta_description'
  | 'data.main_page_meta_image.alt'
  | 'data.main_page_meta_image.copyright'
  | 'data.main_page_meta_image.dimensions.width'
  | 'data.main_page_meta_image.dimensions.height'
  | 'data.main_page_meta_image.url'
  | 'data.main_page_meta_image.fixed.base64'
  | 'data.main_page_meta_image.fixed.src'
  | 'data.main_page_meta_image.fixed.srcSet'
  | 'data.main_page_meta_image.fixed.srcWebp'
  | 'data.main_page_meta_image.fixed.srcSetWebp'
  | 'data.main_page_meta_image.fixed.sizes'
  | 'data.main_page_meta_image.fixed.width'
  | 'data.main_page_meta_image.fixed.height'
  | 'data.main_page_meta_image.fluid.base64'
  | 'data.main_page_meta_image.fluid.src'
  | 'data.main_page_meta_image.fluid.srcSet'
  | 'data.main_page_meta_image.fluid.srcWebp'
  | 'data.main_page_meta_image.fluid.srcSetWebp'
  | 'data.main_page_meta_image.fluid.sizes'
  | 'data.main_page_meta_image.fluid.aspectRatio'
  | 'data.main_page_meta_image.gatsbyImageData'
  | 'data.main_page_meta_image.localFile.sourceInstanceName'
  | 'data.main_page_meta_image.localFile.absolutePath'
  | 'data.main_page_meta_image.localFile.relativePath'
  | 'data.main_page_meta_image.localFile.extension'
  | 'data.main_page_meta_image.localFile.size'
  | 'data.main_page_meta_image.localFile.prettySize'
  | 'data.main_page_meta_image.localFile.modifiedTime'
  | 'data.main_page_meta_image.localFile.accessTime'
  | 'data.main_page_meta_image.localFile.changeTime'
  | 'data.main_page_meta_image.localFile.birthTime'
  | 'data.main_page_meta_image.localFile.root'
  | 'data.main_page_meta_image.localFile.dir'
  | 'data.main_page_meta_image.localFile.base'
  | 'data.main_page_meta_image.localFile.ext'
  | 'data.main_page_meta_image.localFile.name'
  | 'data.main_page_meta_image.localFile.relativeDirectory'
  | 'data.main_page_meta_image.localFile.dev'
  | 'data.main_page_meta_image.localFile.mode'
  | 'data.main_page_meta_image.localFile.nlink'
  | 'data.main_page_meta_image.localFile.uid'
  | 'data.main_page_meta_image.localFile.gid'
  | 'data.main_page_meta_image.localFile.rdev'
  | 'data.main_page_meta_image.localFile.ino'
  | 'data.main_page_meta_image.localFile.atimeMs'
  | 'data.main_page_meta_image.localFile.mtimeMs'
  | 'data.main_page_meta_image.localFile.ctimeMs'
  | 'data.main_page_meta_image.localFile.atime'
  | 'data.main_page_meta_image.localFile.mtime'
  | 'data.main_page_meta_image.localFile.ctime'
  | 'data.main_page_meta_image.localFile.birthtime'
  | 'data.main_page_meta_image.localFile.birthtimeMs'
  | 'data.main_page_meta_image.localFile.blksize'
  | 'data.main_page_meta_image.localFile.blocks'
  | 'data.main_page_meta_image.localFile.url'
  | 'data.main_page_meta_image.localFile.childrenImageSharp'
  | 'data.main_page_meta_image.localFile.id'
  | 'data.main_page_meta_image.localFile.children'
  | 'data.main_page_meta_title'
  | 'data.main_page_title.text'
  | 'data.main_page_title.html'
  | 'data.main_page_title.richText'
  | 'data.main_page_title.raw'
  | 'data.notfound_page_link_group'
  | 'data.notfound_page_link_group.display_text'
  | 'data.notfound_page_link_group.link.link_type'
  | 'data.notfound_page_link_group.link.isBroken'
  | 'data.notfound_page_link_group.link.url'
  | 'data.notfound_page_link_group.link.target'
  | 'data.notfound_page_link_group.link.size'
  | 'data.notfound_page_link_group.link.id'
  | 'data.notfound_page_link_group.link.type'
  | 'data.notfound_page_link_group.link.tags'
  | 'data.notfound_page_link_group.link.lang'
  | 'data.notfound_page_link_group.link.slug'
  | 'data.notfound_page_link_group.link.uid'
  | 'data.notfound_page_link_group.link.raw'
  | 'data.notfound_page_title.text'
  | 'data.notfound_page_title.html'
  | 'data.notfound_page_title.richText'
  | 'data.notfound_page_title.raw'
  | 'data.twitter_site_handle'
  | 'dataRaw'
  | 'prismicId'
  | 'alternate_languages'
  | 'alternate_languages.id'
  | 'alternate_languages.uid'
  | 'alternate_languages.lang'
  | 'alternate_languages.type'
  | 'alternate_languages.raw'
  | 'first_publication_date'
  | 'href'
  | 'lang'
  | 'last_publication_date'
  | 'tags'
  | 'type'
  | 'url'
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

type PrismicTeamContentsGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<PrismicTeamContentsEdge>;
  readonly nodes: ReadonlyArray<PrismicTeamContents>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<PrismicTeamContentsGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type PrismicTeamContentsGroupConnection_distinctArgs = {
  field: PrismicTeamContentsFieldsEnum;
};


type PrismicTeamContentsGroupConnection_maxArgs = {
  field: PrismicTeamContentsFieldsEnum;
};


type PrismicTeamContentsGroupConnection_minArgs = {
  field: PrismicTeamContentsFieldsEnum;
};


type PrismicTeamContentsGroupConnection_sumArgs = {
  field: PrismicTeamContentsFieldsEnum;
};


type PrismicTeamContentsGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: PrismicTeamContentsFieldsEnum;
};

type PrismicTeamContentsFilterInput = {
  readonly data: Maybe<PrismicTeamContentsDataTypeFilterInput>;
  readonly dataRaw: Maybe<JSONQueryOperatorInput>;
  readonly prismicId: Maybe<IDQueryOperatorInput>;
  readonly alternate_languages: Maybe<PrismicAlternateLanguageTypeFilterListInput>;
  readonly first_publication_date: Maybe<DateQueryOperatorInput>;
  readonly href: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly last_publication_date: Maybe<DateQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly url: Maybe<StringQueryOperatorInput>;
  readonly _previewable: Maybe<IDQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type PrismicTeamContentsSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<PrismicTeamContentsFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type LokaliseMessagesFilterInput = {
  readonly jobs_page__chapter_all: Maybe<StringQueryOperatorInput>;
  readonly jobs_page__employment_type_intern: Maybe<StringQueryOperatorInput>;
  readonly jobs_page__employment_type_fulltime: Maybe<StringQueryOperatorInput>;
  readonly jobs_page__employment_type_contractor: Maybe<StringQueryOperatorInput>;
  readonly jobs_page__employment_type_all: Maybe<StringQueryOperatorInput>;
  readonly jobs_page__employment_type_assistant: Maybe<StringQueryOperatorInput>;
  readonly jobs_page__search: Maybe<StringQueryOperatorInput>;
  readonly job_post_list__empty_placeholder__no_results: Maybe<StringQueryOperatorInput>;
  readonly job_post_list__empty_placeholder__back_to_list: Maybe<StringQueryOperatorInput>;
  readonly job_post_layout__tab_apply: Maybe<StringQueryOperatorInput>;
  readonly job_post_layout__tab_view: Maybe<StringQueryOperatorInput>;
  readonly job_post_layout__property_karrot_market: Maybe<StringQueryOperatorInput>;
  readonly job_post_page__faq: Maybe<StringQueryOperatorInput>;
  readonly job_post_page__back_to_list: Maybe<StringQueryOperatorInput>;
  readonly job_post_page__external_post_notice: Maybe<StringQueryOperatorInput>;
  readonly job_post_page__external_post_link: Maybe<StringQueryOperatorInput>;
  readonly job_application_page__field_portpolio_label: Maybe<StringQueryOperatorInput>;
  readonly job_application_page__field_phone_label: Maybe<StringQueryOperatorInput>;
  readonly job_application_page__field_phone_placeholder: Maybe<StringQueryOperatorInput>;
  readonly job_application_page__field_email_label: Maybe<StringQueryOperatorInput>;
  readonly job_application_page__field_resume_placeholder: Maybe<StringQueryOperatorInput>;
  readonly job_application_page__field_portpolio_placeholder: Maybe<StringQueryOperatorInput>;
  readonly job_application_page__field_resume_description: Maybe<StringQueryOperatorInput>;
  readonly job_application_page__field_name_label: Maybe<StringQueryOperatorInput>;
  readonly job_application_page__field_portpolio_description: Maybe<StringQueryOperatorInput>;
  readonly job_application_page__field_name_placeholder: Maybe<StringQueryOperatorInput>;
  readonly job_application_page__field_email_placeholder: Maybe<StringQueryOperatorInput>;
  readonly job_application_page__field_resume_label: Maybe<StringQueryOperatorInput>;
  readonly job_application_page__terms_sensitive_info: Maybe<StringQueryOperatorInput>;
  readonly job_application_page__button_submit: Maybe<StringQueryOperatorInput>;
  readonly job_application_page__terms_privacy_info: Maybe<StringQueryOperatorInput>;
  readonly job_application_page__confirm_apply: Maybe<StringQueryOperatorInput>;
  readonly job_post_layout__property_karrot_pay: Maybe<StringQueryOperatorInput>;
  readonly job_application_page__alert_completed: Maybe<StringQueryOperatorInput>;
  readonly job_application_page__alert_failed: Maybe<StringQueryOperatorInput>;
  readonly jobs_page__default_meta_title: Maybe<StringQueryOperatorInput>;
  readonly job_post_layout__prior_experience_yes: Maybe<StringQueryOperatorInput>;
  readonly job_post_layout__prior_experience_no: Maybe<StringQueryOperatorInput>;
  readonly job_post_layout__prior_experience_whatever: Maybe<StringQueryOperatorInput>;
  readonly job_application_page__field_file_placeholder: Maybe<StringQueryOperatorInput>;
  readonly detail_link__default_label: Maybe<StringQueryOperatorInput>;
  readonly form_field__placeholder: Maybe<StringQueryOperatorInput>;
  readonly form_field__empty_placeholder: Maybe<StringQueryOperatorInput>;
  readonly form_field__organization_name: Maybe<StringQueryOperatorInput>;
  readonly form_field__yes_placeholder: Maybe<StringQueryOperatorInput>;
  readonly form_field__no_placeholder: Maybe<StringQueryOperatorInput>;
};

type LokaliseTranslationConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<LokaliseTranslationEdge>;
  readonly nodes: ReadonlyArray<LokaliseTranslation>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<LokaliseTranslationGroupConnection>;
};


type LokaliseTranslationConnection_distinctArgs = {
  field: LokaliseTranslationFieldsEnum;
};


type LokaliseTranslationConnection_maxArgs = {
  field: LokaliseTranslationFieldsEnum;
};


type LokaliseTranslationConnection_minArgs = {
  field: LokaliseTranslationFieldsEnum;
};


type LokaliseTranslationConnection_sumArgs = {
  field: LokaliseTranslationFieldsEnum;
};


type LokaliseTranslationConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: LokaliseTranslationFieldsEnum;
};

type LokaliseTranslationEdge = {
  readonly next: Maybe<LokaliseTranslation>;
  readonly node: LokaliseTranslation;
  readonly previous: Maybe<LokaliseTranslation>;
};

type LokaliseTranslationFieldsEnum =
  | 'locale'
  | 'messages.jobs_page__chapter_all'
  | 'messages.jobs_page__employment_type_intern'
  | 'messages.jobs_page__employment_type_fulltime'
  | 'messages.jobs_page__employment_type_contractor'
  | 'messages.jobs_page__employment_type_all'
  | 'messages.jobs_page__employment_type_assistant'
  | 'messages.jobs_page__search'
  | 'messages.job_post_list__empty_placeholder__no_results'
  | 'messages.job_post_list__empty_placeholder__back_to_list'
  | 'messages.job_post_layout__tab_apply'
  | 'messages.job_post_layout__tab_view'
  | 'messages.job_post_layout__property_karrot_market'
  | 'messages.job_post_page__faq'
  | 'messages.job_post_page__back_to_list'
  | 'messages.job_post_page__external_post_notice'
  | 'messages.job_post_page__external_post_link'
  | 'messages.job_application_page__field_portpolio_label'
  | 'messages.job_application_page__field_phone_label'
  | 'messages.job_application_page__field_phone_placeholder'
  | 'messages.job_application_page__field_email_label'
  | 'messages.job_application_page__field_resume_placeholder'
  | 'messages.job_application_page__field_portpolio_placeholder'
  | 'messages.job_application_page__field_resume_description'
  | 'messages.job_application_page__field_name_label'
  | 'messages.job_application_page__field_portpolio_description'
  | 'messages.job_application_page__field_name_placeholder'
  | 'messages.job_application_page__field_email_placeholder'
  | 'messages.job_application_page__field_resume_label'
  | 'messages.job_application_page__terms_sensitive_info'
  | 'messages.job_application_page__button_submit'
  | 'messages.job_application_page__terms_privacy_info'
  | 'messages.job_application_page__confirm_apply'
  | 'messages.job_post_layout__property_karrot_pay'
  | 'messages.job_application_page__alert_completed'
  | 'messages.job_application_page__alert_failed'
  | 'messages.jobs_page__default_meta_title'
  | 'messages.job_post_layout__prior_experience_yes'
  | 'messages.job_post_layout__prior_experience_no'
  | 'messages.job_post_layout__prior_experience_whatever'
  | 'messages.job_application_page__field_file_placeholder'
  | 'messages.detail_link__default_label'
  | 'messages.form_field__placeholder'
  | 'messages.form_field__empty_placeholder'
  | 'messages.form_field__organization_name'
  | 'messages.form_field__yes_placeholder'
  | 'messages.form_field__no_placeholder'
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

type LokaliseTranslationGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<LokaliseTranslationEdge>;
  readonly nodes: ReadonlyArray<LokaliseTranslation>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<LokaliseTranslationGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type LokaliseTranslationGroupConnection_distinctArgs = {
  field: LokaliseTranslationFieldsEnum;
};


type LokaliseTranslationGroupConnection_maxArgs = {
  field: LokaliseTranslationFieldsEnum;
};


type LokaliseTranslationGroupConnection_minArgs = {
  field: LokaliseTranslationFieldsEnum;
};


type LokaliseTranslationGroupConnection_sumArgs = {
  field: LokaliseTranslationFieldsEnum;
};


type LokaliseTranslationGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: LokaliseTranslationFieldsEnum;
};

type LokaliseTranslationFilterInput = {
  readonly locale: Maybe<StringQueryOperatorInput>;
  readonly messages: Maybe<LokaliseMessagesFilterInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type LokaliseTranslationSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<LokaliseTranslationFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type GreenhouseJobBoardJobFilterInput = {
  readonly ghId: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly boardUrl: Maybe<StringQueryOperatorInput>;
  readonly content: Maybe<StringQueryOperatorInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly questions: Maybe<GreenhouseJobBoardJobQuestionFilterListInput>;
  readonly locationQuestions: Maybe<GreenhouseJobBoardJobQuestionFilterListInput>;
  readonly departments: Maybe<GreenhouseJobBoardDepartmentFilterListInput>;
  readonly metadata: Maybe<GreenhouseJobBoardJobCustomFieldMetadataFilterListInput>;
  readonly boardToken: Maybe<StringQueryOperatorInput>;
  readonly childJobPost: Maybe<JobPostFilterInput>;
  readonly childrenJobPost: Maybe<JobPostFilterListInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type GreenhouseJobBoardJobQuestionFilterListInput = {
  readonly elemMatch: Maybe<GreenhouseJobBoardJobQuestionFilterInput>;
};

type GreenhouseJobBoardJobQuestionFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly required: Maybe<BooleanQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
};

type GreenhouseJobBoardDepartmentFilterListInput = {
  readonly elemMatch: Maybe<GreenhouseJobBoardDepartmentFilterInput>;
};

type GreenhouseJobBoardDepartmentFilterInput = {
  readonly ghId: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly jobs: Maybe<GreenhouseJobBoardJobFilterListInput>;
  readonly parentDepartment: Maybe<GreenhouseJobBoardDepartmentFilterInput>;
  readonly childDepartments: Maybe<GreenhouseJobBoardDepartmentFilterListInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type GreenhouseJobBoardJobFilterListInput = {
  readonly elemMatch: Maybe<GreenhouseJobBoardJobFilterInput>;
};

type GreenhouseJobBoardJobCustomFieldMetadataFilterListInput = {
  readonly elemMatch: Maybe<GreenhouseJobBoardJobCustomFieldMetadataFilterInput>;
};

type GreenhouseJobBoardJobCustomFieldMetadataFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly type: Maybe<GreenhouseJobBoardJobCustomFieldTypeQueryOperatorInput>;
  readonly value: Maybe<StringQueryOperatorInput>;
};

type GreenhouseJobBoardJobCustomFieldTypeQueryOperatorInput = {
  readonly eq: Maybe<GreenhouseJobBoardJobCustomFieldType>;
  readonly ne: Maybe<GreenhouseJobBoardJobCustomFieldType>;
  readonly in: Maybe<ReadonlyArray<Maybe<GreenhouseJobBoardJobCustomFieldType>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<GreenhouseJobBoardJobCustomFieldType>>>;
};

type JobPostFilterInput = {
  readonly slug: Maybe<StringQueryOperatorInput>;
  readonly absoluteUrl: Maybe<StringQueryOperatorInput>;
  readonly ghId: Maybe<StringQueryOperatorInput>;
  readonly parentJob: Maybe<GreenhouseJobBoardJobFilterInput>;
  readonly updatedAt: Maybe<DateQueryOperatorInput>;
  readonly validThrough: Maybe<DateQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly boardToken: Maybe<StringQueryOperatorInput>;
  readonly boardUrl: Maybe<StringQueryOperatorInput>;
  readonly content: Maybe<JobPostContentSectionFilterListInput>;
  readonly rawContent: Maybe<StringQueryOperatorInput>;
  readonly corporate: Maybe<JobCorporateQueryOperatorInput>;
  readonly employmentType: Maybe<JobEmploymentTypeQueryOperatorInput>;
  readonly alternativeCivilianService: Maybe<BooleanQueryOperatorInput>;
  readonly priorExperience: Maybe<JobPriorExperienceQueryOperatorInput>;
  readonly chapter: Maybe<StringQueryOperatorInput>;
  readonly keywords: Maybe<StringQueryOperatorInput>;
  readonly order: Maybe<IntQueryOperatorInput>;
  readonly externalUrl: Maybe<StringQueryOperatorInput>;
  readonly tags: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
};

type JobPostContentSectionFilterListInput = {
  readonly elemMatch: Maybe<JobPostContentSectionFilterInput>;
};

type JobPostContentSectionFilterInput = {
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly level: Maybe<HeadingLevelQueryOperatorInput>;
  readonly bodyHtml: Maybe<StringQueryOperatorInput>;
};

type HeadingLevelQueryOperatorInput = {
  readonly eq: Maybe<HeadingLevel>;
  readonly ne: Maybe<HeadingLevel>;
  readonly in: Maybe<ReadonlyArray<Maybe<HeadingLevel>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<HeadingLevel>>>;
};

type JobCorporateQueryOperatorInput = {
  readonly eq: Maybe<JobCorporate>;
  readonly ne: Maybe<JobCorporate>;
  readonly in: Maybe<ReadonlyArray<Maybe<JobCorporate>>>;
  readonly nin: Maybe<ReadonlyArray<Maybe<JobCorporate>>>;
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

type JobPostFilterListInput = {
  readonly elemMatch: Maybe<JobPostFilterInput>;
};

type JobPostConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<JobPostEdge>;
  readonly nodes: ReadonlyArray<JobPost>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<JobPostGroupConnection>;
};


type JobPostConnection_distinctArgs = {
  field: JobPostFieldsEnum;
};


type JobPostConnection_maxArgs = {
  field: JobPostFieldsEnum;
};


type JobPostConnection_minArgs = {
  field: JobPostFieldsEnum;
};


type JobPostConnection_sumArgs = {
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
  | 'slug'
  | 'absoluteUrl'
  | 'ghId'
  | 'parentJob.ghId'
  | 'parentJob.title'
  | 'parentJob.boardUrl'
  | 'parentJob.content'
  | 'parentJob.updatedAt'
  | 'parentJob.questions'
  | 'parentJob.questions.label'
  | 'parentJob.questions.required'
  | 'parentJob.questions.description'
  | 'parentJob.questions.name'
  | 'parentJob.locationQuestions'
  | 'parentJob.locationQuestions.label'
  | 'parentJob.locationQuestions.required'
  | 'parentJob.locationQuestions.description'
  | 'parentJob.locationQuestions.name'
  | 'parentJob.departments'
  | 'parentJob.departments.ghId'
  | 'parentJob.departments.name'
  | 'parentJob.departments.jobs'
  | 'parentJob.departments.jobs.ghId'
  | 'parentJob.departments.jobs.title'
  | 'parentJob.departments.jobs.boardUrl'
  | 'parentJob.departments.jobs.content'
  | 'parentJob.departments.jobs.updatedAt'
  | 'parentJob.departments.jobs.questions'
  | 'parentJob.departments.jobs.locationQuestions'
  | 'parentJob.departments.jobs.departments'
  | 'parentJob.departments.jobs.metadata'
  | 'parentJob.departments.jobs.boardToken'
  | 'parentJob.departments.jobs.childrenJobPost'
  | 'parentJob.departments.jobs.id'
  | 'parentJob.departments.jobs.children'
  | 'parentJob.departments.parentDepartment.ghId'
  | 'parentJob.departments.parentDepartment.name'
  | 'parentJob.departments.parentDepartment.jobs'
  | 'parentJob.departments.parentDepartment.childDepartments'
  | 'parentJob.departments.parentDepartment.id'
  | 'parentJob.departments.parentDepartment.children'
  | 'parentJob.departments.childDepartments'
  | 'parentJob.departments.childDepartments.ghId'
  | 'parentJob.departments.childDepartments.name'
  | 'parentJob.departments.childDepartments.jobs'
  | 'parentJob.departments.childDepartments.childDepartments'
  | 'parentJob.departments.childDepartments.id'
  | 'parentJob.departments.childDepartments.children'
  | 'parentJob.departments.id'
  | 'parentJob.departments.parent.id'
  | 'parentJob.departments.parent.children'
  | 'parentJob.departments.children'
  | 'parentJob.departments.children.id'
  | 'parentJob.departments.children.children'
  | 'parentJob.departments.internal.content'
  | 'parentJob.departments.internal.contentDigest'
  | 'parentJob.departments.internal.description'
  | 'parentJob.departments.internal.fieldOwners'
  | 'parentJob.departments.internal.ignoreType'
  | 'parentJob.departments.internal.mediaType'
  | 'parentJob.departments.internal.owner'
  | 'parentJob.departments.internal.type'
  | 'parentJob.metadata'
  | 'parentJob.metadata.id'
  | 'parentJob.metadata.name'
  | 'parentJob.metadata.type'
  | 'parentJob.metadata.value'
  | 'parentJob.boardToken'
  | 'parentJob.childJobPost.slug'
  | 'parentJob.childJobPost.absoluteUrl'
  | 'parentJob.childJobPost.ghId'
  | 'parentJob.childJobPost.parentJob.ghId'
  | 'parentJob.childJobPost.parentJob.title'
  | 'parentJob.childJobPost.parentJob.boardUrl'
  | 'parentJob.childJobPost.parentJob.content'
  | 'parentJob.childJobPost.parentJob.updatedAt'
  | 'parentJob.childJobPost.parentJob.questions'
  | 'parentJob.childJobPost.parentJob.locationQuestions'
  | 'parentJob.childJobPost.parentJob.departments'
  | 'parentJob.childJobPost.parentJob.metadata'
  | 'parentJob.childJobPost.parentJob.boardToken'
  | 'parentJob.childJobPost.parentJob.childrenJobPost'
  | 'parentJob.childJobPost.parentJob.id'
  | 'parentJob.childJobPost.parentJob.children'
  | 'parentJob.childJobPost.updatedAt'
  | 'parentJob.childJobPost.validThrough'
  | 'parentJob.childJobPost.title'
  | 'parentJob.childJobPost.boardToken'
  | 'parentJob.childJobPost.boardUrl'
  | 'parentJob.childJobPost.content'
  | 'parentJob.childJobPost.content.title'
  | 'parentJob.childJobPost.content.level'
  | 'parentJob.childJobPost.content.bodyHtml'
  | 'parentJob.childJobPost.rawContent'
  | 'parentJob.childJobPost.corporate'
  | 'parentJob.childJobPost.employmentType'
  | 'parentJob.childJobPost.alternativeCivilianService'
  | 'parentJob.childJobPost.priorExperience'
  | 'parentJob.childJobPost.chapter'
  | 'parentJob.childJobPost.keywords'
  | 'parentJob.childJobPost.order'
  | 'parentJob.childJobPost.externalUrl'
  | 'parentJob.childJobPost.tags'
  | 'parentJob.childJobPost.id'
  | 'parentJob.childJobPost.parent.id'
  | 'parentJob.childJobPost.parent.children'
  | 'parentJob.childJobPost.children'
  | 'parentJob.childJobPost.children.id'
  | 'parentJob.childJobPost.children.children'
  | 'parentJob.childJobPost.internal.content'
  | 'parentJob.childJobPost.internal.contentDigest'
  | 'parentJob.childJobPost.internal.description'
  | 'parentJob.childJobPost.internal.fieldOwners'
  | 'parentJob.childJobPost.internal.ignoreType'
  | 'parentJob.childJobPost.internal.mediaType'
  | 'parentJob.childJobPost.internal.owner'
  | 'parentJob.childJobPost.internal.type'
  | 'parentJob.childrenJobPost'
  | 'parentJob.childrenJobPost.slug'
  | 'parentJob.childrenJobPost.absoluteUrl'
  | 'parentJob.childrenJobPost.ghId'
  | 'parentJob.childrenJobPost.parentJob.ghId'
  | 'parentJob.childrenJobPost.parentJob.title'
  | 'parentJob.childrenJobPost.parentJob.boardUrl'
  | 'parentJob.childrenJobPost.parentJob.content'
  | 'parentJob.childrenJobPost.parentJob.updatedAt'
  | 'parentJob.childrenJobPost.parentJob.questions'
  | 'parentJob.childrenJobPost.parentJob.locationQuestions'
  | 'parentJob.childrenJobPost.parentJob.departments'
  | 'parentJob.childrenJobPost.parentJob.metadata'
  | 'parentJob.childrenJobPost.parentJob.boardToken'
  | 'parentJob.childrenJobPost.parentJob.childrenJobPost'
  | 'parentJob.childrenJobPost.parentJob.id'
  | 'parentJob.childrenJobPost.parentJob.children'
  | 'parentJob.childrenJobPost.updatedAt'
  | 'parentJob.childrenJobPost.validThrough'
  | 'parentJob.childrenJobPost.title'
  | 'parentJob.childrenJobPost.boardToken'
  | 'parentJob.childrenJobPost.boardUrl'
  | 'parentJob.childrenJobPost.content'
  | 'parentJob.childrenJobPost.content.title'
  | 'parentJob.childrenJobPost.content.level'
  | 'parentJob.childrenJobPost.content.bodyHtml'
  | 'parentJob.childrenJobPost.rawContent'
  | 'parentJob.childrenJobPost.corporate'
  | 'parentJob.childrenJobPost.employmentType'
  | 'parentJob.childrenJobPost.alternativeCivilianService'
  | 'parentJob.childrenJobPost.priorExperience'
  | 'parentJob.childrenJobPost.chapter'
  | 'parentJob.childrenJobPost.keywords'
  | 'parentJob.childrenJobPost.order'
  | 'parentJob.childrenJobPost.externalUrl'
  | 'parentJob.childrenJobPost.tags'
  | 'parentJob.childrenJobPost.id'
  | 'parentJob.childrenJobPost.parent.id'
  | 'parentJob.childrenJobPost.parent.children'
  | 'parentJob.childrenJobPost.children'
  | 'parentJob.childrenJobPost.children.id'
  | 'parentJob.childrenJobPost.children.children'
  | 'parentJob.childrenJobPost.internal.content'
  | 'parentJob.childrenJobPost.internal.contentDigest'
  | 'parentJob.childrenJobPost.internal.description'
  | 'parentJob.childrenJobPost.internal.fieldOwners'
  | 'parentJob.childrenJobPost.internal.ignoreType'
  | 'parentJob.childrenJobPost.internal.mediaType'
  | 'parentJob.childrenJobPost.internal.owner'
  | 'parentJob.childrenJobPost.internal.type'
  | 'parentJob.id'
  | 'parentJob.parent.id'
  | 'parentJob.parent.parent.id'
  | 'parentJob.parent.parent.children'
  | 'parentJob.parent.children'
  | 'parentJob.parent.children.id'
  | 'parentJob.parent.children.children'
  | 'parentJob.parent.internal.content'
  | 'parentJob.parent.internal.contentDigest'
  | 'parentJob.parent.internal.description'
  | 'parentJob.parent.internal.fieldOwners'
  | 'parentJob.parent.internal.ignoreType'
  | 'parentJob.parent.internal.mediaType'
  | 'parentJob.parent.internal.owner'
  | 'parentJob.parent.internal.type'
  | 'parentJob.children'
  | 'parentJob.children.id'
  | 'parentJob.children.parent.id'
  | 'parentJob.children.parent.children'
  | 'parentJob.children.children'
  | 'parentJob.children.children.id'
  | 'parentJob.children.children.children'
  | 'parentJob.children.internal.content'
  | 'parentJob.children.internal.contentDigest'
  | 'parentJob.children.internal.description'
  | 'parentJob.children.internal.fieldOwners'
  | 'parentJob.children.internal.ignoreType'
  | 'parentJob.children.internal.mediaType'
  | 'parentJob.children.internal.owner'
  | 'parentJob.children.internal.type'
  | 'parentJob.internal.content'
  | 'parentJob.internal.contentDigest'
  | 'parentJob.internal.description'
  | 'parentJob.internal.fieldOwners'
  | 'parentJob.internal.ignoreType'
  | 'parentJob.internal.mediaType'
  | 'parentJob.internal.owner'
  | 'parentJob.internal.type'
  | 'updatedAt'
  | 'validThrough'
  | 'title'
  | 'boardToken'
  | 'boardUrl'
  | 'content'
  | 'content.title'
  | 'content.level'
  | 'content.bodyHtml'
  | 'rawContent'
  | 'corporate'
  | 'employmentType'
  | 'alternativeCivilianService'
  | 'priorExperience'
  | 'chapter'
  | 'keywords'
  | 'order'
  | 'externalUrl'
  | 'tags'
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
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<JobPostGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type JobPostGroupConnection_distinctArgs = {
  field: JobPostFieldsEnum;
};


type JobPostGroupConnection_maxArgs = {
  field: JobPostFieldsEnum;
};


type JobPostGroupConnection_minArgs = {
  field: JobPostFieldsEnum;
};


type JobPostGroupConnection_sumArgs = {
  field: JobPostFieldsEnum;
};


type JobPostGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: JobPostFieldsEnum;
};

type JobPostSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<JobPostFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type GreenhouseJobBoardJobConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GreenhouseJobBoardJobEdge>;
  readonly nodes: ReadonlyArray<GreenhouseJobBoardJob>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<GreenhouseJobBoardJobGroupConnection>;
};


type GreenhouseJobBoardJobConnection_distinctArgs = {
  field: GreenhouseJobBoardJobFieldsEnum;
};


type GreenhouseJobBoardJobConnection_maxArgs = {
  field: GreenhouseJobBoardJobFieldsEnum;
};


type GreenhouseJobBoardJobConnection_minArgs = {
  field: GreenhouseJobBoardJobFieldsEnum;
};


type GreenhouseJobBoardJobConnection_sumArgs = {
  field: GreenhouseJobBoardJobFieldsEnum;
};


type GreenhouseJobBoardJobConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GreenhouseJobBoardJobFieldsEnum;
};

type GreenhouseJobBoardJobEdge = {
  readonly next: Maybe<GreenhouseJobBoardJob>;
  readonly node: GreenhouseJobBoardJob;
  readonly previous: Maybe<GreenhouseJobBoardJob>;
};

type GreenhouseJobBoardJobFieldsEnum =
  | 'ghId'
  | 'title'
  | 'boardUrl'
  | 'content'
  | 'updatedAt'
  | 'questions'
  | 'questions.label'
  | 'questions.required'
  | 'questions.description'
  | 'questions.name'
  | 'locationQuestions'
  | 'locationQuestions.label'
  | 'locationQuestions.required'
  | 'locationQuestions.description'
  | 'locationQuestions.name'
  | 'departments'
  | 'departments.ghId'
  | 'departments.name'
  | 'departments.jobs'
  | 'departments.jobs.ghId'
  | 'departments.jobs.title'
  | 'departments.jobs.boardUrl'
  | 'departments.jobs.content'
  | 'departments.jobs.updatedAt'
  | 'departments.jobs.questions'
  | 'departments.jobs.questions.label'
  | 'departments.jobs.questions.required'
  | 'departments.jobs.questions.description'
  | 'departments.jobs.questions.name'
  | 'departments.jobs.locationQuestions'
  | 'departments.jobs.locationQuestions.label'
  | 'departments.jobs.locationQuestions.required'
  | 'departments.jobs.locationQuestions.description'
  | 'departments.jobs.locationQuestions.name'
  | 'departments.jobs.departments'
  | 'departments.jobs.departments.ghId'
  | 'departments.jobs.departments.name'
  | 'departments.jobs.departments.jobs'
  | 'departments.jobs.departments.childDepartments'
  | 'departments.jobs.departments.id'
  | 'departments.jobs.departments.children'
  | 'departments.jobs.metadata'
  | 'departments.jobs.metadata.id'
  | 'departments.jobs.metadata.name'
  | 'departments.jobs.metadata.type'
  | 'departments.jobs.metadata.value'
  | 'departments.jobs.boardToken'
  | 'departments.jobs.childJobPost.slug'
  | 'departments.jobs.childJobPost.absoluteUrl'
  | 'departments.jobs.childJobPost.ghId'
  | 'departments.jobs.childJobPost.updatedAt'
  | 'departments.jobs.childJobPost.validThrough'
  | 'departments.jobs.childJobPost.title'
  | 'departments.jobs.childJobPost.boardToken'
  | 'departments.jobs.childJobPost.boardUrl'
  | 'departments.jobs.childJobPost.content'
  | 'departments.jobs.childJobPost.rawContent'
  | 'departments.jobs.childJobPost.corporate'
  | 'departments.jobs.childJobPost.employmentType'
  | 'departments.jobs.childJobPost.alternativeCivilianService'
  | 'departments.jobs.childJobPost.priorExperience'
  | 'departments.jobs.childJobPost.chapter'
  | 'departments.jobs.childJobPost.keywords'
  | 'departments.jobs.childJobPost.order'
  | 'departments.jobs.childJobPost.externalUrl'
  | 'departments.jobs.childJobPost.tags'
  | 'departments.jobs.childJobPost.id'
  | 'departments.jobs.childJobPost.children'
  | 'departments.jobs.childrenJobPost'
  | 'departments.jobs.childrenJobPost.slug'
  | 'departments.jobs.childrenJobPost.absoluteUrl'
  | 'departments.jobs.childrenJobPost.ghId'
  | 'departments.jobs.childrenJobPost.updatedAt'
  | 'departments.jobs.childrenJobPost.validThrough'
  | 'departments.jobs.childrenJobPost.title'
  | 'departments.jobs.childrenJobPost.boardToken'
  | 'departments.jobs.childrenJobPost.boardUrl'
  | 'departments.jobs.childrenJobPost.content'
  | 'departments.jobs.childrenJobPost.rawContent'
  | 'departments.jobs.childrenJobPost.corporate'
  | 'departments.jobs.childrenJobPost.employmentType'
  | 'departments.jobs.childrenJobPost.alternativeCivilianService'
  | 'departments.jobs.childrenJobPost.priorExperience'
  | 'departments.jobs.childrenJobPost.chapter'
  | 'departments.jobs.childrenJobPost.keywords'
  | 'departments.jobs.childrenJobPost.order'
  | 'departments.jobs.childrenJobPost.externalUrl'
  | 'departments.jobs.childrenJobPost.tags'
  | 'departments.jobs.childrenJobPost.id'
  | 'departments.jobs.childrenJobPost.children'
  | 'departments.jobs.id'
  | 'departments.jobs.parent.id'
  | 'departments.jobs.parent.children'
  | 'departments.jobs.children'
  | 'departments.jobs.children.id'
  | 'departments.jobs.children.children'
  | 'departments.jobs.internal.content'
  | 'departments.jobs.internal.contentDigest'
  | 'departments.jobs.internal.description'
  | 'departments.jobs.internal.fieldOwners'
  | 'departments.jobs.internal.ignoreType'
  | 'departments.jobs.internal.mediaType'
  | 'departments.jobs.internal.owner'
  | 'departments.jobs.internal.type'
  | 'departments.parentDepartment.ghId'
  | 'departments.parentDepartment.name'
  | 'departments.parentDepartment.jobs'
  | 'departments.parentDepartment.jobs.ghId'
  | 'departments.parentDepartment.jobs.title'
  | 'departments.parentDepartment.jobs.boardUrl'
  | 'departments.parentDepartment.jobs.content'
  | 'departments.parentDepartment.jobs.updatedAt'
  | 'departments.parentDepartment.jobs.questions'
  | 'departments.parentDepartment.jobs.locationQuestions'
  | 'departments.parentDepartment.jobs.departments'
  | 'departments.parentDepartment.jobs.metadata'
  | 'departments.parentDepartment.jobs.boardToken'
  | 'departments.parentDepartment.jobs.childrenJobPost'
  | 'departments.parentDepartment.jobs.id'
  | 'departments.parentDepartment.jobs.children'
  | 'departments.parentDepartment.parentDepartment.ghId'
  | 'departments.parentDepartment.parentDepartment.name'
  | 'departments.parentDepartment.parentDepartment.jobs'
  | 'departments.parentDepartment.parentDepartment.childDepartments'
  | 'departments.parentDepartment.parentDepartment.id'
  | 'departments.parentDepartment.parentDepartment.children'
  | 'departments.parentDepartment.childDepartments'
  | 'departments.parentDepartment.childDepartments.ghId'
  | 'departments.parentDepartment.childDepartments.name'
  | 'departments.parentDepartment.childDepartments.jobs'
  | 'departments.parentDepartment.childDepartments.childDepartments'
  | 'departments.parentDepartment.childDepartments.id'
  | 'departments.parentDepartment.childDepartments.children'
  | 'departments.parentDepartment.id'
  | 'departments.parentDepartment.parent.id'
  | 'departments.parentDepartment.parent.children'
  | 'departments.parentDepartment.children'
  | 'departments.parentDepartment.children.id'
  | 'departments.parentDepartment.children.children'
  | 'departments.parentDepartment.internal.content'
  | 'departments.parentDepartment.internal.contentDigest'
  | 'departments.parentDepartment.internal.description'
  | 'departments.parentDepartment.internal.fieldOwners'
  | 'departments.parentDepartment.internal.ignoreType'
  | 'departments.parentDepartment.internal.mediaType'
  | 'departments.parentDepartment.internal.owner'
  | 'departments.parentDepartment.internal.type'
  | 'departments.childDepartments'
  | 'departments.childDepartments.ghId'
  | 'departments.childDepartments.name'
  | 'departments.childDepartments.jobs'
  | 'departments.childDepartments.jobs.ghId'
  | 'departments.childDepartments.jobs.title'
  | 'departments.childDepartments.jobs.boardUrl'
  | 'departments.childDepartments.jobs.content'
  | 'departments.childDepartments.jobs.updatedAt'
  | 'departments.childDepartments.jobs.questions'
  | 'departments.childDepartments.jobs.locationQuestions'
  | 'departments.childDepartments.jobs.departments'
  | 'departments.childDepartments.jobs.metadata'
  | 'departments.childDepartments.jobs.boardToken'
  | 'departments.childDepartments.jobs.childrenJobPost'
  | 'departments.childDepartments.jobs.id'
  | 'departments.childDepartments.jobs.children'
  | 'departments.childDepartments.parentDepartment.ghId'
  | 'departments.childDepartments.parentDepartment.name'
  | 'departments.childDepartments.parentDepartment.jobs'
  | 'departments.childDepartments.parentDepartment.childDepartments'
  | 'departments.childDepartments.parentDepartment.id'
  | 'departments.childDepartments.parentDepartment.children'
  | 'departments.childDepartments.childDepartments'
  | 'departments.childDepartments.childDepartments.ghId'
  | 'departments.childDepartments.childDepartments.name'
  | 'departments.childDepartments.childDepartments.jobs'
  | 'departments.childDepartments.childDepartments.childDepartments'
  | 'departments.childDepartments.childDepartments.id'
  | 'departments.childDepartments.childDepartments.children'
  | 'departments.childDepartments.id'
  | 'departments.childDepartments.parent.id'
  | 'departments.childDepartments.parent.children'
  | 'departments.childDepartments.children'
  | 'departments.childDepartments.children.id'
  | 'departments.childDepartments.children.children'
  | 'departments.childDepartments.internal.content'
  | 'departments.childDepartments.internal.contentDigest'
  | 'departments.childDepartments.internal.description'
  | 'departments.childDepartments.internal.fieldOwners'
  | 'departments.childDepartments.internal.ignoreType'
  | 'departments.childDepartments.internal.mediaType'
  | 'departments.childDepartments.internal.owner'
  | 'departments.childDepartments.internal.type'
  | 'departments.id'
  | 'departments.parent.id'
  | 'departments.parent.parent.id'
  | 'departments.parent.parent.children'
  | 'departments.parent.children'
  | 'departments.parent.children.id'
  | 'departments.parent.children.children'
  | 'departments.parent.internal.content'
  | 'departments.parent.internal.contentDigest'
  | 'departments.parent.internal.description'
  | 'departments.parent.internal.fieldOwners'
  | 'departments.parent.internal.ignoreType'
  | 'departments.parent.internal.mediaType'
  | 'departments.parent.internal.owner'
  | 'departments.parent.internal.type'
  | 'departments.children'
  | 'departments.children.id'
  | 'departments.children.parent.id'
  | 'departments.children.parent.children'
  | 'departments.children.children'
  | 'departments.children.children.id'
  | 'departments.children.children.children'
  | 'departments.children.internal.content'
  | 'departments.children.internal.contentDigest'
  | 'departments.children.internal.description'
  | 'departments.children.internal.fieldOwners'
  | 'departments.children.internal.ignoreType'
  | 'departments.children.internal.mediaType'
  | 'departments.children.internal.owner'
  | 'departments.children.internal.type'
  | 'departments.internal.content'
  | 'departments.internal.contentDigest'
  | 'departments.internal.description'
  | 'departments.internal.fieldOwners'
  | 'departments.internal.ignoreType'
  | 'departments.internal.mediaType'
  | 'departments.internal.owner'
  | 'departments.internal.type'
  | 'metadata'
  | 'metadata.id'
  | 'metadata.name'
  | 'metadata.type'
  | 'metadata.value'
  | 'boardToken'
  | 'childJobPost.slug'
  | 'childJobPost.absoluteUrl'
  | 'childJobPost.ghId'
  | 'childJobPost.parentJob.ghId'
  | 'childJobPost.parentJob.title'
  | 'childJobPost.parentJob.boardUrl'
  | 'childJobPost.parentJob.content'
  | 'childJobPost.parentJob.updatedAt'
  | 'childJobPost.parentJob.questions'
  | 'childJobPost.parentJob.questions.label'
  | 'childJobPost.parentJob.questions.required'
  | 'childJobPost.parentJob.questions.description'
  | 'childJobPost.parentJob.questions.name'
  | 'childJobPost.parentJob.locationQuestions'
  | 'childJobPost.parentJob.locationQuestions.label'
  | 'childJobPost.parentJob.locationQuestions.required'
  | 'childJobPost.parentJob.locationQuestions.description'
  | 'childJobPost.parentJob.locationQuestions.name'
  | 'childJobPost.parentJob.departments'
  | 'childJobPost.parentJob.departments.ghId'
  | 'childJobPost.parentJob.departments.name'
  | 'childJobPost.parentJob.departments.jobs'
  | 'childJobPost.parentJob.departments.childDepartments'
  | 'childJobPost.parentJob.departments.id'
  | 'childJobPost.parentJob.departments.children'
  | 'childJobPost.parentJob.metadata'
  | 'childJobPost.parentJob.metadata.id'
  | 'childJobPost.parentJob.metadata.name'
  | 'childJobPost.parentJob.metadata.type'
  | 'childJobPost.parentJob.metadata.value'
  | 'childJobPost.parentJob.boardToken'
  | 'childJobPost.parentJob.childJobPost.slug'
  | 'childJobPost.parentJob.childJobPost.absoluteUrl'
  | 'childJobPost.parentJob.childJobPost.ghId'
  | 'childJobPost.parentJob.childJobPost.updatedAt'
  | 'childJobPost.parentJob.childJobPost.validThrough'
  | 'childJobPost.parentJob.childJobPost.title'
  | 'childJobPost.parentJob.childJobPost.boardToken'
  | 'childJobPost.parentJob.childJobPost.boardUrl'
  | 'childJobPost.parentJob.childJobPost.content'
  | 'childJobPost.parentJob.childJobPost.rawContent'
  | 'childJobPost.parentJob.childJobPost.corporate'
  | 'childJobPost.parentJob.childJobPost.employmentType'
  | 'childJobPost.parentJob.childJobPost.alternativeCivilianService'
  | 'childJobPost.parentJob.childJobPost.priorExperience'
  | 'childJobPost.parentJob.childJobPost.chapter'
  | 'childJobPost.parentJob.childJobPost.keywords'
  | 'childJobPost.parentJob.childJobPost.order'
  | 'childJobPost.parentJob.childJobPost.externalUrl'
  | 'childJobPost.parentJob.childJobPost.tags'
  | 'childJobPost.parentJob.childJobPost.id'
  | 'childJobPost.parentJob.childJobPost.children'
  | 'childJobPost.parentJob.childrenJobPost'
  | 'childJobPost.parentJob.childrenJobPost.slug'
  | 'childJobPost.parentJob.childrenJobPost.absoluteUrl'
  | 'childJobPost.parentJob.childrenJobPost.ghId'
  | 'childJobPost.parentJob.childrenJobPost.updatedAt'
  | 'childJobPost.parentJob.childrenJobPost.validThrough'
  | 'childJobPost.parentJob.childrenJobPost.title'
  | 'childJobPost.parentJob.childrenJobPost.boardToken'
  | 'childJobPost.parentJob.childrenJobPost.boardUrl'
  | 'childJobPost.parentJob.childrenJobPost.content'
  | 'childJobPost.parentJob.childrenJobPost.rawContent'
  | 'childJobPost.parentJob.childrenJobPost.corporate'
  | 'childJobPost.parentJob.childrenJobPost.employmentType'
  | 'childJobPost.parentJob.childrenJobPost.alternativeCivilianService'
  | 'childJobPost.parentJob.childrenJobPost.priorExperience'
  | 'childJobPost.parentJob.childrenJobPost.chapter'
  | 'childJobPost.parentJob.childrenJobPost.keywords'
  | 'childJobPost.parentJob.childrenJobPost.order'
  | 'childJobPost.parentJob.childrenJobPost.externalUrl'
  | 'childJobPost.parentJob.childrenJobPost.tags'
  | 'childJobPost.parentJob.childrenJobPost.id'
  | 'childJobPost.parentJob.childrenJobPost.children'
  | 'childJobPost.parentJob.id'
  | 'childJobPost.parentJob.parent.id'
  | 'childJobPost.parentJob.parent.children'
  | 'childJobPost.parentJob.children'
  | 'childJobPost.parentJob.children.id'
  | 'childJobPost.parentJob.children.children'
  | 'childJobPost.parentJob.internal.content'
  | 'childJobPost.parentJob.internal.contentDigest'
  | 'childJobPost.parentJob.internal.description'
  | 'childJobPost.parentJob.internal.fieldOwners'
  | 'childJobPost.parentJob.internal.ignoreType'
  | 'childJobPost.parentJob.internal.mediaType'
  | 'childJobPost.parentJob.internal.owner'
  | 'childJobPost.parentJob.internal.type'
  | 'childJobPost.updatedAt'
  | 'childJobPost.validThrough'
  | 'childJobPost.title'
  | 'childJobPost.boardToken'
  | 'childJobPost.boardUrl'
  | 'childJobPost.content'
  | 'childJobPost.content.title'
  | 'childJobPost.content.level'
  | 'childJobPost.content.bodyHtml'
  | 'childJobPost.rawContent'
  | 'childJobPost.corporate'
  | 'childJobPost.employmentType'
  | 'childJobPost.alternativeCivilianService'
  | 'childJobPost.priorExperience'
  | 'childJobPost.chapter'
  | 'childJobPost.keywords'
  | 'childJobPost.order'
  | 'childJobPost.externalUrl'
  | 'childJobPost.tags'
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
  | 'childrenJobPost'
  | 'childrenJobPost.slug'
  | 'childrenJobPost.absoluteUrl'
  | 'childrenJobPost.ghId'
  | 'childrenJobPost.parentJob.ghId'
  | 'childrenJobPost.parentJob.title'
  | 'childrenJobPost.parentJob.boardUrl'
  | 'childrenJobPost.parentJob.content'
  | 'childrenJobPost.parentJob.updatedAt'
  | 'childrenJobPost.parentJob.questions'
  | 'childrenJobPost.parentJob.questions.label'
  | 'childrenJobPost.parentJob.questions.required'
  | 'childrenJobPost.parentJob.questions.description'
  | 'childrenJobPost.parentJob.questions.name'
  | 'childrenJobPost.parentJob.locationQuestions'
  | 'childrenJobPost.parentJob.locationQuestions.label'
  | 'childrenJobPost.parentJob.locationQuestions.required'
  | 'childrenJobPost.parentJob.locationQuestions.description'
  | 'childrenJobPost.parentJob.locationQuestions.name'
  | 'childrenJobPost.parentJob.departments'
  | 'childrenJobPost.parentJob.departments.ghId'
  | 'childrenJobPost.parentJob.departments.name'
  | 'childrenJobPost.parentJob.departments.jobs'
  | 'childrenJobPost.parentJob.departments.childDepartments'
  | 'childrenJobPost.parentJob.departments.id'
  | 'childrenJobPost.parentJob.departments.children'
  | 'childrenJobPost.parentJob.metadata'
  | 'childrenJobPost.parentJob.metadata.id'
  | 'childrenJobPost.parentJob.metadata.name'
  | 'childrenJobPost.parentJob.metadata.type'
  | 'childrenJobPost.parentJob.metadata.value'
  | 'childrenJobPost.parentJob.boardToken'
  | 'childrenJobPost.parentJob.childJobPost.slug'
  | 'childrenJobPost.parentJob.childJobPost.absoluteUrl'
  | 'childrenJobPost.parentJob.childJobPost.ghId'
  | 'childrenJobPost.parentJob.childJobPost.updatedAt'
  | 'childrenJobPost.parentJob.childJobPost.validThrough'
  | 'childrenJobPost.parentJob.childJobPost.title'
  | 'childrenJobPost.parentJob.childJobPost.boardToken'
  | 'childrenJobPost.parentJob.childJobPost.boardUrl'
  | 'childrenJobPost.parentJob.childJobPost.content'
  | 'childrenJobPost.parentJob.childJobPost.rawContent'
  | 'childrenJobPost.parentJob.childJobPost.corporate'
  | 'childrenJobPost.parentJob.childJobPost.employmentType'
  | 'childrenJobPost.parentJob.childJobPost.alternativeCivilianService'
  | 'childrenJobPost.parentJob.childJobPost.priorExperience'
  | 'childrenJobPost.parentJob.childJobPost.chapter'
  | 'childrenJobPost.parentJob.childJobPost.keywords'
  | 'childrenJobPost.parentJob.childJobPost.order'
  | 'childrenJobPost.parentJob.childJobPost.externalUrl'
  | 'childrenJobPost.parentJob.childJobPost.tags'
  | 'childrenJobPost.parentJob.childJobPost.id'
  | 'childrenJobPost.parentJob.childJobPost.children'
  | 'childrenJobPost.parentJob.childrenJobPost'
  | 'childrenJobPost.parentJob.childrenJobPost.slug'
  | 'childrenJobPost.parentJob.childrenJobPost.absoluteUrl'
  | 'childrenJobPost.parentJob.childrenJobPost.ghId'
  | 'childrenJobPost.parentJob.childrenJobPost.updatedAt'
  | 'childrenJobPost.parentJob.childrenJobPost.validThrough'
  | 'childrenJobPost.parentJob.childrenJobPost.title'
  | 'childrenJobPost.parentJob.childrenJobPost.boardToken'
  | 'childrenJobPost.parentJob.childrenJobPost.boardUrl'
  | 'childrenJobPost.parentJob.childrenJobPost.content'
  | 'childrenJobPost.parentJob.childrenJobPost.rawContent'
  | 'childrenJobPost.parentJob.childrenJobPost.corporate'
  | 'childrenJobPost.parentJob.childrenJobPost.employmentType'
  | 'childrenJobPost.parentJob.childrenJobPost.alternativeCivilianService'
  | 'childrenJobPost.parentJob.childrenJobPost.priorExperience'
  | 'childrenJobPost.parentJob.childrenJobPost.chapter'
  | 'childrenJobPost.parentJob.childrenJobPost.keywords'
  | 'childrenJobPost.parentJob.childrenJobPost.order'
  | 'childrenJobPost.parentJob.childrenJobPost.externalUrl'
  | 'childrenJobPost.parentJob.childrenJobPost.tags'
  | 'childrenJobPost.parentJob.childrenJobPost.id'
  | 'childrenJobPost.parentJob.childrenJobPost.children'
  | 'childrenJobPost.parentJob.id'
  | 'childrenJobPost.parentJob.parent.id'
  | 'childrenJobPost.parentJob.parent.children'
  | 'childrenJobPost.parentJob.children'
  | 'childrenJobPost.parentJob.children.id'
  | 'childrenJobPost.parentJob.children.children'
  | 'childrenJobPost.parentJob.internal.content'
  | 'childrenJobPost.parentJob.internal.contentDigest'
  | 'childrenJobPost.parentJob.internal.description'
  | 'childrenJobPost.parentJob.internal.fieldOwners'
  | 'childrenJobPost.parentJob.internal.ignoreType'
  | 'childrenJobPost.parentJob.internal.mediaType'
  | 'childrenJobPost.parentJob.internal.owner'
  | 'childrenJobPost.parentJob.internal.type'
  | 'childrenJobPost.updatedAt'
  | 'childrenJobPost.validThrough'
  | 'childrenJobPost.title'
  | 'childrenJobPost.boardToken'
  | 'childrenJobPost.boardUrl'
  | 'childrenJobPost.content'
  | 'childrenJobPost.content.title'
  | 'childrenJobPost.content.level'
  | 'childrenJobPost.content.bodyHtml'
  | 'childrenJobPost.rawContent'
  | 'childrenJobPost.corporate'
  | 'childrenJobPost.employmentType'
  | 'childrenJobPost.alternativeCivilianService'
  | 'childrenJobPost.priorExperience'
  | 'childrenJobPost.chapter'
  | 'childrenJobPost.keywords'
  | 'childrenJobPost.order'
  | 'childrenJobPost.externalUrl'
  | 'childrenJobPost.tags'
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

type GreenhouseJobBoardJobGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GreenhouseJobBoardJobEdge>;
  readonly nodes: ReadonlyArray<GreenhouseJobBoardJob>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<GreenhouseJobBoardJobGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type GreenhouseJobBoardJobGroupConnection_distinctArgs = {
  field: GreenhouseJobBoardJobFieldsEnum;
};


type GreenhouseJobBoardJobGroupConnection_maxArgs = {
  field: GreenhouseJobBoardJobFieldsEnum;
};


type GreenhouseJobBoardJobGroupConnection_minArgs = {
  field: GreenhouseJobBoardJobFieldsEnum;
};


type GreenhouseJobBoardJobGroupConnection_sumArgs = {
  field: GreenhouseJobBoardJobFieldsEnum;
};


type GreenhouseJobBoardJobGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GreenhouseJobBoardJobFieldsEnum;
};

type GreenhouseJobBoardJobSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<GreenhouseJobBoardJobFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type GreenhouseJobBoardDepartmentConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GreenhouseJobBoardDepartmentEdge>;
  readonly nodes: ReadonlyArray<GreenhouseJobBoardDepartment>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<GreenhouseJobBoardDepartmentGroupConnection>;
};


type GreenhouseJobBoardDepartmentConnection_distinctArgs = {
  field: GreenhouseJobBoardDepartmentFieldsEnum;
};


type GreenhouseJobBoardDepartmentConnection_maxArgs = {
  field: GreenhouseJobBoardDepartmentFieldsEnum;
};


type GreenhouseJobBoardDepartmentConnection_minArgs = {
  field: GreenhouseJobBoardDepartmentFieldsEnum;
};


type GreenhouseJobBoardDepartmentConnection_sumArgs = {
  field: GreenhouseJobBoardDepartmentFieldsEnum;
};


type GreenhouseJobBoardDepartmentConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GreenhouseJobBoardDepartmentFieldsEnum;
};

type GreenhouseJobBoardDepartmentEdge = {
  readonly next: Maybe<GreenhouseJobBoardDepartment>;
  readonly node: GreenhouseJobBoardDepartment;
  readonly previous: Maybe<GreenhouseJobBoardDepartment>;
};

type GreenhouseJobBoardDepartmentFieldsEnum =
  | 'ghId'
  | 'name'
  | 'jobs'
  | 'jobs.ghId'
  | 'jobs.title'
  | 'jobs.boardUrl'
  | 'jobs.content'
  | 'jobs.updatedAt'
  | 'jobs.questions'
  | 'jobs.questions.label'
  | 'jobs.questions.required'
  | 'jobs.questions.description'
  | 'jobs.questions.name'
  | 'jobs.locationQuestions'
  | 'jobs.locationQuestions.label'
  | 'jobs.locationQuestions.required'
  | 'jobs.locationQuestions.description'
  | 'jobs.locationQuestions.name'
  | 'jobs.departments'
  | 'jobs.departments.ghId'
  | 'jobs.departments.name'
  | 'jobs.departments.jobs'
  | 'jobs.departments.jobs.ghId'
  | 'jobs.departments.jobs.title'
  | 'jobs.departments.jobs.boardUrl'
  | 'jobs.departments.jobs.content'
  | 'jobs.departments.jobs.updatedAt'
  | 'jobs.departments.jobs.questions'
  | 'jobs.departments.jobs.locationQuestions'
  | 'jobs.departments.jobs.departments'
  | 'jobs.departments.jobs.metadata'
  | 'jobs.departments.jobs.boardToken'
  | 'jobs.departments.jobs.childrenJobPost'
  | 'jobs.departments.jobs.id'
  | 'jobs.departments.jobs.children'
  | 'jobs.departments.parentDepartment.ghId'
  | 'jobs.departments.parentDepartment.name'
  | 'jobs.departments.parentDepartment.jobs'
  | 'jobs.departments.parentDepartment.childDepartments'
  | 'jobs.departments.parentDepartment.id'
  | 'jobs.departments.parentDepartment.children'
  | 'jobs.departments.childDepartments'
  | 'jobs.departments.childDepartments.ghId'
  | 'jobs.departments.childDepartments.name'
  | 'jobs.departments.childDepartments.jobs'
  | 'jobs.departments.childDepartments.childDepartments'
  | 'jobs.departments.childDepartments.id'
  | 'jobs.departments.childDepartments.children'
  | 'jobs.departments.id'
  | 'jobs.departments.parent.id'
  | 'jobs.departments.parent.children'
  | 'jobs.departments.children'
  | 'jobs.departments.children.id'
  | 'jobs.departments.children.children'
  | 'jobs.departments.internal.content'
  | 'jobs.departments.internal.contentDigest'
  | 'jobs.departments.internal.description'
  | 'jobs.departments.internal.fieldOwners'
  | 'jobs.departments.internal.ignoreType'
  | 'jobs.departments.internal.mediaType'
  | 'jobs.departments.internal.owner'
  | 'jobs.departments.internal.type'
  | 'jobs.metadata'
  | 'jobs.metadata.id'
  | 'jobs.metadata.name'
  | 'jobs.metadata.type'
  | 'jobs.metadata.value'
  | 'jobs.boardToken'
  | 'jobs.childJobPost.slug'
  | 'jobs.childJobPost.absoluteUrl'
  | 'jobs.childJobPost.ghId'
  | 'jobs.childJobPost.parentJob.ghId'
  | 'jobs.childJobPost.parentJob.title'
  | 'jobs.childJobPost.parentJob.boardUrl'
  | 'jobs.childJobPost.parentJob.content'
  | 'jobs.childJobPost.parentJob.updatedAt'
  | 'jobs.childJobPost.parentJob.questions'
  | 'jobs.childJobPost.parentJob.locationQuestions'
  | 'jobs.childJobPost.parentJob.departments'
  | 'jobs.childJobPost.parentJob.metadata'
  | 'jobs.childJobPost.parentJob.boardToken'
  | 'jobs.childJobPost.parentJob.childrenJobPost'
  | 'jobs.childJobPost.parentJob.id'
  | 'jobs.childJobPost.parentJob.children'
  | 'jobs.childJobPost.updatedAt'
  | 'jobs.childJobPost.validThrough'
  | 'jobs.childJobPost.title'
  | 'jobs.childJobPost.boardToken'
  | 'jobs.childJobPost.boardUrl'
  | 'jobs.childJobPost.content'
  | 'jobs.childJobPost.content.title'
  | 'jobs.childJobPost.content.level'
  | 'jobs.childJobPost.content.bodyHtml'
  | 'jobs.childJobPost.rawContent'
  | 'jobs.childJobPost.corporate'
  | 'jobs.childJobPost.employmentType'
  | 'jobs.childJobPost.alternativeCivilianService'
  | 'jobs.childJobPost.priorExperience'
  | 'jobs.childJobPost.chapter'
  | 'jobs.childJobPost.keywords'
  | 'jobs.childJobPost.order'
  | 'jobs.childJobPost.externalUrl'
  | 'jobs.childJobPost.tags'
  | 'jobs.childJobPost.id'
  | 'jobs.childJobPost.parent.id'
  | 'jobs.childJobPost.parent.children'
  | 'jobs.childJobPost.children'
  | 'jobs.childJobPost.children.id'
  | 'jobs.childJobPost.children.children'
  | 'jobs.childJobPost.internal.content'
  | 'jobs.childJobPost.internal.contentDigest'
  | 'jobs.childJobPost.internal.description'
  | 'jobs.childJobPost.internal.fieldOwners'
  | 'jobs.childJobPost.internal.ignoreType'
  | 'jobs.childJobPost.internal.mediaType'
  | 'jobs.childJobPost.internal.owner'
  | 'jobs.childJobPost.internal.type'
  | 'jobs.childrenJobPost'
  | 'jobs.childrenJobPost.slug'
  | 'jobs.childrenJobPost.absoluteUrl'
  | 'jobs.childrenJobPost.ghId'
  | 'jobs.childrenJobPost.parentJob.ghId'
  | 'jobs.childrenJobPost.parentJob.title'
  | 'jobs.childrenJobPost.parentJob.boardUrl'
  | 'jobs.childrenJobPost.parentJob.content'
  | 'jobs.childrenJobPost.parentJob.updatedAt'
  | 'jobs.childrenJobPost.parentJob.questions'
  | 'jobs.childrenJobPost.parentJob.locationQuestions'
  | 'jobs.childrenJobPost.parentJob.departments'
  | 'jobs.childrenJobPost.parentJob.metadata'
  | 'jobs.childrenJobPost.parentJob.boardToken'
  | 'jobs.childrenJobPost.parentJob.childrenJobPost'
  | 'jobs.childrenJobPost.parentJob.id'
  | 'jobs.childrenJobPost.parentJob.children'
  | 'jobs.childrenJobPost.updatedAt'
  | 'jobs.childrenJobPost.validThrough'
  | 'jobs.childrenJobPost.title'
  | 'jobs.childrenJobPost.boardToken'
  | 'jobs.childrenJobPost.boardUrl'
  | 'jobs.childrenJobPost.content'
  | 'jobs.childrenJobPost.content.title'
  | 'jobs.childrenJobPost.content.level'
  | 'jobs.childrenJobPost.content.bodyHtml'
  | 'jobs.childrenJobPost.rawContent'
  | 'jobs.childrenJobPost.corporate'
  | 'jobs.childrenJobPost.employmentType'
  | 'jobs.childrenJobPost.alternativeCivilianService'
  | 'jobs.childrenJobPost.priorExperience'
  | 'jobs.childrenJobPost.chapter'
  | 'jobs.childrenJobPost.keywords'
  | 'jobs.childrenJobPost.order'
  | 'jobs.childrenJobPost.externalUrl'
  | 'jobs.childrenJobPost.tags'
  | 'jobs.childrenJobPost.id'
  | 'jobs.childrenJobPost.parent.id'
  | 'jobs.childrenJobPost.parent.children'
  | 'jobs.childrenJobPost.children'
  | 'jobs.childrenJobPost.children.id'
  | 'jobs.childrenJobPost.children.children'
  | 'jobs.childrenJobPost.internal.content'
  | 'jobs.childrenJobPost.internal.contentDigest'
  | 'jobs.childrenJobPost.internal.description'
  | 'jobs.childrenJobPost.internal.fieldOwners'
  | 'jobs.childrenJobPost.internal.ignoreType'
  | 'jobs.childrenJobPost.internal.mediaType'
  | 'jobs.childrenJobPost.internal.owner'
  | 'jobs.childrenJobPost.internal.type'
  | 'jobs.id'
  | 'jobs.parent.id'
  | 'jobs.parent.parent.id'
  | 'jobs.parent.parent.children'
  | 'jobs.parent.children'
  | 'jobs.parent.children.id'
  | 'jobs.parent.children.children'
  | 'jobs.parent.internal.content'
  | 'jobs.parent.internal.contentDigest'
  | 'jobs.parent.internal.description'
  | 'jobs.parent.internal.fieldOwners'
  | 'jobs.parent.internal.ignoreType'
  | 'jobs.parent.internal.mediaType'
  | 'jobs.parent.internal.owner'
  | 'jobs.parent.internal.type'
  | 'jobs.children'
  | 'jobs.children.id'
  | 'jobs.children.parent.id'
  | 'jobs.children.parent.children'
  | 'jobs.children.children'
  | 'jobs.children.children.id'
  | 'jobs.children.children.children'
  | 'jobs.children.internal.content'
  | 'jobs.children.internal.contentDigest'
  | 'jobs.children.internal.description'
  | 'jobs.children.internal.fieldOwners'
  | 'jobs.children.internal.ignoreType'
  | 'jobs.children.internal.mediaType'
  | 'jobs.children.internal.owner'
  | 'jobs.children.internal.type'
  | 'jobs.internal.content'
  | 'jobs.internal.contentDigest'
  | 'jobs.internal.description'
  | 'jobs.internal.fieldOwners'
  | 'jobs.internal.ignoreType'
  | 'jobs.internal.mediaType'
  | 'jobs.internal.owner'
  | 'jobs.internal.type'
  | 'parentDepartment.ghId'
  | 'parentDepartment.name'
  | 'parentDepartment.jobs'
  | 'parentDepartment.jobs.ghId'
  | 'parentDepartment.jobs.title'
  | 'parentDepartment.jobs.boardUrl'
  | 'parentDepartment.jobs.content'
  | 'parentDepartment.jobs.updatedAt'
  | 'parentDepartment.jobs.questions'
  | 'parentDepartment.jobs.questions.label'
  | 'parentDepartment.jobs.questions.required'
  | 'parentDepartment.jobs.questions.description'
  | 'parentDepartment.jobs.questions.name'
  | 'parentDepartment.jobs.locationQuestions'
  | 'parentDepartment.jobs.locationQuestions.label'
  | 'parentDepartment.jobs.locationQuestions.required'
  | 'parentDepartment.jobs.locationQuestions.description'
  | 'parentDepartment.jobs.locationQuestions.name'
  | 'parentDepartment.jobs.departments'
  | 'parentDepartment.jobs.departments.ghId'
  | 'parentDepartment.jobs.departments.name'
  | 'parentDepartment.jobs.departments.jobs'
  | 'parentDepartment.jobs.departments.childDepartments'
  | 'parentDepartment.jobs.departments.id'
  | 'parentDepartment.jobs.departments.children'
  | 'parentDepartment.jobs.metadata'
  | 'parentDepartment.jobs.metadata.id'
  | 'parentDepartment.jobs.metadata.name'
  | 'parentDepartment.jobs.metadata.type'
  | 'parentDepartment.jobs.metadata.value'
  | 'parentDepartment.jobs.boardToken'
  | 'parentDepartment.jobs.childJobPost.slug'
  | 'parentDepartment.jobs.childJobPost.absoluteUrl'
  | 'parentDepartment.jobs.childJobPost.ghId'
  | 'parentDepartment.jobs.childJobPost.updatedAt'
  | 'parentDepartment.jobs.childJobPost.validThrough'
  | 'parentDepartment.jobs.childJobPost.title'
  | 'parentDepartment.jobs.childJobPost.boardToken'
  | 'parentDepartment.jobs.childJobPost.boardUrl'
  | 'parentDepartment.jobs.childJobPost.content'
  | 'parentDepartment.jobs.childJobPost.rawContent'
  | 'parentDepartment.jobs.childJobPost.corporate'
  | 'parentDepartment.jobs.childJobPost.employmentType'
  | 'parentDepartment.jobs.childJobPost.alternativeCivilianService'
  | 'parentDepartment.jobs.childJobPost.priorExperience'
  | 'parentDepartment.jobs.childJobPost.chapter'
  | 'parentDepartment.jobs.childJobPost.keywords'
  | 'parentDepartment.jobs.childJobPost.order'
  | 'parentDepartment.jobs.childJobPost.externalUrl'
  | 'parentDepartment.jobs.childJobPost.tags'
  | 'parentDepartment.jobs.childJobPost.id'
  | 'parentDepartment.jobs.childJobPost.children'
  | 'parentDepartment.jobs.childrenJobPost'
  | 'parentDepartment.jobs.childrenJobPost.slug'
  | 'parentDepartment.jobs.childrenJobPost.absoluteUrl'
  | 'parentDepartment.jobs.childrenJobPost.ghId'
  | 'parentDepartment.jobs.childrenJobPost.updatedAt'
  | 'parentDepartment.jobs.childrenJobPost.validThrough'
  | 'parentDepartment.jobs.childrenJobPost.title'
  | 'parentDepartment.jobs.childrenJobPost.boardToken'
  | 'parentDepartment.jobs.childrenJobPost.boardUrl'
  | 'parentDepartment.jobs.childrenJobPost.content'
  | 'parentDepartment.jobs.childrenJobPost.rawContent'
  | 'parentDepartment.jobs.childrenJobPost.corporate'
  | 'parentDepartment.jobs.childrenJobPost.employmentType'
  | 'parentDepartment.jobs.childrenJobPost.alternativeCivilianService'
  | 'parentDepartment.jobs.childrenJobPost.priorExperience'
  | 'parentDepartment.jobs.childrenJobPost.chapter'
  | 'parentDepartment.jobs.childrenJobPost.keywords'
  | 'parentDepartment.jobs.childrenJobPost.order'
  | 'parentDepartment.jobs.childrenJobPost.externalUrl'
  | 'parentDepartment.jobs.childrenJobPost.tags'
  | 'parentDepartment.jobs.childrenJobPost.id'
  | 'parentDepartment.jobs.childrenJobPost.children'
  | 'parentDepartment.jobs.id'
  | 'parentDepartment.jobs.parent.id'
  | 'parentDepartment.jobs.parent.children'
  | 'parentDepartment.jobs.children'
  | 'parentDepartment.jobs.children.id'
  | 'parentDepartment.jobs.children.children'
  | 'parentDepartment.jobs.internal.content'
  | 'parentDepartment.jobs.internal.contentDigest'
  | 'parentDepartment.jobs.internal.description'
  | 'parentDepartment.jobs.internal.fieldOwners'
  | 'parentDepartment.jobs.internal.ignoreType'
  | 'parentDepartment.jobs.internal.mediaType'
  | 'parentDepartment.jobs.internal.owner'
  | 'parentDepartment.jobs.internal.type'
  | 'parentDepartment.parentDepartment.ghId'
  | 'parentDepartment.parentDepartment.name'
  | 'parentDepartment.parentDepartment.jobs'
  | 'parentDepartment.parentDepartment.jobs.ghId'
  | 'parentDepartment.parentDepartment.jobs.title'
  | 'parentDepartment.parentDepartment.jobs.boardUrl'
  | 'parentDepartment.parentDepartment.jobs.content'
  | 'parentDepartment.parentDepartment.jobs.updatedAt'
  | 'parentDepartment.parentDepartment.jobs.questions'
  | 'parentDepartment.parentDepartment.jobs.locationQuestions'
  | 'parentDepartment.parentDepartment.jobs.departments'
  | 'parentDepartment.parentDepartment.jobs.metadata'
  | 'parentDepartment.parentDepartment.jobs.boardToken'
  | 'parentDepartment.parentDepartment.jobs.childrenJobPost'
  | 'parentDepartment.parentDepartment.jobs.id'
  | 'parentDepartment.parentDepartment.jobs.children'
  | 'parentDepartment.parentDepartment.parentDepartment.ghId'
  | 'parentDepartment.parentDepartment.parentDepartment.name'
  | 'parentDepartment.parentDepartment.parentDepartment.jobs'
  | 'parentDepartment.parentDepartment.parentDepartment.childDepartments'
  | 'parentDepartment.parentDepartment.parentDepartment.id'
  | 'parentDepartment.parentDepartment.parentDepartment.children'
  | 'parentDepartment.parentDepartment.childDepartments'
  | 'parentDepartment.parentDepartment.childDepartments.ghId'
  | 'parentDepartment.parentDepartment.childDepartments.name'
  | 'parentDepartment.parentDepartment.childDepartments.jobs'
  | 'parentDepartment.parentDepartment.childDepartments.childDepartments'
  | 'parentDepartment.parentDepartment.childDepartments.id'
  | 'parentDepartment.parentDepartment.childDepartments.children'
  | 'parentDepartment.parentDepartment.id'
  | 'parentDepartment.parentDepartment.parent.id'
  | 'parentDepartment.parentDepartment.parent.children'
  | 'parentDepartment.parentDepartment.children'
  | 'parentDepartment.parentDepartment.children.id'
  | 'parentDepartment.parentDepartment.children.children'
  | 'parentDepartment.parentDepartment.internal.content'
  | 'parentDepartment.parentDepartment.internal.contentDigest'
  | 'parentDepartment.parentDepartment.internal.description'
  | 'parentDepartment.parentDepartment.internal.fieldOwners'
  | 'parentDepartment.parentDepartment.internal.ignoreType'
  | 'parentDepartment.parentDepartment.internal.mediaType'
  | 'parentDepartment.parentDepartment.internal.owner'
  | 'parentDepartment.parentDepartment.internal.type'
  | 'parentDepartment.childDepartments'
  | 'parentDepartment.childDepartments.ghId'
  | 'parentDepartment.childDepartments.name'
  | 'parentDepartment.childDepartments.jobs'
  | 'parentDepartment.childDepartments.jobs.ghId'
  | 'parentDepartment.childDepartments.jobs.title'
  | 'parentDepartment.childDepartments.jobs.boardUrl'
  | 'parentDepartment.childDepartments.jobs.content'
  | 'parentDepartment.childDepartments.jobs.updatedAt'
  | 'parentDepartment.childDepartments.jobs.questions'
  | 'parentDepartment.childDepartments.jobs.locationQuestions'
  | 'parentDepartment.childDepartments.jobs.departments'
  | 'parentDepartment.childDepartments.jobs.metadata'
  | 'parentDepartment.childDepartments.jobs.boardToken'
  | 'parentDepartment.childDepartments.jobs.childrenJobPost'
  | 'parentDepartment.childDepartments.jobs.id'
  | 'parentDepartment.childDepartments.jobs.children'
  | 'parentDepartment.childDepartments.parentDepartment.ghId'
  | 'parentDepartment.childDepartments.parentDepartment.name'
  | 'parentDepartment.childDepartments.parentDepartment.jobs'
  | 'parentDepartment.childDepartments.parentDepartment.childDepartments'
  | 'parentDepartment.childDepartments.parentDepartment.id'
  | 'parentDepartment.childDepartments.parentDepartment.children'
  | 'parentDepartment.childDepartments.childDepartments'
  | 'parentDepartment.childDepartments.childDepartments.ghId'
  | 'parentDepartment.childDepartments.childDepartments.name'
  | 'parentDepartment.childDepartments.childDepartments.jobs'
  | 'parentDepartment.childDepartments.childDepartments.childDepartments'
  | 'parentDepartment.childDepartments.childDepartments.id'
  | 'parentDepartment.childDepartments.childDepartments.children'
  | 'parentDepartment.childDepartments.id'
  | 'parentDepartment.childDepartments.parent.id'
  | 'parentDepartment.childDepartments.parent.children'
  | 'parentDepartment.childDepartments.children'
  | 'parentDepartment.childDepartments.children.id'
  | 'parentDepartment.childDepartments.children.children'
  | 'parentDepartment.childDepartments.internal.content'
  | 'parentDepartment.childDepartments.internal.contentDigest'
  | 'parentDepartment.childDepartments.internal.description'
  | 'parentDepartment.childDepartments.internal.fieldOwners'
  | 'parentDepartment.childDepartments.internal.ignoreType'
  | 'parentDepartment.childDepartments.internal.mediaType'
  | 'parentDepartment.childDepartments.internal.owner'
  | 'parentDepartment.childDepartments.internal.type'
  | 'parentDepartment.id'
  | 'parentDepartment.parent.id'
  | 'parentDepartment.parent.parent.id'
  | 'parentDepartment.parent.parent.children'
  | 'parentDepartment.parent.children'
  | 'parentDepartment.parent.children.id'
  | 'parentDepartment.parent.children.children'
  | 'parentDepartment.parent.internal.content'
  | 'parentDepartment.parent.internal.contentDigest'
  | 'parentDepartment.parent.internal.description'
  | 'parentDepartment.parent.internal.fieldOwners'
  | 'parentDepartment.parent.internal.ignoreType'
  | 'parentDepartment.parent.internal.mediaType'
  | 'parentDepartment.parent.internal.owner'
  | 'parentDepartment.parent.internal.type'
  | 'parentDepartment.children'
  | 'parentDepartment.children.id'
  | 'parentDepartment.children.parent.id'
  | 'parentDepartment.children.parent.children'
  | 'parentDepartment.children.children'
  | 'parentDepartment.children.children.id'
  | 'parentDepartment.children.children.children'
  | 'parentDepartment.children.internal.content'
  | 'parentDepartment.children.internal.contentDigest'
  | 'parentDepartment.children.internal.description'
  | 'parentDepartment.children.internal.fieldOwners'
  | 'parentDepartment.children.internal.ignoreType'
  | 'parentDepartment.children.internal.mediaType'
  | 'parentDepartment.children.internal.owner'
  | 'parentDepartment.children.internal.type'
  | 'parentDepartment.internal.content'
  | 'parentDepartment.internal.contentDigest'
  | 'parentDepartment.internal.description'
  | 'parentDepartment.internal.fieldOwners'
  | 'parentDepartment.internal.ignoreType'
  | 'parentDepartment.internal.mediaType'
  | 'parentDepartment.internal.owner'
  | 'parentDepartment.internal.type'
  | 'childDepartments'
  | 'childDepartments.ghId'
  | 'childDepartments.name'
  | 'childDepartments.jobs'
  | 'childDepartments.jobs.ghId'
  | 'childDepartments.jobs.title'
  | 'childDepartments.jobs.boardUrl'
  | 'childDepartments.jobs.content'
  | 'childDepartments.jobs.updatedAt'
  | 'childDepartments.jobs.questions'
  | 'childDepartments.jobs.questions.label'
  | 'childDepartments.jobs.questions.required'
  | 'childDepartments.jobs.questions.description'
  | 'childDepartments.jobs.questions.name'
  | 'childDepartments.jobs.locationQuestions'
  | 'childDepartments.jobs.locationQuestions.label'
  | 'childDepartments.jobs.locationQuestions.required'
  | 'childDepartments.jobs.locationQuestions.description'
  | 'childDepartments.jobs.locationQuestions.name'
  | 'childDepartments.jobs.departments'
  | 'childDepartments.jobs.departments.ghId'
  | 'childDepartments.jobs.departments.name'
  | 'childDepartments.jobs.departments.jobs'
  | 'childDepartments.jobs.departments.childDepartments'
  | 'childDepartments.jobs.departments.id'
  | 'childDepartments.jobs.departments.children'
  | 'childDepartments.jobs.metadata'
  | 'childDepartments.jobs.metadata.id'
  | 'childDepartments.jobs.metadata.name'
  | 'childDepartments.jobs.metadata.type'
  | 'childDepartments.jobs.metadata.value'
  | 'childDepartments.jobs.boardToken'
  | 'childDepartments.jobs.childJobPost.slug'
  | 'childDepartments.jobs.childJobPost.absoluteUrl'
  | 'childDepartments.jobs.childJobPost.ghId'
  | 'childDepartments.jobs.childJobPost.updatedAt'
  | 'childDepartments.jobs.childJobPost.validThrough'
  | 'childDepartments.jobs.childJobPost.title'
  | 'childDepartments.jobs.childJobPost.boardToken'
  | 'childDepartments.jobs.childJobPost.boardUrl'
  | 'childDepartments.jobs.childJobPost.content'
  | 'childDepartments.jobs.childJobPost.rawContent'
  | 'childDepartments.jobs.childJobPost.corporate'
  | 'childDepartments.jobs.childJobPost.employmentType'
  | 'childDepartments.jobs.childJobPost.alternativeCivilianService'
  | 'childDepartments.jobs.childJobPost.priorExperience'
  | 'childDepartments.jobs.childJobPost.chapter'
  | 'childDepartments.jobs.childJobPost.keywords'
  | 'childDepartments.jobs.childJobPost.order'
  | 'childDepartments.jobs.childJobPost.externalUrl'
  | 'childDepartments.jobs.childJobPost.tags'
  | 'childDepartments.jobs.childJobPost.id'
  | 'childDepartments.jobs.childJobPost.children'
  | 'childDepartments.jobs.childrenJobPost'
  | 'childDepartments.jobs.childrenJobPost.slug'
  | 'childDepartments.jobs.childrenJobPost.absoluteUrl'
  | 'childDepartments.jobs.childrenJobPost.ghId'
  | 'childDepartments.jobs.childrenJobPost.updatedAt'
  | 'childDepartments.jobs.childrenJobPost.validThrough'
  | 'childDepartments.jobs.childrenJobPost.title'
  | 'childDepartments.jobs.childrenJobPost.boardToken'
  | 'childDepartments.jobs.childrenJobPost.boardUrl'
  | 'childDepartments.jobs.childrenJobPost.content'
  | 'childDepartments.jobs.childrenJobPost.rawContent'
  | 'childDepartments.jobs.childrenJobPost.corporate'
  | 'childDepartments.jobs.childrenJobPost.employmentType'
  | 'childDepartments.jobs.childrenJobPost.alternativeCivilianService'
  | 'childDepartments.jobs.childrenJobPost.priorExperience'
  | 'childDepartments.jobs.childrenJobPost.chapter'
  | 'childDepartments.jobs.childrenJobPost.keywords'
  | 'childDepartments.jobs.childrenJobPost.order'
  | 'childDepartments.jobs.childrenJobPost.externalUrl'
  | 'childDepartments.jobs.childrenJobPost.tags'
  | 'childDepartments.jobs.childrenJobPost.id'
  | 'childDepartments.jobs.childrenJobPost.children'
  | 'childDepartments.jobs.id'
  | 'childDepartments.jobs.parent.id'
  | 'childDepartments.jobs.parent.children'
  | 'childDepartments.jobs.children'
  | 'childDepartments.jobs.children.id'
  | 'childDepartments.jobs.children.children'
  | 'childDepartments.jobs.internal.content'
  | 'childDepartments.jobs.internal.contentDigest'
  | 'childDepartments.jobs.internal.description'
  | 'childDepartments.jobs.internal.fieldOwners'
  | 'childDepartments.jobs.internal.ignoreType'
  | 'childDepartments.jobs.internal.mediaType'
  | 'childDepartments.jobs.internal.owner'
  | 'childDepartments.jobs.internal.type'
  | 'childDepartments.parentDepartment.ghId'
  | 'childDepartments.parentDepartment.name'
  | 'childDepartments.parentDepartment.jobs'
  | 'childDepartments.parentDepartment.jobs.ghId'
  | 'childDepartments.parentDepartment.jobs.title'
  | 'childDepartments.parentDepartment.jobs.boardUrl'
  | 'childDepartments.parentDepartment.jobs.content'
  | 'childDepartments.parentDepartment.jobs.updatedAt'
  | 'childDepartments.parentDepartment.jobs.questions'
  | 'childDepartments.parentDepartment.jobs.locationQuestions'
  | 'childDepartments.parentDepartment.jobs.departments'
  | 'childDepartments.parentDepartment.jobs.metadata'
  | 'childDepartments.parentDepartment.jobs.boardToken'
  | 'childDepartments.parentDepartment.jobs.childrenJobPost'
  | 'childDepartments.parentDepartment.jobs.id'
  | 'childDepartments.parentDepartment.jobs.children'
  | 'childDepartments.parentDepartment.parentDepartment.ghId'
  | 'childDepartments.parentDepartment.parentDepartment.name'
  | 'childDepartments.parentDepartment.parentDepartment.jobs'
  | 'childDepartments.parentDepartment.parentDepartment.childDepartments'
  | 'childDepartments.parentDepartment.parentDepartment.id'
  | 'childDepartments.parentDepartment.parentDepartment.children'
  | 'childDepartments.parentDepartment.childDepartments'
  | 'childDepartments.parentDepartment.childDepartments.ghId'
  | 'childDepartments.parentDepartment.childDepartments.name'
  | 'childDepartments.parentDepartment.childDepartments.jobs'
  | 'childDepartments.parentDepartment.childDepartments.childDepartments'
  | 'childDepartments.parentDepartment.childDepartments.id'
  | 'childDepartments.parentDepartment.childDepartments.children'
  | 'childDepartments.parentDepartment.id'
  | 'childDepartments.parentDepartment.parent.id'
  | 'childDepartments.parentDepartment.parent.children'
  | 'childDepartments.parentDepartment.children'
  | 'childDepartments.parentDepartment.children.id'
  | 'childDepartments.parentDepartment.children.children'
  | 'childDepartments.parentDepartment.internal.content'
  | 'childDepartments.parentDepartment.internal.contentDigest'
  | 'childDepartments.parentDepartment.internal.description'
  | 'childDepartments.parentDepartment.internal.fieldOwners'
  | 'childDepartments.parentDepartment.internal.ignoreType'
  | 'childDepartments.parentDepartment.internal.mediaType'
  | 'childDepartments.parentDepartment.internal.owner'
  | 'childDepartments.parentDepartment.internal.type'
  | 'childDepartments.childDepartments'
  | 'childDepartments.childDepartments.ghId'
  | 'childDepartments.childDepartments.name'
  | 'childDepartments.childDepartments.jobs'
  | 'childDepartments.childDepartments.jobs.ghId'
  | 'childDepartments.childDepartments.jobs.title'
  | 'childDepartments.childDepartments.jobs.boardUrl'
  | 'childDepartments.childDepartments.jobs.content'
  | 'childDepartments.childDepartments.jobs.updatedAt'
  | 'childDepartments.childDepartments.jobs.questions'
  | 'childDepartments.childDepartments.jobs.locationQuestions'
  | 'childDepartments.childDepartments.jobs.departments'
  | 'childDepartments.childDepartments.jobs.metadata'
  | 'childDepartments.childDepartments.jobs.boardToken'
  | 'childDepartments.childDepartments.jobs.childrenJobPost'
  | 'childDepartments.childDepartments.jobs.id'
  | 'childDepartments.childDepartments.jobs.children'
  | 'childDepartments.childDepartments.parentDepartment.ghId'
  | 'childDepartments.childDepartments.parentDepartment.name'
  | 'childDepartments.childDepartments.parentDepartment.jobs'
  | 'childDepartments.childDepartments.parentDepartment.childDepartments'
  | 'childDepartments.childDepartments.parentDepartment.id'
  | 'childDepartments.childDepartments.parentDepartment.children'
  | 'childDepartments.childDepartments.childDepartments'
  | 'childDepartments.childDepartments.childDepartments.ghId'
  | 'childDepartments.childDepartments.childDepartments.name'
  | 'childDepartments.childDepartments.childDepartments.jobs'
  | 'childDepartments.childDepartments.childDepartments.childDepartments'
  | 'childDepartments.childDepartments.childDepartments.id'
  | 'childDepartments.childDepartments.childDepartments.children'
  | 'childDepartments.childDepartments.id'
  | 'childDepartments.childDepartments.parent.id'
  | 'childDepartments.childDepartments.parent.children'
  | 'childDepartments.childDepartments.children'
  | 'childDepartments.childDepartments.children.id'
  | 'childDepartments.childDepartments.children.children'
  | 'childDepartments.childDepartments.internal.content'
  | 'childDepartments.childDepartments.internal.contentDigest'
  | 'childDepartments.childDepartments.internal.description'
  | 'childDepartments.childDepartments.internal.fieldOwners'
  | 'childDepartments.childDepartments.internal.ignoreType'
  | 'childDepartments.childDepartments.internal.mediaType'
  | 'childDepartments.childDepartments.internal.owner'
  | 'childDepartments.childDepartments.internal.type'
  | 'childDepartments.id'
  | 'childDepartments.parent.id'
  | 'childDepartments.parent.parent.id'
  | 'childDepartments.parent.parent.children'
  | 'childDepartments.parent.children'
  | 'childDepartments.parent.children.id'
  | 'childDepartments.parent.children.children'
  | 'childDepartments.parent.internal.content'
  | 'childDepartments.parent.internal.contentDigest'
  | 'childDepartments.parent.internal.description'
  | 'childDepartments.parent.internal.fieldOwners'
  | 'childDepartments.parent.internal.ignoreType'
  | 'childDepartments.parent.internal.mediaType'
  | 'childDepartments.parent.internal.owner'
  | 'childDepartments.parent.internal.type'
  | 'childDepartments.children'
  | 'childDepartments.children.id'
  | 'childDepartments.children.parent.id'
  | 'childDepartments.children.parent.children'
  | 'childDepartments.children.children'
  | 'childDepartments.children.children.id'
  | 'childDepartments.children.children.children'
  | 'childDepartments.children.internal.content'
  | 'childDepartments.children.internal.contentDigest'
  | 'childDepartments.children.internal.description'
  | 'childDepartments.children.internal.fieldOwners'
  | 'childDepartments.children.internal.ignoreType'
  | 'childDepartments.children.internal.mediaType'
  | 'childDepartments.children.internal.owner'
  | 'childDepartments.children.internal.type'
  | 'childDepartments.internal.content'
  | 'childDepartments.internal.contentDigest'
  | 'childDepartments.internal.description'
  | 'childDepartments.internal.fieldOwners'
  | 'childDepartments.internal.ignoreType'
  | 'childDepartments.internal.mediaType'
  | 'childDepartments.internal.owner'
  | 'childDepartments.internal.type'
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

type GreenhouseJobBoardDepartmentGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GreenhouseJobBoardDepartmentEdge>;
  readonly nodes: ReadonlyArray<GreenhouseJobBoardDepartment>;
  readonly pageInfo: PageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<GreenhouseJobBoardDepartmentGroupConnection>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};


type GreenhouseJobBoardDepartmentGroupConnection_distinctArgs = {
  field: GreenhouseJobBoardDepartmentFieldsEnum;
};


type GreenhouseJobBoardDepartmentGroupConnection_maxArgs = {
  field: GreenhouseJobBoardDepartmentFieldsEnum;
};


type GreenhouseJobBoardDepartmentGroupConnection_minArgs = {
  field: GreenhouseJobBoardDepartmentFieldsEnum;
};


type GreenhouseJobBoardDepartmentGroupConnection_sumArgs = {
  field: GreenhouseJobBoardDepartmentFieldsEnum;
};


type GreenhouseJobBoardDepartmentGroupConnection_groupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GreenhouseJobBoardDepartmentFieldsEnum;
};

type GreenhouseJobBoardDepartmentSortInput = {
  readonly fields: Maybe<ReadonlyArray<Maybe<GreenhouseJobBoardDepartmentFieldsEnum>>>;
  readonly order: Maybe<ReadonlyArray<Maybe<SortOrderEnum>>>;
};

type SiteMetadata = {
  readonly siteUrl: Scalars['String'];
  readonly siteName: Maybe<Scalars['String']>;
};

type JobPost = Node & {
  readonly slug: Scalars['String'];
  readonly absoluteUrl: Scalars['String'];
  readonly ghId: Scalars['String'];
  readonly parentJob: GreenhouseJobBoardJob;
  readonly updatedAt: Scalars['Date'];
  readonly validThrough: Maybe<Scalars['Date']>;
  readonly title: Scalars['String'];
  readonly boardToken: Scalars['String'];
  readonly boardUrl: Scalars['String'];
  readonly content: ReadonlyArray<JobPostContentSection>;
  readonly rawContent: Scalars['String'];
  readonly corporate: Maybe<JobCorporate>;
  readonly employmentType: JobEmploymentType;
  readonly alternativeCivilianService: Scalars['Boolean'];
  readonly priorExperience: JobPriorExperience;
  readonly chapter: Scalars['String'];
  readonly keywords: ReadonlyArray<Scalars['String']>;
  readonly order: Scalars['Int'];
  readonly externalUrl: Maybe<Scalars['String']>;
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type JobPost_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


type JobPost_validThroughArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type GreenhouseJobBoardJobCustomFieldType =
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

type GreenhouseJobBoardJob = Node & {
  readonly ghId: Scalars['String'];
  readonly title: Scalars['String'];
  /** URL to public Greenhouse job board UI */
  readonly boardUrl: Scalars['String'];
  readonly content: Scalars['String'];
  readonly updatedAt: Scalars['Date'];
  readonly questions: ReadonlyArray<GreenhouseJobBoardJobQuestion>;
  readonly locationQuestions: ReadonlyArray<GreenhouseJobBoardJobQuestion>;
  readonly departments: ReadonlyArray<GreenhouseJobBoardDepartment>;
  readonly metadata: ReadonlyArray<GreenhouseJobBoardJobCustomFieldMetadata>;
  readonly boardToken: Scalars['String'];
  /** Returns the first child node of type JobPost or null if there are no children of given type on this node */
  readonly childJobPost: Maybe<JobPost>;
  /** Returns all children nodes filtered by type JobPost */
  readonly childrenJobPost: Maybe<ReadonlyArray<Maybe<JobPost>>>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};


type GreenhouseJobBoardJob_updatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

type GreenhouseJobBoardJobQuestion = {
  readonly label: Scalars['String'];
  readonly required: Scalars['Boolean'];
  readonly description: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
};

type GreenhouseJobBoardJobQuestionForAttachment = GreenhouseJobBoardJobQuestion & {
  readonly label: Scalars['String'];
  readonly required: Scalars['Boolean'];
  readonly description: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
};

type GreenhouseJobBoardJobQuestionForShortText = GreenhouseJobBoardJobQuestion & {
  readonly label: Scalars['String'];
  readonly required: Scalars['Boolean'];
  readonly description: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
};

type GreenhouseJobBoardJobQuestionForLongText = GreenhouseJobBoardJobQuestion & {
  readonly label: Scalars['String'];
  readonly required: Scalars['Boolean'];
  readonly description: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
};

type GreenhouseJobBoardJobQuestionForSingleSelect = GreenhouseJobBoardJobQuestion & {
  readonly label: Scalars['String'];
  readonly required: Scalars['Boolean'];
  readonly description: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly options: ReadonlyArray<GreenhouseJobBoardJobQuestionAnswerOption>;
};

type GreenhouseJobBoardJobQuestionForMultiSelect = GreenhouseJobBoardJobQuestion & {
  readonly label: Scalars['String'];
  readonly required: Scalars['Boolean'];
  readonly description: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly options: ReadonlyArray<GreenhouseJobBoardJobQuestionAnswerOption>;
};

type GreenhouseJobBoardJobQuestionForYesNo = GreenhouseJobBoardJobQuestion & {
  readonly label: Scalars['String'];
  readonly required: Scalars['Boolean'];
  readonly description: Maybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly options: ReadonlyArray<GreenhouseJobBoardJobQuestionAnswerOption>;
};

type GreenhouseJobBoardJobQuestionAnswerOption = {
  /** Label of the question answer value */
  readonly label: Scalars['String'];
  /** Unique id of the question answer value */
  readonly value: Scalars['String'];
};

type GreenhouseJobBoardJobCustomFieldMetadata = {
  readonly id: Scalars['String'];
  readonly name: Scalars['String'];
  readonly type: GreenhouseJobBoardJobCustomFieldType;
  readonly value: Maybe<Scalars['String']>;
};

type GreenhouseJobBoardDepartment = Node & {
  readonly ghId: Scalars['String'];
  readonly name: Scalars['String'];
  readonly jobs: ReadonlyArray<GreenhouseJobBoardJob>;
  readonly parentDepartment: Maybe<GreenhouseJobBoardDepartment>;
  readonly childDepartments: ReadonlyArray<GreenhouseJobBoardDepartment>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
};

type JobCorporate =
  | 'KARROT_MARKET'
  | 'KARROT_PAY';

type JobEmploymentType =
  | 'FULL_TIME'
  | 'CONTRACTOR'
  | 'INTERN'
  | 'ASSISTANT';

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

type JobPostContentSection = {
  readonly title: Scalars['String'];
  readonly level: HeadingLevel;
  readonly bodyHtml: Scalars['String'];
};

type TeamWebsite_DefaultLayout_queryFragment = { readonly prismicTeamContents: Maybe<(
    Pick<PrismicTeamContents, '_previewable'>
    & { readonly data: Pick<PrismicTeamContentsDataType, 'fb_app_id' | 'twitter_site_handle'> }
  )>, readonly prismicSiteNavigation: Maybe<(
    Pick<PrismicSiteNavigation, '_previewable'>
    & { readonly data: (
      { readonly sns_profiles: Maybe<ReadonlyArray<Maybe<{ readonly link: Maybe<Pick<PrismicLinkType, 'url'>> }>>> }
      & Header_navigationDataFragment
      & Footer_navigationDataFragment
    ) }
  )> };

type Header_navigationDataFragment = NavigationMenu_dataFragment;

type NavigationMenu_dataFragment = { readonly header_entries: Maybe<ReadonlyArray<Maybe<(
    Pick<PrismicSiteNavigationDataHeaderEntries, 'display_text'>
    & { readonly link: Maybe<Pick<PrismicLinkType, 'url'>> }
  )>>>, readonly sns_profiles: Maybe<ReadonlyArray<Maybe<SocialServiceProfile_profileFragment>>> };

type SocialServiceProfile_profileFragment = (
  Pick<PrismicSiteNavigationDataSnsProfiles, 'service'>
  & { readonly link: Maybe<Pick<PrismicLinkType, 'url'>> }
);

type Footer_navigationDataFragment = { readonly copyright: Maybe<Pick<PrismicStructuredTextType, 'html'>>, readonly address: Maybe<Pick<PrismicStructuredTextType, 'html'>>, readonly tel: Maybe<Pick<PrismicStructuredTextType, 'html'>>, readonly email: Maybe<Pick<PrismicStructuredTextType, 'html'>>, readonly footer_entries: Maybe<ReadonlyArray<Maybe<(
    Pick<PrismicSiteNavigationDataFooterEntries, 'display_text'>
    & { readonly link: Maybe<Pick<PrismicLinkType, 'url'>> }
  )>>>, readonly sns_profiles: Maybe<ReadonlyArray<Maybe<SocialServiceProfile_profileFragment>>> };

type TeamWebsite_JobPostLayout_queryFragment = { readonly prismicTeamContents: Maybe<(
    Pick<PrismicTeamContents, '_previewable'>
    & { readonly data: (
      Pick<PrismicTeamContentsDataType, 'jobs_page_meta_title' | 'jobs_page_meta_description'>
      & { readonly jobs_page_meta_image: Maybe<{ readonly localFile: Maybe<{ readonly childImageSharp: Maybe<{ readonly fixed: Maybe<Pick<ImageSharpFixed, 'src' | 'width' | 'height'>> }> }> }>, readonly jobs_page_title: Maybe<Pick<PrismicStructuredTextType, 'text'>> }
    ) }
  )>, readonly jobPost: Maybe<(
    Pick<JobPost, 'id' | 'ghId' | 'title' | 'chapter' | 'corporate' | 'employmentType' | 'priorExperience' | 'externalUrl'>
    & TeamWebsite_JobPostingJsonLd_jobPostFragment
  )> };

type TeamWebsite_JobPostingJsonLd_jobPostFragment = (
  Pick<JobPost, 'title' | 'validThrough' | 'priorExperience' | 'corporate'>
  & { datePosted: JobPost['updatedAt'] }
);

type TeamWebsite_JobPostContentSection_contentFragment = Pick<JobPostContentSection, 'title' | 'bodyHtml'>;

type TeamWebsite_JobPostPageQueryVariables = Exact<{
  id: Scalars['String'];
  locale: Scalars['String'];
  navigationId: Scalars['String'];
}>;


type TeamWebsite_JobPostPageQuery = (
  { readonly jobPost: Maybe<(
    Pick<JobPost, 'ghId'>
    & { readonly content: ReadonlyArray<TeamWebsite_JobPostContentSection_contentFragment> }
  )> }
  & TeamWebsite_DefaultLayout_queryFragment
  & TeamWebsite_JobPostLayout_queryFragment
);

type TeamWebsite_JobApplicationPageQueryVariables = Exact<{
  id: Scalars['String'];
  locale: Scalars['String'];
  navigationId: Scalars['String'];
}>;


type TeamWebsite_JobApplicationPageQuery = (
  { readonly jobPost: Maybe<(
    Pick<JobPost, 'ghId' | 'title' | 'boardToken'>
    & { readonly parentJob: { readonly questions: ReadonlyArray<(
        { readonly __typename: 'GreenhouseJobBoardJobQuestionForAttachment' }
        & Pick<GreenhouseJobBoardJobQuestionForAttachment, 'name' | 'label' | 'required' | 'description'>
      ) | (
        { readonly __typename: 'GreenhouseJobBoardJobQuestionForShortText' }
        & Pick<GreenhouseJobBoardJobQuestionForShortText, 'name' | 'label' | 'required' | 'description'>
      ) | (
        { readonly __typename: 'GreenhouseJobBoardJobQuestionForLongText' }
        & Pick<GreenhouseJobBoardJobQuestionForLongText, 'name' | 'label' | 'required' | 'description'>
      ) | (
        { readonly __typename: 'GreenhouseJobBoardJobQuestionForSingleSelect' }
        & Pick<GreenhouseJobBoardJobQuestionForSingleSelect, 'name' | 'label' | 'required' | 'description'>
        & { readonly options: ReadonlyArray<Pick<GreenhouseJobBoardJobQuestionAnswerOption, 'label' | 'value'>> }
      ) | (
        { readonly __typename: 'GreenhouseJobBoardJobQuestionForMultiSelect' }
        & Pick<GreenhouseJobBoardJobQuestionForMultiSelect, 'name' | 'label' | 'required' | 'description'>
        & { readonly options: ReadonlyArray<Pick<GreenhouseJobBoardJobQuestionAnswerOption, 'label' | 'value'>> }
      ) | (
        { readonly __typename: 'GreenhouseJobBoardJobQuestionForYesNo' }
        & Pick<GreenhouseJobBoardJobQuestionForYesNo, 'name' | 'label' | 'required' | 'description'>
        & { readonly options: ReadonlyArray<Pick<GreenhouseJobBoardJobQuestionAnswerOption, 'label' | 'value'>> }
      )> } }
  )>, readonly privacyPolicy: Maybe<(
    Pick<PrismicTermsAndConditions, 'id'>
    & { readonly data: { readonly content: Maybe<Pick<PrismicStructuredTextType, 'html'>> } }
  )>, readonly sensitiveInfoPolicy: Maybe<(
    Pick<PrismicTermsAndConditions, 'id'>
    & { readonly data: { readonly content: Maybe<Pick<PrismicStructuredTextType, 'html'>> } }
  )> }
  & TeamWebsite_DefaultLayout_queryFragment
  & TeamWebsite_JobPostLayout_queryFragment
);

type TeamWebsite_JobPostList_jobsFragment = { readonly nodes: ReadonlyArray<(
    Pick<JobPost, 'id' | 'ghId' | 'externalUrl' | 'chapter' | 'order' | 'employmentType'>
    & TeamWebsite_JobPostSummary_jobPostFragment
  )> };

type TeamWebsite_JobPostSummary_jobPostFragment = Pick<JobPost, 'id' | 'title' | 'chapter' | 'corporate' | 'employmentType' | 'priorExperience' | 'tags'>;

type TeamWebsite_JobsPageTemplateQueryVariables = Exact<{
  pattern: Maybe<Scalars['String']>;
  locale: Scalars['String'];
  navigationId: Scalars['String'];
}>;


type TeamWebsite_JobsPageTemplateQuery = (
  { readonly prismicTeamContents: Maybe<{ readonly data: (
      Pick<PrismicTeamContentsDataType, 'jobs_page_meta_title' | 'jobs_page_meta_description'>
      & { readonly jobs_page_meta_image: Maybe<{ readonly localFile: Maybe<{ readonly childImageSharp: Maybe<{ readonly fixed: Maybe<Pick<ImageSharpFixed, 'src' | 'width' | 'height'>> }> }> }>, readonly jobs_page_title: Maybe<Pick<PrismicStructuredTextType, 'text'>> }
    ) }>, readonly currentJobPosts: (
    { readonly nodes: ReadonlyArray<Pick<JobPost, 'absoluteUrl'>> }
    & TeamWebsite_JobPostList_jobsFragment
  ), readonly allJobPost: (
    Pick<JobPostConnection, 'totalCount'>
    & { readonly allChapter: ReadonlyArray<(
      Pick<JobPostGroupConnection, 'fieldValue' | 'totalCount'>
      & { readonly nodes: ReadonlyArray<Pick<JobPost, 'chapter' | 'slug'>> }
    )>, readonly allEmploymentType: ReadonlyArray<Pick<JobPostGroupConnection, 'fieldValue'>> }
  ) }
  & TeamWebsite_DefaultLayout_queryFragment
);

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSiteFunction: { readonly nodes: ReadonlyArray<Pick<SiteFunction, 'functionRoute'>> }, readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type TeamWebsite_NotFoundPageQueryVariables = Exact<{
  locale: Scalars['String'];
  navigationId: Scalars['String'];
}>;


type TeamWebsite_NotFoundPageQuery = (
  { readonly prismicTeamContents: Maybe<{ readonly data: { readonly notfound_page_title: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly notfound_page_link_group: Maybe<ReadonlyArray<Maybe<(
        Pick<PrismicTeamContentsDataNotfoundPageLinkGroup, 'display_text'>
        & { readonly link: Maybe<Pick<PrismicLinkType, 'url'>> }
      )>>> } }> }
  & TeamWebsite_DefaultLayout_queryFragment
);

type TeamWebsite_CompletedPageQueryVariables = Exact<{
  locale: Scalars['String'];
  navigationId: Scalars['String'];
}>;


type TeamWebsite_CompletedPageQuery = (
  { readonly prismicTeamContents: Maybe<{ readonly data: { readonly completed_page_content: Maybe<Pick<PrismicStructuredTextType, 'html'>>, readonly completed_page_link_group: Maybe<ReadonlyArray<Maybe<(
        Pick<PrismicTeamContentsDataCompletedPageLinkGroup, 'display_text'>
        & { readonly link: Maybe<Pick<PrismicLinkType, 'url'>> }
      )>>> } }> }
  & TeamWebsite_DefaultLayout_queryFragment
);

type PrismicTeamContentsDataMainBodyKeyVisual_dataFragment = { readonly primary: (
    Pick<PrismicTeamContentsDataMainBodyKeyVisualPrimary, 'expanded'>
    & { readonly key_visual_image: Maybe<(
      Pick<PrismicTeamContentsDataMainBodyKeyVisualPrimaryKeyVisualImageImageType, 'alt'>
      & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }>, readonly thumbnails: Maybe<{ readonly portrait: Maybe<(
          Pick<PrismicImageThumbnailType, 'alt'>
          & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> }
        )> }> }
    )>, readonly description: Maybe<Pick<PrismicStructuredTextType, 'text'>> }
  ) };

type PrismicTeamContentsDataMainBodyMemberQuoteCarousel_dataFragment = { readonly items: ReadonlyArray<TeamWebsite_CarouselItem_itemFragment> };

type TeamWebsite_CarouselItem_itemFragment = (
  Pick<PrismicTeamContentsDataMainBodyMemberQuoteCarouselItem, 'quote' | 'who'>
  & { readonly image: Maybe<(
    Pick<PrismicTeamContentsDataMainBodyMemberQuoteCarouselItemsImageImageType, 'alt'>
    & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> }
  )> }
);

type PrismicTeamContentsDataMainBodyTitleAndDescription_dataFragment = { readonly primary: (
    Pick<PrismicTeamContentsDataMainBodyTitleAndDescriptionPrimary, 'key_text' | 'inverted'>
    & { readonly title: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly description: Maybe<Pick<PrismicStructuredTextType, 'html'>>, readonly link: Maybe<Pick<PrismicLinkType, 'url'>> }
  ) };

type PrismicTeamContentsDataMainBodyTitleAndIllustration_dataFragment = { readonly primary: (
    Pick<PrismicTeamContentsDataMainBodyTitleAndIllustrationPrimary, 'key_text' | 'inverted'>
    & { readonly title: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly illustration: Maybe<(
      Pick<PrismicTeamContentsDataMainBodyTitleAndIllustrationPrimaryIllustrationImageType, 'alt'>
      & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> }
    )>, readonly link: Maybe<Pick<PrismicLinkType, 'url'>> }
  ) };

type PrismicTeamContentsDataMainBodyIllustrationAndDescription_dataFragment = { readonly primary: (
    Pick<PrismicTeamContentsDataMainBodyIllustrationAndDescriptionPrimary, 'expanded' | 'inverted' | 'link_text'>
    & { readonly illustration: Maybe<(
      Pick<PrismicTeamContentsDataMainBodyIllustrationAndDescriptionPrimaryIllustrationImageType, 'alt'>
      & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> }
    )>, readonly description: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly link: Maybe<Pick<PrismicLinkType, 'url'>> }
  ) };

type PrismicTeamContentsDataMainBodyWideBanner_dataFragment = { readonly primary: (
    Pick<PrismicTeamContentsDataMainBodyWideBannerPrimary, 'background_color' | 'link_text'>
    & { readonly title: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly thumbnail: Maybe<(
      Pick<PrismicTeamContentsDataMainBodyWideBannerPrimaryThumbnailImageType, 'alt'>
      & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> }
    )>, readonly link: Maybe<Pick<PrismicLinkType, 'url'>> }
  ) };

type PrismicTeamContentsDataMainBodyHowWeWork_dataFragment = { readonly primary: { readonly title: Maybe<Pick<PrismicStructuredTextType, 'text'>> }, readonly items: ReadonlyArray<(
    Pick<PrismicTeamContentsDataMainBodyHowWeWorkItem, 'group' | 'key_text'>
    & { readonly description: Maybe<Pick<PrismicStructuredTextType, 'text'>> }
  )> };

type PrismicTeamContentsDataMainBodyBenefit_dataFragment = { readonly primary: { readonly title: Maybe<Pick<PrismicStructuredTextType, 'text'>> }, readonly items: ReadonlyArray<(
    Pick<PrismicTeamContentsDataMainBodyBenefitItem, 'subtitle' | 'subtext'>
    & { readonly description: Maybe<Pick<PrismicStructuredTextType, 'html'>> }
  )> };

type TeamWebsite_IndexPageQueryVariables = Exact<{
  locale: Scalars['String'];
  navigationId: Scalars['String'];
}>;


type TeamWebsite_IndexPageQuery = (
  { readonly prismicTeamContents: Maybe<{ readonly data: (
      Pick<PrismicTeamContentsDataType, 'main_page_meta_title' | 'main_page_meta_description'>
      & { readonly main_page_meta_image: Maybe<{ readonly localFile: Maybe<{ readonly childImageSharp: Maybe<{ readonly fixed: Maybe<Pick<ImageSharpFixed, 'src' | 'width' | 'height'>> }> }> }>, readonly main_page_title: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly main_body: ReadonlyArray<(
        { readonly __typename: 'PrismicTeamContentsDataMainBodyBenefit' }
        & PrismicTeamContentsDataMainBodyBenefit_dataFragment
      ) | { readonly __typename: 'PrismicTeamContentsDataMainBodyDivider' } | (
        { readonly __typename: 'PrismicTeamContentsDataMainBodyHowWeWork' }
        & PrismicTeamContentsDataMainBodyHowWeWork_dataFragment
      ) | (
        { readonly __typename: 'PrismicTeamContentsDataMainBodyIllustrationAndDescription' }
        & PrismicTeamContentsDataMainBodyIllustrationAndDescription_dataFragment
      ) | (
        { readonly __typename: 'PrismicTeamContentsDataMainBodyKeyVisual' }
        & PrismicTeamContentsDataMainBodyKeyVisual_dataFragment
      ) | (
        { readonly __typename: 'PrismicTeamContentsDataMainBodyMemberQuoteCarousel' }
        & PrismicTeamContentsDataMainBodyMemberQuoteCarousel_dataFragment
      ) | (
        { readonly __typename: 'PrismicTeamContentsDataMainBodyTitleAndDescription' }
        & PrismicTeamContentsDataMainBodyTitleAndDescription_dataFragment
      ) | (
        { readonly __typename: 'PrismicTeamContentsDataMainBodyTitleAndIllustration' }
        & PrismicTeamContentsDataMainBodyTitleAndIllustration_dataFragment
      ) | (
        { readonly __typename: 'PrismicTeamContentsDataMainBodyWideBanner' }
        & PrismicTeamContentsDataMainBodyWideBanner_dataFragment
      )> }
    ) }> }
  & TeamWebsite_DefaultLayout_queryFragment
);

type TeamWebsite_PreviewResolverPageQueryVariables = Exact<{
  locale: Scalars['String'];
  navigationId: Scalars['String'];
}>;


type TeamWebsite_PreviewResolverPageQuery = TeamWebsite_DefaultLayout_queryFragment;

type LokaliseTranslationQueryVariables = Exact<{ [key: string]: never; }>;


type LokaliseTranslationQuery = { readonly lokaliseTranslation: Maybe<{ readonly messages: AllLokaliseMessagesFragment }> };

type UseSiteMetadataStaticQueryVariables = Exact<{ [key: string]: never; }>;


type UseSiteMetadataStaticQuery = { readonly site: Maybe<{ readonly siteMetadata: Pick<SiteMetadata, 'siteUrl'> }> };

type UseFlexSearchIndexStaticQueryVariables = Exact<{ [key: string]: never; }>;


type UseFlexSearchIndexStaticQuery = { readonly localSearchJobPosts: Maybe<Pick<LocalSearchJobPosts, 'publicIndexURL'>> };

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

type AllLokaliseMessagesFragment = Pick<LokaliseMessages, 'jobs_page__chapter_all' | 'jobs_page__employment_type_intern' | 'jobs_page__employment_type_fulltime' | 'jobs_page__employment_type_contractor' | 'jobs_page__employment_type_all' | 'jobs_page__employment_type_assistant' | 'jobs_page__search' | 'job_post_list__empty_placeholder__no_results' | 'job_post_list__empty_placeholder__back_to_list' | 'job_post_layout__tab_apply' | 'job_post_layout__tab_view' | 'job_post_layout__property_karrot_market' | 'job_post_page__faq' | 'job_post_page__back_to_list' | 'job_post_page__external_post_notice' | 'job_post_page__external_post_link' | 'job_application_page__field_portpolio_label' | 'job_application_page__field_phone_label' | 'job_application_page__field_phone_placeholder' | 'job_application_page__field_email_label' | 'job_application_page__field_resume_placeholder' | 'job_application_page__field_portpolio_placeholder' | 'job_application_page__field_resume_description' | 'job_application_page__field_name_label' | 'job_application_page__field_portpolio_description' | 'job_application_page__field_name_placeholder' | 'job_application_page__field_email_placeholder' | 'job_application_page__field_resume_label' | 'job_application_page__terms_sensitive_info' | 'job_application_page__button_submit' | 'job_application_page__terms_privacy_info' | 'job_application_page__confirm_apply' | 'job_post_layout__property_karrot_pay' | 'job_application_page__alert_completed' | 'job_application_page__alert_failed' | 'jobs_page__default_meta_title' | 'job_post_layout__prior_experience_yes' | 'job_post_layout__prior_experience_no' | 'job_post_layout__prior_experience_whatever' | 'job_application_page__field_file_placeholder' | 'detail_link__default_label' | 'form_field__placeholder' | 'form_field__empty_placeholder' | 'form_field__organization_name' | 'form_field__yes_placeholder' | 'form_field__no_placeholder'>;

type TeamWebsite_FaqAccordionItem_entryFragment = (
  Pick<PrismicTeamContentsDataFaqEntries, 'question'>
  & { readonly answer: Maybe<Pick<PrismicStructuredTextType, 'html'>> }
);

type TeamWebsite_FaqAccordion_faqDataFragment = { readonly faq_entries: Maybe<ReadonlyArray<Maybe<TeamWebsite_FaqAccordionItem_entryFragment>>> };

type PrismicTeamContentsDataCultureBodyBenefit_dataFragment = { readonly primary: { readonly title: Maybe<Pick<PrismicStructuredTextType, 'text'>> }, readonly items: ReadonlyArray<(
    Pick<PrismicTeamContentsDataCultureBodyBenefitItem, 'subtitle' | 'subtext'>
    & { readonly description: Maybe<Pick<PrismicStructuredTextType, 'html'>> }
  )> };

type PrismicTeamContentsDataCultureBodyTitleAndDescription_dataFragment = { readonly primary: (
    Pick<PrismicTeamContentsDataCultureBodyTitleAndDescriptionPrimary, 'key_text' | 'inverted'>
    & { readonly title: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly description: Maybe<Pick<PrismicStructuredTextType, 'html'>>, readonly link: Maybe<Pick<PrismicLinkType, 'url'>> }
  ) };

type PrismicTeamContentsDataCultureBodyKeyVisual_dataFragment = { readonly primary: (
    Pick<PrismicTeamContentsDataCultureBodyKeyVisualPrimary, 'expanded'>
    & { readonly key_visual_image: Maybe<(
      Pick<PrismicTeamContentsDataCultureBodyKeyVisualPrimaryKeyVisualImageImageType, 'alt'>
      & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }>, readonly thumbnails: Maybe<{ readonly portrait: Maybe<(
          Pick<PrismicImageThumbnailType, 'alt'>
          & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> }
        )> }> }
    )>, readonly description: Maybe<Pick<PrismicStructuredTextType, 'text'>> }
  ) };

type PrismicTeamContentsDataCultureBodyHowWeWork_dataFragment = { readonly primary: { readonly title: Maybe<Pick<PrismicStructuredTextType, 'text'>> }, readonly items: ReadonlyArray<(
    Pick<PrismicTeamContentsDataCultureBodyHowWeWorkItem, 'group' | 'key_text'>
    & { readonly description: Maybe<Pick<PrismicStructuredTextType, 'text'>> }
  )> };

type PrismicTeamContentsDataCultureBodyWideBanner_dataFragment = { readonly primary: (
    Pick<PrismicTeamContentsDataCultureBodyWideBannerPrimary, 'background_color' | 'link_text'>
    & { readonly title: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly thumbnail: Maybe<(
      Pick<PrismicTeamContentsDataCultureBodyWideBannerPrimaryThumbnailImageType, 'alt'>
      & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> }
    )>, readonly link: Maybe<Pick<PrismicLinkType, 'url'>> }
  ) };

type PrismicTeamContentsDataCultureBodyIllustrationAndDescription_dataFragment = { readonly primary: (
    Pick<PrismicTeamContentsDataCultureBodyIllustrationAndDescriptionPrimary, 'expanded' | 'inverted' | 'link_text'>
    & { readonly illustration: Maybe<(
      Pick<PrismicTeamContentsDataCultureBodyIllustrationAndDescriptionPrimaryIllustrationImageType, 'alt'>
      & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> }
    )>, readonly description: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly link: Maybe<Pick<PrismicLinkType, 'url'>> }
  ) };

type PrismicTeamContentsDataCultureBodyTitleAndIllustration_dataFragment = { readonly primary: (
    Pick<PrismicTeamContentsDataCultureBodyTitleAndIllustrationPrimary, 'key_text' | 'inverted'>
    & { readonly title: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly illustration: Maybe<(
      Pick<PrismicTeamContentsDataCultureBodyTitleAndIllustrationPrimaryIllustrationImageType, 'alt'>
      & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> }
    )>, readonly link: Maybe<Pick<PrismicLinkType, 'url'>> }
  ) };

type PrismicTeamContentsDataLifeBodyLifeContent_dataFragment = { readonly primary: { readonly title: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly body_text: Maybe<Pick<PrismicStructuredTextType, 'html'>> }, readonly items: ReadonlyArray<{ readonly thumbnail_description: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly thumbnail_image: Maybe<(
      Pick<PrismicTeamContentsDataLifeBodyLifeContentItemsThumbnailImageImageType, 'alt'>
      & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> }
    )> }> };

type PrismicTeamsArticleDataBodyArticleSection_dataFragment = { readonly primary: { readonly title: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly body_text: Maybe<Pick<PrismicStructuredTextType, 'html'>> }, readonly items: ReadonlyArray<{ readonly thumbnail_description: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly thumbnail_image: Maybe<(
      Pick<PrismicTeamsArticleDataBodyArticleSectionItemsThumbnailImageImageType, 'alt'>
      & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> }
    )> }> };

type TeamWebsite_FaqPageQueryVariables = Exact<{
  locale: Scalars['String'];
  navigationId: Scalars['String'];
}>;


type TeamWebsite_FaqPageQuery = (
  { readonly prismicTeamContents: Maybe<{ readonly data: (
      Pick<PrismicTeamContentsDataType, 'twitter_site_handle' | 'faq_page_meta_title' | 'faq_page_meta_description'>
      & { readonly faq_page_title: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly faq_entries: Maybe<ReadonlyArray<Maybe<(
        Pick<PrismicTeamContentsDataFaqEntries, 'question'>
        & { readonly answer: Maybe<Pick<PrismicStructuredTextType, 'text'>> }
      )>>> }
      & TeamWebsite_FaqAccordion_faqDataFragment
    ) }> }
  & TeamWebsite_DefaultLayout_queryFragment
);

type TeamWebsite_LifePageQueryVariables = Exact<{
  locale: Scalars['String'];
  navigationId: Scalars['String'];
}>;


type TeamWebsite_LifePageQuery = (
  { readonly prismicTeamContents: Maybe<{ readonly data: (
      Pick<PrismicTeamContentsDataType, 'life_page_meta_title' | 'life_page_meta_description'>
      & { readonly life_page_meta_image: Maybe<{ readonly localFile: Maybe<{ readonly childImageSharp: Maybe<{ readonly fixed: Maybe<Pick<ImageSharpFixed, 'src' | 'width' | 'height'>> }> }> }>, readonly life_page_title: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly life_body: ReadonlyArray<{ readonly __typename: 'PrismicTeamContentsDataLifeBodyKeyVisual' } | (
        { readonly __typename: 'PrismicTeamContentsDataLifeBodyLifeContent' }
        & PrismicTeamContentsDataLifeBodyLifeContent_dataFragment
      )> }
    ) }> }
  & TeamWebsite_DefaultLayout_queryFragment
);

type TeamWebsite_CulturePageQueryVariables = Exact<{
  locale: Scalars['String'];
  navigationId: Scalars['String'];
}>;


type TeamWebsite_CulturePageQuery = (
  { readonly prismicTeamContents: Maybe<(
    Pick<PrismicTeamContents, '_previewable'>
    & { readonly data: (
      Pick<PrismicTeamContentsDataType, 'culture_page_meta_title' | 'culture_page_meta_description'>
      & { readonly culture_page_meta_image: Maybe<{ readonly localFile: Maybe<{ readonly childImageSharp: Maybe<{ readonly fixed: Maybe<Pick<ImageSharpFixed, 'src' | 'width' | 'height'>> }> }> }>, readonly culture_page_title: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly culture_body: ReadonlyArray<(
        { readonly __typename: 'PrismicTeamContentsDataCultureBodyBenefit' }
        & PrismicTeamContentsDataCultureBodyBenefit_dataFragment
      ) | { readonly __typename: 'PrismicTeamContentsDataCultureBodyDivider' } | (
        { readonly __typename: 'PrismicTeamContentsDataCultureBodyHowWeWork' }
        & PrismicTeamContentsDataCultureBodyHowWeWork_dataFragment
      ) | (
        { readonly __typename: 'PrismicTeamContentsDataCultureBodyIllustrationAndDescription' }
        & PrismicTeamContentsDataCultureBodyIllustrationAndDescription_dataFragment
      ) | (
        { readonly __typename: 'PrismicTeamContentsDataCultureBodyKeyVisual' }
        & PrismicTeamContentsDataCultureBodyKeyVisual_dataFragment
      ) | { readonly __typename: 'PrismicTeamContentsDataCultureBodyMemberQuoteCarousel' } | (
        { readonly __typename: 'PrismicTeamContentsDataCultureBodyTitleAndDescription' }
        & PrismicTeamContentsDataCultureBodyTitleAndDescription_dataFragment
      ) | (
        { readonly __typename: 'PrismicTeamContentsDataCultureBodyTitleAndIllustration' }
        & PrismicTeamContentsDataCultureBodyTitleAndIllustration_dataFragment
      ) | (
        { readonly __typename: 'PrismicTeamContentsDataCultureBodyWideBanner' }
        & PrismicTeamContentsDataCultureBodyWideBanner_dataFragment
      )> }
    ) }
  )> }
  & TeamWebsite_DefaultLayout_queryFragment
);

type GatsbyImgixFluidFragment = Pick<ImgixFluid, 'aspectRatio' | 'src' | 'srcWebp' | 'srcSet' | 'srcSetWebp' | 'sizes' | 'base64'>;

type GatsbyImgixFluid_noBase64Fragment = Pick<ImgixFluid, 'aspectRatio' | 'src' | 'srcWebp' | 'srcSet' | 'srcSetWebp' | 'sizes'>;

type GatsbyImgixFixedFragment = Pick<ImgixFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImgixFixed_noBase64Fragment = Pick<ImgixFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyPrismicImageFixedFragment = GatsbyImgixFixedFragment;

type GatsbyPrismicImageFixed_noBase64Fragment = GatsbyImgixFixed_noBase64Fragment;

type GatsbyPrismicImageFixed_withWebpFragment = GatsbyImgixFixedFragment;

type GatsbyPrismicImageFixed_withWebp_noBase64Fragment = GatsbyImgixFixed_noBase64Fragment;

type GatsbyPrismicImageFluidFragment = GatsbyImgixFluidFragment;

type GatsbyPrismicImageFluid_noBase64Fragment = GatsbyImgixFluid_noBase64Fragment;

type GatsbyPrismicImageFluid_withWebpFragment = GatsbyImgixFluidFragment;

type GatsbyPrismicImageFluid_withWebp_noBase64Fragment = GatsbyImgixFluid_noBase64Fragment;

type TeamWebsite_TeamsArticlePageQueryVariables = Exact<{
  uid: Scalars['String'];
  locale: Scalars['String'];
  navigationId: Scalars['String'];
}>;


type TeamWebsite_TeamsArticlePageQuery = (
  { readonly prismicTeamsArticle: Maybe<(
    Pick<PrismicTeamsArticle, '_previewable'>
    & { readonly data: (
      Pick<PrismicTeamsArticleDataType, 'page_meta_title' | 'page_meta_description'>
      & { readonly page_meta_image: Maybe<{ readonly localFile: Maybe<{ readonly childImageSharp: Maybe<{ readonly fixed: Maybe<Pick<ImageSharpFixed, 'src' | 'width' | 'height'>> }> }> }>, readonly page_title: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly body: ReadonlyArray<(
        { readonly __typename: 'PrismicTeamsArticleDataBodyArticleSection' }
        & PrismicTeamsArticleDataBodyArticleSection_dataFragment
      )> }
    ) }
  )> }
  & TeamWebsite_DefaultLayout_queryFragment
);

}