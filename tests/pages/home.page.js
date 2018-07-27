import Page from './page'

class HomePage extends Page {
  get homePageTitle() {
    return browser.element('#content > h1')
  }

  open() {
    super.open('')
  }
}

export default new HomePage()
