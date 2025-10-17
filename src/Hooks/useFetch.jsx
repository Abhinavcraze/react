{/*This performed from the CustomHooks.jsx */}

import {useState , useEffect} from 'react';

const useFetch = (url) => {   {/*Anonymous func */}

    const [data, setData] = useState(null);
    const [error , setError] = useState(null);
    const [loading , setLoading] = useState(true);

    useEffect(() => {
    const timer = setTimeout(() => {
      fetch(url)     
      .then(response => {    {/*promise*/}
        if(!response.ok){        //if the link is wrong
          throw Error("Couldn't retrieve data from an server")
        }
        console.log(response);
        return response.json();
      })
      .then(data => {
        const coursesWithDefaults = data.map(course => ({
          ...course,
          purchased: false,
          show: true
        }));
        setData(coursesWithDefaults);
        setError(null);
        setLoading(false);
      })

      .catch(error => {
        console.log(error.message);
        setError(error.message);
        setLoading(false);
      });
    },5000);
    return ()=>clearTimeout(timer);
  }, [url]);

      return[data,error,loading,setData]
}

export default useFetch;