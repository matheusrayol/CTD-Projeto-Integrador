import React, { useEffect, useState } from 'react'
import styles from './Product.module.scss'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CardProduct from '../components/CardProduct'

import id1 from '../assets/img1.jpg'
import id3 from '../assets/img3.jpg'
import id5 from '../assets/img5.jpg'
import id7 from '../assets/img7.jpg'
import id2 from '../assets/img2.jpg'
import id4 from '../assets/img4.jpg'
import id6 from '../assets/img6.jpg'
import id8 from '../assets/img8.jpg'
import { useParams } from 'react-router'

export default function Product() {
  const allImages = [
    {
      id: 1,
      image: id1,
      img1: id1,
      img2: id1,
      img3: id1,
      img4: id1,
      img5: id1,
      category: 'Modelo Luxuoso',
      title: 'Volvo XC40 Recharge',
      location: 'Fortaleza',
      adress: 'Avenida Beira Mar, nº 1240, Cep: 60060-610',
      description: 'Descricao do carro e caracteristicas...',
      descriptionLine1: 'Modelo: Carro elétrico',
      descriptionLine2: 'Nome: Volvo XC40 Recharge Pure Eletric',
      descriptionLine3: 'Preço:	R$ 399.950',
      descriptionLine4: 'Baterias: 92,8 kWh',
      descriptionLine5: 'Potência: 413 cv',
      descriptionLine6: 'Torque:	67,3 kgfm',
      descriptionLine7: 'Autonomia:	418 km (WLTP)',
      descriptionLine8:
        'Tempo de recarga: 40 min (0 a 80%) - carga rápida; 8 horas - Wallbox; NI - 220V',
      descriptionLine9: '0 a 100 km/h: 4,9 s',
      rated: '4.9',
      politic:
        'Idade mínima de 18 anos, carteira de habilitação válida e emitida há mais de 2 anos, não possuir restrições no CPF e cartão de crédito de titularidade própria com limite disponível para o bloqueio caução. Importante: o cartão de crédito do locatário deverá estar válido, dentro do prazo de vencimento, emitido por uma instituição bancária e com limite de crédito disponível para pré-autorização do bloqueio caução. A aprovação do cartão de crédito é de única e exclusiva responsabilidade da locadora. '
    },
    {
      id: 2,
      image: id2,
      img1: id2,
      img2: id2,
      img3: id2,
      img4: id2,
      img5: id2,
      category: 'Modelo Luxuoso',
      title: 'Mercedes S EQS',
      location: 'Fortaleza',
      adress: 'Avenida Beira Mar, nº 1240, Cep: 60060-610',
      description: 'Descricao do carro e caracteristicas...',
      descriptionLine1: 'Modelo: Carro elétrico',
      descriptionLine2: 'Nome: Mercedes-AMG EQS 53 4MATIC+',
      descriptionLine3: 'Preço:		R$ 1.350.900',
      descriptionLine4: 'Baterias: 107,8 kWh',
      descriptionLine5: 'Potência:	658 cv',
      descriptionLine6: 'Torque:	96,9 kgfm',
      descriptionLine7: 'Autonomia:	580 km (WLTP)',
      descriptionLine8: 'Tempo de recarga: 	6 horas em wallbox',
      descriptionLine9: '0 a 100 km/h: 3,8 s',
      rated: '4.2',
      politic:
        'Idade mínima de 18 anos, carteira de habilitação válida e emitida há mais de 2 anos, não possuir restrições no CPF e cartão de crédito de titularidade própria com limite disponível para o bloqueio caução. Importante: o cartão de crédito do locatário deverá estar válido, dentro do prazo de vencimento, emitido por uma instituição bancária e com limite de crédito disponível para pré-autorização do bloqueio caução. A aprovação do cartão de crédito é de única e exclusiva responsabilidade da locadora. '
    },
    {
      id: 3,
      image: id3,
      img1: id3,
      img2: id3,
      img3: id3,
      img4: id3,
      img5: id3,
      category: 'Modelo Esportivo',
      title: 'Audi RS e-tron GT',
      location: 'Rio de Janeiro',
      adress: 'Avenida Atlântica, nº 4200, Cep: 22070-900',
      description: 'Descricao do carro e caracteristicas...',
      descriptionLine1: 'Modelo: Carro elétrico',
      descriptionLine2: 'Nome: 	Audi RS e-tron GT',
      descriptionLine3: 'Preço:		R$ 1.080.000',
      descriptionLine4: 'Baterias: 	93,4 kWh',
      descriptionLine5: 'Potência:		646 cv',
      descriptionLine6: 'Torque:	84,7 kgfm',
      descriptionLine7: 'Autonomia:	470 km NDEC',
      descriptionLine8:
        'Tempo de recarga: 23 min - carga rápida; 8h30 - Wallbox; NI - 220V',
      descriptionLine9: '0 a 100 km/h: 3,3 s',
      rated: '4.3',
      politic:
        'Idade mínima de 18 anos, carteira de habilitação válida e emitida há mais de 2 anos, não possuir restrições no CPF e cartão de crédito de titularidade própria com limite disponível para o bloqueio caução. Importante: o cartão de crédito do locatário deverá estar válido, dentro do prazo de vencimento, emitido por uma instituição bancária e com limite de crédito disponível para pré-autorização do bloqueio caução. A aprovação do cartão de crédito é de única e exclusiva responsabilidade da locadora. '
    },
    {
      id: 4,
      image: id4,
      img1: id4,
      img2: id4,
      img3: id4,
      img4: id4,
      img5: id4,
      category: 'Modelo Esportivo',
      title: 'Byd Han',
      location: 'Rio de Janeiro',
      adress: 'Avenida Atlântica, nº 4200, Cep: 22070-900',
      description: 'Descricao do carro e caracteristicas...',
      descriptionLine1: 'Modelo: Carro elétrico',
      descriptionLine2: 'Nome: Byd Han',
      descriptionLine3: 'Preço:	R$ 539.990',
      descriptionLine4: 'Baterias: 76,9 kWh',
      descriptionLine5: 'Potência: 494 cv',
      descriptionLine6: 'Torque: 69,3 kgfm',
      descriptionLine7: 'Autonomia:	500 km (NEDC)',
      descriptionLine8: 'Tempo de recarga: 30 min - carga rápida',
      descriptionLine9: '0 a 100 km/h: 3,9 s',
      rated: '4.4',
      politic:
        'Idade mínima de 18 anos, carteira de habilitação válida e emitida há mais de 2 anos, não possuir restrições no CPF e cartão de crédito de titularidade própria com limite disponível para o bloqueio caução. Importante: o cartão de crédito do locatário deverá estar válido, dentro do prazo de vencimento, emitido por uma instituição bancária e com limite de crédito disponível para pré-autorização do bloqueio caução. A aprovação do cartão de crédito é de única e exclusiva responsabilidade da locadora. '
    },
    {
      id: 5,
      image: id5,
      img1: id5,
      img2: id5,
      img3: id5,
      img4: id5,
      img5: id5,
      category: 'Modelo Conforto',
      title: 'JAC iEV40',
      location: 'Belo Horizonte',
      adress: 'Avenida dos Andrades, nº 3550, Cep: 30260-070',
      description: 'Descricao do carro e caracteristicas...',
      descriptionLine1: 'Modelo: Carro elétrico',
      descriptionLine2: 'Nome: JAC iEV40',
      descriptionLine3: 'Preço: R$ 189.900',
      descriptionLine4: 'Baterias: 40 kWh',
      descriptionLine5: 'Potência: 130 cv',
      descriptionLine6: 'Torque: 27,5 kgfm',
      descriptionLine7: 'Autonomia:	300 km (NDEC)',
      descriptionLine8:
        'Tempo de recarga: 53 min - carga rápida; 7 horas - Wallbox; 22 horas - 220V',
      descriptionLine9: '0 a 100 km/h: 12,0 s',
      rated: '4.5',
      politic:
        'Idade mínima de 18 anos, carteira de habilitação válida e emitida há mais de 2 anos, não possuir restrições no CPF e cartão de crédito de titularidade própria com limite disponível para o bloqueio caução. Importante: o cartão de crédito do locatário deverá estar válido, dentro do prazo de vencimento, emitido por uma instituição bancária e com limite de crédito disponível para pré-autorização do bloqueio caução. A aprovação do cartão de crédito é de única e exclusiva responsabilidade da locadora. '
    },
    {
      id: 6,
      image: id6,
      img1: id6,
      img2: id6,
      img3: id6,
      img4: id6,
      img5: id6,
      category: 'Modelo Conforto',
      title: 'Chevrolet Bolt',
      location: 'Salvador',
      adress: 'Avenida Estados Unidos, nº 6200, Cep: 40010-020',
      description: 'Descricao do carro e caracteristicas...',
      descriptionLine1: 'Modelo: Carro elétrico',
      descriptionLine2: 'Nome: Chevrolet Bolt',
      descriptionLine3: 'Preço: R$ 317.000',
      descriptionLine4: 'Baterias: 66 kWh',
      descriptionLine5: 'Potência: 203 cv',
      descriptionLine6: 'Torque: 36,7 kgfm',
      descriptionLine7: 'Autonomia:	416 km (EPA)',
      descriptionLine8:
        'Tempo de recarga: NI - carga rápida; 10 horas - Wallbox; NI - 220V',
      descriptionLine9: '0 a 100 km/h: 7,3 s',
      rated: '4.9',
      politic:
        'Idade mínima de 18 anos, carteira de habilitação válida e emitida há mais de 2 anos, não possuir restrições no CPF e cartão de crédito de titularidade própria com limite disponível para o bloqueio caução. Importante: o cartão de crédito do locatário deverá estar válido, dentro do prazo de vencimento, emitido por uma instituição bancária e com limite de crédito disponível para pré-autorização do bloqueio caução. A aprovação do cartão de crédito é de única e exclusiva responsabilidade da locadora. '
    },

    {
      id: 7,
      image: id7,
      img1: id7,
      img2: id7,
      img3: id7,
      img4: id7,
      img5: id7,
      category: 'Modelo Compacto',
      title: 'Fiat 500e',
      location: 'Salvador',
      adress: 'Avenida Estados Unidos, nº 6200, Cep: 40010-020',
      description: 'Descricao do carro e caracteristicas...',
      descriptionLine1: 'Modelo: Carro elétrico',
      descriptionLine2: 'Nome: Fiat 500e',
      descriptionLine3: 'Preço: R$ 255.990',
      descriptionLine4: 'Baterias: 42 kWh',
      descriptionLine5: 'Potência: 118 cv',
      descriptionLine6: 'Torque: 	22,4 kgfm',
      descriptionLine7: '	320 km',
      descriptionLine8:
        'Tempo de recarga: 	52 min - carga rápida; 7 horas - Wallbox; 29 horas - 220V',
      descriptionLine9: '0 a 100 km/h: 10,7 s',
      rated: '4.7',
      politic:
        'Idade mínima de 18 anos, carteira de habilitação válida e emitida há mais de 2 anos, não possuir restrições no CPF e cartão de crédito de titularidade própria com limite disponível para o bloqueio caução. Importante: o cartão de crédito do locatário deverá estar válido, dentro do prazo de vencimento, emitido por uma instituição bancária e com limite de crédito disponível para pré-autorização do bloqueio caução. A aprovação do cartão de crédito é de única e exclusiva responsabilidade da locadora. '
    },
    {
      id: 8,
      image: id8,
      img1: id8,
      img2: id8,
      img3: id8,
      img4: id8,
      img5: id8,
      category: 'Modelo Compacto',
      title: 'Caoa Chery',
      location: 'Belo Horizonte',
      adress: 'Avenida dos Andrades, nº 3550, Cep: 30260-070',
      description: 'Descricao do carro e caracteristicas...',
      descriptionLine1: 'Modelo: Carro elétrico',
      descriptionLine2: 'Nome: Caoa Chery iCar',
      descriptionLine3: 'Preço: R$ 139.990',
      descriptionLine4: 'Baterias: 30,8 kWh',
      descriptionLine5: 'Potência: 61 cv',
      descriptionLine6: 'Torque: 15,3 kgfm',
      descriptionLine7: '	282 km (metodologia não informada)',
      descriptionLine8: 'Tempo de recarga: 		5 horas em tomada de 220v',
      descriptionLine9: '0 a 100 km/h: 12,9 s',
      rated: '4.9',
      politic:
        'Idade mínima de 18 anos, carteira de habilitação válida e emitida há mais de 2 anos, não possuir restrições no CPF e cartão de crédito de titularidade própria com limite disponível para o bloqueio caução. Importante: o cartão de crédito do locatário deverá estar válido, dentro do prazo de vencimento, emitido por uma instituição bancária e com limite de crédito disponível para pré-autorização do bloqueio caução. A aprovação do cartão de crédito é de única e exclusiva responsabilidade da locadora. '
    }
  ]

  const params = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    setProduct(allImages[params.id - 1])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params])

  return (
    <div className={styles.appProduct}>
      <div className={styles.bodyProduct}>
        <Navbar />
        <CardProduct key={product.id} imageData={product} />
        <Footer />
      </div>
    </div>
  )
}
