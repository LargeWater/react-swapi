import "../../App.css"
import { useState, useEffect } from "react"
import { getDetails } from "../../services/sw-api"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"

function StarshipPage() {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchStarshipDetails = async () => {
      const starshipData = await getDetails(location.state.starship.url)
      setStarshipDetails(starshipData)
    };
    fetchStarshipDetails()
  }, [location.state.starship.url])
  return (
    <>
      <div>
        {starshipDetails.name ? (
          <>
            <div>
              <h1>Starship Page</h1>
              <div className="class-div">
                <p>Name: {starshipDetails.name}</p>
                <p>Model: {starshipDetails.model}</p>
                <p>
                  {<Link 
                    to="/starship-list">
                    Back to Starship List
                  </Link>}
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <p>Loading starship details...</p>
          </>
        )}
      </div>
    </>
  )
}

export default StarshipPage
