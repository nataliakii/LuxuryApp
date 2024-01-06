// useLoading.js
import { useState, useEffect } from 'react';

const useLoading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., API request)
    const asyncOperation = async () => {
      // Replace this with your actual asynchronous operation
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });
      setLoading(false); // Set loading to false when the operation is complete
    };

    asyncOperation();
  }, []); // Empty dependency array means this effect runs once on mount

  return loading;
};

export default useLoading;
