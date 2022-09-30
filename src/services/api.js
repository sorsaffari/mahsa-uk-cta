import axios from "axios";

export const validatePostCode = async (postCode) => axios.get(`https://api.postcodes.io/postcodes/${postCode}`);

const readConstituencyId = async (postCode) => {
    const postCodeProcessed = postCode.replace(/\s/g, '');
    const constituencyResp = await axios.get(
        `https://members-api.parliament.uk/api/Location/Constituency/Search?searchText=${postCodeProcessed}&skip=0&take=1`,
    );
    const constituencyId = constituencyResp.data.items[0].value.id;
    return constituencyId
}

export const readMp = async (postCode) => {
    const constituencyId = await readConstituencyId(postCode);
    const mpResp = await axios.get(
        `https://members-api.parliament.uk/api/Members/Search?ConstituencyId=${constituencyId}&skip=0&take=1`,
    );
    const mp = mpResp.data.items[0].value;
    return mp;
}