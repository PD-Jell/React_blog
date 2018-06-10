import { Category } from "../utils/enum";

export interface Post {
  id?: number
  category: Category
  title: string
  context: string
  writer: string
}
