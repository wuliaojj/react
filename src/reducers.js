//合并所有的reducers，并且返回
import {combineReducers} from 'redux';
import {counter} from './index.rudex'
import {auth} from './auth.redux';

export default combineReducers({ counter, auth})