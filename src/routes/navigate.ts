import express from "express"
const router = express.Router()

router.get('/', (_,res) => {
    res.render('index.ejs')
})

router.get('/index', (_,res) => {
    res.render('index.ejs')
})


router.get('/blog-single', (_,res) => {
    res.render('blog-single.ejs')
})

router.get('/blog1-single', (_,res) => {
    res.render('blog1-single.ejs')
})

router.get('/blog2-single', (_,res) => {
    res.render('blog2-single.ejs')
})

router.get('/blog', (_,res) => {
    res.render('blog.ejs')
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

router.get('/login', (_,res) => {
   res.render('login.ejs')
})

router.get('/product-details', (_,res) => {
    res.render('product-details.ejs')
 })

 router.get('/shop', (_,res) => {
    res.render('shop.ejs')
 })

 

export default router