function myFunction() {
    window.location.href="/"
}

function myFunction_movies() {
    window.location.href="/movies"
}

function myFunction_moviesSearch() {
    window.location.href="/movies/search/"
}

function myFunction_store() {
    window.location.href="/store"
}

function myFunction_login() {
    window.location.href="/login"
}

function myFunction_signIn() {
    window.location.href="/sing_in"
}

module.exports = {
    myFunction,
    myFunction_movies,
    myFunction_store,
    myFunction_login,
    myFunction_signIn,
    myFunction_moviesSearch
}