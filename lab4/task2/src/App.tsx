import { useState } from 'react';
import AddArticle from './components/AddArticle';
import ArticleList from './components/ArticleList';

function App() {
  const [articles, setArticles] = useState([
    { id: 1, title: 'React Hooks', summary: 'Learn how to use useState and useEffect.' },
    { id: 2, title: 'Component Refactoring', summary: 'Break down large components into smaller ones.' }
  ]);

  const [newTitle, setNewTitle] = useState('');
  const [newSummary, setNewSummary] = useState('');

  const addArticle = () => {
    if (!newTitle || !newSummary) return;
    
    const newArticle = {
      id: Date.now(),
      title: newTitle,
      summary: newSummary
    };

    setArticles([...articles, newArticle]);
    setNewTitle('');
    setNewSummary('');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Article Manager</h1>
      
      {/* Форма добавления */}
      <AddArticle 
        name={newTitle}
        summary={newSummary}
        onChangeName={(e) => setNewTitle(e.target.value)}
        onChangeSummary={(e) => setNewSummary(e.target.value)}
        onClickAdd={addArticle}
      />

      {/* Список статей */}
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;