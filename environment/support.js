const expectPW = require("expect-playwright")


class Allure {
	constructor(page) {
		this.page = page
	}

	static async step(name, body) {
		let step = await allure.startStep(name)
		try {
			await body()
			step.status = 'passed'
			await step.endStep()
		} catch (e) {
			step.status = 'failed'
			await step.attachment("Screenshot", await page.screenshot(), "image/png")
			await step.endStep()
			throw e
		}
	}
}

class Assert {
	constructor(page) {
		this.page = page
	}

	static async selectorIsVisible(selector) {
		await Allure.step(
			`ASSERT [$(${selector})] IS VISIBLE`,
			async() => {
				await expectPW(page).toHaveSelector(selector, {state: 'visible'})
			}
		)
	}

	static async selectorIsNotVisible(selector) {
		await Allure.step(
			`ASSERT [$(${selector})] IS NOT VISIBLE`,
			async() => {
					await expectPW(page).toHaveSelector(selector, {state: 'hidden'})
			}
		)
	}

	static async selectorIsExist(selector) {
		await Allure.step(
			`ASSERT [$(${selector})] IS EXIST IN DOM`,
			async() => {
				await expectPW(page).toHaveSelector(selector, {state: 'attached'})
			}
		)
	}

	static async selectorIsNotExist(selector) {
		await Allure.step(
			`ASSERT [$(${selector})] IS NOT EXIST IN DOM`,
			async() => {
				await expectPW(page).toHaveSelector(selector, {state: 'detached'})
			}
		)
	}

	static async equals(expected, actual) {
		await Allure.step(
			`ASSERT [${expected}] EQUALS [${actual}]`,
			async() => {
				await expect(expected).toBe(actual)
			}
		)
	}

	static async notEquals(expected, actual) {
		await Allure.step(
			`ASSERT [${expected}] NOT EQUALS [${actual}]`,
			async() => {
				await expect(expected).not.toBe(actual)
			}
		)
	}

	static async toBeNull(actual) {
		await Allure.step(
			`ASSERT [${actual}] TO BE NULL`,
			async() => {
				await expect(actual).toBeNull()
			}
		)
	}
}

class Waiter {
	constructor(page) {
		this.page = page
	}

	static async forNavigation() {
		await Allure.step(
			`WAIT FOR NAVIGATION`,
			async() => { await page.waitForNavigation() }
		)
	}

	static async forSelectorBeVisible(selector) {
		await Allure.step(
			`WAIT FOR $(${selector}) BE VISIBLE`,
			async() => { await page.waitForSelector(selector, {state: 'visible'}) }
		)
	}

	static async forSelectorBeInvisible(selector) {
		await Allure.step(
			`WAIT FOR $(${selector}) BE INVISIBLE`,
			async() => { await page.waitForSelector(selector, {state: 'hidden'}) }
		)
	}

	static async forTimeout(timeout) {
		await Allure.step(
			`WAIT FOR TIMEOUT [${timeout}]`,
			async() => { await page.waitForTimeout(timeout) }
		)
	}

	static async forLoadState() {
		await Allure.step(
			`WAIT FOR LOAD STATE`,
			async() => { await page.waitForLoadState() }
		)
	}
}

module.exports = { Allure, Assert, Waiter }
