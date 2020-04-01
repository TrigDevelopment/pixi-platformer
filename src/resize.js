/**
 * @param {PIXI.Application} app 
 */
export default function resize (app) {
  return () => {
    app.renderer.view.style.position = "absolute"
    app.renderer.view.style.display = "block"
    app.renderer.autoResize = true
    app.renderer.resize(window.innerWidth, window.innerHeight)
  }
}