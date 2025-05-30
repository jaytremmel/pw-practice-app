import { Locator, Page, expect } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class DatepickerPage extends HelperBase{

    constructor(page: Page){
        super(page)
    }

    async selectDatePickerDateFromToday(numberOfDaysFromToday: number){

        const calendarInputField = this.page.getByPlaceholder('Form Picker')
        await calendarInputField.click()
        const dateToAssert = await this.selectDateInTheCalendar(numberOfDaysFromToday)
        await expect(calendarInputField).toHaveValue(dateToAssert)
    }

    async selectDatepickerWithRangeFromToday(startDayFromToday: number, endDayFromToday: number){
    const calendarInputField = this.page.getByPlaceholder('Range Picker')
    await calendarInputField.click()
    const dateToAssertStart = await this.selectDateInTheCalendar(startDayFromToday)
    const dateToAssertEnd = await this.selectDateInTheCalendar(endDayFromToday)
    const dateToAssert = `${dateToAssertStart} - ${dateToAssertEnd}`
    await expect(calendarInputField).toHaveValue(dateToAssert)
}


    private async selectDateInTheCalendar(numberOfDaysFromToday: number){        
            let date = new Date()
            date.setDate(date.getDate() + numberOfDaysFromToday)
            const expectedDate = date.getDate().toString()
            const expectedMonthShort = date.toLocaleDateString('En-US', {month: 'short'})
            const expectedMonthLong = date.toLocaleDateString('En-US', {month: 'long'})
            const expectedYear = date.getFullYear()
            const dateToAssert = `${expectedMonthShort} ${expectedDate}, ${expectedYear}`
        
            let calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent()
            const expectedMonthAndYear = ` ${expectedMonthLong} ${expectedYear} `
            while(!calendarMonthAndYear.includes(expectedMonthAndYear)){
                await this.page.locator('nb-calendar-pageable-navigation [data-name="chevron-right"]').click()
                calendarMonthAndYear = await this.page.locator('nb-calendar-view-mode').textContent()
            }
            const dateCells = this.page.locator('.day-cell.ng-star-inserted').getByText(expectedDate, {exact: true});
            const count = await dateCells.count();
            if (count > 1) {
              await dateCells.nth(1).click();
            } else {
              await dateCells.first().click();
            }
            
            return dateToAssert
    }
}