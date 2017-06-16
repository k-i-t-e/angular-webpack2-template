'use strict'

import {messages} from '../modules/TestData'

export default class ChatController {
	constructor() {
		this.messages = messages
	}

	send() {
		messages.push({
			sender:"kite",
			text: this.text
		})
		
		this.text = ""
	}
}