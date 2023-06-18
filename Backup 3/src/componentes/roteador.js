import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaClientes from "./listaClientes";
import ListaProduto from "./listaProduto";
import ListaSer from "./listaServico";
import EditaCliente from "./EditaCliente";
import EditaProduto from "./EditaProduto";
import EditaServico from "./EditaServico";
import TopClientes from "./TopCli";
import TopProduto from "./TopPro";
import TopSer from "./TopSer";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroSer";
import GeneroClientes from "./GeneroCli";
import GeneroProduto from "./GeneroPro";
import GeneroSer from "./GeneroSer";
import Registro from "./Registro";

export default function Roteador() {
    const [tela, setTela] = useState('Clientes')

    const seletorView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {

        if (tela === 'Clientes') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes','Produto','Serviço','Registro']} />
                    <ListaClientes tema="purple lighten-4" seletorView={seletorView} />
                </>
            )
        } else if (tela === "Produto")  {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes','Produto','Serviço','Registro']} />
                    <ListaProduto tema="purple lighten-4" seletorView={seletorView} />
                </>
            )
        }else if (tela === "Serviço")  {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes','Produto','Serviço','Registro']} />
                    <ListaSer tema="purple lighten-4" seletorView={seletorView}  />
                </>
            )
        }else if (tela === 'ProCrad') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes','Produto','Serviço','Registro']} />
                    <FormularioCadastroProduto seletorView={seletorView} tema="purple lighten-4" />
                </>
            )}else if (tela === 'ProEdit') {
                return (
                    <>
                        <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes','Produto','Serviço','Registro']} />
                        <EditaProduto seletorView={seletorView} tema="purple lighten-4" />
                    </>
                )}else if (tela === 'TopPro') {
                    return (
                        <>
                            <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes','Produto','Serviço','Registro']} />
                            <TopProduto seletorView={seletorView} tema="purple lighten-4" />
                        </>
                    )}else if (tela === 'GenPro') {
                        return (
                            <>
                                <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes','Produto','Serviço','Registro']} />
                                <GeneroProduto seletorView={seletorView} tema="purple lighten-4" />
                            </>
                        )}else if (tela === 'GenCli') {
                            return (
                                <>
                                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes','Produto','Serviço','Registro']} />
                                    <GeneroClientes seletorView={seletorView} tema="purple lighten-4" />
                                </>
                        )}else if (tela === 'TopCli') {
                            return (
                                <>
                                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes','Produto','Serviço','Registro']} />
                                    <TopClientes seletorView={seletorView} tema="purple lighten-4" />
                                </>
                        )}else if (tela === 'CadCli') {
                            return (
                                <>
                                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes','Produto','Serviço','Registro']} />
                                    <FormularioCadastroCliente seletorView={seletorView} tema="purple lighten-4" />
                                </>
                        )}else if (tela === 'EdiCli') {
                            return (
                                <>
                                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes','Produto','Serviço','Registro']} />
                                    <EditaCliente seletorView={seletorView} tema="purple lighten-4" />
                                </>
                        )}else if (tela === 'EdiSer') {
                            return (
                                <>
                                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes','Produto','Serviço','Registro']} />
                                    <EditaServico seletorView={seletorView} tema="purple lighten-4" />
                                </>
                        )}else if (tela === 'CadSer') {
                            return (
                                <>
                                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes','Produto','Serviço','Registro']} />
                                    <FormularioCadastroServico seletorView={seletorView} tema="purple lighten-4" />
                                </>
                        )}
                        else if (tela === 'TopSer') {
                            return (
                                <>
                                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes','Produto','Serviço','Registro']} />
                                    <TopSer seletorView={seletorView} tema="purple lighten-4" />
                                </>
                        )}else if (tela === 'GenSer') {
                            return (
                                <>
                                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes','Produto','Serviço','Registro']} />
                                    <GeneroSer seletorView={seletorView} tema="purple lighten-4" />
                                </>
                        )}else if (tela === 'Registro') {
                            return (
                                <>
                                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes','Produto','Serviço','Registro']} />
                                    <Registro seletorView={seletorView} tema="purple lighten-4" />
                                </>
                        )}
                            
        else  {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes','Produto','Serviço','Registro']} />
                    <FormularioCadastroCliente tema="purple lighten-4" />
                </>
            )
        }
    }

    return (
        construirView()
    )
}