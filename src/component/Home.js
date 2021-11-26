import React from 'react'
import foto from '../img/foto.png'
import panda from '../img/panda.png'

export default function Home() {
    return (
        <div className="page">
            <div className="container-page">
                <div className="space-y-7 m-auto h-full w-full">
                    <div className="flex justify-center">
                        <img className="rounded-full w-24" src={foto} alt="" />
                    </div>
                    <div className="flex space-y-3 flex-col items-center">
                        <h1 className="text-3xl font-bold text-white">Ilham Muhammad Ariq</h1>
                        <p className="text-2xl text-white">Welcome to My Page</p>
                    </div>
                    <div className="container-link">
                        <div className="box-link">
                            <a href="https://api.whatsapp.com/send?phone=6282282150225&text=Saya%20tertarik%20untuk%20menggunakan%20Jasa%20Pembuatan%20WEB." target="_blank" rel="noopener noreferrer">
                                <p className="text-link">
                                    Panda Coding - Jasa Pembuatan WEB PHP MySQL
                                </p>
                            </a>
                        </div>
                        <div className="box-link">
                            <a href="https://imanews.herokuapp.com" target="_blank" rel="noopener noreferrer" className="text-link">
                                <p className="text-link">
                                    IMANews - COVID19
                                </p>
                            </a>
                        </div>
                        <div className="box-link">
                            <a href="https://www.linkedin.com/in/ilhammuhammadariq" target="_blank" rel="noopener noreferrer" className="text-link">
                                <p className="text-link">
                                    Linkedin
                                </p>
                            </a>
                        </div>
                        <div className="box-link">
                            <a href="http://github.com/ilhammariq" target="_blank" rel="noopener noreferrer" className="text-link">
                                <p className="text-link">
                                    Github
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <img className="w-12 bg-white rounded-full" src={panda} alt="" />
                    <p className="text-white text-xl font-bold">Panda Coding 2021</p>
                </div>
            </div>

        </div>

    )
}
