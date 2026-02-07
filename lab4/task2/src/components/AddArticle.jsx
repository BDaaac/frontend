function AddArticle({ name, summary, onChangeName, onChangeSummary, onClickAdd }) {
  return (
    <div style={{ marginBottom: '20px', padding: '15px', border: '1px solid #555' }}>
      <h3>Add New Article</h3>
      <input
        type="text"
        placeholder="Title"
        value={name}
        onChange={onChangeName}
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      />
      <textarea
        placeholder="Summary"
        value={summary}
        onChange={onChangeSummary}
        style={{ display: 'block', marginBottom: '10px', width: '100%' }}
      />
      <button onClick={onClickAdd}>Add Article</button>
    </div>
  );
}

export default AddArticle;