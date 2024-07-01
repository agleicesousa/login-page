const Card = () => {
    return (
        <div className="card">
            <div className="topo">
                <h1 className='title'>Login</h1>
            </div>
            <div className="meio">
                <div className="imputs">
                    <imput className="user" type='text' required>Usuário</imput>
                    <imput className="password" type='password' required>Senha</imput>
                </div>
            </div>
            <div className="fim">
                <div className="button">
                    <button type='submit'>Entrar</button>
                    <link rel="stylesheet" href="#" className="forget" />Esqueceu sua senha?
                </div>
            </div>
        </div>
    )
}