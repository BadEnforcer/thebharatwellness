authRouter.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/auth/google/failure' }),
    (req, res) => {
        const returnTo = req.session.returnTo || `${PREFIX}/profile`;
        delete req.session.returnTo;

        // Check if there is post data in the session
        if (req.session.postData) {
            // Handle post data
            // TODO: replace with your post data handling code

            // Delete post data from the session
            delete req.session.postData;
        }

        res.redirect(returnTo);
    }
);