import React from 'react'
import BaseController from '../controller'

import Master from '../assets/js/master'
import Home from '../assets/js/pages/home'

export default class HomeController extends BaseController {
	get() {
		this.react(<Home />)
	}
}
