import type { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import { client } from "../libs/client";
import type { Article, ArticleList } from "../types";
import Login from "../components/Login";

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.getList<Article>({
    endpoint: "articles",
    queries: {
      fields: ["id", "private", "title"],
    },
  });

  return {
    props: {
      data,
    },
  };
};

type Props = {
  data: ArticleList;
};

const Index: NextPage<Props> = ({ data }) => {
  const { contents } = data;
  return (
    <>
      <Login />
      <div>
        <ul>
          {contents.map((content) => (
            <li key={content.id}>
              <Link
                href={`/${content.private ? "private" : "public"}/${content.id}`}
              >
                {content.title}
              </Link>
            </li>
          ))}
        </ul>
        <p>ざーこ</p>
      </div>
    </>
  );
};

export default Index;
