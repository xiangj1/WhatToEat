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

async function removeItem(uid: string, collectionName: string, documentID: string): Promise<void> {
  return firestore
    .collection('Users')
    .doc(uid)
    .collection(collectionName)
    .doc(documentID)
    .delete()
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
      ...document.data(),
      id: document.id
    })
  )

  return itemList
}

export default {
  addItem,
  removeItem,
  getItemList
}
