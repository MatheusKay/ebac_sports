import { useGetProdutosQuery } from '../services/api'
import { useSelector } from 'react-redux'

import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'

import { RootReducer } from '../store/index'

const ProdutosComponent = () => {
  const { data: produtos } = useGetProdutosQuery()
  const itensFavoritos = useSelector(
    (state: RootReducer) => state.favorito.itens
  )

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = itensFavoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
