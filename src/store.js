import { createStore } from 'redux'
import audit from './container/Audit/Audit-reducer'

const store = createStore(audit);

export default store