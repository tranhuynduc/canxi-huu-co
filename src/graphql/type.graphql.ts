export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** Ngành [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/industry) */
export type Industry = Entry & {
  __typename?: 'Industry';
  contentfulMetadata: ContentfulMetadata;
  jobsCollection?: Maybe<IndustryJobsCollection>;
  linkedFrom?: Maybe<IndustryLinkingCollections>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** Ngành [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/industry) */
export type IndustryJobsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<IndustryJobsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobsFilter>;
};


/** Ngành [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/industry) */
export type IndustryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Ngành [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/industry) */
export type IndustrySlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Ngành [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/industry) */
export type IndustryTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IndustryCollection = {
  __typename?: 'IndustryCollection';
  items: Array<Maybe<Industry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type IndustryFilter = {
  AND?: InputMaybe<Array<InputMaybe<IndustryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IndustryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  jobs?: InputMaybe<CfJobsNestedFilter>;
  jobsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Nhóm ngành [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/industryGroup) */
export type IndustryGroup = Entry & {
  __typename?: 'IndustryGroup';
  contentfulMetadata: ContentfulMetadata;
  industriesCollection?: Maybe<IndustryGroupIndustriesCollection>;
  linkedFrom?: Maybe<IndustryGroupLinkingCollections>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** Nhóm ngành [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/industryGroup) */
export type IndustryGroupIndustriesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<IndustryGroupIndustriesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IndustryFilter>;
};


/** Nhóm ngành [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/industryGroup) */
export type IndustryGroupLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Nhóm ngành [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/industryGroup) */
export type IndustryGroupSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Nhóm ngành [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/industryGroup) */
export type IndustryGroupTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IndustryGroupCollection = {
  __typename?: 'IndustryGroupCollection';
  items: Array<Maybe<IndustryGroup>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type IndustryGroupFilter = {
  AND?: InputMaybe<Array<InputMaybe<IndustryGroupFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<IndustryGroupFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  industries?: InputMaybe<CfIndustryNestedFilter>;
  industriesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IndustryGroupIndustriesCollection = {
  __typename?: 'IndustryGroupIndustriesCollection';
  items: Array<Maybe<Industry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum IndustryGroupIndustriesCollectionOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type IndustryGroupLinkingCollections = {
  __typename?: 'IndustryGroupLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type IndustryGroupLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum IndustryGroupOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type IndustryJobsCollection = {
  __typename?: 'IndustryJobsCollection';
  items: Array<Maybe<Jobs>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum IndustryJobsCollectionOrder {
  CommunicationAsc = 'communication_ASC',
  CommunicationDesc = 'communication_DESC',
  InnerAsc = 'inner_ASC',
  InnerDesc = 'inner_DESC',
  LogicAsc = 'logic_ASC',
  LogicDesc = 'logic_DESC',
  MoveAsc = 'move_ASC',
  MoveDesc = 'move_DESC',
  MusicAsc = 'music_ASC',
  MusicDesc = 'music_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SpaceAsc = 'space_ASC',
  SpaceDesc = 'space_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  WordAsc = 'word_ASC',
  WordDesc = 'word_DESC'
}

export type IndustryLinkingCollections = {
  __typename?: 'IndustryLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  industryGroupCollection?: Maybe<IndustryGroupCollection>;
};


export type IndustryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type IndustryLinkingCollectionsIndustryGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<IndustryLinkingCollectionsIndustryGroupCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum IndustryLinkingCollectionsIndustryGroupCollectionOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum IndustryOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/jobs) */
export type Jobs = Entry & {
  __typename?: 'Jobs';
  communication?: Maybe<Scalars['Int']['output']>;
  contentfulMetadata: ContentfulMetadata;
  inner?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<JobsLinkingCollections>;
  logic?: Maybe<Scalars['Int']['output']>;
  move?: Maybe<Scalars['Int']['output']>;
  music?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  space?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  word?: Maybe<Scalars['Int']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/jobs) */
export type JobsCommunicationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/jobs) */
export type JobsInnerArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/jobs) */
export type JobsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/jobs) */
export type JobsLogicArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/jobs) */
export type JobsMoveArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/jobs) */
export type JobsMusicArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/jobs) */
export type JobsSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/jobs) */
export type JobsSpaceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/jobs) */
export type JobsTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/jobs) */
export type JobsWordArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type JobsCollection = {
  __typename?: 'JobsCollection';
  items: Array<Maybe<Jobs>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type JobsFilter = {
  AND?: InputMaybe<Array<InputMaybe<JobsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<JobsFilter>>>;
  communication?: InputMaybe<Scalars['Int']['input']>;
  communication_exists?: InputMaybe<Scalars['Boolean']['input']>;
  communication_gt?: InputMaybe<Scalars['Int']['input']>;
  communication_gte?: InputMaybe<Scalars['Int']['input']>;
  communication_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  communication_lt?: InputMaybe<Scalars['Int']['input']>;
  communication_lte?: InputMaybe<Scalars['Int']['input']>;
  communication_not?: InputMaybe<Scalars['Int']['input']>;
  communication_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  inner?: InputMaybe<Scalars['Int']['input']>;
  inner_exists?: InputMaybe<Scalars['Boolean']['input']>;
  inner_gt?: InputMaybe<Scalars['Int']['input']>;
  inner_gte?: InputMaybe<Scalars['Int']['input']>;
  inner_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  inner_lt?: InputMaybe<Scalars['Int']['input']>;
  inner_lte?: InputMaybe<Scalars['Int']['input']>;
  inner_not?: InputMaybe<Scalars['Int']['input']>;
  inner_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  logic?: InputMaybe<Scalars['Int']['input']>;
  logic_exists?: InputMaybe<Scalars['Boolean']['input']>;
  logic_gt?: InputMaybe<Scalars['Int']['input']>;
  logic_gte?: InputMaybe<Scalars['Int']['input']>;
  logic_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  logic_lt?: InputMaybe<Scalars['Int']['input']>;
  logic_lte?: InputMaybe<Scalars['Int']['input']>;
  logic_not?: InputMaybe<Scalars['Int']['input']>;
  logic_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  move?: InputMaybe<Scalars['Int']['input']>;
  move_exists?: InputMaybe<Scalars['Boolean']['input']>;
  move_gt?: InputMaybe<Scalars['Int']['input']>;
  move_gte?: InputMaybe<Scalars['Int']['input']>;
  move_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  move_lt?: InputMaybe<Scalars['Int']['input']>;
  move_lte?: InputMaybe<Scalars['Int']['input']>;
  move_not?: InputMaybe<Scalars['Int']['input']>;
  move_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  music?: InputMaybe<Scalars['Int']['input']>;
  music_exists?: InputMaybe<Scalars['Boolean']['input']>;
  music_gt?: InputMaybe<Scalars['Int']['input']>;
  music_gte?: InputMaybe<Scalars['Int']['input']>;
  music_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  music_lt?: InputMaybe<Scalars['Int']['input']>;
  music_lte?: InputMaybe<Scalars['Int']['input']>;
  music_not?: InputMaybe<Scalars['Int']['input']>;
  music_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  space?: InputMaybe<Scalars['Int']['input']>;
  space_exists?: InputMaybe<Scalars['Boolean']['input']>;
  space_gt?: InputMaybe<Scalars['Int']['input']>;
  space_gte?: InputMaybe<Scalars['Int']['input']>;
  space_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  space_lt?: InputMaybe<Scalars['Int']['input']>;
  space_lte?: InputMaybe<Scalars['Int']['input']>;
  space_not?: InputMaybe<Scalars['Int']['input']>;
  space_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  word?: InputMaybe<Scalars['Int']['input']>;
  word_exists?: InputMaybe<Scalars['Boolean']['input']>;
  word_gt?: InputMaybe<Scalars['Int']['input']>;
  word_gte?: InputMaybe<Scalars['Int']['input']>;
  word_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  word_lt?: InputMaybe<Scalars['Int']['input']>;
  word_lte?: InputMaybe<Scalars['Int']['input']>;
  word_not?: InputMaybe<Scalars['Int']['input']>;
  word_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type JobsLinkingCollections = {
  __typename?: 'JobsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  industryCollection?: Maybe<IndustryCollection>;
};


export type JobsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type JobsLinkingCollectionsIndustryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<JobsLinkingCollectionsIndustryCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum JobsLinkingCollectionsIndustryCollectionOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum JobsOrder {
  CommunicationAsc = 'communication_ASC',
  CommunicationDesc = 'communication_DESC',
  InnerAsc = 'inner_ASC',
  InnerDesc = 'inner_DESC',
  LogicAsc = 'logic_ASC',
  LogicDesc = 'logic_DESC',
  MoveAsc = 'move_ASC',
  MoveDesc = 'move_DESC',
  MusicAsc = 'music_ASC',
  MusicDesc = 'music_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SpaceAsc = 'space_ASC',
  SpaceDesc = 'space_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  WordAsc = 'word_ASC',
  WordDesc = 'word_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/linkedAnswer) */
export type LinkedAnswer = Entry & {
  __typename?: 'LinkedAnswer';
  contentfulMetadata: ContentfulMetadata;
  id?: Maybe<Scalars['String']['output']>;
  isEnd?: Maybe<Scalars['Boolean']['output']>;
  linkedFrom?: Maybe<LinkedAnswerLinkingCollections>;
  nextQuestion?: Maybe<LinkedQuestion>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/linkedAnswer) */
export type LinkedAnswerIdArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/linkedAnswer) */
export type LinkedAnswerIsEndArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/linkedAnswer) */
export type LinkedAnswerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/linkedAnswer) */
export type LinkedAnswerNextQuestionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LinkedQuestionFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/linkedAnswer) */
export type LinkedAnswerSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/linkedAnswer) */
export type LinkedAnswerTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type LinkedAnswerCollection = {
  __typename?: 'LinkedAnswerCollection';
  items: Array<Maybe<LinkedAnswer>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type LinkedAnswerFilter = {
  AND?: InputMaybe<Array<InputMaybe<LinkedAnswerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LinkedAnswerFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isEnd?: InputMaybe<Scalars['Boolean']['input']>;
  isEnd_exists?: InputMaybe<Scalars['Boolean']['input']>;
  isEnd_not?: InputMaybe<Scalars['Boolean']['input']>;
  nextQuestion?: InputMaybe<CfLinkedQuestionNestedFilter>;
  nextQuestion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LinkedAnswerLinkingCollections = {
  __typename?: 'LinkedAnswerLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  linkedQuestionCollection?: Maybe<LinkedQuestionCollection>;
};


export type LinkedAnswerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type LinkedAnswerLinkingCollectionsLinkedQuestionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LinkedAnswerLinkingCollectionsLinkedQuestionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum LinkedAnswerLinkingCollectionsLinkedQuestionCollectionOrder {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsStartAsc = 'isStart_ASC',
  IsStartDesc = 'isStart_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum LinkedAnswerOrder {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsEndAsc = 'isEnd_ASC',
  IsEndDesc = 'isEnd_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/linkedQuestion) */
export type LinkedQuestion = Entry & {
  __typename?: 'LinkedQuestion';
  answersCollection?: Maybe<LinkedQuestionAnswersCollection>;
  categories?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  contentfulMetadata: ContentfulMetadata;
  id?: Maybe<Scalars['String']['output']>;
  isStart?: Maybe<Scalars['Boolean']['output']>;
  linkedFrom?: Maybe<LinkedQuestionLinkingCollections>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/linkedQuestion) */
export type LinkedQuestionAnswersCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LinkedQuestionAnswersCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LinkedAnswerFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/linkedQuestion) */
export type LinkedQuestionCategoriesArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/linkedQuestion) */
export type LinkedQuestionIdArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/linkedQuestion) */
export type LinkedQuestionIsStartArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/linkedQuestion) */
export type LinkedQuestionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/linkedQuestion) */
export type LinkedQuestionSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/linkedQuestion) */
export type LinkedQuestionTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type LinkedQuestionAnswersCollection = {
  __typename?: 'LinkedQuestionAnswersCollection';
  items: Array<Maybe<LinkedAnswer>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum LinkedQuestionAnswersCollectionOrder {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsEndAsc = 'isEnd_ASC',
  IsEndDesc = 'isEnd_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type LinkedQuestionCollection = {
  __typename?: 'LinkedQuestionCollection';
  items: Array<Maybe<LinkedQuestion>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type LinkedQuestionFilter = {
  AND?: InputMaybe<Array<InputMaybe<LinkedQuestionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LinkedQuestionFilter>>>;
  answers?: InputMaybe<CfLinkedAnswerNestedFilter>;
  answersCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  categories_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categories_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categories_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categories_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isStart?: InputMaybe<Scalars['Boolean']['input']>;
  isStart_exists?: InputMaybe<Scalars['Boolean']['input']>;
  isStart_not?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LinkedQuestionLinkingCollections = {
  __typename?: 'LinkedQuestionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  linkedAnswerCollection?: Maybe<LinkedAnswerCollection>;
};


export type LinkedQuestionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type LinkedQuestionLinkingCollectionsLinkedAnswerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LinkedQuestionLinkingCollectionsLinkedAnswerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum LinkedQuestionLinkingCollectionsLinkedAnswerCollectionOrder {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsEndAsc = 'isEnd_ASC',
  IsEndDesc = 'isEnd_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum LinkedQuestionOrder {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsStartAsc = 'isStart_ASC',
  IsStartDesc = 'isStart_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  entryCollection?: Maybe<EntryCollection>;
  industry?: Maybe<Industry>;
  industryCollection?: Maybe<IndustryCollection>;
  industryGroup?: Maybe<IndustryGroup>;
  industryGroupCollection?: Maybe<IndustryGroupCollection>;
  jobs?: Maybe<Jobs>;
  jobsCollection?: Maybe<JobsCollection>;
  linkedAnswer?: Maybe<LinkedAnswer>;
  linkedAnswerCollection?: Maybe<LinkedAnswerCollection>;
  linkedQuestion?: Maybe<LinkedQuestion>;
  linkedQuestionCollection?: Maybe<LinkedQuestionCollection>;
  question?: Maybe<Question>;
  questionCollection?: Maybe<QuestionCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryIndustryArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryIndustryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<IndustryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IndustryFilter>;
};


export type QueryIndustryGroupArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryIndustryGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<IndustryGroupOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<IndustryGroupFilter>;
};


export type QueryJobsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryJobsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<JobsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<JobsFilter>;
};


export type QueryLinkedAnswerArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryLinkedAnswerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LinkedAnswerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LinkedAnswerFilter>;
};


