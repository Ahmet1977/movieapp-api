const express = require('express')
const router = express.Router()

// import the model
const MovieModel = require('../models/Movie')

// GET request with node-express-get snippet
router.get('/', (req, res) => {
  //res.send('GET request to the homepage')
  MovieModel.find()
      .then((movieList)=>{res.json(movieList)})
      .catch((error)=>{res.json(error)}) 
  
})

// GET details of a movie /api/movies/:movieId
router.get('/:movieId', (req, res) => {

    MovieModel.findById(req.params.movieId)
    .then((movie)=>{res.json(movie)})
    .catch((error)=>{res.json(error)}) 
})

// POST request to save Movies in the DB
router.post('/', (req, res, next) => {

    const newMovie = new MovieModel(req.body)
    newMovie.save()
    .then(movie=> {res.json(movie)})
    .catch((error)=>{res.json(error)}) 
})

// PUT Method to update a movie /api/movies/:movieId
router.put('/:movieId', (req, res, next) => {

    MovieModel.findByIdAndUpdate(req.params.movieId, req.body, {new:true})
    .then(movie=> {res.json(movie)})
    .catch((error)=>{res.json(error)})
})

// DELETE request to remove a movie from DB /api/movies/:movieId
router.delete('/:movieId', (req, res, next) => {

    MovieModel.findByIdAndRemove(req.params.movieId)
    .then(movie=> {res.json(movie)})
    .catch((error)=>{res.json(error)})
}) 

// Export the route
module.exports = router