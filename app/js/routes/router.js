'use strict'

const Backbone = require('backbone')
const _ = require('underscore')
const $ = require('jquery')
const WelcomeView = require('../views/welcomeView')

let welcomeview;

let PotatoRouter = Backbone.Router.extend({
	routes: {
		'': 'loadHome',
		'welcome/:page': 'welcomeScreen'
	},

	loadHome: function(param) {
		// Show the welcome screen
		// if(!localStorage.getItem('isConfigured')){
		// 	localStorage.setItem('isConfigured', true)
		// }
		potatorouter.navigate('welcome/1', true);
	},

	welcomeScreen: function(param) {
		if(welcomeview === undefined){
			welcomeview = new WelcomeView()
			$("#top-wrapper").html(welcomeview.el)
		}
		welcomeview.render(param)
	}
})

module.exports = PotatoRouter
