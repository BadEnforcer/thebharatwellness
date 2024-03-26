import { Router } from "express"
const adminRouter = Router()

// # import middlewares 
import { isAdmin, isSuperAdmin, checkAdminAccess, CheckUserAuthentication } from "../middlewares/adminMiddlewares.js"


//# important NOTE: make sure the order of middlewares is correct. else normal users will be able to access the admin page
adminRouter.get('/', CheckUserAuthentication, checkAdminAccess, (req, res) => {
    res.send('Welcome to the admin portal, please login') // TODO: send the admin login page
})


adminRouter.get('/dashboard', checkAdminAccess, (req, res) => { // TODO: implement user id check for all routes
    res.send('this is dashboard')
})

//#region BLOGS management
adminRouter.get('/dashboard/blogs', checkAdminAccess, (req, res) => {
    res.send('here is the blogs dashboard') // TODO: this is where stats will be displayed
})

adminRouter.get('/dashboard/blogs/manage', isAdmin, (req, res) => {
    res.send('this page allows you to see all available commands')
})

adminRouter.get('/dashboard/blogs/manage/create_new', isAdmin, (req, res) => {
    res.send('you can create blogs from this page')
})

adminRouter.get('/dashboard/blogs/manage/update', isAdmin, (req, res) => {
    res.send('you can update/edit blogs from this page with both blog id and searching')
})

adminRouter.get('/dashboard/blogs/manage/delete', isAdmin, (req, res) => {
    res.send('you can delete blogs from this page using blog id')
})

//#endregion BLOGS management

adminRouter.get('/dashboard/orders', checkAdminAccess, (req, res) => {
    res.send('You will view order history here')
});

adminRouter.get('/dashboard/payments', checkAdminAccess, (req, res) => {
    res.send('You will view payment history here')
});







export default adminRouter