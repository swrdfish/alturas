'use strict'

const _ = require('underscore')
const Backbone = require('backbone')
const fs = require('fs');


let template = fs.readFileSync(`${__dirname}/../../templates/welcome.html`, 'utf8')
let setupTpl = fs.readFileSync(`${__dirname}/../../templates/serverSetup.html`, 'utf8')

let WelcomeView = Backbone.View.extend({
	tagName: 'div',

	attributes: {
		'id': 'welcome-wrapper'
	},

	// Cache the templete
	welcomeTpl: _.template(template),

	serverSetupTpl: _.template(setupTpl),

	// Bind events
	events: {
		'click #btn-server': 'setupServer',
		'click #btn-client': 'setupClient',
		'click #btn-create-account': 'shout',
		'click #back-to-1': 'back'
	},

	// Rerender the titles of the todo item.
	render: function(page) {
		console.log(typeof page)
		switch(page){
			case "1":
				this.$el.html( this.welcomeTpl() )
				break
			case "2":
				this.$el.html( this.serverSetupTpl() )
				break			
		}
		return this;
	},

	setupServer: function(){
		potatorouter.navigate('welcome/2', true)
		console.log("initiate server setup")
	},

	setupClient: function(){
		potatorouter.navigate('welcome/1', true)
		console.log("initiate client setup")
	},

	shout: function(){
		console.log('Yeah!')
	},

	back: function(){
		potatorouter.navigate('welcome/1', true)
	}
})

module.exports = WelcomeView