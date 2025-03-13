import PocketBase from "pocketbase";
const pb = new PocketBase("http://127.0.0.1:8090");

export default pb;

export async function allFilmsSortedByDate() {
    return await pb.collection('films').getFullList({
        sort: 'date_projection'
    });
}

export async function allActivitiesSortedByDate() {
    return await pb.collection('activitiees').getFullList({
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
    return await pb.collection('activitiees').getOne(id);
}

export async function getInvitesById(id) {
    return await pb.collection('invites').getOne(id);
}

export async function getActivitiesByAnimatorId(invitesId) {
    return await pb.collection('activitiees').getFullList({
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

    return await pb.collection('activities').getFullList({
        filter: `animator = '${animators[0].id}'`
    });
}

export async function addOrUpdateGuest(guestData) {
    if (guestData.id) {
        const updatedGuest = await pb.collection('Guests').update(guestData.id, guestData);
        return updatedGuest;
    }
    const newGuest = await pb.collection('Guests').create(guestData);
    return newGuest;
}