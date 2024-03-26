import { Router } from "express";
import { def_isUserAuthenticated } from "../middlewares/universalMiddlewares";
import { preventSuperAdmin } from "../middlewares/serviceMiddlewares";

const servicesRouter = Router();

servicesRouter.get('/', (req, res) => {
    res.send('Here is a showcase of our services.') // TODO: send the customer service login page
});

//#region NOTES

// def_isUserAuthenticated : middleware to check if user is authenticated on normal domain. For subdomains use the other one
// POST routes are for the form inside the webpages

//#endregion NOTES

servicesRouter.get('/WorkoutPlanning', (req, res) => {
    const postData = req.session.postData || req.body
    delete req.session.postData
});
servicesRouter.post('/WorkoutPlanning/requestConsultation', def_isUserAuthenticated, preventSuperAdmin, (req, res) => { });

servicesRouter.get('/NutritionPlanning', (req, res) => {
    const postData = req.session.postData || req.body
    delete req.session.postData
});
servicesRouter.post('/NutritionPlanning/requestConsultation', def_isUserAuthenticated, preventSuperAdmin, (req, res) => { });

servicesRouter.get('/PersonalTraining', (req, res) => {
    const postData = req.session.postData || req.body
    delete req.session.postData
});
servicesRouter.post('/PersonalTraining/requestConsultation', def_isUserAuthenticated, preventSuperAdmin, (req, res) => { });

servicesRouter.get('/selfDefenseTraining', (req, res) => { });
servicesRouter.post('/selfDefenseTraining/requestConsultation', def_isUserAuthenticated, preventSuperAdmin, (req, res) => {
    const postData = req.session.postData || req.body
    delete req.session.postData
});

servicesRouter.get('/workshops', (req, res) => { });
servicesRouter.get('/workshops/:workshopId', (req, res) => { });
servicesRouter.post('/workshops/:workshopId/register', def_isUserAuthenticated, preventSuperAdmin, (req, res) => {
    const postData = req.session.postData || req.body
    delete req.session.postData
});