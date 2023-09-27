import  { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Cards from "../../Components/Cards/Cards";
import Header from "../../Header/Header";
// import SearchBar from "../../Components/SearchBar/SearchBar";

const Home = () => {
  const initialCards = useLoaderData();
  const [filteredCards, setFilteredCards] = useState(initialCards);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const location = useLocation();

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredCards(initialCards);
    } else {
      const filtered = initialCards.filter((Card) =>
        Card.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCards(filtered);
      console.log(filtered);
    }

    setSearchPerformed(true);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setFilteredCards(initialCards);
      setSearchPerformed(false);
    }
  }, [location.pathname, initialCards]);

  

  return (
    <div>
      <div>
      <Header onSearch={handleSearch} />
      <Cards cards={searchPerformed ? filteredCards : initialCards} />
    </div>
    </div>
  );
};

export default Home;
