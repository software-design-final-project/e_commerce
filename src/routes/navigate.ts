import express from "express"
const router = express.Router()

router.get('/', (_,res) => {
    res.render('index.ejs')
})

router.get('/index', (_,res) => {
    res.render('index.ejs')
})

router.get('/blog', (_,res) => {
    res.render('blog.ejs')
})

router.get('/blog-single', (_,res) => {
    res.render('blog-single.ejs')
})

router.get('/blog1-single',(req,res) =>{
    res.render('blog1-single.ejs')
})

router.get('/blog2-single',(req,res) =>{
    res.render('blog2-single.ejs')
})

router.get('/login', (_,res) => {
   res.render('login.ejs')
})

router.get('/login-seller',(req,res) =>{
    res.render('login-seller.ejs')
})

 router.get('/shop', (_,res) => {
    res.render('shop.ejs')
 })

router.get('/product-details', (_,res) => {
    res.render('product-details.ejs')
 })

 router.get('/blog1-product-details', (_,res) => {
    res.render('blog1-product-details.ejs')
 })

 router.get('/blog2-product-details', (_,res) => {
    res.render('blog2-product-details.ejs')
 })

router.get('/cart', (_,res) => {
    res.render('cart.ejs')
})

router.get('/checkout', (_,res) => {
    res.render('checkout.ejs')
})

router.get('/contact-us', (_,res) => {
    res.render('contact-us.ejs')
})

 router.get('/perfil', (_,res) => {
    res.render('shop.ejs')
 })

 router.get('/perfil', (_,res) => {
    res.render('login-.ejs')
 })

export default router