import { useState } from 'react';

function ArticleItem({ article }) {
  // Локальное состояние для управления видимостью (Task 3)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li style={{ marginBottom: '10px', listStyle: 'none', borderBottom: '1px solid #444' }}>
      <h3 onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer', color: '#646cff' }}>
        {article.title} {isOpen ? '▼' : '▶'}
      </h3>
      {isOpen && <p>{article.summary}</p>}
    </li>
  );
}

export default ArticleItem;