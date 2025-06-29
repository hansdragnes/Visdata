import React, { useEffect, useState } from 'react';
import FilterPanel from './FilterPanel';

function DataDisplay({ source }) {
  const [data, setData] = useState(null);
  const [filterText, setFilterText] = useState('');
  const [filterField, setFilterField] = useState('');
  const [products, setProducts] = useState([]);

  // Nullstill filter når source endres
  useEffect(() => {
    setFilterText('');
    setFilterField('');
  }, [source]);

  useEffect(() => {
    async function fetchData() {
      let url = '';
      if (source === 'carts') {
        url = 'https://dummyjson.com/carts/';
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

  // Oppdater filterField når products endres
  useEffect(() => {
    if (products.length > 0) {
      setFilterField(Object.keys(products[0])[0]);
    }
  }, [products]);

  if (!data) return <p>Laster data...</p>;

  const availableFields = products.length > 0 ? Object.keys(products[0]) : [];

  // Filtrer produkter
  const filteredProducts = filterText && filterField
    ? products.filter(item => String(item[filterField]).toLowerCase().includes(filterText.toLowerCase()))
    : products;

  // Funksjon for å lagre filtrert resultat i LocalStorage
  const handleSave = () => {
    try {
      localStorage.setItem('filtrert_resultat', JSON.stringify(filteredProducts));
      alert('Filtrert resultat lagret i nettleseren!');
    } catch (e) {
      alert('Kunne ikke lagre resultatet.');
    }
  };

  return (
    <div>
      <h2>Data fra {source}</h2>
      {availableFields.length > 0 && (
        <FilterPanel
          filterText={filterText}
          setFilterText={setFilterText}
          filterField={filterField}
          setFilterField={setFilterField}
          availableFields={availableFields}
        />
      )}
      <button onClick={handleSave}>
        Lagre filtrert resultat lokalt
      </button>
      <pre>{JSON.stringify(filteredProducts, null, 2)}</pre>
    </div>
  );
}

export default DataDisplay;
