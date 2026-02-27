import type { ICar } from "@/entities/Car"
import { useReducer, type ChangeEvent } from "react"

type CarState = Omit<ICar, "id">

type Action =
  | { type: "set_position"; payload: [number, number] }
  | { type: "clear" }
  | {
      [K in keyof CarState]: {
        type: K
        payload: CarState[K]
      }
    }[keyof CarState]

const initialState: CarState = {
  name: "",
  model: "",
  year: 2026,
  color: "",
  price: 3000,
  latitude: 55.753332,
  longitude: 37.621676,
}

function reducer(state: CarState, action: Action) {
  if (action.type === "set_position") {
    return {
      ...state,
      latitude: action.payload[0],
      longitude: action.payload[1],
    }
  }
  if (action.type === "clear") {
    return initialState
  }

  return {
    ...state,
    [action.type]: action.payload,
  }
}

export default function useFormCar() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const changerName = (e: ChangeEvent<HTMLInputElement>) => dispatch({ type: "name", payload: e.target.value })
  const changerModel = (e: ChangeEvent<HTMLInputElement>) => dispatch({ type: "model", payload: e.target.value })
  const changerColor = (e: ChangeEvent<HTMLInputElement>) => dispatch({ type: "color", payload: e.target.value })
  const changerYear = (e: ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value))) return
    if (Number(e.target.value) > 2026 || Number(e.target.value) < 0) return
    dispatch({ type: "year", payload: Number(e.target.value) })
  }
  const changerPrice = (e: ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value))) return
    if (Number(e.target.value) > 1_000_000_000_000 || Number(e.target.value) < 0) return
    dispatch({ type: "price", payload: Number(e.target.value) })
  }
  const setPosition = ([latitude, longitude]: [number, number]) => dispatch({ type: "set_position", payload: [latitude, longitude] })
  const clearForm = () => dispatch({ type: "clear" })

  return { changerName, changerModel, changerColor, changerYear, changerPrice, setPosition, clearForm, ...state }
}
