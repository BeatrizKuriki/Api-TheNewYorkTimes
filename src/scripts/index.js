import {render, renderSelect} from "./render.js"
import { getAllListByCategory} from "./request.js";


const results = await getAllListByCategory()
console.log(results)
render(true, results)