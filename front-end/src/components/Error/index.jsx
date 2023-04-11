export default function Error() {

    return (
        <>
            <main className="d-flex flex-grow-1 align-items-center">
                <section className="d-flex align-items-center flex-grow-1">
                    <div className="container">
                        <div className="row d-flex d-xl-flex justify-content-center justify-content-xl-center">
                            <div className="col-md-12 col-lg-8 col-xl-7 col-xxl-6 bg-white shadow-lg rounded">
                                <div className="p-5">
                                    <div className="text-center mb-3"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="1em" height="1em" fill="currentColor" style={{fontSize: `76px`, color: `var(--bs-red)`}}>
                                        {/* <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --> */}
                                        <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z"></path>
                                    </svg></div>
                                    <div className="text-center">
                                        <h4 className="text-dark mb-4">Página não encontrada</h4>
                                    </div>
                                    <div className="text-center"></div>
                                    <p>Veículos 100% à combustão não existem aqui.<br/>
                                    Da mesma forma, a página que você tentou acessar não foi encontrada.<br/>
                                    Se acredita que isto foi um erro, entre em contato conosco.</p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )



}