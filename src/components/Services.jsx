import React, { useState } from 'react';

import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Services1 from '../assets/Services1.png';
import Services2 from '../assets/Services2.png';
import Services3 from '../assets/Services3.png';
import { useToast } from '@chakra-ui/react';

function Services() {
  const [show, setShow] = useState(false);
  const toast = useToast();
  const [isLoading, setLoading] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [recipeName, setRecipeName] = useState();
  const [ingredient1, setIngredient1] = useState();
  const [ingredient2, setIngredient2] = useState();
  const [ingredient3, setIngredient3] = useState();
  const [ingredient4, setIngredient4] = useState();
  const [ingredient5, setIngredient5] = useState();
  const [image, setImage] = useState();

  const submitHandler = async () => {
    if (
      !recipeName ||
      !ingredient1 ||
      !ingredient2 ||
      !ingredient3 ||
      !ingredient4 ||
      !ingredient5 ||
      !image
    ) {
      toast({
        title: 'Please fill all the feilds',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });
      return;
    }
    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };
      const { data } = await axios.post(
        'http://127.0.0.1:5000/api/recipe',
        {
          recipeName,
          ingredient1,
          ingredient2,
          ingredient3,
          ingredient4,
          ingredient5,
          image,
        },
        config
      );
      localStorage.setItem('recipeInfo', JSON.stringify(data));
      console.log(data);
      toast({
        title: 'Successfully created the recipe',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });
    } catch (err) {
      toast({
        title: 'Recipe creation failed',
        status: 'warning',
        duration: 5000,
        isClosable: true,
        position: 'bottom',
      });
    }
  };

  const postDetails = (pics) => {
    if (pics === undefined) {
      return;
    }

    console.log(pics);
    if (pics.type === 'image/jpeg' || pics.type === 'image/png') {
      setLoading(true);
      const data = new FormData();
      data.append('file', pics);
      data.append('upload_preset', 'chat-app');
      data.append('cloud_name', 'piyushproj');
      fetch('https://api.cloudinary.com/v1_1/piyushproj/image/upload', {
        method: 'post',
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setImage(data.url.toString());
          console.log(data.url.toString());
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return;
    }
  };

  return (
    <>
      <div className='ServicesTag' id='services'>
        <div className='title'>
          <h1 className='yellow'>What can you experience?</h1>
          <p>
            Our platform allows users to search for recipes by name, save their
            favorite recipes, and create custom recipe collections to share with
            friends and family.
          </p>
        </div>
        <div className='services'>
          <div className='service'>
            <img src={Services2} alt='' />
            <p>
              Our search function allows users to easily find and discover
              recipes based on its name
            </p>
            <button>Search Recipies</button>
          </div>
          <div className='service yellow'>
            <img src={Services1} alt='' />
            <p>
              Our recipe creation function enables users to personalize and save
              their own recipes, and make them available to the community.
            </p>
            <button onClick={handleShow}>Create Recipies</button>
          </div>
          <div className='service'>
            <img src={Services3} alt='' />
            <p>
              Our recipe update function allows users to make changes and
              adjustments to their own recipes, and keep them up-to-date.
            </p>
            <button>Update Recipies</button>
          </div>
        </div>
      </div>
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'
              >
                <Form.Label>Recipe Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Recipe Name'
                  name='recipeName'
                  onChange={(e) => setRecipeName(e.target.value)}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'
              >
                <Form.Label>Ingredient 1</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Ingredient 1'
                  name='ingredient1'
                  onChange={(e) => setIngredient1(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'
              >
                <Form.Label>Ingredient 2</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Ingredient 2'
                  name='ingredient2'
                  onChange={(e) => setIngredient2(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'
              >
                <Form.Label>Ingredient 3</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Ingredient 3'
                  name='ingredient3'
                  onChange={(e) => setIngredient3(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'
              >
                <Form.Label>Ingredient 4</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Ingredient 4'
                  name='ingredient4'
                  onChange={(e) => setIngredient4(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'
              >
                <Form.Label>Ingredient 5</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Ingredient 5'
                  name='ingredient5'
                  onChange={(e) => setIngredient5(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'
              >
                <Form.Label>Upload Image</Form.Label>
                <Form.Control
                  type='file'
                  accept='image/*'
                  placeholder='Upload image'
                  name='image'
                  onChange={(e) => postDetails(e.target.files[0])}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant='primary'
              disabled={isLoading}
              onClick={
                !isLoading
                  ? (e) => {
                      submitHandler();
                      handleClose();
                    }
                  : null
              }
            >
              {isLoading ? 'Loading…' : 'Submit'}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </>
  );
}

export default Services;
