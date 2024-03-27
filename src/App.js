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
  const [category , setCategory] = useState(filterData[0].title);

 async function dataGathering(){
    setLoading(true);
    try{
      const response = await fetch(apiUrl);
      const output = await response.json();
      setCourses(output.data);
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
    <div className="min-h-screen flex flex-col bg-bgDark2">
        <div>
          <NavBar/>
        </div>

        <div>
          <Filter
          filterData={filterData}
          category={category} 
          setCategory={setCategory}/>
        </div>

        <div>
          {
            loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
          }
        </div>

    </div>
  );
}

export default App;
