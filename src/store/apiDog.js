
import axios from 'axios'

const apiDog = {
    methods: {
       async gettingDogList () {
            try {
                const response = await axios.get('https://dog.ceo/api/breeds/list/all')
                const list = response.data.message

                

                console.log(response)
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


// let subBreeds = []
//       for (const name of state.breedsNames) {
//         if (state.breeds[name].length > 0) {
//           for (let i = 0; i < state.breeds[name].length; i++) {
//             subBreeds.push('' + name + ' ' + state.breeds[name][i])
//           }
//         } else {
//           subBreeds.push(name)
//         }
//       }
//       subBreeds.splice(127, 1)
//       // console.log(subBreeds.length)
//       return subBreeds

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
