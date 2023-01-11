import * as request from '~/utils/request';
export const search = async function (q, type = 'less') {
    try {
        const res = await request.get(`users/search`, {
            params: {
                q,
                type,
            },
        });
        return res.data;
        // .then((res) => res.json())
    } catch (error) {
        console.log(error);
    }
};
