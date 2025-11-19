import axios from 'axios'

// In production, API calls will be made to the same domain
// In development, use the full backend URL with /api appended
const apiUrl =`${import.meta.env.VITE_BACKEND_URL}/api` // Development: full URL + /api

export default axios.create({
  baseURL: apiUrl,
  withCredentials: false,
  headers: { 'Content-Type': 'application/json' }
})
