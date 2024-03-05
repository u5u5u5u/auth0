import { MicroCMSListResponse, MicroCMSListContent } from "microcms-js-sdk";

//microCMSのAPIのレスポンスの型を定義
export type Article = {
  title?: string;
  private: boolean;
};

export type ArticleList = MicroCMSListResponse<Article>;
export type ArticleListDetail = Article & MicroCMSListContent;
