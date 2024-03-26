import { Router } from "express";
import debug from 'debug';

const homeRouter = Router()

homeRouter.get('/', (req, res) => {
    debug('app')('serving homepage')
    res.send('homepage');
})


homeRouter.get('/about', (req,res) => {
    res.send('about is page')
})

homeRouter.get('/contact', (req, res) => {
    res.send('Contact us page')
})

app.post('/login', passport.authenticate('local', {
    successReturnToOrRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));

export default homeRouter