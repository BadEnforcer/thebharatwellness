import express from 'express';
import debug from 'debug';
import dotenv from 'dotenv';
import path from 'path';
// import subdomain from 'express-subdomain'
import vhost from 'vhost';

const expressApp = express();

dotenv.config();
debug.enable('app');

// Set the view engine to EJS
expressApp.set('view engine', 'ejs');
// expressApp.set('views', path.join(__dirname, 'views'));

// import and apply routers
import blogRouter from './routes/blogRoutes.js'
expressApp.use(vhost('blog.localhost', blogRouter))

import adminRouter from './routes/adminRoutes.js'
expressApp.use(vhost('admin.localhost', adminRouter))

import homeRouter from './routes/homeRoutes.js';
expressApp.use('/', homeRouter)



async function startApplication() {
    expressApp.listen(process.env.PORT || 8080, process.env.HOSTNAME || '0.0.0.0', () => {
        debug('app')(`Server is running on http://${process.env.HOSTNAME || '0.0.0.0'}:${process.env.PORT || 8080}`);
    });
}

startApplication();