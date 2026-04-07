import { useEffect, useState } from "react"
import { ResCard } from "./RestrauntCard"
import { Shimmer } from "./Shimmer"
import { Footer } from "./Footer"




export const Body = () => {

    const [listOfRes , setListoFRes] = useState([])
    const [searchText,setSearchText] = useState("")
const [filterRestrauntData,setFilterRestrauntData] = useState([])



const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9939369&lng=77.5980282&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")


    const json = await data.json()
    // console.log(json.data.cards)

const resCard = json?.data?.cards.find((card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants)
// console.log("resCard" ,resCard)

setListoFRes(resCard?.card?.card?.gridElements?.infoWithStyle?.restaurants)
setFilterRestrauntData(resCard?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    
    
}




    useEffect(() => {

fetchData()

    },[])



const filterRestraunt = listOfRes.filter((res) => res.info.avgRating  > 4.4)



// const filterBySearch = listOfRes.filter((res) => res.info.name.includes(searchText) )

// console.log(filterBySearch

function handleSearch () {
const filterBySearch = listOfRes.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))


setFilterRestrauntData(filterBySearch)

 
}

      
    return listOfRes.length === 0  ? (
        <Shimmer/>


    ) : (


        <div className="body">

            <div className="filter">
                <div className="search">
                    <input type="text" placeholder="Enter Something"
                    value={searchText}
                    
                    onChange={(e) => setSearchText(e.target.value) } />


                    

        
    <button className="search-btn" onClick={handleSearch} >  Search </button> 


                </div>
                
                
                
                 <button className="filter-btn" onClick={() => setFilterRestrauntData(filterRestraunt)}> Top Rated Restraunt 
                </button> </div>
            <div className="res-container"> 
                {/* <ResCard resdata={resList[0]}/> */}
                
                
                  {filterRestrauntData.map((restraunt) => <ResCard  key={restraunt.info.id} resdata={restraunt} />)}



            </div>

            <Footer/>

        </div>
    )

}
