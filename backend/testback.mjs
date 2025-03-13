import {
    allFilmsSortedByDate,
    allActivitiesSortedByDate,
    allGuestsSortedByName,
    getFilmById,
    getActivityById,
    getInvitesById,
    getActivitiesByAnimatorId,
    getActivitiesByAnimatorName,
    addOrUpdateGuest
} from "./backend.mjs";

try {
    const films = await allFilmsSortedByDate();
    console.table(films);
} catch (e) {
    console.error("Error fetching films:", e);
}

try {
    const activities = await allActivitiesSortedByDate();
    console.table(activities);
} catch (e) {
    console.error("Error fetching activities:", e);
}

try {
    const guests = await allGuestsSortedByName();
    console.table(guests);
} catch (e) {
    console.error("Error fetching guests:", e);
}

try {
    const film = await getFilmById("some_film_id");
    console.table(film);
} catch (e) {
    console.error("Error fetching film by ID:", e);
}

try {
    const activity = await getActivityById("some_activity_id");
    console.table(activity);
} catch (e) {
    console.error("Error fetching activity by ID:", e);
}

try {
    const invite = await getInvitesById("some_invite_id");
    console.table(invite);
} catch (e) {
    console.error("Error fetching invite by ID:", e);
}

try {
    const animatorActivities = await getActivitiesByAnimatorId("some_invite_id");
    console.table(animatorActivities);
} catch (e) {
    console.error("Error fetching activities by animator ID:", e);
}

try {
    const animatorActivitiesByName = await getActivitiesByAnimatorName("some_animator_name");
    console.table(animatorActivitiesByName);
} catch (e) {
    console.error("Error fetching activities by animator name:", e);
}

try {
    const newGuest = {
        "nom": "Jean Dupont",
        "email": "jean.dupont@example.com"
    };

    await addOrUpdateGuest(newGuest);
    console.log("Guest added/updated successfully.");
} catch (e) {
    console.error("Error adding/updating guest:", e);
}