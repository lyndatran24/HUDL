const validCredentials = {
    email: 'validemail@mail.com',
    password: 'validpassword'
}

const invalidUserCredentials = {
    email: 'tom.jones@gmail',
    password: 'weoighjiouwejg'
}

const invalidPasswordCredentials = {
    email: 'tomjones@gmail.com',
    password: 'weoighjiouwejg'
}

const blankCredentials = {
    email: '',
    password: ''
}

module.exports = {validCredentials, invalidUserCredentials, invalidPasswordCredentials, blankCredentials}