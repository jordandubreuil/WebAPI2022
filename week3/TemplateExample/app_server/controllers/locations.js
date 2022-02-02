var home = function(req,res){
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
}

var contact = function(req,res){
    res.render('titleTest', {title:"Contact"})
}

var about = function(req,res){
    res.render('titleTest', {title:"About"})
}

var profile = function(req,res){
    res.render('profile', {
        name:"Smooth",
        email:"smooth@neit.edu",
        phonenumber:"4014677744",
        address:"1 New England Tech Blvd East Greenwich RI",
        job:"Game Programmer",
    })
}


module.exports = {
    home,
    contact,
    about,
    profile
}