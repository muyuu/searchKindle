express = require 'express'
router = express.Router()

_ = require 'lodash'


# amazon api
util = require 'util'
amazonApiKeys = require './amazon'
OperationHelper = require( 'apac' ).OperationHelper

opHelper = new OperationHelper amazonApiKeys


# GET home page.
router.get '/:q', ( req, res )->
    opHelper.execute 'ItemSearch', {
        'SearchIndex'  : 'KindleStore'
        'Keywords'     : req.params.q
        'ResponseGroup': 'Images,ItemAttributes'
    }, ( err, results ) ->
        items = results.ItemSearchResponse.Items[0].Item
        res.json _.map items, ( i )->
            {
            name    : i.ItemAttributes[0].Title
            url     : i.DetailPageURL
            imageUrl: i.MediumImage[0].URL
            author  : i.ItemAttributes[0].Author
            }


module.exports = router;
