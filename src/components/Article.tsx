import { FC } from "react";
import type { ArticleListDetail } from "../types";

type Props = {
  data: ArticleListDetail;
};

const Article: FC<Props> = ({ data }) => {
  const { title } = data;
  return (
    <main>
      <h1>{title}</h1>
    </main>
  );
};

export default Article;
