import type { App } from 'vue'
import Button from './components/Button'

import './styles/index.css'

const components = [Button]

const install = (app: App) => {
    components.forEach((component: any) => {
        app.component(component.name, component)
    })
}

export { install, Button }

export default {
    install
}
