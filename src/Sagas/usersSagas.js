import { put, takeEvery, call } from "redux-saga/effects";
import { usersActions } from "../Actions/userActions";
import { searchAllUsers } from "../Services/searchUsers";
import { USERS } from "../Constants/actions";

function *usersHandler() {
    const users = yield call(searchAllUsers);
    yield put(usersActions.cleanStore());
    if( users.status !== 200 ) {
        console.error("La consulta a la API devolviò el còdigo de error " + users.status + ". Intentar haciendo la bùsqueda nuevamente o ponerse en contacto con el desarrollador.");
        return;
    }

    if(users.status >= 500) {
        throw new Error("Error en el servidor. Comunicarse con el desarrollador del frontend y/o administrador de la API.");
    }

    yield put(usersActions.setUsers(users.data.results));
};


export default function *usersWatcher() {
    yield takeEvery(USERS.WILL_SET_USERS, usersHandler);
}; 