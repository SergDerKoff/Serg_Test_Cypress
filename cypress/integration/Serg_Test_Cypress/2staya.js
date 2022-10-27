
describe('Автотесты для формы логина и пароля на Staya', function () {
    
    it('Проверка на негативный кейс авторизации', function () {
        cy.visit('https://staya.dog/');
        cy.get("#stickyHeader > section.header-bottom.transition-header > div > div > a").click();
        cy.get("#__layout > div > main > div > div > div > section > div > form > input:nth-child(1)").type('serg1Derkoff@ya.ru');
        cy.get("#__layout > div > main > div > div > div > section > div > form > input:nth-child(2)").type('Serg1sam');
        cy.get(".auth-form__submit").click();
        cy.contains('Невозможно войти с предоставленными учетными данными.');
    })
    
    it('Проверка авторизации и словосочетания _Мои заказы_', function () {
        cy.visit('https://staya.dog/');
        cy.get("#stickyHeader > section.header-bottom.transition-header > div > div > a").click();
        cy.get("#__layout > div > main > div > div > div > section > div > form > input:nth-child(1)").type('serg1Derkoff@ya.ru');
        cy.get("#__layout > div > main > div > div > div > section > div > form > input:nth-child(2)").type('Serg123sam');
        cy.get("#__layout > div > main > div > div > div > section > div > form > button").click();
        cy.contains('Мои заказы');
    }) 
})
