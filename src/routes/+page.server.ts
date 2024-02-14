import type { PageServerLoad } from './$types';
import { NAME, MESSAGE, MESSAGE_2 } from '$env/static/private'


export const load = (async () => {
    return {name: NAME, message: MESSAGE, message2: MESSAGE_2};
}) satisfies PageServerLoad;