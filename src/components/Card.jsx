import React, { useState } from 'react'

export default function Card() {
    return (
        <div className="card">
            <div className="topo">
                <div className="title">
                    <h1>Login</h1>
                </div>
            </div>
            <div className="meio">
                <div className="imputs">
                    <form action="">
                        <div className="login">
                            <label htmlFor="">Login</label>
                            <input type="text" />
                        </div>
                        <div className="senha">
                            <label htmlFor="">Senha</label>
                            <input type="password"/>
                        </div>
                    </form>
                </div>
            </div>
            <div className="fim">
                <div className="botao">
                    <button type="submit">Entrar</button>
                </div>
                <div className="esqueci">
                    <a href="#">Esqueci minha senha</a>
                </div>  
        
            </div>
        </div>
    )
}