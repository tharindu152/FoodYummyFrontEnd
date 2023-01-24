import React, { useState } from 'react';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';

function Products() {
  const [search, setSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const toast = useToast();
  // const [deleterecipe, setdeleterecipe] = useState('');

  function handleChange(e) {
    const query = e.target.value;
    setSearch(query);
  }

  const handleSearch = async () => {
    console.log(search);
    if (!search) {
      toast({
        title: 'Please enter a search term',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });
      return;
    }
    //https://calm-blue-colt-sari.cyclic.app
    try {
      setLoading(true);
      const { data } = await axios.get(
        `http://127.0.0.1:5000/api/recipe?search=${search}`
      );
      console.log(data);
      setSearchResult(data);
      setLoading(false);

      if (data.length === 0) {
        toast({
          title: 'No recipies found. Please try another.',
          status: 'warning',
          duration: 5000,
          isClosable: true,
          position: 'bottom',
        });
      }

      // console.log(searchResult);
    } catch (error) {
      console.log(error);
    }
  };

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
            placeholder='Search key word pizza or what you created ...'
            onChange={handleChange}
            value={search}
          />

          <button
            onClick={
              !isLoading
                ? (e) => {
                    handleSearch();
                    setSearch('');
                  }
                : null
            }
          >
            {isLoading ? 'Searching…' : 'Search'}
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
              {/* <div className='prdctBtns'>
                <button>Update</button>
                <button
                  value={recipe._id}
                  name='recipeId'
                  // onClick={(e) => deleteItem(recipe._id)}
                >
                  Delete
                </button>
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
