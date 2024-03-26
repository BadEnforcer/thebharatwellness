// TODO: add response.render instead of response.send

import debug from "debug"


export async function isSuperAdmin(req, res, next){
    if(req.headers.host.split('.')[0] === 'admin' && req.user.isAuthenticated() && req.user.access_type === 'super_admin'){
        return next()
    } else if (req.user.access_type == 'admin' || req.user.access_type == 'adminViewer'){
        res.status(403).send('You are not authorized to view this page') 

    } else {
        res.status(403).send('You are not authorized to view this page') // TODO:  redirect to site homepage
    }
}

export async function isAdmin(req, res, next){
    if(req.user.isAuthenticated() &&
    (req.headers.host.split('.')[0] === 'admin' && (req.user.access_type === 'admin' || req.user.access_type === 'super_admin' || req.user.access_type == 'adminViewer')))
    {
        return next()
    } else {
        res.status(403).send('You are not authorized to view this page') // TODO: redirect to site homepage
    }
}

export async function checkAdminAccess(req, res, next){
    if(req.user.isAuthenticated() && 
    (req.headers.host.split('.')[0] === 'admin' && (req.user.access_type === 'admin' || req.user.access_type === 'super_admin' || req.user.access_type == 'adminViewer')))
    {
        return next()
    } else {
        debug('app')('A normal user tried to access admin page. UserID: ' + req.user.uid)
        res.status(404).send('Page not found.') // TODO: redirect to site homepage
    }
}

export async function CheckUserAuthentication(req, res, next){
    if(req.user.isAuthenticated()){
        return next()
    } else {
        debug('app')('A Anonomus user tried to access admin page.')
        res.status(404).send('Page not found.') // TODO: redirect to site homepage
    }
}