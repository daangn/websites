/* eslint-disable */


declare namespace GatsbyTypes {

type Maybe<T> = T | undefined;
type InputMaybe<T> = T | undefined;
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
  JSON: any;
  /** Text content with rich formatting capabilities using a Prismic format called Structured Text. */
  PrismicStructuredText: any;
};

type AVIFOptions = {
  readonly lossless: InputMaybe<Scalars['Boolean']>;
  readonly quality: InputMaybe<Scalars['Int']>;
  readonly speed: InputMaybe<Scalars['Int']>;
};

type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  readonly toFormat: InputMaybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  readonly width: InputMaybe<Scalars['Int']>;
};

type BooleanQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Boolean']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
  readonly ne: InputMaybe<Scalars['Boolean']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']>>>;
};

type DateQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Date']>;
  readonly gt: InputMaybe<Scalars['Date']>;
  readonly gte: InputMaybe<Scalars['Date']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
  readonly lt: InputMaybe<Scalars['Date']>;
  readonly lte: InputMaybe<Scalars['Date']>;
  readonly ne: InputMaybe<Scalars['Date']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Date']>>>;
};

type Directory = Node & {
  readonly absolutePath: Scalars['String'];
  readonly accessTime: Scalars['Date'];
  readonly atime: Scalars['Date'];
  readonly atimeMs: Scalars['Float'];
  readonly base: Scalars['String'];
  readonly birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly changeTime: Scalars['Date'];
  readonly children: ReadonlyArray<Node>;
  readonly ctime: Scalars['Date'];
  readonly ctimeMs: Scalars['Float'];
  readonly dev: Scalars['Int'];
  readonly dir: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly gid: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly ino: Scalars['Float'];
  readonly internal: Internal;
  readonly mode: Scalars['Int'];
  readonly modifiedTime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly mtimeMs: Scalars['Float'];
  readonly name: Scalars['String'];
  readonly nlink: Scalars['Int'];
  readonly parent: Maybe<Node>;
  readonly prettySize: Scalars['String'];
  readonly rdev: Scalars['Int'];
  readonly relativeDirectory: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly root: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly sourceInstanceName: Scalars['String'];
  readonly uid: Scalars['Int'];
};


type Directory_accessTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_atimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_birthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_changeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_ctimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_modifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type Directory_mtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type DirectoryConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type DirectoryConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryConnection_groupArgs = {
  field: DirectoryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type DirectoryEdge = {
  readonly next: Maybe<Directory>;
  readonly node: Directory;
  readonly previous: Maybe<Directory>;
};

type DirectoryFieldsEnum =
  | 'absolutePath'
  | 'accessTime'
  | 'atime'
  | 'atimeMs'
  | 'base'
  | 'birthTime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'changeTime'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'ctime'
  | 'ctimeMs'
  | 'dev'
  | 'dir'
  | 'ext'
  | 'extension'
  | 'gid'
  | 'id'
  | 'ino'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'mode'
  | 'modifiedTime'
  | 'mtime'
  | 'mtimeMs'
  | 'name'
  | 'nlink'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'prettySize'
  | 'rdev'
  | 'relativeDirectory'
  | 'relativePath'
  | 'root'
  | 'size'
  | 'sourceInstanceName'
  | 'uid';

type DirectoryFilterInput = {
  readonly absolutePath: InputMaybe<StringQueryOperatorInput>;
  readonly accessTime: InputMaybe<DateQueryOperatorInput>;
  readonly atime: InputMaybe<DateQueryOperatorInput>;
  readonly atimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly base: InputMaybe<StringQueryOperatorInput>;
  readonly birthTime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly changeTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly ctime: InputMaybe<DateQueryOperatorInput>;
  readonly ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly dev: InputMaybe<IntQueryOperatorInput>;
  readonly dir: InputMaybe<StringQueryOperatorInput>;
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly extension: InputMaybe<StringQueryOperatorInput>;
  readonly gid: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly ino: InputMaybe<FloatQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly mode: InputMaybe<IntQueryOperatorInput>;
  readonly modifiedTime: InputMaybe<DateQueryOperatorInput>;
  readonly mtime: InputMaybe<DateQueryOperatorInput>;
  readonly mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nlink: InputMaybe<IntQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prettySize: InputMaybe<StringQueryOperatorInput>;
  readonly rdev: InputMaybe<IntQueryOperatorInput>;
  readonly relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  readonly relativePath: InputMaybe<StringQueryOperatorInput>;
  readonly root: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<IntQueryOperatorInput>;
  readonly sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  readonly uid: InputMaybe<IntQueryOperatorInput>;
};

type DirectoryGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<DirectoryEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<DirectoryGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Directory>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type DirectoryGroupConnection_distinctArgs = {
  field: DirectoryFieldsEnum;
};


type DirectoryGroupConnection_groupArgs = {
  field: DirectoryFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type DirectorySortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<DirectoryFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type DuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly opacity: InputMaybe<Scalars['Int']>;
  readonly shadow: Scalars['String'];
};

type File = Node & {
  readonly absolutePath: Scalars['String'];
  readonly accessTime: Scalars['Date'];
  readonly atime: Scalars['Date'];
  readonly atimeMs: Scalars['Float'];
  readonly base: Scalars['String'];
  readonly birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs: Maybe<Scalars['Float']>;
  readonly blksize: Maybe<Scalars['Int']>;
  readonly blocks: Maybe<Scalars['Int']>;
  readonly changeTime: Scalars['Date'];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  readonly childImageSharp: Maybe<ImageSharp>;
  readonly children: ReadonlyArray<Node>;
  /** Returns all children nodes filtered by type ImageSharp */
  readonly childrenImageSharp: Maybe<ReadonlyArray<Maybe<ImageSharp>>>;
  readonly ctime: Scalars['Date'];
  readonly ctimeMs: Scalars['Float'];
  readonly dev: Scalars['Int'];
  readonly dir: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly gid: Scalars['Int'];
  readonly id: Scalars['ID'];
  readonly ino: Scalars['Float'];
  readonly internal: Internal;
  readonly mode: Scalars['Int'];
  readonly modifiedTime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly mtimeMs: Scalars['Float'];
  readonly name: Scalars['String'];
  readonly nlink: Scalars['Int'];
  readonly parent: Maybe<Node>;
  readonly prettySize: Scalars['String'];
  readonly rdev: Scalars['Int'];
  readonly relativeDirectory: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly root: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly sourceInstanceName: Scalars['String'];
  readonly uid: Scalars['Int'];
  readonly url: Maybe<Scalars['String']>;
};


type File_accessTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_atimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_birthTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_changeTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_ctimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_modifiedTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type File_mtimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type FileConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FileEdge>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type FileConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileConnection_groupArgs = {
  field: FileFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type FileEdge = {
  readonly next: Maybe<File>;
  readonly node: File;
  readonly previous: Maybe<File>;
};

type FileFieldsEnum =
  | 'absolutePath'
  | 'accessTime'
  | 'atime'
  | 'atimeMs'
  | 'base'
  | 'birthTime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'changeTime'
  | 'childImageSharp.children'
  | 'childImageSharp.children.children'
  | 'childImageSharp.children.children.children'
  | 'childImageSharp.children.children.id'
  | 'childImageSharp.children.id'
  | 'childImageSharp.children.internal.content'
  | 'childImageSharp.children.internal.contentDigest'
  | 'childImageSharp.children.internal.description'
  | 'childImageSharp.children.internal.fieldOwners'
  | 'childImageSharp.children.internal.ignoreType'
  | 'childImageSharp.children.internal.mediaType'
  | 'childImageSharp.children.internal.owner'
  | 'childImageSharp.children.internal.type'
  | 'childImageSharp.children.parent.children'
  | 'childImageSharp.children.parent.id'
  | 'childImageSharp.fixed.aspectRatio'
  | 'childImageSharp.fixed.base64'
  | 'childImageSharp.fixed.height'
  | 'childImageSharp.fixed.originalName'
  | 'childImageSharp.fixed.src'
  | 'childImageSharp.fixed.srcSet'
  | 'childImageSharp.fixed.srcSetWebp'
  | 'childImageSharp.fixed.srcWebp'
  | 'childImageSharp.fixed.tracedSVG'
  | 'childImageSharp.fixed.width'
  | 'childImageSharp.fluid.aspectRatio'
  | 'childImageSharp.fluid.base64'
  | 'childImageSharp.fluid.originalImg'
  | 'childImageSharp.fluid.originalName'
  | 'childImageSharp.fluid.presentationHeight'
  | 'childImageSharp.fluid.presentationWidth'
  | 'childImageSharp.fluid.sizes'
  | 'childImageSharp.fluid.src'
  | 'childImageSharp.fluid.srcSet'
  | 'childImageSharp.fluid.srcSetWebp'
  | 'childImageSharp.fluid.srcWebp'
  | 'childImageSharp.fluid.tracedSVG'
  | 'childImageSharp.gatsbyImageData'
  | 'childImageSharp.id'
  | 'childImageSharp.internal.content'
  | 'childImageSharp.internal.contentDigest'
  | 'childImageSharp.internal.description'
  | 'childImageSharp.internal.fieldOwners'
  | 'childImageSharp.internal.ignoreType'
  | 'childImageSharp.internal.mediaType'
  | 'childImageSharp.internal.owner'
  | 'childImageSharp.internal.type'
  | 'childImageSharp.original.height'
  | 'childImageSharp.original.src'
  | 'childImageSharp.original.width'
  | 'childImageSharp.parent.children'
  | 'childImageSharp.parent.children.children'
  | 'childImageSharp.parent.children.id'
  | 'childImageSharp.parent.id'
  | 'childImageSharp.parent.internal.content'
  | 'childImageSharp.parent.internal.contentDigest'
  | 'childImageSharp.parent.internal.description'
  | 'childImageSharp.parent.internal.fieldOwners'
  | 'childImageSharp.parent.internal.ignoreType'
  | 'childImageSharp.parent.internal.mediaType'
  | 'childImageSharp.parent.internal.owner'
  | 'childImageSharp.parent.internal.type'
  | 'childImageSharp.parent.parent.children'
  | 'childImageSharp.parent.parent.id'
  | 'childImageSharp.resize.aspectRatio'
  | 'childImageSharp.resize.height'
  | 'childImageSharp.resize.originalName'
  | 'childImageSharp.resize.src'
  | 'childImageSharp.resize.tracedSVG'
  | 'childImageSharp.resize.width'
  | 'children'
  | 'childrenImageSharp'
  | 'childrenImageSharp.children'
  | 'childrenImageSharp.children.children'
  | 'childrenImageSharp.children.children.children'
  | 'childrenImageSharp.children.children.id'
  | 'childrenImageSharp.children.id'
  | 'childrenImageSharp.children.internal.content'
  | 'childrenImageSharp.children.internal.contentDigest'
  | 'childrenImageSharp.children.internal.description'
  | 'childrenImageSharp.children.internal.fieldOwners'
  | 'childrenImageSharp.children.internal.ignoreType'
  | 'childrenImageSharp.children.internal.mediaType'
  | 'childrenImageSharp.children.internal.owner'
  | 'childrenImageSharp.children.internal.type'
  | 'childrenImageSharp.children.parent.children'
  | 'childrenImageSharp.children.parent.id'
  | 'childrenImageSharp.fixed.aspectRatio'
  | 'childrenImageSharp.fixed.base64'
  | 'childrenImageSharp.fixed.height'
  | 'childrenImageSharp.fixed.originalName'
  | 'childrenImageSharp.fixed.src'
  | 'childrenImageSharp.fixed.srcSet'
  | 'childrenImageSharp.fixed.srcSetWebp'
  | 'childrenImageSharp.fixed.srcWebp'
  | 'childrenImageSharp.fixed.tracedSVG'
  | 'childrenImageSharp.fixed.width'
  | 'childrenImageSharp.fluid.aspectRatio'
  | 'childrenImageSharp.fluid.base64'
  | 'childrenImageSharp.fluid.originalImg'
  | 'childrenImageSharp.fluid.originalName'
  | 'childrenImageSharp.fluid.presentationHeight'
  | 'childrenImageSharp.fluid.presentationWidth'
  | 'childrenImageSharp.fluid.sizes'
  | 'childrenImageSharp.fluid.src'
  | 'childrenImageSharp.fluid.srcSet'
  | 'childrenImageSharp.fluid.srcSetWebp'
  | 'childrenImageSharp.fluid.srcWebp'
  | 'childrenImageSharp.fluid.tracedSVG'
  | 'childrenImageSharp.gatsbyImageData'
  | 'childrenImageSharp.id'
  | 'childrenImageSharp.internal.content'
  | 'childrenImageSharp.internal.contentDigest'
  | 'childrenImageSharp.internal.description'
  | 'childrenImageSharp.internal.fieldOwners'
  | 'childrenImageSharp.internal.ignoreType'
  | 'childrenImageSharp.internal.mediaType'
  | 'childrenImageSharp.internal.owner'
  | 'childrenImageSharp.internal.type'
  | 'childrenImageSharp.original.height'
  | 'childrenImageSharp.original.src'
  | 'childrenImageSharp.original.width'
  | 'childrenImageSharp.parent.children'
  | 'childrenImageSharp.parent.children.children'
  | 'childrenImageSharp.parent.children.id'
  | 'childrenImageSharp.parent.id'
  | 'childrenImageSharp.parent.internal.content'
  | 'childrenImageSharp.parent.internal.contentDigest'
  | 'childrenImageSharp.parent.internal.description'
  | 'childrenImageSharp.parent.internal.fieldOwners'
  | 'childrenImageSharp.parent.internal.ignoreType'
  | 'childrenImageSharp.parent.internal.mediaType'
  | 'childrenImageSharp.parent.internal.owner'
  | 'childrenImageSharp.parent.internal.type'
  | 'childrenImageSharp.parent.parent.children'
  | 'childrenImageSharp.parent.parent.id'
  | 'childrenImageSharp.resize.aspectRatio'
  | 'childrenImageSharp.resize.height'
  | 'childrenImageSharp.resize.originalName'
  | 'childrenImageSharp.resize.src'
  | 'childrenImageSharp.resize.tracedSVG'
  | 'childrenImageSharp.resize.width'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'ctime'
  | 'ctimeMs'
  | 'dev'
  | 'dir'
  | 'ext'
  | 'extension'
  | 'gid'
  | 'id'
  | 'ino'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'mode'
  | 'modifiedTime'
  | 'mtime'
  | 'mtimeMs'
  | 'name'
  | 'nlink'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'prettySize'
  | 'rdev'
  | 'relativeDirectory'
  | 'relativePath'
  | 'root'
  | 'size'
  | 'sourceInstanceName'
  | 'uid'
  | 'url';

type FileFilterInput = {
  readonly absolutePath: InputMaybe<StringQueryOperatorInput>;
  readonly accessTime: InputMaybe<DateQueryOperatorInput>;
  readonly atime: InputMaybe<DateQueryOperatorInput>;
  readonly atimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly base: InputMaybe<StringQueryOperatorInput>;
  readonly birthTime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtime: InputMaybe<DateQueryOperatorInput>;
  readonly birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly blksize: InputMaybe<IntQueryOperatorInput>;
  readonly blocks: InputMaybe<IntQueryOperatorInput>;
  readonly changeTime: InputMaybe<DateQueryOperatorInput>;
  readonly childImageSharp: InputMaybe<ImageSharpFilterInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  readonly ctime: InputMaybe<DateQueryOperatorInput>;
  readonly ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly dev: InputMaybe<IntQueryOperatorInput>;
  readonly dir: InputMaybe<StringQueryOperatorInput>;
  readonly ext: InputMaybe<StringQueryOperatorInput>;
  readonly extension: InputMaybe<StringQueryOperatorInput>;
  readonly gid: InputMaybe<IntQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly ino: InputMaybe<FloatQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly mode: InputMaybe<IntQueryOperatorInput>;
  readonly modifiedTime: InputMaybe<DateQueryOperatorInput>;
  readonly mtime: InputMaybe<DateQueryOperatorInput>;
  readonly mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nlink: InputMaybe<IntQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prettySize: InputMaybe<StringQueryOperatorInput>;
  readonly rdev: InputMaybe<IntQueryOperatorInput>;
  readonly relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  readonly relativePath: InputMaybe<StringQueryOperatorInput>;
  readonly root: InputMaybe<StringQueryOperatorInput>;
  readonly size: InputMaybe<IntQueryOperatorInput>;
  readonly sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  readonly uid: InputMaybe<IntQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type FileGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<FileEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<FileGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<File>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type FileGroupConnection_distinctArgs = {
  field: FileFieldsEnum;
};


type FileGroupConnection_groupArgs = {
  field: FileFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type FileSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<FileFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type FloatQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Float']>;
  readonly gt: InputMaybe<Scalars['Float']>;
  readonly gte: InputMaybe<Scalars['Float']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  readonly lt: InputMaybe<Scalars['Float']>;
  readonly lte: InputMaybe<Scalars['Float']>;
  readonly ne: InputMaybe<Scalars['Float']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
};

type GatsbyImageFormat =
  | 'auto'
  | 'avif'
  | 'jpg'
  | 'NO_CHANGE'
  | 'png'
  | 'webp';

type GatsbyImageLayout =
  | 'constrained'
  | 'fixed'
  | 'fullWidth';

type GatsbyImagePlaceholder =
  | 'blurred'
  | 'dominantColor'
  | 'none'
  | 'tracedSVG';

type HotArticle = Node & {
  readonly articleId: Maybe<Scalars['String']>;
  readonly children: ReadonlyArray<Node>;
  readonly email: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly image: Maybe<Scalars['String']>;
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
  readonly price: Maybe<Scalars['String']>;
  readonly region: Maybe<Scalars['String']>;
};

type HotArticleConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<HotArticleEdge>;
  readonly group: ReadonlyArray<HotArticleGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<HotArticle>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type HotArticleConnection_distinctArgs = {
  field: HotArticleFieldsEnum;
};


type HotArticleConnection_groupArgs = {
  field: HotArticleFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type HotArticleConnection_maxArgs = {
  field: HotArticleFieldsEnum;
};


type HotArticleConnection_minArgs = {
  field: HotArticleFieldsEnum;
};


type HotArticleConnection_sumArgs = {
  field: HotArticleFieldsEnum;
};

type HotArticleEdge = {
  readonly next: Maybe<HotArticle>;
  readonly node: HotArticle;
  readonly previous: Maybe<HotArticle>;
};

type HotArticleFieldsEnum =
  | 'articleId'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'email'
  | 'id'
  | 'image'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'price'
  | 'region';

type HotArticleFilterInput = {
  readonly articleId: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly email: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly image: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly price: InputMaybe<StringQueryOperatorInput>;
  readonly region: InputMaybe<StringQueryOperatorInput>;
};

type HotArticleGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<HotArticleEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<HotArticleGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<HotArticle>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type HotArticleGroupConnection_distinctArgs = {
  field: HotArticleFieldsEnum;
};


type HotArticleGroupConnection_groupArgs = {
  field: HotArticleFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type HotArticleGroupConnection_maxArgs = {
  field: HotArticleFieldsEnum;
};


type HotArticleGroupConnection_minArgs = {
  field: HotArticleFieldsEnum;
};


type HotArticleGroupConnection_sumArgs = {
  field: HotArticleFieldsEnum;
};

type HotArticleSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<HotArticleFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type IDQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['ID']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
  readonly ne: InputMaybe<Scalars['ID']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']>>>;
};

type ImageCropFocus =
  | 17
  | 'CENTER'
  | 2
  | 16
  | 1
  | 5
  | 8
  | 3
  | 6
  | 7
  | 4;

type ImageFit =
  | 'contain'
  | 'cover'
  | 'fill'
  | 'inside'
  | 'outside';

type ImageFormat =
  | 'AUTO'
  | 'avif'
  | 'jpg'
  | 'NO_CHANGE'
  | 'png'
  | 'webp';

type ImageLayout =
  | 'constrained'
  | 'fixed'
  | 'fullWidth';

type ImagePlaceholder =
  | 'blurred'
  | 'dominantColor'
  | 'none'
  | 'tracedSVG';

type ImageSharp = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly fixed: Maybe<ImageSharpFixed>;
  readonly fluid: Maybe<ImageSharpFluid>;
  readonly gatsbyImageData: Scalars['JSON'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly original: Maybe<ImageSharpOriginal>;
  readonly parent: Maybe<Node>;
  readonly resize: Maybe<ImageSharpResize>;
};


type ImageSharp_fixedArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};


type ImageSharp_fluidArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
};


type ImageSharp_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  avifOptions: InputMaybe<AVIFOptions>;
  backgroundColor: InputMaybe<Scalars['String']>;
  blurredOptions: InputMaybe<BlurredOptions>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  formats: InputMaybe<ReadonlyArray<InputMaybe<ImageFormat>>>;
  height: InputMaybe<Scalars['Int']>;
  jpgOptions: InputMaybe<JPGOptions>;
  layout?: InputMaybe<ImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImagePlaceholder>;
  pngOptions: InputMaybe<PNGOptions>;
  quality: InputMaybe<Scalars['Int']>;
  sizes: InputMaybe<Scalars['String']>;
  tracedSVGOptions: InputMaybe<Potrace>;
  transformOptions: InputMaybe<TransformOptions>;
  webpOptions: InputMaybe<WebPOptions>;
  width: InputMaybe<Scalars['Int']>;
};


type ImageSharp_resizeArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64?: InputMaybe<Scalars['Boolean']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality: InputMaybe<Scalars['Int']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality: InputMaybe<Scalars['Int']>;
  quality: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
};

type ImageSharpConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ImageSharpConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpConnection_groupArgs = {
  field: ImageSharpFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type ImageSharpEdge = {
  readonly next: Maybe<ImageSharp>;
  readonly node: ImageSharp;
  readonly previous: Maybe<ImageSharp>;
};

type ImageSharpFieldsEnum =
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'fixed.aspectRatio'
  | 'fixed.base64'
  | 'fixed.height'
  | 'fixed.originalName'
  | 'fixed.src'
  | 'fixed.srcSet'
  | 'fixed.srcSetWebp'
  | 'fixed.srcWebp'
  | 'fixed.tracedSVG'
  | 'fixed.width'
  | 'fluid.aspectRatio'
  | 'fluid.base64'
  | 'fluid.originalImg'
  | 'fluid.originalName'
  | 'fluid.presentationHeight'
  | 'fluid.presentationWidth'
  | 'fluid.sizes'
  | 'fluid.src'
  | 'fluid.srcSet'
  | 'fluid.srcSetWebp'
  | 'fluid.srcWebp'
  | 'fluid.tracedSVG'
  | 'gatsbyImageData'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'original.height'
  | 'original.src'
  | 'original.width'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'resize.aspectRatio'
  | 'resize.height'
  | 'resize.originalName'
  | 'resize.src'
  | 'resize.tracedSVG'
  | 'resize.width';

type ImageSharpFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly fixed: InputMaybe<ImageSharpFixedFilterInput>;
  readonly fluid: InputMaybe<ImageSharpFluidFilterInput>;
  readonly gatsbyImageData: InputMaybe<JSONQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly original: InputMaybe<ImageSharpOriginalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly resize: InputMaybe<ImageSharpResizeFilterInput>;
};

type ImageSharpFilterListInput = {
  readonly elemMatch: InputMaybe<ImageSharpFilterInput>;
};

type ImageSharpFixed = {
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly base64: Maybe<Scalars['String']>;
  readonly height: Scalars['Float'];
  readonly originalName: Maybe<Scalars['String']>;
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Scalars['Float'];
};

type ImageSharpFixedFilterInput = {
  readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  readonly base64: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<FloatQueryOperatorInput>;
  readonly originalName: InputMaybe<StringQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly srcSet: InputMaybe<StringQueryOperatorInput>;
  readonly srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  readonly srcWebp: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<FloatQueryOperatorInput>;
};

