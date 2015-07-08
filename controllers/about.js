import React from 'react'
import BaseController from '../controller'

import Master from '../assets/js/master'
import About from '../assets/js/pages/about'

export default class AboutController extends BaseController {
	get() {
		this.react(<About />)
	}
}
