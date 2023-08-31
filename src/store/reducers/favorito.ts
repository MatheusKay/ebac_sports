import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    adicionarF: (state, action: PayloadAction<Produto>) => {
      const favorito = action.payload
      const index = state.itens.findIndex((p) => p.id === favorito.id)

      if (state.itens.find((p) => p.id === favorito.id)) {
        state.itens.splice(index, 1)
      } else {
        state.itens.push(favorito)
      }
    }
  }
})

export const { adicionarF } = favoritosSlice.actions
export default favoritosSlice.reducer
