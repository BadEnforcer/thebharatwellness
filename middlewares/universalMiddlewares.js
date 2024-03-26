export async function def_isUserAuthenticated(req, res, next){
    if(req.user.isAuthenticated()){
        return next()
    } else {
        debug('app')('A anonymous user tried to access a login route, redirecting to login page first.')
        req.session.returnTo = req.originalUrl
        if (req.method === 'POST') {
            req.session.postData = req.body
        }
        res.redirect('/login') // TODO: replace with your login page URL
    }
}

export async function checkDomain(req, res, next){
    const subdomain = req.headers.host.split('.')[0];
    if(req.user && req.user.domain === subdomain){
        return next()
    } else {
        debug('app')('A user tried to access a page from a different domain. UserID: ' + req.user.uid)
        res.status(403).send('You are not authorized to view this page from this domain.') // TODO: redirect to site homepage
    }
}