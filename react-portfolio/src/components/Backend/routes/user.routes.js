
const express = require("express");
const router = express.Router();
const User = require('../models/user.model');
const urlParse = require('url-parse')

// router.route('/')
//     .get((req, res) => {
//         let { query: {name} } = urlParse(req.url, true);

//         User.findOne({name})
//             .then(user => {
//                 if(user) {
//                    res.json({
//                         response: true,
//                         data: user.name, 
//                         id: user._id,
//                         exerciseArr: user.exerciseData
//                     });
//                 } 
//                 else{
//                     res.json({
//                         response: false,
//                         message: 'Invalid Username'
//                     })
//                 }
//             })
//             .catch(err => console.log(err));

//     }); // end of '.route('/')'


router.route('/userMessage')
    .post((req, res) => {
        
        // console.log('req.body ---\n', req.body, req.body.newUser)
        console.log('req.body...MESSAGE --->\n', req.body.newUser)
        User.findOne({'email':req.body.newUser.email})
            .then(user =>{
                // if(!user){
                    let newUser = new User(req.body.newUser)
                     newUser.save()
                    console.log('newUser --->\n',newUser)
                    res.json({
                        response: true,
                        data: newUser,
                        id: newUser._id 
                    })
                    console.log('New user saved!!!',req.body.newUser.name)
                // }
                // else if(user){
                //     console.log('USER already exists in "/signup" route>>>')
                //     res.json({
                //         response: false,
                //         message: 'Invalid Data'
                //     })
                // }
            })
            // })
            .catch(err => console.log(err));

}); // end of '.route('/signup')'

// router.route('/:uid/welcome')
//     .post((req, res) => {
//         let newExercise = req.body.welcomeData
      
//         User.findById(req.params.uid)
//             .then(user => {
//                 if(user) {
//                     user.exerciseData.push(newExercise)
//                     user.save()
//                     res.json({
//                         response: true,
//                         exerciseData: user.exerciseData 
//                     });
//                 } 
//                 else if (!user){
//                     console.log('NO USER in "/welcome" route>>>')
//                     res.json({
//                         response: false,
//                         message: 'Invalid Data'
//                     })
//                 }
//             })
//             .catch(err => console.log(err));

//     }); // end of '.route('//:uid/welcome')'

// router.route('/:uid/exerciseDataDisplay')
//     .get((req, res) => {
        
//         User.findById(req.params.uid)
//             .then(user => {
//                 if(user) {
//                     let frontEndDate = ''
//                     console.log('FOUND USER in "root" route>>>',user);
//                     res.json({
//                         response: true,
//                         data: user.name, 
//                         id: user._id,
//                         exerciseArr: user.exerciseData,

//                     });
//                 } 
//                 else{
//                     res.json({
//                         response: false,
//                         message: 'Invalid Username'
//                     })
//                 }
//             })
//             .catch(err => console.log(err));

//     }) // end of route = '.get('/:uid/exerciseDataDisplay')'

//     .delete((req,res) => {

//         User.findById(req.params.uid)
//         .then(user => {
//             console.log('USER>>>', user)
//             console.log('USER.exerciseData>>>', user.exerciseData)
//             let newExerciseArr = []
//             user.exerciseData.filter(exercise => (
//                 exercise.id !== Number(req.query.exerciseId))
//                 ? newExerciseArr.push(exercise)
//                 : null
//                 )
//             user.exerciseData = newExerciseArr
//             user.save()  
//             console.log('FOUND USER in "delete" route>>>',user);
            
//             res.json({
//                 response: true,
//                 data: user.name, 
//                 id: user._id,
//                 exerciseArr: user.exerciseData,

//             });

//         })
//         .catch(err => console.log(err));

//     }) // end of route = '.delete('/:uid/exerciseDataDisplay')'

// router.route('/:uid/exerciseDataDisplay/editExercise')
//     .put((req, res) => {

//         let editedExercise = req.body.editedData
//         console.log('editedExercise...',editedExercise)

//         User.findById(req.params.uid)
//             .then(user => {
//                 let editedExerciseArr = [editedExercise]

//                 user.exerciseData.filter(exercise => 

//                     (exercise.id !== Number(req.query.exerciseId))
//                     ? editedExerciseArr.push(exercise)
//                     : null
//                 )
//                 user.exerciseData = editedExerciseArr
//                 user.save()  
//                 console.log('FOUND USER in "delete" route>>>',user);
                
//                 res.json({
//                     response: true,
//                     data: user.name, 
//                     id: user._id,
//                     exerciseArr: user.exerciseData,

//                 });

//         })
//         .catch(err => console.log(err));

//     })

module.exports = router