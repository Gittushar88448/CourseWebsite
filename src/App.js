import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import NavBar from "./components/NavBar";
import { filterData, apiUrl } from "./data";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function App() {
  const [courses , setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

 async function dataGathering(){
    setLoading(true);
    try{
      const response = await fetch(apiUrl);
      const data = await response.json();
      setCourses(data);
    }
    catch(error){
      toast.error("Data is not fetched");
    }
    setLoading(false);
  }

  useEffect(()=>{
    dataGathering();
  },[]);

  return (
    <div className="App">
        <div>
          <NavBar/>
        </div>

        <div>
          <Filter
          filterData={filterData}/>
        </div>

        <div>
          {
            loading ? (<Spinner/>) : (<Cards courses = {courses}/>)
          }
        </div>

    </div>
  );
}

export default App;
