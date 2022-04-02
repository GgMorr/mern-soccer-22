import { addNewPlayer, 
        getPlayers,
        getPlayerById,
        updatePlayer,
        deletePlayer 
        } from '../controllers/playerControllers';

//VAR THAT HOLDS ROUTES
const routes = (app) => {
    app.route('/players')

        //GET ENDPOINT
        .get(getPlayers)

        //POST endpoint
        .post(addNewPlayer);

    app.route('/player/:PlayerId')
    
        //GET SPECIFIC PLAYER
        .get(getPlayerById)

        //UPDATE SPECIFIC PLAYER
        .put(updatePlayer)

        //DELETE SPECIFIC PLAYER
        .delete(deletePlayer);
}

export default routes;
