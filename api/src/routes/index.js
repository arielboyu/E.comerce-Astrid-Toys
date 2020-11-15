const { Router } = require('express');
// import all routers;
const productRouter = require('./product.js');
const categoryRouter = require('./category.js');
const orderRouter = require ('./order.js');
const userRouter = require('./user.js');
const noticeRouter = require('./notice.js');



const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use('/products', productRouter);
router.use('/categories', categoryRouter);
router.use('/orders', orderRouter);
router.use('/users', userRouter )
router.use('/notice', noticeRouter);

module.exports = router;
