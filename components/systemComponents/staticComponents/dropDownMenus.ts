interface RouteType{
    text:string,
    url:string
}

//Primary route
export const primaryRoute:Array<RouteType>=[
    {
        text:"Home",
        url:"/"
    },
    {
        text:"About",
        url:"/about"
    },
    {
        text:"Events",
        url:"/events"
    }
]

//Education route
export const educationRoutes:Array<RouteType>=[
    {
        text:"Colleges",
        url:"/education/colleges"

    },
    {
        text:"IELTS",
        url:"/education/ielts"
    },
    {
        text:"PTE",
        url:"/education/pte"
    }
    ,{
        text:"PY",
        url:"/education/py"
    }
]


//Migration route
export const migrationRoutes:Array<RouteType>=[
    {
        text:"Student",
        url:"/migration/student"

    },
    {
        text:"TR",
        url:"/migration/tr"
    },
    {
        text:"Visitor",
        url:"/migration/visitor"
    }
    ,{
        text:"Partner",
        url:"/migration/partner"
    },
    {
        text:"Occupation",
        url:"/migration/occupation"
    }
]


