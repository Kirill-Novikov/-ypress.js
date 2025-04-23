describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru')
         cy.get('#pass').type('iLoveqastudio1')
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#messageHeader').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');

 })

 it('автотест на проверку логики восстановления пароля', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#forgotEmailButton').click();
    cy.get('#mailForgot').type('german@dolnikow')
    cy.get('#forgotForm > .header').contains('Восстановите пароль');
    cy.get('#forgotForm > .header').should('be.visible');
    cy.get('#exitRestoreButton > .exitIcon').should('be.visible');

})

it('проверка на негативный кейс авторизации', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('german@dolnikov.ru')
    cy.get('#pass').type('iLoveqastudio2')
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    cy.get('#messageHeader').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');

})

 it('проверка на негативный кейс авторизации', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('german@dolnikow.ru')
    cy.get('#pass').type('iLoveqastudio1')
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    cy.get('#messageHeader').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');

})

it('проверка на негативный кейс валидации', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('germandolnikov.ru')
    cy.get('#pass').type('iLoveqastudio1')
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
    cy.get('#messageHeader').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');

})

it('проверка на негативный кейс валидации', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('germandolnikov.ru')
    cy.get('#pass').type('iLoveqastudio1')
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
    cy.get('#messageHeader').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');

})

it('проверка на приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('GerMan@Dolnikov.ru')
    cy.get('#pass').type('iLoveqastudio1')
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Авторизация прошла успешно');
    cy.get('#messageHeader').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');

})
})

