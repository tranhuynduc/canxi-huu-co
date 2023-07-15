import { getFirestore, doc, setDoc, collection, addDoc, getDoc, getDocs, where, query } from 'firebase/firestore'
import { firebaseApp } from '../../utils/firebase'
import _ from 'lodash';
import { IReport } from '../../types/reports';
import { generateUniqueID } from '../../utils/common';

const db = getFirestore(firebaseApp)
const reportRef = collection(db, "reports")

export const addReport = async (reportData) => {
  let result = null
  let error = null
  let userId = null
  try {
    const userId = generateUniqueID()
    const reportDoc = doc(reportRef, reportData.name)

    const record = await getDoc(reportDoc);

    if (record.exists()) {
      throw new Error('Nick name đã đc sử dụng')
    }

    result = await setDoc(reportDoc, {
      ...reportData,
      userId
    })
  } catch (e) {
    throw e;
  }

  return { result, error, userId }
}

export const getReports = async () => {
  let result = null
  let error = null
  try {
    result = await getDocs(reportRef)
  } catch (e) {
    error = e
  }

  return { result: result.docs.map(doc => doc.data()), error }
}


export const getReport = async (name) => {
  let result: IReport = null
  let error = null
  try {

    const reportDoc = doc(reportRef, name)
    const response = await getDoc(reportDoc)
    result = response.data();
  } catch (e) {
    error = e
  }

  return { result, error }
}

export const getQuestions = async (name) => {
  let result = null
  let error = null
  try {

    const reportDoc = doc(reportRef, name)
    const response = await getDoc(reportDoc)
    result = response.data();
  } catch (e) {
    error = e
  }

  return { result, error }
}