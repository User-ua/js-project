import { generateMoks } from "./mock.js"
import { renderPinsFromData, pinsHandler } from "./pins.js"

export const app = () => {
    const data = generateMoks()
    renderPinsFromData(data)
}

pinsHandler ()