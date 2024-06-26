import axios from 'axios'
import { create } from 'zustand'
import { IData, IFilterStoreState } from './helpers/interfaces'

const URL = '../../../api/mock.json'

export const useFilterStore = create<IFilterStoreState>(set => ({
  // Устанавлеваем начальные значения
  amount: 0,
  filter: '',
  data: [],

  // Устанавливаем сумму
  setAmount: (amount: number) => set(state => ({ ...state, amount })),

  fetchData: async (amount: number, filter: string) => {
    const response = await axios.get(URL)
    const products = response.data.products

    let filteredData = products

    // Проверям есть ли в инпуте сумма, если да то выводим кредиты которые не больше этой суммы
    if (amount > 0) {
      filteredData = products.filter(
        (product: IData) => product.amount <= amount
      )
    }

    // Сортируем массив в зависимости от выбранного фильтра
    if (filter === 'От большего к меньшему') {
      filteredData.sort((a: IData, b: IData) => b.amount - a.amount)
    } else if (filter === 'От меньшего к большему') {
      filteredData.sort((a: IData, b: IData) => a.amount - b.amount)
    }



    // Обновляем состояние с отфильтрованными и отсортированными данными
    set(state => ({
      ...state,
      filter,
      data: filteredData,
    }))
  },

  // Устанавливаем фильтр
  setFilter: (filter: string) => set(state => ({ ...state, filter })),
}))
