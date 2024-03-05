import {
  MicroCMSListResponse,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";

//microCMSのAPIのレスポンスの型を定義
export type Article = {
  title?: string;
  body?: string;
  thumbnail?: MicroCMSImage;
  private: boolean;
};

export type ArticleList = MicroCMSListResponse<Article>;
export type ArticleListDetail = Article & MicroCMSListContent;
