export interface Dish extends firebase.firestore.DocumentData {
  name: string
  tags: string[]
}

export interface Client {
  setUid(newUid: string): string
  signIn(email: string, password: string): Promise<string>
  signOut(): Promise<void>
  addDish(dishInfo: Dish): Promise<string>
  getDishList(): Promise<Dish[]>
  addTag(tag: string): Promise<string>
  getTagList(): Promise<string[]>
}
