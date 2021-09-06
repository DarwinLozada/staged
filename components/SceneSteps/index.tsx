import { SceneComponent } from '../../types/scene.types'

export const FirstStep: SceneComponent = ({ headlineControls }) => {
  return (
    <div className="mt-12">
      <button onClick={() => headlineControls.start({ x: 100 })}>Holaaaaa</button>
      <h2>hey</h2>
    </div>
  )
}