export type QueryLinkedQuestionArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryLinkedQuestionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LinkedQuestionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<LinkedQuestionFilter>;
};


export type QueryQuestionArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryQuestionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<QuestionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QuestionFilter>;
};

/** Create a question for user to answer [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/question) */
export type Question = Entry & {
  __typename?: 'Question';
  answers?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  contentfulMetadata: ContentfulMetadata;
  enable?: Maybe<Scalars['Boolean']['output']>;
  linkedFrom?: Maybe<QuestionLinkingCollections>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  want?: Maybe<Scalars['String']['output']>;
};


/** Create a question for user to answer [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/question) */
export type QuestionAnswersArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Create a question for user to answer [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/question) */
export type QuestionEnableArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Create a question for user to answer [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/question) */
export type QuestionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Create a question for user to answer [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/question) */
export type QuestionSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Create a question for user to answer [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/question) */
export type QuestionTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Create a question for user to answer [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/question) */
export type QuestionTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Create a question for user to answer [See type definition](https://app.contentful.com/spaces/142hlbhpx049/content_types/question) */
export type QuestionWantArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type QuestionCollection = {
  __typename?: 'QuestionCollection';
  items: Array<Maybe<Question>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type QuestionFilter = {
  AND?: InputMaybe<Array<InputMaybe<QuestionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<QuestionFilter>>>;
  answers_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  answers_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  answers_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  answers_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  enable?: InputMaybe<Scalars['Boolean']['input']>;
  enable_exists?: InputMaybe<Scalars['Boolean']['input']>;
  enable_not?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  want?: InputMaybe<Scalars['String']['input']>;
  want_contains?: InputMaybe<Scalars['String']['input']>;
  want_exists?: InputMaybe<Scalars['Boolean']['input']>;
  want_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  want_not?: InputMaybe<Scalars['String']['input']>;
  want_not_contains?: InputMaybe<Scalars['String']['input']>;
  want_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QuestionLinkingCollections = {
  __typename?: 'QuestionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type QuestionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum QuestionOrder {
  EnableAsc = 'enable_ASC',
  EnableDesc = 'enable_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  WantAsc = 'want_ASC',
  WantDesc = 'want_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type CfIndustryNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfIndustryNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfIndustryNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  jobsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfJobsNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfJobsNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfJobsNestedFilter>>>;
  communication?: InputMaybe<Scalars['Int']['input']>;
  communication_exists?: InputMaybe<Scalars['Boolean']['input']>;
  communication_gt?: InputMaybe<Scalars['Int']['input']>;
  communication_gte?: InputMaybe<Scalars['Int']['input']>;
  communication_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  communication_lt?: InputMaybe<Scalars['Int']['input']>;
  communication_lte?: InputMaybe<Scalars['Int']['input']>;
  communication_not?: InputMaybe<Scalars['Int']['input']>;
  communication_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  inner?: InputMaybe<Scalars['Int']['input']>;
  inner_exists?: InputMaybe<Scalars['Boolean']['input']>;
  inner_gt?: InputMaybe<Scalars['Int']['input']>;
  inner_gte?: InputMaybe<Scalars['Int']['input']>;
  inner_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  inner_lt?: InputMaybe<Scalars['Int']['input']>;
  inner_lte?: InputMaybe<Scalars['Int']['input']>;
  inner_not?: InputMaybe<Scalars['Int']['input']>;
  inner_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  logic?: InputMaybe<Scalars['Int']['input']>;
  logic_exists?: InputMaybe<Scalars['Boolean']['input']>;
  logic_gt?: InputMaybe<Scalars['Int']['input']>;
  logic_gte?: InputMaybe<Scalars['Int']['input']>;
  logic_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  logic_lt?: InputMaybe<Scalars['Int']['input']>;
  logic_lte?: InputMaybe<Scalars['Int']['input']>;
  logic_not?: InputMaybe<Scalars['Int']['input']>;
  logic_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  move?: InputMaybe<Scalars['Int']['input']>;
  move_exists?: InputMaybe<Scalars['Boolean']['input']>;
  move_gt?: InputMaybe<Scalars['Int']['input']>;
  move_gte?: InputMaybe<Scalars['Int']['input']>;
  move_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  move_lt?: InputMaybe<Scalars['Int']['input']>;
  move_lte?: InputMaybe<Scalars['Int']['input']>;
  move_not?: InputMaybe<Scalars['Int']['input']>;
  move_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  music?: InputMaybe<Scalars['Int']['input']>;
  music_exists?: InputMaybe<Scalars['Boolean']['input']>;
  music_gt?: InputMaybe<Scalars['Int']['input']>;
  music_gte?: InputMaybe<Scalars['Int']['input']>;
  music_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  music_lt?: InputMaybe<Scalars['Int']['input']>;
  music_lte?: InputMaybe<Scalars['Int']['input']>;
  music_not?: InputMaybe<Scalars['Int']['input']>;
  music_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  space?: InputMaybe<Scalars['Int']['input']>;
  space_exists?: InputMaybe<Scalars['Boolean']['input']>;
  space_gt?: InputMaybe<Scalars['Int']['input']>;
  space_gte?: InputMaybe<Scalars['Int']['input']>;
  space_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  space_lt?: InputMaybe<Scalars['Int']['input']>;
  space_lte?: InputMaybe<Scalars['Int']['input']>;
  space_not?: InputMaybe<Scalars['Int']['input']>;
  space_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  word?: InputMaybe<Scalars['Int']['input']>;
  word_exists?: InputMaybe<Scalars['Boolean']['input']>;
  word_gt?: InputMaybe<Scalars['Int']['input']>;
  word_gte?: InputMaybe<Scalars['Int']['input']>;
  word_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  word_lt?: InputMaybe<Scalars['Int']['input']>;
  word_lte?: InputMaybe<Scalars['Int']['input']>;
  word_not?: InputMaybe<Scalars['Int']['input']>;
  word_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type CfLinkedAnswerNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfLinkedAnswerNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfLinkedAnswerNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isEnd?: InputMaybe<Scalars['Boolean']['input']>;
  isEnd_exists?: InputMaybe<Scalars['Boolean']['input']>;
  isEnd_not?: InputMaybe<Scalars['Boolean']['input']>;
  nextQuestion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfLinkedQuestionNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfLinkedQuestionNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfLinkedQuestionNestedFilter>>>;
  answersCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  categories_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categories_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categories_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  categories_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isStart?: InputMaybe<Scalars['Boolean']['input']>;
  isStart_exists?: InputMaybe<Scalars['Boolean']['input']>;
  isStart_not?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};
