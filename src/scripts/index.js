import {render, renderSelect} from "./render.js"

import { getAllListByCategory} from "./request.js";
import {searchCategoryList} from "./search.js"





const results = await getAllListByCategory()

render(true, results)
searchCategoryList()

renderSelect(["combined-print-and-e-book-fiction","combined-print-and-e-book-nonfiction",'hardcover-fiction','hardcover-nonfiction','trade-fiction-paperback','mass-market-paperback','paperback-nonfiction','e-book-fiction','e-book-nonfiction','hardcover-advice','paperback-advice','advice-how-to-and-miscellaneous','hardcover-graphic-books','paperback-graphic-books','manga','combined-print-fiction','combined-print-nonfiction','chapter-books','childrens-middle-grade','childrens-middle-grade-e-book','childrens-middle-grade-hardcover','childrens-middle-grade-paperback','paperback-books','picture-books','series-books','young-adult','young-adult-e-book','young-adult-hardcover','young-adult-paperback','animals','audio-fiction','audio-nonfiction','business-books','celebrities','crime-and-punishment','culture','education','espionage','expeditions-disasters-and-adventures','fashion-manners-and-customs','food-and-fitness','games-and-activities','graphic-books-and-manga','hardcover-business-books','health','humor','indigenous-americans','relationships','mass-market-monthly','middle-grade-paperback-monthly','paperback-business-books','family','hardcover-political-books','race-and-civil-rights','religion-spirituality-and-faith','science','sports','travel','young-adult-paperback-monthly'])
