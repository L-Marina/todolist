import * as UserActionCreators from './userActionCreator';
import * as TodoActionCreators from './todoActionCreator';


export default {
	...TodoActionCreators,
	...UserActionCreators
}