import React, { useState } from 'react';
import axios from 'axios';

function Products() {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  // const [deleterecipe, setdeleterecipe] = useState('');

  function handleChange(e) {
    const query = e.target.value;
    setSearch(query);
  }

  const handleSearch = async () => {
    console.log(search);
    if (!search) {
      return;
    }

    try {
      const { data } = await axios.get(
        `https://calm-blue-colt-sari.cyclic.app/api/recipe?search=${search}`
      );
      console.log(data);
      setSearchResult(data);
      // console.log(searchResult);
    } catch (error) {
      console.log(error);
    }
  };

  function deleteItem(id) {
    setSearchResult((prevRecipies) => {
      return prevRecipies.filter((recipe) => recipe !== prevRecipies[id]);
    });
  }

  // useEffect(() => {
  //   handleSearch();
  // }, []);

  return (
    <div className='prdctSection' id='search'>
      <div className='title'>
        <h1>
          <span>Search</span> For your favorite Food!
        </h1>
      </div>
      <div className='prdctsContainer'>
        <div className='container'>
          <input
            type='text'
            placeholder='Search for favorite ...'
            onChange={handleChange}
            value={search}
          />

          <button
            onClick={(e) => {
              handleSearch();
              setSearch('');
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className='products'>
        {searchResult?.map((recipe, i) => {
          const str = recipe.recipeName;
          const recipeName = str.charAt(0).toUpperCase() + str.slice(1);
          return (
            <div className='product' key={i}>
              <div className='image'>
                <img src={recipe.image} alt='recipe' />
              </div>
              <h2>{recipeName}</h2>
              <ul>
                <li>{recipe.ingredient1}</li>
                <li>{recipe.ingredient2}</li>
                <li>{recipe.ingredient3}</li>
                <li>{recipe.ingredient4}</li>
                <li>{recipe.ingredient5}</li>
              </ul>
              <div className='prdctBtns'>
                <button>Update</button>
                <button id='i' onClick={deleteItem}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
