
describe('Тестирование login.qa.studio', function () {
    it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get("#forgotEmailButton").click();
        cy.get("#mailForgot").type('sia-der@mail.ru');
        cy.get("#restoreEmailButton").click();
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > img');
    })

    it('Проверка на позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get("#mail").type('german@dolnikov.ru');
        cy.get("#pass").type('iLoveqastudio1');
        cy.get("#loginButton").click();
        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > img');
    })

    it('Проверка на негативный кейс авторизации_1', function () {
        cy.visit('https://login.qa.studio/');
        cy.get("#mail").type('german@dolnikov.ru');
        cy.get("#pass").type('iLoveqastudio2');
        cy.get("#loginButton").click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > img');
    })

    it('Проверка на негативный кейс авторизации_2', function () {
        cy.visit('https://login.qa.studio/');
        cy.get("#mail").type('serg@derkoff.ru');
        cy.get("#pass").type('iLoveqastudio1');
        cy.get("#loginButton").click();
        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > img');
    })
})


