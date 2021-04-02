var express = require('express');
var router = express.Router();
const {Category, Question, Answer}= require('../lib/models');

// List out the questions for a particular category

// GET /api/v1/categories
// GET /api/v1/categories/:categoryId/questions
// POST /api/v1/categories/:categoryId/questions
// POST /api/v1/categories/:categoryId/questions/:questionId/answers
// GET /api/v1/categories/:categoryId/questions/:questionId/answers

router.get('/categories', async function(req, res, next){
    let categories = await Category.findAll({});
    res.json(categories);
});

router.post('/categories/:categoryId/questions', async function(req, res, next){
    let body = req.body;
    body.categoryId = req.params.categoryId;
    let question = await Question.create(body);
    res.json(question);
});

router.get('/categories/:categoryId/questions', async function(req, res, next){
    let questions = await Question.findAll({where: {categoryId: req.params.categoryId}, include: [{model: Answer}]});
    res.json(questions);
});

router.post('./categories/:categoryId/questions/:questionId/answers', async function(req, res, next){
    let body = req.body;
    body.questionId = req.params.questionId;
    let answer = await Answer.create(body);
    res.json(answer);
});

router.get('/categories/:categoryId/questions/:questionId/answers', async function(req, res, next){
    let answers = await Answer.findAll({where: {answerId: req.params.answerId}});
    res.json(answers);
});

module.exports = router;