import { addNewPlayer } from '../controllers/playerControllers';

//VAR THAT HOLDS ROUTES
const routes = (app) => {
    app.route('/players')
    //POST endpoint
        .post(addNewPlayer);
}

export default routes;
