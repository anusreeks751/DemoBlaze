export class Cart{
    constructor(page){
        this.page=page
        this.cart=page.locator("//a[text()='Cart']")
        this.placeOrderButton=page.locator("//button[text()='Place Order']")
        this.name=page.locator('#name')
        this.country=page.locator('#country')
        this.city=page.locator('#city')
        this.creditCard=page.locator('#card')
        this.month=page.locator('#month')
        this.year=page.locator('#year')
        this.purchase=page.locator("//button[text()='Purchase']")
        this.successMessage=page.locator("//h2[text()='Thank you for your purchase!']")
    }

    async clickOnCart(){
        await this.cart.click()
    }
    async clickOnPlaceOrder(){
        await this.placeOrderButton.click()
    }
    async fillDetails(){
        await this.name.fill("Anusree")
        await this.country.fill("India")
        await this.city.fill("Trivandrum")
        await this.creditCard.fill("123456789123")
        await this.month.fill("Sep")
        await this.year.fill("2026")
    }
    async clickPurchase(){
        await this.purchase.click()
    }

}