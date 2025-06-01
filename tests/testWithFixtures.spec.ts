import {test} from '../test-options'
import {faker} from '@faker-js/faker'

test('parameteriized methods', async({pageManager}) => {
    const randomFullName = faker.person.fullName()
    const randomEmail = `${randomFullName.replaceAll(' ', '')}${faker.number.int(1000)}@test.com`

    await pageManager.onFormLayoutsPage().submitUsingTheGridFormWithCredentialsAndSelectOption(process.env.USERNAME, process.env.PASSWORD, 'Option 1')
    await pageManager.onFormLayoutsPage().submitUsingTheGridFormWithNameEmailAndCheckbox(randomFullName, randomEmail, true)
})