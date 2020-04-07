
import axios from 'axios'

const apiDog = {
    methods: {
       async gettingDogList () {
            try {
                const response = await axios.get('https://dog.ceo/api/breeds/list/all')
                const list = response.data.message

                // console.log(Object.values(list[0]))

                console.log(list)
                return Object.keys(list)
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
//                 const list = response.data
//                 // var subBreed
//                 // for( var dog in list) {
//                 //     subBreed = list[dog]
//                 // }   
//                 // return Object.keys(list)
//                 console.log(response)
//                 return Object.keys(list)
//             }
//             catch (error) {
//                 return error
//             }
//         },
//         getBreedImages (breed) {
//             axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
//         }
//     }
// }

// export default apiDog
