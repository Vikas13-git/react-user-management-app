import { useEffect,useState } from "react";

function useFetch(url){
const[data,setData] = useState(null);
const[loading,setLoading]=useState(true);
const[error,setError]=useState("");

useEffect(() =>{
const loadData = async () =>{
setLoading(true);
setError("");
setData(null);

try{
    const response = await fetch(url);

if(!response.ok){
throw new Error("Unable to load data");
}
const result = await response.json();
setData(result);
}
catch(error){
    setError(error.message)
}finally{
    setLoading(false);
}
}
loadData();
},[url]);
return{
    data,
    loading,
    error
};
}
export default useFetch;