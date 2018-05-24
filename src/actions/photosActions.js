import axios from "axios";
import {Server} from '../api_client/apiClient'
import _ from 'lodash'
import moment from 'moment'

import { fetchDateAlbumsPhotoHashList } from './albumsActions'

export function setPhotosFavorite(image_hashes,favorite) {
  return function(dispatch) {
    dispatch({type: "SET_PHOTOS_FAVORITE"});
    Server.post(`photosedit/favorite/`,{image_hashes:image_hashes,favorite:favorite})
      .then((response) => {
        dispatch({type: "SET_PHOTOS_FAVORITE_FULFILLED", payload: {image_hashes:image_hashes,favorite:favorite}})
      })
      .catch((err) => {
        dispatch({type: "SET_PHOTOS_FAVORITE_REJECTED", payload: err})
      })
  }
}

export function setPhotosHidden(image_hashes,hidden) {
  return function(dispatch) {
    dispatch({type: "SET_PHOTOS_HIDDEN"});
    Server.post(`photosedit/hide/`,{image_hashes:image_hashes,hidden:hidden})
      .then((response) => {
        dispatch({type: "SET_PHOTOS_HIDDEN_FULFILLED", payload: {image_hashes:image_hashes,hidden:hidden}})
      })
      .catch((err) => {
        dispatch({type: "SET_PHOTOS_HIDDEN_REJECTED", payload: err})
      })
  }
}



export function scanPhotos() {
  return function(dispatch) {
    dispatch({type: "SCAN_PHOTOS"});
    Server.get(`scanphotos/`)
      .then((response) => {
        dispatch({type: "SCAN_PHOTOS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "SCAN_PHOTOS_REJECTED", payload: err})
      })
  }
}


export function fetchPhotos() {
  return function(dispatch) {
    dispatch({type:"FETCH_PHOTOS"});
    Server.get('photos/list/',{timeout:100000})
      .then((response) => {
        var t0 = performance.now();
        const res = _.keyBy(response.data.results,'image_hash')
        var t1 = performance.now();
        console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
        dispatch({type:"FETCH_PHOTOS_FULFILLED",payload: res})
        // dispatch(fetchDateAlbumsPhotoHashList())
      }) 
      .catch((err) => {
        dispatch({type:"FETCH_PHOTOS_REJECTED",payload: err})        
      })
  }
}

export function fetchPhotoDetail(image_hash) {
  return function(dispatch) {
    dispatch({type:"FETCH_PHOTO_DETAIL"});
    Server.get(`photos/${image_hash}/`,{timeout:100000})
      .then((response) => {
        console.log(response)
        dispatch({type:"FETCH_PHOTO_DETAIL_FULFILLED",payload: response.data})
      }) 
      .catch((err) => {
        console.log(image_hash)
        dispatch({type:"FETCH_PHOTO_DETAIL_REJECTED",payload: err})        
      })
  }
}



export function simpleFetchPhotos() {
  return function(dispatch) {
    dispatch({type:"FETCH_PHOTOS"});
    Server.get('photos/',{timeout:100000})
      .then((response) => {
        dispatch({type:"FETCH_PHOTOS_FULFILLED",payload: response.data.results})
      }) 
      .catch((err) => {
        dispatch({type:"FETCH_PHOTOS_REJECTED",payload: err})        
      })
  }
}




export function fetchNoTimestampPhotoList() {
  return function(dispatch) {
    dispatch({type:"FETCH_NO_TIMESTAMP_PHOTOS"});
    Server.get('photos/notimestamp/list/',{timeout:100000})
      .then((response) => {
        dispatch({type:"FETCH_NO_TIMESTAMP_PHOTOS_FULFILLED",payload: response.data.results})
      }) 
      .catch((err) => {
        dispatch({type:"FETCH_NO_TIMESTAMP_PHOTOS_REJECTED",payload: err})        
      })
  }
}



