import { useState, useEffect } from "react";
import { getAllStarships } from "../../services/sw-api";
import { Link } from "react-router-dom";

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([]);

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getAllStarships();
      setStarshipList(starshipData.results);
    };
    fetchStarshipList();
  }, []);

  return (
    <>
      <h1>Starship List</h1>
      {starshipList.length ? (
        <div className="icon-container">
          {starshipList.map((starship) => (
              <Link 
                to="/starship" 
                state={{ starship }} 
                key={starship.name}
              >
                <h2 className="class-div">{starship.name}</h2>
              </Link>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default StarshipList;
