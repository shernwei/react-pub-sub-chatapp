import axios from 'axios'

export const getUsers = async (component) => {
    let userid = '1'
    let response = await axios({
        method:'POST',
        url:'http://www.mocky.io/v2/5c78aa24300000820549af1c',
        data: {
            'query':`
                {
                    users: getUsersByUserId(user_id: "${userid}"){
                        id
                        name
                        organisation
                    }
                }
            
            `
        }
    })
    component.myState.users = response.data.data.users
}