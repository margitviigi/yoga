const express = require('express')
const articleController = require('../controllers/articles')
const router = express.Router()
const db = require('../utils/db')

router.get('/', articleController.getAllArticles)
router.get('/article/:slug', articleController.getArticleBySlug)

router.get('/article/:slug/edit', (req, res) => {
    const sql = 'SELECT * FROM article WHERE slug = ?';
    db.query(sql, [req.params.slug], (error, results) => {
        if (error) throw error;
        if (results.length === 0) return res.status(404).send('Article not found');

        const article = results[0];
        res.render('edit_article', { body: article.body, slug: article.slug });
    });
});

router.post('/article/:slug/edit', async (req, res) => {
    try {
        const sql = 'UPDATE article SET name = ?, body = ? WHERE slug = ?'
        db.query(sql, [req.body.name, req.body.body, req.params.slug], (error, results) => {
            if (error) throw error;
            res.redirect(`/article/${req.params.slug}/edit`);
        })
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router