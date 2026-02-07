import ArticleItem from './ArticleItem';

function ArticleList({ articles }) {
  return (
    <ul>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </ul>
  );
}

export default ArticleList;