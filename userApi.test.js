const axios = require("axios");
jest.mock('axios');
const getUser = require('./userApi');

describe('getUser API', () => {
    it('should successfully retrieve data', async () => {
        const mockedUserData = {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        };
        axios.get.mockResolvedValue({data: mockedUserData});

        const userData = await getUser(); 

        expect(userData).toEqual(mockedUserData); 
    });

    it('handles errors for network issues or user not found', async () => {
        axios.get.mockRejectedValue({ response: { status: 404 } });
        await expect(getUser()).rejects.toThrow('User not found');
    });
});
