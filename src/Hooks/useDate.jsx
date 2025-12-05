import { useState, useEffect } from "react";
const useDate = () => {
  const [currentDate, setcurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentDate(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return [currentDate];
};

export default useDate;
