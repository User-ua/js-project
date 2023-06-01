import { generateMoks } from "./mock.js"
import { renderPinsFromData } from "./pins.js"

export const app = () => {
    const data = generateMoks()
    renderPinsFromData(data)
}

