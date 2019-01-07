const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/blog_demo_2', { useNewUrlParser: true })

const Post = require('./models/post')
const User = require('./models/user')





// Post.create({
//     title: 'How to cook the best burger',
//     content: 'blablablabla'
// }, function(err, post){
//     console.log(post);
// })

// Post.create({
//     title: 'How to cook the best burger PART 2',
//     content: 'blablablabla'
// }, function(err, post){
//     User.findOne({email: 'bob@gmail.com'}, function(err, foundUser){
//         if(err){
//             console.log(err);            
//         }else{
//             foundUser.posts.push(post)
//             foundUser.save(function(err, data){
//                 if(err){
//                     console.log(err);
//                 } else {
//                     console.log(data);
//                 }
//             })
//         }
//     })
// })

// Post.create({
//     title: 'How to cook the best burger PART 3',
//     content: 'ofihoruifiorrokeppwwwwwwww'
// }, function(err, post){
//     User.findOne({email: 'bob@gmail.com'}, function(err, foundUser){
//         if(err){
//             console.log(err);            
//         }else{
//             foundUser.posts.push(post)
//             foundUser.save(function(err, data){
//                 if(err){
//                     console.log(err);
//                 } else {
//                     console.log(data);
//                 }
//             })
//         }
//     })
// })

Post.create({
    title: 'How to cook the best burger PART 4',
    content: 'key key key key key key'
}, function(err, post){
    User.findOne({email: 'bob@gmail.com'}, function(err, foundUser){
        if(err){
            console.log(err);            
        }else{
            foundUser.posts.push(post)
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                } else {
                    console.log(data);
                }
            })
        }
    })
})


// User.create({
//     email: 'bob@gmail.com',
//     name: 'Bob Belcher'
// })





// Find user
// Find all posts for that user

// User.findOne({email: 'bob@gmail.com'}).populate('posts').exec(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// })
