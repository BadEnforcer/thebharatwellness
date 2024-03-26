import { Router } from "express";

const blogRouter = Router()


//#region blog view
blogRouter.get('/', (req, res) => {
    res.send('Blog subdomain homepage')
});

blogRouter.get('/view/:blogId', (req,res)=> {
    // get blog details
    // check if blog is available for free users
    // if blog is not free and user is not paid, then redirect to subscription page with err message
    // else send blog page

    res.send(`sending blog with Id ${req.params.blogId}`)
})


blogRouter.get('/catagories', (req,res)=> {
    res.send('list of all blog catogries')
})



//#endregion blog view

export default blogRouter;