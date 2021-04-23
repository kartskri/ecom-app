import ShopActionTypes from "./shop.types";
import {convertCollectionsSnapShotToMap, firestore} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});


export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    console.log('2');
    dispatch(fetchCollectionsStart());

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapShotToMap(snapshot);
      console.log(collectionsMap);
      dispatch(fetchCollectionsSuccess(collectionsMap));
    }, err => {
      dispatch(fetchCollectionsFailure(err.message));
    });
  }
};
