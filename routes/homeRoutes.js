import { Router } from "express";
import debug from 'debug';

const homeRouter = Router()

homeRoutes.get('/', (req, res) => {
    debug('app')('serving homepage')
    res.send('homepage');
})


homeRoutes.get('/about', (req,res) => {
    res.send('about is page')
})

homeRoutes.get('/contact', (req, res) => {
    res.send('Contact us page')
})

export default homeRouter