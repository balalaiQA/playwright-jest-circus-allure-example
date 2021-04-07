const { ProfilePage: profilePage } = require('../../../pages/profile.page')
const { Assert: assert, Waiter: wait }  = require('../../../environment/support')


test("Check [Projects] tab", async () => {
	/** Scenario:
	 * 1. Go Projects tab
	 * 2. Check, Project Results Block is exist
	 *
	 * @tag balalaiqa-repos-smoke, microsoft-repos-smoke
	 * @issue GH-1002
	 * @tms 1002
	 */

	await profilePage.goToTab('Projects')
	await wait.forLoadState()
	await assert.selectorIsExist(profilePage.projectResultsBlock)
})

test("Check [Package] tab", async () => {
	/** Scenario:
	 * 1. Go Package tab
	 * 2. Check, Package Results Block is exist
	 *
	 * @tag balalaiqa-repos-smoke, microsoft-repos-smoke
	 * @issue GH-1003
	 * @tms 1003
	 */

	await profilePage.goToTab('Packages')
	await wait.forLoadState()
	await assert.selectorIsExist(profilePage.packageResultsBlock)
})
