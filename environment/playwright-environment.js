const { chromium } = require('playwright')
const AllureNodeEnvironment = require("jest-circus-allure-environment").default


class PlaywrightEnvironment extends AllureNodeEnvironment {

	async setup() {
		console.log('[ RUNNING TEST SUITE ]')
		await super.setup()
		this.global.browser = await chromium.launch({
			headless: false,
			devtools: false
		})
		this.global.context = await this.global.browser.newContext(
			{ viewport: { width: 1920, height: 1080 } }
		)
		this.global.page = await this.global.context.newPage()
		await this.global.context.setDefaultTimeout(5000)
		await this.global.page.goto(this.global.APP_URL)
	}

	async teardown() {
		console.log('[ CLOSE TEST SUITE ]')
		await super.teardown()
		await this.global.browser.close()
	}

	async handleTestEvent(event, state) {
		await super.handleTestEvent(event, state)
		switch (event.name) {
		case 'setup':
			break
		case 'add_hook':
			break
		case 'add_test':
			break
		case 'run_start':
			break
		case 'test_skip':
			break
		case 'test_todo':
			break
		case 'start_describe_definition':
			break
		case 'finish_describe_definition':
			break
		case 'run_describe_start':
			break
		case 'test_start':
			break
		case 'hook_start':
			break
		case 'hook_success':
			break
		case 'hook_failure':
			break
		case 'test_fn_start':
			break
		case 'test_fn_success':
			break
		case 'test_fn_failure':
			break
		case 'test_done':
			break
		case 'run_describe_finish':
			break
		case 'run_finish':
			break
		case 'teardown':
			break
		case 'error':
			await this.global.allure.attachment("Screenshot", await this.global.page.screenshot(), "image/png")
			break
		default:
			break
		}
	}
}

module.exports = PlaywrightEnvironment
