const formRef = document.querySelector('.login-form');
formRef.addEventListener('submit', onSubmit);
function onSubmit(event) {
    event.preventDefault()
    const { email, password } = event.currentTarget.elements;
    // console.log(event.currentTarget.elements.email.value)
    if (email.value === '' || password.value === '') {
        return alert `Заповніть всі поля форми`
    } else {
        const userLogin = {
            email: email.value,
            password:password.value
        }
        console.log(userLogin)
    }
}
console.log(onSubmit)
