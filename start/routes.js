'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
// Route.on('/').render('FirstTimeLogin')
//  Route.on('/').render('CampaignCreationForm')
// Route.on('/').render('CampaignCreation2')
// Route.on('/').render('CampaignCreation3')
//  Route.on('/').render('CampaignCreation4')
//  Route.on('/').render('CampaignCreation5')

Route.on('/campaigns').render('Campaign')
Route.on('/analytics').render('Analytics')
Route.on('/inbox').render('Inbox')
Route.on('/library').render('Library')
Route.on('/shortlist').render('Shortlist')
