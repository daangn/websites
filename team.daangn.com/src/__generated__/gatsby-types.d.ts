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
  readonly isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  readonly pluginCreator: Maybe<SitePlugin>;
  readonly pluginCreatorId: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent: Maybe<Node>;
  readonly children: ReadonlyArray<Node>;
  readonly internal: Internal;
  readonly context: Maybe<SitePageContext>;
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

type GatsbyImageLayout =
  | 'fixed'
  | 'fullWidth'
  | 'constrained';

type PrismicLinkType = {
  readonly link_type: Maybe<PrismicLinkTypeEnum>;
  readonly isBroken: Scalars['Boolean'];
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

type PrismicStructuredTextType = {
  readonly text: Scalars['String'];
  readonly html: Scalars['String'];
  readonly raw: Scalars['JSON'];
};

type PrismicTypePathType = Node & {
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

type PrismicFaqDataEntries = {
  readonly answer: Maybe<PrismicStructuredTextType>;
  readonly question: Maybe<Scalars['String']>;
};

type PrismicFaqDataType = {
  readonly entries: ReadonlyArray<PrismicFaqDataEntries>;
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

type PrismicGlobalContents = Node & {
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

type PrismicMemberProfileDataImageImageThumbnailsType = {
  readonly small_banner: Maybe<PrismicImageThumbnailType>;
  readonly wide_banner: Maybe<PrismicImageThumbnailType>;
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

type PrismicMemberProfileDataType = {
  readonly email: Maybe<Scalars['String']>;
  readonly image: Maybe<PrismicMemberProfileDataImageImageType>;
  readonly name: Maybe<Scalars['String']>;
  readonly nickname: Maybe<Scalars['String']>;
  readonly role: Maybe<Scalars['String']>;
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

type PrismicSiteNavigationDataFooterEntries = {
  readonly display_text: Maybe<Scalars['String']>;
  readonly group: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicLinkType>;
};

type PrismicSiteNavigationDataHeaderEntries = {
  readonly display_text: Maybe<Scalars['String']>;
  readonly group: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicLinkType>;
};

type PrismicSiteNavigationDataSnsProfiles = {
  readonly link: Maybe<PrismicLinkType>;
  readonly service: Maybe<Scalars['String']>;
};

type PrismicSiteNavigationDataType = {
  readonly address: Maybe<Scalars['String']>;
  readonly footer_entries: ReadonlyArray<PrismicSiteNavigationDataFooterEntries>;
  readonly header_entries: ReadonlyArray<PrismicSiteNavigationDataHeaderEntries>;
  readonly sns_profiles: ReadonlyArray<PrismicSiteNavigationDataSnsProfiles>;
  readonly tel: Maybe<Scalars['String']>;
};

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

type PrismicTeamContentsDataCultureBodyBenefitItem = {
  readonly description: Maybe<PrismicStructuredTextType>;
  readonly subtitle: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataCultureBodyBenefitPrimary = {
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicTeamContentsDataCultureBodyHowWeWorkItem = {
  readonly description: Maybe<PrismicStructuredTextType>;
  readonly group: Maybe<Scalars['String']>;
  readonly key_text: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataCultureBodyHowWeWorkPrimary = {
  readonly title: Maybe<PrismicStructuredTextType>;
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

type PrismicTeamContentsDataCultureBodyIllustrationAndDescriptionPrimary = {
  readonly description: Maybe<PrismicStructuredTextType>;
  readonly expanded: Maybe<Scalars['Boolean']>;
  readonly illustration: Maybe<PrismicTeamContentsDataCultureBodyIllustrationAndDescriptionPrimaryIllustrationImageType>;
  readonly inverted: Maybe<Scalars['Boolean']>;
  readonly link: Maybe<PrismicLinkType>;
  readonly link_text: Maybe<Scalars['String']>;
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

type PrismicTeamContentsDataCultureBodyKeyVisualPrimary = {
  readonly description: Maybe<PrismicStructuredTextType>;
  readonly expanded: Maybe<Scalars['Boolean']>;
  readonly key_visual_image: Maybe<PrismicTeamContentsDataCultureBodyKeyVisualPrimaryKeyVisualImageImageType>;
};

type PrismicTeamContentsDataCultureBodyTitleAndDescriptionPrimary = {
  readonly description: Maybe<PrismicStructuredTextType>;
  readonly inverted: Maybe<Scalars['Boolean']>;
  readonly key_text: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicLinkType>;
  readonly link_text: Maybe<Scalars['String']>;
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

type PrismicTeamContentsDataCultureBodyTitleAndIllustrationPrimary = {
  readonly illustration: Maybe<PrismicTeamContentsDataCultureBodyTitleAndIllustrationPrimaryIllustrationImageType>;
  readonly inverted: Maybe<Scalars['Boolean']>;
  readonly key_text: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicLinkType>;
  readonly link_text: Maybe<Scalars['String']>;
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicTeamContentsDataCultureBodyBenefit = PrismicSliceType & {
  readonly items: Maybe<ReadonlyArray<PrismicTeamContentsDataCultureBodyBenefitItem>>;
  readonly primary: Maybe<PrismicTeamContentsDataCultureBodyBenefitPrimary>;
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
  readonly items: Maybe<ReadonlyArray<PrismicTeamContentsDataCultureBodyHowWeWorkItem>>;
  readonly primary: Maybe<PrismicTeamContentsDataCultureBodyHowWeWorkPrimary>;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataCultureBodyIllustrationAndDescription = PrismicSliceType & {
  readonly primary: Maybe<PrismicTeamContentsDataCultureBodyIllustrationAndDescriptionPrimary>;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataCultureBodyKeyVisual = PrismicSliceType & {
  readonly primary: Maybe<PrismicTeamContentsDataCultureBodyKeyVisualPrimary>;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataCultureBodyTitleAndDescription = PrismicSliceType & {
  readonly primary: Maybe<PrismicTeamContentsDataCultureBodyTitleAndDescriptionPrimary>;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataCultureBodyTitleAndIllustration = PrismicSliceType & {
  readonly primary: Maybe<PrismicTeamContentsDataCultureBodyTitleAndIllustrationPrimary>;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataCultureBodySlicesType = PrismicTeamContentsDataCultureBodyBenefit | PrismicTeamContentsDataCultureBodyDivider | PrismicTeamContentsDataCultureBodyHowWeWork | PrismicTeamContentsDataCultureBodyIllustrationAndDescription | PrismicTeamContentsDataCultureBodyKeyVisual | PrismicTeamContentsDataCultureBodyTitleAndDescription | PrismicTeamContentsDataCultureBodyTitleAndIllustration;

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

type PrismicTeamContentsDataLifeBodyLifeContentItem = {
  readonly thumbnail_description: Maybe<PrismicStructuredTextType>;
  readonly thumbnail_image: Maybe<PrismicTeamContentsDataLifeBodyLifeContentItemsThumbnailImageImageType>;
};

type PrismicTeamContentsDataLifeBodyLifeContentPrimary = {
  readonly body_text: Maybe<PrismicStructuredTextType>;
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicTeamContentsDataLifeBodyLifeContent = PrismicSliceType & {
  readonly items: Maybe<ReadonlyArray<PrismicTeamContentsDataLifeBodyLifeContentItem>>;
  readonly primary: Maybe<PrismicTeamContentsDataLifeBodyLifeContentPrimary>;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataLifeBodySlicesType = PrismicTeamContentsDataLifeBodyLifeContent;

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

type PrismicTeamContentsDataMainBodyDivider = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataMainBodyKeyVisual = PrismicSliceType & {
  readonly primary: Maybe<PrismicTeamContentsDataMainBodyKeyVisualPrimary>;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataMainBodyMemberQuoteCarousel = PrismicSliceType & {
  readonly items: Maybe<ReadonlyArray<PrismicTeamContentsDataMainBodyMemberQuoteCarouselItem>>;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataMainBodyTitleAndDescription = PrismicSliceType & {
  readonly primary: Maybe<PrismicTeamContentsDataMainBodyTitleAndDescriptionPrimary>;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataMainBodyTitleAndIllustration = PrismicSliceType & {
  readonly primary: Maybe<PrismicTeamContentsDataMainBodyTitleAndIllustrationPrimary>;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataMainBodyWideBanner = PrismicSliceType & {
  readonly primary: Maybe<PrismicTeamContentsDataMainBodyWideBannerPrimary>;
  readonly id: Scalars['ID'];
  readonly slice_type: Scalars['String'];
  readonly slice_label: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataMainBodySlicesType = PrismicTeamContentsDataMainBodyDivider | PrismicTeamContentsDataMainBodyKeyVisual | PrismicTeamContentsDataMainBodyMemberQuoteCarousel | PrismicTeamContentsDataMainBodyTitleAndDescription | PrismicTeamContentsDataMainBodyTitleAndIllustration | PrismicTeamContentsDataMainBodyWideBanner;

type PrismicTeamContentsDataType = {
  readonly culture_body: ReadonlyArray<PrismicTeamContentsDataCultureBodySlicesType>;
  readonly culture_page_title: Maybe<PrismicStructuredTextType>;
  readonly life_body: ReadonlyArray<PrismicTeamContentsDataLifeBodySlicesType>;
  readonly life_page_title: Maybe<PrismicStructuredTextType>;
  readonly main_body: ReadonlyArray<PrismicTeamContentsDataMainBodySlicesType>;
  readonly main_page_title: Maybe<PrismicStructuredTextType>;
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

type PrismicTermsAndConditions = Node & {
  readonly uid: Scalars['String'];
  readonly data: Maybe<PrismicTermsAndConditionsDataType>;
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

type PrismicAllDocumentTypes = PrismicAdsIntro | PrismicFaq | PrismicGlobalContents | PrismicMbtiTestResult | PrismicMbtiIntro | PrismicMbtiTestQuestion | PrismicMemberProfile | PrismicSiteNavigation | PrismicTeamContents | PrismicTermsAndConditions;

type JobPost = Node & {
  readonly ghId: Scalars['String'];
  readonly title: Scalars['String'];
  readonly boardUrl: Scalars['String'];
  readonly content: ReadonlyArray<JobPostContentSection>;
  readonly rawContent: Scalars['String'];
  readonly corporate: Maybe<JobCorporate>;
  readonly employmentType: JobEmploymentType;
  readonly alternativeCivilianService: Scalars['Boolean'];
  readonly priorExperience: JobPriorExperience;
  readonly chapter: Scalars['String'];
  readonly portfolioRequired: Scalars['Boolean'];
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

type JobCorporate =
  | 'KARROT_MARKET'
  | 'KARROT_PAY';

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
  readonly imageSharp: Maybe<ImageSharp>;
  readonly allImageSharp: ImageSharpConnection;
  readonly prismicEmbedType: Maybe<PrismicEmbedType>;
  readonly allPrismicEmbedType: PrismicEmbedTypeConnection;
  readonly prismicTypePathType: Maybe<PrismicTypePathType>;
  readonly allPrismicTypePathType: PrismicTypePathTypeConnection;
  readonly prismicAdsIntro: Maybe<PrismicAdsIntro>;
  readonly allPrismicAdsIntro: PrismicAdsIntroConnection;
  readonly prismicFaq: Maybe<PrismicFaq>;
  readonly allPrismicFaq: PrismicFaqConnection;
  readonly prismicGlobalContents: Maybe<PrismicGlobalContents>;
  readonly allPrismicGlobalContents: PrismicGlobalContentsConnection;
  readonly prismicMbtiTestResult: Maybe<PrismicMbtiTestResult>;
  readonly allPrismicMbtiTestResult: PrismicMbtiTestResultConnection;
  readonly prismicMbtiIntro: Maybe<PrismicMbtiIntro>;
  readonly allPrismicMbtiIntro: PrismicMbtiIntroConnection;
  readonly prismicMbtiTestQuestion: Maybe<PrismicMbtiTestQuestion>;
  readonly allPrismicMbtiTestQuestion: PrismicMbtiTestQuestionConnection;
  readonly prismicMemberProfile: Maybe<PrismicMemberProfile>;
  readonly allPrismicMemberProfile: PrismicMemberProfileConnection;
  readonly prismicSiteNavigation: Maybe<PrismicSiteNavigation>;
  readonly allPrismicSiteNavigation: PrismicSiteNavigationConnection;
  readonly prismicTeamContents: Maybe<PrismicTeamContents>;
  readonly allPrismicTeamContents: PrismicTeamContentsConnection;
  readonly prismicTermsAndConditions: Maybe<PrismicTermsAndConditions>;
  readonly allPrismicTermsAndConditions: PrismicTermsAndConditionsConnection;
  readonly jobPost: Maybe<JobPost>;
  readonly allJobPost: JobPostConnection;
  readonly greenhouseJob: Maybe<GreenhouseJob>;
  readonly allGreenhouseJob: GreenhouseJobConnection;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly sitePlugin: Maybe<SitePlugin>;
  readonly allSitePlugin: SitePluginConnection;
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
  isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  pluginCreator: Maybe<SitePluginFilterInput>;
  pluginCreatorId: Maybe<StringQueryOperatorInput>;
  id: Maybe<StringQueryOperatorInput>;
  parent: Maybe<NodeFilterInput>;
  children: Maybe<NodeFilterListInput>;
  internal: Maybe<InternalFilterInput>;
  context: Maybe<SitePageContextFilterInput>;
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


type Query_prismicGlobalContentsArgs = {
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


type Query_jobPostArgs = {
  ghId: Maybe<StringQueryOperatorInput>;
  title: Maybe<StringQueryOperatorInput>;
  boardUrl: Maybe<StringQueryOperatorInput>;
  content: Maybe<JobPostContentSectionFilterListInput>;
  rawContent: Maybe<StringQueryOperatorInput>;
  corporate: Maybe<JobCorporateQueryOperatorInput>;
  employmentType: Maybe<JobEmploymentTypeQueryOperatorInput>;
  alternativeCivilianService: Maybe<BooleanQueryOperatorInput>;
  priorExperience: Maybe<JobPriorExperienceQueryOperatorInput>;
  chapter: Maybe<StringQueryOperatorInput>;
  portfolioRequired: Maybe<BooleanQueryOperatorInput>;
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

type SiteFlagsFilterInput = {
  readonly FAST_DEV: Maybe<BooleanQueryOperatorInput>;
  readonly QUERY_ON_DEMAND: Maybe<BooleanQueryOperatorInput>;
  readonly LAZY_IMAGES: Maybe<BooleanQueryOperatorInput>;
  readonly PARALLEL_SOURCING: Maybe<BooleanQueryOperatorInput>;
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
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
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
  readonly defaults: Maybe<SitePluginPluginOptionsDefaultsFilterInput>;
  readonly base64Width: Maybe<IntQueryOperatorInput>;
  readonly stripMetadata: Maybe<BooleanQueryOperatorInput>;
  readonly defaultQuality: Maybe<IntQueryOperatorInput>;
  readonly failOnError: Maybe<BooleanQueryOperatorInput>;
  readonly root: Maybe<StringQueryOperatorInput>;
  readonly aliases: Maybe<SitePluginPluginOptionsAliasesFilterInput>;
  readonly component: Maybe<StringQueryOperatorInput>;
  readonly outputPath: Maybe<StringQueryOperatorInput>;
  readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchemaFilterInput>;
  readonly emitPluginDocuments: Maybe<SitePluginPluginOptionsEmitPluginDocumentsFilterInput>;
  readonly repositoryName: Maybe<StringQueryOperatorInput>;
  readonly schemas: Maybe<SitePluginPluginOptionsSchemasFilterInput>;
  readonly apiEndpoint: Maybe<StringQueryOperatorInput>;
  readonly customTypesApiEndpoint: Maybe<StringQueryOperatorInput>;
  readonly lang: Maybe<StringQueryOperatorInput>;
  readonly imageImgixParams: Maybe<SitePluginPluginOptionsImageImgixParamsFilterInput>;
  readonly imagePlaceholderImgixParams: Maybe<SitePluginPluginOptionsImagePlaceholderImgixParamsFilterInput>;
  readonly toolbar: Maybe<StringQueryOperatorInput>;
  readonly promptForAccessToken: Maybe<BooleanQueryOperatorInput>;
  readonly boardToken: Maybe<StringQueryOperatorInput>;
  readonly includeContent: Maybe<BooleanQueryOperatorInput>;
  readonly path: Maybe<StringQueryOperatorInput>;
  readonly pathCheck: Maybe<BooleanQueryOperatorInput>;
  readonly allExtensions: Maybe<BooleanQueryOperatorInput>;
  readonly isTSX: Maybe<BooleanQueryOperatorInput>;
  readonly jsxPragma: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsDefaultsFilterInput = {
  readonly formats: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
  readonly quality: Maybe<IntQueryOperatorInput>;
  readonly breakpoints: Maybe<IntQueryOperatorInput>;
  readonly backgroundColor: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsAliasesFilterInput = {
  readonly _: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsEmitSchemaFilterInput = {
  readonly src___generated___gatsby_schema_graphql: Maybe<BooleanQueryOperatorInput>;
  readonly src___generated___gatsby_introspection_json: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsEmitPluginDocumentsFilterInput = {
  readonly src___generated___gatsby_plugin_documents_graphql: Maybe<BooleanQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasFilterInput = {
  readonly faq: Maybe<SitePluginPluginOptionsSchemasFaqFilterInput>;
  readonly site_navigation: Maybe<SitePluginPluginOptionsSchemasSite_navigationFilterInput>;
  readonly terms_and_conditions: Maybe<SitePluginPluginOptionsSchemasTerms_and_conditionsFilterInput>;
  readonly member_profile: Maybe<SitePluginPluginOptionsSchemasMember_profileFilterInput>;
  readonly team_contents: Maybe<SitePluginPluginOptionsSchemasTeam_contentsFilterInput>;
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
  readonly Header: Maybe<SitePluginPluginOptionsSchemasSite_navigationHeaderFilterInput>;
  readonly Footer: Maybe<SitePluginPluginOptionsSchemasSite_navigationFooterFilterInput>;
  readonly SNS_Profile: Maybe<SitePluginPluginOptionsSchemasSite_navigationSNS_ProfileFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainFilterInput = {
  readonly uid: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainUidFilterInput>;
  readonly address: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainAddressFilterInput>;
  readonly tel: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainTelFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainUidFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainUidConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainUidConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainAddressFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainAddressConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainAddressConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainTelFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainTelConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainTelConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationHeaderFilterInput = {
  readonly header_entries: Maybe<SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entriesFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entriesFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entriesConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entriesConfigFilterInput = {
  readonly fields: Maybe<SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entriesConfigFieldsFilterInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entriesConfigFieldsFilterInput = {
  readonly display_text: Maybe<SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entriesConfigFieldsDisplay_textFilterInput>;
  readonly link: Maybe<SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entriesConfigFieldsLinkFilterInput>;
  readonly group: Maybe<SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entriesConfigFieldsGroupFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entriesConfigFieldsDisplay_textFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entriesConfigFieldsDisplay_textConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entriesConfigFieldsDisplay_textConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entriesConfigFieldsLinkFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entriesConfigFieldsLinkConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entriesConfigFieldsLinkConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entriesConfigFieldsGroupFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entriesConfigFieldsGroupConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entriesConfigFieldsGroupConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationFooterFilterInput = {
  readonly footer_entries: Maybe<SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entriesFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entriesFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entriesConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entriesConfigFilterInput = {
  readonly fields: Maybe<SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entriesConfigFieldsFilterInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entriesConfigFieldsFilterInput = {
  readonly display_text: Maybe<SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entriesConfigFieldsDisplay_textFilterInput>;
  readonly link: Maybe<SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entriesConfigFieldsLinkFilterInput>;
  readonly group: Maybe<SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entriesConfigFieldsGroupFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entriesConfigFieldsDisplay_textFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entriesConfigFieldsDisplay_textConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entriesConfigFieldsDisplay_textConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entriesConfigFieldsLinkFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entriesConfigFieldsLinkConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entriesConfigFieldsLinkConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entriesConfigFieldsGroupFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entriesConfigFieldsGroupConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entriesConfigFieldsGroupConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationSNS_ProfileFilterInput = {
  readonly sns_profiles: Maybe<SitePluginPluginOptionsSchemasSite_navigationSNS_ProfileSns_profilesFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationSNS_ProfileSns_profilesFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationSNS_ProfileSns_profilesConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationSNS_ProfileSns_profilesConfigFilterInput = {
  readonly fields: Maybe<SitePluginPluginOptionsSchemasSite_navigationSNS_ProfileSns_profilesConfigFieldsFilterInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationSNS_ProfileSns_profilesConfigFieldsFilterInput = {
  readonly service: Maybe<SitePluginPluginOptionsSchemasSite_navigationSNS_ProfileSns_profilesConfigFieldsServiceFilterInput>;
  readonly link: Maybe<SitePluginPluginOptionsSchemasSite_navigationSNS_ProfileSns_profilesConfigFieldsLinkFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationSNS_ProfileSns_profilesConfigFieldsServiceFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationSNS_ProfileSns_profilesConfigFieldsServiceConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationSNS_ProfileSns_profilesConfigFieldsServiceConfigFilterInput = {
  readonly options: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationSNS_ProfileSns_profilesConfigFieldsLinkFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationSNS_ProfileSns_profilesConfigFieldsLinkConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasSite_navigationSNS_ProfileSns_profilesConfigFieldsLinkConfigFilterInput = {
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

type SitePluginPluginOptionsSchemasMember_profileFilterInput = {
  readonly Main: Maybe<SitePluginPluginOptionsSchemasMember_profileMainFilterInput>;
};

type SitePluginPluginOptionsSchemasMember_profileMainFilterInput = {
  readonly nickname: Maybe<SitePluginPluginOptionsSchemasMember_profileMainNicknameFilterInput>;
  readonly name: Maybe<SitePluginPluginOptionsSchemasMember_profileMainNameFilterInput>;
  readonly email: Maybe<SitePluginPluginOptionsSchemasMember_profileMainEmailFilterInput>;
  readonly role: Maybe<SitePluginPluginOptionsSchemasMember_profileMainRoleFilterInput>;
  readonly image: Maybe<SitePluginPluginOptionsSchemasMember_profileMainImageFilterInput>;
};

type SitePluginPluginOptionsSchemasMember_profileMainNicknameFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMember_profileMainNicknameConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMember_profileMainNicknameConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMember_profileMainNameFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMember_profileMainNameConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMember_profileMainNameConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMember_profileMainEmailFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMember_profileMainEmailConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMember_profileMainEmailConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMember_profileMainRoleFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMember_profileMainRoleConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMember_profileMainRoleConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMember_profileMainImageFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMember_profileMainImageConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasMember_profileMainImageConfigFilterInput = {
  readonly constraint: Maybe<SitePluginPluginOptionsSchemasMember_profileMainImageConfigConstraintFilterInput>;
  readonly thumbnails: Maybe<SitePluginPluginOptionsSchemasMember_profileMainImageConfigThumbnailsFilterListInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMember_profileMainImageConfigConstraintFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasMember_profileMainImageConfigThumbnailsFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsSchemasMember_profileMainImageConfigThumbnailsFilterInput>;
};

type SitePluginPluginOptionsSchemasMember_profileMainImageConfigThumbnailsFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsFilterInput = {
  readonly Main: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainFilterInput>;
  readonly Culture: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureFilterInput>;
  readonly Life: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainFilterInput = {
  readonly main_page_title: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_page_titleFilterInput>;
  readonly main_body: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_page_titleFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_page_titleConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_page_titleConfigFilterInput = {
  readonly single: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly fieldset: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigFilterInput = {
  readonly labels: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigLabelsFilterInput>;
  readonly choices: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigLabelsFilterInput = {
  readonly title_and_description: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigLabelsTitle_and_descriptionFilterListInput>;
  readonly title_and_illustration: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigLabelsTitle_and_illustrationFilterListInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigLabelsTitle_and_descriptionFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigLabelsTitle_and_descriptionFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigLabelsTitle_and_descriptionFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigLabelsTitle_and_illustrationFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigLabelsTitle_and_illustrationFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigLabelsTitle_and_illustrationFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesFilterInput = {
  readonly key_visual: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visualFilterInput>;
  readonly member_quote_carousel: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carouselFilterInput>;
  readonly wide_banner: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerFilterInput>;
  readonly title_and_description: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionFilterInput>;
  readonly title_and_illustration: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationFilterInput>;
  readonly divider: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesDividerFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visualFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly fieldset: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visualNon_repeatFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visualNon_repeatFilterInput = {
  readonly key_visual_image: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visualNon_repeatKey_visual_imageFilterInput>;
  readonly expanded: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visualNon_repeatExpandedFilterInput>;
  readonly description: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visualNon_repeatDescriptionFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visualNon_repeatKey_visual_imageFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visualNon_repeatKey_visual_imageConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visualNon_repeatKey_visual_imageConfigFilterInput = {
  readonly constraint: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visualNon_repeatKey_visual_imageConfigConstraintFilterInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visualNon_repeatKey_visual_imageConfigConstraintFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visualNon_repeatExpandedFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visualNon_repeatExpandedConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visualNon_repeatExpandedConfigFilterInput = {
  readonly placeholder_false: Maybe<StringQueryOperatorInput>;
  readonly placeholder_true: Maybe<StringQueryOperatorInput>;
  readonly default_value: Maybe<BooleanQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visualNon_repeatDescriptionFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visualNon_repeatDescriptionConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visualNon_repeatDescriptionConfigFilterInput = {
  readonly single: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carouselFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly fieldset: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
  readonly repeat: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carouselRepeatFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carouselRepeatFilterInput = {
  readonly image: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carouselRepeatImageFilterInput>;
  readonly quote: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carouselRepeatQuoteFilterInput>;
  readonly who: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carouselRepeatWhoFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carouselRepeatImageFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carouselRepeatImageConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carouselRepeatImageConfigFilterInput = {
  readonly constraint: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carouselRepeatImageConfigConstraintFilterInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carouselRepeatImageConfigConstraintFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carouselRepeatQuoteFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carouselRepeatQuoteConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carouselRepeatQuoteConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carouselRepeatWhoFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carouselRepeatWhoConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carouselRepeatWhoConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly fieldset: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatFilterInput = {
  readonly thumbnail: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatThumbnailFilterInput>;
  readonly title: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatTitleFilterInput>;
  readonly link: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatLinkFilterInput>;
  readonly link_text: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatLink_textFilterInput>;
  readonly background_color: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatBackground_colorFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatThumbnailFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatThumbnailConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatThumbnailConfigFilterInput = {
  readonly constraint: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatThumbnailConfigConstraintFilterInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatThumbnailConfigConstraintFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatTitleFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatTitleConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatTitleConfigFilterInput = {
  readonly single: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatLinkFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatLinkConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatLinkConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatLink_textFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatLink_textConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatLink_textConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatBackground_colorFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatBackground_colorConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatBackground_colorConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly fieldset: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatFilterInput = {
  readonly key_text: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatKey_textFilterInput>;
  readonly title: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatTitleFilterInput>;
  readonly inverted: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatInvertedFilterInput>;
  readonly link: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatLinkFilterInput>;
  readonly link_text: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatLink_textFilterInput>;
  readonly description: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatDescriptionFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatKey_textFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatKey_textConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatKey_textConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatTitleFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatTitleConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatTitleConfigFilterInput = {
  readonly single: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatInvertedFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatInvertedConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatInvertedConfigFilterInput = {
  readonly placeholder_false: Maybe<StringQueryOperatorInput>;
  readonly placeholder_true: Maybe<StringQueryOperatorInput>;
  readonly default_value: Maybe<BooleanQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatLinkFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatLinkConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatLinkConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatLink_textFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatLink_textConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatLink_textConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatDescriptionFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatDescriptionConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatDescriptionConfigFilterInput = {
  readonly multi: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly fieldset: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatFilterInput = {
  readonly key_text: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatKey_textFilterInput>;
  readonly title: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatTitleFilterInput>;
  readonly inverted: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatInvertedFilterInput>;
  readonly link: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatLinkFilterInput>;
  readonly link_text: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatLink_textFilterInput>;
  readonly illustration: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatIllustrationFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatKey_textFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatKey_textConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatKey_textConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatTitleFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatTitleConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatTitleConfigFilterInput = {
  readonly single: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatInvertedFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatInvertedConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatInvertedConfigFilterInput = {
  readonly placeholder_false: Maybe<StringQueryOperatorInput>;
  readonly placeholder_true: Maybe<StringQueryOperatorInput>;
  readonly default_value: Maybe<BooleanQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatLinkFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatLinkConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatLinkConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatLink_textFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatLink_textConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatLink_textConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatIllustrationFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatIllustrationConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatIllustrationConfigFilterInput = {
  readonly constraint: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatIllustrationConfigConstraintFilterInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatIllustrationConfigConstraintFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesDividerFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly fieldset: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureFilterInput = {
  readonly culture_page_title: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_page_titleFilterInput>;
  readonly culture_body: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_page_titleFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_page_titleConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_page_titleConfigFilterInput = {
  readonly single: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly fieldset: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigFilterInput = {
  readonly labels: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigLabelsFilterInput>;
  readonly choices: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigLabelsFilterInput = {
  readonly divider: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigLabelsDividerFilterListInput>;
  readonly illustration_and_description: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigLabelsIllustration_and_descriptionFilterListInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigLabelsDividerFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigLabelsDividerFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigLabelsDividerFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigLabelsIllustration_and_descriptionFilterListInput = {
  readonly elemMatch: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigLabelsIllustration_and_descriptionFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigLabelsIllustration_and_descriptionFilterInput = {
  readonly name: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesFilterInput = {
  readonly key_visual: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visualFilterInput>;
  readonly divider: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesDividerFilterInput>;
  readonly title_and_description: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionFilterInput>;
  readonly title_and_illustration: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationFilterInput>;
  readonly illustration_and_description: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionFilterInput>;
  readonly how_we_work: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workFilterInput>;
  readonly benefit: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefitFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visualFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly fieldset: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visualNon_repeatFilterInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visualNon_repeatFilterInput = {
  readonly key_visual_image: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visualNon_repeatKey_visual_imageFilterInput>;
  readonly expanded: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visualNon_repeatExpandedFilterInput>;
  readonly description: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visualNon_repeatDescriptionFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visualNon_repeatKey_visual_imageFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visualNon_repeatKey_visual_imageConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visualNon_repeatKey_visual_imageConfigFilterInput = {
  readonly constraint: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visualNon_repeatKey_visual_imageConfigConstraintFilterInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visualNon_repeatKey_visual_imageConfigConstraintFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visualNon_repeatExpandedFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visualNon_repeatExpandedConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visualNon_repeatExpandedConfigFilterInput = {
  readonly placeholder_false: Maybe<StringQueryOperatorInput>;
  readonly placeholder_true: Maybe<StringQueryOperatorInput>;
  readonly default_value: Maybe<BooleanQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visualNon_repeatDescriptionFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visualNon_repeatDescriptionConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visualNon_repeatDescriptionConfigFilterInput = {
  readonly single: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesDividerFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly fieldset: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly fieldset: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatFilterInput = {
  readonly key_text: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatKey_textFilterInput>;
  readonly title: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatTitleFilterInput>;
  readonly inverted: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatInvertedFilterInput>;
  readonly link: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatLinkFilterInput>;
  readonly link_text: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatLink_textFilterInput>;
  readonly description: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatDescriptionFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatKey_textFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatKey_textConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatKey_textConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatTitleFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatTitleConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatTitleConfigFilterInput = {
  readonly single: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatInvertedFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatInvertedConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatInvertedConfigFilterInput = {
  readonly placeholder_false: Maybe<StringQueryOperatorInput>;
  readonly placeholder_true: Maybe<StringQueryOperatorInput>;
  readonly default_value: Maybe<BooleanQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatLinkFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatLinkConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatLinkConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatLink_textFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatLink_textConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatLink_textConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatDescriptionFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatDescriptionConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatDescriptionConfigFilterInput = {
  readonly multi: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly fieldset: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatFilterInput = {
  readonly key_text: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatKey_textFilterInput>;
  readonly title: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatTitleFilterInput>;
  readonly inverted: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatInvertedFilterInput>;
  readonly link: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatLinkFilterInput>;
  readonly link_text: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatLink_textFilterInput>;
  readonly illustration: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatIllustrationFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatKey_textFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatKey_textConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatKey_textConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatTitleFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatTitleConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatTitleConfigFilterInput = {
  readonly single: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatInvertedFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatInvertedConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatInvertedConfigFilterInput = {
  readonly placeholder_false: Maybe<StringQueryOperatorInput>;
  readonly placeholder_true: Maybe<StringQueryOperatorInput>;
  readonly default_value: Maybe<BooleanQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatLinkFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatLinkConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatLinkConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatLink_textFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatLink_textConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatLink_textConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatIllustrationFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatIllustrationConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatIllustrationConfigFilterInput = {
  readonly constraint: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatIllustrationConfigConstraintFilterInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatIllustrationConfigConstraintFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly fieldset: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatFilterInput = {
  readonly illustration: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatIllustrationFilterInput>;
  readonly expanded: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatExpandedFilterInput>;
  readonly inverted: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatInvertedFilterInput>;
  readonly description: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatDescriptionFilterInput>;
  readonly link: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatLinkFilterInput>;
  readonly link_text: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatLink_textFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatIllustrationFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatIllustrationConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatIllustrationConfigFilterInput = {
  readonly constraint: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatIllustrationConfigConstraintFilterInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatIllustrationConfigConstraintFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
  readonly height: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatExpandedFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatExpandedConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatExpandedConfigFilterInput = {
  readonly placeholder_false: Maybe<StringQueryOperatorInput>;
  readonly placeholder_true: Maybe<StringQueryOperatorInput>;
  readonly default_value: Maybe<BooleanQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatInvertedFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatInvertedConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatInvertedConfigFilterInput = {
  readonly placeholder_false: Maybe<StringQueryOperatorInput>;
  readonly placeholder_true: Maybe<StringQueryOperatorInput>;
  readonly default_value: Maybe<BooleanQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatDescriptionFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatDescriptionConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatDescriptionConfigFilterInput = {
  readonly multi: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatLinkFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatLinkConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatLinkConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatLink_textFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatLink_textConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatLink_textConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly fieldset: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workNon_repeatFilterInput>;
  readonly repeat: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workRepeatFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workNon_repeatFilterInput = {
  readonly title: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workNon_repeatTitleFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workNon_repeatTitleFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workNon_repeatTitleConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workNon_repeatTitleConfigFilterInput = {
  readonly single: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
  readonly placeholder: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workRepeatFilterInput = {
  readonly group: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workRepeatGroupFilterInput>;
  readonly key_text: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workRepeatKey_textFilterInput>;
  readonly description: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workRepeatDescriptionFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workRepeatGroupFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workRepeatGroupConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workRepeatGroupConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workRepeatKey_textFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workRepeatKey_textConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workRepeatKey_textConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workRepeatDescriptionFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workRepeatDescriptionConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workRepeatDescriptionConfigFilterInput = {
  readonly single: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefitFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly fieldset: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefitNon_repeatFilterInput>;
  readonly repeat: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefitRepeatFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefitNon_repeatFilterInput = {
  readonly title: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefitNon_repeatTitleFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefitNon_repeatTitleFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefitNon_repeatTitleConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefitNon_repeatTitleConfigFilterInput = {
  readonly single: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefitRepeatFilterInput = {
  readonly subtitle: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefitRepeatSubtitleFilterInput>;
  readonly description: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefitRepeatDescriptionFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefitRepeatSubtitleFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefitRepeatSubtitleConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefitRepeatSubtitleConfigFilterInput = {
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefitRepeatDescriptionFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefitRepeatDescriptionConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefitRepeatDescriptionConfigFilterInput = {
  readonly single: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeFilterInput = {
  readonly life_page_title: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeLife_page_titleFilterInput>;
  readonly life_body: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeLife_page_titleFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeLife_page_titleConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeLife_page_titleConfigFilterInput = {
  readonly single: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly fieldset: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigFilterInput = {
  readonly choices: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesFilterInput = {
  readonly life_content: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly fieldset: Maybe<StringQueryOperatorInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly icon: Maybe<StringQueryOperatorInput>;
  readonly display: Maybe<StringQueryOperatorInput>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentNon_repeatFilterInput>;
  readonly repeat: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentRepeatFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentNon_repeatFilterInput = {
  readonly title: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentNon_repeatTitleFilterInput>;
  readonly body_text: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentNon_repeatBody_textFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentNon_repeatTitleFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentNon_repeatTitleConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentNon_repeatTitleConfigFilterInput = {
  readonly single: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentNon_repeatBody_textFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentNon_repeatBody_textConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentNon_repeatBody_textConfigFilterInput = {
  readonly multi: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentRepeatFilterInput = {
  readonly thumbnail_image: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentRepeatThumbnail_imageFilterInput>;
  readonly thumbnail_description: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentRepeatThumbnail_descriptionFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentRepeatThumbnail_imageFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentRepeatThumbnail_imageConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentRepeatThumbnail_imageConfigFilterInput = {
  readonly constraint: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentRepeatThumbnail_imageConfigConstraintFilterInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentRepeatThumbnail_imageConfigConstraintFilterInput = {
  readonly width: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentRepeatThumbnail_descriptionFilterInput = {
  readonly type: Maybe<StringQueryOperatorInput>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentRepeatThumbnail_descriptionConfigFilterInput>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentRepeatThumbnail_descriptionConfigFilterInput = {
  readonly single: Maybe<StringQueryOperatorInput>;
  readonly label: Maybe<StringQueryOperatorInput>;
};

type SitePluginPluginOptionsImageImgixParamsFilterInput = {
  readonly auto: Maybe<StringQueryOperatorInput>;
  readonly fit: Maybe<StringQueryOperatorInput>;
  readonly q: Maybe<IntQueryOperatorInput>;
};

type SitePluginPluginOptionsImagePlaceholderImgixParamsFilterInput = {
  readonly w: Maybe<IntQueryOperatorInput>;
  readonly blur: Maybe<IntQueryOperatorInput>;
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

type SitePageContextFilterInput = {
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent__ghId: Maybe<StringQueryOperatorInput>;
  readonly _xparams: Maybe<SitePageContext_xparamsFilterInput>;
};

type SitePageContext_xparamsFilterInput = {
  readonly parent__ghId: Maybe<StringQueryOperatorInput>;
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
  | 'isCreatedByStatefulCreatePages'
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
  | 'pluginCreator.pluginOptions.defaults.formats'
  | 'pluginCreator.pluginOptions.defaults.placeholder'
  | 'pluginCreator.pluginOptions.defaults.quality'
  | 'pluginCreator.pluginOptions.defaults.breakpoints'
  | 'pluginCreator.pluginOptions.defaults.backgroundColor'
  | 'pluginCreator.pluginOptions.base64Width'
  | 'pluginCreator.pluginOptions.stripMetadata'
  | 'pluginCreator.pluginOptions.defaultQuality'
  | 'pluginCreator.pluginOptions.failOnError'
  | 'pluginCreator.pluginOptions.root'
  | 'pluginCreator.pluginOptions.aliases._'
  | 'pluginCreator.pluginOptions.component'
  | 'pluginCreator.pluginOptions.outputPath'
  | 'pluginCreator.pluginOptions.emitSchema.src___generated___gatsby_schema_graphql'
  | 'pluginCreator.pluginOptions.emitSchema.src___generated___gatsby_introspection_json'
  | 'pluginCreator.pluginOptions.emitPluginDocuments.src___generated___gatsby_plugin_documents_graphql'
  | 'pluginCreator.pluginOptions.repositoryName'
  | 'pluginCreator.pluginOptions.apiEndpoint'
  | 'pluginCreator.pluginOptions.customTypesApiEndpoint'
  | 'pluginCreator.pluginOptions.lang'
  | 'pluginCreator.pluginOptions.imageImgixParams.auto'
  | 'pluginCreator.pluginOptions.imageImgixParams.fit'
  | 'pluginCreator.pluginOptions.imageImgixParams.q'
  | 'pluginCreator.pluginOptions.imagePlaceholderImgixParams.w'
  | 'pluginCreator.pluginOptions.imagePlaceholderImgixParams.blur'
  | 'pluginCreator.pluginOptions.toolbar'
  | 'pluginCreator.pluginOptions.promptForAccessToken'
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
  | 'context.id'
  | 'context.parent__ghId'
  | 'context._xparams.parent__ghId';

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
  readonly isCreatedByStatefulCreatePages: Maybe<BooleanQueryOperatorInput>;
  readonly pluginCreator: Maybe<SitePluginFilterInput>;
  readonly pluginCreatorId: Maybe<StringQueryOperatorInput>;
  readonly id: Maybe<StringQueryOperatorInput>;
  readonly parent: Maybe<NodeFilterInput>;
  readonly children: Maybe<NodeFilterListInput>;
  readonly internal: Maybe<InternalFilterInput>;
  readonly context: Maybe<SitePageContextFilterInput>;
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
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
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
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type PrismicTypePathTypeFilterInput = {
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
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
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

type PrismicStructuredTextTypeFilterInput = {
  readonly text: Maybe<StringQueryOperatorInput>;
  readonly html: Maybe<StringQueryOperatorInput>;
  readonly raw: Maybe<JSONQueryOperatorInput>;
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
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
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
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
};

type PrismicGlobalContentsFilterInput = {
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
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
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
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
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
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
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
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
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

type PrismicSiteNavigationDataTypeFilterInput = {
  readonly address: Maybe<StringQueryOperatorInput>;
  readonly footer_entries: Maybe<PrismicSiteNavigationDataFooterEntriesFilterListInput>;
  readonly header_entries: Maybe<PrismicSiteNavigationDataHeaderEntriesFilterListInput>;
  readonly sns_profiles: Maybe<PrismicSiteNavigationDataSnsProfilesFilterListInput>;
  readonly tel: Maybe<StringQueryOperatorInput>;
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
  | 'data.address'
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
  | 'data.tel'
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
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
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

type PrismicTeamContentsDataTypeFilterInput = {
  readonly culture_page_title: Maybe<PrismicStructuredTextTypeFilterInput>;
  readonly life_page_title: Maybe<PrismicStructuredTextTypeFilterInput>;
  readonly main_page_title: Maybe<PrismicStructuredTextTypeFilterInput>;
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
  | 'data.culture_page_title.text'
  | 'data.culture_page_title.html'
  | 'data.culture_page_title.raw'
  | 'data.life_page_title.text'
  | 'data.life_page_title.html'
  | 'data.life_page_title.raw'
  | 'data.main_page_title.text'
  | 'data.main_page_title.html'
  | 'data.main_page_title.raw'
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
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
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

type PrismicTermsAndConditionsDataTypeFilterInput = {
  readonly content: Maybe<PrismicStructuredTextTypeFilterInput>;
  readonly description: Maybe<StringQueryOperatorInput>;
  readonly revision_date: Maybe<DateQueryOperatorInput>;
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
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
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
  | 'ghId'
  | 'title'
  | 'boardUrl'
  | 'content'
  | 'content.title'
  | 'content.level'
  | 'content.rawContent'
  | 'rawContent'
  | 'corporate'
  | 'employmentType'
  | 'alternativeCivilianService'
  | 'priorExperience'
  | 'chapter'
  | 'portfolioRequired'
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
  readonly ghId: Maybe<StringQueryOperatorInput>;
  readonly title: Maybe<StringQueryOperatorInput>;
  readonly boardUrl: Maybe<StringQueryOperatorInput>;
  readonly content: Maybe<JobPostContentSectionFilterListInput>;
  readonly rawContent: Maybe<StringQueryOperatorInput>;
  readonly corporate: Maybe<JobCorporateQueryOperatorInput>;
  readonly employmentType: Maybe<JobEmploymentTypeQueryOperatorInput>;
  readonly alternativeCivilianService: Maybe<BooleanQueryOperatorInput>;
  readonly priorExperience: Maybe<JobPriorExperienceQueryOperatorInput>;
  readonly chapter: Maybe<StringQueryOperatorInput>;
  readonly portfolioRequired: Maybe<BooleanQueryOperatorInput>;
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
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly sum: Maybe<Scalars['Float']>;
  readonly group: ReadonlyArray<GreenhouseJobGroupConnection>;
};


type GreenhouseJobConnection_distinctArgs = {
  field: GreenhouseJobFieldsEnum;
};


type GreenhouseJobConnection_maxArgs = {
  field: GreenhouseJobFieldsEnum;
};


type GreenhouseJobConnection_minArgs = {
  field: GreenhouseJobFieldsEnum;
};


type GreenhouseJobConnection_sumArgs = {
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
  | 'childrenJobPost.ghId'
  | 'childrenJobPost.title'
  | 'childrenJobPost.boardUrl'
  | 'childrenJobPost.content'
  | 'childrenJobPost.content.title'
  | 'childrenJobPost.content.level'
  | 'childrenJobPost.content.rawContent'
  | 'childrenJobPost.rawContent'
  | 'childrenJobPost.corporate'
  | 'childrenJobPost.employmentType'
  | 'childrenJobPost.alternativeCivilianService'
  | 'childrenJobPost.priorExperience'
  | 'childrenJobPost.chapter'
  | 'childrenJobPost.portfolioRequired'
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
  | 'childJobPost.ghId'
  | 'childJobPost.title'
  | 'childJobPost.boardUrl'
  | 'childJobPost.content'
  | 'childJobPost.content.title'
  | 'childJobPost.content.level'
  | 'childJobPost.content.rawContent'
  | 'childJobPost.rawContent'
  | 'childJobPost.corporate'
  | 'childJobPost.employmentType'
  | 'childJobPost.alternativeCivilianService'
  | 'childJobPost.priorExperience'
  | 'childJobPost.chapter'
  | 'childJobPost.portfolioRequired'
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
  | 'pluginOptions.defaults.formats'
  | 'pluginOptions.defaults.placeholder'
  | 'pluginOptions.defaults.quality'
  | 'pluginOptions.defaults.breakpoints'
  | 'pluginOptions.defaults.backgroundColor'
  | 'pluginOptions.base64Width'
  | 'pluginOptions.stripMetadata'
  | 'pluginOptions.defaultQuality'
  | 'pluginOptions.failOnError'
  | 'pluginOptions.root'
  | 'pluginOptions.aliases._'
  | 'pluginOptions.component'
  | 'pluginOptions.outputPath'
  | 'pluginOptions.emitSchema.src___generated___gatsby_schema_graphql'
  | 'pluginOptions.emitSchema.src___generated___gatsby_introspection_json'
  | 'pluginOptions.emitPluginDocuments.src___generated___gatsby_plugin_documents_graphql'
  | 'pluginOptions.repositoryName'
  | 'pluginOptions.apiEndpoint'
  | 'pluginOptions.customTypesApiEndpoint'
  | 'pluginOptions.lang'
  | 'pluginOptions.imageImgixParams.auto'
  | 'pluginOptions.imageImgixParams.fit'
  | 'pluginOptions.imageImgixParams.q'
  | 'pluginOptions.imagePlaceholderImgixParams.w'
  | 'pluginOptions.imagePlaceholderImgixParams.blur'
  | 'pluginOptions.toolbar'
  | 'pluginOptions.promptForAccessToken'
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

type SiteMetadata = {
  readonly siteUrl: Scalars['String'];
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
  readonly defaults: Maybe<SitePluginPluginOptionsDefaults>;
  readonly base64Width: Maybe<Scalars['Int']>;
  readonly stripMetadata: Maybe<Scalars['Boolean']>;
  readonly defaultQuality: Maybe<Scalars['Int']>;
  readonly failOnError: Maybe<Scalars['Boolean']>;
  readonly root: Maybe<Scalars['String']>;
  readonly aliases: Maybe<SitePluginPluginOptionsAliases>;
  readonly component: Maybe<Scalars['String']>;
  readonly outputPath: Maybe<Scalars['String']>;
  readonly emitSchema: Maybe<SitePluginPluginOptionsEmitSchema>;
  readonly emitPluginDocuments: Maybe<SitePluginPluginOptionsEmitPluginDocuments>;
  readonly repositoryName: Maybe<Scalars['String']>;
  readonly schemas: Maybe<SitePluginPluginOptionsSchemas>;
  readonly apiEndpoint: Maybe<Scalars['String']>;
  readonly customTypesApiEndpoint: Maybe<Scalars['String']>;
  readonly lang: Maybe<Scalars['String']>;
  readonly imageImgixParams: Maybe<SitePluginPluginOptionsImageImgixParams>;
  readonly imagePlaceholderImgixParams: Maybe<SitePluginPluginOptionsImagePlaceholderImgixParams>;
  readonly toolbar: Maybe<Scalars['String']>;
  readonly promptForAccessToken: Maybe<Scalars['Boolean']>;
  readonly boardToken: Maybe<Scalars['String']>;
  readonly includeContent: Maybe<Scalars['Boolean']>;
  readonly path: Maybe<Scalars['String']>;
  readonly pathCheck: Maybe<Scalars['Boolean']>;
  readonly allExtensions: Maybe<Scalars['Boolean']>;
  readonly isTSX: Maybe<Scalars['Boolean']>;
  readonly jsxPragma: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsDefaults = {
  readonly formats: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly placeholder: Maybe<Scalars['String']>;
  readonly quality: Maybe<Scalars['Int']>;
  readonly breakpoints: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly backgroundColor: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsAliases = {
  readonly _: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsEmitSchema = {
  readonly src___generated___gatsby_schema_graphql: Maybe<Scalars['Boolean']>;
  readonly src___generated___gatsby_introspection_json: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsEmitPluginDocuments = {
  readonly src___generated___gatsby_plugin_documents_graphql: Maybe<Scalars['Boolean']>;
};

type SitePluginPluginOptionsSchemas = {
  readonly faq: Maybe<SitePluginPluginOptionsSchemasFaq>;
  readonly site_navigation: Maybe<SitePluginPluginOptionsSchemasSite_navigation>;
  readonly terms_and_conditions: Maybe<SitePluginPluginOptionsSchemasTerms_and_conditions>;
  readonly member_profile: Maybe<SitePluginPluginOptionsSchemasMember_profile>;
  readonly team_contents: Maybe<SitePluginPluginOptionsSchemasTeam_contents>;
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
  readonly Header: Maybe<SitePluginPluginOptionsSchemasSite_navigationHeader>;
  readonly Footer: Maybe<SitePluginPluginOptionsSchemasSite_navigationFooter>;
  readonly SNS_Profile: Maybe<SitePluginPluginOptionsSchemasSite_navigationSNS_Profile>;
};

type SitePluginPluginOptionsSchemasSite_navigationMain = {
  readonly uid: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainUid>;
  readonly address: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainAddress>;
  readonly tel: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainTel>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainUid = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainUidConfig>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainUidConfig = {
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainAddress = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainAddressConfig>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainAddressConfig = {
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainTel = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationMainTelConfig>;
};

type SitePluginPluginOptionsSchemasSite_navigationMainTelConfig = {
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasSite_navigationHeader = {
  readonly header_entries: Maybe<SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entries>;
};

type SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entries = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entriesConfig>;
};

type SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entriesConfig = {
  readonly fields: Maybe<SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entriesConfigFields>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entriesConfigFields = {
  readonly display_text: Maybe<SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entriesConfigFieldsDisplay_text>;
  readonly link: Maybe<SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entriesConfigFieldsLink>;
  readonly group: Maybe<SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entriesConfigFieldsGroup>;
};

type SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entriesConfigFieldsDisplay_text = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entriesConfigFieldsDisplay_textConfig>;
};

type SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entriesConfigFieldsDisplay_textConfig = {
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entriesConfigFieldsLink = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entriesConfigFieldsLinkConfig>;
};

type SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entriesConfigFieldsLinkConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entriesConfigFieldsGroup = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entriesConfigFieldsGroupConfig>;
};

type SitePluginPluginOptionsSchemasSite_navigationHeaderHeader_entriesConfigFieldsGroupConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasSite_navigationFooter = {
  readonly footer_entries: Maybe<SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entries>;
};

type SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entries = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entriesConfig>;
};

type SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entriesConfig = {
  readonly fields: Maybe<SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entriesConfigFields>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entriesConfigFields = {
  readonly display_text: Maybe<SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entriesConfigFieldsDisplay_text>;
  readonly link: Maybe<SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entriesConfigFieldsLink>;
  readonly group: Maybe<SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entriesConfigFieldsGroup>;
};

type SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entriesConfigFieldsDisplay_text = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entriesConfigFieldsDisplay_textConfig>;
};

type SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entriesConfigFieldsDisplay_textConfig = {
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entriesConfigFieldsLink = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entriesConfigFieldsLinkConfig>;
};

type SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entriesConfigFieldsLinkConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entriesConfigFieldsGroup = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entriesConfigFieldsGroupConfig>;
};

type SitePluginPluginOptionsSchemasSite_navigationFooterFooter_entriesConfigFieldsGroupConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasSite_navigationSNS_Profile = {
  readonly sns_profiles: Maybe<SitePluginPluginOptionsSchemasSite_navigationSNS_ProfileSns_profiles>;
};

type SitePluginPluginOptionsSchemasSite_navigationSNS_ProfileSns_profiles = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationSNS_ProfileSns_profilesConfig>;
};

type SitePluginPluginOptionsSchemasSite_navigationSNS_ProfileSns_profilesConfig = {
  readonly fields: Maybe<SitePluginPluginOptionsSchemasSite_navigationSNS_ProfileSns_profilesConfigFields>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasSite_navigationSNS_ProfileSns_profilesConfigFields = {
  readonly service: Maybe<SitePluginPluginOptionsSchemasSite_navigationSNS_ProfileSns_profilesConfigFieldsService>;
  readonly link: Maybe<SitePluginPluginOptionsSchemasSite_navigationSNS_ProfileSns_profilesConfigFieldsLink>;
};

type SitePluginPluginOptionsSchemasSite_navigationSNS_ProfileSns_profilesConfigFieldsService = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationSNS_ProfileSns_profilesConfigFieldsServiceConfig>;
};

type SitePluginPluginOptionsSchemasSite_navigationSNS_ProfileSns_profilesConfigFieldsServiceConfig = {
  readonly options: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasSite_navigationSNS_ProfileSns_profilesConfigFieldsLink = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasSite_navigationSNS_ProfileSns_profilesConfigFieldsLinkConfig>;
};

type SitePluginPluginOptionsSchemasSite_navigationSNS_ProfileSns_profilesConfigFieldsLinkConfig = {
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

type SitePluginPluginOptionsSchemasMember_profile = {
  readonly Main: Maybe<SitePluginPluginOptionsSchemasMember_profileMain>;
};

type SitePluginPluginOptionsSchemasMember_profileMain = {
  readonly nickname: Maybe<SitePluginPluginOptionsSchemasMember_profileMainNickname>;
  readonly name: Maybe<SitePluginPluginOptionsSchemasMember_profileMainName>;
  readonly email: Maybe<SitePluginPluginOptionsSchemasMember_profileMainEmail>;
  readonly role: Maybe<SitePluginPluginOptionsSchemasMember_profileMainRole>;
  readonly image: Maybe<SitePluginPluginOptionsSchemasMember_profileMainImage>;
};

type SitePluginPluginOptionsSchemasMember_profileMainNickname = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMember_profileMainNicknameConfig>;
};

type SitePluginPluginOptionsSchemasMember_profileMainNicknameConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMember_profileMainName = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMember_profileMainNameConfig>;
};

type SitePluginPluginOptionsSchemasMember_profileMainNameConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMember_profileMainEmail = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMember_profileMainEmailConfig>;
};

type SitePluginPluginOptionsSchemasMember_profileMainEmailConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMember_profileMainRole = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMember_profileMainRoleConfig>;
};

type SitePluginPluginOptionsSchemasMember_profileMainRoleConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMember_profileMainImage = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasMember_profileMainImageConfig>;
};

type SitePluginPluginOptionsSchemasMember_profileMainImageConfig = {
  readonly constraint: Maybe<SitePluginPluginOptionsSchemasMember_profileMainImageConfigConstraint>;
  readonly thumbnails: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsSchemasMember_profileMainImageConfigThumbnails>>>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasMember_profileMainImageConfigConstraint = {
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsSchemasMember_profileMainImageConfigThumbnails = {
  readonly name: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsSchemasTeam_contents = {
  readonly Main: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMain>;
  readonly Culture: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCulture>;
  readonly Life: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLife>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMain = {
  readonly main_page_title: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_page_title>;
  readonly main_body: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_body>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_page_title = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_page_titleConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_page_titleConfig = {
  readonly single: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_body = {
  readonly type: Maybe<Scalars['String']>;
  readonly fieldset: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfig = {
  readonly labels: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigLabels>;
  readonly choices: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoices>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigLabels = {
  readonly title_and_description: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigLabelsTitle_and_description>>>;
  readonly title_and_illustration: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigLabelsTitle_and_illustration>>>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigLabelsTitle_and_description = {
  readonly name: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigLabelsTitle_and_illustration = {
  readonly name: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoices = {
  readonly key_visual: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visual>;
  readonly member_quote_carousel: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carousel>;
  readonly wide_banner: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_banner>;
  readonly title_and_description: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_description>;
  readonly title_and_illustration: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustration>;
  readonly divider: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesDivider>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visual = {
  readonly type: Maybe<Scalars['String']>;
  readonly fieldset: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visualNon_repeat>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visualNon_repeat = {
  readonly key_visual_image: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visualNon_repeatKey_visual_image>;
  readonly expanded: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visualNon_repeatExpanded>;
  readonly description: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visualNon_repeatDescription>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visualNon_repeatKey_visual_image = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visualNon_repeatKey_visual_imageConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visualNon_repeatKey_visual_imageConfig = {
  readonly constraint: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visualNon_repeatKey_visual_imageConfigConstraint>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visualNon_repeatKey_visual_imageConfigConstraint = {
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visualNon_repeatExpanded = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visualNon_repeatExpandedConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visualNon_repeatExpandedConfig = {
  readonly placeholder_false: Maybe<Scalars['String']>;
  readonly placeholder_true: Maybe<Scalars['String']>;
  readonly default_value: Maybe<Scalars['Boolean']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visualNon_repeatDescription = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visualNon_repeatDescriptionConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesKey_visualNon_repeatDescriptionConfig = {
  readonly single: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carousel = {
  readonly type: Maybe<Scalars['String']>;
  readonly fieldset: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
  readonly repeat: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carouselRepeat>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carouselRepeat = {
  readonly image: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carouselRepeatImage>;
  readonly quote: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carouselRepeatQuote>;
  readonly who: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carouselRepeatWho>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carouselRepeatImage = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carouselRepeatImageConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carouselRepeatImageConfig = {
  readonly constraint: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carouselRepeatImageConfigConstraint>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carouselRepeatImageConfigConstraint = {
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carouselRepeatQuote = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carouselRepeatQuoteConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carouselRepeatQuoteConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carouselRepeatWho = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carouselRepeatWhoConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesMember_quote_carouselRepeatWhoConfig = {
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_banner = {
  readonly type: Maybe<Scalars['String']>;
  readonly fieldset: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeat>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeat = {
  readonly thumbnail: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatThumbnail>;
  readonly title: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatTitle>;
  readonly link: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatLink>;
  readonly link_text: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatLink_text>;
  readonly background_color: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatBackground_color>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatThumbnail = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatThumbnailConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatThumbnailConfig = {
  readonly constraint: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatThumbnailConfigConstraint>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatThumbnailConfigConstraint = {
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatTitle = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatTitleConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatTitleConfig = {
  readonly single: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatLink = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatLinkConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatLinkConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatLink_text = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatLink_textConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatLink_textConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatBackground_color = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatBackground_colorConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesWide_bannerNon_repeatBackground_colorConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_description = {
  readonly type: Maybe<Scalars['String']>;
  readonly fieldset: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeat>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeat = {
  readonly key_text: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatKey_text>;
  readonly title: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatTitle>;
  readonly inverted: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatInverted>;
  readonly link: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatLink>;
  readonly link_text: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatLink_text>;
  readonly description: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatDescription>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatKey_text = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatKey_textConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatKey_textConfig = {
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatTitle = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatTitleConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatTitleConfig = {
  readonly single: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatInverted = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatInvertedConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatInvertedConfig = {
  readonly placeholder_false: Maybe<Scalars['String']>;
  readonly placeholder_true: Maybe<Scalars['String']>;
  readonly default_value: Maybe<Scalars['Boolean']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatLink = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatLinkConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatLinkConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatLink_text = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatLink_textConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatLink_textConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatDescription = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatDescriptionConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_descriptionNon_repeatDescriptionConfig = {
  readonly multi: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustration = {
  readonly type: Maybe<Scalars['String']>;
  readonly fieldset: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeat>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeat = {
  readonly key_text: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatKey_text>;
  readonly title: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatTitle>;
  readonly inverted: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatInverted>;
  readonly link: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatLink>;
  readonly link_text: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatLink_text>;
  readonly illustration: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatIllustration>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatKey_text = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatKey_textConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatKey_textConfig = {
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatTitle = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatTitleConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatTitleConfig = {
  readonly single: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatInverted = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatInvertedConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatInvertedConfig = {
  readonly placeholder_false: Maybe<Scalars['String']>;
  readonly placeholder_true: Maybe<Scalars['String']>;
  readonly default_value: Maybe<Scalars['Boolean']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatLink = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatLinkConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatLinkConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatLink_text = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatLink_textConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatLink_textConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatIllustration = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatIllustrationConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatIllustrationConfig = {
  readonly constraint: Maybe<SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatIllustrationConfigConstraint>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesTitle_and_illustrationNon_repeatIllustrationConfigConstraint = {
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsMainMain_bodyConfigChoicesDivider = {
  readonly type: Maybe<Scalars['String']>;
  readonly fieldset: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCulture = {
  readonly culture_page_title: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_page_title>;
  readonly culture_body: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_body>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_page_title = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_page_titleConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_page_titleConfig = {
  readonly single: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_body = {
  readonly type: Maybe<Scalars['String']>;
  readonly fieldset: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfig = {
  readonly labels: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigLabels>;
  readonly choices: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoices>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigLabels = {
  readonly divider: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigLabelsDivider>>>;
  readonly illustration_and_description: Maybe<ReadonlyArray<Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigLabelsIllustration_and_description>>>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigLabelsDivider = {
  readonly name: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigLabelsIllustration_and_description = {
  readonly name: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoices = {
  readonly key_visual: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visual>;
  readonly divider: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesDivider>;
  readonly title_and_description: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_description>;
  readonly title_and_illustration: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustration>;
  readonly illustration_and_description: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_description>;
  readonly how_we_work: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_work>;
  readonly benefit: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefit>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visual = {
  readonly type: Maybe<Scalars['String']>;
  readonly fieldset: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visualNon_repeat>;
  readonly display: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visualNon_repeat = {
  readonly key_visual_image: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visualNon_repeatKey_visual_image>;
  readonly expanded: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visualNon_repeatExpanded>;
  readonly description: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visualNon_repeatDescription>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visualNon_repeatKey_visual_image = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visualNon_repeatKey_visual_imageConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visualNon_repeatKey_visual_imageConfig = {
  readonly constraint: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visualNon_repeatKey_visual_imageConfigConstraint>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visualNon_repeatKey_visual_imageConfigConstraint = {
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visualNon_repeatExpanded = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visualNon_repeatExpandedConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visualNon_repeatExpandedConfig = {
  readonly placeholder_false: Maybe<Scalars['String']>;
  readonly placeholder_true: Maybe<Scalars['String']>;
  readonly default_value: Maybe<Scalars['Boolean']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visualNon_repeatDescription = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visualNon_repeatDescriptionConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesKey_visualNon_repeatDescriptionConfig = {
  readonly single: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesDivider = {
  readonly type: Maybe<Scalars['String']>;
  readonly fieldset: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_description = {
  readonly type: Maybe<Scalars['String']>;
  readonly fieldset: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeat>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeat = {
  readonly key_text: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatKey_text>;
  readonly title: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatTitle>;
  readonly inverted: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatInverted>;
  readonly link: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatLink>;
  readonly link_text: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatLink_text>;
  readonly description: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatDescription>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatKey_text = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatKey_textConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatKey_textConfig = {
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatTitle = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatTitleConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatTitleConfig = {
  readonly single: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatInverted = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatInvertedConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatInvertedConfig = {
  readonly placeholder_false: Maybe<Scalars['String']>;
  readonly placeholder_true: Maybe<Scalars['String']>;
  readonly default_value: Maybe<Scalars['Boolean']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatLink = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatLinkConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatLinkConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatLink_text = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatLink_textConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatLink_textConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatDescription = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatDescriptionConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_descriptionNon_repeatDescriptionConfig = {
  readonly multi: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustration = {
  readonly type: Maybe<Scalars['String']>;
  readonly fieldset: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeat>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeat = {
  readonly key_text: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatKey_text>;
  readonly title: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatTitle>;
  readonly inverted: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatInverted>;
  readonly link: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatLink>;
  readonly link_text: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatLink_text>;
  readonly illustration: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatIllustration>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatKey_text = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatKey_textConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatKey_textConfig = {
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatTitle = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatTitleConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatTitleConfig = {
  readonly single: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatInverted = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatInvertedConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatInvertedConfig = {
  readonly placeholder_false: Maybe<Scalars['String']>;
  readonly placeholder_true: Maybe<Scalars['String']>;
  readonly default_value: Maybe<Scalars['Boolean']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatLink = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatLinkConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatLinkConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatLink_text = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatLink_textConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatLink_textConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatIllustration = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatIllustrationConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatIllustrationConfig = {
  readonly constraint: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatIllustrationConfigConstraint>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesTitle_and_illustrationNon_repeatIllustrationConfigConstraint = {
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_description = {
  readonly type: Maybe<Scalars['String']>;
  readonly fieldset: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeat>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeat = {
  readonly illustration: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatIllustration>;
  readonly expanded: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatExpanded>;
  readonly inverted: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatInverted>;
  readonly description: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatDescription>;
  readonly link: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatLink>;
  readonly link_text: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatLink_text>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatIllustration = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatIllustrationConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatIllustrationConfig = {
  readonly constraint: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatIllustrationConfigConstraint>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatIllustrationConfigConstraint = {
  readonly width: Maybe<Scalars['Int']>;
  readonly height: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatExpanded = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatExpandedConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatExpandedConfig = {
  readonly placeholder_false: Maybe<Scalars['String']>;
  readonly placeholder_true: Maybe<Scalars['String']>;
  readonly default_value: Maybe<Scalars['Boolean']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatInverted = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatInvertedConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatInvertedConfig = {
  readonly placeholder_false: Maybe<Scalars['String']>;
  readonly placeholder_true: Maybe<Scalars['String']>;
  readonly default_value: Maybe<Scalars['Boolean']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatDescription = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatDescriptionConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatDescriptionConfig = {
  readonly multi: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatLink = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatLinkConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatLinkConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatLink_text = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatLink_textConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesIllustration_and_descriptionNon_repeatLink_textConfig = {
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_work = {
  readonly type: Maybe<Scalars['String']>;
  readonly fieldset: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workNon_repeat>;
  readonly repeat: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workRepeat>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workNon_repeat = {
  readonly title: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workNon_repeatTitle>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workNon_repeatTitle = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workNon_repeatTitleConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workNon_repeatTitleConfig = {
  readonly single: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
  readonly placeholder: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workRepeat = {
  readonly group: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workRepeatGroup>;
  readonly key_text: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workRepeatKey_text>;
  readonly description: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workRepeatDescription>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workRepeatGroup = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workRepeatGroupConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workRepeatGroupConfig = {
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workRepeatKey_text = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workRepeatKey_textConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workRepeatKey_textConfig = {
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workRepeatDescription = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workRepeatDescriptionConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesHow_we_workRepeatDescriptionConfig = {
  readonly single: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefit = {
  readonly type: Maybe<Scalars['String']>;
  readonly fieldset: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefitNon_repeat>;
  readonly repeat: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefitRepeat>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefitNon_repeat = {
  readonly title: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefitNon_repeatTitle>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefitNon_repeatTitle = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefitNon_repeatTitleConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefitNon_repeatTitleConfig = {
  readonly single: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefitRepeat = {
  readonly subtitle: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefitRepeatSubtitle>;
  readonly description: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefitRepeatDescription>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefitRepeatSubtitle = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefitRepeatSubtitleConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefitRepeatSubtitleConfig = {
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefitRepeatDescription = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefitRepeatDescriptionConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsCultureCulture_bodyConfigChoicesBenefitRepeatDescriptionConfig = {
  readonly single: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLife = {
  readonly life_page_title: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeLife_page_title>;
  readonly life_body: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeLife_body>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeLife_page_title = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeLife_page_titleConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeLife_page_titleConfig = {
  readonly single: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeLife_body = {
  readonly type: Maybe<Scalars['String']>;
  readonly fieldset: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfig = {
  readonly choices: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoices>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoices = {
  readonly life_content: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_content>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_content = {
  readonly type: Maybe<Scalars['String']>;
  readonly fieldset: Maybe<Scalars['String']>;
  readonly description: Maybe<Scalars['String']>;
  readonly icon: Maybe<Scalars['String']>;
  readonly display: Maybe<Scalars['String']>;
  readonly non_repeat: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentNon_repeat>;
  readonly repeat: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentRepeat>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentNon_repeat = {
  readonly title: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentNon_repeatTitle>;
  readonly body_text: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentNon_repeatBody_text>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentNon_repeatTitle = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentNon_repeatTitleConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentNon_repeatTitleConfig = {
  readonly single: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentNon_repeatBody_text = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentNon_repeatBody_textConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentNon_repeatBody_textConfig = {
  readonly multi: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentRepeat = {
  readonly thumbnail_image: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentRepeatThumbnail_image>;
  readonly thumbnail_description: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentRepeatThumbnail_description>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentRepeatThumbnail_image = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentRepeatThumbnail_imageConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentRepeatThumbnail_imageConfig = {
  readonly constraint: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentRepeatThumbnail_imageConfigConstraint>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentRepeatThumbnail_imageConfigConstraint = {
  readonly width: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentRepeatThumbnail_description = {
  readonly type: Maybe<Scalars['String']>;
  readonly config: Maybe<SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentRepeatThumbnail_descriptionConfig>;
};

type SitePluginPluginOptionsSchemasTeam_contentsLifeLife_bodyConfigChoicesLife_contentRepeatThumbnail_descriptionConfig = {
  readonly single: Maybe<Scalars['String']>;
  readonly label: Maybe<Scalars['String']>;
};

type SitePluginPluginOptionsImageImgixParams = {
  readonly auto: Maybe<Scalars['String']>;
  readonly fit: Maybe<Scalars['String']>;
  readonly q: Maybe<Scalars['Int']>;
};

type SitePluginPluginOptionsImagePlaceholderImgixParams = {
  readonly w: Maybe<Scalars['Int']>;
  readonly blur: Maybe<Scalars['Int']>;
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

type PagesQueryQueryVariables = Exact<{ [key: string]: never; }>;


type PagesQueryQuery = { readonly allSiteFunction: { readonly nodes: ReadonlyArray<Pick<SiteFunction, 'functionRoute'>> }, readonly allSitePage: { readonly nodes: ReadonlyArray<Pick<SitePage, 'path'>> } };

type DefaultLayout_queryFragment = { readonly prismicSiteNavigation: Maybe<(
    Pick<PrismicSiteNavigation, '_previewable'>
    & { readonly data: (
      Header_navigationDataFragment
      & Footer_navigationDataFragment
    ) }
  )> };

type Header_navigationDataFragment = NavigationMenu_dataFragment;

type NavigationMenu_dataFragment = { readonly header_entries: ReadonlyArray<(
    Pick<PrismicSiteNavigationDataHeaderEntries, 'display_text'>
    & { readonly link: Maybe<Pick<PrismicLinkType, 'url'>> }
  )> };

type Footer_navigationDataFragment = { readonly footer_entries: ReadonlyArray<(
    Pick<PrismicSiteNavigationDataFooterEntries, 'display_text'>
    & { readonly link: Maybe<Pick<PrismicLinkType, 'url'>> }
  )>, readonly sns_profiles: ReadonlyArray<SocialServiceProfile_profileFragment> };

type SocialServiceProfile_profileFragment = (
  Pick<PrismicSiteNavigationDataSnsProfiles, 'service'>
  & { readonly link: Maybe<Pick<PrismicLinkType, 'url'>> }
);

type NotFoundPageQueryVariables = Exact<{ [key: string]: never; }>;


type NotFoundPageQuery = DefaultLayout_queryFragment;

type PrismicTeamContentsDataCultureBodyKeyVisual_dataFragment = { readonly primary: Maybe<(
    Pick<PrismicTeamContentsDataCultureBodyKeyVisualPrimary, 'expanded'>
    & { readonly key_visual_image: Maybe<(
      Pick<PrismicTeamContentsDataCultureBodyKeyVisualPrimaryKeyVisualImageImageType, 'alt'>
      & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> }
    )>, readonly description: Maybe<Pick<PrismicStructuredTextType, 'text'>> }
  )> };

type PrismicTeamContentsDataCultureBodyHowWeWork_dataFragment = { readonly primary: Maybe<{ readonly title: Maybe<Pick<PrismicStructuredTextType, 'text'>> }>, readonly items: Maybe<ReadonlyArray<(
    Pick<PrismicTeamContentsDataCultureBodyHowWeWorkItem, 'group' | 'key_text'>
    & { readonly description: Maybe<Pick<PrismicStructuredTextType, 'text'>> }
  )>> };

type PrismicTeamContentsDataCultureBodyBenefit_dataFragment = { readonly primary: Maybe<{ readonly title: Maybe<Pick<PrismicStructuredTextType, 'text'>> }>, readonly items: Maybe<ReadonlyArray<(
    Pick<PrismicTeamContentsDataCultureBodyBenefitItem, 'subtitle'>
    & { readonly description: Maybe<Pick<PrismicStructuredTextType, 'html'>> }
  )>> };

type PrismicTeamContentsDataCultureBodyIllustrationAndDescription_dataFragment = { readonly primary: Maybe<(
    Pick<PrismicTeamContentsDataCultureBodyIllustrationAndDescriptionPrimary, 'expanded' | 'inverted' | 'link_text'>
    & { readonly illustration: Maybe<(
      Pick<PrismicTeamContentsDataCultureBodyIllustrationAndDescriptionPrimaryIllustrationImageType, 'alt'>
      & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> }
    )>, readonly description: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly link: Maybe<Pick<PrismicLinkType, 'url'>> }
  )> };

type CulturePageQueryVariables = Exact<{ [key: string]: never; }>;


type CulturePageQuery = (
  { readonly prismicTeamContents: Maybe<(
    Pick<PrismicTeamContents, '_previewable'>
    & { readonly data: { readonly culture_page_title: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly culture_body: ReadonlyArray<(
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
      ) | { readonly __typename: 'PrismicTeamContentsDataCultureBodyTitleAndDescription' } | { readonly __typename: 'PrismicTeamContentsDataCultureBodyTitleAndIllustration' }> } }
  )> }
  & DefaultLayout_queryFragment
);

type FaqAccordion_faqDataFragment = { readonly entries: ReadonlyArray<FaqAccordionItem_entryFragment> };

type FaqAccordionItem_entryFragment = (
  Pick<PrismicFaqDataEntries, 'question'>
  & { readonly answer: Maybe<Pick<PrismicStructuredTextType, 'html'>> }
);

type FaqPageQueryVariables = Exact<{ [key: string]: never; }>;


type FaqPageQuery = (
  { readonly prismicFaq: Maybe<(
    Pick<PrismicFaq, '_previewable'>
    & { readonly data: FaqAccordion_faqDataFragment }
  )> }
  & DefaultLayout_queryFragment
);

type PrismicTeamContentsDataMainBodyKeyVisual_dataFragment = { readonly primary: Maybe<(
    Pick<PrismicTeamContentsDataMainBodyKeyVisualPrimary, 'expanded'>
    & { readonly key_visual_image: Maybe<(
      Pick<PrismicTeamContentsDataMainBodyKeyVisualPrimaryKeyVisualImageImageType, 'alt'>
      & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> }
    )>, readonly description: Maybe<Pick<PrismicStructuredTextType, 'text'>> }
  )> };

type PrismicTeamContentsDataMainBodyMemberQuoteCarousel_dataFragment = { readonly items: Maybe<ReadonlyArray<CarouselItem_itemFragment>> };

type CarouselItem_itemFragment = (
  Pick<PrismicTeamContentsDataMainBodyMemberQuoteCarouselItem, 'quote' | 'who'>
  & { readonly image: Maybe<(
    Pick<PrismicTeamContentsDataMainBodyMemberQuoteCarouselItemsImageImageType, 'alt'>
    & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> }
  )> }
);

type PrismicTeamContentsDataMainBodyTitleAndDescription_dataFragment = { readonly primary: Maybe<(
    Pick<PrismicTeamContentsDataMainBodyTitleAndDescriptionPrimary, 'key_text' | 'inverted'>
    & { readonly title: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly description: Maybe<Pick<PrismicStructuredTextType, 'html'>>, readonly link: Maybe<Pick<PrismicLinkType, 'url'>> }
  )> };

type PrismicTeamContentsDataMainBodyTitleAndIllustration_dataFragment = { readonly primary: Maybe<(
    Pick<PrismicTeamContentsDataMainBodyTitleAndIllustrationPrimary, 'key_text' | 'inverted'>
    & { readonly title: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly illustration: Maybe<(
      Pick<PrismicTeamContentsDataMainBodyTitleAndIllustrationPrimaryIllustrationImageType, 'alt'>
      & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> }
    )>, readonly link: Maybe<Pick<PrismicLinkType, 'url'>> }
  )> };

type PrismicTeamContentsDataMainBodyWideBanner_dataFragment = { readonly primary: Maybe<(
    Pick<PrismicTeamContentsDataMainBodyWideBannerPrimary, 'background_color' | 'link_text'>
    & { readonly title: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly thumbnail: Maybe<(
      Pick<PrismicTeamContentsDataMainBodyWideBannerPrimaryThumbnailImageType, 'alt'>
      & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> }
    )>, readonly link: Maybe<Pick<PrismicLinkType, 'url'>> }
  )> };

type IndexPageQueryVariables = Exact<{ [key: string]: never; }>;


type IndexPageQuery = (
  { readonly prismicTeamContents: Maybe<(
    Pick<PrismicTeamContents, '_previewable'>
    & { readonly data: { readonly main_page_title: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly main_body: ReadonlyArray<{ readonly __typename: 'PrismicTeamContentsDataMainBodyDivider' } | (
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
      )> } }
  )> }
  & DefaultLayout_queryFragment
);

type JobPostList_jobPostsFragment = { readonly nodes: ReadonlyArray<(
    Pick<JobPost, 'id'>
    & { pagePath: JobPost['gatsbyPath'] }
    & JobPostSummary_jobPostFragment
  )> };

type JobPostSummary_jobPostFragment = Pick<JobPost, 'id' | 'title' | 'chapter' | 'corporate' | 'employmentType' | 'priorExperience'>;

type JobsPageQueryVariables = Exact<{ [key: string]: never; }>;


type JobsPageQuery = (
  { readonly allJobPost: JobPostList_jobPostsFragment }
  & DefaultLayout_queryFragment
);

type PrismicTeamContentsDataLifeBodyLifeContent_dataFragment = { readonly primary: Maybe<{ readonly title: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly body_text: Maybe<Pick<PrismicStructuredTextType, 'html'>> }>, readonly items: Maybe<ReadonlyArray<{ readonly thumbnail_description: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly thumbnail_image: Maybe<(
      Pick<PrismicTeamContentsDataLifeBodyLifeContentItemsThumbnailImageImageType, 'alt'>
      & { readonly localFile: Maybe<{ readonly childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }> }
    )> }>> };

type LifePageQueryVariables = Exact<{ [key: string]: never; }>;


type LifePageQuery = (
  { readonly prismicTeamContents: Maybe<(
    Pick<PrismicTeamContents, '_previewable'>
    & { readonly data: { readonly life_page_title: Maybe<Pick<PrismicStructuredTextType, 'text'>>, readonly life_body: ReadonlyArray<(
        { readonly __typename: 'PrismicTeamContentsDataLifeBodyLifeContent' }
        & PrismicTeamContentsDataLifeBodyLifeContent_dataFragment
      )> } }
  )> }
  & DefaultLayout_queryFragment
);

type PreviewResolverPageQueryVariables = Exact<{ [key: string]: never; }>;


type PreviewResolverPageQuery = DefaultLayout_queryFragment;

type JobPostLayout_queryFragment = { readonly jobPost: Maybe<(
    Pick<JobPost, 'id' | 'title' | 'chapter' | 'corporate' | 'employmentType' | 'priorExperience'>
    & { viewPath: JobPost['gatsbyPath'], applyPath: JobPost['gatsbyPath'] }
  )> };

type JobPostContentUnorderedListSection_contentFragment = Pick<JobPostContentUnorderedListSection, 'title' | 'items'>;

type JobPostContentOrderedListSection_contentFragment = Pick<JobPostContentOrderedListSection, 'title' | 'items'>;

type JobPostContentParagraphSection_contentFragment = Pick<JobPostContentParagraphSection, 'title' | 'paragraph'>;

type JobPostPageQueryVariables = Exact<{
  id: Scalars['String'];
}>;


type JobPostPageQuery = (
  { readonly jobPost: Maybe<(
    { applyPath: JobPost['gatsbyPath'] }
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
  )> }
  & DefaultLayout_queryFragment
  & JobPostLayout_queryFragment
);

type JobApplicationPageQueryVariables = Exact<{
  id: Scalars['String'];
}>;


type JobApplicationPageQuery = (
  { readonly jobPost: Maybe<Pick<JobPost, 'ghId' | 'title' | 'portfolioRequired'>>, readonly privacyPolicy: Maybe<(
    Pick<PrismicTermsAndConditions, 'id'>
    & { readonly data: Maybe<{ readonly content: Maybe<Pick<PrismicStructuredTextType, 'html'>> }> }
  )>, readonly sensitiveInfoPolicy: Maybe<(
    Pick<PrismicTermsAndConditions, 'id'>
    & { readonly data: Maybe<{ readonly content: Maybe<Pick<PrismicStructuredTextType, 'html'>> }> }
  )> }
  & DefaultLayout_queryFragment
  & JobPostLayout_queryFragment
);

type UseSiteMetadataStaticQueryVariables = Exact<{ [key: string]: never; }>;


type UseSiteMetadataStaticQuery = { readonly site: Maybe<{ readonly siteMetadata: Pick<SiteMetadata, 'siteUrl'> }> };

type GatsbyImgixFluidFragment = Pick<ImgixFluid, 'aspectRatio' | 'src' | 'srcWebp' | 'srcSet' | 'srcSetWebp' | 'sizes' | 'base64'>;

type GatsbyImgixFluid_noBase64Fragment = Pick<ImgixFluid, 'aspectRatio' | 'src' | 'srcWebp' | 'srcSet' | 'srcSetWebp' | 'sizes'>;

type GatsbyImgixFixedFragment = Pick<ImgixFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

type GatsbyImgixFixed_noBase64Fragment = Pick<ImgixFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

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

type GatsbyPrismicImageFixedFragment = GatsbyImgixFixedFragment;

type GatsbyPrismicImageFixed_noBase64Fragment = GatsbyImgixFixed_noBase64Fragment;

type GatsbyPrismicImageFixed_withWebpFragment = GatsbyImgixFixedFragment;

type GatsbyPrismicImageFixed_withWebp_noBase64Fragment = GatsbyImgixFixed_noBase64Fragment;

type GatsbyPrismicImageFluidFragment = GatsbyImgixFluidFragment;

type GatsbyPrismicImageFluid_noBase64Fragment = GatsbyImgixFluid_noBase64Fragment;

type GatsbyPrismicImageFluid_withWebpFragment = GatsbyImgixFluidFragment;

type GatsbyPrismicImageFluid_withWebp_noBase64Fragment = GatsbyImgixFluid_noBase64Fragment;

}