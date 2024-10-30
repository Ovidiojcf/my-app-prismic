// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type LadingpageDocumentDataSlicesSlice = TextSlice;

/**
 * Content for LadingPage documents
 */
interface LadingpageDocumentData {
  /**
   * Slice Zone field in *LadingPage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: ladingpage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<LadingpageDocumentDataSlicesSlice> /**
   * Meta Title field in *LadingPage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: ladingpage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *LadingPage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: ladingpage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *LadingPage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: ladingpage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * LadingPage document from Prismic
 *
 * - **API ID**: `ladingpage`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type LadingpageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<LadingpageDocumentData>,
    "ladingpage",
    Lang
  >;

export type AllDocumentTypes = LadingpageDocument;

/**
 * Primary content in *Text → Default → Primary*
 */
export interface TextSliceDefaultPrimary {
  /**
   * Heading field in *Text → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: add a title for this model
   * - **API ID Path**: text.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * paragraph field in *Text → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: add a descrption heree
   * - **API ID Path**: text.default.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  paragraph: prismic.RichTextField;

  /**
   *  request a demo field in *Text → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: text.default.primary.request_a_demo
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  request_a_demo: prismic.LinkField;
}

/**
 * Default variation for Text Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Text*
 */
type TextSliceVariation = TextSliceDefault;

/**
 * Text Shared Slice
 *
 * - **API ID**: `text`
 * - **Description**: Text
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TextSlice = prismic.SharedSlice<"text", TextSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  interface CreateWriteClient {
    (
      repositoryNameOrEndpoint: string,
      options: prismic.WriteClientConfig,
    ): prismic.WriteClient<AllDocumentTypes>;
  }

  interface CreateMigration {
    (): prismic.Migration<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      LadingpageDocument,
      LadingpageDocumentData,
      LadingpageDocumentDataSlicesSlice,
      AllDocumentTypes,
      TextSlice,
      TextSliceDefaultPrimary,
      TextSliceVariation,
      TextSliceDefault,
    };
  }
}
