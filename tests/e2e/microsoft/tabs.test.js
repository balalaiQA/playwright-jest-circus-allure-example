const { ProfilePage: profilePage } = require('../../../pages/profile.page')
const { Assert: assert }  = require('../../../environment/support')


test("Check [Sponsoring] tab", async () => {
	/** Scenario:
	 * 1. Check, Sponsoring tab is not exist
	 *
	 * @tag microsoft-repos-smoke
	 * @issue GH-1007
	 * @tms 1007
	 */

	await assert.selectorIsExist(profilePage.getTab('Sponsoring'))
})

test("Failed test example", async () => {
	/** Scenario:
	 * 1. Check, Sponsoring tab is exist
	 *
	 * @tag microsoft-repos-smoke
	 * @issue GH-1007
	 * @tms 1007
	 */

	await assert.selectorIsNotExist(profilePage.getTab('Sponsoring'))
})
