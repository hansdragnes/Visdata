import React from 'react';

function FilterPanel({ filterText, setFilterText, filterField, setFilterField, availableFields }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Søk..."
        value={filterText}
        onChange={e => setFilterText(e.target.value)}
        style={{ marginRight: '1rem' }}
      />
      <select value={filterField} onChange={e => setFilterField(e.target.value)}>
        {availableFields.map(field => (
          <option key={field} value={field}>{field}</option>
        ))}
      </select>
    </div>
  );
}

export default FilterPanel;
