export enum Colors {
  blue = 'blue',
  purple = 'purple',
  pink = 'pink',
  green = 'green',
  yellow = 'yellow',
  white = 'white',
  black = 'black',
}

export const colors = Object.values(Colors);
export type Color = keyof typeof Colors;
