export async function preventSuperAdmin(req, res, next){
    if(req.user.isAuthenticated() && req.user.access_type === 'super_admin'){
        res.status(403).send('You cannot purchase your own service. :3') // TODO: redirect to previous url
    } else {
        next()
    }
}