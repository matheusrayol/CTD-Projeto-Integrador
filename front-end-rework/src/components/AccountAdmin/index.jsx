export default function AccountAdmin() {

    return (
        <>
            <main className="flex-grow-1">
                <section className="py-4">
                    <div className="container mb-4">
                        <div className="row mt-3 rounded bg-transparent">
                            <div className="col-lg-4 py-4 px-4 bg-white">
                                <h4 className="poppins travelgreen-logo mb-4 fw-semibold">Administrador</h4>
                                <div className="d-flex justify-content-center ubuntu mb-4"><img className="rounded-circle shadow" src="test-man.jpg" width="120px" /></div>
                                <p className="fs-5 mb-0 ubuntu"><strong>Nome:</strong> Fu Lano</p>
                                <p className="fs-5 mb-0 ubuntu"><strong>E-mail:</strong> fu@lano.com</p>
                                <p className="fs-5 mb-0 ubuntu"><strong>ID: </strong> 13</p>
                                <p></p>
                            </div>
                            <div className="col-lg-8 py-4 px-4" style={{backgroundColor: `white`}}>
                                <h4 className="poppins travelgreen-logo mb-4 fw-semibold mx-2">Cadastrar produto</h4>
                                <div>
                                    <h6 className="fw-normal text-success mx-2 poppins mb-0">Informações básicas</h6>
                                    <form>
                                        <div className="d-flex flex-column flex-md-row">
                                            <div className="input-group mx-2 my-2"><label className="form-label text-light bg-success border-2 border-success input-group-text mb-0">Produto</label><input className="border-3 border-success shadow-sm form-control" type="text" placeholder="Insira o nome do produto" /></div>
                                            <div className="input-group d-flex mx-2 my-2"><label className="form-label text-light bg-success border-2 border-success input-group-text mb-0">Cidade</label>
                                                <div className="dropdown d-flex flex-grow-1"><button className="btn btn-success dropdown-toggle rounded-0 rounded-end d-flex flex-grow-1 justify-content-between align-items-center" aria-expanded="false" data-bs-toggle="dropdown" type="button">Selecione a cidade</button>
                                                    <div className="dropdown-menu"><a className="dropdown-item" href="#">First Item</a><a className="dropdown-item" href="#">Second Item</a><a className="dropdown-item" href="#">Third Item</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column flex-md-row">
                                            <div className="input-group mx-2 my-2"><label className="form-label text-light bg-success border-2 border-success input-group-text mb-0">Categoria</label>
                                                <div className="dropdown d-flex flex-grow-1"><button className="btn btn-success dropdown-toggle rounded-0 rounded-end d-flex flex-grow-1 justify-content-between align-items-center" aria-expanded="false" data-bs-toggle="dropdown" type="button">Selecione a categoria</button>
                                                    <div className="dropdown-menu"><a className="dropdown-item" href="#">First Item</a><a className="dropdown-item" href="#">Second Item</a><a className="dropdown-item" href="#">Third Item</a></div>
                                                </div>
                                            </div>
                                            <div className="input-group mx-2 my-2"><label className="form-label text-light bg-success border-2 border-success input-group-text mb-0">Sustentabilidade</label><input className="border-3 border-success shadow-sm form-control" type="text" placeholder="0 ~ 100" /></div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <h6 className="fw-normal text-success mx-2 mt-3 poppins mb-0 mt-2">Descrição</h6>
                                            <div className="input-group"><textarea className="border-success form-control mx-2" style={{height: `100px`}}></textarea></div>
                                        </div>
                                        <h6 className="fw-normal text-success mx-2 mt-3 poppins mb-0 mt-2">Características</h6>
                                        <div className="d-flex mx-2 row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gy-0 gx-0">
                                            <div className="col">
                                                <div className="form-check"><input id="formCheck-6" className="form-check-input" type="checkbox" required /><label className="form-check-label" for="formCheck-6">Recarregável</label></div>
                                            </div>
                                            <div className="col">
                                                <div className="form-check"><input id="formCheck-8" className="form-check-input" type="checkbox" required /><label className="form-check-label" for="formCheck-8">Silencioso</label></div>
                                            </div>
                                            <div className="col">
                                                <div className="form-check"><input id="formCheck-1" className="form-check-input" type="checkbox" required /><label className="form-check-label" for="formCheck-1">Zero emissão</label></div>
                                            </div>
                                            <div className="col">
                                                <div className="form-check"><input id="formCheck-7" className="form-check-input" type="checkbox" required /><label className="form-check-label" for="formCheck-7">Autonomia</label></div>
                                            </div>
                                            <div className="col">
                                                <div className="form-check"><input id="formCheck-3" className="form-check-input" type="checkbox" required /><label className="form-check-label" for="formCheck-3">Rápida aceleração</label></div>
                                            </div>
                                            <div className="col">
                                                <div className="form-check"><input id="formCheck-4" className="form-check-input" type="checkbox" required /><label className="form-check-label" for="formCheck-4">Fácil manutenção</label></div>
                                            </div>
                                            <div className="col">
                                                <div className="form-check"><input id="formCheck-5" className="form-check-input" type="checkbox" required /><label className="form-check-label" for="formCheck-5">Performance</label></div>
                                            </div>
                                            <div className="col">
                                                <div className="form-check"><input id="formCheck-2" className="form-check-input" type="checkbox" required /><label className="form-check-label" for="formCheck-2">Recarga por frenagem</label></div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <h6 className="fw-normal text-success mx-2 mt-3 poppins mb-0 mt-2">Imagens</h6>
                                <div className="d-flex flex-column flex-md-row">
                                    <div className="input-group mx-2 my-2"><label className="form-label text-light bg-success border-2 border-success input-group-text mb-0">Imagem 1</label><input className="border-3 border-success shadow-sm form-control" type="text" /></div>
                                    <div className="input-group mx-2 my-2"><label className="form-label text-light bg-success border-2 border-success input-group-text mb-0">URL</label><input className="border-3 border-success shadow-sm form-control" type="text" /></div>
                                </div>
                                <div className="d-flex flex-column flex-md-row">
                                    <div className="input-group mx-2 my-2"><label className="form-label text-light bg-success border-2 border-success input-group-text mb-0">Imagem 2</label><input className="border-3 border-success shadow-sm form-control" type="text" /></div>
                                    <div className="input-group mx-2 my-2"><label className="form-label text-light bg-success border-2 border-success input-group-text mb-0">URL</label><input className="border-3 border-success shadow-sm form-control" type="text" /></div>
                                </div>
                                <div className="d-flex flex-column flex-md-row">
                                    <div className="input-group mx-2 my-2"><label className="form-label text-light bg-success border-2 border-success input-group-text mb-0">Imagem 3</label><input className="border-3 border-success shadow-sm form-control" type="text" /></div>
                                    <div className="input-group mx-2 my-2"><label className="form-label text-light bg-success border-2 border-success input-group-text mb-0">URL</label><input className="border-3 border-success shadow-sm form-control" type="text" /></div>
                                </div>
                                <div className="d-flex flex-column flex-md-row">
                                    <div className="input-group mx-2 my-2"><label className="form-label text-light bg-success border-2 border-success input-group-text mb-0">Imagem 4</label><input className="border-3 border-success shadow-sm form-control" type="text" /></div>
                                    <div className="input-group mx-2 my-2"><label className="form-label text-light bg-success border-2 border-success input-group-text mb-0">URL</label><input className="border-3 border-success shadow-sm form-control" type="text" /></div>
                                </div>
                                <div className="d-flex flex-column flex-md-row">
                                    <div className="input-group mx-2 my-2"><label className="form-label text-light bg-success border-2 border-success input-group-text mb-0">Imagem 5</label><input className="border-3 border-success shadow-sm form-control" type="text" /></div>
                                    <div className="input-group mx-2 my-2"><label className="form-label text-light bg-success border-2 border-success input-group-text mb-0">URL</label><input className="border-3 border-success shadow-sm form-control" type="text" /></div>
                                </div>
                                <div className="d-flex flex-column">
                                    <h4 className="poppins travelgreen-logo fw-semibold mt-4 mx-2">Políticas do produto</h4>
                                    <div className="d-flex flex-column">
                                        <h6 className="fw-normal text-success mx-2 mt-3 poppins mb-0 mt-2">Descrição</h6>
                                        <div className="input-group"><textarea className="border-success form-control mx-2" style={{height: `75px`}}></textarea></div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <h6 className="fw-normal text-success mx-2 mt-3 poppins mb-0 mt-2">Descrição</h6>
                                        <div className="input-group"><textarea className="border-success form-control mx-2" style={{height: `75px`}}></textarea></div>
                                    </div>
                                    <h6 className="fw-normal text-success mx-2 mt-3 poppins mb-0 mt-2">Descrição</h6>
                                    <div className="input-group"><textarea className="border-success form-control mx-2" style={{height: `75px`}}></textarea></div>
                                </div>
                                <div className="d-flex justify-content-center poppins">
                                    <div className="btn-group mt-3" role="group"><button className="btn btn-success" type="button">Cadastrar produto</button><button className="btn btn-danger" type="button">Limpar campos</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )

}