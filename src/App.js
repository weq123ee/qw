import React, { useState } from 'react';
import './App.css';

const initialMovies = [
  { id: 1, title: '奧術', genre: '科幻', rating: 10, image: '/奧術.jpg', description: '富裕的烏托邦都市皮爾托福和髒亂、充斥威脅的地下城市佐恩間的衝突不斷升級。菲艾和吉茵珂絲被捲著一場由相違背的理念與奧術科技而起的衝突。' },
  { id: 2, title: '膽大黨', genre: '動作科幻', rating: 9.5, image: '/膽大黨.jpg', description: '綾瀨桃必須以念力壓制男同學身上未完全脫離的詛咒，開始與他牽扯進一連串跟靈異與外星人有關的事件中。' },
  { id: 3, title: '死神', genre: '科幻', rating: 9.9, image: '/死神.jpg', description: '死神講述一名能看見亡魂高中生的冒險故事' },
  { id: 4, title: '影后', genre: '科幻', rating: 9, image: '/影后.jpg', description: '描述素人臨演史艾瑪（林廷憶飾演）成名後的秘密心事，以全新觀點挖掘角色內心。' },
  { id: 5, title: '咒術迴戰', genre: '科幻', rating: 9.3, image: '/咒術迴戰.jpg', description: '只有使用一種被稱為「咒力」的能量才得以祓除，而負責祓除的人被稱為「咒術師」。' },  
  { id: 6, title: '地獄公使', genre: '科幻', rating: 8.5, image: '/公使.png', description: '一種超自然現象長期在世界各地出現，受害者會見到「天使」，並被宣告將在何時死亡並下地獄' }
];


function App() {
  const [genre, setGenre] = useState('All');
  const [selectedMovie, setSelectedMovie] = useState(null); 
  const [recommendedMovies, setRecommendedMovies] = useState(initialMovies);

  const handleGenreChange = (event) => {
    const selectedGenre = event.target.value;
    setGenre(selectedGenre);

    if (selectedGenre === 'All') {
      setRecommendedMovies(initialMovies);
    } else {
      const filteredMovies = initialMovies.filter(movie => movie.genre === selectedGenre);
      setRecommendedMovies(filteredMovies);
    }
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie); 
  };

  const renderMovieDetails = () => {
    if (!selectedMovie) return null;

    return (
      <div className="movie-details">
        <h2>{selectedMovie.title}</h2>
        <img src={selectedMovie.image} alt={selectedMovie.title} style={{ width: '300px', height: 'auto' }} />
        <p><strong>類型:</strong> {selectedMovie.類型}</p>
        <p><strong>推薦分數:</strong> {selectedMovie.推薦分數}</p>
        <p><strong>介紹:</strong> {selectedMovie.description}</p>
        
     

      </div>
    );
  };

  return (
    <div className="App">
      <h1>動漫電影推薦</h1>
      
      <div>
        <label htmlFor="genre">選擇類型:</label>
        <select id="genre" value={genre} onChange={handleGenreChange}>
          <option value="All">All</option>
          <option value="科幻">科幻</option>
          <option value="動作科幻">動作科幻</option>
          <option value="刺激">刺激</option>
          <option value="暴力">暴力</option>
          <option value="感人">感人</option>
        </select>
      </div>

      <div>
        <h2>動漫電影</h2>
        <div className="movie-list">
          {recommendedMovies.map(movie => (
            <div
              key={movie.id}
              className="movie-item"
              onClick={() => handleMovieClick(movie)} 
              style={{ cursor: 'pointer', margin: '20px', display: 'inline-block' }}
            >
              <img src={movie.image} alt={movie.title} style={{ width: '150px', height: '200px' }} />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {renderMovieDetails()} 
    </div>
  );
}

export default App;
