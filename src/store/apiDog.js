
import axios from 'axios'

const apiDog = {
    methods: {
       async gettingDogList () {
            try {
                const response = await axios.get('https://dog.ceo/api/breeds/list/all')
                const array = response.data.message
                console.log(array)
                return Object.keys(array)
            }
            catch (error) {
                return error
            }
        },
        getBreedImages (breed) {
            axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
        }
    }
}

export default apiDog


// import axios from 'axios'

// const apiDog = {
//     methods: {
//        async gettingDogList () {
//             try {
//                 const response = await axios.get('https://dog.ceo/api/breeds/list/all')
//                 const array = response.data.message
//                 console.log(array)
//                 return Object.value(array)
//             }
//             catch (error) {
//                 return error
//             }
//         }
//     }
// }

// export default apiDog