type ImageSharpFluid = {
  readonly aspectRatio: Scalars['Float'];
  readonly base64: Maybe<Scalars['String']>;
  readonly originalImg: Maybe<Scalars['String']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly presentationHeight: Scalars['Int'];
  readonly presentationWidth: Scalars['Int'];
  readonly sizes: Scalars['String'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcSetWebp: Maybe<Scalars['String']>;
  readonly srcWebp: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
};

type ImageSharpFluidFilterInput = {
  readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  readonly base64: InputMaybe<StringQueryOperatorInput>;
  readonly originalImg: InputMaybe<StringQueryOperatorInput>;
  readonly originalName: InputMaybe<StringQueryOperatorInput>;
  readonly presentationHeight: InputMaybe<IntQueryOperatorInput>;
  readonly presentationWidth: InputMaybe<IntQueryOperatorInput>;
  readonly sizes: InputMaybe<StringQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly srcSet: InputMaybe<StringQueryOperatorInput>;
  readonly srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  readonly srcWebp: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG: InputMaybe<StringQueryOperatorInput>;
};

type ImageSharpGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<ImageSharpEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<ImageSharpGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<ImageSharp>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type ImageSharpGroupConnection_distinctArgs = {
  field: ImageSharpFieldsEnum;
};


type ImageSharpGroupConnection_groupArgs = {
  field: ImageSharpFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type ImageSharpOriginal = {
  readonly height: Maybe<Scalars['Float']>;
  readonly src: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Float']>;
};

type ImageSharpOriginalFilterInput = {
  readonly height: InputMaybe<FloatQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<FloatQueryOperatorInput>;
};

type ImageSharpResize = {
  readonly aspectRatio: Maybe<Scalars['Float']>;
  readonly height: Maybe<Scalars['Int']>;
  readonly originalName: Maybe<Scalars['String']>;
  readonly src: Maybe<Scalars['String']>;
  readonly tracedSVG: Maybe<Scalars['String']>;
  readonly width: Maybe<Scalars['Int']>;
};

type ImageSharpResizeFilterInput = {
  readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly originalName: InputMaybe<StringQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly tracedSVG: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type ImageSharpSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<ImageSharpFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type ImgixFixed = {
  readonly base64: Scalars['String'];
  readonly height: Scalars['Int'];
  readonly sizes: Scalars['String'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcSetWebp: Scalars['String'];
  readonly srcWebp: Scalars['String'];
  readonly width: Scalars['Int'];
};

type ImgixFixedFilterInput = {
  readonly base64: InputMaybe<StringQueryOperatorInput>;
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly sizes: InputMaybe<StringQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly srcSet: InputMaybe<StringQueryOperatorInput>;
  readonly srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  readonly srcWebp: InputMaybe<StringQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type ImgixFluid = {
  readonly aspectRatio: Scalars['Float'];
  readonly base64: Scalars['String'];
  readonly sizes: Scalars['String'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcSetWebp: Scalars['String'];
  readonly srcWebp: Scalars['String'];
};

type ImgixFluidFilterInput = {
  readonly aspectRatio: InputMaybe<FloatQueryOperatorInput>;
  readonly base64: InputMaybe<StringQueryOperatorInput>;
  readonly sizes: InputMaybe<StringQueryOperatorInput>;
  readonly src: InputMaybe<StringQueryOperatorInput>;
  readonly srcSet: InputMaybe<StringQueryOperatorInput>;
  readonly srcSetWebp: InputMaybe<StringQueryOperatorInput>;
  readonly srcWebp: InputMaybe<StringQueryOperatorInput>;
};

type ImgixParamsInput = {
  /** Alias for `pdfAnnotation`. */
  readonly annotation: InputMaybe<Scalars['Boolean']>;
  /** Specifies an aspect ratio to maintain when resizing and cropping the image. [See docs](https://docs.imgix.com/apis/url/size/ar). */
  readonly ar: InputMaybe<Scalars['String']>;
  /** Applies automatic enhancements to images. [See docs](https://docs.imgix.com/apis/url/auto). */
  readonly auto: InputMaybe<Scalars['String']>;
  /** Alias for `blend`. */
  readonly b: InputMaybe<Scalars['String']>;
  /** Alias for `blendAlign`. */
  readonly ba: InputMaybe<Scalars['String']>;
  /** Alias for `blendAlpha`. */
  readonly balph: InputMaybe<Scalars['Int']>;
  /** Alias for `blendCrop`. */
  readonly bc: InputMaybe<Scalars['String']>;
  /** Alias for `blendFit`. */
  readonly bf: InputMaybe<Scalars['String']>;
  /** Colors the background of padded and partially-transparent images. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/bg). */
  readonly bg: InputMaybe<Scalars['String']>;
  /** Alias for `blendH`. */
  readonly bh: InputMaybe<Scalars['Float']>;
  /** Specifies the location of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend). */
  readonly blend: InputMaybe<Scalars['String']>;
  /** Changes the blend alignment relative to the parent image. [See docs](https://docs.imgix.com/apis/url/blending/blend-align). */
  readonly blendAlign: InputMaybe<Scalars['String']>;
  /** Changes the alpha of the blend image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/blending/blend-alpha). */
  readonly blendAlpha: InputMaybe<Scalars['Int']>;
  /** Alias for `blendColor`. */
  readonly blendClr: InputMaybe<Scalars['String']>;
  /** Specifies a color to use when applying the blend. [See docs](https://docs.imgix.com/apis/url/blending/blend-color). */
  readonly blendColor: InputMaybe<Scalars['String']>;
  /** Specifies the type of crop for blend images. [See docs](https://docs.imgix.com/apis/url/blending/blend-crop). */
  readonly blendCrop: InputMaybe<Scalars['String']>;
  /** Specifies the fit mode for blend images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/blending/blend-fit). */
  readonly blendFit: InputMaybe<Scalars['String']>;
  /** Adjusts the height of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-h). */
  readonly blendH: InputMaybe<Scalars['Float']>;
  /** Sets the blend mode for a blend image. Default: `overlay`. [See docs](https://docs.imgix.com/apis/url/blending/blend-mode). */
  readonly blendMode: InputMaybe<Scalars['String']>;
  /** Applies padding to the blend image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-pad). */
  readonly blendPad: InputMaybe<Scalars['Int']>;
  /** Adjusts the size of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-size). */
  readonly blendSize: InputMaybe<Scalars['String']>;
  /** Adjusts the width of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-w). */
  readonly blendW: InputMaybe<Scalars['Float']>;
  /** Adjusts the x-offset of the blend image relative to its parent. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-x). */
  readonly blendX: InputMaybe<Scalars['Int']>;
  /** Adjusts the y-offset of the blend image relative to its parent. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-y). */
  readonly blendY: InputMaybe<Scalars['Int']>;
  /** Alias for `blendAlign`. */
  readonly blendalign: InputMaybe<Scalars['String']>;
  /** Alias for `blendAlpha`. */
  readonly blendalpha: InputMaybe<Scalars['Int']>;
  /** Alias for `blendColor`. */
  readonly blendclr: InputMaybe<Scalars['String']>;
  /** Alias for `blendColor`. */
  readonly blendcolor: InputMaybe<Scalars['String']>;
  /** Alias for `blendCrop`. */
  readonly blendcrop: InputMaybe<Scalars['String']>;
  /** Alias for `blendFit`. */
  readonly blendfit: InputMaybe<Scalars['String']>;
  /** Alias for `blendH`. */
  readonly blendh: InputMaybe<Scalars['Float']>;
  /** Alias for `blendMode`. */
  readonly blendmode: InputMaybe<Scalars['String']>;
  /** Alias for `blendPad`. */
  readonly blendpad: InputMaybe<Scalars['Int']>;
  /** Alias for `blendSize`. */
  readonly blendsize: InputMaybe<Scalars['String']>;
  /** Alias for `blendW`. */
  readonly blendw: InputMaybe<Scalars['Float']>;
  /** Alias for `blendX`. */
  readonly blendx: InputMaybe<Scalars['Int']>;
  /** Alias for `blendY`. */
  readonly blendy: InputMaybe<Scalars['Int']>;
  /** Applies a gaussian blur to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/blur). */
  readonly blur: InputMaybe<Scalars['Int']>;
  /** Alias for `blendMode`. */
  readonly bm: InputMaybe<Scalars['String']>;
  /** Applies a border to an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border). */
  readonly border: InputMaybe<Scalars['String']>;
  /** Sets bottom border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-bottom). */
  readonly borderBottom: InputMaybe<Scalars['Int']>;
  /** Sets left border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-left). */
  readonly borderLeft: InputMaybe<Scalars['Int']>;
  /** Sets the outer radius of the image's border in pixels. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius). */
  readonly borderRadius: InputMaybe<Scalars['String']>;
  /** Sets the inner radius of the image's border in pixels. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner). */
  readonly borderRadiusInner: InputMaybe<Scalars['String']>;
  /** Sets right border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-right). */
  readonly borderRight: InputMaybe<Scalars['Int']>;
  /** Sets top border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-top). */
  readonly borderTop: InputMaybe<Scalars['Int']>;
  /** Alias for `blendPad`. */
  readonly bp: InputMaybe<Scalars['Int']>;
  /** Adjusts the brightness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/bri). */
  readonly bri: InputMaybe<Scalars['Int']>;
  /** Alias for `blendSize`. */
  readonly bs: InputMaybe<Scalars['String']>;
  /** Alias for `blendW`. */
  readonly bw: InputMaybe<Scalars['Float']>;
  /** Alias for `blendX`. */
  readonly bx: InputMaybe<Scalars['Int']>;
  /** Alias for `blendY`. */
  readonly by: InputMaybe<Scalars['Int']>;
  /** Sets one or more Client-Hints headers. [See docs](https://docs.imgix.com/apis/url/format/ch). */
  readonly ch: InputMaybe<Scalars['String']>;
  /** Specifies the output chroma subsampling rate. Default: `420`. [See docs](https://docs.imgix.com/apis/url/format/chromasub). */
  readonly chromasub: InputMaybe<Scalars['Int']>;
  /** Limits the number of unique colors in an image. [See docs](https://docs.imgix.com/apis/url/format/colorquant). */
  readonly colorquant: InputMaybe<Scalars['Int']>;
  /** Specifies how many colors to include in a palette-extraction response. Default: `6`. [See docs](https://docs.imgix.com/apis/url/color-palette/colors). */
  readonly colors: InputMaybe<Scalars['Int']>;
  /** Adjusts the contrast of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/con). */
  readonly con: InputMaybe<Scalars['Int']>;
  /** Specifies the radius value for a rounded corner mask. [See docs](https://docs.imgix.com/apis/url/mask/corner-radius). */
  readonly cornerRadius: InputMaybe<Scalars['String']>;
  /** Specifies how to crop an image. [See docs](https://docs.imgix.com/apis/url/size/crop). */
  readonly crop: InputMaybe<Scalars['String']>;
  /** Specifies the color space of the output image. [See docs](https://docs.imgix.com/apis/url/format/cs). */
  readonly cs: InputMaybe<Scalars['String']>;
  /** Forces a URL to use send-file in its response. [See docs](https://docs.imgix.com/apis/url/format/dl). */
  readonly dl: InputMaybe<Scalars['String']>;
  /** Sets the DPI value in the EXIF header. [See docs](https://docs.imgix.com/apis/url/format/dpi). */
  readonly dpi: InputMaybe<Scalars['Int']>;
  /** Adjusts the device-pixel ratio of the output image. Default: `1`. [See docs](https://docs.imgix.com/apis/url/dpr). */
  readonly dpr: InputMaybe<Scalars['Float']>;
  /** Applies a duotone effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/duotone). */
  readonly duotone: InputMaybe<Scalars['String']>;
  /** Changes the alpha of the duotone effect atop the source image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/stylize/duotone-alpha). */
  readonly duotoneAlpha: InputMaybe<Scalars['Int']>;
  /** Adjusts the exposure of the output image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/exp). */
  readonly exp: InputMaybe<Scalars['Int']>;
  /** A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code. [See docs](https://docs.imgix.com/apis/url/expires). */
  readonly expires: InputMaybe<Scalars['String']>;
  /** Alias for `fit`. */
  readonly f: InputMaybe<Scalars['String']>;
  /** Selects a face to crop to. [See docs](https://docs.imgix.com/apis/url/face-detection/faceindex). */
  readonly faceindex: InputMaybe<Scalars['Int']>;
  /** Adjusts padding around a selected face. Default: `1`. [See docs](https://docs.imgix.com/apis/url/face-detection/facepad). */
  readonly facepad: InputMaybe<Scalars['Float']>;
  /** Specifies that face data should be included in output when combined with `fm=json`. [See docs](https://docs.imgix.com/apis/url/face-detection/faces). */
  readonly faces: InputMaybe<Scalars['Int']>;
  /** Determines how to fill in additional space created by the fit setting. [See docs](https://docs.imgix.com/apis/url/fill/fill). */
  readonly fill: InputMaybe<Scalars['String']>;
  /** Sets the fill color for images with additional space created by the fit setting. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/fill/fill-color). */
  readonly fillColor: InputMaybe<Scalars['String']>;
  /** Alias for `fillColor`. */
  readonly fillcolor: InputMaybe<Scalars['String']>;
  /** Specifies how to map the source image to the output image dimensions. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/size/fit). */
  readonly fit: InputMaybe<Scalars['String']>;
  /** Flips an image on a specified axis. [See docs](https://docs.imgix.com/apis/url/rotation/flip). */
  readonly flip: InputMaybe<Scalars['String']>;
  /** Changes the format of the output image. [See docs](https://docs.imgix.com/apis/url/format/fm). */
  readonly fm: InputMaybe<Scalars['String']>;
  /** Displays crosshairs identifying the location of the set focal point. Default: `false`. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug). */
  readonly fpDebug: InputMaybe<Scalars['Boolean']>;
  /** Sets the relative horizontal value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x). */
  readonly fpX: InputMaybe<Scalars['Float']>;
  /** Sets the relative vertical value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y). */
  readonly fpY: InputMaybe<Scalars['Float']>;
  /** Sets the relative zoom value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z). */
  readonly fpZ: InputMaybe<Scalars['Float']>;
  /** Adjusts the gamma of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/gam). */
  readonly gam: InputMaybe<Scalars['Int']>;
  /** Sets grid colors for the transparency checkerboard grid. */
  readonly gridColors: InputMaybe<Scalars['String']>;
  /** Sets grid size for the transparency checkerboard grid. */
  readonly gridSize: InputMaybe<Scalars['Int']>;
  /** Adjusts the height of the output image. [See docs](https://docs.imgix.com/apis/url/size/h). */
  readonly h: InputMaybe<Scalars['Float']>;
  /** Alias for `h`. */
  readonly height: InputMaybe<Scalars['Float']>;
  /** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/high). */
  readonly high: InputMaybe<Scalars['Int']>;
  /** Applies a half-tone effect to the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/htn). */
  readonly htn: InputMaybe<Scalars['Int']>;
  /** Adjusts the hue of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/hue). */
  readonly hue: InputMaybe<Scalars['Int']>;
  /** Alias for `invert`. */
  readonly inv: InputMaybe<Scalars['Boolean']>;
  /** Inverts the colors on the source image. Default: `false`. [See docs](https://docs.imgix.com/apis/url/adjustment/invert). */
  readonly invert: InputMaybe<Scalars['Boolean']>;
  /** Determine if IPTC data should be passed for JPEG images. */
  readonly iptc: InputMaybe<Scalars['String']>;
  /** Specifies that the output image should be a lossless variant. Default: `false`. [See docs](https://docs.imgix.com/apis/url/format/lossless). */
  readonly lossless: InputMaybe<Scalars['Boolean']>;
  /** Alias for `mark`. */
  readonly m: InputMaybe<Scalars['String']>;
  /** Alias for `markAlign`. */
  readonly ma: InputMaybe<Scalars['String']>;
  /** Alias for `markAlpha`. */
  readonly malph: InputMaybe<Scalars['Int']>;
  /** Specifies the location of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark). */
  readonly mark: InputMaybe<Scalars['String']>;
  /** Changes the watermark alignment relative to the parent image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-align). */
  readonly markAlign: InputMaybe<Scalars['String']>;
  /** Changes the alpha of the watermark image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-alpha). */
  readonly markAlpha: InputMaybe<Scalars['Int']>;
  /** Changes base URL of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-base). */
  readonly markBase: InputMaybe<Scalars['String']>;
  /** Specifies the fit mode for watermark images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-fit). */
  readonly markFit: InputMaybe<Scalars['String']>;
  /** Adjusts the height of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-h). */
  readonly markH: InputMaybe<Scalars['Float']>;
  /** Applies padding to the watermark image. Default: `5`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-pad). */
  readonly markPad: InputMaybe<Scalars['Int']>;
  /** Rotates a watermark or tiled watermarks by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-rot). */
  readonly markRot: InputMaybe<Scalars['Float']>;
  /** Adjusts the scale of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-scale). */
  readonly markScale: InputMaybe<Scalars['Int']>;
  /** Adds tiled watermark. [See docs](https://docs.imgix.com/apis/url/watermark/mark-tile). */
  readonly markTile: InputMaybe<Scalars['String']>;
  /** Adjusts the width of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-w). */
  readonly markW: InputMaybe<Scalars['Float']>;
  /** Adjusts the x-offset of the watermark image relative to its parent. [See docs](https://docs.imgix.com/apis/url/watermark/mark-x). */
  readonly markX: InputMaybe<Scalars['Int']>;
  /** Adjusts the y-offset of the watermark image relative to its parent. [See docs](https://docs.imgix.com/apis/url/watermark/mark-y). */
  readonly markY: InputMaybe<Scalars['Int']>;
  /** Alias for `markAlign`. */
  readonly markalign: InputMaybe<Scalars['String']>;
  /** Alias for `markAlpha`. */
  readonly markalpha: InputMaybe<Scalars['Int']>;
  /** Alias for `markBase`. */
  readonly markbase: InputMaybe<Scalars['String']>;
  /** Alias for `markFit`. */
  readonly markfit: InputMaybe<Scalars['String']>;
  /** Alias for `markH`. */
  readonly markh: InputMaybe<Scalars['Float']>;
  /** Alias for `markPad`. */
  readonly markpad: InputMaybe<Scalars['Int']>;
  /** Alias for `markScale`. */
  readonly markscale: InputMaybe<Scalars['Int']>;
  /** Alias for `markTile`. */
  readonly marktile: InputMaybe<Scalars['String']>;
  /** Alias for `markW`. */
  readonly markw: InputMaybe<Scalars['Float']>;
  /** Alias for `markX`. */
  readonly markx: InputMaybe<Scalars['Int']>;
  /** Alias for `markY`. */
  readonly marky: InputMaybe<Scalars['Int']>;
  /** Defines the type of mask and specifies the URL if that type is selected. [See docs](https://docs.imgix.com/apis/url/mask). */
  readonly mask: InputMaybe<Scalars['String']>;
  /** Colors the background of the transparent mask area of images. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/mask/mask-bg). */
  readonly maskBg: InputMaybe<Scalars['String']>;
  /** Alias for `maskBg`. */
  readonly maskbg: InputMaybe<Scalars['String']>;
  /** Specifies the maximum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-height). */
  readonly maxH: InputMaybe<Scalars['Int']>;
  /** Alias for `maxH`. */
  readonly maxHeight: InputMaybe<Scalars['Int']>;
  /** Specifies the maximum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-width). */
  readonly maxW: InputMaybe<Scalars['Int']>;
  /** Alias for `maxW`. */
  readonly maxWidth: InputMaybe<Scalars['Int']>;
  /** Alias for `markBase`. */
  readonly mb: InputMaybe<Scalars['String']>;
  /** Alias for `markFit`. */
  readonly mf: InputMaybe<Scalars['String']>;
  /** Alias for `markH`. */
  readonly mh: InputMaybe<Scalars['Float']>;
  /** Specifies the minimum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-height). */
  readonly minH: InputMaybe<Scalars['Int']>;
  /** Alias for `minH`. */
  readonly minHeight: InputMaybe<Scalars['Int']>;
  /** Specifies the minimum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-width). */
  readonly minW: InputMaybe<Scalars['Int']>;
  /** Alias for `minW`. */
  readonly minWidth: InputMaybe<Scalars['Int']>;
  /** Alias for `monochrome`. */
  readonly mono: InputMaybe<Scalars['String']>;
  /** Applies a monochrome effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/monochrome). */
  readonly monochrome: InputMaybe<Scalars['String']>;
  /** Alias for `markPad`. */
  readonly mp: InputMaybe<Scalars['Int']>;
  /** Alias for `markScale`. */
  readonly ms: InputMaybe<Scalars['Int']>;
  /** Alias for `markTile`. */
  readonly mtile: InputMaybe<Scalars['String']>;
  /** Alias for `markW`. */
  readonly mw: InputMaybe<Scalars['Float']>;
  /** Alias for `markX`. */
  readonly mx: InputMaybe<Scalars['Int']>;
  /** Alias for `markY`. */
  readonly my: InputMaybe<Scalars['Int']>;
  /** Reduces the noise in an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nr). */
  readonly nr: InputMaybe<Scalars['Int']>;
  /** Provides a threshold by which to sharpen an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nrs). */
  readonly nrs: InputMaybe<Scalars['Int']>;
  /** Alias for `orient`. */
  readonly or: InputMaybe<Scalars['Int']>;
  /** Changes the image orientation. [See docs](https://docs.imgix.com/apis/url/rotation/orient). */
  readonly orient: InputMaybe<Scalars['Int']>;
  /** Pads an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad). */
  readonly pad: InputMaybe<Scalars['Int']>;
  /** Sets bottom padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom). */
  readonly padBottom: InputMaybe<Scalars['Int']>;
  /** Sets left padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-left). */
  readonly padLeft: InputMaybe<Scalars['Int']>;
  /** Sets right padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-right). */
  readonly padRight: InputMaybe<Scalars['Int']>;
  /** Sets top padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-top). */
  readonly padTop: InputMaybe<Scalars['Int']>;
  /** Selects a page from a PDF for display. Default: `1`. [See docs](https://docs.imgix.com/apis/url/pdf/page). */
  readonly page: InputMaybe<Scalars['Int']>;
  /** Specifies an output format for palette-extraction. [See docs](https://docs.imgix.com/apis/url/color-palette/palette). */
  readonly palette: InputMaybe<Scalars['String']>;
  /** Enables or disables PDF annotation. Default: `true`. [See docs](https://docs.imgix.com/apis/url/pdf/pdf-annotation). */
  readonly pdfAnnotation: InputMaybe<Scalars['Boolean']>;
  /** Specifies a CSS prefix for all classes in palette-extraction. Default: `image`. [See docs](https://docs.imgix.com/apis/url/color-palette/prefix). */
  readonly prefix: InputMaybe<Scalars['String']>;
  /** Applies a pixelation effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/px). */
  readonly px: InputMaybe<Scalars['Int']>;
  /** Adjusts the quality of an output image. Default: `75`. [See docs](https://docs.imgix.com/apis/url/format/q). */
  readonly q: InputMaybe<Scalars['Int']>;
  /** Crops an image to a specified rectangle. [See docs](https://docs.imgix.com/apis/url/size/rect). */
  readonly rect: InputMaybe<Scalars['String']>;
  /** Rotates an image by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/rotation/rot). */
  readonly rot: InputMaybe<Scalars['Float']>;
  /** Adjusts the saturation of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sat). */
  readonly sat: InputMaybe<Scalars['Int']>;
  /** Applies a sepia effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/sepia). */
  readonly sepia: InputMaybe<Scalars['Int']>;
  /** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/shad). */
  readonly shad: InputMaybe<Scalars['Float']>;
  /** Adjusts the sharpness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sharp). */
  readonly sharp: InputMaybe<Scalars['Float']>;
  /** Alias for `txt`. */
  readonly t: InputMaybe<Scalars['String']>;
  /** Alias for `txtAlign`. */
  readonly ta: InputMaybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  readonly tc: InputMaybe<Scalars['String']>;
  /** Alias for `txtClip`. */
  readonly tcl: InputMaybe<Scalars['String']>;
  /** Alias for `txtFont`. */
  readonly tf: InputMaybe<Scalars['String']>;
  /** Alias for `txtLine`. */
  readonly tl: InputMaybe<Scalars['Int']>;
  /** Alias for `txtPad`. */
  readonly tp: InputMaybe<Scalars['Int']>;
  /** Adds checkerboard behind images which support transparency. [See docs](https://docs.imgix.com/apis/url/fill/transparency). */
  readonly transparency: InputMaybe<Scalars['String']>;
  /** Trims the source image. [See docs](https://docs.imgix.com/apis/url/trim/trim). */
  readonly trim: InputMaybe<Scalars['String']>;
  /** Specifies a trim color on a trim operation. [See docs](https://docs.imgix.com/apis/url/trim/trim-color). */
  readonly trimColor: InputMaybe<Scalars['String']>;
  /** Specifies the mean difference on a trim operation. Default: `11`. [See docs](https://docs.imgix.com/apis/url/trim/trim-md). */
  readonly trimMd: InputMaybe<Scalars['Float']>;
  /** Pads the area of the source image before trimming. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-pad). */
  readonly trimPad: InputMaybe<Scalars['Int']>;
  /** Specifies the standard deviation on a trim operation. Default: `10`. [See docs](https://docs.imgix.com/apis/url/trim/trim-sd). */
  readonly trimSd: InputMaybe<Scalars['Float']>;
  /** Specifies the tolerance on a trim operation. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-tol). */
  readonly trimTol: InputMaybe<Scalars['Float']>;
  /** Alias for `trimColor`. */
  readonly trimcolor: InputMaybe<Scalars['String']>;
  /** Alias for `trimMd`. */
  readonly trimmd: InputMaybe<Scalars['Float']>;
  /** Alias for `trimPad`. */
  readonly trimpad: InputMaybe<Scalars['Int']>;
  /** Alias for `trimSd`. */
  readonly trimsd: InputMaybe<Scalars['Float']>;
  /** Alias for `trimTol`. */
  readonly trimtol: InputMaybe<Scalars['Float']>;
  /** Alias for `txtShad`. */
  readonly tsh: InputMaybe<Scalars['Float']>;
  /** Alias for `txtSize`. */
  readonly tsz: InputMaybe<Scalars['Int']>;
  /** Alias for `txtTrack`. */
  readonly tt: InputMaybe<Scalars['Int']>;
  /** Sets the text string to render. [See docs](https://docs.imgix.com/apis/url/text/txt). */
  readonly txt: InputMaybe<Scalars['String']>;
  /** Sets the vertical and horizontal alignment of rendered text relative to the base image. [See docs](https://docs.imgix.com/apis/url/text/txt-align). */
  readonly txtAlign: InputMaybe<Scalars['String']>;
  /** Sets the clipping properties of rendered text. Default: `end`. [See docs](https://docs.imgix.com/apis/url/text/txt-clip). */
  readonly txtClip: InputMaybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  readonly txtClr: InputMaybe<Scalars['String']>;
  /** Specifies the color of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-color). */
  readonly txtColor: InputMaybe<Scalars['String']>;
  /** Specifies the fit approach for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-fit). */
  readonly txtFit: InputMaybe<Scalars['String']>;
  /** Selects a font for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-font). */
  readonly txtFont: InputMaybe<Scalars['String']>;
  /** Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint. Default: `0`. [See docs](https://docs.imgix.com/apis/url/typesetting/txt-lead). */
  readonly txtLead: InputMaybe<Scalars['Int']>;
  /** Controls the level of ligature substitution. [See docs](https://docs.imgix.com/apis/url/text/txt-lig). */
  readonly txtLig: InputMaybe<Scalars['Int']>;
  /** Outlines the rendered text with a specified color. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-line). */
  readonly txtLine: InputMaybe<Scalars['Int']>;
  /** Alias for `txtLineColor`. */
  readonly txtLineClr: InputMaybe<Scalars['String']>;
  /** Specifies a text outline color. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/text/txt-line-color). */
  readonly txtLineColor: InputMaybe<Scalars['String']>;
  /** Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image. [See docs](https://docs.imgix.com/apis/url/text/txt-pad). */
  readonly txtPad: InputMaybe<Scalars['Int']>;
  /** Applies a shadow to rendered text. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-shad). */
  readonly txtShad: InputMaybe<Scalars['Float']>;
  /** Sets the font size of rendered text. Default: `12`. [See docs](https://docs.imgix.com/apis/url/text/txt-size). */
  readonly txtSize: InputMaybe<Scalars['Int']>;
  /** Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint. Default: `0`. [See docs](https://docs.imgix.com/apis/url/typesetting/txt-track). */
  readonly txtTrack: InputMaybe<Scalars['Int']>;
  /** Sets the width of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-width). */
  readonly txtWidth: InputMaybe<Scalars['Int']>;
  /** Alias for `txtAlign`. */
  readonly txtalign: InputMaybe<Scalars['String']>;
  /** Alias for `txtClip`. */
  readonly txtclip: InputMaybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  readonly txtclr: InputMaybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  readonly txtcolor: InputMaybe<Scalars['String']>;
  /** Alias for `txtFit`. */
  readonly txtfit: InputMaybe<Scalars['String']>;
  /** Alias for `txtFont`. */
  readonly txtfont: InputMaybe<Scalars['String']>;
  /** Alias for `txtLead`. */
  readonly txtlead: InputMaybe<Scalars['Int']>;
  /** Alias for `txtLig`. */
  readonly txtlig: InputMaybe<Scalars['Int']>;
  /** Alias for `txtLine`. */
  readonly txtline: InputMaybe<Scalars['Int']>;
  /** Alias for `txtLineColor`. */
  readonly txtlineclr: InputMaybe<Scalars['String']>;
  /** Alias for `txtLineColor`. */
  readonly txtlinecolor: InputMaybe<Scalars['String']>;
  /** Alias for `txtPad`. */
  readonly txtpad: InputMaybe<Scalars['Int']>;
  /** Alias for `txtShad`. */
  readonly txtshad: InputMaybe<Scalars['Float']>;
  /** Alias for `txtSize`. */
  readonly txtsize: InputMaybe<Scalars['Int']>;
  /** Alias for `txtTrack`. */
  readonly txttrack: InputMaybe<Scalars['Int']>;
  /** Alias for `txtWidth`. */
  readonly txtwidth: InputMaybe<Scalars['Int']>;
  /** Sharpens the source image using an unsharp mask. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/usm). */
  readonly usm: InputMaybe<Scalars['Int']>;
  /** Specifies the radius for an unsharp mask operation. Default: `2.5`. [See docs](https://docs.imgix.com/apis/url/adjustment/usmrad). */
  readonly usmrad: InputMaybe<Scalars['Float']>;
  /** Adjusts the vibrance of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/vib). */
  readonly vib: InputMaybe<Scalars['Int']>;
  /** Adjusts the width of the output image. [See docs](https://docs.imgix.com/apis/url/size/w). */
  readonly w: InputMaybe<Scalars['Float']>;
  /** Alias for `w`. */
  readonly width: InputMaybe<Scalars['Float']>;
};

type ImgixPlaceholder =
  | 'blurred'
  | 'dominantColor'
  | 'none';

type IntQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['Int']>;
  readonly gt: InputMaybe<Scalars['Int']>;
  readonly gte: InputMaybe<Scalars['Int']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  readonly lt: InputMaybe<Scalars['Int']>;
  readonly lte: InputMaybe<Scalars['Int']>;
  readonly ne: InputMaybe<Scalars['Int']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
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

type InternalFilterInput = {
  readonly content: InputMaybe<StringQueryOperatorInput>;
  readonly contentDigest: InputMaybe<StringQueryOperatorInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly fieldOwners: InputMaybe<StringQueryOperatorInput>;
  readonly ignoreType: InputMaybe<BooleanQueryOperatorInput>;
  readonly mediaType: InputMaybe<StringQueryOperatorInput>;
  readonly owner: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type JPGOptions = {
  readonly progressive: InputMaybe<Scalars['Boolean']>;
  readonly quality: InputMaybe<Scalars['Int']>;
};

type JSONQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['JSON']>;
  readonly glob: InputMaybe<Scalars['JSON']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly ne: InputMaybe<Scalars['JSON']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']>>>;
  readonly regex: InputMaybe<Scalars['JSON']>;
};

/** Node Interface */
type Node = {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
};

type NodeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type NodeFilterListInput = {
  readonly elemMatch: InputMaybe<NodeFilterInput>;
};

type PNGOptions = {
  readonly compressionSpeed: InputMaybe<Scalars['Int']>;
  readonly quality: InputMaybe<Scalars['Int']>;
};

type PageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage: Maybe<Scalars['Int']>;
  readonly totalCount: Scalars['Int'];
};

type Potrace = {
  readonly alphaMax: InputMaybe<Scalars['Float']>;
  readonly background: InputMaybe<Scalars['String']>;
  readonly blackOnWhite: InputMaybe<Scalars['Boolean']>;
  readonly color: InputMaybe<Scalars['String']>;
  readonly optCurve: InputMaybe<Scalars['Boolean']>;
  readonly optTolerance: InputMaybe<Scalars['Float']>;
  readonly threshold: InputMaybe<Scalars['Int']>;
  readonly turdSize: InputMaybe<Scalars['Float']>;
  readonly turnPolicy: InputMaybe<PotraceTurnPolicy>;
};

type PotraceTurnPolicy =
  | 'black'
  | 'left'
  | 'majority'
  | 'minority'
  | 'right'
  | 'white';

type PrismicAdsContent = Node & {
  readonly _previewable: Scalars['ID'];
  readonly alternate_languages: ReadonlyArray<PrismicAlternateLanguageType>;
  readonly children: ReadonlyArray<Node>;
  readonly data: PrismicAdsContentDataType;
  readonly dataRaw: Scalars['JSON'];
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly parent: Maybe<Node>;
  readonly prismicId: Scalars['ID'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
};


type PrismicAdsContent_first_publication_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type PrismicAdsContent_last_publication_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type PrismicAdsContentConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicAdsContentEdge>;
  readonly group: ReadonlyArray<PrismicAdsContentGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicAdsContent>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicAdsContentConnection_distinctArgs = {
  field: PrismicAdsContentFieldsEnum;
};


type PrismicAdsContentConnection_groupArgs = {
  field: PrismicAdsContentFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type PrismicAdsContentConnection_maxArgs = {
  field: PrismicAdsContentFieldsEnum;
};


type PrismicAdsContentConnection_minArgs = {
  field: PrismicAdsContentFieldsEnum;
};


type PrismicAdsContentConnection_sumArgs = {
  field: PrismicAdsContentFieldsEnum;
};

type PrismicAdsContentDataBodyDownloadSection = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly primary: PrismicAdsContentDataBodyDownloadSectionPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicAdsContentDataBodyDownloadSectionPrimary = {
  readonly section_subtitle: Maybe<Scalars['String']>;
  readonly section_title: Maybe<PrismicStructuredTextType>;
};

type PrismicAdsContentDataBodyFeaturesSection = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly items: ReadonlyArray<PrismicAdsContentDataBodyFeaturesSectionItem>;
  readonly primary: PrismicAdsContentDataBodyFeaturesSectionPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicAdsContentDataBodyFeaturesSectionItem = {
  readonly feature_description: Maybe<PrismicStructuredTextType>;
  readonly feature_link: Maybe<PrismicLinkType>;
  readonly feature_name: Maybe<Scalars['String']>;
  readonly preview_image: Maybe<PrismicAdsContentDataBodyFeaturesSectionItemsPreviewImageImageType>;
};

type PrismicAdsContentDataBodyFeaturesSectionItemsPreviewImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicAdsContentDataBodyFeaturesSectionItemsPreviewImageImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicAdsContentDataBodyFeaturesSectionItemsPreviewImageImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicAdsContentDataBodyFeaturesSectionItemsPreviewImageImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicAdsContentDataBodyFeaturesSectionItemsPreviewImageImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicAdsContentDataBodyFeaturesSectionPrimary = {
  readonly section_title: Maybe<PrismicStructuredTextType>;
};

type PrismicAdsContentDataBodyGuideSection = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly primary: PrismicAdsContentDataBodyGuideSectionPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicAdsContentDataBodyGuideSectionPrimary = {
  readonly brochure_link: Maybe<PrismicLinkType>;
  readonly faq_1_link: Maybe<PrismicLinkType>;
  readonly faq_1_text: Maybe<Scalars['String']>;
  readonly faq_2_link: Maybe<PrismicLinkType>;
  readonly faq_2_text: Maybe<Scalars['String']>;
  readonly faq_3_link: Maybe<PrismicLinkType>;
  readonly faq_3_text: Maybe<Scalars['String']>;
  readonly manual_link: Maybe<PrismicLinkType>;
  readonly section_title: Maybe<PrismicStructuredTextType>;
};

type PrismicAdsContentDataBodyPreviewSection = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly primary: PrismicAdsContentDataBodyPreviewSectionPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicAdsContentDataBodyPreviewSectionPrimary = {
  readonly image: Maybe<PrismicAdsContentDataBodyPreviewSectionPrimaryImageImageType>;
  readonly reversed: Maybe<Scalars['Boolean']>;
  readonly section_description: Maybe<PrismicStructuredTextType>;
  readonly section_title: Maybe<PrismicStructuredTextType>;
};

type PrismicAdsContentDataBodyPreviewSectionPrimaryImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicAdsContentDataBodyPreviewSectionPrimaryImageImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicAdsContentDataBodyPreviewSectionPrimaryImageImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicAdsContentDataBodyPreviewSectionPrimaryImageImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicAdsContentDataBodyPreviewSectionPrimaryImageImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicAdsContentDataBodySlicesType = PrismicAdsContentDataBodyDownloadSection | PrismicAdsContentDataBodyFeaturesSection | PrismicAdsContentDataBodyGuideSection | PrismicAdsContentDataBodyPreviewSection | PrismicAdsContentDataBodyStepsSection | PrismicAdsContentDataBodyUsageSlider | PrismicAdsContentDataBodyUserStorySection;

type PrismicAdsContentDataBodyStepsSection = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly items: ReadonlyArray<PrismicAdsContentDataBodyStepsSectionItem>;
  readonly primary: PrismicAdsContentDataBodyStepsSectionPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicAdsContentDataBodyStepsSectionItem = {
  readonly step_image: Maybe<PrismicAdsContentDataBodyStepsSectionItemsStepImageImageType>;
  readonly step_text: Maybe<Scalars['String']>;
};

type PrismicAdsContentDataBodyStepsSectionItemsStepImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicAdsContentDataBodyStepsSectionItemsStepImageImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicAdsContentDataBodyStepsSectionItemsStepImageImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicAdsContentDataBodyStepsSectionItemsStepImageImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicAdsContentDataBodyStepsSectionItemsStepImageImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicAdsContentDataBodyStepsSectionPrimary = {
  readonly section_title: Maybe<PrismicStructuredTextType>;
};

type PrismicAdsContentDataBodyUsageSlider = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly items: ReadonlyArray<PrismicAdsContentDataBodyUsageSliderItem>;
  readonly primary: PrismicAdsContentDataBodyUsageSliderPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicAdsContentDataBodyUsageSliderItem = {
  readonly region: Maybe<Scalars['String']>;
  readonly visitor_count: Maybe<Scalars['Float']>;
};

type PrismicAdsContentDataBodyUsageSliderPrimary = {
  readonly date: Maybe<Scalars['Date']>;
};


type PrismicAdsContentDataBodyUsageSliderPrimary_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type PrismicAdsContentDataBodyUserStorySection = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly items: ReadonlyArray<PrismicAdsContentDataBodyUserStorySectionItem>;
  readonly primary: PrismicAdsContentDataBodyUserStorySectionPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicAdsContentDataBodyUserStorySectionItem = {
  readonly background_image: Maybe<PrismicAdsContentDataBodyUserStorySectionItemsBackgroundImageImageType>;
  readonly goto_link: Maybe<PrismicLinkType>;
  readonly goto_text: Maybe<Scalars['String']>;
  readonly user_story: Maybe<PrismicStructuredTextType>;
};

type PrismicAdsContentDataBodyUserStorySectionItemsBackgroundImageImageThumbnailsType = {
  readonly mobile: Maybe<PrismicImageThumbnailType>;
};

type PrismicAdsContentDataBodyUserStorySectionItemsBackgroundImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  readonly thumbnails: Maybe<PrismicAdsContentDataBodyUserStorySectionItemsBackgroundImageImageThumbnailsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicAdsContentDataBodyUserStorySectionItemsBackgroundImageImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicAdsContentDataBodyUserStorySectionItemsBackgroundImageImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicAdsContentDataBodyUserStorySectionItemsBackgroundImageImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicAdsContentDataBodyUserStorySectionItemsBackgroundImageImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicAdsContentDataBodyUserStorySectionPrimary = {
  readonly section_title: Maybe<PrismicStructuredTextType>;
};

type PrismicAdsContentDataHeroImageImageThumbnailsType = {
  readonly pc_main: Maybe<PrismicImageThumbnailType>;
};

type PrismicAdsContentDataHeroImageImageThumbnailsTypeFilterInput = {
  readonly pc_main: InputMaybe<PrismicImageThumbnailTypeFilterInput>;
};

type PrismicAdsContentDataHeroImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  readonly thumbnails: Maybe<PrismicAdsContentDataHeroImageImageThumbnailsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicAdsContentDataHeroImageImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicAdsContentDataHeroImageImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicAdsContentDataHeroImageImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicAdsContentDataHeroImageImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicAdsContentDataHeroImageImageTypeFilterInput = {
  readonly alt: InputMaybe<StringQueryOperatorInput>;
  readonly copyright: InputMaybe<StringQueryOperatorInput>;
  readonly dimensions: InputMaybe<PrismicImageDimensionsTypeFilterInput>;
  readonly fixed: InputMaybe<ImgixFixedFilterInput>;
  readonly fluid: InputMaybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: InputMaybe<JSONQueryOperatorInput>;
  readonly localFile: InputMaybe<FileFilterInput>;
  readonly thumbnails: InputMaybe<PrismicAdsContentDataHeroImageImageThumbnailsTypeFilterInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicAdsContentDataMetaImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicAdsContentDataMetaImageImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicAdsContentDataMetaImageImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicAdsContentDataMetaImageImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicAdsContentDataMetaImageImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicAdsContentDataMetaImageImageTypeFilterInput = {
  readonly alt: InputMaybe<StringQueryOperatorInput>;
  readonly copyright: InputMaybe<StringQueryOperatorInput>;
  readonly dimensions: InputMaybe<PrismicImageDimensionsTypeFilterInput>;
  readonly fixed: InputMaybe<ImgixFixedFilterInput>;
  readonly fluid: InputMaybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: InputMaybe<JSONQueryOperatorInput>;
  readonly localFile: InputMaybe<FileFilterInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicAdsContentDataType = {
  readonly appstore_app_id: Maybe<Scalars['String']>;
  readonly body: ReadonlyArray<PrismicAdsContentDataBodySlicesType>;
  readonly fb_app_id: Maybe<Scalars['String']>;
  readonly here_title: Maybe<PrismicStructuredTextType>;
  readonly hero_image: Maybe<PrismicAdsContentDataHeroImageImageType>;
  readonly meta_description: Maybe<Scalars['String']>;
  readonly meta_image: Maybe<PrismicAdsContentDataMetaImageImageType>;
  readonly meta_title: Maybe<Scalars['String']>;
  readonly playstore_app_id: Maybe<Scalars['String']>;
};

type PrismicAdsContentDataTypeFilterInput = {
  readonly appstore_app_id: InputMaybe<StringQueryOperatorInput>;
  readonly fb_app_id: InputMaybe<StringQueryOperatorInput>;
  readonly here_title: InputMaybe<PrismicStructuredTextTypeFilterInput>;
  readonly hero_image: InputMaybe<PrismicAdsContentDataHeroImageImageTypeFilterInput>;
  readonly meta_description: InputMaybe<StringQueryOperatorInput>;
  readonly meta_image: InputMaybe<PrismicAdsContentDataMetaImageImageTypeFilterInput>;
  readonly meta_title: InputMaybe<StringQueryOperatorInput>;
  readonly playstore_app_id: InputMaybe<StringQueryOperatorInput>;
};

type PrismicAdsContentEdge = {
  readonly next: Maybe<PrismicAdsContent>;
  readonly node: PrismicAdsContent;
  readonly previous: Maybe<PrismicAdsContent>;
};

type PrismicAdsContentFieldsEnum =
  | '_previewable'
  | 'alternate_languages'
  | 'alternate_languages.id'
  | 'alternate_languages.lang'
  | 'alternate_languages.raw'
  | 'alternate_languages.type'
  | 'alternate_languages.uid'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'dataRaw'
  | 'data.appstore_app_id'
  | 'data.fb_app_id'
  | 'data.here_title.html'
  | 'data.here_title.raw'
  | 'data.here_title.richText'
  | 'data.here_title.text'
  | 'data.hero_image.alt'
  | 'data.hero_image.copyright'
  | 'data.hero_image.dimensions.height'
  | 'data.hero_image.dimensions.width'
  | 'data.hero_image.fixed.base64'
  | 'data.hero_image.fixed.height'
  | 'data.hero_image.fixed.sizes'
  | 'data.hero_image.fixed.src'
  | 'data.hero_image.fixed.srcSet'
  | 'data.hero_image.fixed.srcSetWebp'
  | 'data.hero_image.fixed.srcWebp'
  | 'data.hero_image.fixed.width'
  | 'data.hero_image.fluid.aspectRatio'
  | 'data.hero_image.fluid.base64'
  | 'data.hero_image.fluid.sizes'
  | 'data.hero_image.fluid.src'
  | 'data.hero_image.fluid.srcSet'
  | 'data.hero_image.fluid.srcSetWebp'
  | 'data.hero_image.fluid.srcWebp'
  | 'data.hero_image.gatsbyImageData'
  | 'data.hero_image.localFile.absolutePath'
  | 'data.hero_image.localFile.accessTime'
  | 'data.hero_image.localFile.atime'
  | 'data.hero_image.localFile.atimeMs'
  | 'data.hero_image.localFile.base'
  | 'data.hero_image.localFile.birthTime'
  | 'data.hero_image.localFile.birthtime'
  | 'data.hero_image.localFile.birthtimeMs'
  | 'data.hero_image.localFile.blksize'
  | 'data.hero_image.localFile.blocks'
  | 'data.hero_image.localFile.changeTime'
  | 'data.hero_image.localFile.children'
  | 'data.hero_image.localFile.childrenImageSharp'
  | 'data.hero_image.localFile.ctime'
  | 'data.hero_image.localFile.ctimeMs'
  | 'data.hero_image.localFile.dev'
  | 'data.hero_image.localFile.dir'
  | 'data.hero_image.localFile.ext'
  | 'data.hero_image.localFile.extension'
  | 'data.hero_image.localFile.gid'
  | 'data.hero_image.localFile.id'
  | 'data.hero_image.localFile.ino'
  | 'data.hero_image.localFile.mode'
  | 'data.hero_image.localFile.modifiedTime'
  | 'data.hero_image.localFile.mtime'
  | 'data.hero_image.localFile.mtimeMs'
  | 'data.hero_image.localFile.name'
  | 'data.hero_image.localFile.nlink'
  | 'data.hero_image.localFile.prettySize'
  | 'data.hero_image.localFile.rdev'
  | 'data.hero_image.localFile.relativeDirectory'
  | 'data.hero_image.localFile.relativePath'
  | 'data.hero_image.localFile.root'
  | 'data.hero_image.localFile.size'
  | 'data.hero_image.localFile.sourceInstanceName'
  | 'data.hero_image.localFile.uid'
  | 'data.hero_image.localFile.url'
  | 'data.hero_image.url'
  | 'data.meta_description'
  | 'data.meta_image.alt'
  | 'data.meta_image.copyright'
  | 'data.meta_image.dimensions.height'
  | 'data.meta_image.dimensions.width'
  | 'data.meta_image.fixed.base64'
  | 'data.meta_image.fixed.height'
  | 'data.meta_image.fixed.sizes'
  | 'data.meta_image.fixed.src'
  | 'data.meta_image.fixed.srcSet'
  | 'data.meta_image.fixed.srcSetWebp'
  | 'data.meta_image.fixed.srcWebp'
  | 'data.meta_image.fixed.width'
  | 'data.meta_image.fluid.aspectRatio'
  | 'data.meta_image.fluid.base64'
  | 'data.meta_image.fluid.sizes'
  | 'data.meta_image.fluid.src'
  | 'data.meta_image.fluid.srcSet'
  | 'data.meta_image.fluid.srcSetWebp'
  | 'data.meta_image.fluid.srcWebp'
  | 'data.meta_image.gatsbyImageData'
  | 'data.meta_image.localFile.absolutePath'
  | 'data.meta_image.localFile.accessTime'
  | 'data.meta_image.localFile.atime'
  | 'data.meta_image.localFile.atimeMs'
  | 'data.meta_image.localFile.base'
  | 'data.meta_image.localFile.birthTime'
  | 'data.meta_image.localFile.birthtime'
  | 'data.meta_image.localFile.birthtimeMs'
  | 'data.meta_image.localFile.blksize'
  | 'data.meta_image.localFile.blocks'
  | 'data.meta_image.localFile.changeTime'
  | 'data.meta_image.localFile.children'
  | 'data.meta_image.localFile.childrenImageSharp'
  | 'data.meta_image.localFile.ctime'
  | 'data.meta_image.localFile.ctimeMs'
  | 'data.meta_image.localFile.dev'
  | 'data.meta_image.localFile.dir'
  | 'data.meta_image.localFile.ext'
  | 'data.meta_image.localFile.extension'
  | 'data.meta_image.localFile.gid'
  | 'data.meta_image.localFile.id'
  | 'data.meta_image.localFile.ino'
  | 'data.meta_image.localFile.mode'
  | 'data.meta_image.localFile.modifiedTime'
  | 'data.meta_image.localFile.mtime'
  | 'data.meta_image.localFile.mtimeMs'
  | 'data.meta_image.localFile.name'
  | 'data.meta_image.localFile.nlink'
  | 'data.meta_image.localFile.prettySize'
  | 'data.meta_image.localFile.rdev'
  | 'data.meta_image.localFile.relativeDirectory'
  | 'data.meta_image.localFile.relativePath'
  | 'data.meta_image.localFile.root'
  | 'data.meta_image.localFile.size'
  | 'data.meta_image.localFile.sourceInstanceName'
  | 'data.meta_image.localFile.uid'
  | 'data.meta_image.localFile.url'
  | 'data.meta_image.url'
  | 'data.meta_title'
  | 'data.playstore_app_id'
  | 'first_publication_date'
  | 'href'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'lang'
  | 'last_publication_date'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'prismicId'
  | 'tags'
  | 'type'
  | 'url';

type PrismicAdsContentFilterInput = {
  readonly _previewable: InputMaybe<IDQueryOperatorInput>;
  readonly alternate_languages: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly data: InputMaybe<PrismicAdsContentDataTypeFilterInput>;
  readonly dataRaw: InputMaybe<JSONQueryOperatorInput>;
  readonly first_publication_date: InputMaybe<DateQueryOperatorInput>;
  readonly href: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly lang: InputMaybe<StringQueryOperatorInput>;
  readonly last_publication_date: InputMaybe<DateQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prismicId: InputMaybe<IDQueryOperatorInput>;
  readonly tags: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicAdsContentGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicAdsContentEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<PrismicAdsContentGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicAdsContent>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicAdsContentGroupConnection_distinctArgs = {
  field: PrismicAdsContentFieldsEnum;
};


type PrismicAdsContentGroupConnection_groupArgs = {
  field: PrismicAdsContentFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type PrismicAdsContentGroupConnection_maxArgs = {
  field: PrismicAdsContentFieldsEnum;
};


type PrismicAdsContentGroupConnection_minArgs = {
  field: PrismicAdsContentFieldsEnum;
};


type PrismicAdsContentGroupConnection_sumArgs = {
  field: PrismicAdsContentFieldsEnum;
};

type PrismicAdsContentSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<PrismicAdsContentFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type PrismicAdvertisementContents = Node & {
  readonly _previewable: Scalars['ID'];
  readonly alternate_languages: ReadonlyArray<PrismicAlternateLanguageType>;
  readonly children: ReadonlyArray<Node>;
  readonly data: PrismicAdvertisementContentsDataType;
  readonly dataRaw: Scalars['JSON'];
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly parent: Maybe<Node>;
  readonly prismicId: Scalars['ID'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
};


type PrismicAdvertisementContents_first_publication_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type PrismicAdvertisementContents_last_publication_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type PrismicAdvertisementContentsConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicAdvertisementContentsEdge>;
  readonly group: ReadonlyArray<PrismicAdvertisementContentsGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicAdvertisementContents>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicAdvertisementContentsConnection_distinctArgs = {
  field: PrismicAdvertisementContentsFieldsEnum;
};


type PrismicAdvertisementContentsConnection_groupArgs = {
  field: PrismicAdvertisementContentsFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type PrismicAdvertisementContentsDataBodyLearnmoreSlice = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly items: ReadonlyArray<PrismicAdvertisementContentsDataBodyLearnmoreSliceItem>;
  readonly primary: PrismicAdvertisementContentsDataBodyLearnmoreSlicePrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicAdvertisementContentsDataBodyLearnmoreSliceItem = {
  readonly faq_item: Maybe<PrismicLinkType>;
  readonly faq_title: Maybe<Scalars['String']>;
};

type PrismicAdvertisementContentsDataBodyLearnmoreSlicePrimary = {
  readonly introduce_advertise: Maybe<PrismicLinkType>;
  readonly learn_more: Maybe<PrismicLinkType>;
};

type PrismicAdvertisementContentsDataBodySlicesType = PrismicAdvertisementContentsDataBodyLearnmoreSlice | PrismicAdvertisementContentsDataBodyVisitorCountSlide;

type PrismicAdvertisementContentsDataBodyVisitorCountSlide = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly items: ReadonlyArray<PrismicAdvertisementContentsDataBodyVisitorCountSlideItem>;
  readonly primary: PrismicAdvertisementContentsDataBodyVisitorCountSlidePrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicAdvertisementContentsDataBodyVisitorCountSlideItem = {
  readonly region: Maybe<Scalars['String']>;
  readonly visitor_count: Maybe<Scalars['Float']>;
};

type PrismicAdvertisementContentsDataBodyVisitorCountSlidePrimary = {
  readonly date: Maybe<Scalars['Date']>;
};


type PrismicAdvertisementContentsDataBodyVisitorCountSlidePrimary_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type PrismicAdvertisementContentsDataType = {
  readonly body: ReadonlyArray<PrismicAdvertisementContentsDataBodySlicesType>;
};

type PrismicAdvertisementContentsEdge = {
  readonly next: Maybe<PrismicAdvertisementContents>;
  readonly node: PrismicAdvertisementContents;
  readonly previous: Maybe<PrismicAdvertisementContents>;
};

type PrismicAdvertisementContentsFieldsEnum =
  | '_previewable'
  | 'alternate_languages'
  | 'alternate_languages.id'
  | 'alternate_languages.lang'
  | 'alternate_languages.raw'
  | 'alternate_languages.type'
  | 'alternate_languages.uid'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'dataRaw'
  | 'first_publication_date'
  | 'href'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'lang'
  | 'last_publication_date'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'prismicId'
  | 'tags'
  | 'type'
  | 'url';

type PrismicAdvertisementContentsFilterInput = {
  readonly _previewable: InputMaybe<IDQueryOperatorInput>;
  readonly alternate_languages: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly dataRaw: InputMaybe<JSONQueryOperatorInput>;
  readonly first_publication_date: InputMaybe<DateQueryOperatorInput>;
  readonly href: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly lang: InputMaybe<StringQueryOperatorInput>;
  readonly last_publication_date: InputMaybe<DateQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prismicId: InputMaybe<IDQueryOperatorInput>;
  readonly tags: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicAdvertisementContentsGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicAdvertisementContentsEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<PrismicAdvertisementContentsGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicAdvertisementContents>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicAdvertisementContentsGroupConnection_distinctArgs = {
  field: PrismicAdvertisementContentsFieldsEnum;
};


type PrismicAdvertisementContentsGroupConnection_groupArgs = {
  field: PrismicAdvertisementContentsFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type PrismicAdvertisementContentsSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<PrismicAdvertisementContentsFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type PrismicAllDocumentTypes = PrismicAdsContent | PrismicAdvertisementContents | PrismicFaq | PrismicGlobalContents | PrismicIr | PrismicMemberProfile | PrismicPayContents | PrismicSiteNavigation | PrismicTeamBanner | PrismicTeamContents | PrismicTeamsArticle | PrismicTermsAndConditions;

type PrismicAlternateLanguageType = {
  readonly document: Maybe<PrismicAllDocumentTypes>;
  readonly id: Maybe<Scalars['ID']>;
  readonly lang: Maybe<Scalars['String']>;
  readonly raw: Maybe<Scalars['JSON']>;
  readonly type: Maybe<Scalars['String']>;
  readonly uid: Maybe<Scalars['String']>;
};

type PrismicAlternateLanguageTypeFilterInput = {
  readonly id: InputMaybe<IDQueryOperatorInput>;
  readonly lang: InputMaybe<StringQueryOperatorInput>;
  readonly raw: InputMaybe<JSONQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
  readonly uid: InputMaybe<StringQueryOperatorInput>;
};

type PrismicAlternateLanguageTypeFilterListInput = {
  readonly elemMatch: InputMaybe<PrismicAlternateLanguageTypeFilterInput>;
};

type PrismicEmbedType = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
};

type PrismicEmbedTypeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicEmbedTypeEdge>;
  readonly group: ReadonlyArray<PrismicEmbedTypeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicEmbedType>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicEmbedTypeConnection_distinctArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};


type PrismicEmbedTypeConnection_groupArgs = {
  field: PrismicEmbedTypeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type PrismicEmbedTypeEdge = {
  readonly next: Maybe<PrismicEmbedType>;
  readonly node: PrismicEmbedType;
  readonly previous: Maybe<PrismicEmbedType>;
};

type PrismicEmbedTypeFieldsEnum =
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id';

type PrismicEmbedTypeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type PrismicEmbedTypeGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicEmbedTypeEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<PrismicEmbedTypeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicEmbedType>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicEmbedTypeGroupConnection_distinctArgs = {
  field: PrismicEmbedTypeFieldsEnum;
};


type PrismicEmbedTypeGroupConnection_groupArgs = {
  field: PrismicEmbedTypeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type PrismicEmbedTypeSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<PrismicEmbedTypeFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type PrismicFaq = Node & {
  readonly _previewable: Scalars['ID'];
  readonly alternate_languages: ReadonlyArray<PrismicAlternateLanguageType>;
  readonly children: ReadonlyArray<Node>;
  readonly data: PrismicFaqDataType;
  readonly dataRaw: Scalars['JSON'];
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly parent: Maybe<Node>;
  readonly prismicId: Scalars['ID'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly uid: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
};


type PrismicFaq_first_publication_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type PrismicFaq_last_publication_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type PrismicFaqConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicFaqEdge>;
  readonly group: ReadonlyArray<PrismicFaqGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicFaq>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicFaqConnection_distinctArgs = {
  field: PrismicFaqFieldsEnum;
};


type PrismicFaqConnection_groupArgs = {
  field: PrismicFaqFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type PrismicFaqDataEntries = {
  readonly answer: Maybe<PrismicStructuredTextType>;
  readonly keywords: Maybe<Scalars['String']>;
  readonly question: Maybe<Scalars['String']>;
};

type PrismicFaqDataEntriesFilterInput = {
  readonly answer: InputMaybe<PrismicStructuredTextTypeFilterInput>;
  readonly keywords: InputMaybe<StringQueryOperatorInput>;
  readonly question: InputMaybe<StringQueryOperatorInput>;
};

type PrismicFaqDataEntriesFilterListInput = {
  readonly elemMatch: InputMaybe<PrismicFaqDataEntriesFilterInput>;
};

type PrismicFaqDataType = {
  readonly display_name: Maybe<Scalars['String']>;
  readonly entries: Maybe<ReadonlyArray<Maybe<PrismicFaqDataEntries>>>;
};

type PrismicFaqDataTypeFilterInput = {
  readonly display_name: InputMaybe<StringQueryOperatorInput>;
  readonly entries: InputMaybe<PrismicFaqDataEntriesFilterListInput>;
};

type PrismicFaqEdge = {
  readonly next: Maybe<PrismicFaq>;
  readonly node: PrismicFaq;
  readonly previous: Maybe<PrismicFaq>;
};

type PrismicFaqFieldsEnum =
  | '_previewable'
  | 'alternate_languages'
  | 'alternate_languages.id'
  | 'alternate_languages.lang'
  | 'alternate_languages.raw'
  | 'alternate_languages.type'
  | 'alternate_languages.uid'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'dataRaw'
  | 'data.display_name'
  | 'data.entries'
  | 'data.entries.answer.html'
  | 'data.entries.answer.raw'
  | 'data.entries.answer.richText'
  | 'data.entries.answer.text'
  | 'data.entries.keywords'
  | 'data.entries.question'
  | 'first_publication_date'
  | 'href'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'lang'
  | 'last_publication_date'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'prismicId'
  | 'tags'
  | 'type'
  | 'uid'
  | 'url';

type PrismicFaqFilterInput = {
  readonly _previewable: InputMaybe<IDQueryOperatorInput>;
  readonly alternate_languages: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly data: InputMaybe<PrismicFaqDataTypeFilterInput>;
  readonly dataRaw: InputMaybe<JSONQueryOperatorInput>;
  readonly first_publication_date: InputMaybe<DateQueryOperatorInput>;
  readonly href: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly lang: InputMaybe<StringQueryOperatorInput>;
  readonly last_publication_date: InputMaybe<DateQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prismicId: InputMaybe<IDQueryOperatorInput>;
  readonly tags: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
  readonly uid: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicFaqGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicFaqEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<PrismicFaqGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicFaq>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicFaqGroupConnection_distinctArgs = {
  field: PrismicFaqFieldsEnum;
};


type PrismicFaqGroupConnection_groupArgs = {
  field: PrismicFaqFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type PrismicFaqSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<PrismicFaqFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type PrismicGeoPointType = {
  readonly latitude: Scalars['Float'];
  readonly longitude: Scalars['Float'];
};

type PrismicGlobalContents = Node & {
  readonly _previewable: Scalars['ID'];
  readonly alternate_languages: ReadonlyArray<PrismicAlternateLanguageType>;
  readonly children: ReadonlyArray<Node>;
  readonly data: PrismicGlobalContentsDataType;
  readonly dataRaw: Scalars['JSON'];
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly parent: Maybe<Node>;
  readonly prismicId: Scalars['ID'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
};


type PrismicGlobalContents_first_publication_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type PrismicGlobalContents_last_publication_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type PrismicGlobalContentsConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicGlobalContentsEdge>;
  readonly group: ReadonlyArray<PrismicGlobalContentsGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicGlobalContents>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicGlobalContentsConnection_distinctArgs = {
  field: PrismicGlobalContentsFieldsEnum;
};


type PrismicGlobalContentsConnection_groupArgs = {
  field: PrismicGlobalContentsFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type PrismicGlobalContentsDataAboutBackgroundImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicGlobalContentsDataAboutBackgroundImageImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicGlobalContentsDataAboutBackgroundImageImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicGlobalContentsDataAboutBackgroundImageImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicGlobalContentsDataAboutBackgroundImageImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicGlobalContentsDataAboutBackgroundImageImageTypeFilterInput = {
  readonly alt: InputMaybe<StringQueryOperatorInput>;
  readonly copyright: InputMaybe<StringQueryOperatorInput>;
  readonly dimensions: InputMaybe<PrismicImageDimensionsTypeFilterInput>;
  readonly fixed: InputMaybe<ImgixFixedFilterInput>;
  readonly fluid: InputMaybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: InputMaybe<JSONQueryOperatorInput>;
  readonly localFile: InputMaybe<FileFilterInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicGlobalContentsDataAboutBodyDetailsList = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly items: ReadonlyArray<PrismicGlobalContentsDataAboutBodyDetailsListItem>;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicGlobalContentsDataAboutBodyDetailsListItem = {
  readonly label: Maybe<Scalars['String']>;
  readonly text: Maybe<Scalars['String']>;
};

type PrismicGlobalContentsDataAboutBodySlicesType = PrismicGlobalContentsDataAboutBodyDetailsList | PrismicGlobalContentsDataAboutBodySubtitleAndImages | PrismicGlobalContentsDataAboutBodySubtitleAndLinks | PrismicGlobalContentsDataAboutBodySubtitleAndText;

type PrismicGlobalContentsDataAboutBodySubtitleAndImages = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly items: ReadonlyArray<PrismicGlobalContentsDataAboutBodySubtitleAndImagesItem>;
  readonly primary: PrismicGlobalContentsDataAboutBodySubtitleAndImagesPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicGlobalContentsDataAboutBodySubtitleAndImagesItem = {
  readonly image: Maybe<PrismicGlobalContentsDataAboutBodySubtitleAndImagesItemsImageImageType>;
};

type PrismicGlobalContentsDataAboutBodySubtitleAndImagesItemsImageImageThumbnailsType = {
  readonly mobile: Maybe<PrismicImageThumbnailType>;
};

type PrismicGlobalContentsDataAboutBodySubtitleAndImagesItemsImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  readonly thumbnails: Maybe<PrismicGlobalContentsDataAboutBodySubtitleAndImagesItemsImageImageThumbnailsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicGlobalContentsDataAboutBodySubtitleAndImagesItemsImageImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicGlobalContentsDataAboutBodySubtitleAndImagesItemsImageImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicGlobalContentsDataAboutBodySubtitleAndImagesItemsImageImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicGlobalContentsDataAboutBodySubtitleAndImagesItemsImageImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicGlobalContentsDataAboutBodySubtitleAndImagesPrimary = {
  readonly subtitle: Maybe<PrismicStructuredTextType>;
};

type PrismicGlobalContentsDataAboutBodySubtitleAndLinks = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly items: ReadonlyArray<PrismicGlobalContentsDataAboutBodySubtitleAndLinksItem>;
  readonly primary: PrismicGlobalContentsDataAboutBodySubtitleAndLinksPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicGlobalContentsDataAboutBodySubtitleAndLinksItem = {
  readonly date: Maybe<Scalars['Date']>;
  readonly link: Maybe<PrismicLinkType>;
  readonly text: Maybe<Scalars['String']>;
};


type PrismicGlobalContentsDataAboutBodySubtitleAndLinksItem_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type PrismicGlobalContentsDataAboutBodySubtitleAndLinksPrimary = {
  readonly subtitle: Maybe<PrismicStructuredTextType>;
};

type PrismicGlobalContentsDataAboutBodySubtitleAndText = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly primary: PrismicGlobalContentsDataAboutBodySubtitleAndTextPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicGlobalContentsDataAboutBodySubtitleAndTextPrimary = {
  readonly subtitle: Maybe<PrismicStructuredTextType>;
  readonly text: Maybe<PrismicStructuredTextType>;
};

type PrismicGlobalContentsDataAboutOpengraphImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicGlobalContentsDataAboutOpengraphImageImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicGlobalContentsDataAboutOpengraphImageImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicGlobalContentsDataAboutOpengraphImageImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicGlobalContentsDataAboutOpengraphImageImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicGlobalContentsDataAboutOpengraphImageImageTypeFilterInput = {
  readonly alt: InputMaybe<StringQueryOperatorInput>;
  readonly copyright: InputMaybe<StringQueryOperatorInput>;
  readonly dimensions: InputMaybe<PrismicImageDimensionsTypeFilterInput>;
  readonly fixed: InputMaybe<ImgixFixedFilterInput>;
  readonly fluid: InputMaybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: InputMaybe<JSONQueryOperatorInput>;
  readonly localFile: InputMaybe<FileFilterInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicGlobalContentsDataBodyDetailsList = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly items: ReadonlyArray<PrismicGlobalContentsDataBodyDetailsListItem>;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicGlobalContentsDataBodyDetailsListItem = {
  readonly label: Maybe<Scalars['String']>;
  readonly text: Maybe<Scalars['String']>;
};

type PrismicGlobalContentsDataBodySlicesType = PrismicGlobalContentsDataBodyDetailsList | PrismicGlobalContentsDataBodySubtitleAndImages | PrismicGlobalContentsDataBodySubtitleAndLinks | PrismicGlobalContentsDataBodySubtitleAndText;

type PrismicGlobalContentsDataBodySubtitleAndImages = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly items: ReadonlyArray<PrismicGlobalContentsDataBodySubtitleAndImagesItem>;
  readonly primary: PrismicGlobalContentsDataBodySubtitleAndImagesPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicGlobalContentsDataBodySubtitleAndImagesItem = {
  readonly image: Maybe<PrismicGlobalContentsDataBodySubtitleAndImagesItemsImageImageType>;
};

type PrismicGlobalContentsDataBodySubtitleAndImagesItemsImageImageThumbnailsType = {
  readonly mobile: Maybe<PrismicImageThumbnailType>;
};

type PrismicGlobalContentsDataBodySubtitleAndImagesItemsImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  readonly thumbnails: Maybe<PrismicGlobalContentsDataBodySubtitleAndImagesItemsImageImageThumbnailsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicGlobalContentsDataBodySubtitleAndImagesItemsImageImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicGlobalContentsDataBodySubtitleAndImagesItemsImageImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicGlobalContentsDataBodySubtitleAndImagesItemsImageImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicGlobalContentsDataBodySubtitleAndImagesItemsImageImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicGlobalContentsDataBodySubtitleAndImagesPrimary = {
  readonly subtitle: Maybe<PrismicStructuredTextType>;
};

type PrismicGlobalContentsDataBodySubtitleAndLinks = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly items: ReadonlyArray<PrismicGlobalContentsDataBodySubtitleAndLinksItem>;
  readonly primary: PrismicGlobalContentsDataBodySubtitleAndLinksPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicGlobalContentsDataBodySubtitleAndLinksItem = {
  readonly date: Maybe<Scalars['Date']>;
  readonly link: Maybe<PrismicLinkType>;
  readonly text: Maybe<Scalars['String']>;
};


type PrismicGlobalContentsDataBodySubtitleAndLinksItem_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type PrismicGlobalContentsDataBodySubtitleAndLinksPrimary = {
  readonly subtitle: Maybe<PrismicStructuredTextType>;
};

type PrismicGlobalContentsDataBodySubtitleAndText = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly primary: PrismicGlobalContentsDataBodySubtitleAndTextPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicGlobalContentsDataBodySubtitleAndTextPrimary = {
  readonly subtitle: Maybe<PrismicStructuredTextType>;
  readonly text: Maybe<PrismicStructuredTextType>;
};

type PrismicGlobalContentsDataIntroductionBackgroundImageImageThumbnailsType = {
  readonly portrait: Maybe<PrismicImageThumbnailType>;
};

type PrismicGlobalContentsDataIntroductionBackgroundImageImageThumbnailsTypeFilterInput = {
  readonly portrait: InputMaybe<PrismicImageThumbnailTypeFilterInput>;
};

type PrismicGlobalContentsDataIntroductionBackgroundImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  readonly thumbnails: Maybe<PrismicGlobalContentsDataIntroductionBackgroundImageImageThumbnailsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicGlobalContentsDataIntroductionBackgroundImageImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicGlobalContentsDataIntroductionBackgroundImageImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicGlobalContentsDataIntroductionBackgroundImageImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicGlobalContentsDataIntroductionBackgroundImageImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicGlobalContentsDataIntroductionBackgroundImageImageTypeFilterInput = {
  readonly alt: InputMaybe<StringQueryOperatorInput>;
  readonly copyright: InputMaybe<StringQueryOperatorInput>;
  readonly dimensions: InputMaybe<PrismicImageDimensionsTypeFilterInput>;
  readonly fixed: InputMaybe<ImgixFixedFilterInput>;
  readonly fluid: InputMaybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: InputMaybe<JSONQueryOperatorInput>;
  readonly localFile: InputMaybe<FileFilterInput>;
  readonly thumbnails: InputMaybe<PrismicGlobalContentsDataIntroductionBackgroundImageImageThumbnailsTypeFilterInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicGlobalContentsDataIntroductionOpengraphImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicGlobalContentsDataIntroductionOpengraphImageImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicGlobalContentsDataIntroductionOpengraphImageImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicGlobalContentsDataIntroductionOpengraphImageImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicGlobalContentsDataIntroductionOpengraphImageImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicGlobalContentsDataIntroductionOpengraphImageImageTypeFilterInput = {
  readonly alt: InputMaybe<StringQueryOperatorInput>;
  readonly copyright: InputMaybe<StringQueryOperatorInput>;
  readonly dimensions: InputMaybe<PrismicImageDimensionsTypeFilterInput>;
  readonly fixed: InputMaybe<ImgixFixedFilterInput>;
  readonly fluid: InputMaybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: InputMaybe<JSONQueryOperatorInput>;
  readonly localFile: InputMaybe<FileFilterInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicGlobalContentsDataMainBodyCentreSection = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly primary: PrismicGlobalContentsDataMainBodyCentreSectionPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicGlobalContentsDataMainBodyCentreSectionPrimary = {
  readonly image: Maybe<PrismicGlobalContentsDataMainBodyCentreSectionPrimaryImageImageType>;
  readonly text: Maybe<PrismicStructuredTextType>;
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicGlobalContentsDataMainBodyCentreSectionPrimaryImageImageThumbnailsType = {
  readonly mobile: Maybe<PrismicImageThumbnailType>;
};

type PrismicGlobalContentsDataMainBodyCentreSectionPrimaryImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  readonly thumbnails: Maybe<PrismicGlobalContentsDataMainBodyCentreSectionPrimaryImageImageThumbnailsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicGlobalContentsDataMainBodyCentreSectionPrimaryImageImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicGlobalContentsDataMainBodyCentreSectionPrimaryImageImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicGlobalContentsDataMainBodyCentreSectionPrimaryImageImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicGlobalContentsDataMainBodyCentreSectionPrimaryImageImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicGlobalContentsDataMainBodyDownloadSection = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly primary: PrismicGlobalContentsDataMainBodyDownloadSectionPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicGlobalContentsDataMainBodyDownloadSectionPrimary = {
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicGlobalContentsDataMainBodyHeroSection = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly primary: PrismicGlobalContentsDataMainBodyHeroSectionPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicGlobalContentsDataMainBodyHeroSectionPrimary = {
  readonly background_color: Maybe<Scalars['String']>;
  readonly background_image: Maybe<PrismicGlobalContentsDataMainBodyHeroSectionPrimaryBackgroundImageImageType>;
  readonly side_image: Maybe<PrismicGlobalContentsDataMainBodyHeroSectionPrimarySideImageImageType>;
  readonly text: Maybe<PrismicStructuredTextType>;
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicGlobalContentsDataMainBodyHeroSectionPrimaryBackgroundImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicGlobalContentsDataMainBodyHeroSectionPrimaryBackgroundImageImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicGlobalContentsDataMainBodyHeroSectionPrimaryBackgroundImageImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicGlobalContentsDataMainBodyHeroSectionPrimaryBackgroundImageImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicGlobalContentsDataMainBodyHeroSectionPrimaryBackgroundImageImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicGlobalContentsDataMainBodyHeroSectionPrimarySideImageImageThumbnailsType = {
  readonly mobile: Maybe<PrismicImageThumbnailType>;
};

type PrismicGlobalContentsDataMainBodyHeroSectionPrimarySideImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  readonly thumbnails: Maybe<PrismicGlobalContentsDataMainBodyHeroSectionPrimarySideImageImageThumbnailsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicGlobalContentsDataMainBodyHeroSectionPrimarySideImageImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicGlobalContentsDataMainBodyHeroSectionPrimarySideImageImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicGlobalContentsDataMainBodyHeroSectionPrimarySideImageImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicGlobalContentsDataMainBodyHeroSectionPrimarySideImageImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicGlobalContentsDataMainBodyIllustrationSection = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly primary: PrismicGlobalContentsDataMainBodyIllustrationSectionPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicGlobalContentsDataMainBodyIllustrationSectionPrimary = {
  readonly image: Maybe<PrismicGlobalContentsDataMainBodyIllustrationSectionPrimaryImageImageType>;
  readonly inverted: Maybe<Scalars['Boolean']>;
  readonly text: Maybe<PrismicStructuredTextType>;
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicGlobalContentsDataMainBodyIllustrationSectionPrimaryImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicGlobalContentsDataMainBodyIllustrationSectionPrimaryImageImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicGlobalContentsDataMainBodyIllustrationSectionPrimaryImageImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicGlobalContentsDataMainBodyIllustrationSectionPrimaryImageImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicGlobalContentsDataMainBodyIllustrationSectionPrimaryImageImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicGlobalContentsDataMainBodyMockupSection = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly items: ReadonlyArray<PrismicGlobalContentsDataMainBodyMockupSectionItem>;
  readonly primary: PrismicGlobalContentsDataMainBodyMockupSectionPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
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

type PrismicGlobalContentsDataMainBodyParallaxSection = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly primary: PrismicGlobalContentsDataMainBodyParallaxSectionPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicGlobalContentsDataMainBodyParallaxSectionPrimary = {
  readonly background_image: Maybe<PrismicGlobalContentsDataMainBodyParallaxSectionPrimaryBackgroundImageImageType>;
  readonly title: Maybe<PrismicStructuredTextType>;
  readonly top_icon: Maybe<Scalars['String']>;
  readonly top_text: Maybe<PrismicStructuredTextType>;
};

type PrismicGlobalContentsDataMainBodyParallaxSectionPrimaryBackgroundImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicGlobalContentsDataMainBodyParallaxSectionPrimaryBackgroundImageImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicGlobalContentsDataMainBodyParallaxSectionPrimaryBackgroundImageImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicGlobalContentsDataMainBodyParallaxSectionPrimaryBackgroundImageImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicGlobalContentsDataMainBodyParallaxSectionPrimaryBackgroundImageImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicGlobalContentsDataMainBodyPopularSection = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly primary: PrismicGlobalContentsDataMainBodyPopularSectionPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicGlobalContentsDataMainBodyPopularSectionPrimary = {
  readonly more_button: Maybe<Scalars['String']>;
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicGlobalContentsDataMainBodyReviewSection = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly items: ReadonlyArray<PrismicGlobalContentsDataMainBodyReviewSectionItem>;
  readonly primary: PrismicGlobalContentsDataMainBodyReviewSectionPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
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

type PrismicGlobalContentsDataMainBodyReviewSectionPrimaryImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicGlobalContentsDataMainBodyReviewSectionPrimaryImageImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicGlobalContentsDataMainBodyReviewSectionPrimaryImageImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicGlobalContentsDataMainBodyReviewSectionPrimaryImageImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicGlobalContentsDataMainBodyReviewSectionPrimaryImageImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicGlobalContentsDataMainBodySlicesType = PrismicGlobalContentsDataMainBodyCentreSection | PrismicGlobalContentsDataMainBodyDownloadSection | PrismicGlobalContentsDataMainBodyHeroSection | PrismicGlobalContentsDataMainBodyIllustrationSection | PrismicGlobalContentsDataMainBodyMockupSection | PrismicGlobalContentsDataMainBodyParallaxSection | PrismicGlobalContentsDataMainBodyPopularSection | PrismicGlobalContentsDataMainBodyReviewSection;

type PrismicGlobalContentsDataMainOpengraphImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicGlobalContentsDataMainOpengraphImageImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicGlobalContentsDataMainOpengraphImageImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicGlobalContentsDataMainOpengraphImageImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicGlobalContentsDataMainOpengraphImageImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicGlobalContentsDataMainOpengraphImageImageTypeFilterInput = {
  readonly alt: InputMaybe<StringQueryOperatorInput>;
  readonly copyright: InputMaybe<StringQueryOperatorInput>;
  readonly dimensions: InputMaybe<PrismicImageDimensionsTypeFilterInput>;
  readonly fixed: InputMaybe<ImgixFixedFilterInput>;
  readonly fluid: InputMaybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: InputMaybe<JSONQueryOperatorInput>;
  readonly localFile: InputMaybe<FileFilterInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicGlobalContentsDataType = {
  readonly about_background_image: Maybe<PrismicGlobalContentsDataAboutBackgroundImageImageType>;
  readonly about_body: ReadonlyArray<PrismicGlobalContentsDataAboutBodySlicesType>;
  readonly about_opengraph_image: Maybe<PrismicGlobalContentsDataAboutOpengraphImageImageType>;
  readonly about_opengraph_image_link: Maybe<Scalars['String']>;
  readonly about_page_description: Maybe<Scalars['String']>;
  readonly about_page_title: Maybe<Scalars['String']>;
  readonly about_title: Maybe<PrismicStructuredTextType>;
  readonly app_store_link: Maybe<Scalars['String']>;
  readonly body: ReadonlyArray<PrismicGlobalContentsDataBodySlicesType>;
  readonly google_play_link: Maybe<Scalars['String']>;
  readonly introduction_background_image: Maybe<PrismicGlobalContentsDataIntroductionBackgroundImageImageType>;
  readonly introduction_opengraph_image: Maybe<PrismicGlobalContentsDataIntroductionOpengraphImageImageType>;
  readonly introduction_opengraph_image_link: Maybe<Scalars['String']>;
  readonly introduction_page_description: Maybe<Scalars['String']>;
  readonly introduction_page_title: Maybe<Scalars['String']>;
  readonly introduction_title: Maybe<PrismicStructuredTextType>;
  readonly main_body: ReadonlyArray<PrismicGlobalContentsDataMainBodySlicesType>;
  readonly main_opengraph_image: Maybe<PrismicGlobalContentsDataMainOpengraphImageImageType>;
  readonly main_opengraph_image_link: Maybe<Scalars['String']>;
  readonly main_page_description: Maybe<Scalars['String']>;
  readonly main_page_title: Maybe<Scalars['String']>;
  readonly one_link: Maybe<Scalars['String']>;
  readonly one_link_button_text: Maybe<Scalars['String']>;
};

type PrismicGlobalContentsDataTypeFilterInput = {
  readonly about_background_image: InputMaybe<PrismicGlobalContentsDataAboutBackgroundImageImageTypeFilterInput>;
  readonly about_opengraph_image: InputMaybe<PrismicGlobalContentsDataAboutOpengraphImageImageTypeFilterInput>;
  readonly about_opengraph_image_link: InputMaybe<StringQueryOperatorInput>;
  readonly about_page_description: InputMaybe<StringQueryOperatorInput>;
  readonly about_page_title: InputMaybe<StringQueryOperatorInput>;
  readonly about_title: InputMaybe<PrismicStructuredTextTypeFilterInput>;
  readonly app_store_link: InputMaybe<StringQueryOperatorInput>;
  readonly google_play_link: InputMaybe<StringQueryOperatorInput>;
  readonly introduction_background_image: InputMaybe<PrismicGlobalContentsDataIntroductionBackgroundImageImageTypeFilterInput>;
  readonly introduction_opengraph_image: InputMaybe<PrismicGlobalContentsDataIntroductionOpengraphImageImageTypeFilterInput>;
  readonly introduction_opengraph_image_link: InputMaybe<StringQueryOperatorInput>;
  readonly introduction_page_description: InputMaybe<StringQueryOperatorInput>;
  readonly introduction_page_title: InputMaybe<StringQueryOperatorInput>;
  readonly introduction_title: InputMaybe<PrismicStructuredTextTypeFilterInput>;
  readonly main_opengraph_image: InputMaybe<PrismicGlobalContentsDataMainOpengraphImageImageTypeFilterInput>;
  readonly main_opengraph_image_link: InputMaybe<StringQueryOperatorInput>;
  readonly main_page_description: InputMaybe<StringQueryOperatorInput>;
  readonly main_page_title: InputMaybe<StringQueryOperatorInput>;
  readonly one_link: InputMaybe<StringQueryOperatorInput>;
  readonly one_link_button_text: InputMaybe<StringQueryOperatorInput>;
};

type PrismicGlobalContentsEdge = {
  readonly next: Maybe<PrismicGlobalContents>;
  readonly node: PrismicGlobalContents;
  readonly previous: Maybe<PrismicGlobalContents>;
};

type PrismicGlobalContentsFieldsEnum =
  | '_previewable'
  | 'alternate_languages'
  | 'alternate_languages.id'
  | 'alternate_languages.lang'
  | 'alternate_languages.raw'
  | 'alternate_languages.type'
  | 'alternate_languages.uid'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'dataRaw'
  | 'data.about_background_image.alt'
  | 'data.about_background_image.copyright'
  | 'data.about_background_image.dimensions.height'
  | 'data.about_background_image.dimensions.width'
  | 'data.about_background_image.fixed.base64'
  | 'data.about_background_image.fixed.height'
  | 'data.about_background_image.fixed.sizes'
  | 'data.about_background_image.fixed.src'
  | 'data.about_background_image.fixed.srcSet'
  | 'data.about_background_image.fixed.srcSetWebp'
  | 'data.about_background_image.fixed.srcWebp'
  | 'data.about_background_image.fixed.width'
  | 'data.about_background_image.fluid.aspectRatio'
  | 'data.about_background_image.fluid.base64'
  | 'data.about_background_image.fluid.sizes'
  | 'data.about_background_image.fluid.src'
  | 'data.about_background_image.fluid.srcSet'
  | 'data.about_background_image.fluid.srcSetWebp'
  | 'data.about_background_image.fluid.srcWebp'
  | 'data.about_background_image.gatsbyImageData'
  | 'data.about_background_image.localFile.absolutePath'
  | 'data.about_background_image.localFile.accessTime'
  | 'data.about_background_image.localFile.atime'
  | 'data.about_background_image.localFile.atimeMs'
  | 'data.about_background_image.localFile.base'
  | 'data.about_background_image.localFile.birthTime'
  | 'data.about_background_image.localFile.birthtime'
  | 'data.about_background_image.localFile.birthtimeMs'
  | 'data.about_background_image.localFile.blksize'
  | 'data.about_background_image.localFile.blocks'
  | 'data.about_background_image.localFile.changeTime'
  | 'data.about_background_image.localFile.children'
  | 'data.about_background_image.localFile.childrenImageSharp'
  | 'data.about_background_image.localFile.ctime'
  | 'data.about_background_image.localFile.ctimeMs'
  | 'data.about_background_image.localFile.dev'
  | 'data.about_background_image.localFile.dir'
  | 'data.about_background_image.localFile.ext'
  | 'data.about_background_image.localFile.extension'
  | 'data.about_background_image.localFile.gid'
  | 'data.about_background_image.localFile.id'
  | 'data.about_background_image.localFile.ino'
  | 'data.about_background_image.localFile.mode'
  | 'data.about_background_image.localFile.modifiedTime'
  | 'data.about_background_image.localFile.mtime'
  | 'data.about_background_image.localFile.mtimeMs'
  | 'data.about_background_image.localFile.name'
  | 'data.about_background_image.localFile.nlink'
  | 'data.about_background_image.localFile.prettySize'
  | 'data.about_background_image.localFile.rdev'
  | 'data.about_background_image.localFile.relativeDirectory'
  | 'data.about_background_image.localFile.relativePath'
  | 'data.about_background_image.localFile.root'
  | 'data.about_background_image.localFile.size'
  | 'data.about_background_image.localFile.sourceInstanceName'
  | 'data.about_background_image.localFile.uid'
  | 'data.about_background_image.localFile.url'
  | 'data.about_background_image.url'
  | 'data.about_opengraph_image.alt'
  | 'data.about_opengraph_image.copyright'
  | 'data.about_opengraph_image.dimensions.height'
  | 'data.about_opengraph_image.dimensions.width'
  | 'data.about_opengraph_image.fixed.base64'
  | 'data.about_opengraph_image.fixed.height'
  | 'data.about_opengraph_image.fixed.sizes'
  | 'data.about_opengraph_image.fixed.src'
  | 'data.about_opengraph_image.fixed.srcSet'
  | 'data.about_opengraph_image.fixed.srcSetWebp'
  | 'data.about_opengraph_image.fixed.srcWebp'
  | 'data.about_opengraph_image.fixed.width'
  | 'data.about_opengraph_image.fluid.aspectRatio'
  | 'data.about_opengraph_image.fluid.base64'
  | 'data.about_opengraph_image.fluid.sizes'
  | 'data.about_opengraph_image.fluid.src'
  | 'data.about_opengraph_image.fluid.srcSet'
  | 'data.about_opengraph_image.fluid.srcSetWebp'
  | 'data.about_opengraph_image.fluid.srcWebp'
  | 'data.about_opengraph_image.gatsbyImageData'
  | 'data.about_opengraph_image.localFile.absolutePath'
  | 'data.about_opengraph_image.localFile.accessTime'
  | 'data.about_opengraph_image.localFile.atime'
  | 'data.about_opengraph_image.localFile.atimeMs'
  | 'data.about_opengraph_image.localFile.base'
  | 'data.about_opengraph_image.localFile.birthTime'
  | 'data.about_opengraph_image.localFile.birthtime'
  | 'data.about_opengraph_image.localFile.birthtimeMs'
  | 'data.about_opengraph_image.localFile.blksize'
  | 'data.about_opengraph_image.localFile.blocks'
  | 'data.about_opengraph_image.localFile.changeTime'
  | 'data.about_opengraph_image.localFile.children'
  | 'data.about_opengraph_image.localFile.childrenImageSharp'
  | 'data.about_opengraph_image.localFile.ctime'
  | 'data.about_opengraph_image.localFile.ctimeMs'
  | 'data.about_opengraph_image.localFile.dev'
  | 'data.about_opengraph_image.localFile.dir'
  | 'data.about_opengraph_image.localFile.ext'
  | 'data.about_opengraph_image.localFile.extension'
  | 'data.about_opengraph_image.localFile.gid'
  | 'data.about_opengraph_image.localFile.id'
  | 'data.about_opengraph_image.localFile.ino'
  | 'data.about_opengraph_image.localFile.mode'
  | 'data.about_opengraph_image.localFile.modifiedTime'
  | 'data.about_opengraph_image.localFile.mtime'
  | 'data.about_opengraph_image.localFile.mtimeMs'
  | 'data.about_opengraph_image.localFile.name'
  | 'data.about_opengraph_image.localFile.nlink'
  | 'data.about_opengraph_image.localFile.prettySize'
  | 'data.about_opengraph_image.localFile.rdev'
  | 'data.about_opengraph_image.localFile.relativeDirectory'
  | 'data.about_opengraph_image.localFile.relativePath'
  | 'data.about_opengraph_image.localFile.root'
  | 'data.about_opengraph_image.localFile.size'
  | 'data.about_opengraph_image.localFile.sourceInstanceName'
  | 'data.about_opengraph_image.localFile.uid'
  | 'data.about_opengraph_image.localFile.url'
  | 'data.about_opengraph_image.url'
  | 'data.about_opengraph_image_link'
  | 'data.about_page_description'
  | 'data.about_page_title'
  | 'data.about_title.html'
  | 'data.about_title.raw'
  | 'data.about_title.richText'
  | 'data.about_title.text'
  | 'data.app_store_link'
  | 'data.google_play_link'
  | 'data.introduction_background_image.alt'
  | 'data.introduction_background_image.copyright'
  | 'data.introduction_background_image.dimensions.height'
  | 'data.introduction_background_image.dimensions.width'
  | 'data.introduction_background_image.fixed.base64'
  | 'data.introduction_background_image.fixed.height'
  | 'data.introduction_background_image.fixed.sizes'
  | 'data.introduction_background_image.fixed.src'
  | 'data.introduction_background_image.fixed.srcSet'
  | 'data.introduction_background_image.fixed.srcSetWebp'
  | 'data.introduction_background_image.fixed.srcWebp'
  | 'data.introduction_background_image.fixed.width'
  | 'data.introduction_background_image.fluid.aspectRatio'
  | 'data.introduction_background_image.fluid.base64'
  | 'data.introduction_background_image.fluid.sizes'
  | 'data.introduction_background_image.fluid.src'
  | 'data.introduction_background_image.fluid.srcSet'
  | 'data.introduction_background_image.fluid.srcSetWebp'
  | 'data.introduction_background_image.fluid.srcWebp'
  | 'data.introduction_background_image.gatsbyImageData'
  | 'data.introduction_background_image.localFile.absolutePath'
  | 'data.introduction_background_image.localFile.accessTime'
  | 'data.introduction_background_image.localFile.atime'
  | 'data.introduction_background_image.localFile.atimeMs'
  | 'data.introduction_background_image.localFile.base'
  | 'data.introduction_background_image.localFile.birthTime'
  | 'data.introduction_background_image.localFile.birthtime'
  | 'data.introduction_background_image.localFile.birthtimeMs'
  | 'data.introduction_background_image.localFile.blksize'
  | 'data.introduction_background_image.localFile.blocks'
  | 'data.introduction_background_image.localFile.changeTime'
  | 'data.introduction_background_image.localFile.children'
  | 'data.introduction_background_image.localFile.childrenImageSharp'
  | 'data.introduction_background_image.localFile.ctime'
  | 'data.introduction_background_image.localFile.ctimeMs'
  | 'data.introduction_background_image.localFile.dev'
  | 'data.introduction_background_image.localFile.dir'
  | 'data.introduction_background_image.localFile.ext'
  | 'data.introduction_background_image.localFile.extension'
  | 'data.introduction_background_image.localFile.gid'
  | 'data.introduction_background_image.localFile.id'
  | 'data.introduction_background_image.localFile.ino'
  | 'data.introduction_background_image.localFile.mode'
  | 'data.introduction_background_image.localFile.modifiedTime'
  | 'data.introduction_background_image.localFile.mtime'
  | 'data.introduction_background_image.localFile.mtimeMs'
  | 'data.introduction_background_image.localFile.name'
  | 'data.introduction_background_image.localFile.nlink'
  | 'data.introduction_background_image.localFile.prettySize'
  | 'data.introduction_background_image.localFile.rdev'
  | 'data.introduction_background_image.localFile.relativeDirectory'
  | 'data.introduction_background_image.localFile.relativePath'
  | 'data.introduction_background_image.localFile.root'
  | 'data.introduction_background_image.localFile.size'
  | 'data.introduction_background_image.localFile.sourceInstanceName'
  | 'data.introduction_background_image.localFile.uid'
  | 'data.introduction_background_image.localFile.url'
  | 'data.introduction_background_image.url'
  | 'data.introduction_opengraph_image.alt'
  | 'data.introduction_opengraph_image.copyright'
  | 'data.introduction_opengraph_image.dimensions.height'
  | 'data.introduction_opengraph_image.dimensions.width'
  | 'data.introduction_opengraph_image.fixed.base64'
  | 'data.introduction_opengraph_image.fixed.height'
  | 'data.introduction_opengraph_image.fixed.sizes'
  | 'data.introduction_opengraph_image.fixed.src'
  | 'data.introduction_opengraph_image.fixed.srcSet'
  | 'data.introduction_opengraph_image.fixed.srcSetWebp'
  | 'data.introduction_opengraph_image.fixed.srcWebp'
  | 'data.introduction_opengraph_image.fixed.width'
  | 'data.introduction_opengraph_image.fluid.aspectRatio'
  | 'data.introduction_opengraph_image.fluid.base64'
  | 'data.introduction_opengraph_image.fluid.sizes'
  | 'data.introduction_opengraph_image.fluid.src'
  | 'data.introduction_opengraph_image.fluid.srcSet'
  | 'data.introduction_opengraph_image.fluid.srcSetWebp'
  | 'data.introduction_opengraph_image.fluid.srcWebp'
  | 'data.introduction_opengraph_image.gatsbyImageData'
  | 'data.introduction_opengraph_image.localFile.absolutePath'
  | 'data.introduction_opengraph_image.localFile.accessTime'
  | 'data.introduction_opengraph_image.localFile.atime'
  | 'data.introduction_opengraph_image.localFile.atimeMs'
  | 'data.introduction_opengraph_image.localFile.base'
  | 'data.introduction_opengraph_image.localFile.birthTime'
  | 'data.introduction_opengraph_image.localFile.birthtime'
  | 'data.introduction_opengraph_image.localFile.birthtimeMs'
  | 'data.introduction_opengraph_image.localFile.blksize'
  | 'data.introduction_opengraph_image.localFile.blocks'
  | 'data.introduction_opengraph_image.localFile.changeTime'
  | 'data.introduction_opengraph_image.localFile.children'
  | 'data.introduction_opengraph_image.localFile.childrenImageSharp'
  | 'data.introduction_opengraph_image.localFile.ctime'
  | 'data.introduction_opengraph_image.localFile.ctimeMs'
  | 'data.introduction_opengraph_image.localFile.dev'
  | 'data.introduction_opengraph_image.localFile.dir'
  | 'data.introduction_opengraph_image.localFile.ext'
  | 'data.introduction_opengraph_image.localFile.extension'
  | 'data.introduction_opengraph_image.localFile.gid'
  | 'data.introduction_opengraph_image.localFile.id'
  | 'data.introduction_opengraph_image.localFile.ino'
  | 'data.introduction_opengraph_image.localFile.mode'
  | 'data.introduction_opengraph_image.localFile.modifiedTime'
  | 'data.introduction_opengraph_image.localFile.mtime'
  | 'data.introduction_opengraph_image.localFile.mtimeMs'
  | 'data.introduction_opengraph_image.localFile.name'
  | 'data.introduction_opengraph_image.localFile.nlink'
  | 'data.introduction_opengraph_image.localFile.prettySize'
  | 'data.introduction_opengraph_image.localFile.rdev'
  | 'data.introduction_opengraph_image.localFile.relativeDirectory'
  | 'data.introduction_opengraph_image.localFile.relativePath'
  | 'data.introduction_opengraph_image.localFile.root'
  | 'data.introduction_opengraph_image.localFile.size'
  | 'data.introduction_opengraph_image.localFile.sourceInstanceName'
  | 'data.introduction_opengraph_image.localFile.uid'
  | 'data.introduction_opengraph_image.localFile.url'
  | 'data.introduction_opengraph_image.url'
  | 'data.introduction_opengraph_image_link'
  | 'data.introduction_page_description'
  | 'data.introduction_page_title'
  | 'data.introduction_title.html'
  | 'data.introduction_title.raw'
  | 'data.introduction_title.richText'
  | 'data.introduction_title.text'
  | 'data.main_opengraph_image.alt'
  | 'data.main_opengraph_image.copyright'
  | 'data.main_opengraph_image.dimensions.height'
  | 'data.main_opengraph_image.dimensions.width'
  | 'data.main_opengraph_image.fixed.base64'
  | 'data.main_opengraph_image.fixed.height'
  | 'data.main_opengraph_image.fixed.sizes'
  | 'data.main_opengraph_image.fixed.src'
  | 'data.main_opengraph_image.fixed.srcSet'
  | 'data.main_opengraph_image.fixed.srcSetWebp'
  | 'data.main_opengraph_image.fixed.srcWebp'
  | 'data.main_opengraph_image.fixed.width'
  | 'data.main_opengraph_image.fluid.aspectRatio'
  | 'data.main_opengraph_image.fluid.base64'
  | 'data.main_opengraph_image.fluid.sizes'
  | 'data.main_opengraph_image.fluid.src'
  | 'data.main_opengraph_image.fluid.srcSet'
  | 'data.main_opengraph_image.fluid.srcSetWebp'
  | 'data.main_opengraph_image.fluid.srcWebp'
  | 'data.main_opengraph_image.gatsbyImageData'
  | 'data.main_opengraph_image.localFile.absolutePath'
  | 'data.main_opengraph_image.localFile.accessTime'
  | 'data.main_opengraph_image.localFile.atime'
  | 'data.main_opengraph_image.localFile.atimeMs'
  | 'data.main_opengraph_image.localFile.base'
  | 'data.main_opengraph_image.localFile.birthTime'
  | 'data.main_opengraph_image.localFile.birthtime'
  | 'data.main_opengraph_image.localFile.birthtimeMs'
  | 'data.main_opengraph_image.localFile.blksize'
  | 'data.main_opengraph_image.localFile.blocks'
  | 'data.main_opengraph_image.localFile.changeTime'
  | 'data.main_opengraph_image.localFile.children'
  | 'data.main_opengraph_image.localFile.childrenImageSharp'
  | 'data.main_opengraph_image.localFile.ctime'
  | 'data.main_opengraph_image.localFile.ctimeMs'
  | 'data.main_opengraph_image.localFile.dev'
  | 'data.main_opengraph_image.localFile.dir'
  | 'data.main_opengraph_image.localFile.ext'
  | 'data.main_opengraph_image.localFile.extension'
  | 'data.main_opengraph_image.localFile.gid'
  | 'data.main_opengraph_image.localFile.id'
  | 'data.main_opengraph_image.localFile.ino'
  | 'data.main_opengraph_image.localFile.mode'
  | 'data.main_opengraph_image.localFile.modifiedTime'
  | 'data.main_opengraph_image.localFile.mtime'
  | 'data.main_opengraph_image.localFile.mtimeMs'
  | 'data.main_opengraph_image.localFile.name'
  | 'data.main_opengraph_image.localFile.nlink'
  | 'data.main_opengraph_image.localFile.prettySize'
  | 'data.main_opengraph_image.localFile.rdev'
  | 'data.main_opengraph_image.localFile.relativeDirectory'
  | 'data.main_opengraph_image.localFile.relativePath'
  | 'data.main_opengraph_image.localFile.root'
  | 'data.main_opengraph_image.localFile.size'
  | 'data.main_opengraph_image.localFile.sourceInstanceName'
  | 'data.main_opengraph_image.localFile.uid'
  | 'data.main_opengraph_image.localFile.url'
  | 'data.main_opengraph_image.url'
  | 'data.main_opengraph_image_link'
  | 'data.main_page_description'
  | 'data.main_page_title'
  | 'data.one_link'
  | 'data.one_link_button_text'
  | 'first_publication_date'
  | 'href'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'lang'
  | 'last_publication_date'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'prismicId'
  | 'tags'
  | 'type'
  | 'url';

type PrismicGlobalContentsFilterInput = {
  readonly _previewable: InputMaybe<IDQueryOperatorInput>;
  readonly alternate_languages: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly data: InputMaybe<PrismicGlobalContentsDataTypeFilterInput>;
  readonly dataRaw: InputMaybe<JSONQueryOperatorInput>;
  readonly first_publication_date: InputMaybe<DateQueryOperatorInput>;
  readonly href: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly lang: InputMaybe<StringQueryOperatorInput>;
  readonly last_publication_date: InputMaybe<DateQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prismicId: InputMaybe<IDQueryOperatorInput>;
  readonly tags: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicGlobalContentsGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicGlobalContentsEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<PrismicGlobalContentsGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicGlobalContents>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicGlobalContentsGroupConnection_distinctArgs = {
  field: PrismicGlobalContentsFieldsEnum;
};


type PrismicGlobalContentsGroupConnection_groupArgs = {
  field: PrismicGlobalContentsFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type PrismicGlobalContentsSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<PrismicGlobalContentsFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type PrismicImageDimensionsType = {
  readonly height: Scalars['Int'];
  readonly width: Scalars['Int'];
};

type PrismicImageDimensionsTypeFilterInput = {
  readonly height: InputMaybe<IntQueryOperatorInput>;
  readonly width: InputMaybe<IntQueryOperatorInput>;
};

type PrismicImageThumbnailType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicImageThumbnailType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicImageThumbnailType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicImageThumbnailType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicImageThumbnailType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicImageThumbnailTypeFilterInput = {
  readonly alt: InputMaybe<StringQueryOperatorInput>;
  readonly copyright: InputMaybe<StringQueryOperatorInput>;
  readonly dimensions: InputMaybe<PrismicImageDimensionsTypeFilterInput>;
  readonly fixed: InputMaybe<ImgixFixedFilterInput>;
  readonly fluid: InputMaybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: InputMaybe<JSONQueryOperatorInput>;
  readonly localFile: InputMaybe<FileFilterInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicIr = Node & {
  readonly _previewable: Scalars['ID'];
  readonly alternate_languages: ReadonlyArray<PrismicAlternateLanguageType>;
  readonly children: ReadonlyArray<Node>;
  readonly data: PrismicIrDataType;
  readonly dataRaw: Scalars['JSON'];
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly parent: Maybe<Node>;
  readonly prismicId: Scalars['ID'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
};


type PrismicIr_first_publication_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type PrismicIr_last_publication_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type PrismicIrConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicIrEdge>;
  readonly group: ReadonlyArray<PrismicIrGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicIr>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicIrConnection_distinctArgs = {
  field: PrismicIrFieldsEnum;
};


type PrismicIrConnection_groupArgs = {
  field: PrismicIrFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type PrismicIrConnection_maxArgs = {
  field: PrismicIrFieldsEnum;
};


type PrismicIrConnection_minArgs = {
  field: PrismicIrFieldsEnum;
};


type PrismicIrConnection_sumArgs = {
  field: PrismicIrFieldsEnum;
};

type PrismicIrDataAttachmentGroup = {
  readonly file: Maybe<PrismicLinkType>;
};

type PrismicIrDataAttachmentGroupFilterInput = {
  readonly file: InputMaybe<PrismicLinkTypeFilterInput>;
};

type PrismicIrDataAttachmentGroupFilterListInput = {
  readonly elemMatch: InputMaybe<PrismicIrDataAttachmentGroupFilterInput>;
};

type PrismicIrDataBodyMainText = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly primary: PrismicIrDataBodyMainTextPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicIrDataBodyMainTextPrimary = {
  readonly text: Maybe<PrismicStructuredTextType>;
};

type PrismicIrDataBodySlicesType = PrismicIrDataBodyMainText | PrismicIrDataBodySupplementaryText;

type PrismicIrDataBodySupplementaryText = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly primary: PrismicIrDataBodySupplementaryTextPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicIrDataBodySupplementaryTextPrimary = {
  readonly text: Maybe<PrismicStructuredTextType>;
};

type PrismicIrDataType = {
  readonly attachment_group: Maybe<ReadonlyArray<Maybe<PrismicIrDataAttachmentGroup>>>;
  readonly body: ReadonlyArray<PrismicIrDataBodySlicesType>;
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicIrDataTypeFilterInput = {
  readonly attachment_group: InputMaybe<PrismicIrDataAttachmentGroupFilterListInput>;
  readonly title: InputMaybe<PrismicStructuredTextTypeFilterInput>;
};

type PrismicIrEdge = {
  readonly next: Maybe<PrismicIr>;
  readonly node: PrismicIr;
  readonly previous: Maybe<PrismicIr>;
};

type PrismicIrFieldsEnum =
  | '_previewable'
  | 'alternate_languages'
  | 'alternate_languages.id'
  | 'alternate_languages.lang'
  | 'alternate_languages.raw'
  | 'alternate_languages.type'
  | 'alternate_languages.uid'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'dataRaw'
  | 'data.attachment_group'
  | 'data.attachment_group.file.id'
  | 'data.attachment_group.file.isBroken'
  | 'data.attachment_group.file.lang'
  | 'data.attachment_group.file.link_type'
  | 'data.attachment_group.file.raw'
  | 'data.attachment_group.file.size'
  | 'data.attachment_group.file.slug'
  | 'data.attachment_group.file.tags'
  | 'data.attachment_group.file.target'
  | 'data.attachment_group.file.type'
  | 'data.attachment_group.file.uid'
  | 'data.attachment_group.file.url'
  | 'data.title.html'
  | 'data.title.raw'
  | 'data.title.richText'
  | 'data.title.text'
  | 'first_publication_date'
  | 'href'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'lang'
  | 'last_publication_date'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'prismicId'
  | 'tags'
  | 'type'
  | 'url';

type PrismicIrFilterInput = {
  readonly _previewable: InputMaybe<IDQueryOperatorInput>;
  readonly alternate_languages: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly data: InputMaybe<PrismicIrDataTypeFilterInput>;
  readonly dataRaw: InputMaybe<JSONQueryOperatorInput>;
  readonly first_publication_date: InputMaybe<DateQueryOperatorInput>;
  readonly href: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly lang: InputMaybe<StringQueryOperatorInput>;
  readonly last_publication_date: InputMaybe<DateQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prismicId: InputMaybe<IDQueryOperatorInput>;
  readonly tags: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicIrGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicIrEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<PrismicIrGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicIr>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicIrGroupConnection_distinctArgs = {
  field: PrismicIrFieldsEnum;
};


type PrismicIrGroupConnection_groupArgs = {
  field: PrismicIrFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
};


type PrismicIrGroupConnection_maxArgs = {
  field: PrismicIrFieldsEnum;
};


type PrismicIrGroupConnection_minArgs = {
  field: PrismicIrFieldsEnum;
};


type PrismicIrGroupConnection_sumArgs = {
  field: PrismicIrFieldsEnum;
};

type PrismicIrSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<PrismicIrFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type PrismicLinkType = {
  readonly document: Maybe<PrismicAllDocumentTypes>;
  readonly id: Maybe<Scalars['ID']>;
  readonly isBroken: Maybe<Scalars['Boolean']>;
  readonly lang: Maybe<Scalars['String']>;
  readonly link_type: Maybe<PrismicLinkTypeEnum>;
  readonly localFile: Maybe<File>;
  readonly raw: Maybe<Scalars['JSON']>;
  readonly size: Maybe<Scalars['Int']>;
  readonly slug: Maybe<Scalars['String']>;
  readonly tags: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly target: Maybe<Scalars['String']>;
  readonly type: Maybe<Scalars['String']>;
  readonly uid: Maybe<Scalars['String']>;
  readonly url: Maybe<Scalars['String']>;
};

type PrismicLinkTypeEnum =
  | 'Any'
  | 'Document'
  | 'Media'
  | 'Web';

type PrismicLinkTypeEnumQueryOperatorInput = {
  readonly eq: InputMaybe<PrismicLinkTypeEnum>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<PrismicLinkTypeEnum>>>;
  readonly ne: InputMaybe<PrismicLinkTypeEnum>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<PrismicLinkTypeEnum>>>;
};

type PrismicLinkTypeFilterInput = {
  readonly id: InputMaybe<IDQueryOperatorInput>;
  readonly isBroken: InputMaybe<BooleanQueryOperatorInput>;
  readonly lang: InputMaybe<StringQueryOperatorInput>;
  readonly link_type: InputMaybe<PrismicLinkTypeEnumQueryOperatorInput>;
  readonly localFile: InputMaybe<FileFilterInput>;
  readonly raw: InputMaybe<JSONQueryOperatorInput>;
  readonly size: InputMaybe<IntQueryOperatorInput>;
  readonly slug: InputMaybe<StringQueryOperatorInput>;
  readonly tags: InputMaybe<StringQueryOperatorInput>;
  readonly target: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
  readonly uid: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicMemberProfile = Node & {
  readonly _previewable: Scalars['ID'];
  readonly alternate_languages: ReadonlyArray<PrismicAlternateLanguageType>;
  readonly children: ReadonlyArray<Node>;
  readonly data: PrismicMemberProfileDataType;
  readonly dataRaw: Scalars['JSON'];
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly parent: Maybe<Node>;
  readonly prismicId: Scalars['ID'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
};


type PrismicMemberProfile_first_publication_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type PrismicMemberProfile_last_publication_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type PrismicMemberProfileConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicMemberProfileEdge>;
  readonly group: ReadonlyArray<PrismicMemberProfileGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicMemberProfile>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicMemberProfileConnection_distinctArgs = {
  field: PrismicMemberProfileFieldsEnum;
};


type PrismicMemberProfileConnection_groupArgs = {
  field: PrismicMemberProfileFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type PrismicMemberProfileDataImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicMemberProfileDataImageImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicMemberProfileDataImageImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicMemberProfileDataImageImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicMemberProfileDataImageImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicMemberProfileDataImageImageTypeFilterInput = {
  readonly alt: InputMaybe<StringQueryOperatorInput>;
  readonly copyright: InputMaybe<StringQueryOperatorInput>;
  readonly dimensions: InputMaybe<PrismicImageDimensionsTypeFilterInput>;
  readonly fixed: InputMaybe<ImgixFixedFilterInput>;
  readonly fluid: InputMaybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: InputMaybe<JSONQueryOperatorInput>;
  readonly localFile: InputMaybe<FileFilterInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicMemberProfileDataType = {
  readonly email: Maybe<Scalars['String']>;
  readonly image: Maybe<PrismicMemberProfileDataImageImageType>;
  readonly name: Maybe<Scalars['String']>;
  readonly nickname: Maybe<Scalars['String']>;
  readonly role: Maybe<Scalars['String']>;
};

type PrismicMemberProfileDataTypeFilterInput = {
  readonly email: InputMaybe<StringQueryOperatorInput>;
  readonly image: InputMaybe<PrismicMemberProfileDataImageImageTypeFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nickname: InputMaybe<StringQueryOperatorInput>;
  readonly role: InputMaybe<StringQueryOperatorInput>;
};

type PrismicMemberProfileEdge = {
  readonly next: Maybe<PrismicMemberProfile>;
  readonly node: PrismicMemberProfile;
  readonly previous: Maybe<PrismicMemberProfile>;
};

type PrismicMemberProfileFieldsEnum =
  | '_previewable'
  | 'alternate_languages'
  | 'alternate_languages.id'
  | 'alternate_languages.lang'
  | 'alternate_languages.raw'
  | 'alternate_languages.type'
  | 'alternate_languages.uid'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'dataRaw'
  | 'data.email'
  | 'data.image.alt'
  | 'data.image.copyright'
  | 'data.image.dimensions.height'
  | 'data.image.dimensions.width'
  | 'data.image.fixed.base64'
  | 'data.image.fixed.height'
  | 'data.image.fixed.sizes'
  | 'data.image.fixed.src'
  | 'data.image.fixed.srcSet'
  | 'data.image.fixed.srcSetWebp'
  | 'data.image.fixed.srcWebp'
  | 'data.image.fixed.width'
  | 'data.image.fluid.aspectRatio'
  | 'data.image.fluid.base64'
  | 'data.image.fluid.sizes'
  | 'data.image.fluid.src'
  | 'data.image.fluid.srcSet'
  | 'data.image.fluid.srcSetWebp'
  | 'data.image.fluid.srcWebp'
  | 'data.image.gatsbyImageData'
  | 'data.image.localFile.absolutePath'
  | 'data.image.localFile.accessTime'
  | 'data.image.localFile.atime'
  | 'data.image.localFile.atimeMs'
  | 'data.image.localFile.base'
  | 'data.image.localFile.birthTime'
  | 'data.image.localFile.birthtime'
  | 'data.image.localFile.birthtimeMs'
  | 'data.image.localFile.blksize'
  | 'data.image.localFile.blocks'
  | 'data.image.localFile.changeTime'
  | 'data.image.localFile.children'
  | 'data.image.localFile.childrenImageSharp'
  | 'data.image.localFile.ctime'
  | 'data.image.localFile.ctimeMs'
  | 'data.image.localFile.dev'
  | 'data.image.localFile.dir'
  | 'data.image.localFile.ext'
  | 'data.image.localFile.extension'
  | 'data.image.localFile.gid'
  | 'data.image.localFile.id'
  | 'data.image.localFile.ino'
  | 'data.image.localFile.mode'
  | 'data.image.localFile.modifiedTime'
  | 'data.image.localFile.mtime'
  | 'data.image.localFile.mtimeMs'
  | 'data.image.localFile.name'
  | 'data.image.localFile.nlink'
  | 'data.image.localFile.prettySize'
  | 'data.image.localFile.rdev'
  | 'data.image.localFile.relativeDirectory'
  | 'data.image.localFile.relativePath'
  | 'data.image.localFile.root'
  | 'data.image.localFile.size'
  | 'data.image.localFile.sourceInstanceName'
  | 'data.image.localFile.uid'
  | 'data.image.localFile.url'
  | 'data.image.url'
  | 'data.name'
  | 'data.nickname'
  | 'data.role'
  | 'first_publication_date'
  | 'href'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'lang'
  | 'last_publication_date'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'prismicId'
  | 'tags'
  | 'type'
  | 'url';

type PrismicMemberProfileFilterInput = {
  readonly _previewable: InputMaybe<IDQueryOperatorInput>;
  readonly alternate_languages: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly data: InputMaybe<PrismicMemberProfileDataTypeFilterInput>;
  readonly dataRaw: InputMaybe<JSONQueryOperatorInput>;
  readonly first_publication_date: InputMaybe<DateQueryOperatorInput>;
  readonly href: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly lang: InputMaybe<StringQueryOperatorInput>;
  readonly last_publication_date: InputMaybe<DateQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prismicId: InputMaybe<IDQueryOperatorInput>;
  readonly tags: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicMemberProfileGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicMemberProfileEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<PrismicMemberProfileGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicMemberProfile>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicMemberProfileGroupConnection_distinctArgs = {
  field: PrismicMemberProfileFieldsEnum;
};


type PrismicMemberProfileGroupConnection_groupArgs = {
  field: PrismicMemberProfileFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type PrismicMemberProfileSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<PrismicMemberProfileFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type PrismicPayContents = Node & {
  readonly _previewable: Scalars['ID'];
  readonly alternate_languages: ReadonlyArray<PrismicAlternateLanguageType>;
  readonly children: ReadonlyArray<Node>;
  readonly data: PrismicPayContentsDataType;
  readonly dataRaw: Scalars['JSON'];
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly parent: Maybe<Node>;
  readonly prismicId: Scalars['ID'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
};


type PrismicPayContents_first_publication_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type PrismicPayContents_last_publication_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type PrismicPayContentsConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicPayContentsEdge>;
  readonly group: ReadonlyArray<PrismicPayContentsGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicPayContents>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicPayContentsConnection_distinctArgs = {
  field: PrismicPayContentsFieldsEnum;
};


type PrismicPayContentsConnection_groupArgs = {
  field: PrismicPayContentsFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type PrismicPayContentsDataBodyHero = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly primary: PrismicPayContentsDataBodyHeroPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicPayContentsDataBodyHeroPrimary = {
  readonly image: Maybe<PrismicPayContentsDataBodyHeroPrimaryImageImageType>;
};

type PrismicPayContentsDataBodyHeroPrimaryImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicPayContentsDataBodyHeroPrimaryImageImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicPayContentsDataBodyHeroPrimaryImageImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicPayContentsDataBodyHeroPrimaryImageImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicPayContentsDataBodyHeroPrimaryImageImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicPayContentsDataBodySlicesType = PrismicPayContentsDataBodyHero | PrismicPayContentsDataBodyTitleAndDescription | PrismicPayContentsDataBodyTitleAndIllustration | PrismicPayContentsDataBodyWideBanner;

type PrismicPayContentsDataBodyTitleAndDescription = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly primary: PrismicPayContentsDataBodyTitleAndDescriptionPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicPayContentsDataBodyTitleAndDescriptionPrimary = {
  readonly description: Maybe<PrismicStructuredTextType>;
  readonly inverted: Maybe<Scalars['Boolean']>;
  readonly key_text: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicLinkType>;
  readonly link_text: Maybe<Scalars['String']>;
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicPayContentsDataBodyTitleAndIllustration = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly primary: PrismicPayContentsDataBodyTitleAndIllustrationPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
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

type PrismicPayContentsDataBodyTitleAndIllustrationPrimaryIllustrationImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicPayContentsDataBodyTitleAndIllustrationPrimaryIllustrationImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicPayContentsDataBodyTitleAndIllustrationPrimaryIllustrationImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicPayContentsDataBodyTitleAndIllustrationPrimaryIllustrationImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicPayContentsDataBodyTitleAndIllustrationPrimaryIllustrationImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicPayContentsDataBodyWideBanner = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly primary: PrismicPayContentsDataBodyWideBannerPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicPayContentsDataBodyWideBannerPrimary = {
  readonly background_color: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicLinkType>;
  readonly link_text: Maybe<Scalars['String']>;
  readonly thumbnail: Maybe<PrismicPayContentsDataBodyWideBannerPrimaryThumbnailImageType>;
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicPayContentsDataBodyWideBannerPrimaryThumbnailImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicPayContentsDataBodyWideBannerPrimaryThumbnailImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicPayContentsDataBodyWideBannerPrimaryThumbnailImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicPayContentsDataBodyWideBannerPrimaryThumbnailImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicPayContentsDataBodyWideBannerPrimaryThumbnailImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicPayContentsDataLogoIconImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicPayContentsDataLogoIconImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicPayContentsDataLogoIconImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicPayContentsDataLogoIconImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicPayContentsDataLogoIconImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicPayContentsDataLogoIconImageTypeFilterInput = {
  readonly alt: InputMaybe<StringQueryOperatorInput>;
  readonly copyright: InputMaybe<StringQueryOperatorInput>;
  readonly dimensions: InputMaybe<PrismicImageDimensionsTypeFilterInput>;
  readonly fixed: InputMaybe<ImgixFixedFilterInput>;
  readonly fluid: InputMaybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: InputMaybe<JSONQueryOperatorInput>;
  readonly localFile: InputMaybe<FileFilterInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicPayContentsDataType = {
  readonly body: ReadonlyArray<PrismicPayContentsDataBodySlicesType>;
  readonly logo_icon: Maybe<PrismicPayContentsDataLogoIconImageType>;
};

type PrismicPayContentsDataTypeFilterInput = {
  readonly logo_icon: InputMaybe<PrismicPayContentsDataLogoIconImageTypeFilterInput>;
};

type PrismicPayContentsEdge = {
  readonly next: Maybe<PrismicPayContents>;
  readonly node: PrismicPayContents;
  readonly previous: Maybe<PrismicPayContents>;
};

type PrismicPayContentsFieldsEnum =
  | '_previewable'
  | 'alternate_languages'
  | 'alternate_languages.id'
  | 'alternate_languages.lang'
  | 'alternate_languages.raw'
  | 'alternate_languages.type'
  | 'alternate_languages.uid'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'dataRaw'
  | 'data.logo_icon.alt'
  | 'data.logo_icon.copyright'
  | 'data.logo_icon.dimensions.height'
  | 'data.logo_icon.dimensions.width'
  | 'data.logo_icon.fixed.base64'
  | 'data.logo_icon.fixed.height'
  | 'data.logo_icon.fixed.sizes'
  | 'data.logo_icon.fixed.src'
  | 'data.logo_icon.fixed.srcSet'
  | 'data.logo_icon.fixed.srcSetWebp'
  | 'data.logo_icon.fixed.srcWebp'
  | 'data.logo_icon.fixed.width'
  | 'data.logo_icon.fluid.aspectRatio'
  | 'data.logo_icon.fluid.base64'
  | 'data.logo_icon.fluid.sizes'
  | 'data.logo_icon.fluid.src'
  | 'data.logo_icon.fluid.srcSet'
  | 'data.logo_icon.fluid.srcSetWebp'
  | 'data.logo_icon.fluid.srcWebp'
  | 'data.logo_icon.gatsbyImageData'
  | 'data.logo_icon.localFile.absolutePath'
  | 'data.logo_icon.localFile.accessTime'
  | 'data.logo_icon.localFile.atime'
  | 'data.logo_icon.localFile.atimeMs'
  | 'data.logo_icon.localFile.base'
  | 'data.logo_icon.localFile.birthTime'
  | 'data.logo_icon.localFile.birthtime'
  | 'data.logo_icon.localFile.birthtimeMs'
  | 'data.logo_icon.localFile.blksize'
  | 'data.logo_icon.localFile.blocks'
  | 'data.logo_icon.localFile.changeTime'
  | 'data.logo_icon.localFile.children'
  | 'data.logo_icon.localFile.childrenImageSharp'
  | 'data.logo_icon.localFile.ctime'
  | 'data.logo_icon.localFile.ctimeMs'
  | 'data.logo_icon.localFile.dev'
  | 'data.logo_icon.localFile.dir'
  | 'data.logo_icon.localFile.ext'
  | 'data.logo_icon.localFile.extension'
  | 'data.logo_icon.localFile.gid'
  | 'data.logo_icon.localFile.id'
  | 'data.logo_icon.localFile.ino'
  | 'data.logo_icon.localFile.mode'
  | 'data.logo_icon.localFile.modifiedTime'
  | 'data.logo_icon.localFile.mtime'
  | 'data.logo_icon.localFile.mtimeMs'
  | 'data.logo_icon.localFile.name'
  | 'data.logo_icon.localFile.nlink'
  | 'data.logo_icon.localFile.prettySize'
  | 'data.logo_icon.localFile.rdev'
  | 'data.logo_icon.localFile.relativeDirectory'
  | 'data.logo_icon.localFile.relativePath'
  | 'data.logo_icon.localFile.root'
  | 'data.logo_icon.localFile.size'
  | 'data.logo_icon.localFile.sourceInstanceName'
  | 'data.logo_icon.localFile.uid'
  | 'data.logo_icon.localFile.url'
  | 'data.logo_icon.url'
  | 'first_publication_date'
  | 'href'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'lang'
  | 'last_publication_date'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'prismicId'
  | 'tags'
  | 'type'
  | 'url';

type PrismicPayContentsFilterInput = {
  readonly _previewable: InputMaybe<IDQueryOperatorInput>;
  readonly alternate_languages: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly data: InputMaybe<PrismicPayContentsDataTypeFilterInput>;
  readonly dataRaw: InputMaybe<JSONQueryOperatorInput>;
  readonly first_publication_date: InputMaybe<DateQueryOperatorInput>;
  readonly href: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly lang: InputMaybe<StringQueryOperatorInput>;
  readonly last_publication_date: InputMaybe<DateQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prismicId: InputMaybe<IDQueryOperatorInput>;
  readonly tags: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicPayContentsGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicPayContentsEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<PrismicPayContentsGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicPayContents>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicPayContentsGroupConnection_distinctArgs = {
  field: PrismicPayContentsFieldsEnum;
};


type PrismicPayContentsGroupConnection_groupArgs = {
  field: PrismicPayContentsFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type PrismicPayContentsSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<PrismicPayContentsFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type PrismicSharedSliceType = {
  readonly id: Scalars['ID'];
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
  readonly variation: Scalars['String'];
  readonly version: Scalars['String'];
};

type PrismicSiteNavigation = Node & {
  readonly _previewable: Scalars['ID'];
  readonly alternate_languages: ReadonlyArray<PrismicAlternateLanguageType>;
  readonly children: ReadonlyArray<Node>;
  readonly data: PrismicSiteNavigationDataType;
  readonly dataRaw: Scalars['JSON'];
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly parent: Maybe<Node>;
  readonly prismicId: Scalars['ID'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly uid: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
};


type PrismicSiteNavigation_first_publication_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type PrismicSiteNavigation_last_publication_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type PrismicSiteNavigationConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicSiteNavigationEdge>;
  readonly group: ReadonlyArray<PrismicSiteNavigationGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicSiteNavigation>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicSiteNavigationConnection_distinctArgs = {
  field: PrismicSiteNavigationFieldsEnum;
};


type PrismicSiteNavigationConnection_groupArgs = {
  field: PrismicSiteNavigationFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type PrismicSiteNavigationDataContactGroup = {
  readonly contact_info: Maybe<PrismicStructuredTextType>;
};

type PrismicSiteNavigationDataContactGroupFilterInput = {
  readonly contact_info: InputMaybe<PrismicStructuredTextTypeFilterInput>;
};

type PrismicSiteNavigationDataContactGroupFilterListInput = {
  readonly elemMatch: InputMaybe<PrismicSiteNavigationDataContactGroupFilterInput>;
};

type PrismicSiteNavigationDataFooterEntries = {
  readonly display_text: Maybe<Scalars['String']>;
  readonly group: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicLinkType>;
  readonly new_tab: Maybe<Scalars['Boolean']>;
};

type PrismicSiteNavigationDataFooterEntriesFilterInput = {
  readonly display_text: InputMaybe<StringQueryOperatorInput>;
  readonly group: InputMaybe<StringQueryOperatorInput>;
  readonly link: InputMaybe<PrismicLinkTypeFilterInput>;
  readonly new_tab: InputMaybe<BooleanQueryOperatorInput>;
};

type PrismicSiteNavigationDataFooterEntriesFilterListInput = {
  readonly elemMatch: InputMaybe<PrismicSiteNavigationDataFooterEntriesFilterInput>;
};

type PrismicSiteNavigationDataHeaderEntries = {
  readonly display_text: Maybe<Scalars['String']>;
  readonly group: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicLinkType>;
  readonly new_tab: Maybe<Scalars['Boolean']>;
};

type PrismicSiteNavigationDataHeaderEntriesFilterInput = {
  readonly display_text: InputMaybe<StringQueryOperatorInput>;
  readonly group: InputMaybe<StringQueryOperatorInput>;
  readonly link: InputMaybe<PrismicLinkTypeFilterInput>;
  readonly new_tab: InputMaybe<BooleanQueryOperatorInput>;
};

type PrismicSiteNavigationDataHeaderEntriesFilterListInput = {
  readonly elemMatch: InputMaybe<PrismicSiteNavigationDataHeaderEntriesFilterInput>;
};

type PrismicSiteNavigationDataSnsProfiles = {
  readonly link: Maybe<PrismicLinkType>;
  readonly service: Maybe<Scalars['String']>;
};

type PrismicSiteNavigationDataSnsProfilesFilterInput = {
  readonly link: InputMaybe<PrismicLinkTypeFilterInput>;
  readonly service: InputMaybe<StringQueryOperatorInput>;
};

type PrismicSiteNavigationDataSnsProfilesFilterListInput = {
  readonly elemMatch: InputMaybe<PrismicSiteNavigationDataSnsProfilesFilterInput>;
};

type PrismicSiteNavigationDataType = {
  readonly address: Maybe<PrismicStructuredTextType>;
  readonly contact_group: Maybe<ReadonlyArray<Maybe<PrismicSiteNavigationDataContactGroup>>>;
  readonly copyright: Maybe<PrismicStructuredTextType>;
  readonly email: Maybe<PrismicStructuredTextType>;
  readonly footer_entries: ReadonlyArray<PrismicSiteNavigationDataFooterEntries>;
  readonly header_entries: ReadonlyArray<PrismicSiteNavigationDataHeaderEntries>;
  readonly sns_profiles: ReadonlyArray<PrismicSiteNavigationDataSnsProfiles>;
  readonly tel: Maybe<PrismicStructuredTextType>;
};

type PrismicSiteNavigationDataTypeFilterInput = {
  readonly address: InputMaybe<PrismicStructuredTextTypeFilterInput>;
  readonly contact_group: InputMaybe<PrismicSiteNavigationDataContactGroupFilterListInput>;
  readonly copyright: InputMaybe<PrismicStructuredTextTypeFilterInput>;
  readonly email: InputMaybe<PrismicStructuredTextTypeFilterInput>;
  readonly footer_entries: InputMaybe<PrismicSiteNavigationDataFooterEntriesFilterListInput>;
  readonly header_entries: InputMaybe<PrismicSiteNavigationDataHeaderEntriesFilterListInput>;
  readonly sns_profiles: InputMaybe<PrismicSiteNavigationDataSnsProfilesFilterListInput>;
  readonly tel: InputMaybe<PrismicStructuredTextTypeFilterInput>;
};

type PrismicSiteNavigationEdge = {
  readonly next: Maybe<PrismicSiteNavigation>;
  readonly node: PrismicSiteNavigation;
  readonly previous: Maybe<PrismicSiteNavigation>;
};

type PrismicSiteNavigationFieldsEnum =
  | '_previewable'
  | 'alternate_languages'
  | 'alternate_languages.id'
  | 'alternate_languages.lang'
  | 'alternate_languages.raw'
  | 'alternate_languages.type'
  | 'alternate_languages.uid'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'dataRaw'
  | 'data.address.html'
  | 'data.address.raw'
  | 'data.address.richText'
  | 'data.address.text'
  | 'data.contact_group'
  | 'data.contact_group.contact_info.html'
  | 'data.contact_group.contact_info.raw'
  | 'data.contact_group.contact_info.richText'
  | 'data.contact_group.contact_info.text'
  | 'data.copyright.html'
  | 'data.copyright.raw'
  | 'data.copyright.richText'
  | 'data.copyright.text'
  | 'data.email.html'
  | 'data.email.raw'
  | 'data.email.richText'
  | 'data.email.text'
  | 'data.footer_entries'
  | 'data.footer_entries.display_text'
  | 'data.footer_entries.group'
  | 'data.footer_entries.link.id'
  | 'data.footer_entries.link.isBroken'
  | 'data.footer_entries.link.lang'
  | 'data.footer_entries.link.link_type'
  | 'data.footer_entries.link.raw'
  | 'data.footer_entries.link.size'
  | 'data.footer_entries.link.slug'
  | 'data.footer_entries.link.tags'
  | 'data.footer_entries.link.target'
  | 'data.footer_entries.link.type'
  | 'data.footer_entries.link.uid'
  | 'data.footer_entries.link.url'
  | 'data.footer_entries.new_tab'
  | 'data.header_entries'
  | 'data.header_entries.display_text'
  | 'data.header_entries.group'
  | 'data.header_entries.link.id'
  | 'data.header_entries.link.isBroken'
  | 'data.header_entries.link.lang'
  | 'data.header_entries.link.link_type'
  | 'data.header_entries.link.raw'
  | 'data.header_entries.link.size'
  | 'data.header_entries.link.slug'
  | 'data.header_entries.link.tags'
  | 'data.header_entries.link.target'
  | 'data.header_entries.link.type'
  | 'data.header_entries.link.uid'
  | 'data.header_entries.link.url'
  | 'data.header_entries.new_tab'
  | 'data.sns_profiles'
  | 'data.sns_profiles.link.id'
  | 'data.sns_profiles.link.isBroken'
  | 'data.sns_profiles.link.lang'
  | 'data.sns_profiles.link.link_type'
  | 'data.sns_profiles.link.raw'
  | 'data.sns_profiles.link.size'
  | 'data.sns_profiles.link.slug'
  | 'data.sns_profiles.link.tags'
  | 'data.sns_profiles.link.target'
  | 'data.sns_profiles.link.type'
  | 'data.sns_profiles.link.uid'
  | 'data.sns_profiles.link.url'
  | 'data.sns_profiles.service'
  | 'data.tel.html'
  | 'data.tel.raw'
  | 'data.tel.richText'
  | 'data.tel.text'
  | 'first_publication_date'
  | 'href'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'lang'
  | 'last_publication_date'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'prismicId'
  | 'tags'
  | 'type'
  | 'uid'
  | 'url';

type PrismicSiteNavigationFilterInput = {
  readonly _previewable: InputMaybe<IDQueryOperatorInput>;
  readonly alternate_languages: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly data: InputMaybe<PrismicSiteNavigationDataTypeFilterInput>;
  readonly dataRaw: InputMaybe<JSONQueryOperatorInput>;
  readonly first_publication_date: InputMaybe<DateQueryOperatorInput>;
  readonly href: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly lang: InputMaybe<StringQueryOperatorInput>;
  readonly last_publication_date: InputMaybe<DateQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prismicId: InputMaybe<IDQueryOperatorInput>;
  readonly tags: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
  readonly uid: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicSiteNavigationGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicSiteNavigationEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<PrismicSiteNavigationGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicSiteNavigation>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicSiteNavigationGroupConnection_distinctArgs = {
  field: PrismicSiteNavigationFieldsEnum;
};


type PrismicSiteNavigationGroupConnection_groupArgs = {
  field: PrismicSiteNavigationFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type PrismicSiteNavigationSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<PrismicSiteNavigationFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type PrismicSliceType = {
  readonly id: Scalars['ID'];
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicStructuredTextQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['PrismicStructuredText']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['PrismicStructuredText']>>>;
  readonly ne: InputMaybe<Scalars['PrismicStructuredText']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['PrismicStructuredText']>>>;
};

type PrismicStructuredTextType = {
  readonly html: Maybe<Scalars['String']>;
  /** @deprecated This field has been renamed to `richText`. The `richText` field has the same value the `raw` field. */
  readonly raw: Scalars['PrismicStructuredText'];
  readonly richText: Scalars['PrismicStructuredText'];
  readonly text: Maybe<Scalars['String']>;
};

type PrismicStructuredTextTypeFilterInput = {
  readonly html: InputMaybe<StringQueryOperatorInput>;
  readonly raw: InputMaybe<PrismicStructuredTextQueryOperatorInput>;
  readonly richText: InputMaybe<PrismicStructuredTextQueryOperatorInput>;
  readonly text: InputMaybe<StringQueryOperatorInput>;
};

type PrismicTeamBanner = Node & {
  readonly _previewable: Scalars['ID'];
  readonly alternate_languages: ReadonlyArray<PrismicAlternateLanguageType>;
  readonly children: ReadonlyArray<Node>;
  readonly data: PrismicTeamBannerDataType;
  readonly dataRaw: Scalars['JSON'];
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly parent: Maybe<Node>;
  readonly prismicId: Scalars['ID'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
};


type PrismicTeamBanner_first_publication_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type PrismicTeamBanner_last_publication_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type PrismicTeamBannerConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicTeamBannerEdge>;
  readonly group: ReadonlyArray<PrismicTeamBannerGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicTeamBanner>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicTeamBannerConnection_distinctArgs = {
  field: PrismicTeamBannerFieldsEnum;
};


type PrismicTeamBannerConnection_groupArgs = {
  field: PrismicTeamBannerFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type PrismicTeamBannerDataImage360ImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicTeamBannerDataImage360ImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicTeamBannerDataImage360ImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicTeamBannerDataImage360ImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicTeamBannerDataImage360ImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicTeamBannerDataImage360ImageTypeFilterInput = {
  readonly alt: InputMaybe<StringQueryOperatorInput>;
  readonly copyright: InputMaybe<StringQueryOperatorInput>;
  readonly dimensions: InputMaybe<PrismicImageDimensionsTypeFilterInput>;
  readonly fixed: InputMaybe<ImgixFixedFilterInput>;
  readonly fluid: InputMaybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: InputMaybe<JSONQueryOperatorInput>;
  readonly localFile: InputMaybe<FileFilterInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicTeamBannerDataImage576ImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicTeamBannerDataImage576ImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicTeamBannerDataImage576ImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicTeamBannerDataImage576ImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicTeamBannerDataImage576ImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicTeamBannerDataImage576ImageTypeFilterInput = {
  readonly alt: InputMaybe<StringQueryOperatorInput>;
  readonly copyright: InputMaybe<StringQueryOperatorInput>;
  readonly dimensions: InputMaybe<PrismicImageDimensionsTypeFilterInput>;
  readonly fixed: InputMaybe<ImgixFixedFilterInput>;
  readonly fluid: InputMaybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: InputMaybe<JSONQueryOperatorInput>;
  readonly localFile: InputMaybe<FileFilterInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicTeamBannerDataImage768ImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicTeamBannerDataImage768ImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicTeamBannerDataImage768ImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicTeamBannerDataImage768ImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicTeamBannerDataImage768ImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicTeamBannerDataImage768ImageTypeFilterInput = {
  readonly alt: InputMaybe<StringQueryOperatorInput>;
  readonly copyright: InputMaybe<StringQueryOperatorInput>;
  readonly dimensions: InputMaybe<PrismicImageDimensionsTypeFilterInput>;
  readonly fixed: InputMaybe<ImgixFixedFilterInput>;
  readonly fluid: InputMaybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: InputMaybe<JSONQueryOperatorInput>;
  readonly localFile: InputMaybe<FileFilterInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicTeamBannerDataType = {
  readonly background_color: Maybe<Scalars['String']>;
  readonly href: Maybe<PrismicLinkType>;
  readonly image_360: Maybe<PrismicTeamBannerDataImage360ImageType>;
  readonly image_576: Maybe<PrismicTeamBannerDataImage576ImageType>;
  readonly image_768: Maybe<PrismicTeamBannerDataImage768ImageType>;
};

type PrismicTeamBannerDataTypeFilterInput = {
  readonly background_color: InputMaybe<StringQueryOperatorInput>;
  readonly href: InputMaybe<PrismicLinkTypeFilterInput>;
  readonly image_360: InputMaybe<PrismicTeamBannerDataImage360ImageTypeFilterInput>;
  readonly image_576: InputMaybe<PrismicTeamBannerDataImage576ImageTypeFilterInput>;
  readonly image_768: InputMaybe<PrismicTeamBannerDataImage768ImageTypeFilterInput>;
};

type PrismicTeamBannerEdge = {
  readonly next: Maybe<PrismicTeamBanner>;
  readonly node: PrismicTeamBanner;
  readonly previous: Maybe<PrismicTeamBanner>;
};

type PrismicTeamBannerFieldsEnum =
  | '_previewable'
  | 'alternate_languages'
  | 'alternate_languages.id'
  | 'alternate_languages.lang'
  | 'alternate_languages.raw'
  | 'alternate_languages.type'
  | 'alternate_languages.uid'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'dataRaw'
  | 'data.background_color'
  | 'data.href.id'
  | 'data.href.isBroken'
  | 'data.href.lang'
  | 'data.href.link_type'
  | 'data.href.localFile.absolutePath'
  | 'data.href.localFile.accessTime'
  | 'data.href.localFile.atime'
  | 'data.href.localFile.atimeMs'
  | 'data.href.localFile.base'
  | 'data.href.localFile.birthTime'
  | 'data.href.localFile.birthtime'
  | 'data.href.localFile.birthtimeMs'
  | 'data.href.localFile.blksize'
  | 'data.href.localFile.blocks'
  | 'data.href.localFile.changeTime'
  | 'data.href.localFile.children'
  | 'data.href.localFile.childrenImageSharp'
  | 'data.href.localFile.ctime'
  | 'data.href.localFile.ctimeMs'
  | 'data.href.localFile.dev'
  | 'data.href.localFile.dir'
  | 'data.href.localFile.ext'
  | 'data.href.localFile.extension'
  | 'data.href.localFile.gid'
  | 'data.href.localFile.id'
  | 'data.href.localFile.ino'
  | 'data.href.localFile.mode'
  | 'data.href.localFile.modifiedTime'
  | 'data.href.localFile.mtime'
  | 'data.href.localFile.mtimeMs'
  | 'data.href.localFile.name'
  | 'data.href.localFile.nlink'
  | 'data.href.localFile.prettySize'
  | 'data.href.localFile.rdev'
  | 'data.href.localFile.relativeDirectory'
  | 'data.href.localFile.relativePath'
  | 'data.href.localFile.root'
  | 'data.href.localFile.size'
  | 'data.href.localFile.sourceInstanceName'
  | 'data.href.localFile.uid'
  | 'data.href.localFile.url'
  | 'data.href.raw'
  | 'data.href.size'
  | 'data.href.slug'
  | 'data.href.tags'
  | 'data.href.target'
  | 'data.href.type'
  | 'data.href.uid'
  | 'data.href.url'
  | 'data.image_360.alt'
  | 'data.image_360.copyright'
  | 'data.image_360.dimensions.height'
  | 'data.image_360.dimensions.width'
  | 'data.image_360.fixed.base64'
  | 'data.image_360.fixed.height'
  | 'data.image_360.fixed.sizes'
  | 'data.image_360.fixed.src'
  | 'data.image_360.fixed.srcSet'
  | 'data.image_360.fixed.srcSetWebp'
  | 'data.image_360.fixed.srcWebp'
  | 'data.image_360.fixed.width'
  | 'data.image_360.fluid.aspectRatio'
  | 'data.image_360.fluid.base64'
  | 'data.image_360.fluid.sizes'
  | 'data.image_360.fluid.src'
  | 'data.image_360.fluid.srcSet'
  | 'data.image_360.fluid.srcSetWebp'
  | 'data.image_360.fluid.srcWebp'
  | 'data.image_360.gatsbyImageData'
  | 'data.image_360.localFile.absolutePath'
  | 'data.image_360.localFile.accessTime'
  | 'data.image_360.localFile.atime'
  | 'data.image_360.localFile.atimeMs'
  | 'data.image_360.localFile.base'
  | 'data.image_360.localFile.birthTime'
  | 'data.image_360.localFile.birthtime'
  | 'data.image_360.localFile.birthtimeMs'
  | 'data.image_360.localFile.blksize'
  | 'data.image_360.localFile.blocks'
  | 'data.image_360.localFile.changeTime'
  | 'data.image_360.localFile.children'
  | 'data.image_360.localFile.childrenImageSharp'
  | 'data.image_360.localFile.ctime'
  | 'data.image_360.localFile.ctimeMs'
  | 'data.image_360.localFile.dev'
  | 'data.image_360.localFile.dir'
  | 'data.image_360.localFile.ext'
  | 'data.image_360.localFile.extension'
  | 'data.image_360.localFile.gid'
  | 'data.image_360.localFile.id'
  | 'data.image_360.localFile.ino'
  | 'data.image_360.localFile.mode'
  | 'data.image_360.localFile.modifiedTime'
  | 'data.image_360.localFile.mtime'
  | 'data.image_360.localFile.mtimeMs'
  | 'data.image_360.localFile.name'
  | 'data.image_360.localFile.nlink'
  | 'data.image_360.localFile.prettySize'
  | 'data.image_360.localFile.rdev'
  | 'data.image_360.localFile.relativeDirectory'
  | 'data.image_360.localFile.relativePath'
  | 'data.image_360.localFile.root'
  | 'data.image_360.localFile.size'
  | 'data.image_360.localFile.sourceInstanceName'
  | 'data.image_360.localFile.uid'
  | 'data.image_360.localFile.url'
  | 'data.image_360.url'
  | 'data.image_576.alt'
  | 'data.image_576.copyright'
  | 'data.image_576.dimensions.height'
  | 'data.image_576.dimensions.width'
  | 'data.image_576.fixed.base64'
  | 'data.image_576.fixed.height'
  | 'data.image_576.fixed.sizes'
  | 'data.image_576.fixed.src'
  | 'data.image_576.fixed.srcSet'
  | 'data.image_576.fixed.srcSetWebp'
  | 'data.image_576.fixed.srcWebp'
  | 'data.image_576.fixed.width'
  | 'data.image_576.fluid.aspectRatio'
  | 'data.image_576.fluid.base64'
  | 'data.image_576.fluid.sizes'
  | 'data.image_576.fluid.src'
  | 'data.image_576.fluid.srcSet'
  | 'data.image_576.fluid.srcSetWebp'
  | 'data.image_576.fluid.srcWebp'
  | 'data.image_576.gatsbyImageData'
  | 'data.image_576.localFile.absolutePath'
  | 'data.image_576.localFile.accessTime'
  | 'data.image_576.localFile.atime'
  | 'data.image_576.localFile.atimeMs'
  | 'data.image_576.localFile.base'
  | 'data.image_576.localFile.birthTime'
  | 'data.image_576.localFile.birthtime'
  | 'data.image_576.localFile.birthtimeMs'
  | 'data.image_576.localFile.blksize'
  | 'data.image_576.localFile.blocks'
  | 'data.image_576.localFile.changeTime'
  | 'data.image_576.localFile.children'
  | 'data.image_576.localFile.childrenImageSharp'
  | 'data.image_576.localFile.ctime'
  | 'data.image_576.localFile.ctimeMs'
  | 'data.image_576.localFile.dev'
  | 'data.image_576.localFile.dir'
  | 'data.image_576.localFile.ext'
  | 'data.image_576.localFile.extension'
  | 'data.image_576.localFile.gid'
  | 'data.image_576.localFile.id'
  | 'data.image_576.localFile.ino'
  | 'data.image_576.localFile.mode'
  | 'data.image_576.localFile.modifiedTime'
  | 'data.image_576.localFile.mtime'
  | 'data.image_576.localFile.mtimeMs'
  | 'data.image_576.localFile.name'
  | 'data.image_576.localFile.nlink'
  | 'data.image_576.localFile.prettySize'
  | 'data.image_576.localFile.rdev'
  | 'data.image_576.localFile.relativeDirectory'
  | 'data.image_576.localFile.relativePath'
  | 'data.image_576.localFile.root'
  | 'data.image_576.localFile.size'
  | 'data.image_576.localFile.sourceInstanceName'
  | 'data.image_576.localFile.uid'
  | 'data.image_576.localFile.url'
  | 'data.image_576.url'
  | 'data.image_768.alt'
  | 'data.image_768.copyright'
  | 'data.image_768.dimensions.height'
  | 'data.image_768.dimensions.width'
  | 'data.image_768.fixed.base64'
  | 'data.image_768.fixed.height'
  | 'data.image_768.fixed.sizes'
  | 'data.image_768.fixed.src'
  | 'data.image_768.fixed.srcSet'
  | 'data.image_768.fixed.srcSetWebp'
  | 'data.image_768.fixed.srcWebp'
  | 'data.image_768.fixed.width'
  | 'data.image_768.fluid.aspectRatio'
  | 'data.image_768.fluid.base64'
  | 'data.image_768.fluid.sizes'
  | 'data.image_768.fluid.src'
  | 'data.image_768.fluid.srcSet'
  | 'data.image_768.fluid.srcSetWebp'
  | 'data.image_768.fluid.srcWebp'
  | 'data.image_768.gatsbyImageData'
  | 'data.image_768.localFile.absolutePath'
  | 'data.image_768.localFile.accessTime'
  | 'data.image_768.localFile.atime'
  | 'data.image_768.localFile.atimeMs'
  | 'data.image_768.localFile.base'
  | 'data.image_768.localFile.birthTime'
  | 'data.image_768.localFile.birthtime'
  | 'data.image_768.localFile.birthtimeMs'
  | 'data.image_768.localFile.blksize'
  | 'data.image_768.localFile.blocks'
  | 'data.image_768.localFile.changeTime'
  | 'data.image_768.localFile.children'
  | 'data.image_768.localFile.childrenImageSharp'
  | 'data.image_768.localFile.ctime'
  | 'data.image_768.localFile.ctimeMs'
  | 'data.image_768.localFile.dev'
  | 'data.image_768.localFile.dir'
  | 'data.image_768.localFile.ext'
  | 'data.image_768.localFile.extension'
  | 'data.image_768.localFile.gid'
  | 'data.image_768.localFile.id'
  | 'data.image_768.localFile.ino'
  | 'data.image_768.localFile.mode'
  | 'data.image_768.localFile.modifiedTime'
  | 'data.image_768.localFile.mtime'
  | 'data.image_768.localFile.mtimeMs'
  | 'data.image_768.localFile.name'
  | 'data.image_768.localFile.nlink'
  | 'data.image_768.localFile.prettySize'
  | 'data.image_768.localFile.rdev'
  | 'data.image_768.localFile.relativeDirectory'
  | 'data.image_768.localFile.relativePath'
  | 'data.image_768.localFile.root'
  | 'data.image_768.localFile.size'
  | 'data.image_768.localFile.sourceInstanceName'
  | 'data.image_768.localFile.uid'
  | 'data.image_768.localFile.url'
  | 'data.image_768.url'
  | 'first_publication_date'
  | 'href'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'lang'
  | 'last_publication_date'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'prismicId'
  | 'tags'
  | 'type'
  | 'url';

type PrismicTeamBannerFilterInput = {
  readonly _previewable: InputMaybe<IDQueryOperatorInput>;
  readonly alternate_languages: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly data: InputMaybe<PrismicTeamBannerDataTypeFilterInput>;
  readonly dataRaw: InputMaybe<JSONQueryOperatorInput>;
  readonly first_publication_date: InputMaybe<DateQueryOperatorInput>;
  readonly href: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly lang: InputMaybe<StringQueryOperatorInput>;
  readonly last_publication_date: InputMaybe<DateQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prismicId: InputMaybe<IDQueryOperatorInput>;
  readonly tags: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicTeamBannerGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicTeamBannerEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<PrismicTeamBannerGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicTeamBanner>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicTeamBannerGroupConnection_distinctArgs = {
  field: PrismicTeamBannerFieldsEnum;
};


type PrismicTeamBannerGroupConnection_groupArgs = {
  field: PrismicTeamBannerFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type PrismicTeamBannerSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<PrismicTeamBannerFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type PrismicTeamContents = Node & {
  readonly _previewable: Scalars['ID'];
  readonly alternate_languages: ReadonlyArray<PrismicAlternateLanguageType>;
  readonly children: ReadonlyArray<Node>;
  readonly data: PrismicTeamContentsDataType;
  readonly dataRaw: Scalars['JSON'];
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly parent: Maybe<Node>;
  readonly prismicId: Scalars['ID'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
};


type PrismicTeamContents_first_publication_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type PrismicTeamContents_last_publication_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type PrismicTeamContentsConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicTeamContentsEdge>;
  readonly group: ReadonlyArray<PrismicTeamContentsGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicTeamContents>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicTeamContentsConnection_distinctArgs = {
  field: PrismicTeamContentsFieldsEnum;
};


type PrismicTeamContentsConnection_groupArgs = {
  field: PrismicTeamContentsFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type PrismicTeamContentsDataCompletedPageLinkGroup = {
  readonly display_text: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicLinkType>;
};

type PrismicTeamContentsDataCompletedPageLinkGroupFilterInput = {
  readonly display_text: InputMaybe<StringQueryOperatorInput>;
  readonly link: InputMaybe<PrismicLinkTypeFilterInput>;
};

type PrismicTeamContentsDataCompletedPageLinkGroupFilterListInput = {
  readonly elemMatch: InputMaybe<PrismicTeamContentsDataCompletedPageLinkGroupFilterInput>;
};

type PrismicTeamContentsDataCultureBodyBenefit = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly items: ReadonlyArray<PrismicTeamContentsDataCultureBodyBenefitItem>;
  readonly primary: PrismicTeamContentsDataCultureBodyBenefitPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicTeamContentsDataCultureBodyBenefitItem = {
  readonly description: Maybe<PrismicStructuredTextType>;
  readonly subtext: Maybe<Scalars['String']>;
  readonly subtitle: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataCultureBodyBenefitPrimary = {
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicTeamContentsDataCultureBodyDivider = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicTeamContentsDataCultureBodyHowWeWork = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly items: ReadonlyArray<PrismicTeamContentsDataCultureBodyHowWeWorkItem>;
  readonly primary: PrismicTeamContentsDataCultureBodyHowWeWorkPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicTeamContentsDataCultureBodyHowWeWorkItem = {
  readonly description: Maybe<PrismicStructuredTextType>;
  readonly group: Maybe<Scalars['String']>;
  readonly key_text: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataCultureBodyHowWeWorkPrimary = {
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicTeamContentsDataCultureBodyIllustrationAndDescription = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly primary: PrismicTeamContentsDataCultureBodyIllustrationAndDescriptionPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicTeamContentsDataCultureBodyIllustrationAndDescriptionPrimary = {
  readonly description: Maybe<PrismicStructuredTextType>;
  readonly expanded: Maybe<Scalars['Boolean']>;
  readonly illustration: Maybe<PrismicTeamContentsDataCultureBodyIllustrationAndDescriptionPrimaryIllustrationImageType>;
  readonly inverted: Maybe<Scalars['Boolean']>;
  readonly link: Maybe<PrismicLinkType>;
  readonly link_text: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataCultureBodyIllustrationAndDescriptionPrimaryIllustrationImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicTeamContentsDataCultureBodyIllustrationAndDescriptionPrimaryIllustrationImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicTeamContentsDataCultureBodyIllustrationAndDescriptionPrimaryIllustrationImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicTeamContentsDataCultureBodyIllustrationAndDescriptionPrimaryIllustrationImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicTeamContentsDataCultureBodyIllustrationAndDescriptionPrimaryIllustrationImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicTeamContentsDataCultureBodyKeyVisual = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly primary: PrismicTeamContentsDataCultureBodyKeyVisualPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicTeamContentsDataCultureBodyKeyVisualPrimary = {
  readonly description: Maybe<PrismicStructuredTextType>;
  readonly expanded: Maybe<Scalars['Boolean']>;
  readonly key_visual_image: Maybe<PrismicTeamContentsDataCultureBodyKeyVisualPrimaryKeyVisualImageImageType>;
};

type PrismicTeamContentsDataCultureBodyKeyVisualPrimaryKeyVisualImageImageThumbnailsType = {
  readonly portrait: Maybe<PrismicImageThumbnailType>;
};

type PrismicTeamContentsDataCultureBodyKeyVisualPrimaryKeyVisualImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  readonly thumbnails: Maybe<PrismicTeamContentsDataCultureBodyKeyVisualPrimaryKeyVisualImageImageThumbnailsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicTeamContentsDataCultureBodyKeyVisualPrimaryKeyVisualImageImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicTeamContentsDataCultureBodyKeyVisualPrimaryKeyVisualImageImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicTeamContentsDataCultureBodyKeyVisualPrimaryKeyVisualImageImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicTeamContentsDataCultureBodyKeyVisualPrimaryKeyVisualImageImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicTeamContentsDataCultureBodyMemberQuoteCarousel = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly items: ReadonlyArray<PrismicTeamContentsDataCultureBodyMemberQuoteCarouselItem>;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicTeamContentsDataCultureBodyMemberQuoteCarouselItem = {
  readonly image: Maybe<PrismicTeamContentsDataCultureBodyMemberQuoteCarouselItemsImageImageType>;
  readonly quote: Maybe<Scalars['String']>;
  readonly who: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataCultureBodyMemberQuoteCarouselItemsImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicTeamContentsDataCultureBodyMemberQuoteCarouselItemsImageImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicTeamContentsDataCultureBodyMemberQuoteCarouselItemsImageImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicTeamContentsDataCultureBodyMemberQuoteCarouselItemsImageImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicTeamContentsDataCultureBodyMemberQuoteCarouselItemsImageImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicTeamContentsDataCultureBodySlicesType = PrismicTeamContentsDataCultureBodyBenefit | PrismicTeamContentsDataCultureBodyDivider | PrismicTeamContentsDataCultureBodyHowWeWork | PrismicTeamContentsDataCultureBodyIllustrationAndDescription | PrismicTeamContentsDataCultureBodyKeyVisual | PrismicTeamContentsDataCultureBodyMemberQuoteCarousel | PrismicTeamContentsDataCultureBodyTitleAndDescription | PrismicTeamContentsDataCultureBodyTitleAndIllustration | PrismicTeamContentsDataCultureBodyWideBanner;

type PrismicTeamContentsDataCultureBodyTitleAndDescription = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly primary: PrismicTeamContentsDataCultureBodyTitleAndDescriptionPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicTeamContentsDataCultureBodyTitleAndDescriptionPrimary = {
  readonly description: Maybe<PrismicStructuredTextType>;
  readonly inverted: Maybe<Scalars['Boolean']>;
  readonly key_text: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicLinkType>;
  readonly link_text: Maybe<Scalars['String']>;
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicTeamContentsDataCultureBodyTitleAndIllustration = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly primary: PrismicTeamContentsDataCultureBodyTitleAndIllustrationPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicTeamContentsDataCultureBodyTitleAndIllustrationPrimary = {
  readonly illustration: Maybe<PrismicTeamContentsDataCultureBodyTitleAndIllustrationPrimaryIllustrationImageType>;
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
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicTeamContentsDataCultureBodyTitleAndIllustrationPrimaryIllustrationImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicTeamContentsDataCultureBodyTitleAndIllustrationPrimaryIllustrationImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicTeamContentsDataCultureBodyTitleAndIllustrationPrimaryIllustrationImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicTeamContentsDataCultureBodyTitleAndIllustrationPrimaryIllustrationImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicTeamContentsDataCultureBodyWideBanner = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly primary: PrismicTeamContentsDataCultureBodyWideBannerPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicTeamContentsDataCultureBodyWideBannerPrimary = {
  readonly background_color: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicLinkType>;
  readonly link_text: Maybe<Scalars['String']>;
  readonly thumbnail: Maybe<PrismicTeamContentsDataCultureBodyWideBannerPrimaryThumbnailImageType>;
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicTeamContentsDataCultureBodyWideBannerPrimaryThumbnailImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicTeamContentsDataCultureBodyWideBannerPrimaryThumbnailImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicTeamContentsDataCultureBodyWideBannerPrimaryThumbnailImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicTeamContentsDataCultureBodyWideBannerPrimaryThumbnailImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicTeamContentsDataCultureBodyWideBannerPrimaryThumbnailImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicTeamContentsDataCulturePageMetaImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicTeamContentsDataCulturePageMetaImageImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicTeamContentsDataCulturePageMetaImageImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicTeamContentsDataCulturePageMetaImageImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicTeamContentsDataCulturePageMetaImageImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicTeamContentsDataCulturePageMetaImageImageTypeFilterInput = {
  readonly alt: InputMaybe<StringQueryOperatorInput>;
  readonly copyright: InputMaybe<StringQueryOperatorInput>;
  readonly dimensions: InputMaybe<PrismicImageDimensionsTypeFilterInput>;
  readonly fixed: InputMaybe<ImgixFixedFilterInput>;
  readonly fluid: InputMaybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: InputMaybe<JSONQueryOperatorInput>;
  readonly localFile: InputMaybe<FileFilterInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicTeamContentsDataFaqEntries = {
  readonly answer: Maybe<PrismicStructuredTextType>;
  readonly question: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataFaqEntriesFilterInput = {
  readonly answer: InputMaybe<PrismicStructuredTextTypeFilterInput>;
  readonly question: InputMaybe<StringQueryOperatorInput>;
};

type PrismicTeamContentsDataFaqEntriesFilterListInput = {
  readonly elemMatch: InputMaybe<PrismicTeamContentsDataFaqEntriesFilterInput>;
};

type PrismicTeamContentsDataFaqPageEntries = {
  readonly faq_category_title: Maybe<Scalars['String']>;
  readonly faq_page: Maybe<PrismicLinkType>;
};

type PrismicTeamContentsDataFaqPageEntriesFilterInput = {
  readonly faq_category_title: InputMaybe<StringQueryOperatorInput>;
  readonly faq_page: InputMaybe<PrismicLinkTypeFilterInput>;
};

type PrismicTeamContentsDataFaqPageEntriesFilterListInput = {
  readonly elemMatch: InputMaybe<PrismicTeamContentsDataFaqPageEntriesFilterInput>;
};

type PrismicTeamContentsDataJobsPageMetaImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicTeamContentsDataJobsPageMetaImageImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicTeamContentsDataJobsPageMetaImageImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicTeamContentsDataJobsPageMetaImageImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicTeamContentsDataJobsPageMetaImageImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicTeamContentsDataJobsPageMetaImageImageTypeFilterInput = {
  readonly alt: InputMaybe<StringQueryOperatorInput>;
  readonly copyright: InputMaybe<StringQueryOperatorInput>;
  readonly dimensions: InputMaybe<PrismicImageDimensionsTypeFilterInput>;
  readonly fixed: InputMaybe<ImgixFixedFilterInput>;
  readonly fluid: InputMaybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: InputMaybe<JSONQueryOperatorInput>;
  readonly localFile: InputMaybe<FileFilterInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicTeamContentsDataLifeBodyKeyVisual = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly primary: PrismicTeamContentsDataLifeBodyKeyVisualPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicTeamContentsDataLifeBodyKeyVisualPrimary = {
  readonly description: Maybe<PrismicStructuredTextType>;
  readonly expanded: Maybe<Scalars['Boolean']>;
  readonly key_visual_image: Maybe<PrismicTeamContentsDataLifeBodyKeyVisualPrimaryKeyVisualImageImageType>;
};

type PrismicTeamContentsDataLifeBodyKeyVisualPrimaryKeyVisualImageImageThumbnailsType = {
  readonly portrait: Maybe<PrismicImageThumbnailType>;
};

type PrismicTeamContentsDataLifeBodyKeyVisualPrimaryKeyVisualImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  readonly thumbnails: Maybe<PrismicTeamContentsDataLifeBodyKeyVisualPrimaryKeyVisualImageImageThumbnailsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicTeamContentsDataLifeBodyKeyVisualPrimaryKeyVisualImageImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicTeamContentsDataLifeBodyKeyVisualPrimaryKeyVisualImageImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicTeamContentsDataLifeBodyKeyVisualPrimaryKeyVisualImageImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicTeamContentsDataLifeBodyKeyVisualPrimaryKeyVisualImageImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicTeamContentsDataLifeBodyLifeContent = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly items: ReadonlyArray<PrismicTeamContentsDataLifeBodyLifeContentItem>;
  readonly primary: PrismicTeamContentsDataLifeBodyLifeContentPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicTeamContentsDataLifeBodyLifeContentItem = {
  readonly thumbnail_description: Maybe<PrismicStructuredTextType>;
  readonly thumbnail_image: Maybe<PrismicTeamContentsDataLifeBodyLifeContentItemsThumbnailImageImageType>;
};

type PrismicTeamContentsDataLifeBodyLifeContentItemsThumbnailImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicTeamContentsDataLifeBodyLifeContentItemsThumbnailImageImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicTeamContentsDataLifeBodyLifeContentItemsThumbnailImageImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicTeamContentsDataLifeBodyLifeContentItemsThumbnailImageImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicTeamContentsDataLifeBodyLifeContentItemsThumbnailImageImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicTeamContentsDataLifeBodyLifeContentPrimary = {
  readonly body_text: Maybe<PrismicStructuredTextType>;
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicTeamContentsDataLifeBodySlicesType = PrismicTeamContentsDataLifeBodyKeyVisual | PrismicTeamContentsDataLifeBodyLifeContent;

type PrismicTeamContentsDataLifePageMetaImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicTeamContentsDataLifePageMetaImageImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicTeamContentsDataLifePageMetaImageImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicTeamContentsDataLifePageMetaImageImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicTeamContentsDataLifePageMetaImageImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicTeamContentsDataLifePageMetaImageImageTypeFilterInput = {
  readonly alt: InputMaybe<StringQueryOperatorInput>;
  readonly copyright: InputMaybe<StringQueryOperatorInput>;
  readonly dimensions: InputMaybe<PrismicImageDimensionsTypeFilterInput>;
  readonly fixed: InputMaybe<ImgixFixedFilterInput>;
  readonly fluid: InputMaybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: InputMaybe<JSONQueryOperatorInput>;
  readonly localFile: InputMaybe<FileFilterInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicTeamContentsDataMainBodyBenefit = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly items: ReadonlyArray<PrismicTeamContentsDataMainBodyBenefitItem>;
  readonly primary: PrismicTeamContentsDataMainBodyBenefitPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicTeamContentsDataMainBodyBenefitItem = {
  readonly description: Maybe<PrismicStructuredTextType>;
  readonly subtext: Maybe<Scalars['String']>;
  readonly subtitle: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataMainBodyBenefitPrimary = {
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicTeamContentsDataMainBodyDivider = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicTeamContentsDataMainBodyHowWeWork = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly items: ReadonlyArray<PrismicTeamContentsDataMainBodyHowWeWorkItem>;
  readonly primary: PrismicTeamContentsDataMainBodyHowWeWorkPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicTeamContentsDataMainBodyHowWeWorkItem = {
  readonly description: Maybe<PrismicStructuredTextType>;
  readonly group: Maybe<Scalars['String']>;
  readonly key_text: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataMainBodyHowWeWorkPrimary = {
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicTeamContentsDataMainBodyIllustrationAndDescription = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly primary: PrismicTeamContentsDataMainBodyIllustrationAndDescriptionPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicTeamContentsDataMainBodyIllustrationAndDescriptionPrimary = {
  readonly description: Maybe<PrismicStructuredTextType>;
  readonly expanded: Maybe<Scalars['Boolean']>;
  readonly illustration: Maybe<PrismicTeamContentsDataMainBodyIllustrationAndDescriptionPrimaryIllustrationImageType>;
  readonly inverted: Maybe<Scalars['Boolean']>;
  readonly link: Maybe<PrismicLinkType>;
  readonly link_text: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataMainBodyIllustrationAndDescriptionPrimaryIllustrationImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicTeamContentsDataMainBodyIllustrationAndDescriptionPrimaryIllustrationImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicTeamContentsDataMainBodyIllustrationAndDescriptionPrimaryIllustrationImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicTeamContentsDataMainBodyIllustrationAndDescriptionPrimaryIllustrationImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicTeamContentsDataMainBodyIllustrationAndDescriptionPrimaryIllustrationImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicTeamContentsDataMainBodyKeyVisual = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly primary: PrismicTeamContentsDataMainBodyKeyVisualPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicTeamContentsDataMainBodyKeyVisualPrimary = {
  readonly description: Maybe<PrismicStructuredTextType>;
  readonly expanded: Maybe<Scalars['Boolean']>;
  readonly key_visual_image: Maybe<PrismicTeamContentsDataMainBodyKeyVisualPrimaryKeyVisualImageImageType>;
};

type PrismicTeamContentsDataMainBodyKeyVisualPrimaryKeyVisualImageImageThumbnailsType = {
  readonly portrait: Maybe<PrismicImageThumbnailType>;
};

type PrismicTeamContentsDataMainBodyKeyVisualPrimaryKeyVisualImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  readonly thumbnails: Maybe<PrismicTeamContentsDataMainBodyKeyVisualPrimaryKeyVisualImageImageThumbnailsType>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicTeamContentsDataMainBodyKeyVisualPrimaryKeyVisualImageImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicTeamContentsDataMainBodyKeyVisualPrimaryKeyVisualImageImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicTeamContentsDataMainBodyKeyVisualPrimaryKeyVisualImageImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicTeamContentsDataMainBodyKeyVisualPrimaryKeyVisualImageImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicTeamContentsDataMainBodyMemberQuoteCarousel = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly items: ReadonlyArray<PrismicTeamContentsDataMainBodyMemberQuoteCarouselItem>;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicTeamContentsDataMainBodyMemberQuoteCarouselItem = {
  readonly image: Maybe<PrismicTeamContentsDataMainBodyMemberQuoteCarouselItemsImageImageType>;
  readonly quote: Maybe<Scalars['String']>;
  readonly who: Maybe<Scalars['String']>;
};

type PrismicTeamContentsDataMainBodyMemberQuoteCarouselItemsImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicTeamContentsDataMainBodyMemberQuoteCarouselItemsImageImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicTeamContentsDataMainBodyMemberQuoteCarouselItemsImageImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicTeamContentsDataMainBodyMemberQuoteCarouselItemsImageImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicTeamContentsDataMainBodyMemberQuoteCarouselItemsImageImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicTeamContentsDataMainBodySlicesType = PrismicTeamContentsDataMainBodyBenefit | PrismicTeamContentsDataMainBodyDivider | PrismicTeamContentsDataMainBodyHowWeWork | PrismicTeamContentsDataMainBodyIllustrationAndDescription | PrismicTeamContentsDataMainBodyKeyVisual | PrismicTeamContentsDataMainBodyMemberQuoteCarousel | PrismicTeamContentsDataMainBodyTitleAndDescription | PrismicTeamContentsDataMainBodyTitleAndIllustration | PrismicTeamContentsDataMainBodyWideBanner;

type PrismicTeamContentsDataMainBodyTitleAndDescription = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly primary: PrismicTeamContentsDataMainBodyTitleAndDescriptionPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicTeamContentsDataMainBodyTitleAndDescriptionPrimary = {
  readonly description: Maybe<PrismicStructuredTextType>;
  readonly inverted: Maybe<Scalars['Boolean']>;
  readonly key_text: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicLinkType>;
  readonly link_text: Maybe<Scalars['String']>;
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicTeamContentsDataMainBodyTitleAndIllustration = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly primary: PrismicTeamContentsDataMainBodyTitleAndIllustrationPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicTeamContentsDataMainBodyTitleAndIllustrationPrimary = {
  readonly illustration: Maybe<PrismicTeamContentsDataMainBodyTitleAndIllustrationPrimaryIllustrationImageType>;
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
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicTeamContentsDataMainBodyTitleAndIllustrationPrimaryIllustrationImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicTeamContentsDataMainBodyTitleAndIllustrationPrimaryIllustrationImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicTeamContentsDataMainBodyTitleAndIllustrationPrimaryIllustrationImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicTeamContentsDataMainBodyTitleAndIllustrationPrimaryIllustrationImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicTeamContentsDataMainBodyWideBanner = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly primary: PrismicTeamContentsDataMainBodyWideBannerPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicTeamContentsDataMainBodyWideBannerPrimary = {
  readonly background_color: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicLinkType>;
  readonly link_text: Maybe<Scalars['String']>;
  readonly thumbnail: Maybe<PrismicTeamContentsDataMainBodyWideBannerPrimaryThumbnailImageType>;
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicTeamContentsDataMainBodyWideBannerPrimaryThumbnailImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicTeamContentsDataMainBodyWideBannerPrimaryThumbnailImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicTeamContentsDataMainBodyWideBannerPrimaryThumbnailImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicTeamContentsDataMainBodyWideBannerPrimaryThumbnailImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicTeamContentsDataMainBodyWideBannerPrimaryThumbnailImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicTeamContentsDataMainPageMetaImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicTeamContentsDataMainPageMetaImageImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicTeamContentsDataMainPageMetaImageImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicTeamContentsDataMainPageMetaImageImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicTeamContentsDataMainPageMetaImageImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicTeamContentsDataMainPageMetaImageImageTypeFilterInput = {
  readonly alt: InputMaybe<StringQueryOperatorInput>;
  readonly copyright: InputMaybe<StringQueryOperatorInput>;
  readonly dimensions: InputMaybe<PrismicImageDimensionsTypeFilterInput>;
  readonly fixed: InputMaybe<ImgixFixedFilterInput>;
  readonly fluid: InputMaybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: InputMaybe<JSONQueryOperatorInput>;
  readonly localFile: InputMaybe<FileFilterInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicTeamContentsDataNotfoundPageLinkGroup = {
  readonly display_text: Maybe<Scalars['String']>;
  readonly link: Maybe<PrismicLinkType>;
};

type PrismicTeamContentsDataNotfoundPageLinkGroupFilterInput = {
  readonly display_text: InputMaybe<StringQueryOperatorInput>;
  readonly link: InputMaybe<PrismicLinkTypeFilterInput>;
};

type PrismicTeamContentsDataNotfoundPageLinkGroupFilterListInput = {
  readonly elemMatch: InputMaybe<PrismicTeamContentsDataNotfoundPageLinkGroupFilterInput>;
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
  readonly faq_page_entries: Maybe<ReadonlyArray<Maybe<PrismicTeamContentsDataFaqPageEntries>>>;
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

type PrismicTeamContentsDataTypeFilterInput = {
  readonly completed_page_content: InputMaybe<PrismicStructuredTextTypeFilterInput>;
  readonly completed_page_link_group: InputMaybe<PrismicTeamContentsDataCompletedPageLinkGroupFilterListInput>;
  readonly culture_page_meta_description: InputMaybe<StringQueryOperatorInput>;
  readonly culture_page_meta_image: InputMaybe<PrismicTeamContentsDataCulturePageMetaImageImageTypeFilterInput>;
  readonly culture_page_meta_title: InputMaybe<StringQueryOperatorInput>;
  readonly culture_page_title: InputMaybe<PrismicStructuredTextTypeFilterInput>;
  readonly enable_culture_page: InputMaybe<BooleanQueryOperatorInput>;
  readonly enable_faq_page: InputMaybe<BooleanQueryOperatorInput>;
  readonly enable_life_page: InputMaybe<BooleanQueryOperatorInput>;
  readonly faq_entries: InputMaybe<PrismicTeamContentsDataFaqEntriesFilterListInput>;
  readonly faq_page_entries: InputMaybe<PrismicTeamContentsDataFaqPageEntriesFilterListInput>;
  readonly faq_page_meta_description: InputMaybe<StringQueryOperatorInput>;
  readonly faq_page_meta_title: InputMaybe<StringQueryOperatorInput>;
  readonly faq_page_title: InputMaybe<PrismicStructuredTextTypeFilterInput>;
  readonly fb_app_id: InputMaybe<StringQueryOperatorInput>;
  readonly jobs_page_meta_description: InputMaybe<StringQueryOperatorInput>;
  readonly jobs_page_meta_image: InputMaybe<PrismicTeamContentsDataJobsPageMetaImageImageTypeFilterInput>;
  readonly jobs_page_meta_title: InputMaybe<StringQueryOperatorInput>;
  readonly jobs_page_title: InputMaybe<PrismicStructuredTextTypeFilterInput>;
  readonly life_page_meta_description: InputMaybe<StringQueryOperatorInput>;
  readonly life_page_meta_image: InputMaybe<PrismicTeamContentsDataLifePageMetaImageImageTypeFilterInput>;
  readonly life_page_meta_title: InputMaybe<StringQueryOperatorInput>;
  readonly life_page_title: InputMaybe<PrismicStructuredTextTypeFilterInput>;
  readonly main_page_meta_description: InputMaybe<StringQueryOperatorInput>;
  readonly main_page_meta_image: InputMaybe<PrismicTeamContentsDataMainPageMetaImageImageTypeFilterInput>;
  readonly main_page_meta_title: InputMaybe<StringQueryOperatorInput>;
  readonly main_page_title: InputMaybe<PrismicStructuredTextTypeFilterInput>;
  readonly notfound_page_link_group: InputMaybe<PrismicTeamContentsDataNotfoundPageLinkGroupFilterListInput>;
  readonly notfound_page_title: InputMaybe<PrismicStructuredTextTypeFilterInput>;
  readonly twitter_site_handle: InputMaybe<StringQueryOperatorInput>;
};

type PrismicTeamContentsEdge = {
  readonly next: Maybe<PrismicTeamContents>;
  readonly node: PrismicTeamContents;
  readonly previous: Maybe<PrismicTeamContents>;
};

type PrismicTeamContentsFieldsEnum =
  | '_previewable'
  | 'alternate_languages'
  | 'alternate_languages.id'
  | 'alternate_languages.lang'
  | 'alternate_languages.raw'
  | 'alternate_languages.type'
  | 'alternate_languages.uid'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'dataRaw'
  | 'data.completed_page_content.html'
  | 'data.completed_page_content.raw'
  | 'data.completed_page_content.richText'
  | 'data.completed_page_content.text'
  | 'data.completed_page_link_group'
  | 'data.completed_page_link_group.display_text'
  | 'data.completed_page_link_group.link.id'
  | 'data.completed_page_link_group.link.isBroken'
  | 'data.completed_page_link_group.link.lang'
  | 'data.completed_page_link_group.link.link_type'
  | 'data.completed_page_link_group.link.raw'
  | 'data.completed_page_link_group.link.size'
  | 'data.completed_page_link_group.link.slug'
  | 'data.completed_page_link_group.link.tags'
  | 'data.completed_page_link_group.link.target'
  | 'data.completed_page_link_group.link.type'
  | 'data.completed_page_link_group.link.uid'
  | 'data.completed_page_link_group.link.url'
  | 'data.culture_page_meta_description'
  | 'data.culture_page_meta_image.alt'
  | 'data.culture_page_meta_image.copyright'
  | 'data.culture_page_meta_image.dimensions.height'
  | 'data.culture_page_meta_image.dimensions.width'
  | 'data.culture_page_meta_image.fixed.base64'
  | 'data.culture_page_meta_image.fixed.height'
  | 'data.culture_page_meta_image.fixed.sizes'
  | 'data.culture_page_meta_image.fixed.src'
  | 'data.culture_page_meta_image.fixed.srcSet'
  | 'data.culture_page_meta_image.fixed.srcSetWebp'
  | 'data.culture_page_meta_image.fixed.srcWebp'
  | 'data.culture_page_meta_image.fixed.width'
  | 'data.culture_page_meta_image.fluid.aspectRatio'
  | 'data.culture_page_meta_image.fluid.base64'
  | 'data.culture_page_meta_image.fluid.sizes'
  | 'data.culture_page_meta_image.fluid.src'
  | 'data.culture_page_meta_image.fluid.srcSet'
  | 'data.culture_page_meta_image.fluid.srcSetWebp'
  | 'data.culture_page_meta_image.fluid.srcWebp'
  | 'data.culture_page_meta_image.gatsbyImageData'
  | 'data.culture_page_meta_image.localFile.absolutePath'
  | 'data.culture_page_meta_image.localFile.accessTime'
  | 'data.culture_page_meta_image.localFile.atime'
  | 'data.culture_page_meta_image.localFile.atimeMs'
  | 'data.culture_page_meta_image.localFile.base'
  | 'data.culture_page_meta_image.localFile.birthTime'
  | 'data.culture_page_meta_image.localFile.birthtime'
  | 'data.culture_page_meta_image.localFile.birthtimeMs'
  | 'data.culture_page_meta_image.localFile.blksize'
  | 'data.culture_page_meta_image.localFile.blocks'
  | 'data.culture_page_meta_image.localFile.changeTime'
  | 'data.culture_page_meta_image.localFile.children'
  | 'data.culture_page_meta_image.localFile.childrenImageSharp'
  | 'data.culture_page_meta_image.localFile.ctime'
  | 'data.culture_page_meta_image.localFile.ctimeMs'
  | 'data.culture_page_meta_image.localFile.dev'
  | 'data.culture_page_meta_image.localFile.dir'
  | 'data.culture_page_meta_image.localFile.ext'
  | 'data.culture_page_meta_image.localFile.extension'
  | 'data.culture_page_meta_image.localFile.gid'
  | 'data.culture_page_meta_image.localFile.id'
  | 'data.culture_page_meta_image.localFile.ino'
  | 'data.culture_page_meta_image.localFile.mode'
  | 'data.culture_page_meta_image.localFile.modifiedTime'
  | 'data.culture_page_meta_image.localFile.mtime'
  | 'data.culture_page_meta_image.localFile.mtimeMs'
  | 'data.culture_page_meta_image.localFile.name'
  | 'data.culture_page_meta_image.localFile.nlink'
  | 'data.culture_page_meta_image.localFile.prettySize'
  | 'data.culture_page_meta_image.localFile.rdev'
  | 'data.culture_page_meta_image.localFile.relativeDirectory'
  | 'data.culture_page_meta_image.localFile.relativePath'
  | 'data.culture_page_meta_image.localFile.root'
  | 'data.culture_page_meta_image.localFile.size'
  | 'data.culture_page_meta_image.localFile.sourceInstanceName'
  | 'data.culture_page_meta_image.localFile.uid'
  | 'data.culture_page_meta_image.localFile.url'
  | 'data.culture_page_meta_image.url'
  | 'data.culture_page_meta_title'
  | 'data.culture_page_title.html'
  | 'data.culture_page_title.raw'
  | 'data.culture_page_title.richText'
  | 'data.culture_page_title.text'
  | 'data.enable_culture_page'
  | 'data.enable_faq_page'
  | 'data.enable_life_page'
  | 'data.faq_entries'
  | 'data.faq_entries.answer.html'
  | 'data.faq_entries.answer.raw'
  | 'data.faq_entries.answer.richText'
  | 'data.faq_entries.answer.text'
  | 'data.faq_entries.question'
  | 'data.faq_page_entries'
  | 'data.faq_page_entries.faq_category_title'
  | 'data.faq_page_entries.faq_page.id'
  | 'data.faq_page_entries.faq_page.isBroken'
  | 'data.faq_page_entries.faq_page.lang'
  | 'data.faq_page_entries.faq_page.link_type'
  | 'data.faq_page_entries.faq_page.raw'
  | 'data.faq_page_entries.faq_page.size'
  | 'data.faq_page_entries.faq_page.slug'
  | 'data.faq_page_entries.faq_page.tags'
  | 'data.faq_page_entries.faq_page.target'
  | 'data.faq_page_entries.faq_page.type'
  | 'data.faq_page_entries.faq_page.uid'
  | 'data.faq_page_entries.faq_page.url'
  | 'data.faq_page_meta_description'
  | 'data.faq_page_meta_title'
  | 'data.faq_page_title.html'
  | 'data.faq_page_title.raw'
  | 'data.faq_page_title.richText'
  | 'data.faq_page_title.text'
  | 'data.fb_app_id'
  | 'data.jobs_page_meta_description'
  | 'data.jobs_page_meta_image.alt'
  | 'data.jobs_page_meta_image.copyright'
  | 'data.jobs_page_meta_image.dimensions.height'
  | 'data.jobs_page_meta_image.dimensions.width'
  | 'data.jobs_page_meta_image.fixed.base64'
  | 'data.jobs_page_meta_image.fixed.height'
  | 'data.jobs_page_meta_image.fixed.sizes'
  | 'data.jobs_page_meta_image.fixed.src'
  | 'data.jobs_page_meta_image.fixed.srcSet'
  | 'data.jobs_page_meta_image.fixed.srcSetWebp'
  | 'data.jobs_page_meta_image.fixed.srcWebp'
  | 'data.jobs_page_meta_image.fixed.width'
  | 'data.jobs_page_meta_image.fluid.aspectRatio'
  | 'data.jobs_page_meta_image.fluid.base64'
  | 'data.jobs_page_meta_image.fluid.sizes'
  | 'data.jobs_page_meta_image.fluid.src'
  | 'data.jobs_page_meta_image.fluid.srcSet'
  | 'data.jobs_page_meta_image.fluid.srcSetWebp'
  | 'data.jobs_page_meta_image.fluid.srcWebp'
  | 'data.jobs_page_meta_image.gatsbyImageData'
  | 'data.jobs_page_meta_image.localFile.absolutePath'
  | 'data.jobs_page_meta_image.localFile.accessTime'
  | 'data.jobs_page_meta_image.localFile.atime'
  | 'data.jobs_page_meta_image.localFile.atimeMs'
  | 'data.jobs_page_meta_image.localFile.base'
  | 'data.jobs_page_meta_image.localFile.birthTime'
  | 'data.jobs_page_meta_image.localFile.birthtime'
  | 'data.jobs_page_meta_image.localFile.birthtimeMs'
  | 'data.jobs_page_meta_image.localFile.blksize'
  | 'data.jobs_page_meta_image.localFile.blocks'
  | 'data.jobs_page_meta_image.localFile.changeTime'
  | 'data.jobs_page_meta_image.localFile.children'
  | 'data.jobs_page_meta_image.localFile.childrenImageSharp'
  | 'data.jobs_page_meta_image.localFile.ctime'
  | 'data.jobs_page_meta_image.localFile.ctimeMs'
  | 'data.jobs_page_meta_image.localFile.dev'
  | 'data.jobs_page_meta_image.localFile.dir'
  | 'data.jobs_page_meta_image.localFile.ext'
  | 'data.jobs_page_meta_image.localFile.extension'
  | 'data.jobs_page_meta_image.localFile.gid'
  | 'data.jobs_page_meta_image.localFile.id'
  | 'data.jobs_page_meta_image.localFile.ino'
  | 'data.jobs_page_meta_image.localFile.mode'
  | 'data.jobs_page_meta_image.localFile.modifiedTime'
  | 'data.jobs_page_meta_image.localFile.mtime'
  | 'data.jobs_page_meta_image.localFile.mtimeMs'
  | 'data.jobs_page_meta_image.localFile.name'
  | 'data.jobs_page_meta_image.localFile.nlink'
  | 'data.jobs_page_meta_image.localFile.prettySize'
  | 'data.jobs_page_meta_image.localFile.rdev'
  | 'data.jobs_page_meta_image.localFile.relativeDirectory'
  | 'data.jobs_page_meta_image.localFile.relativePath'
  | 'data.jobs_page_meta_image.localFile.root'
  | 'data.jobs_page_meta_image.localFile.size'
  | 'data.jobs_page_meta_image.localFile.sourceInstanceName'
  | 'data.jobs_page_meta_image.localFile.uid'
  | 'data.jobs_page_meta_image.localFile.url'
  | 'data.jobs_page_meta_image.url'
  | 'data.jobs_page_meta_title'
  | 'data.jobs_page_title.html'
  | 'data.jobs_page_title.raw'
  | 'data.jobs_page_title.richText'
  | 'data.jobs_page_title.text'
  | 'data.life_page_meta_description'
  | 'data.life_page_meta_image.alt'
  | 'data.life_page_meta_image.copyright'
  | 'data.life_page_meta_image.dimensions.height'
  | 'data.life_page_meta_image.dimensions.width'
  | 'data.life_page_meta_image.fixed.base64'
  | 'data.life_page_meta_image.fixed.height'
  | 'data.life_page_meta_image.fixed.sizes'
  | 'data.life_page_meta_image.fixed.src'
  | 'data.life_page_meta_image.fixed.srcSet'
  | 'data.life_page_meta_image.fixed.srcSetWebp'
  | 'data.life_page_meta_image.fixed.srcWebp'
  | 'data.life_page_meta_image.fixed.width'
  | 'data.life_page_meta_image.fluid.aspectRatio'
  | 'data.life_page_meta_image.fluid.base64'
  | 'data.life_page_meta_image.fluid.sizes'
  | 'data.life_page_meta_image.fluid.src'
  | 'data.life_page_meta_image.fluid.srcSet'
  | 'data.life_page_meta_image.fluid.srcSetWebp'
  | 'data.life_page_meta_image.fluid.srcWebp'
  | 'data.life_page_meta_image.gatsbyImageData'
  | 'data.life_page_meta_image.localFile.absolutePath'
  | 'data.life_page_meta_image.localFile.accessTime'
  | 'data.life_page_meta_image.localFile.atime'
  | 'data.life_page_meta_image.localFile.atimeMs'
  | 'data.life_page_meta_image.localFile.base'
  | 'data.life_page_meta_image.localFile.birthTime'
  | 'data.life_page_meta_image.localFile.birthtime'
  | 'data.life_page_meta_image.localFile.birthtimeMs'
  | 'data.life_page_meta_image.localFile.blksize'
  | 'data.life_page_meta_image.localFile.blocks'
  | 'data.life_page_meta_image.localFile.changeTime'
  | 'data.life_page_meta_image.localFile.children'
  | 'data.life_page_meta_image.localFile.childrenImageSharp'
  | 'data.life_page_meta_image.localFile.ctime'
  | 'data.life_page_meta_image.localFile.ctimeMs'
  | 'data.life_page_meta_image.localFile.dev'
  | 'data.life_page_meta_image.localFile.dir'
  | 'data.life_page_meta_image.localFile.ext'
  | 'data.life_page_meta_image.localFile.extension'
  | 'data.life_page_meta_image.localFile.gid'
  | 'data.life_page_meta_image.localFile.id'
  | 'data.life_page_meta_image.localFile.ino'
  | 'data.life_page_meta_image.localFile.mode'
  | 'data.life_page_meta_image.localFile.modifiedTime'
  | 'data.life_page_meta_image.localFile.mtime'
  | 'data.life_page_meta_image.localFile.mtimeMs'
  | 'data.life_page_meta_image.localFile.name'
  | 'data.life_page_meta_image.localFile.nlink'
  | 'data.life_page_meta_image.localFile.prettySize'
  | 'data.life_page_meta_image.localFile.rdev'
  | 'data.life_page_meta_image.localFile.relativeDirectory'
  | 'data.life_page_meta_image.localFile.relativePath'
  | 'data.life_page_meta_image.localFile.root'
  | 'data.life_page_meta_image.localFile.size'
  | 'data.life_page_meta_image.localFile.sourceInstanceName'
  | 'data.life_page_meta_image.localFile.uid'
  | 'data.life_page_meta_image.localFile.url'
  | 'data.life_page_meta_image.url'
  | 'data.life_page_meta_title'
  | 'data.life_page_title.html'
  | 'data.life_page_title.raw'
  | 'data.life_page_title.richText'
  | 'data.life_page_title.text'
  | 'data.main_page_meta_description'
  | 'data.main_page_meta_image.alt'
  | 'data.main_page_meta_image.copyright'
  | 'data.main_page_meta_image.dimensions.height'
  | 'data.main_page_meta_image.dimensions.width'
  | 'data.main_page_meta_image.fixed.base64'
  | 'data.main_page_meta_image.fixed.height'
  | 'data.main_page_meta_image.fixed.sizes'
  | 'data.main_page_meta_image.fixed.src'
  | 'data.main_page_meta_image.fixed.srcSet'
  | 'data.main_page_meta_image.fixed.srcSetWebp'
  | 'data.main_page_meta_image.fixed.srcWebp'
  | 'data.main_page_meta_image.fixed.width'
  | 'data.main_page_meta_image.fluid.aspectRatio'
  | 'data.main_page_meta_image.fluid.base64'
  | 'data.main_page_meta_image.fluid.sizes'
  | 'data.main_page_meta_image.fluid.src'
  | 'data.main_page_meta_image.fluid.srcSet'
  | 'data.main_page_meta_image.fluid.srcSetWebp'
  | 'data.main_page_meta_image.fluid.srcWebp'
  | 'data.main_page_meta_image.gatsbyImageData'
  | 'data.main_page_meta_image.localFile.absolutePath'
  | 'data.main_page_meta_image.localFile.accessTime'
  | 'data.main_page_meta_image.localFile.atime'
  | 'data.main_page_meta_image.localFile.atimeMs'
  | 'data.main_page_meta_image.localFile.base'
  | 'data.main_page_meta_image.localFile.birthTime'
  | 'data.main_page_meta_image.localFile.birthtime'
  | 'data.main_page_meta_image.localFile.birthtimeMs'
  | 'data.main_page_meta_image.localFile.blksize'
  | 'data.main_page_meta_image.localFile.blocks'
  | 'data.main_page_meta_image.localFile.changeTime'
  | 'data.main_page_meta_image.localFile.children'
  | 'data.main_page_meta_image.localFile.childrenImageSharp'
  | 'data.main_page_meta_image.localFile.ctime'
  | 'data.main_page_meta_image.localFile.ctimeMs'
  | 'data.main_page_meta_image.localFile.dev'
  | 'data.main_page_meta_image.localFile.dir'
  | 'data.main_page_meta_image.localFile.ext'
  | 'data.main_page_meta_image.localFile.extension'
  | 'data.main_page_meta_image.localFile.gid'
  | 'data.main_page_meta_image.localFile.id'
  | 'data.main_page_meta_image.localFile.ino'
  | 'data.main_page_meta_image.localFile.mode'
  | 'data.main_page_meta_image.localFile.modifiedTime'
  | 'data.main_page_meta_image.localFile.mtime'
  | 'data.main_page_meta_image.localFile.mtimeMs'
  | 'data.main_page_meta_image.localFile.name'
  | 'data.main_page_meta_image.localFile.nlink'
  | 'data.main_page_meta_image.localFile.prettySize'
  | 'data.main_page_meta_image.localFile.rdev'
  | 'data.main_page_meta_image.localFile.relativeDirectory'
  | 'data.main_page_meta_image.localFile.relativePath'
  | 'data.main_page_meta_image.localFile.root'
  | 'data.main_page_meta_image.localFile.size'
  | 'data.main_page_meta_image.localFile.sourceInstanceName'
  | 'data.main_page_meta_image.localFile.uid'
  | 'data.main_page_meta_image.localFile.url'
  | 'data.main_page_meta_image.url'
  | 'data.main_page_meta_title'
  | 'data.main_page_title.html'
  | 'data.main_page_title.raw'
  | 'data.main_page_title.richText'
  | 'data.main_page_title.text'
  | 'data.notfound_page_link_group'
  | 'data.notfound_page_link_group.display_text'
  | 'data.notfound_page_link_group.link.id'
  | 'data.notfound_page_link_group.link.isBroken'
  | 'data.notfound_page_link_group.link.lang'
  | 'data.notfound_page_link_group.link.link_type'
  | 'data.notfound_page_link_group.link.raw'
  | 'data.notfound_page_link_group.link.size'
  | 'data.notfound_page_link_group.link.slug'
  | 'data.notfound_page_link_group.link.tags'
  | 'data.notfound_page_link_group.link.target'
  | 'data.notfound_page_link_group.link.type'
  | 'data.notfound_page_link_group.link.uid'
  | 'data.notfound_page_link_group.link.url'
  | 'data.notfound_page_title.html'
  | 'data.notfound_page_title.raw'
  | 'data.notfound_page_title.richText'
  | 'data.notfound_page_title.text'
  | 'data.twitter_site_handle'
  | 'first_publication_date'
  | 'href'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'lang'
  | 'last_publication_date'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'prismicId'
  | 'tags'
  | 'type'
  | 'url';

type PrismicTeamContentsFilterInput = {
  readonly _previewable: InputMaybe<IDQueryOperatorInput>;
  readonly alternate_languages: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly data: InputMaybe<PrismicTeamContentsDataTypeFilterInput>;
  readonly dataRaw: InputMaybe<JSONQueryOperatorInput>;
  readonly first_publication_date: InputMaybe<DateQueryOperatorInput>;
  readonly href: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly lang: InputMaybe<StringQueryOperatorInput>;
  readonly last_publication_date: InputMaybe<DateQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prismicId: InputMaybe<IDQueryOperatorInput>;
  readonly tags: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicTeamContentsGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicTeamContentsEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<PrismicTeamContentsGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicTeamContents>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicTeamContentsGroupConnection_distinctArgs = {
  field: PrismicTeamContentsFieldsEnum;
};


type PrismicTeamContentsGroupConnection_groupArgs = {
  field: PrismicTeamContentsFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type PrismicTeamContentsSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<PrismicTeamContentsFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type PrismicTeamsArticle = Node & {
  readonly _previewable: Scalars['ID'];
  readonly alternate_languages: ReadonlyArray<PrismicAlternateLanguageType>;
  readonly children: ReadonlyArray<Node>;
  readonly data: PrismicTeamsArticleDataType;
  readonly dataRaw: Scalars['JSON'];
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly parent: Maybe<Node>;
  readonly prismicId: Scalars['ID'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly uid: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
};


type PrismicTeamsArticle_first_publication_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type PrismicTeamsArticle_last_publication_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type PrismicTeamsArticleConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicTeamsArticleEdge>;
  readonly group: ReadonlyArray<PrismicTeamsArticleGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicTeamsArticle>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicTeamsArticleConnection_distinctArgs = {
  field: PrismicTeamsArticleFieldsEnum;
};


type PrismicTeamsArticleConnection_groupArgs = {
  field: PrismicTeamsArticleFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type PrismicTeamsArticleDataBodyArticleSection = PrismicSliceType & {
  readonly id: Scalars['ID'];
  readonly items: ReadonlyArray<PrismicTeamsArticleDataBodyArticleSectionItem>;
  readonly primary: PrismicTeamsArticleDataBodyArticleSectionPrimary;
  readonly slice_label: Maybe<Scalars['String']>;
  readonly slice_type: Scalars['String'];
};

type PrismicTeamsArticleDataBodyArticleSectionItem = {
  readonly thumbnail_description: Maybe<PrismicStructuredTextType>;
  readonly thumbnail_image: Maybe<PrismicTeamsArticleDataBodyArticleSectionItemsThumbnailImageImageType>;
};

type PrismicTeamsArticleDataBodyArticleSectionItemsThumbnailImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicTeamsArticleDataBodyArticleSectionItemsThumbnailImageImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicTeamsArticleDataBodyArticleSectionItemsThumbnailImageImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicTeamsArticleDataBodyArticleSectionItemsThumbnailImageImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicTeamsArticleDataBodyArticleSectionItemsThumbnailImageImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicTeamsArticleDataBodyArticleSectionPrimary = {
  readonly body_text: Maybe<PrismicStructuredTextType>;
  readonly title: Maybe<PrismicStructuredTextType>;
};

type PrismicTeamsArticleDataBodySlicesType = PrismicTeamsArticleDataBodyArticleSection;

type PrismicTeamsArticleDataPageMetaImageImageType = {
  readonly alt: Maybe<Scalars['String']>;
  readonly copyright: Maybe<Scalars['String']>;
  readonly dimensions: Maybe<PrismicImageDimensionsType>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  readonly fixed: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  readonly fluid: Maybe<ImgixFluid>;
  readonly gatsbyImageData: Maybe<Scalars['JSON']>;
  readonly localFile: Maybe<File>;
  /** A plain imgix URL with the URL and params applied. */
  readonly url: Maybe<Scalars['String']>;
};


type PrismicTeamsArticleDataPageMetaImageImageType_fixedArgs = {
  height: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  quality: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


type PrismicTeamsArticleDataPageMetaImageImageType_fluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxHeight: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  srcSetBreakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
};


type PrismicTeamsArticleDataPageMetaImageImageType_gatsbyImageDataArgs = {
  aspectRatio: InputMaybe<Scalars['Float']>;
  backgroundColor: InputMaybe<Scalars['String']>;
  breakpoints: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']>>>;
  height: InputMaybe<Scalars['Int']>;
  imgixParams: InputMaybe<ImgixParamsInput>;
  layout: InputMaybe<GatsbyImageLayout>;
  outputPixelDensities: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']>>>;
  placeholder: InputMaybe<ImgixPlaceholder>;
  placeholderImgixParams: InputMaybe<ImgixParamsInput>;
  sizes: InputMaybe<Scalars['String']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  width: InputMaybe<Scalars['Int']>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
};


type PrismicTeamsArticleDataPageMetaImageImageType_urlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

type PrismicTeamsArticleDataPageMetaImageImageTypeFilterInput = {
  readonly alt: InputMaybe<StringQueryOperatorInput>;
  readonly copyright: InputMaybe<StringQueryOperatorInput>;
  readonly dimensions: InputMaybe<PrismicImageDimensionsTypeFilterInput>;
  readonly fixed: InputMaybe<ImgixFixedFilterInput>;
  readonly fluid: InputMaybe<ImgixFluidFilterInput>;
  readonly gatsbyImageData: InputMaybe<JSONQueryOperatorInput>;
  readonly localFile: InputMaybe<FileFilterInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicTeamsArticleDataType = {
  readonly body: ReadonlyArray<PrismicTeamsArticleDataBodySlicesType>;
  readonly page_meta_description: Maybe<Scalars['String']>;
  readonly page_meta_image: Maybe<PrismicTeamsArticleDataPageMetaImageImageType>;
  readonly page_meta_title: Maybe<Scalars['String']>;
  readonly page_title: Maybe<PrismicStructuredTextType>;
};

type PrismicTeamsArticleDataTypeFilterInput = {
  readonly page_meta_description: InputMaybe<StringQueryOperatorInput>;
  readonly page_meta_image: InputMaybe<PrismicTeamsArticleDataPageMetaImageImageTypeFilterInput>;
  readonly page_meta_title: InputMaybe<StringQueryOperatorInput>;
  readonly page_title: InputMaybe<PrismicStructuredTextTypeFilterInput>;
};

type PrismicTeamsArticleEdge = {
  readonly next: Maybe<PrismicTeamsArticle>;
  readonly node: PrismicTeamsArticle;
  readonly previous: Maybe<PrismicTeamsArticle>;
};

type PrismicTeamsArticleFieldsEnum =
  | '_previewable'
  | 'alternate_languages'
  | 'alternate_languages.id'
  | 'alternate_languages.lang'
  | 'alternate_languages.raw'
  | 'alternate_languages.type'
  | 'alternate_languages.uid'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'dataRaw'
  | 'data.page_meta_description'
  | 'data.page_meta_image.alt'
  | 'data.page_meta_image.copyright'
  | 'data.page_meta_image.dimensions.height'
  | 'data.page_meta_image.dimensions.width'
  | 'data.page_meta_image.fixed.base64'
  | 'data.page_meta_image.fixed.height'
  | 'data.page_meta_image.fixed.sizes'
  | 'data.page_meta_image.fixed.src'
  | 'data.page_meta_image.fixed.srcSet'
  | 'data.page_meta_image.fixed.srcSetWebp'
  | 'data.page_meta_image.fixed.srcWebp'
  | 'data.page_meta_image.fixed.width'
  | 'data.page_meta_image.fluid.aspectRatio'
  | 'data.page_meta_image.fluid.base64'
  | 'data.page_meta_image.fluid.sizes'
  | 'data.page_meta_image.fluid.src'
  | 'data.page_meta_image.fluid.srcSet'
  | 'data.page_meta_image.fluid.srcSetWebp'
  | 'data.page_meta_image.fluid.srcWebp'
  | 'data.page_meta_image.gatsbyImageData'
  | 'data.page_meta_image.localFile.absolutePath'
  | 'data.page_meta_image.localFile.accessTime'
  | 'data.page_meta_image.localFile.atime'
  | 'data.page_meta_image.localFile.atimeMs'
  | 'data.page_meta_image.localFile.base'
  | 'data.page_meta_image.localFile.birthTime'
  | 'data.page_meta_image.localFile.birthtime'
  | 'data.page_meta_image.localFile.birthtimeMs'
  | 'data.page_meta_image.localFile.blksize'
  | 'data.page_meta_image.localFile.blocks'
  | 'data.page_meta_image.localFile.changeTime'
  | 'data.page_meta_image.localFile.children'
  | 'data.page_meta_image.localFile.childrenImageSharp'
  | 'data.page_meta_image.localFile.ctime'
  | 'data.page_meta_image.localFile.ctimeMs'
  | 'data.page_meta_image.localFile.dev'
  | 'data.page_meta_image.localFile.dir'
  | 'data.page_meta_image.localFile.ext'
  | 'data.page_meta_image.localFile.extension'
  | 'data.page_meta_image.localFile.gid'
  | 'data.page_meta_image.localFile.id'
  | 'data.page_meta_image.localFile.ino'
  | 'data.page_meta_image.localFile.mode'
  | 'data.page_meta_image.localFile.modifiedTime'
  | 'data.page_meta_image.localFile.mtime'
  | 'data.page_meta_image.localFile.mtimeMs'
  | 'data.page_meta_image.localFile.name'
  | 'data.page_meta_image.localFile.nlink'
  | 'data.page_meta_image.localFile.prettySize'
  | 'data.page_meta_image.localFile.rdev'
  | 'data.page_meta_image.localFile.relativeDirectory'
  | 'data.page_meta_image.localFile.relativePath'
  | 'data.page_meta_image.localFile.root'
  | 'data.page_meta_image.localFile.size'
  | 'data.page_meta_image.localFile.sourceInstanceName'
  | 'data.page_meta_image.localFile.uid'
  | 'data.page_meta_image.localFile.url'
  | 'data.page_meta_image.url'
  | 'data.page_meta_title'
  | 'data.page_title.html'
  | 'data.page_title.raw'
  | 'data.page_title.richText'
  | 'data.page_title.text'
  | 'first_publication_date'
  | 'href'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'lang'
  | 'last_publication_date'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'prismicId'
  | 'tags'
  | 'type'
  | 'uid'
  | 'url';

type PrismicTeamsArticleFilterInput = {
  readonly _previewable: InputMaybe<IDQueryOperatorInput>;
  readonly alternate_languages: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly data: InputMaybe<PrismicTeamsArticleDataTypeFilterInput>;
  readonly dataRaw: InputMaybe<JSONQueryOperatorInput>;
  readonly first_publication_date: InputMaybe<DateQueryOperatorInput>;
  readonly href: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly lang: InputMaybe<StringQueryOperatorInput>;
  readonly last_publication_date: InputMaybe<DateQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prismicId: InputMaybe<IDQueryOperatorInput>;
  readonly tags: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
  readonly uid: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicTeamsArticleGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicTeamsArticleEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<PrismicTeamsArticleGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicTeamsArticle>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicTeamsArticleGroupConnection_distinctArgs = {
  field: PrismicTeamsArticleFieldsEnum;
};


type PrismicTeamsArticleGroupConnection_groupArgs = {
  field: PrismicTeamsArticleFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type PrismicTeamsArticleSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<PrismicTeamsArticleFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type PrismicTermsAndConditions = Node & {
  readonly _previewable: Scalars['ID'];
  readonly alternate_languages: ReadonlyArray<PrismicAlternateLanguageType>;
  readonly children: ReadonlyArray<Node>;
  readonly data: PrismicTermsAndConditionsDataType;
  readonly dataRaw: Scalars['JSON'];
  readonly first_publication_date: Scalars['Date'];
  readonly href: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly lang: Scalars['String'];
  readonly last_publication_date: Scalars['Date'];
  readonly parent: Maybe<Node>;
  readonly prismicId: Scalars['ID'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
  readonly uid: Scalars['String'];
  readonly url: Maybe<Scalars['String']>;
};


type PrismicTermsAndConditions_first_publication_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};


type PrismicTermsAndConditions_last_publication_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type PrismicTermsAndConditionsConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicTermsAndConditionsEdge>;
  readonly group: ReadonlyArray<PrismicTermsAndConditionsGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicTermsAndConditions>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicTermsAndConditionsConnection_distinctArgs = {
  field: PrismicTermsAndConditionsFieldsEnum;
};


type PrismicTermsAndConditionsConnection_groupArgs = {
  field: PrismicTermsAndConditionsFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type PrismicTermsAndConditionsDataType = {
  readonly content: Maybe<PrismicStructuredTextType>;
  readonly description: Maybe<Scalars['String']>;
  readonly revision_date: Maybe<Scalars['Date']>;
};


type PrismicTermsAndConditionsDataType_revision_dateArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type PrismicTermsAndConditionsDataTypeFilterInput = {
  readonly content: InputMaybe<PrismicStructuredTextTypeFilterInput>;
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly revision_date: InputMaybe<DateQueryOperatorInput>;
};

type PrismicTermsAndConditionsEdge = {
  readonly next: Maybe<PrismicTermsAndConditions>;
  readonly node: PrismicTermsAndConditions;
  readonly previous: Maybe<PrismicTermsAndConditions>;
};

type PrismicTermsAndConditionsFieldsEnum =
  | '_previewable'
  | 'alternate_languages'
  | 'alternate_languages.id'
  | 'alternate_languages.lang'
  | 'alternate_languages.raw'
  | 'alternate_languages.type'
  | 'alternate_languages.uid'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'dataRaw'
  | 'data.content.html'
  | 'data.content.raw'
  | 'data.content.richText'
  | 'data.content.text'
  | 'data.description'
  | 'data.revision_date'
  | 'first_publication_date'
  | 'href'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'lang'
  | 'last_publication_date'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'prismicId'
  | 'tags'
  | 'type'
  | 'uid'
  | 'url';

type PrismicTermsAndConditionsFilterInput = {
  readonly _previewable: InputMaybe<IDQueryOperatorInput>;
  readonly alternate_languages: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly data: InputMaybe<PrismicTermsAndConditionsDataTypeFilterInput>;
  readonly dataRaw: InputMaybe<JSONQueryOperatorInput>;
  readonly first_publication_date: InputMaybe<DateQueryOperatorInput>;
  readonly href: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly lang: InputMaybe<StringQueryOperatorInput>;
  readonly last_publication_date: InputMaybe<DateQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly prismicId: InputMaybe<IDQueryOperatorInput>;
  readonly tags: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
  readonly uid: InputMaybe<StringQueryOperatorInput>;
  readonly url: InputMaybe<StringQueryOperatorInput>;
};

type PrismicTermsAndConditionsGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicTermsAndConditionsEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<PrismicTermsAndConditionsGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicTermsAndConditions>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicTermsAndConditionsGroupConnection_distinctArgs = {
  field: PrismicTermsAndConditionsFieldsEnum;
};


type PrismicTermsAndConditionsGroupConnection_groupArgs = {
  field: PrismicTermsAndConditionsFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type PrismicTermsAndConditionsSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<PrismicTermsAndConditionsFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type PrismicTypePathType = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly kind: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly path: ReadonlyArray<Scalars['String']>;
  readonly type: Scalars['String'];
};

type PrismicTypePathTypeConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicTypePathTypeEdge>;
  readonly group: ReadonlyArray<PrismicTypePathTypeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicTypePathType>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicTypePathTypeConnection_distinctArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};


type PrismicTypePathTypeConnection_groupArgs = {
  field: PrismicTypePathTypeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type PrismicTypePathTypeEdge = {
  readonly next: Maybe<PrismicTypePathType>;
  readonly node: PrismicTypePathType;
  readonly previous: Maybe<PrismicTypePathType>;
};

type PrismicTypePathTypeFieldsEnum =
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'kind'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'path'
  | 'type';

type PrismicTypePathTypeFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly kind: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly path: InputMaybe<StringQueryOperatorInput>;
  readonly type: InputMaybe<StringQueryOperatorInput>;
};

type PrismicTypePathTypeGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<PrismicTypePathTypeEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<PrismicTypePathTypeGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<PrismicTypePathType>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type PrismicTypePathTypeGroupConnection_distinctArgs = {
  field: PrismicTypePathTypeFieldsEnum;
};


type PrismicTypePathTypeGroupConnection_groupArgs = {
  field: PrismicTypePathTypeFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type PrismicTypePathTypeSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<PrismicTypePathTypeFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type Query = {
  readonly allDirectory: DirectoryConnection;
  readonly allFile: FileConnection;
  readonly allHotArticle: HotArticleConnection;
  readonly allImageSharp: ImageSharpConnection;
  readonly allPrismicAdsContent: PrismicAdsContentConnection;
  readonly allPrismicAdvertisementContents: PrismicAdvertisementContentsConnection;
  readonly allPrismicEmbedType: PrismicEmbedTypeConnection;
  readonly allPrismicFaq: PrismicFaqConnection;
  readonly allPrismicGlobalContents: PrismicGlobalContentsConnection;
  readonly allPrismicIr: PrismicIrConnection;
  readonly allPrismicMemberProfile: PrismicMemberProfileConnection;
  readonly allPrismicPayContents: PrismicPayContentsConnection;
  readonly allPrismicSiteNavigation: PrismicSiteNavigationConnection;
  readonly allPrismicTeamBanner: PrismicTeamBannerConnection;
  readonly allPrismicTeamContents: PrismicTeamContentsConnection;
  readonly allPrismicTeamsArticle: PrismicTeamsArticleConnection;
  readonly allPrismicTermsAndConditions: PrismicTermsAndConditionsConnection;
  readonly allPrismicTypePathType: PrismicTypePathTypeConnection;
  readonly allSite: SiteConnection;
  readonly allSiteBuildMetadata: SiteBuildMetadataConnection;
  readonly allSiteFunction: SiteFunctionConnection;
  readonly allSitePage: SitePageConnection;
  readonly allSitePlugin: SitePluginConnection;
  readonly directory: Maybe<Directory>;
  readonly file: Maybe<File>;
  readonly hotArticle: Maybe<HotArticle>;
  readonly imageSharp: Maybe<ImageSharp>;
  readonly prismicAdsContent: Maybe<PrismicAdsContent>;
  readonly prismicAdvertisementContents: Maybe<PrismicAdvertisementContents>;
  readonly prismicEmbedType: Maybe<PrismicEmbedType>;
  readonly prismicFaq: Maybe<PrismicFaq>;
  readonly prismicGlobalContents: Maybe<PrismicGlobalContents>;
  readonly prismicIr: Maybe<PrismicIr>;
  readonly prismicMemberProfile: Maybe<PrismicMemberProfile>;
  readonly prismicPayContents: Maybe<PrismicPayContents>;
  readonly prismicSiteNavigation: Maybe<PrismicSiteNavigation>;
  readonly prismicTeamBanner: Maybe<PrismicTeamBanner>;
  readonly prismicTeamContents: Maybe<PrismicTeamContents>;
  readonly prismicTeamsArticle: Maybe<PrismicTeamsArticle>;
  readonly prismicTermsAndConditions: Maybe<PrismicTermsAndConditions>;
  readonly prismicTypePathType: Maybe<PrismicTypePathType>;
  readonly site: Maybe<Site>;
  readonly siteBuildMetadata: Maybe<SiteBuildMetadata>;
  readonly siteFunction: Maybe<SiteFunction>;
  readonly sitePage: Maybe<SitePage>;
  readonly sitePlugin: Maybe<SitePlugin>;
};


type Query_allDirectoryArgs = {
  filter: InputMaybe<DirectoryFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<DirectorySortInput>;
};


type Query_allFileArgs = {
  filter: InputMaybe<FileFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<FileSortInput>;
};


type Query_allHotArticleArgs = {
  filter: InputMaybe<HotArticleFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<HotArticleSortInput>;
};


type Query_allImageSharpArgs = {
  filter: InputMaybe<ImageSharpFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<ImageSharpSortInput>;
};


type Query_allPrismicAdsContentArgs = {
  filter: InputMaybe<PrismicAdsContentFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<PrismicAdsContentSortInput>;
};


type Query_allPrismicAdvertisementContentsArgs = {
  filter: InputMaybe<PrismicAdvertisementContentsFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<PrismicAdvertisementContentsSortInput>;
};


type Query_allPrismicEmbedTypeArgs = {
  filter: InputMaybe<PrismicEmbedTypeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<PrismicEmbedTypeSortInput>;
};


type Query_allPrismicFaqArgs = {
  filter: InputMaybe<PrismicFaqFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<PrismicFaqSortInput>;
};


type Query_allPrismicGlobalContentsArgs = {
  filter: InputMaybe<PrismicGlobalContentsFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<PrismicGlobalContentsSortInput>;
};


type Query_allPrismicIrArgs = {
  filter: InputMaybe<PrismicIrFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<PrismicIrSortInput>;
};


type Query_allPrismicMemberProfileArgs = {
  filter: InputMaybe<PrismicMemberProfileFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<PrismicMemberProfileSortInput>;
};


type Query_allPrismicPayContentsArgs = {
  filter: InputMaybe<PrismicPayContentsFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<PrismicPayContentsSortInput>;
};


type Query_allPrismicSiteNavigationArgs = {
  filter: InputMaybe<PrismicSiteNavigationFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<PrismicSiteNavigationSortInput>;
};


type Query_allPrismicTeamBannerArgs = {
  filter: InputMaybe<PrismicTeamBannerFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<PrismicTeamBannerSortInput>;
};


type Query_allPrismicTeamContentsArgs = {
  filter: InputMaybe<PrismicTeamContentsFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<PrismicTeamContentsSortInput>;
};


type Query_allPrismicTeamsArticleArgs = {
  filter: InputMaybe<PrismicTeamsArticleFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<PrismicTeamsArticleSortInput>;
};


type Query_allPrismicTermsAndConditionsArgs = {
  filter: InputMaybe<PrismicTermsAndConditionsFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<PrismicTermsAndConditionsSortInput>;
};


type Query_allPrismicTypePathTypeArgs = {
  filter: InputMaybe<PrismicTypePathTypeFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<PrismicTypePathTypeSortInput>;
};


type Query_allSiteArgs = {
  filter: InputMaybe<SiteFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SiteSortInput>;
};


type Query_allSiteBuildMetadataArgs = {
  filter: InputMaybe<SiteBuildMetadataFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SiteBuildMetadataSortInput>;
};


type Query_allSiteFunctionArgs = {
  filter: InputMaybe<SiteFunctionFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SiteFunctionSortInput>;
};


type Query_allSitePageArgs = {
  filter: InputMaybe<SitePageFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SitePageSortInput>;
};


type Query_allSitePluginArgs = {
  filter: InputMaybe<SitePluginFilterInput>;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
  sort: InputMaybe<SitePluginSortInput>;
};


type Query_directoryArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
};


type Query_fileArgs = {
  absolutePath: InputMaybe<StringQueryOperatorInput>;
  accessTime: InputMaybe<DateQueryOperatorInput>;
  atime: InputMaybe<DateQueryOperatorInput>;
  atimeMs: InputMaybe<FloatQueryOperatorInput>;
  base: InputMaybe<StringQueryOperatorInput>;
  birthTime: InputMaybe<DateQueryOperatorInput>;
  birthtime: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs: InputMaybe<FloatQueryOperatorInput>;
  blksize: InputMaybe<IntQueryOperatorInput>;
  blocks: InputMaybe<IntQueryOperatorInput>;
  changeTime: InputMaybe<DateQueryOperatorInput>;
  childImageSharp: InputMaybe<ImageSharpFilterInput>;
  children: InputMaybe<NodeFilterListInput>;
  childrenImageSharp: InputMaybe<ImageSharpFilterListInput>;
  ctime: InputMaybe<DateQueryOperatorInput>;
  ctimeMs: InputMaybe<FloatQueryOperatorInput>;
  dev: InputMaybe<IntQueryOperatorInput>;
  dir: InputMaybe<StringQueryOperatorInput>;
  ext: InputMaybe<StringQueryOperatorInput>;
  extension: InputMaybe<StringQueryOperatorInput>;
  gid: InputMaybe<IntQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  ino: InputMaybe<FloatQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  mode: InputMaybe<IntQueryOperatorInput>;
  modifiedTime: InputMaybe<DateQueryOperatorInput>;
  mtime: InputMaybe<DateQueryOperatorInput>;
  mtimeMs: InputMaybe<FloatQueryOperatorInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nlink: InputMaybe<IntQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prettySize: InputMaybe<StringQueryOperatorInput>;
  rdev: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory: InputMaybe<StringQueryOperatorInput>;
  relativePath: InputMaybe<StringQueryOperatorInput>;
  root: InputMaybe<StringQueryOperatorInput>;
  size: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<IntQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};


type Query_hotArticleArgs = {
  articleId: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  email: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  image: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  price: InputMaybe<StringQueryOperatorInput>;
  region: InputMaybe<StringQueryOperatorInput>;
};


type Query_imageSharpArgs = {
  children: InputMaybe<NodeFilterListInput>;
  fixed: InputMaybe<ImageSharpFixedFilterInput>;
  fluid: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData: InputMaybe<JSONQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  original: InputMaybe<ImageSharpOriginalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
  resize: InputMaybe<ImageSharpResizeFilterInput>;
};


type Query_prismicAdsContentArgs = {
  _previewable: InputMaybe<IDQueryOperatorInput>;
  alternate_languages: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  children: InputMaybe<NodeFilterListInput>;
  data: InputMaybe<PrismicAdsContentDataTypeFilterInput>;
  dataRaw: InputMaybe<JSONQueryOperatorInput>;
  first_publication_date: InputMaybe<DateQueryOperatorInput>;
  href: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  lang: InputMaybe<StringQueryOperatorInput>;
  last_publication_date: InputMaybe<DateQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prismicId: InputMaybe<IDQueryOperatorInput>;
  tags: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};


type Query_prismicAdvertisementContentsArgs = {
  _previewable: InputMaybe<IDQueryOperatorInput>;
  alternate_languages: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  children: InputMaybe<NodeFilterListInput>;
  dataRaw: InputMaybe<JSONQueryOperatorInput>;
  first_publication_date: InputMaybe<DateQueryOperatorInput>;
  href: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  lang: InputMaybe<StringQueryOperatorInput>;
  last_publication_date: InputMaybe<DateQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prismicId: InputMaybe<IDQueryOperatorInput>;
  tags: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};


type Query_prismicEmbedTypeArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};


type Query_prismicFaqArgs = {
  _previewable: InputMaybe<IDQueryOperatorInput>;
  alternate_languages: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  children: InputMaybe<NodeFilterListInput>;
  data: InputMaybe<PrismicFaqDataTypeFilterInput>;
  dataRaw: InputMaybe<JSONQueryOperatorInput>;
  first_publication_date: InputMaybe<DateQueryOperatorInput>;
  href: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  lang: InputMaybe<StringQueryOperatorInput>;
  last_publication_date: InputMaybe<DateQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prismicId: InputMaybe<IDQueryOperatorInput>;
  tags: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};


type Query_prismicGlobalContentsArgs = {
  _previewable: InputMaybe<IDQueryOperatorInput>;
  alternate_languages: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  children: InputMaybe<NodeFilterListInput>;
  data: InputMaybe<PrismicGlobalContentsDataTypeFilterInput>;
  dataRaw: InputMaybe<JSONQueryOperatorInput>;
  first_publication_date: InputMaybe<DateQueryOperatorInput>;
  href: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  lang: InputMaybe<StringQueryOperatorInput>;
  last_publication_date: InputMaybe<DateQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prismicId: InputMaybe<IDQueryOperatorInput>;
  tags: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};


type Query_prismicIrArgs = {
  _previewable: InputMaybe<IDQueryOperatorInput>;
  alternate_languages: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  children: InputMaybe<NodeFilterListInput>;
  data: InputMaybe<PrismicIrDataTypeFilterInput>;
  dataRaw: InputMaybe<JSONQueryOperatorInput>;
  first_publication_date: InputMaybe<DateQueryOperatorInput>;
  href: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  lang: InputMaybe<StringQueryOperatorInput>;
  last_publication_date: InputMaybe<DateQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prismicId: InputMaybe<IDQueryOperatorInput>;
  tags: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};


type Query_prismicMemberProfileArgs = {
  _previewable: InputMaybe<IDQueryOperatorInput>;
  alternate_languages: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  children: InputMaybe<NodeFilterListInput>;
  data: InputMaybe<PrismicMemberProfileDataTypeFilterInput>;
  dataRaw: InputMaybe<JSONQueryOperatorInput>;
  first_publication_date: InputMaybe<DateQueryOperatorInput>;
  href: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  lang: InputMaybe<StringQueryOperatorInput>;
  last_publication_date: InputMaybe<DateQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prismicId: InputMaybe<IDQueryOperatorInput>;
  tags: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};


type Query_prismicPayContentsArgs = {
  _previewable: InputMaybe<IDQueryOperatorInput>;
  alternate_languages: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  children: InputMaybe<NodeFilterListInput>;
  data: InputMaybe<PrismicPayContentsDataTypeFilterInput>;
  dataRaw: InputMaybe<JSONQueryOperatorInput>;
  first_publication_date: InputMaybe<DateQueryOperatorInput>;
  href: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  lang: InputMaybe<StringQueryOperatorInput>;
  last_publication_date: InputMaybe<DateQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prismicId: InputMaybe<IDQueryOperatorInput>;
  tags: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};


type Query_prismicSiteNavigationArgs = {
  _previewable: InputMaybe<IDQueryOperatorInput>;
  alternate_languages: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  children: InputMaybe<NodeFilterListInput>;
  data: InputMaybe<PrismicSiteNavigationDataTypeFilterInput>;
  dataRaw: InputMaybe<JSONQueryOperatorInput>;
  first_publication_date: InputMaybe<DateQueryOperatorInput>;
  href: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  lang: InputMaybe<StringQueryOperatorInput>;
  last_publication_date: InputMaybe<DateQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prismicId: InputMaybe<IDQueryOperatorInput>;
  tags: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};


type Query_prismicTeamBannerArgs = {
  _previewable: InputMaybe<IDQueryOperatorInput>;
  alternate_languages: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  children: InputMaybe<NodeFilterListInput>;
  data: InputMaybe<PrismicTeamBannerDataTypeFilterInput>;
  dataRaw: InputMaybe<JSONQueryOperatorInput>;
  first_publication_date: InputMaybe<DateQueryOperatorInput>;
  href: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  lang: InputMaybe<StringQueryOperatorInput>;
  last_publication_date: InputMaybe<DateQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prismicId: InputMaybe<IDQueryOperatorInput>;
  tags: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};


type Query_prismicTeamContentsArgs = {
  _previewable: InputMaybe<IDQueryOperatorInput>;
  alternate_languages: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  children: InputMaybe<NodeFilterListInput>;
  data: InputMaybe<PrismicTeamContentsDataTypeFilterInput>;
  dataRaw: InputMaybe<JSONQueryOperatorInput>;
  first_publication_date: InputMaybe<DateQueryOperatorInput>;
  href: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  lang: InputMaybe<StringQueryOperatorInput>;
  last_publication_date: InputMaybe<DateQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prismicId: InputMaybe<IDQueryOperatorInput>;
  tags: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};


type Query_prismicTeamsArticleArgs = {
  _previewable: InputMaybe<IDQueryOperatorInput>;
  alternate_languages: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  children: InputMaybe<NodeFilterListInput>;
  data: InputMaybe<PrismicTeamsArticleDataTypeFilterInput>;
  dataRaw: InputMaybe<JSONQueryOperatorInput>;
  first_publication_date: InputMaybe<DateQueryOperatorInput>;
  href: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  lang: InputMaybe<StringQueryOperatorInput>;
  last_publication_date: InputMaybe<DateQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prismicId: InputMaybe<IDQueryOperatorInput>;
  tags: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};


type Query_prismicTermsAndConditionsArgs = {
  _previewable: InputMaybe<IDQueryOperatorInput>;
  alternate_languages: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  children: InputMaybe<NodeFilterListInput>;
  data: InputMaybe<PrismicTermsAndConditionsDataTypeFilterInput>;
  dataRaw: InputMaybe<JSONQueryOperatorInput>;
  first_publication_date: InputMaybe<DateQueryOperatorInput>;
  href: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  lang: InputMaybe<StringQueryOperatorInput>;
  last_publication_date: InputMaybe<DateQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  prismicId: InputMaybe<IDQueryOperatorInput>;
  tags: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
  uid: InputMaybe<StringQueryOperatorInput>;
  url: InputMaybe<StringQueryOperatorInput>;
};


type Query_prismicTypePathTypeArgs = {
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  kind: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  path: InputMaybe<StringQueryOperatorInput>;
  type: InputMaybe<StringQueryOperatorInput>;
};


type Query_siteArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pathPrefix: InputMaybe<StringQueryOperatorInput>;
  polyfill: InputMaybe<BooleanQueryOperatorInput>;
  siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash: InputMaybe<StringQueryOperatorInput>;
};


type Query_siteBuildMetadataArgs = {
  buildTime: InputMaybe<DateQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  parent: InputMaybe<NodeFilterInput>;
};


type Query_siteFunctionArgs = {
  absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  functionRoute: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginName: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
};


type Query_sitePageArgs = {
  children: InputMaybe<NodeFilterListInput>;
  component: InputMaybe<StringQueryOperatorInput>;
  componentChunkName: InputMaybe<StringQueryOperatorInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  internalComponentName: InputMaybe<StringQueryOperatorInput>;
  matchPath: InputMaybe<StringQueryOperatorInput>;
  pageContext: InputMaybe<JSONQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  path: InputMaybe<StringQueryOperatorInput>;
  pluginCreator: InputMaybe<SitePluginFilterInput>;
};


type Query_sitePluginArgs = {
  browserAPIs: InputMaybe<StringQueryOperatorInput>;
  children: InputMaybe<NodeFilterListInput>;
  id: InputMaybe<StringQueryOperatorInput>;
  internal: InputMaybe<InternalFilterInput>;
  name: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  packageJson: InputMaybe<JSONQueryOperatorInput>;
  parent: InputMaybe<NodeFilterInput>;
  pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  pluginOptions: InputMaybe<JSONQueryOperatorInput>;
  resolve: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  version: InputMaybe<StringQueryOperatorInput>;
};

type Site = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly jsxRuntime: Maybe<Scalars['String']>;
  readonly parent: Maybe<Node>;
  readonly pathPrefix: Maybe<Scalars['String']>;
  readonly polyfill: Maybe<Scalars['Boolean']>;
  readonly siteMetadata: Maybe<SiteSiteMetadata>;
  readonly trailingSlash: Maybe<Scalars['String']>;
};


type Site_buildTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type SiteBuildMetadata = Node & {
  readonly buildTime: Maybe<Scalars['Date']>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly parent: Maybe<Node>;
};


type SiteBuildMetadata_buildTimeArgs = {
  difference: InputMaybe<Scalars['String']>;
  formatString: InputMaybe<Scalars['String']>;
  fromNow: InputMaybe<Scalars['Boolean']>;
  locale: InputMaybe<Scalars['String']>;
};

type SiteBuildMetadataConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteBuildMetadataConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataConnection_groupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type SiteBuildMetadataEdge = {
  readonly next: Maybe<SiteBuildMetadata>;
  readonly node: SiteBuildMetadata;
  readonly previous: Maybe<SiteBuildMetadata>;
};

type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id';

type SiteBuildMetadataFilterInput = {
  readonly buildTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
};

type SiteBuildMetadataGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteBuildMetadataEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteBuildMetadataGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteBuildMetadata>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteBuildMetadataGroupConnection_distinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


type SiteBuildMetadataGroupConnection_groupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type SiteBuildMetadataSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type SiteConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteConnection_groupArgs = {
  field: SiteFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type SiteEdge = {
  readonly next: Maybe<Site>;
  readonly node: Site;
  readonly previous: Maybe<Site>;
};

type SiteFieldsEnum =
  | 'buildTime'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'jsxRuntime'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'pathPrefix'
  | 'polyfill'
  | 'siteMetadata.description'
  | 'siteMetadata.siteName'
  | 'siteMetadata.siteUrl'
  | 'siteMetadata.title'
  | 'trailingSlash';

type SiteFilterInput = {
  readonly buildTime: InputMaybe<DateQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly jsxRuntime: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly pathPrefix: InputMaybe<StringQueryOperatorInput>;
  readonly polyfill: InputMaybe<BooleanQueryOperatorInput>;
  readonly siteMetadata: InputMaybe<SiteSiteMetadataFilterInput>;
  readonly trailingSlash: InputMaybe<StringQueryOperatorInput>;
};

type SiteFunction = Node & {
  readonly absoluteCompiledFilePath: Scalars['String'];
  readonly children: ReadonlyArray<Node>;
  readonly functionRoute: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly matchPath: Maybe<Scalars['String']>;
  readonly originalAbsoluteFilePath: Scalars['String'];
  readonly originalRelativeFilePath: Scalars['String'];
  readonly parent: Maybe<Node>;
  readonly pluginName: Scalars['String'];
  readonly relativeCompiledFilePath: Scalars['String'];
};

type SiteFunctionConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteFunctionConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionConnection_groupArgs = {
  field: SiteFunctionFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type SiteFunctionEdge = {
  readonly next: Maybe<SiteFunction>;
  readonly node: SiteFunction;
  readonly previous: Maybe<SiteFunction>;
};

type SiteFunctionFieldsEnum =
  | 'absoluteCompiledFilePath'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'functionRoute'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'matchPath'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'pluginName'
  | 'relativeCompiledFilePath';

type SiteFunctionFilterInput = {
  readonly absoluteCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly functionRoute: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly matchPath: InputMaybe<StringQueryOperatorInput>;
  readonly originalAbsoluteFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly originalRelativeFilePath: InputMaybe<StringQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly pluginName: InputMaybe<StringQueryOperatorInput>;
  readonly relativeCompiledFilePath: InputMaybe<StringQueryOperatorInput>;
};

type SiteFunctionGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteFunctionEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteFunctionGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SiteFunction>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteFunctionGroupConnection_distinctArgs = {
  field: SiteFunctionFieldsEnum;
};


type SiteFunctionGroupConnection_groupArgs = {
  field: SiteFunctionFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type SiteFunctionSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<SiteFunctionFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type SiteGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SiteEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SiteGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<Site>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SiteGroupConnection_distinctArgs = {
  field: SiteFieldsEnum;
};


type SiteGroupConnection_groupArgs = {
  field: SiteFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type SitePage = Node & {
  readonly children: ReadonlyArray<Node>;
  readonly component: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly internalComponentName: Scalars['String'];
  readonly matchPath: Maybe<Scalars['String']>;
  readonly pageContext: Maybe<Scalars['JSON']>;
  readonly parent: Maybe<Node>;
  readonly path: Scalars['String'];
  readonly pluginCreator: Maybe<SitePlugin>;
};

type SitePageConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePageConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageConnection_groupArgs = {
  field: SitePageFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type SitePageEdge = {
  readonly next: Maybe<SitePage>;
  readonly node: SitePage;
  readonly previous: Maybe<SitePage>;
};

type SitePageFieldsEnum =
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'component'
  | 'componentChunkName'
  | 'id'
  | 'internalComponentName'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'matchPath'
  | 'pageContext'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'path'
  | 'pluginCreator.browserAPIs'
  | 'pluginCreator.children'
  | 'pluginCreator.children.children'
  | 'pluginCreator.children.children.children'
  | 'pluginCreator.children.children.id'
  | 'pluginCreator.children.id'
  | 'pluginCreator.children.internal.content'
  | 'pluginCreator.children.internal.contentDigest'
  | 'pluginCreator.children.internal.description'
  | 'pluginCreator.children.internal.fieldOwners'
  | 'pluginCreator.children.internal.ignoreType'
  | 'pluginCreator.children.internal.mediaType'
  | 'pluginCreator.children.internal.owner'
  | 'pluginCreator.children.internal.type'
  | 'pluginCreator.children.parent.children'
  | 'pluginCreator.children.parent.id'
  | 'pluginCreator.id'
  | 'pluginCreator.internal.content'
  | 'pluginCreator.internal.contentDigest'
  | 'pluginCreator.internal.description'
  | 'pluginCreator.internal.fieldOwners'
  | 'pluginCreator.internal.ignoreType'
  | 'pluginCreator.internal.mediaType'
  | 'pluginCreator.internal.owner'
  | 'pluginCreator.internal.type'
  | 'pluginCreator.name'
  | 'pluginCreator.nodeAPIs'
  | 'pluginCreator.packageJson'
  | 'pluginCreator.parent.children'
  | 'pluginCreator.parent.children.children'
  | 'pluginCreator.parent.children.id'
  | 'pluginCreator.parent.id'
  | 'pluginCreator.parent.internal.content'
  | 'pluginCreator.parent.internal.contentDigest'
  | 'pluginCreator.parent.internal.description'
  | 'pluginCreator.parent.internal.fieldOwners'
  | 'pluginCreator.parent.internal.ignoreType'
  | 'pluginCreator.parent.internal.mediaType'
  | 'pluginCreator.parent.internal.owner'
  | 'pluginCreator.parent.internal.type'
  | 'pluginCreator.parent.parent.children'
  | 'pluginCreator.parent.parent.id'
  | 'pluginCreator.pluginFilepath'
  | 'pluginCreator.pluginOptions'
  | 'pluginCreator.resolve'
  | 'pluginCreator.ssrAPIs'
  | 'pluginCreator.version';

type SitePageFilterInput = {
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly component: InputMaybe<StringQueryOperatorInput>;
  readonly componentChunkName: InputMaybe<StringQueryOperatorInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly internalComponentName: InputMaybe<StringQueryOperatorInput>;
  readonly matchPath: InputMaybe<StringQueryOperatorInput>;
  readonly pageContext: InputMaybe<JSONQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly path: InputMaybe<StringQueryOperatorInput>;
  readonly pluginCreator: InputMaybe<SitePluginFilterInput>;
};

type SitePageGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePageEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SitePageGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePage>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePageGroupConnection_distinctArgs = {
  field: SitePageFieldsEnum;
};


type SitePageGroupConnection_groupArgs = {
  field: SitePageFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type SitePageSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<SitePageFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type SitePlugin = Node & {
  readonly browserAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly children: ReadonlyArray<Node>;
  readonly id: Scalars['ID'];
  readonly internal: Internal;
  readonly name: Maybe<Scalars['String']>;
  readonly nodeAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly packageJson: Maybe<Scalars['JSON']>;
  readonly parent: Maybe<Node>;
  readonly pluginFilepath: Maybe<Scalars['String']>;
  readonly pluginOptions: Maybe<Scalars['JSON']>;
  readonly resolve: Maybe<Scalars['String']>;
  readonly ssrAPIs: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly version: Maybe<Scalars['String']>;
};

type SitePluginConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePluginConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginConnection_groupArgs = {
  field: SitePluginFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type SitePluginEdge = {
  readonly next: Maybe<SitePlugin>;
  readonly node: SitePlugin;
  readonly previous: Maybe<SitePlugin>;
};

type SitePluginFieldsEnum =
  | 'browserAPIs'
  | 'children'
  | 'children.children'
  | 'children.children.children'
  | 'children.children.children.children'
  | 'children.children.children.id'
  | 'children.children.id'
  | 'children.children.internal.content'
  | 'children.children.internal.contentDigest'
  | 'children.children.internal.description'
  | 'children.children.internal.fieldOwners'
  | 'children.children.internal.ignoreType'
  | 'children.children.internal.mediaType'
  | 'children.children.internal.owner'
  | 'children.children.internal.type'
  | 'children.children.parent.children'
  | 'children.children.parent.id'
  | 'children.id'
  | 'children.internal.content'
  | 'children.internal.contentDigest'
  | 'children.internal.description'
  | 'children.internal.fieldOwners'
  | 'children.internal.ignoreType'
  | 'children.internal.mediaType'
  | 'children.internal.owner'
  | 'children.internal.type'
  | 'children.parent.children'
  | 'children.parent.children.children'
  | 'children.parent.children.id'
  | 'children.parent.id'
  | 'children.parent.internal.content'
  | 'children.parent.internal.contentDigest'
  | 'children.parent.internal.description'
  | 'children.parent.internal.fieldOwners'
  | 'children.parent.internal.ignoreType'
  | 'children.parent.internal.mediaType'
  | 'children.parent.internal.owner'
  | 'children.parent.internal.type'
  | 'children.parent.parent.children'
  | 'children.parent.parent.id'
  | 'id'
  | 'internal.content'
  | 'internal.contentDigest'
  | 'internal.description'
  | 'internal.fieldOwners'
  | 'internal.ignoreType'
  | 'internal.mediaType'
  | 'internal.owner'
  | 'internal.type'
  | 'name'
  | 'nodeAPIs'
  | 'packageJson'
  | 'parent.children'
  | 'parent.children.children'
  | 'parent.children.children.children'
  | 'parent.children.children.id'
  | 'parent.children.id'
  | 'parent.children.internal.content'
  | 'parent.children.internal.contentDigest'
  | 'parent.children.internal.description'
  | 'parent.children.internal.fieldOwners'
  | 'parent.children.internal.ignoreType'
  | 'parent.children.internal.mediaType'
  | 'parent.children.internal.owner'
  | 'parent.children.internal.type'
  | 'parent.children.parent.children'
  | 'parent.children.parent.id'
  | 'parent.id'
  | 'parent.internal.content'
  | 'parent.internal.contentDigest'
  | 'parent.internal.description'
  | 'parent.internal.fieldOwners'
  | 'parent.internal.ignoreType'
  | 'parent.internal.mediaType'
  | 'parent.internal.owner'
  | 'parent.internal.type'
  | 'parent.parent.children'
  | 'parent.parent.children.children'
  | 'parent.parent.children.id'
  | 'parent.parent.id'
  | 'parent.parent.internal.content'
  | 'parent.parent.internal.contentDigest'
  | 'parent.parent.internal.description'
  | 'parent.parent.internal.fieldOwners'
  | 'parent.parent.internal.ignoreType'
  | 'parent.parent.internal.mediaType'
  | 'parent.parent.internal.owner'
  | 'parent.parent.internal.type'
  | 'parent.parent.parent.children'
  | 'parent.parent.parent.id'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'resolve'
  | 'ssrAPIs'
  | 'version';

type SitePluginFilterInput = {
  readonly browserAPIs: InputMaybe<StringQueryOperatorInput>;
  readonly children: InputMaybe<NodeFilterListInput>;
  readonly id: InputMaybe<StringQueryOperatorInput>;
  readonly internal: InputMaybe<InternalFilterInput>;
  readonly name: InputMaybe<StringQueryOperatorInput>;
  readonly nodeAPIs: InputMaybe<StringQueryOperatorInput>;
  readonly packageJson: InputMaybe<JSONQueryOperatorInput>;
  readonly parent: InputMaybe<NodeFilterInput>;
  readonly pluginFilepath: InputMaybe<StringQueryOperatorInput>;
  readonly pluginOptions: InputMaybe<JSONQueryOperatorInput>;
  readonly resolve: InputMaybe<StringQueryOperatorInput>;
  readonly ssrAPIs: InputMaybe<StringQueryOperatorInput>;
  readonly version: InputMaybe<StringQueryOperatorInput>;
};

type SitePluginGroupConnection = {
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly edges: ReadonlyArray<SitePluginEdge>;
  readonly field: Scalars['String'];
  readonly fieldValue: Maybe<Scalars['String']>;
  readonly group: ReadonlyArray<SitePluginGroupConnection>;
  readonly max: Maybe<Scalars['Float']>;
  readonly min: Maybe<Scalars['Float']>;
  readonly nodes: ReadonlyArray<SitePlugin>;
  readonly pageInfo: PageInfo;
  readonly sum: Maybe<Scalars['Float']>;
  readonly totalCount: Scalars['Int'];
};


type SitePluginGroupConnection_distinctArgs = {
  field: SitePluginFieldsEnum;
};


type SitePluginGroupConnection_groupArgs = {
  field: SitePluginFieldsEnum;
  limit: InputMaybe<Scalars['Int']>;
  skip: InputMaybe<Scalars['Int']>;
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

type SitePluginSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<SitePluginFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type SiteSiteMetadata = {
  readonly description: Maybe<Scalars['String']>;
  readonly siteName: Maybe<Scalars['String']>;
  readonly siteUrl: Maybe<Scalars['String']>;
  readonly title: Maybe<Scalars['String']>;
};

type SiteSiteMetadataFilterInput = {
  readonly description: InputMaybe<StringQueryOperatorInput>;
  readonly siteName: InputMaybe<StringQueryOperatorInput>;
  readonly siteUrl: InputMaybe<StringQueryOperatorInput>;
  readonly title: InputMaybe<StringQueryOperatorInput>;
};

type SiteSortInput = {
  readonly fields: InputMaybe<ReadonlyArray<InputMaybe<SiteFieldsEnum>>>;
  readonly order: InputMaybe<ReadonlyArray<InputMaybe<SortOrderEnum>>>;
};

type SortOrderEnum =
  | 'ASC'
  | 'DESC';

type StringQueryOperatorInput = {
  readonly eq: InputMaybe<Scalars['String']>;
  readonly glob: InputMaybe<Scalars['String']>;
  readonly in: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly ne: InputMaybe<Scalars['String']>;
  readonly nin: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']>>>;
  readonly regex: InputMaybe<Scalars['String']>;
};

type TransformOptions = {
  readonly cropFocus: InputMaybe<ImageCropFocus>;
  readonly duotone: InputMaybe<DuotoneGradient>;
  readonly fit: InputMaybe<ImageFit>;
  readonly grayscale: InputMaybe<Scalars['Boolean']>;
  readonly rotate: InputMaybe<Scalars['Int']>;
  readonly trim: InputMaybe<Scalars['Float']>;
};

type WebPOptions = {
  readonly quality: InputMaybe<Scalars['Int']>;
};

type NotFoundPageQueryQueryVariables = Exact<{ [key: string]: never; }>;


type NotFoundPageQueryQuery = { readonly prismicSiteNavigation: { readonly _previewable: string, readonly data: { readonly header_entries: ReadonlyArray<{ readonly display_text: string | undefined, readonly link: { readonly url: string | undefined } | undefined }>, readonly sns_profiles: ReadonlyArray<{ readonly service: string | undefined, readonly link: { readonly url: string | undefined } | undefined }>, readonly copyright: { readonly html: string | undefined } | undefined, readonly contact_group: ReadonlyArray<{ readonly contact_info: { readonly html: string | undefined } | undefined } | undefined> | undefined, readonly footer_entries: ReadonlyArray<{ readonly display_text: string | undefined, readonly link: { readonly url: string | undefined } | undefined }> } } | undefined };

type UseSiteMetadataStaticQueryVariables = Exact<{ [key: string]: never; }>;


type UseSiteMetadataStaticQuery = { readonly site: { readonly siteMetadata: { readonly siteUrl: string | undefined } | undefined } | undefined };

type IndexPageQueryQueryVariables = Exact<{
  lang: InputMaybe<Scalars['String']>;
}>;


type IndexPageQueryQuery = { readonly prismicSiteNavigation: { readonly _previewable: string, readonly data: { readonly header_entries: ReadonlyArray<{ readonly display_text: string | undefined, readonly link: { readonly url: string | undefined } | undefined }>, readonly sns_profiles: ReadonlyArray<{ readonly service: string | undefined, readonly link: { readonly url: string | undefined } | undefined }>, readonly copyright: { readonly html: string | undefined } | undefined, readonly contact_group: ReadonlyArray<{ readonly contact_info: { readonly html: string | undefined } | undefined } | undefined> | undefined, readonly footer_entries: ReadonlyArray<{ readonly display_text: string | undefined, readonly link: { readonly url: string | undefined } | undefined }> } } | undefined, readonly prismicGlobalContents: { readonly _previewable: string, readonly data: { readonly main_page_title: string | undefined, readonly main_page_description: string | undefined, readonly app_store_link: string | undefined, readonly google_play_link: string | undefined, readonly one_link: string | undefined, readonly one_link_button_text: string | undefined, readonly main_opengraph_image: { readonly localFile: { readonly childImageSharp: { readonly fixed: { readonly src: string, readonly width: number, readonly height: number } | undefined } | undefined } | undefined } | undefined, readonly main_body: ReadonlyArray<{ readonly __typename: 'PrismicGlobalContentsDataMainBodyCentreSection', readonly primary: { readonly title: { readonly text: string | undefined } | undefined, readonly text: { readonly html: string | undefined } | undefined, readonly image: { readonly url: string | undefined, readonly alt: string | undefined, readonly localFile: { readonly childImageSharp: { readonly gatsbyImageData: any } | undefined } | undefined, readonly dimensions: { readonly width: number, readonly height: number } | undefined, readonly thumbnails: { readonly mobile: { readonly url: string | undefined, readonly dimensions: { readonly width: number, readonly height: number } | undefined } | undefined } | undefined } | undefined } } | { readonly __typename: 'PrismicGlobalContentsDataMainBodyDownloadSection', readonly primary: { readonly title: { readonly text: string | undefined } | undefined } } | { readonly __typename: 'PrismicGlobalContentsDataMainBodyHeroSection', readonly primary: { readonly background_color: string | undefined, readonly title: { readonly html: string | undefined } | undefined, readonly text: { readonly html: string | undefined } | undefined, readonly side_image: { readonly url: string | undefined, readonly localFile: { readonly childImageSharp: { readonly gatsbyImageData: any } | undefined } | undefined, readonly dimensions: { readonly width: number, readonly height: number } | undefined } | undefined } } | { readonly __typename: 'PrismicGlobalContentsDataMainBodyIllustrationSection', readonly primary: { readonly inverted: boolean | undefined, readonly title: { readonly html: string | undefined } | undefined, readonly text: { readonly html: string | undefined } | undefined, readonly image: { readonly localFile: { readonly childImageSharp: { readonly gatsbyImageData: any } | undefined } | undefined } | undefined } } | { readonly __typename: 'PrismicGlobalContentsDataMainBodyMockupSection', readonly primary: { readonly background_color: string | undefined, readonly text_highlight_color: string | undefined, readonly phone_mockup_component: string | undefined, readonly inverted: boolean | undefined, readonly text: { readonly html: string | undefined } | undefined }, readonly items: ReadonlyArray<{ readonly icon: string | undefined, readonly text: string | undefined }> } | { readonly __typename: 'PrismicGlobalContentsDataMainBodyParallaxSection', readonly primary: { readonly top_icon: string | undefined, readonly title: { readonly html: string | undefined } | undefined, readonly top_text: { readonly text: string | undefined } | undefined, readonly background_image: { readonly localFile: { readonly childImageSharp: { readonly gatsbyImageData: any } | undefined } | undefined } | undefined } } | { readonly __typename: 'PrismicGlobalContentsDataMainBodyPopularSection', readonly primary: { readonly more_button: string | undefined, readonly title: { readonly text: string | undefined } | undefined } } | { readonly __typename: 'PrismicGlobalContentsDataMainBodyReviewSection', readonly primary: { readonly background_color: string | undefined, readonly title: { readonly html: string | undefined } | undefined }, readonly items: ReadonlyArray<{ readonly user_name: string | undefined, readonly user_region: string | undefined, readonly text_highlight_color: string | undefined, readonly content: { readonly html: string | undefined } | undefined }> }> } } | undefined, readonly hotArticles: { readonly nodes: ReadonlyArray<{ readonly price: string | undefined, readonly region: string | undefined, readonly image: string | undefined, readonly articleId: string | undefined }> } };

type AboutPageQueryQueryVariables = Exact<{
  lang: InputMaybe<Scalars['String']>;
  dateFormat: InputMaybe<Scalars['String']>;
}>;


type AboutPageQueryQuery = { readonly prismicSiteNavigation: { readonly _previewable: string, readonly data: { readonly header_entries: ReadonlyArray<{ readonly display_text: string | undefined, readonly link: { readonly url: string | undefined } | undefined }>, readonly sns_profiles: ReadonlyArray<{ readonly service: string | undefined, readonly link: { readonly url: string | undefined } | undefined }>, readonly copyright: { readonly html: string | undefined } | undefined, readonly contact_group: ReadonlyArray<{ readonly contact_info: { readonly html: string | undefined } | undefined } | undefined> | undefined, readonly footer_entries: ReadonlyArray<{ readonly display_text: string | undefined, readonly link: { readonly url: string | undefined } | undefined }> } } | undefined, readonly prismicGlobalContents: { readonly _previewable: string, readonly data: { readonly about_page_title: string | undefined, readonly about_page_description: string | undefined, readonly about_opengraph_image: { readonly localFile: { readonly childImageSharp: { readonly fixed: { readonly src: string, readonly width: number, readonly height: number } | undefined } | undefined } | undefined } | undefined, readonly about_title: { readonly html: string | undefined } | undefined, readonly about_background_image: { readonly localFile: { readonly childImageSharp: { readonly gatsbyImageData: any } | undefined } | undefined } | undefined, readonly about_body: ReadonlyArray<{ readonly __typename: 'PrismicGlobalContentsDataAboutBodyDetailsList', readonly items: ReadonlyArray<{ readonly label: string | undefined, readonly text: string | undefined }> } | { readonly __typename: 'PrismicGlobalContentsDataAboutBodySubtitleAndImages', readonly primary: { readonly subtitle: { readonly text: string | undefined } | undefined }, readonly items: ReadonlyArray<{ readonly image: { readonly url: string | undefined, readonly alt: string | undefined, readonly localFile: { readonly childImageSharp: { readonly gatsbyImageData: any } | undefined } | undefined, readonly dimensions: { readonly width: number, readonly height: number } | undefined, readonly thumbnails: { readonly mobile: { readonly url: string | undefined, readonly dimensions: { readonly width: number, readonly height: number } | undefined } | undefined } | undefined } | undefined }> } | { readonly __typename: 'PrismicGlobalContentsDataAboutBodySubtitleAndLinks', readonly primary: { readonly subtitle: { readonly text: string | undefined } | undefined }, readonly items: ReadonlyArray<{ readonly text: string | undefined, readonly date: string | undefined, readonly link: { readonly url: string | undefined } | undefined }> } | { readonly __typename: 'PrismicGlobalContentsDataAboutBodySubtitleAndText', readonly primary: { readonly subtitle: { readonly text: string | undefined } | undefined, readonly text: { readonly html: string | undefined } | undefined } }> } } | undefined };


}
