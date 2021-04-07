const { ProfilePage: profilePage } = require('../../../pages/profile.page')
const { Assert: assert }  = require('../../../environment/support')


test("Check [Sponsoring] tab", async () => {
	/** Scenario:
	 * 1. Check, Sponsoring tab is not exist
	 *
	 * @tag balalaiqa-repos-smoke
	 * @issue GH-1005
	 * @tms 1005
	 */

	await assert.selectorIsNotExist(profilePage.getTab('Sponsoring'))
})

test("Failed test example", async () => {
	/** Scenario:
	 * 1. Check, Sponsoring tab is exist
	 *
	 * @tag balalaiqa-repos-smoke
	 * @issue GH-1006
	 * @tms 1006
	 */

	await assert.selectorIsExist(profilePage.getTab('Sponsoring'))
})
