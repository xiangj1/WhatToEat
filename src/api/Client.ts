import database from './Firestore'
import auth from './Auth'

interface Dish extends firebase.firestore.DocumentData {
  id: number
  name: string
  tags: string[]
}

interface Client {
  setUid(newUid: string): string
  signIn(email: string, password: string): Promise<string>
  signOut(): Promise<void>
  addDish(dishInfo: Dish): Promise<string>
  getDishList(): Promise<Dish[]>
}

function Client(): Client {
  const collectionName = 'Dishes'
  let uid = ''

  function setUid(newUid: string): string {
    uid = newUid
    return uid
  }

  async function signIn(email: string, password: string): Promise<string> {
    setUid(await auth.signIn(email, password))
    return uid
  }

  async function signOut(): Promise<void> {
    await auth.signOut()
  }

  async function addDish(dishInfo: Dish): Promise<string> {
    if (!uid) throw Error('User Not Signed In')
    return database.addItem(uid, collectionName, dishInfo)
  }

  async function getDishList(): Promise<Dish[]> {
    if (!uid) throw Error('User Not Signed In')
    const itemList = await database.getItemList(uid, collectionName)
    return itemList.map(({ id, name, tags }: firebase.firestore.DocumentData) => {
      return { id, name, tags }
    })
  }

  return {
    setUid,
    signIn,
    signOut,
    addDish,
    getDishList
  }
}

export default Client
