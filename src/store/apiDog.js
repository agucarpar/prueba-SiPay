
import axios from 'axios'

const apiDog = {
    methods: {
       async gettingDogList () {
            try {
                const response = await axios.get('https://dog.ceo/api/breeds/list/all')
                const list = response.data.message
                const obj = Object.keys(list)
                return obj
            }
            catch (error) {
                return error
            }
        },
        async getBreedImages (breed) {
            try {
                console.log('breed APIDOG:', breed)
               const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images`)
               const list = response.data.message
               return list
            }
            catch (error) {
                return error
            }
        }
    }
}




//         
    export default apiDog

