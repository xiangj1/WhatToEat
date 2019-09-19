export interface Dish extends firebase.firestore.DocumentData {
  id: number
  name: string
  tags: string[]
}

export default interface Client {
  setUid(newUid: string): string
  signIn(email: string, password: string): Promise<string>
  signOut(): Promise<void>
  addDish(dishInfo: Dish): Promise<string>
  getDishList(): Promise<Dish[]>
}
