import {render} from "./render.js"
import { getAllListByCategory} from "./request.js";


const results = await getAllListByCategory()


render(true, results)