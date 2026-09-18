export class Indexpage{
    constructor(page){
        this.page=page
        this.samsungGalaxyS6=page.locator("//a[text()='Samsung galaxy s6']")
        this.addToCartButton=page.locator("//a[@onclick='addToCart(1)']")
        this.PhonesMenu=page.locator("//a[text()='Phones']")
        this.nokiaLumia1530=page.locator("//a[text()='Nokia lumia 1520']")
        this.monitorsMenu=page.locator("//a[text()='Monitors']")
        this.appleMonitor=page.locator("//a[text()='Apple monitor 24']")
    }

    async clickOnSamsunggalaxyS6(){
        await this.samsungGalaxyS6.click()
    }
    async addToCart(){
        await this.addToCartButton.click()
    }
    async clickOnPhones(){
        await this.PhonesMenu.click()
    }
    async selectNokiaLumia1530(){
        await this.nokiaLumia1530.click()
    }
    async clickOnMonitors(){
        await this.monitorsMenu.click()
    }
    async selectAppleMonitor(){
        await this.appleMonitor.click()
    }

}