import firebase from './Firebase'
import 'firebase/firestore'

const firestore = firebase.firestore()

async function addItem(uid: string, collectionName: string, value: firebase.firestore.DocumentData): Promise<string> {
  const docRef: firebase.firestore.DocumentReference = await firestore
    .collection('Users')
    .doc(uid)
    .collection(collectionName)
    .add(value)
  return docRef.id
}

async function getItemList(uid: string, collectionName: string): Promise<firebase.firestore.DocumentData[]> {
  const itemList: firebase.firestore.DocumentData[] = []

  const querySnapshot: firebase.firestore.QuerySnapshot = await firestore
    .collection('Users')
    .doc(uid)
    .collection(collectionName)
    .get()

  querySnapshot.forEach((document: firebase.firestore.QueryDocumentSnapshot) =>
    itemList.push({
      id: document.id,
      ...document.data()
    })
  )

  return itemList
}

export default {
  addItem,
  getItemList
}
