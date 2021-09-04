export interface AnimationChildrenElements {
  className: string
  xMovement: number
  yMovement: number
}

export const pageLayoutAnimationElements: AnimationChildrenElements[] = [
  {
    className:
      'absolute  w-1/2 h-1/2 -translate-x-1/2 translate-y-1/2 bg-blizzardBlue shadow-lg rounded',
    xMovement: -300,
    yMovement: 0,
  },
  {
    className:
      'absolute -top-4 -left-12 w-1/2 h-1/2 bg-mediumTurquoise shadow-lg rounded',
    xMovement: -300,
    yMovement: -500,
  },
  {
    className:
      'absolute -left-16 top-1/4 w-56 h-96 bg-pinkSherbet shadow-lg rounded',
    xMovement: -300,
    yMovement: 200,
  },
  {
    className:
      'absolute bottom-0 -right-8 w-72 h-96 bg-middleBlueGreen shadow-lg rounded',
    xMovement: 300,
    yMovement: 200,
  },
  {
    className:
      'absolute -top-24 -right-12 w-2/3 h-2/3 bg-powderBlue shadow-lg rounded',
    xMovement: 250,
    yMovement: -450,
  },
  {
    className:
      'absolute top-1/2 transform -translate-y-1/2 -right-8 w-1/3 h-1/2 bg-salmonPink shadow-lg rounded',
    xMovement: 100,
    yMovement: 0,
  },
  {
    className:
      'absolute -bottom-12 -left-8 w-2/3 h-1/2 bg-spanishPink shadow-lg rounded',
    xMovement: -300,
    yMovement: 500,
  },
  {
    className:
      'absolute -top-12 left-0 w-1/2 h-1/2 bg-spanishPink shadow-lg rounded',
    xMovement: -200,
    yMovement: -300,
  },
]
