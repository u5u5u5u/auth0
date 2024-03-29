import { getSession, Claims } from "@auth0/nextjs-auth0";
import type {
  NextPage,
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import Article from "../../components/Article";
import { client } from "../../libs/client";
import { Article as ArticleType, ArticleListDetail } from "../../types";

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { req, res } = context;
  const id = context?.params?.id as string;
  const session = await getSession(req, res);
  if (!session) {
    return { props: {} };
  }

  const data = await client.getListDetail<ArticleType>({
    endpoint: "articles",
    contentId: id,
  });
  return {
    props: {
      data,
      user: session.user,
    },
  };
};

type Props = {
  data?: ArticleListDetail;
  user?: Claims;
};

const PrivateId: NextPage<Props> = ({ data, user }) => {
  if (!user || !data) {
    return <main>ログインが必要です</main>;
  }
  return <Article data={data} />;
};

export default PrivateId;
