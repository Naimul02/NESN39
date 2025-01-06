import React, { useState } from 'react';
import { useEffect } from 'react';
import Section3 from './Section3';

const Chocolates = () => {
  const [chocolates, setChocolates] = useState([]);
  useEffect(() => {
    fetch('https://departmental-store-server.vercel.app/chocolateproducts')
      .then(res => res.json())
      .then(data => {
        setChocolates(data)
      })
  }, [])
  return (
    <div>
      {
        chocolates?.map(chocolate => <Section3
          chocolate={chocolate}
        ></Section3>)
      }

    </div>
  );
};

export default Chocolates;