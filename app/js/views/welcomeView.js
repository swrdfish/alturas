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
		'submit': 'createAdminAccount',
		'click #back-to-1': 'back'
	},

	// Rerender the titles of the todo item.
	render(page) {
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

	setupServer(){
		potatorouter.navigate('welcome/2', true)
		console.log("initiate server setup")
	},

	setupClient(){
		potatorouter.navigate('welcome/1', true)
		console.log("initiate client setup")
	},

	createAdminAccount(e){
		e.preventDefault()
		// validate password
		let email = this.$("#create-acc-email").val(),
			pass = this.$("#create-acc-pass").val(),
			retype = this.$("#create-acc-retype").val()
		if(pass !== retype)
			console.log("passwords didn't match")
		else
			console.log("create account with\nemail: " + email + "\npass: " + pass)

	},

	back(){
		potatorouter.navigate('welcome/1', true)
	}
})

module.exports = WelcomeView