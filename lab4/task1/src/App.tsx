import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [age, setAge] = useState(''); 

  const [nameError, setNameError] = useState(''); 
  const [emailError, setEmailError] = useState(''); 
  const [ageError, setAgeError] = useState(''); 

  const [success, setSuccess] = useState(false); 

  
const validateName = (val: string) => {
    if (!val) return 'Name is required';
    if (val.length < 2) return 'Name must be at least 2 characters';
    return ''; 
  };

  const validateEmail = (val: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!val) return 'Email is required';
    if (!emailRegex.test(val)) return 'Invalid email format';
    return '';
  };

  const validateAge = (val: string) => {
    if (!val) return 'Age is required';
    if (isNaN(Number(val)) || Number(val) < 18) return 'Age must be a number and at least 18';
    return '';
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы

    // Валидируем все поля перед отправкой
    const nErr = validateName(name);
    const eErr = validateEmail(email);
    const aErr = validateAge(age);

    setNameError(nErr);
    setEmailError(eErr);
    setAgeError(aErr);

    // Если ошибок нет, показываем успех
    if (!nErr && !eErr && !aErr) {
      setSuccess(true);
      // Очистка полей
      setName('');
      setEmail('');
      setAge('');
    } else {
      setSuccess(false);
    }
  };

  return (
    <div className="registration-container">
      <h2>User Registration</h2>
      
      {/* Сообщение об успехе (Task 3) */}
      {success && <p style={{ color: 'green' }}>Registration successful!</p>}

      <form onSubmit={handleSubmit}>
        
        {/* Поле Имя (Task 1 & 2) */}
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              const val = e.target.value;
              setName(val);
              setNameError(validateName(val));
            }}
          />
          {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
        </div>

        {/* Поле Email (Task 1 & 2) */}
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              const val = e.target.value;
              setEmail(val);
              setEmailError(validateEmail(val));
            }}
          />
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        </div>

        {/* Поле Возраст (Task 1 & 2) */}
        <div className="form-group">
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => {
              const val = e.target.value;
              setAge(val);
              setAgeError(validateAge(val));
            }}
          />
          {ageError && <p style={{ color: 'red' }}>{ageError}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;