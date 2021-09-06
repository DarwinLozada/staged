import { FirstStep } from '../components/SceneSteps'
import { SceneStep } from '../types/scene.types'

const sceneSteps = [
  {
    text: 'Hello.',
  },
  {
    text: 'Have you ever wondered...',
  },
  {
    text: 'Where does creativity come from?',
  },
  {
    text: 'From the soul?',
    component: FirstStep,
  },
] as SceneStep[]

export default sceneSteps
