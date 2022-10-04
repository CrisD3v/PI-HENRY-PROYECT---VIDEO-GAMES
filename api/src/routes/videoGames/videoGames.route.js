const { Router } = require('express');

const router = Router();

const {
    getDataApi,
    getAllData,
    getDataById,
    getDataDB
} = require('./getData')

const {postDataVideoGames} = require('./postData')

router.get('/', getAllData )

router.get('/:idGames', getDataById )


router.post('/', postDataVideoGames)

module.exports = router;