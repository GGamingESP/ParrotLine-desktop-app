<<<<<<< HEAD
// IMPORT REACT
=======
// SearchBar.js
>>>>>>> 3d222ab55d74f6ab4dc362d5d0484d0f8896f3f8
import { useState } from 'react'

// FUNCION PRINCIPAL
function SearchBar() {
<<<<<<< HEAD
  // ESTADO
  const [searchItem, setSearchItem] = useState('')

  // HANDLER PARA CAMBIO DE BUSQUEDA
=======
  const [searchItem, setSearchItem] = useState('')

>>>>>>> 3d222ab55d74f6ab4dc362d5d0484d0f8896f3f8
  const handleInputChange = (e) => { 
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)
  }
  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder="Search Users..."
        className="w-full border border-gray-300 p-2 rounded-xl"
      />
    </div>
  );
}

export default SearchBar;
