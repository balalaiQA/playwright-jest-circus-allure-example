const { Allure: allure }  = require('../environment/support')


class ProfilePage {
	constructor(page) {
		this.page = page
	}

	static async goToTab(tabName) {
		await allure.step(
			`Go to [${tabName}] tab`,
			async() => {
				await page.click(this.getTab(tabName))
			}
		)
	}

	static getTab = (tabName) => { return `.UnderlineNav-item:has-text("${tabName}")` }
	static get projectResultsBlock() { return '#projects-results' }
	static get packageResultsBlock() { return '#package-results' }
	static get userReposBlock() { return '#user-repositories-list' }
	static get orgReposBlock() { return '#org-repositories' }
}

module.exports = { ProfilePage }
