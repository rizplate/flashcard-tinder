import axios from 'axios';

export const FETCH_FLASHCARDS = 'fetch_flashcards';

const ROOT_URL = 'http://serverNameHere.herokuapp.com/'

export function fetchCards() {
  const request = axios.get(`${ROOT_URL}/flashpage`)
  return {
    type: FETCH_FLASHCARDS,
    payload: request
  };
}