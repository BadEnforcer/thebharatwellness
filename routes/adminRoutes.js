import { Router } from "express"

const adminRouter = Router()

adminRoutes.get('/', (req, res) => {
    res.send('Welcome to the admin portal, please login')
})


adminRoutes.get('/dashboard', (req, res) => { // TODO: implement user id check for all routes
    res.send('this is dashboard')
})

//#region BLOGS management
adminRoutes.get('/dashboard/blogs', (req, res) => {
    res.send('here is the blogs dashboard')
})

adminRoutes.get('/dashboard/blogs/manage', (req, res) => {
    res.send('this page allows you to see all available commands')
})

adminRoutes.get('/dashboard/blogs/manage/create_new', (req, res) => {
    res.send('you can create blogs from this page')
})

adminRoutes.get('/dashboard/blogs/manage/update', (req, res) => {
    res.send('you can update/edit blogs from this page with both blog id and searching')
})

adminRoutes.get('/dashboard/blogs/manage/delete', (req, res) => {
    res.send('you can delete blogs from this page using blog id')
})

//#endregion BLOGS management





export default adminRouter