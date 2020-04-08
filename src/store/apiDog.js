
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
        // async gettingSubBreed () {
        //     let obj  =  Object.keys(list).forEach((prop) => {
        //         list[prop].forEach(element => {
        //         return <p>{element}</p>
        //         });
        //         });
        //         return obj
        // },
        // getBreedImages (breed) {
        //     axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
        // }
    }
}




//         getBreedImages (breed) {
//         axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
//         }
    export default apiDog

