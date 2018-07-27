import { expect } from 'chai'
import HomePage from '../pages/home.page'

describe('Example Test', () => {
  it('should arrive on page to test and receive the corresponding title', () => {
    HomePage.open()
    HomePage.homePageTitle.waitForExist()
    expect(HomePage.homePageTitle.isExisting()).to.be.true
    expect(HomePage.homePageTitle.getText()).to.contain(
      'Welcome to the-internet'
    )
  })
})
