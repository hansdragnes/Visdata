import React, { useEffect, useState } from 'react';


function DataEnhetsregister({ source }) {
  const [data, setData] = useState(null);
  const [products, setProducts] = useState([]);

  

  useEffect(() => {
    async function fetchData() {
      let url = '';
      if (source === 'company') {
        url = 'https://data.brreg.no/enhetsregisteret/api/enheter/986352325';
      }
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        // Samle alle produkter fra alle carts
        if (result && Array.isArray(result.carts)) {
          const allProducts = result.carts.flatMap(cart => cart.products || []);
          setProducts(allProducts);
        }
      } catch (error) {
        console.error('Feil ved henting av data:', error);
      }
    }
    fetchData();
  }, [source]);
  
  return (
    <div>
      <h2>Data fra {source}</h2>
      
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default DataEnhetsregister;
