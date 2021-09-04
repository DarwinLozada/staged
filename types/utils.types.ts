export interface Coords {
  x: number
  y: number
}

export type Unsure<T> = {
  [P in keyof T]: T[P] | null
}
