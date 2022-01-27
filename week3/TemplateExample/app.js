var express = require('express')
var exphbs = require('express-handlebars')
var app = express()

app.engine('hbs', exphbs.engine({
    defaultLayout:'main',
    extname:'hbs',
    helpers:{
        getShortComment(comment){
            if(comment.length < 64){
                return comment
            }
            return comment.substring(0,60) + "..."
        }
    }
}))

app.set('view engine', 'hbs')

app.get('/', function(req,res){
    res.render('home',{
        post:[
            {
                author:'Matt Smooth',
                image:"https://picsum.photos/500/500",
                comments:[
                    'This is the first comment',
                    'Ex anim tempor laboris aute sint cillum proident culpa voluptate aliquip ea laboris. Aliqua Lorem magna anim occaecat consequat. Voluptate nostrud elit irure sunt elit enim. Culpa nulla qui voluptate est sint velit nulla irure velit deserunt qui enim et ex.',
                    'This is the third comment',
                ]
            },
            {
                author:'Jordan Dubreuil',
                image:"https://picsum.photos/500/500?2",
                comments:[
                    'This is the first comment',
                    'This is the second comment',
                    'Lorem laborum mollit dolor irure officia Lorem incididunt ut aute. Magna anim excepteur ad elit ex anim tempor eiusmod dolor eu labore. Fugiat nostrud esse quis in labore aute laborum tempor.',
                ]
            }
        ]
    })
})

app.listen(3000, function(){
    console.log("Listening on port 3000")
})


