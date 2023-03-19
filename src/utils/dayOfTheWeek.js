function defaultDayOfWeek() {
    const d = new Date();
    let day = d.getDay();
    let dayOfWeek;

    switch (day) {
        case 1: dayOfWeek = 'monday';
        break;
        case 2: dayOfWeek = 'tuesday';
        break;
        case 3: dayOfWeek = 'wednesday'
        break;
        case 4: dayOfWeek = 'thursday';
        break;
        case 5: dayOfWeek = 'friday';
        break;
        case 6: dayOfWeek = 'Saturday';
        break;
        case 7: dayOfWeek = 'Sunday';
        break;
        default: dayOfWeek = 'monday';
    }

    //allow the ability for visiotrs to bookmark specific days
    const hash = window.location.hash.substring(1);
    defaultDayOfWeek = hash ? hash : dayOfWeek;
    console.log('Hash: ' + hash);

    return defaultDayOfWeek;
}

export { defaultDayOfWeek };