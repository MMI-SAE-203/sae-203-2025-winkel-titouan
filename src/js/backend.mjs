import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

export default pb;

export function getImageUrl(record, field) {
    return `http://localhost:8090/api/files/${record.collectionId || 'films'}/${record.id}/${record[field]}`;
}

export async function allFilmsSortedByDate() {
    return await pb.collection('films').getFullList({
        sort: 'date_projection'
    });
}

export async function allActivitiesSortedByDate() {
    return await pb.collection('activitees').getFullList({
        sort: 'date'
    });
}

export async function allGuestsSortedByName() {
    return await pb.collection('invites').getFullList({
        sort: 'nom'
    });
}

export async function getFilmById(id) {
    return await pb.collection('films').getOne(id);
}

export async function getActivityById(id) {
    return await pb.collection('activitees').getOne(id);
}

export async function getInvitesById(id) {
    return await pb.collection('invites').getOne(id);
}

export async function getActivitiesByAnimatorId(invitesId) {
    return await pb.collection('activitees').getFullList({
        filter: `invites = '${invitesId}'`
    });
}

export async function getActivitiesByAnimatorName(invitesName) {
    const animators = await pb.collection('invites').getFullList({
        filter: `nom = '${invitesName}'`
    });

    if (animators.length === 0) {
        return [];
    }

    return await pb.collection('activitees').getFullList({
        filter: `animator = '${animators[0].id}'`
    });
}

export async function addOrUpdateGuest(guestData) {
    if (guestData.id) {
        const updatedGuest = await pb.collection('invites').update(guestData.id, guestData);
        return updatedGuest;
    }
    const newGuest = await pb.collection('invites').create(guestData);
    return newGuest;
}



export async function allFilms() {
    return await pb.collection('films').getFullList({
        fields: 'id,titre,affiche,synopsis,bande_dannonce_duree'
    });
}

export async function oneFilm(id) {
    return await pb.collection('films').getOne(id, {
        fields: 'titre,duree,affiche'
    });
}

export async function allActivities() {
    return await pb.collection('activitees').getFullList({
        fields: 'id,titre,date,date'
    });
}

export async function oneActivity(id) {
    return await pb.collection('activitees').getOne(id, {
        fields: 'id,titre,date,date'
    });
}

export async function allInvites() {
    return await pb.collection('invites').getFullList({
        fields: 'id,nom,photo,biographie'
    });
}

export async function oneInvite(id) {
    return await pb.collection('invites').getOne(id, {
        fields: 'id,nom,photo,biographie'
    });
}