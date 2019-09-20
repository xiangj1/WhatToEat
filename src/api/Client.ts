import database from './Firestore'
import auth from './Auth'

interface Dish extends firebase.firestore.DocumentData {
  id: string
  name: string
  tags: string[]
}

interface Client {
  setUid(newUid: string): string
  signIn(email: string, password: string): Promise<string>
  signOut(): Promise<void>
  addDish(dishInfo: Dish): Promise<string>
  removeDish(dishID: string): Promise<void>
  getDishList(): Promise<Dish[]>
  addTag(tag: string): Promise<string>
  getTagList(): Promise<string[]>
}

function Client(): Client {
  const collectionName = 'Dishes'
  let uid = ''

  function setUid(newUid: string): string {
    uid = newUid
    return uid
  }

  async function signIn(email: string, password: string): Promise<string> {
    console.log('signIn')
    setUid(await auth.signIn(email, password))
    return uid
  }

  async function signOut(): Promise<void> {
    console.log('signOut')
    await auth.signOut()
  }

  async function addDish(dishInfo: Dish): Promise<string> {
    console.log('addDish')
    if (!uid) throw Error('User Not Signed In')
    if (!dishInfo.name) throw Error('Dish Name Required')
    return database.addItem(uid, collectionName, dishInfo)
  }

  async function removeDish(dishID: string): Promise<void> {
    console.log('removeDish')
    if (!uid) throw Error('User Not Signed In')
    if (!dishID) throw Error('Dish ID Required')
    return database.removeItem(uid, collectionName, dishID)
  }

  async function getDishList(): Promise<Dish[]> {
    console.log('getDishList')
    if (!uid) throw Error('User Not Signed In')
    const itemList = await database.getItemList(uid, collectionName)
    return itemList.map(({ id, name, tags }: firebase.firestore.DocumentData) => {
      return { id, name, tags }
    })
  }

  async function addTag(tag: string): Promise<string> {
    console.log('addTag')
    if (!uid) throw Error('User Not Signed In')
    if (!tag) throw Error('Tag Required')
    return database.addItem(uid, 'Tags', { id: Date.now(), name: tag })
  }

  async function getTagList(): Promise<string[]> {
    console.log('getTagList')
    if (!uid) throw Error('User Not Signed In')
    const itemList = await database.getItemList(uid, 'Tags')
    return itemList.map(({ name }: firebase.firestore.DocumentData) => {
      return name
    })
  }

  return {
    setUid,
    signIn,
    signOut,
    addDish,
    removeDish,
    getDishList,
    addTag,
    getTagList
  }
}

export default Client
