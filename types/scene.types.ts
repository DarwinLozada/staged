import { AnimationControls } from 'framer-motion'
import { FC } from 'react'

export interface SceneComponentProps {
  headlineControls: AnimationControls
}

export type SceneComponent = FC<SceneComponentProps>

export interface SceneStep {
  text: string
  component?: SceneComponent
}
