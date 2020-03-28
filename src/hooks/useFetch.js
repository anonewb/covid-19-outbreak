import React, { useState, useEffect } from "react";

const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return { response, error };
};

// const useFetch = (url, options) => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     try {
//       setLoading(true);
//       const fetchData = async () => {
//         const res = await fetch(url, options);
//         const json = await res.json();
//         setData(json);
//         setLoading(false);
//       };
//       fetchData();
//     } catch (err) {
//       setLoading(false);
//       console.log(err);
//       setError(err);
//     }

//     // fetch(url)
//     //   .then(res => res.json())
//     //   .then(res => {
//     //     setData(res);
//     //     setLoading(false);
//     //   })
//     //   .catch(err => {
//     //     setLoading(false);
//     //     console.log(err);
//     //     setError(err);
//     //   });
//   }, []);

//   return { loading, error, data };
// };

export default useFetch;
