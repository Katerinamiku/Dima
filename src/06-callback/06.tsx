
export const User = () => {
    const deleteUser = () => {
        alert('deleted')
    }

    const saveUser = () => {
        alert('saved')
    }
    const onNameChanged = () => {
        console.log('name changed')
    }
    const focusLostHandler = () => {
        console.log('lost')
    }

    return <div> <textarea onChange={onNameChanged}
    onBlur={focusLostHandler}>
        Dimych    </textarea>
        <input />
        <div tabIndex={2} onClick={deleteUser}>delete</div>
        <div tabIndex={1} onClick={saveUser}>save</div>

    </div>
}

