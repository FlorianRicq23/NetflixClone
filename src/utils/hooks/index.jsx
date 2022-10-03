import { useContext } from 'react'
import { MyListContext } from '../context'

export function useMyList() {
  const { myList, setMyList } = useContext(MyListContext)
  return { myList, setMyList }
}